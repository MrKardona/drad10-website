import { NavBar } from "@/components/NavBar";
import { CTABanner } from "@/components/CTABanner";
import { FooterPremium } from "@/components/FooterPremium";

// ── Data ────────────────────────────────────────────────────────────────────

const highlights: { value: string; label: string }[] = [
  { value: "5", label: "Años de experiencia" },
  { value: "+500", label: "Pacientes atendidos" },
  { value: "33+", label: "Tratamientos disponibles" },
];

const filosofiaCards: {
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: "✦",
    title: "Calidad y Excelencia",
    desc: "Cada decisión, cada proceso y cada detalle están pensados con propósito. Nos esforzamos para que cada visita sea una experiencia que supere las expectativas y genere resultados reales.",
  },
  {
    icon: "⊕",
    title: "Tecnología Avanzada",
    desc: "Incorporamos equipos de última generación como INDIBA, junto con protocolos clínicos actualizados, para ofrecer tratamientos seguros, eficientes y a la vanguardia de la medicina estética.",
  },
  {
    icon: "❧",
    title: "Personalización Total",
    desc: "Cada paciente es único. Diseñamos planes de tratamiento individualizados que responden a la historia, los objetivos y la piel particular de cada persona que confía en nosotros.",
  },
  {
    icon: "○",
    title: "Resultados Naturales",
    desc: "Creemos en la belleza auténtica. Sin exageraciones ni artificios, trabajamos para realzar la mejor versión de cada paciente, respetando siempre su identidad y sus proporciones naturales.",
  },
];

