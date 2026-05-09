import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  // Reduced from 5 weights to 3 — saves ~100 KB of font data.
  // 300 = body text, 400 = normal, 700 = headings. 500/600 unused.
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",   // render fallback immediately; swap font when loaded
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  // Reduced from 4 weights to 2 — 300/600 not actually used in components.
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "DRA.D10 | Medicina Estética en Medellín",
  description: "Clínica de Medicina Estética y Rejuvenecimiento en El Poblado, Medellín. Tratamientos faciales, capilares, corporales e inyectables. INDIBA Certified. Dra. Daniela Díez.",
  keywords: ["medicina estética medellín", "rejuvenecimiento", "implante capilar", "botox medellín", "INDIBA", "drad10", "dra daniela diez", "el poblado"],
  openGraph: {
    title: "DRA.D10 | Medicina Estética de Alto Nivel",
    description: "Transformamos tu bienestar con tratamientos seguros, naturales y personalizados. Medellín, Colombia.",
    url: "https://drad10.com",
    siteName: "DRA.D10 Medicina Estética",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://drad10.com/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DRA.D10 — Medicina Estética de Alto Nivel · Medellín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRA.D10 | Medicina Estética de Alto Nivel",
    description: "Transformamos tu bienestar con tratamientos seguros, naturales y personalizados. Medellín, Colombia.",
    images: ["https://drad10.com/seo/og-image.jpg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "DRA.D10 | Clínica Quantum",
  description:
    "Clínica de Medicina Estética y Rejuvenecimiento en El Poblado, Medellín. Tratamientos faciales, capilares, corporales e inyectables.",
  url: "https://drad10.com",
  telephone: "+573002440656",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cl. 7 #39-290 Consultorio 516",
    addressLocality: "El Poblado",
    addressRegion: "Medellín",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.2101,
    longitude: -75.5708,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/clinicaquantum.co/",
    "https://www.facebook.com/clinicaquantum.co/",
  ],
  priceRange: "$$",
  image: "https://drad10.com/logo.svg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "227",
    bestRating: "5",
  },
} as const;

// Async layout so we can read the per-request nonce injected by middleware.
// Calling headers() here also opts the entire route tree into dynamic
// rendering, which guarantees every response gets a fresh nonce that matches
// the one in the Content-Security-Policy header.
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // nonce is set by src/middleware.ts; Next.js automatically applies it to
  // its own generated <script> tags when rendering server components.
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col antialiased" {...(nonce ? { "data-nonce": nonce } : {})}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
