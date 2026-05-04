import type { NextConfig } from "next";

const SUPABASE_HOST = "igijeqhyppvpennjdkiu.supabase.co";

// CSP is now generated dynamically in src/middleware.ts so every response
// carries a fresh nonce — this eliminates unsafe-inline and unsafe-eval.
// This static string is kept only as a reference / fallback comment.
//
// const csp = [ ... ] — see middleware.ts

// Content-Security-Policy is intentionally absent here.
// It is set dynamically per-request by src/middleware.ts with a nonce,
// which removes unsafe-inline and unsafe-eval from script-src.
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Block Adobe/Flash cross-domain policy files
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  // Prevent IE from executing downloads in site context
  { key: "X-Download-Options", value: "noopen" },
];

const nextConfig: NextConfig = {
  output: "standalone",

  // ── Image optimization ───────────────────────────────────────────────────
  images: {
    // Serve AVIF first (30-40% smaller than WebP), WebP as fallback.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 7 days to avoid repeated optimization work.
    // Note: quality is set per <Image quality={80}> — not a global config.
    minimumCacheTTL: 604800,
    // Standard responsive breakpoints — matches Tailwind's default screens.
    deviceSizes: [640, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: SUPABASE_HOST,
      },
    ],
  },

  // ── Security headers ─────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
