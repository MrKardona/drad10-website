"use client";

import { useState } from "react";

const faqs: { q: string; a: string }[] = [
  {
    q: "¿Duele el procedimiento?",
    a: "La molestia es mínima. Aplicamos anestésico tópico 20 minutos antes del procedimiento. La mayoría de pacientes lo describen como un leve pinchazo. El proceso completo toma entre 15 y 20 minutos.",
  },
  {
    q: "¿Cuándo veo los resultados?",
    a: "Los primeros efectos se notan entre 3 y 5 días después de la aplicación. El resultado final — suavizado completo de las líneas — se aprecia a los 10-14 días. En sesión de seguimiento confirmamos el resultado.",
  },
  {
    q: "¿Me voy a ver artificial o 'congelada'?",
    a: "No, si está bien aplicada. La toxina botulínica en manos expertas reduce la contracción muscular sin eliminarla. Diseñamos el protocolo para que tu expresión se vea natural, descansada y más joven — nunca inexpresiva.",
  },
  {
    q: "¿Cuánto tiempo dura el efecto?",
    a: "Entre 4 y 6 meses, dependiendo del metabolismo de cada persona, la zona tratada y el nivel de actividad muscular. Con aplicaciones regulares, muchas pacientes notan que el efecto dura cada vez más.",
  },
  {
    q: "¿Cada cuánto debo repetirlo?",
    a: "Generalmente cada 4 a 6 meses, cuando notes que la musculatura empieza a retomar su actividad. No es necesario esperar a que las arrugas vuelvan a ser profundas. La constancia da mejores resultados a largo plazo.",
  },
  {
    q: "¿Es seguro? ¿Tiene efectos secundarios?",
    a: "La toxina botulínica es uno de los tratamientos estéticos más estudiados y seguros del mundo, con más de 30 años de uso clínico. Los efectos secundarios son raros y temporales: ligero enrojecimiento o sensibilidad en el punto de inyección, que desaparece en pocas horas.",
  },
];

export function BotoxFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .faq-inner {
          overflow: hidden;
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(184,154,106,0.15)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.5rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  gap: "1.5rem",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                    fontWeight: 400,
                    color: isOpen ? "#b89a6a" : "#faf8f5",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    transition: "color 0.25s ease",
                  }}
                >
                  {faq.q}
                </span>

                {/* Plus / Minus icon */}
                <span
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    border: "1px solid rgba(184,154,106,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#b89a6a",
                    fontSize: "1.2rem",
                    lineHeight: 1,
                    transition: "background-color 0.25s ease",
                    backgroundColor: isOpen ? "rgba(184,154,106,0.12)" : "transparent",
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/*
                CSS Grid height trick — no layout thrash.
                Outer: animate grid-template-rows 0fr→1fr
                Inner: overflow hidden clips the content at 0fr
              */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <div className="faq-inner">
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      color: "rgba(250,248,245,0.6)",
                      lineHeight: 1.9,
                      paddingBottom: "1.5rem",
                      paddingRight: "2.5rem",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
