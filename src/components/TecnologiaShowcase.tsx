"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

interface Proceso {
  label: string;
  titulo: string;
  tituloEm: string;
  desc: string;
  tags: string[];
  cta: { texto: string; href: string };
  /** TODO: reemplazar por fotos reales del equipo (carpeta 2-tratamientos-y-clinica) */
  img: string;
  imgAlt: string;
}

const procesos: Proceso[] = [
  {
    label: "PASO 01 · DIAGNÓSTICO",
    titulo: "Scanner",
    tituloEm: "D10",
    desc: "Todo empieza con datos, no con suposiciones: el scanner facial analiza tu piel capa por capa — manchas, poros, líneas, hidratación — y genera el mapa exacto de lo que tu piel necesita.",
    tags: ["Diagnóstico", "Precisión", "Personalizado"],
    cta: {
      texto: "Quiero mi diagnóstico",
      href: "https://wa.me/573002440656?text=Hola%2C%20quiero%20un%20diagn%C3%B3stico%20con%20el%20Scanner%20D10",
    },
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop&crop=center",
    imgAlt: "Diagnóstico facial Scanner D10",
  },
  {
    label: "PASO 02 · FACIAL",
    titulo: "INDIBA®",
    tituloEm: "Lifting sin bisturí",
    desc: "Radiofrecuencia 448 kHz que reactiva el colágeno desde adentro: efecto lifting, óvalo definido y piel más firme. Sin agujas, sin incapacidad — sales y sigues tu día.",
    tags: ["Lifting", "Colágeno", "Anti-aging"],
    cta: {
      texto: "Consultar INDIBA facial",
      href: "https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20INDIBA%20facial",
    },
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop&crop=face",
    imgAlt: "INDIBA facial — lifting sin cirugía",
  },
  {
    label: "PASO 03 · CORPORAL",
    titulo: "INDIBA®",
    tituloEm: "Moldeamiento",
    desc: "Calor profundo controlado que moviliza la grasa localizada y reafirma el tejido: abdomen, flancos, brazos y piernas. Resultados visibles desde las primeras sesiones.",
    tags: ["Reafirmante", "Grasa localizada", "Sin cirugía"],
    cta: { texto: "Ver moldeamiento corporal", href: "/servicios/moldeamiento-corporal" },
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop&crop=center",
    imgAlt: "INDIBA corporal — moldeamiento sin cirugía",
  },
  {
    label: "PASO 04 · REGENERACIÓN",
    titulo: "Recuperación",
    tituloEm: "celular",
    desc: "La misma tecnología que usan deportistas de élite: acelera la recuperación post-quirúrgica y de procedimientos — menos inflamación, mejor cicatrización, resultados que se consolidan antes.",
    tags: ["Post-quirúrgico", "Regeneración", "Celular"],
    cta: {
      texto: "Consultar disponibilidad",
      href: "https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20INDIBA%20para%20recuperaci%C3%B3n",
    },
    img: "https://images.unsplash.com/photo-1612908773990-5ac37a0e65c4?w=800&h=600&fit=crop&crop=center",
    imgAlt: "Regeneración celular con INDIBA",
  },
];

export function TecnologiaShowcase() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setIdx((next + procesos.length) % procesos.length);
        setFading(false);
      }, 260);
    },
    [fading]
  );

  const p = procesos[idx];

  const arrowStyle: React.CSSProperties = {
    width: "44px",
    height: "44px",
    border: "1px solid rgba(184,154,106,0.35)",
    backgroundColor: "transparent",
    color: "#b89a6a",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.05rem",
    transition: "background 0.25s, border-color 0.25s",
  };

  return (
    <div
      data-anim="up"
      className="mb-4 overflow-hidden flex flex-col md:flex-row"
      style={{ backgroundColor: "#1c1c1c", minHeight: "480px" }}
    >
      {/* Left: contenido del proceso — 60% */}
      <div
        className="flex flex-col justify-center px-8 py-12 md:px-14 md:py-16"
        style={{ flex: "0 0 60%" }}
      >
        <p
          style={{
            fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            color: "#b89a6a",
            fontWeight: 500,
          }}
          className="uppercase mb-6"
        >
          TECNOLOGÍA INSIGNIA · DRAD10
        </p>

        {/* Contenido que cambia con fade */}
        <div
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.26s ease, transform 0.26s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.58rem",
              letterSpacing: "0.26em",
              color: "rgba(250,248,245,0.4)",
            }}
            className="uppercase mb-3"
          >
            {p.label}
          </p>

          <h3
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
            }}
            className="mb-1"
          >
            {p.titulo}
          </h3>
          <h3
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 400,
              color: "#b89a6a",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
              fontStyle: "italic",
            }}
            className="mb-7"
          >
            {p.tituloEm}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
              color: "rgba(250,248,245,0.6)",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              maxWidth: "44ch",
            }}
            className="mb-7"
          >
            {p.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {p.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  color: "rgba(184,154,106,0.8)",
                  border: "1px solid rgba(184,154,106,0.25)",
                  padding: "0.3rem 0.75rem",
                }}
                className="uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={p.cta.href}
            {...(p.cta.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            style={{
              fontFamily: "var(--font-body)",
              color: "#b89a6a",
              fontSize: "0.875rem",
              letterSpacing: "0.06em",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            className="hover:opacity-80"
          >
            {p.cta.texto} <span>→</span>
          </a>
        </div>

        {/* Navegación */}
        <div className="flex items-center gap-4 mt-10">
          <button onClick={() => goTo(idx - 1)} aria-label="Proceso anterior" style={arrowStyle}>
            ←
          </button>
          <button onClick={() => goTo(idx + 1)} aria-label="Siguiente proceso" style={arrowStyle}>
            →
          </button>

          {/* Indicadores */}
          <div className="flex items-center gap-2 ml-2">
            {procesos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ver proceso ${i + 1}`}
                style={{
                  width: i === idx ? "26px" : "8px",
                  height: "2px",
                  backgroundColor: i === idx ? "#b89a6a" : "rgba(184,154,106,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <span
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "0.95rem",
              color: "rgba(184,154,106,0.5)",
              marginLeft: "auto",
            }}
          >
            {String(idx + 1).padStart(2, "0")}{" "}
            <span style={{ color: "rgba(250,248,245,0.25)" }}>
              / {String(procesos.length).padStart(2, "0")}
            </span>
          </span>
        </div>
      </div>

      {/* Right: imagen del proceso — 40%, clic = siguiente */}
      <button
        onClick={() => goTo(idx + 1)}
        aria-label="Ver siguiente proceso"
        className="relative w-full overflow-hidden"
        style={{
          flex: "0 0 40%",
          minHeight: "300px",
          border: "none",
          padding: 0,
          cursor: "pointer",
          backgroundColor: "#1c1c1c",
        }}
      >
        <Image
          src={p.img}
          alt={p.imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "scale(1.04)" : "scale(1)",
            transition: "opacity 0.26s ease, transform 0.6s ease",
          }}
        />
        <div
          className="absolute inset-y-0 left-0 w-16 pointer-events-none"
          style={{ background: "linear-gradient(to right, #1c1c1c, transparent)" }}
        />
        {/* Hint de interacción */}
        <span
          style={{
            position: "absolute",
            bottom: "14px",
            right: "16px",
            fontFamily: "var(--font-body)",
            fontSize: "0.55rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(250,248,245,0.7)",
            backgroundColor: "rgba(0,0,0,0.45)",
            padding: "6px 12px",
            backdropFilter: "blur(4px)",
          }}
        >
          Siguiente →
        </span>
      </button>
    </div>
  );
}