const valores: {
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: "✦",
    title: "Ética y Transparencia",
    desc: "Actuamos con honestidad en cada consulta, informando con claridad sobre procedimientos, resultados esperados y posibles riesgos. La confianza es nuestra base.",
  },
  {
    icon: "◎",
    title: "Cuidado Genuino",
    desc: "Escuchamos antes de proponer. Cada paciente merece atención íntegra, respetuosa y personalizada, porque detrás de cada consulta hay una persona con una historia que importa.",
  },
  {
    icon: "⟡",
    title: "Mejora Continua",
    desc: "Invertimos en formación constante, tecnología y protocolos actualizados. La excelencia no es un destino; es un compromiso que renovamos cada día.",
  },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function NosotrosPage() {
  return (
    <>
      <NavBar />

      {/* ══════════════════════════════════════════════
          SECCIÓN 1 — Hero Nosotros
      ══════════════════════════════════════════════ */}
      <section
        className="pt-32 pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #faf8f5 0%, #f0e8e2 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Section label */}
          <p className="section-label mb-6 animate-fade-up">
            NUESTRA HISTORIA
          </p>

          {/* Heading */}
          <h1
            className="mb-6 leading-tight animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "#1c1c1c",
              letterSpacing: "-0.03em",
            }}
          >
            Medicina Estética
            <br />
            <em
              style={{
                color: "#b89a6a",
                fontStyle: "italic",
              }}
            >
              con Propósito
            </em>
          </h1>

          {/* Intro paragraph */}
          <p
            className="mx-auto mb-8 leading-relaxed animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "#888580",
              maxWidth: "600px",
              lineHeight: 1.8,
            }}
          >
            Somos una clínica especializada en medicina estética y
            rejuvenecimiento, fundada con la convicción de que la belleza real
            surge de la confianza, el bienestar y el cuidado genuino.
          </p>

          {/* Gold divider */}
          <div className="flex justify-center mb-14 animate-fade-up delay-300">
            <span className="gold-line" />
          </div>

          {/* Number highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 max-w-2xl mx-auto">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`animate-scale-in delay-${(i + 4) * 100}`}
              >
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    fontWeight: 300,
                    color: "#b89a6a",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {h.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#888580",
                  }}
                >
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECCIÓN 2 — Dra. Daniela Díez
      ══════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text — left */}
          <div className="animate-slide-right">
            <p className="section-label mb-6">ESPECIALISTA FUNDADORA</p>

            <h2
              className="mb-5 leading-tight"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.025em",
              }}
            >
              Dra. Daniela Díez
              <br />
              <em style={{ color: "#b89a6a" }}>Fundadora</em>
            </h2>

            <span className="gold-line" />

            <div
              className="mt-7 flex flex-col gap-5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "#888580",
                lineHeight: 1.85,
              }}
            >
              <p>
                La Dra. Daniela Díez es médica con una sólida formación en
                diversos niveles de complejidad y una profunda vocación humana.
                Su práctica está fundamentada en valores éticos y morales, con
                un enfoque proactivo, analítico y centrado en el paciente.
              </p>
              <p>
                Especialista en Medicina Estética y Microimplante Capilar,
                formada en Colombia y Argentina, Daniela fundó DRAD10 con la
                visión de ofrecer una experiencia médica diferente: cercana,
                honesta y orientada a resultados naturales que potencien la
                confianza de cada paciente.
              </p>
              <p>
                Su liderazgo, capacidad de adaptación y compromiso responsable
                con la excelencia clínica han convertido a la clínica en un
                referente de la medicina estética premium en El Poblado,
                Medellín.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                  border: "1px solid rgba(184,154,106,0.4)",
                  padding: "0.4rem 0.9rem",
                }}
              >
                Microimplante Capilar
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                  border: "1px solid rgba(184,154,106,0.4)",
                  padding: "0.4rem 0.9rem",
                }}
              >
                INDIBA Certified
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                  border: "1px solid rgba(184,154,106,0.4)",
                  padding: "0.4rem 0.9rem",
                }}
              >
                Medicina Estética
              </span>
            </div>
          </div>

          {/* Visual — right */}
          <div className="animate-fade-in delay-200">
            {/* Portrait placeholder */}
            <div
              className="w-full relative"
              style={{
                aspectRatio: "3 / 4",
                backgroundColor: "#e0d0c6",
                maxWidth: "480px",
                marginLeft: "auto",
              }}
            >
              {/* Decorative gold corner */}
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "-12px",
                  width: "48px",
                  height: "48px",
                  borderTop: "2px solid #b89a6a",
                  borderLeft: "2px solid #b89a6a",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  width: "48px",
                  height: "48px",
                  borderBottom: "2px solid #b89a6a",
                  borderRight: "2px solid #b89a6a",
                }}
              />

              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#1a1816",
                  padding: "12px 24px",
                  whiteSpace: "nowrap",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "#d4b896",
                    letterSpacing: "0.04em",
                  }}
                >
                  Dra. Daniela Díez
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#888580",
                    textAlign: "center",
                    marginTop: "2px",
                  }}
                >
                  Fundadora
                </p>
              </div>

              {/* Monogram center */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -65%)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(184,154,106,0.18)",
                    border: "1px solid rgba(184,154,106,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "1.6rem",
                      fontWeight: 300,
                      color: "#b89a6a",
                    }}
                  >
                    DD
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#888580",
                  }}
                >
                  Foto próximamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECCIÓN 3 — Nuestra Filosofía
      ══════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#1c1c1c" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p
              className="section-label mb-6 animate-fade-up"
              style={{ color: "#b89a6a" }}
            >
              FILOSOFÍA
            </p>
            <h2
              className="mb-4 leading-tight animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.025em",
              }}
            >
              Nuestro compromiso
              <br />
              <em style={{ color: "#d4b896" }}>contigo</em>
            </h2>
            <div className="flex justify-center mt-6 animate-fade-up delay-200">
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  backgroundColor: "#b89a6a",
                }}
              />
            </div>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filosofiaCards.map((card, i) => (
              <div
                key={card.title}
                className={`card-hover animate-fade-up delay-${(i + 2) * 100} p-10`}
                style={{
                  backgroundColor: "#2e2e2e",
                  borderTop: "2px solid #b89a6a",
                }}
              >
                <span
                  className="block mb-5"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.5rem",
                    color: "#b89a6a",
                    lineHeight: 1,
                  }}
                >
                  {card.icon}
                </span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "#faf8f5",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "#888580",
                    lineHeight: 1.8,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECCIÓN 4 — Valores
      ══════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#f0e8e2" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-5 animate-fade-up">
              NUESTROS VALORES
            </p>
            <h2
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.02em",
              }}
            >
              Lo que nos define
            </h2>
            <div className="flex justify-center mt-5 animate-fade-up delay-200">
              <span className="gold-line" />
            </div>
          </div>

          {/* 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {valores.map((v, i) => (
              <div
                key={v.title}
                className={`text-center animate-fade-up delay-${(i + 3) * 100}`}
              >
                {/* Gold icon */}
                <div
                  className="mx-auto mb-6 flex items-center justify-center"
                  style={{
                    width: "56px",
                    height: "56px",
                    border: "1px solid rgba(184,154,106,0.4)",
                    color: "#b89a6a",
                    fontSize: "1.2rem",
                    fontFamily: "var(--font-display), Georgia, serif",
                  }}
                >
                  {v.icon}
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "#888580",
                    lineHeight: 1.8,
                    maxWidth: "300px",
                    margin: "0 auto",
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECCIÓN 5 — CTA Banner
      ══════════════════════════════════════════════ */}
      <CTABanner />

      {/* ══════════════════════════════════════════════
          SECCIÓN 6 — Footer
      ══════════════════════════════════════════════ */}
      <FooterPremium />
    </>
  );
}
