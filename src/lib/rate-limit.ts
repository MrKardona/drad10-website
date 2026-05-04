/**
 * Distributed rate limiter with in-memory fallback.
 *
 * PRIMARY  — Upstash Redis (@upstash/ratelimit + @upstash/redis)
 *   Requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN env vars.
 *   Counts are shared across ALL serverless instances and regions, making
 *   the limit a globally-enforced hard cap.
 *
 * FALLBACK — in-memory Map
 *   Active when env vars are absent or when Redis is unreachable.
 *   Each serverless instance has its own isolated counter, so the effective
 *   limit per user is (limit × number of warm instances).  This is best-effort
 *   abuse protection only — still better than nothing.
 *
 * To enable Upstash:
 *   1. Create a Redis database at https://console.upstash.com
 *   2. Add the two env vars to .env.local and to Vercel project settings.
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ── Upstash client (optional) ────────────────────────────────────────────────

const upstashRedis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

/** Cache Ratelimit instances so we don't reconstruct them on every request. */
const limiterCache = new Map<string, Ratelimit>();

function getRatelimiter(limit: number, windowMs: number): Ratelimit | null {
  if (!upstashRedis) return null;

  const cacheKey = `${limit}:${windowMs}`;
  if (limiterCache.has(cacheKey)) return limiterCache.get(cacheKey)!;

  const seconds = Math.round(windowMs / 1000);
  const duration = `${seconds} s` as `${number} s`;

  const ratelimit = new Ratelimit({
    redis: upstashRedis,
    limiter: Ratelimit.slidingWindow(limit, duration),
    analytics: false,
  });

  limiterCache.set(cacheKey, ratelimit);
  return ratelimit;
}

// ── In-memory fallback ───────────────────────────────────────────────────────

type Entry = { count: number; resetAt: number };
const store = new Map<string, Entry>();

/** Cap store size to prevent memory exhaustion in long-lived instances. */
const MAX_STORE_SIZE = 5_000;

function pruneExpired(): void {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key);
    if (store.size < MAX_STORE_SIZE / 2) break;
  }
}

function inMemoryLimit(key: string, limit: number, windowMs: number): boolean {
  if (store.size >= MAX_STORE_SIZE) pruneExpired();

  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Returns true if the request is allowed, false if rate-limited.
 *
 * Uses Upstash Redis when configured (globally distributed limit).
 * Falls back to in-memory when Redis is unavailable.
 */
export async function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): Promise<boolean> {
  const limiter = getRatelimiter(limit, windowMs);
  if (limiter) {
    try {
      const { success } = await limiter.limit(key);
      return success;
    } catch {
      // Redis unreachable — degrade gracefully to in-memory
    }
  }

  return inMemoryLimit(key, limit, windowMs);
}

/**
 * Extracts the real client IP from Next.js / Vercel request headers.
 * Vercel sets x-forwarded-for reliably; the first element is the client IP.
 */
export function getIP(req: Request): string {
  const forwarded = (req.headers as Headers).get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}
