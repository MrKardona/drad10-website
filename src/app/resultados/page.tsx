import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { CTABanner } from "@/components/CTABanner";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ResultadosGallery } from "@/components/gallery/ResultadosGallery";

export const metadata: Metadata = {
  title: "Resultados | DRA.D10 — Galería Antes y Después Medellín",
  description:
    "Galería de resultados reales antes y después de tratamientos estéticos en DRA.D10. Facial, corporal, capilar e inyectables. Clínica premium en El Poblado, Medellín.",
  openGraph: {
    title: "Resultados Reales | DRA.D10 Medicina Estética",
    description:
      "Explora nuestra galería de transformaciones reales. Tratamientos faciales, corporales, capilares e inyectables de la mano de la Dra. Daniela Díez en Medellín.",
    url: "https://drad10.com/resultados",
    siteName: "DRA.D10",
    locale: "es_CO",
    type: "website",
  },
};

export default function ResultadosPage() {
  return (
    <>
      <NavBar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(100px, 14vw, 160px)",
          paddingBottom: "clamp(48px, 8vw, 88px)",
          paddingLeft: "clamp(20px, 6vw, 80px)",
          paddingRight: "clamp(20px, 6vw, 80px)",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.58rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#b89a6a",
            marginBottom: "1.25rem",
          }}
        >
          GALERÍA DE TRANSFORMACIONES
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 300,
            color: "#faf8f5",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            margin: "0 0 1.5rem",
          }}
        >
          Resultados que{" "}
          <em style={{ fontStyle: "italic", color: "#b89a6a" }}>hablan</em>
        </h1>

        {/* Gold line */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "linear-gradient(to right, transparent, #b89a6a, transparent)",
            margin: "0 auto 1.75rem",
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
            color: "rgba(250,248,245,0.5)",
            lineHeight: 1.85,
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          Cada caso refleja una historia de confianza, precisión médica y
          resultados naturales. Desliza el visor para comparar el antes y
          el después.
        </p>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingLeft: "clamp(20px, 6vw, 80px)",
          paddingRight: "clamp(20px, 6vw, 80px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <ResultadosGallery />
      </section>

      <CTABanner />
      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
