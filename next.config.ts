import type { NextConfig } from "next";

const SUPABASE_HOST = "igijeqhyppvpennjdkiu.supabase.co";
// Vercel Analytics y Speed Insights sirven su script desde este host y
// envían las métricas a vitals.vercel-insights.com. Sin ambos en el CSP el
// script no carga y los eventos se quedan encolados en el navegador.
const VERCEL_ANALYTICS = "https://va.vercel-scripts.com";
const VERCEL_VITALS = "https://vitals.vercel-insights.com";

// Static CSP. The previous per-request nonce (src/proxy.ts) forced every
// page into dynamic SSR — one function invocation per pageview and zero CDN
// caching. A static header lets Next prerender the whole site. Trade-off:
// script-src needs 'unsafe-inline' for Next's bootstrap scripts.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${VERCEL_ANALYTICS}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: https://images.unsplash.com https://${SUPABASE_HOST} https://i.ytimg.com`,
  "font-src 'self'",
  `connect-src 'self' https://${SUPABASE_HOST} ${VERCEL_ANALYTICS} ${VERCEL_VITALS}`,
  "frame-src https://www.youtube-nocookie.com",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
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
    // Cache optimized images for 31 days to avoid repeated optimization work
    // (site images rarely change).
    // Note: quality is set per <Image quality={80}> — not a global config.
    minimumCacheTTL: 2678400,
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
  // El artículo se llamaba "Scanner D10", una denominación que no corresponde
  // a ningún equipo de la clínica. Se conserva la URL vieja con un 301.
  async redirects() {
    return [
      {
        source: "/blog/scanner-d10-indiba",
        destination: "/blog/indiba-radiofrecuencia",
        permanent: true,
      },
    ];
  },
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
