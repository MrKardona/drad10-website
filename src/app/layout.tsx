import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { WhatsAppPorPais } from "@/components/WhatsAppPorPais";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Una sola familia para títulos y texto: sobria, clara en celular y lejos del
// serif de "lujo" genérico. Se exponen las dos variables que usan los componentes.
const schibsted = Schibsted_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  telephone: "+573043751975",
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
    "https://www.instagram.com/dra.d10/",
    "https://www.facebook.com/clinicaquantum.co/",
  ],
  priceRange: "$$",
  image: "https://drad10.com/logo.svg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "266",
    bestRating: "5",
  },
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={schibsted.variable}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <ScrollAnimations />
        <WhatsAppPorPais />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
