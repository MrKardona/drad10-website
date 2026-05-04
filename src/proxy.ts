import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPABASE_HOST = "igijeqhyppvpennjdkiu.supabase.co";

/**
 * Next.js 16 Proxy (replaces the deprecated `middleware` convention).
 *
 * Generates a per-request CSP nonce and injects it into both the response
 * header and the forwarded request headers so Next.js applies it to its own
 * bootstrapping scripts automatically.
 *
 * Security improvements over the previous static CSP:
 *  - Removes `unsafe-inline` from script-src — blocks most XSS vectors.
 *  - Removes `unsafe-eval` — GSAP 3.x and Next.js 16 don't need it.
 *  - `strict-dynamic` propagates trust to scripts loaded by nonce'd scripts,
 *    so Next.js dynamic chunk loading works without CDN allowlisting.
 *  - A fresh nonce per request prevents nonce-reuse attacks.
 */
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    `img-src 'self' data: https://images.unsplash.com https://${SUPABASE_HOST} https://i.ytimg.com`,
    "font-src 'self'",
    `connect-src 'self' https://${SUPABASE_HOST}`,
    // Allow YouTube nocookie embeds (hero background video)
    "frame-src https://www.youtube-nocookie.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Forward the nonce to Next.js so it stamps its generated <script> tags.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Set the CSP on the response — this replaces the static header in next.config.ts.
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  // Apply to every route except Next.js internals and static assets.
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
