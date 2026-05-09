"use client";

import { useState, useRef } from "react";

/* ─── Types ─── */
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

/* ─── Data ─── */
const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "¿Los tratamientos duelen?",
    answer:
      "La mayoría de nuestros procedimientos son mínimamente invasivos y se realizan con anestesia tópica cuando es necesario. La sensación varía según el tratamiento, pero nuestros pacientes describen el proceso como muy tolerable. El Scanner D10 INDIBA, por ejemplo, genera una sensación de calor suave y completamente cómoda.",
  },
  {
    id: 2,
    question: "¿Son seguros? ¿Cuáles son los riesgos?",
    answer:
      "Todos nuestros tratamientos son realizados por la Dra. Daniela Díez, médica certificada con formación internacional. Utilizamos tecnología avalada y productos de primera línea. Las complicaciones serias son extremadamente raras cuando los procedimientos se realizan en manos de profesionales calificados. En la valoración inicial evaluamos tu historial médico para asegurarnos de que el tratamiento sea el adecuado para ti.",
  },
  {
    id: 3,
    question: "¿Cuánto tiempo dura la recuperación?",
    answer:
      "Depende del tratamiento. La mayoría de nuestros procedimientos son 'sin tiempo de inactividad' — puedes retomar tus actividades el mismo día. Tratamientos como botox o el Scanner D10 INDIBA no requieren recuperación. Para procedimientos más avanzados como implante capilar o hilos tensores, te explicamos en detalle qué esperar en tu cita de valoración.",
  },
  {
    id: 4,
    question: "¿Cuántas sesiones necesito para ver resultados?",
    answer:
      "Muchos tratamientos muestran resultados desde la primera sesión. El número de sesiones varía: el botox tiene efecto inmediato y dura entre 4 y 6 meses; el Scanner D10 INDIBA generalmente requiere entre 4 y 8 sesiones para resultados óptimos; el implante capilar es un procedimiento único. En tu valoración gratuita diseñamos un plan personalizado según tus objetivos.",
  },
  {
    id: 5,
    question: "¿Cómo sé cuál es el tratamiento indicado para mí?",
    answer:
      "Por eso ofrecemos una cita de valoración sin costo. La Dra. Díez analiza tu caso de forma integral — tu tipo de piel, historial médico, objetivos y presupuesto — y te propone el plan más adecuado. Nunca te recomendamos algo que no necesitas.",
  },
  {
    id: 6,
    question: "¿Puedo combinar varios tratamientos?",
    answer:
      "Sí, y muchas veces es lo más eficiente. Los protocolos combinados dan resultados más completos en menos tiempo. La Dra. Díez es experta en diseñar planes personalizados que maximizan los resultados de forma natural y segura. Todo se decide en la valoración inicial.",
  },
];

/* ─── Accordion Item ─── */
interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(184,154,106,0.2)" }}
      data-anim="up"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group w-full flex items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b89a6a]"
      >
        {/* Question text */}
        <span
          className="font-body text-base leading-snug transition-colors duration-300"
          style={{
            fontFamily: "var(--font-body), DM Sans, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            color: isOpen ? "#b89a6a" : "#1c1c1c",
            letterSpacing: "0.01em",
          }}
        >
          {item.question}
        </span>

        {/* Toggle symbol */}
        <span
          aria-hidden="true"
          className="shrink-0 mt-0.5 select-none transition-all duration-300"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 300,
            fontSize: "1.35rem",
            lineHeight: 1,
            color: isOpen ? "#b89a6a" : "#1c1c1c",
            width: "1.25rem",
            textAlign: "center",
            opacity: isOpen ? 1 : 0.55,
          }}
        >
          {isOpen ? "×" : "+"}
        </span>
      </button>

      {/* Answer — CSS max-height accordion */}
      <div
        ref={answerRef}
        role="region"
        style={{
          maxHeight: isOpen
            ? answerRef.current
              ? `${answerRef.current.scrollHeight}px`
              : "600px"
            : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <p
          className="pb-6 leading-relaxed"
          style={{
            fontFamily: "var(--font-body), DM Sans, sans-serif",
            fontSize: "0.9375rem",
            color: "rgba(28,28,28,0.68)",
            fontWeight: 400,
            maxWidth: "58ch",
            lineHeight: 1.75,
            paddingRight: "2.5rem",
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export function FAQSection() {
  const [openId, setOpenId] = useState<number>(1);

  function handleToggle(id: number) {
    setOpenId((prev) => (prev === id ? -1 : id));
  }

  return (
    <section
      id="faq"
      style={{ backgroundColor: "#faf8f5" }}
      className="py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Two-column grid: left header / right accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">

          {/* ── Left column: section header ── */}
          <div className="lg:sticky lg:top-28" data-anim="up">
            {/* Label */}
            <p className="section-label mb-6">Preguntas Frecuentes</p>

            {/* Heading */}
            <h2
              className="leading-tight tracking-tight mb-0"
              style={{
                fontFamily: "var(--font-display), Cormorant Garamond, Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                color: "#1c1c1c",
                lineHeight: 1.12,
              }}
            >
              Todo lo que{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#b89a6a",
                  fontWeight: 300,
                }}
              >
                necesitas saber
              </em>
            </h2>

            {/* Gold divider */}
            <span
              className="block h-px my-7"
              style={{
                background: "linear-gradient(to right, #b89a6a, transparent)",
                width: "5rem",
              }}
              aria-hidden="true"
            />

            {/* Supporting copy */}
            <p
              style={{
                fontFamily: "var(--font-body), DM Sans, sans-serif",
                fontSize: "0.9375rem",
                color: "rgba(28,28,28,0.58)",
                lineHeight: 1.75,
                maxWidth: "36ch",
                fontWeight: 400,
              }}
            >
              Respondemos las dudas más comunes antes de tu primera cita.
            </p>

            {/* WhatsApp link */}
            <a
              href="https://wa.me/573002440656?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20tratamientos"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-10"
              style={{
                fontFamily: "var(--font-body), DM Sans, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#b89a6a",
                textDecoration: "none",
                transition: "opacity 0.25s",
              }}
            >
              <span>¿Tienes otra pregunta? Escríbenos</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* ── Right column: accordion ── */}
          <div data-anim="up">
            {/* Top border to cap the list */}
            <div
              className="border-t"
              style={{ borderColor: "rgba(184,154,106,0.2)" }}
            />

            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
