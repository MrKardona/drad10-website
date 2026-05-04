import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
  },
};

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
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
