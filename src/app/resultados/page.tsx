import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { CTABanner } from "@/components/CTABanner";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ResultadosGallery } from "@/components/gallery/ResultadosGallery";

export const metadata: Metadata = {
  title: "Resultados | Clínica Quantum — Antes y después en Medellín",
  description:
    "Antes y después reales de Clínica Quantum en El Poblado, Medellín: trasplante capilar, criolipólisis, rinomodelación, labios, perfilado mandibular y más.",
  openGraph: {
    title: "Resultados reales | Clínica Quantum",
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
          <em style={{ fontStyle: "italic", color: "#b89a6a" }}>se notan</em>
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
          Casos reales de pacientes de Clínica Quantum. Buscamos que se note que
          estás mejor, no que te hiciste algo. Arrastra el visor para comparar.
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

        {/* Aviso legal — publicidad en salud */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            lineHeight: 1.7,
            color: "rgba(250,248,245,0.35)",
            maxWidth: "680px",
            margin: "3rem auto 0",
            textAlign: "center",
            borderTop: "1px solid rgba(184,154,106,0.15)",
            paddingTop: "1.5rem",
          }}
        >
          Casos reales de pacientes de Clínica Quantum. Los resultados varían según
          las características de cada persona y todo tratamiento requiere una
          valoración médica previa.
        </p>
      </section>

      <CTABanner />
      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
