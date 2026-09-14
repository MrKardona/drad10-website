"use client";

import { tecnologia } from "@/lib/images";
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
    label: "Paso 01 · Diagnóstico",
    titulo: "Analizador",
    tituloEm: "facial y capilar",
    desc: "Todo empieza con una valoración, no con un catálogo. Leemos tu piel y tu cuero cabelludo a fondo y te decimos con claridad qué necesitas y qué no.",
    tags: ["Diagnóstico", "Valoración médica", "Plan a medida"],
    cta: { texto: "Quiero mi valoración", href: "https://wa.me/573043751975?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20con%20analizador%20facial%20y%20capilar" },
    img: tecnologia.analizador,
    imgAlt: "Dra. Daniela Díez con el analizador capilar de Clínica Quantum",
  },
  {
    label: "Paso 02 · Corporal",
    titulo: "Criolipólisis",
    tituloEm: "Cryonic",
    desc: "Nuestra tecnología estrella para moldear la figura. Congela las células de grasa localizada en una sola sesión, sin cirugía ni incapacidad, y afina medidas.",
    tags: ["Una sesión", "Sin cirugía", "Grasa localizada"],
    cta: { texto: "Consultar criolipólisis", href: "https://wa.me/573043751975?text=Hola%2C%20me%20interesa%20la%20criolip%C3%B3lisis" },
    img: tecnologia.criolipolisis,
    imgAlt: "Criolipólisis Cryonic aplicada en Clínica Quantum",
  },
  {
    label: "Paso 03 · Radiofrecuencia",
    titulo: "INDIBA®",
    tituloEm: "Radiofrecuencia médica",
    desc: "Radiofrecuencia médica para tratamientos faciales, corporales, capilares, de dolor y recuperación post quirúrgica.",
    tags: ["Facial", "Corporal", "Post quirúrgico"],
    cta: { texto: "Consultar INDIBA", href: "https://wa.me/573043751975?text=Hola%2C%20me%20interesa%20INDIBA" },
    img: tecnologia.indiba,
    imgAlt: "Equipo INDIBA de Clínica Quantum",
  },
  {
    label: "Paso 04 · Piel",
    titulo: "Láser CO2",
    tituloEm: "de última tecnología",
    desc: "Renueva la piel en profundidad: mejora cicatrices, marcas de acné, textura, poros y flacidez.",
    tags: ["Cicatrices", "Textura", "Poros"],
    cta: { texto: "Consultar láser CO2", href: "https://wa.me/573043751975?text=Hola%2C%20me%20interesa%20el%20l%C3%A1ser%20CO2" },
    img: tecnologia.laserCO2,
    imgAlt: "Renovación de la piel con láser CO2",
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
            fontSize: "0.8125rem",
            letterSpacing: "0.01em",
            color: "#b89a6a",
            fontWeight: 500,
          }}
          className="mb-6"
        >
          Tecnología insignia · Drad10
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
              fontSize: "0.8125rem",
              letterSpacing: "0.01em",
              color: "rgba(250,248,245,0.4)",
            }}
            className="mb-3"
          >
            {p.label}
          </p>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              color: "#faf8f5",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
            }}
            className="mb-1"
          >
            {p.titulo}
          </h3>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              color: "rgba(250,248,245,0.5)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
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
                  fontSize: "0.8125rem",
                  letterSpacing: "0.01em",
                  color: "rgba(184,154,106,0.8)",
                  border: "1px solid rgba(184,154,106,0.25)",
                  padding: "0.3rem 0.75rem",
                }}
                className=""
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
              letterSpacing: "0.01em",
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
                // La barra visible mide 2 px; el padding agranda el área táctil a 42 px.
                style={{
                  width: i === idx ? "34px" : "16px",
                  height: "42px",
                  padding: "20px 4px",
                  backgroundClip: "content-box",
                  backgroundColor: i === idx ? "#b89a6a" : "rgba(184,154,106,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>

          <span
            style={{
              fontFamily: "var(--font-display), fontWeight: 600, Georgia, serif",
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
            fontSize: "0.8125rem",
            letterSpacing: "0.01em",
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
