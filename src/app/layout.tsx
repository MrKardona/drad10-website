import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
