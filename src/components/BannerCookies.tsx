"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EVENTO_ABRIR, abrirPreferencias, guardarDecision, leerDecision, type Decision } from "@/lib/consentimiento";

// Aviso de cookies: aparece mientras no haya decisión y cuando se pide desde el pie de página.
// «Aceptar» y «Rechazar» del mismo tamaño; el píxel de Meta solo se carga si se acepta.
export function BannerCookies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(leerDecision() === null);
    const abrir = () => setVisible(true);
    window.addEventListener(EVENTO_ABRIR, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR, abrir);
  }, []);

  if (!visible) return null;

  const decidir = (d: Decision) => {
    guardarDecision(d);
    setVisible(false);
  };

  return (
    <section
      aria-label="Aviso de cookies"
      className="fixed left-3 right-3 bottom-3 z-[60] md:left-6 md:right-auto md:bottom-6 md:max-w-md"
      style={{
        backgroundColor: "#1c1c1c",
        border: "1px solid rgba(184,154,106,0.35)",
        padding: "1.25rem 1.4rem",
        boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)",
      }}
    >
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#b89a6a", fontWeight: 600, marginBottom: "0.4rem" }}>Cookies</p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(250,248,245,0.85)", lineHeight: 1.65 }}>
        Usamos cookies y el píxel de Meta para medir nuestros anuncios en Facebook e Instagram y mostrarte publicidad relevante. Solo se
        activan si aceptas.{" "}
        <Link href="/politica-de-privacidad" style={{ color: "#faf8f5", textDecoration: "underline", textUnderlineOffset: "4px" }}>
          Más información
        </Link>
      </p>
      <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
        <button type="button" onClick={() => decidir("rechazado")} className="btn-outline-cream" style={{ flex: 1, fontSize: "0.8125rem", padding: "0.75rem 1rem" }}>
          Rechazar
        </button>
        <button type="button" onClick={() => decidir("aceptado")} className="btn-gold" style={{ flex: 1, fontSize: "0.8125rem", padding: "0.75rem 1rem" }}>
          Aceptar
        </button>
      </div>
    </section>
  );
}

/** Enlace del pie de página para cambiar la decisión. */
export function BotonPreferenciasCookies({ style }: { style?: React.CSSProperties }) {
  return (
    <button type="button" onClick={abrirPreferencias} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", ...style }}>
      Preferencias de cookies
    </button>
  );
}
