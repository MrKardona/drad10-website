import Image from "next/image";
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
    title: "Calidad y excelencia con propósito",
    desc: "Nos esforzamos por ofrecer servicios que realmente marquen la diferencia. Cada decisión, cada proceso y cada detalle están orientados hacia resultados excepcionales y acordes a las necesidades de cada paciente.",
  },
  {
    icon: "⊕",
    title: "Tecnología al servicio de las personas",
    desc: "Creemos en la tecnología como una herramienta, no como un fin. Por eso utilizamos métodos y recursos de última generación que aporten bienestar real y seguro.",
  },
  {
    icon: "○",
    title: "Cercanía que genera confianza",
    desc: "Escuchamos, acompañamos y cuidamos. Construimos relaciones basadas en la honestidad, el respeto y el compromiso, entendiendo que detrás de cada consulta hay una historia, una expectativa y una persona que merece atención personalizada.",
  },
  {
    icon: "↗",
    title: "Innovación con sentido humano",
    desc: "Evolucionamos constantemente, incorporando nuevas técnicas y mejoras que aporten valor real a la experiencia de nuestros pacientes, siempre priorizando la seguridad, la naturalidad y el bienestar integral.",
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
          <p className="section-label mb-6 opacity-0 animate-fade-up">
            NUESTRA HISTORIA
          </p>

          {/* Heading */}
          <h1
            className="mb-6 leading-tight opacity-0 animate-fade-up delay-100"
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
            <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
              con Propósito
            </em>
          </h1>

          {/* Intro paragraph */}
          <p
            className="mx-auto mb-8 leading-relaxed opacity-0 animate-fade-up delay-200"
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
          <div className="flex justify-center mb-14 opacity-0 animate-fade-up delay-300">
            <span className="gold-line" />
          </div>

          {/* Number highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 max-w-2xl mx-auto">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`opacity-0 animate-scale-in delay-${(i + 4) * 100}`}
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
          <div className="opacity-0 animate-slide-right">
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
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
                Fundadora
              </em>
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
                ¡Hola! Soy Daniela Díez, una médica formada en diversos niveles
                de complejidad, con una sólida vocación humana basada en valores
                éticos y morales y un enfoque proactivo y analítico. Me destaco
                por mi liderazgo, fácil adaptación a situaciones nuevas y
                compromiso responsable.
              </p>
              <p>
                Especialista en Medicina Estética y Microimplante Capilar,
                fundé DRAD10 con la visión de ofrecer una experiencia médica
                diferente: cercana, honesta y orientada a resultados naturales
                que potencien la confianza de cada paciente.
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
                Medicina Estética
              </span>
            </div>
          </div>

          {/* Visual — right */}
          <div className="opacity-0 animate-fade-in delay-200">
            <div
              className="w-full relative img-zoom"
              style={{
                aspectRatio: "3 / 4",
                maxWidth: "480px",
                marginLeft: "auto",
                overflow: "hidden",
              }}
            >
              {/* Decorative gold corner — top-left */}
              <div
                className="z-10"
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
              {/* Decorative gold corner — bottom-right */}
              <div
                className="z-10"
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

              {/* Real photo */}
              <Image
                src="/images/dra-daniela.jpg"
                alt="Dra. Daniela Díez — Fundadora DRA.D10"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />

              {/* Badge overlay */}
              <div
                className="z-10"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  backgroundColor: "rgba(28,28,28,0.9)",
                  borderTop: "2px solid #b89a6a",
                  padding: "14px 24px",
                  backdropFilter: "blur(6px)",
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
                    marginTop: "2px",
                  }}
                >
                  Fundadora · DRA.D10
                </p>
              </div>

              {/* (removed placeholder monogram) */}
              <div
                style={{
                  display: "none",
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
          SECCIÓN 3 — Misión / Nuestro Compromiso
      ══════════════════════════════════════════════ */}
      <section
        className="py-28"
        style={{
          background: "linear-gradient(160deg, #1a1816 0%, #2e2e2e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="section-label mb-6 opacity-0 animate-fade-up"
            style={{ color: "#b89a6a" }}
          >
            MISIÓN
          </p>

          <h2
            className="mb-8 leading-tight opacity-0 animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.025em",
            }}
          >
            Nuestro compromiso
          </h2>

          <div className="flex justify-center mb-10 opacity-0 animate-scale-in delay-200">
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "#b89a6a",
              }}
            />
          </div>

          <div
            className="flex flex-col gap-7 opacity-0 animate-fade-up delay-300"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "#888580",
              lineHeight: 1.9,
              textAlign: "left",
            }}
          >
            <p>
              DRAD10 nació con la visión de transformar la experiencia en salud
              y bienestar, integrando atención médica especializada con
              soluciones innovadoras, seguras y centradas en la persona. Con un
              enfoque en innovación, excelencia y servicio, hemos consolidado un
              proyecto sólido que combina experiencia clínica, profesionalismo y
              una profunda vocación por el cuidado humano.
            </p>
            <p>
              Creemos que lo que nos diferencia no es solo lo que hacemos, sino
              cómo lo hacemos: con responsabilidad, ética médica, dedicación y
              un compromiso constante por superar expectativas.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECCIÓN 4 — Filosofía (4 valores)
      ══════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-5 opacity-0 animate-fade-up">
              FILOSOFÍA
            </p>
            <h2
              className="opacity-0 animate-fade-up delay-100"
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
            <div className="flex justify-center mt-5 opacity-0 animate-fade-up delay-200">
              <span className="gold-line" />
            </div>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filosofiaCards.map((card, i) => (
              <div
                key={card.title}
                className={`card-hover opacity-0 animate-fade-up delay-${(i + 3) * 100} p-10`}
                style={{
                  backgroundColor: "#f0e8e2",
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
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: "#1c1c1c",
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
          SECCIÓN 5 — CTA Banner
      ══════════════════════════════════════════════ */}
      <CTABanner />

      {/* ── Footer ── */}
      <FooterPremium />
    </>
  );
}
