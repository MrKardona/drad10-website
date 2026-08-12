import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { CTABanner } from "@/components/CTABanner";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { NosotrosAnimations } from "@/components/NosotrosAnimations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | DRA.D10 — Medicina Estética Medellín",
  description:
    "Conoce a la Dra. Daniela Díez y al equipo de DRA.D10, clínica de medicina estética en El Poblado, Medellín. Más de 20.000 personas atendidas.",
};

// ── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: 5, suffix: "+", label: "Años de experiencia", prefix: "" },
  { value: 20000, suffix: "+", label: "Personas atendidas", prefix: "" },
  { value: 40, suffix: "+", label: "Tratamientos disponibles", prefix: "" },
];

const credentials = [
  {
    year: "2019",
    title: "Médica General",
    institution: "Instituto Universitario de Ciencias de la Salud — Fundación H. A. Barceló",
    country: "Argentina",
  },
  {
    year: "2020",
    title: "Diploma en Medicina Estética",
    institution: "Universidad de Buenos Aires (UBA)",
    country: "Argentina",
  },
  {
    year: "2020",
    title: "Certificación en Toxina Botulínica y Rellenos Dérmicos",
    institution: "Asociación Médica Argentina (AMA)",
    country: "Argentina",
  },
  {
    year: "2021",
    title: "Certificación en Microimplante Capilar FUE",
    institution: "Instituto Argentino de Trasplante Capilar",
    country: "Argentina",
  },
  {
    year: "2022",
    title: "Certificación INDIBA Activ — Radiofrecuencia Profunda",
    institution: "INDIBA Internacional",
    country: "España",
  },
  {
    year: "2022",
    title: "Curso Avanzado en Inyectables Faciales y Estructuración",
    institution: "Sociedad Colombiana de Medicina Estética",
    country: "Colombia",
  },
  {
    year: "2023",
    title: "Especialización en Pediatría",
    institution: "Universidad de Buenos Aires (UBA)",
    country: "Argentina",
  },
  {
    year: "2023",
    title: "Certificación en Zona Íntima y Ginecología Estética",
    institution: "ISAPS — International Society of Aesthetic Plastic Surgery",
    country: "Colombia",
  },
  {
    year: "2024",
    title: "Certificación Scanner D10 — Diagnóstico Cutáneo Avanzado",
    institution: "Quantum Medical Technologies",
    country: "Colombia",
  },
  {
    year: "2024",
    title: "Curso en Tratamientos Quirúrgicos Menores — Otomodelización",
    institution: "Sociedad Colombiana de Cirugía Plástica",
    country: "Colombia",
  },
];

const filosofia = [
  {
    num: "01",
    title: "Calidad con propósito",
    desc: "Cada decisión, proceso y detalle apunta a resultados excepcionales, acordes a las necesidades únicas de cada paciente.",
  },
  {
    num: "02",
    title: "Tecnología al servicio",
    desc: "Utilizamos métodos de última generación como herramienta, no como fin. El resultado es bienestar real y seguro.",
  },
  {
    num: "03",
    title: "Cercanía y confianza",
    desc: "Escuchamos y acompañamos. Construimos relaciones basadas en honestidad, respeto y compromiso genuino.",
  },
  {
    num: "04",
    title: "Innovación humana",
    desc: "Incorporamos nuevas técnicas con valor real, siempre priorizando la seguridad, la naturalidad y el bienestar integral.",
  },
];

const equipo = [
  {
    nombre: "Dra. Daniela Díez",
    cargo: "Fundadora & Directora Médica",
    especialidad: "Medicina Estética · Microimplante Capilar FUE · Zona Íntima",
    bio: "Médica con doble habilitación en Argentina y Colombia. Formada en la Universidad de Buenos Aires, pionera en Medellín en tratamientos de vanguardia con más de 5 años transformando vidas. Certificada en INDIBA, Scanner D10, inyectables avanzados y microimplante capilar.",
    foto: "/images/dra-daniela.jpg",
    initials: "DD",
  },
  {
    nombre: "Esp. en Tratamientos Corporales",
    cargo: "Especialista Corporal",
    especialidad: "INDIBA · Descenso de Peso · Remodelación · Post Quirúrgicos",
    bio: "Especialista con amplia formación en tratamientos no invasivos de remodelación corporal, descenso de peso y recuperación post quirúrgica con tecnología de última generación.",
    foto: "",
    initials: "TC",
  },
  {
    nombre: "Esp. en Tratamientos Faciales",
    cargo: "Esteticista Clínica Senior",
    especialidad: "Limpiezas Faciales · Skincare · Protocolos de Piel · Peeling",
    bio: "Especialista en protocolos faciales de alta complejidad, limpiezas profundas y tratamientos personalizados de cuidado dérmico. Experta en rejuvenecimiento facial natural.",
    foto: "",
    initials: "EF",
  },
  {
    nombre: "Coordinadora de Pacientes",
    cargo: "Experiencia del Paciente",
    especialidad: "Atención Integral · Agendamiento · Seguimiento Post-Tratamiento",
    bio: "Responsable de garantizar una experiencia fluida, cálida y personalizada desde el primer contacto hasta el seguimiento post-tratamiento. El corazón de nuestro equipo.",
    foto: "",
    initials: "CP",
  },
];

const marqueeItems = [
  "Medicina Estética",
  "Microimplante Capilar",
  "INDIBA Activ",
  "Pediatría",
  "Hilos Tensores",
  "Toxina Botulínica",
  "Radiofrecuencia",
  "Medellín · ARG & COL",
  "Dra. Daniela Díez",
  "Clínica Quantum",
];

const pullQuote =
  "Creemos que lo que nos diferencia no es solo lo que hacemos, sino cómo lo hacemos: con responsabilidad, ética médica y un compromiso constante por superar expectativas.";

// ── Page ────────────────────────────────────────────────────────────────────

export default function NosotrosPage() {
  return (
    <>
      <NosotrosAnimations />
      <NavBar />

      {/* ══════════════════════════════════════════════════════
          § 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#faf8f5",
          paddingTop: "clamp(110px, 15vw, 180px)",
          paddingBottom: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          {/* Eyebrow */}
          <p
            className="section-label opacity-0 animate-fade-up"
            style={{ marginBottom: "1.5rem" }}
          >
            NUESTRA HISTORIA
          </p>

          {/* Title */}
          <h1
            className="opacity-0 animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              color: "#1c1c1c",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "2rem",
            }}
          >
            Medicina Estética
            <br />
            <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
              con Propósito
            </em>
          </h1>

          {/* Gold rule */}
          <div
            className="opacity-0 animate-fade-up delay-200"
            style={{
              width: "56px",
              height: "1px",
              background: "linear-gradient(to right, #b89a6a, transparent)",
              marginBottom: "2rem",
            }}
          />

          {/* Intro */}
          <p
            className="opacity-0 animate-fade-up delay-300"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
              color: "#888580",
              lineHeight: 1.85,
              maxWidth: "520px",
              marginBottom: "4rem",
            }}
          >
            Somos una clínica especializada en medicina estética y bienestar
            integral, fundada con la convicción de que la belleza real surge de
            la confianza, el cuidado genuino y la ciencia de vanguardia. Más de
            20.000 personas han transformado su vida con nosotros.
          </p>

          {/* Stats */}
          <div
            className="opacity-0 animate-fade-up delay-400"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              borderTop: "1px solid rgba(28,28,28,0.1)",
              borderLeft: "1px solid rgba(28,28,28,0.1)",
              maxWidth: "680px",
              marginBottom: "5rem",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "2rem 2rem 1.75rem",
                  borderRight: "1px solid rgba(28,28,28,0.1)",
                  borderBottom: "1px solid rgba(28,28,28,0.1)",
                }}
              >
                <p
                  data-counter={s.value}
                  data-suffix={s.suffix}
                  data-prefix={s.prefix}
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                    fontWeight: 300,
                    color: "#b89a6a",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.prefix}{s.value}{s.suffix}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#b0aba6",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Marquee band ── */}
        <div
          style={{
            borderTop: "1px solid rgba(184,154,106,0.18)",
            borderBottom: "1px solid rgba(184,154,106,0.18)",
            backgroundColor: "#f4ede6",
            padding: "14px 0",
            overflow: "hidden",
          }}
        >
          <div className="marquee-track" aria-hidden>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#888580",
                  paddingRight: "3rem",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
                <span style={{ color: "#b89a6a", marginLeft: "1.5rem" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 2 — DRA. DANIELA DÍEZ
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#141414",
          padding: "clamp(72px, 12vw, 140px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 8vw, 96px)",
            alignItems: "center",
          }}
          className="nos-doctor-grid"
        >
          {/* Photo column */}
          <div style={{ position: "relative" }}>
            {/* Gold corner accents */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "-14px",
                width: "44px",
                height: "44px",
                borderTop: "2px solid #b89a6a",
                borderLeft: "2px solid #b89a6a",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-14px",
                right: "-14px",
                width: "44px",
                height: "44px",
                borderBottom: "2px solid #b89a6a",
                borderRight: "2px solid #b89a6a",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            {/* Photo with clip-path reveal */}
            <div
              className="nos-photo-clip img-zoom"
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                clipPath: "inset(0 0 100% 0)",
              }}
            >
              <Image
                src="/images/dra-daniela.jpg"
                alt="Dra. Daniela Díez — Fundadora DRA.D10"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 580px"
                priority
              />
              {/* Name overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "18px 24px",
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 100%)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1rem",
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
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#888580",
                    marginTop: "3px",
                  }}
                >
                  Fundadora · DRA.D10 · ARG &amp; COL
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="nos-stat-card"
              style={{
                position: "absolute",
                top: "50%",
                right: "-32px",
                transform: "translateY(-50%)",
                backgroundColor: "#b89a6a",
                padding: "20px 24px",
                zIndex: 20,
                opacity: 0,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  color: "#1c1c1c",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                5+
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(28,28,28,0.7)",
                  marginTop: "4px",
                }}
              >
                AÑOS
                <br />
                EXP.
              </p>
            </div>
          </div>

          {/* Bio column */}
          <div>
            <p
              data-anim="up"
              className="section-label"
              style={{ color: "#b89a6a", marginBottom: "1.25rem" }}
            >
              ESPECIALISTA FUNDADORA
            </p>

            <h2
              data-anim="up"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Formada para{" "}
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
                transformar
              </em>
            </h2>

            <div
              data-anim="line"
              style={{
                width: "48px",
                height: "1px",
                background: "#b89a6a",
                marginBottom: "1.75rem",
              }}
            />

            <div
              data-anim="up"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "rgba(250,248,245,0.55)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              <p>
                Soy Daniela Díez, médica con doble habilitación en Argentina y
                Colombia, formada en diversos niveles de complejidad con una
                sólida vocación humana basada en valores éticos y morales. Me
                caracterizo por un enfoque proactivo, analítico y un liderazgo
                comprometido con la excelencia clínica.
              </p>
              <p>
                Especialista en Medicina Estética, Pediatría y Microimplante
                Capilar, fundé DRA.D10 con la visión de ofrecer una experiencia
                médica diferente: cercana, honesta y orientada a resultados
                naturales que potencien la confianza de cada paciente en
                Medellín.
              </p>
            </div>

            {/* Credential tags */}
            <div
              data-anim="up"
              style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2.5rem" }}
            >
              {[
                "Medicina Estética",
                "Microimplante Capilar",
                "Pediatría",
                "INDIBA",
                "ARG · COL",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#b89a6a",
                    border: "1px solid rgba(184,154,106,0.35)",
                    padding: "5px 12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div data-anim="up">
              <Link
                href="https://wa.me/573002440656"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.62rem" }}
              >
                AGENDAR CON LA DRA. DANIELA
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile stack override */}
        <style>{`
          @media (max-width: 768px) {
            .nos-doctor-grid { grid-template-columns: 1fr !important; }
            .nos-stat-card { right: 12px !important; top: auto !important; bottom: 140px !important; transform: none !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 3 — FORMACIÓN ACADÉMICA (Timeline)
      ══════════════════════════════════════════════════════ */}
      <section
        className="nos-timeline"
        style={{
          backgroundColor: "#faf8f5",
          padding: "clamp(72px, 12vw, 140px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p data-anim="up" className="section-label" style={{ marginBottom: "1rem" }}>
              FORMACIÓN ACADÉMICA
            </p>
            <h2
              data-anim="up"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
              }}
            >
              Preparación internacional
            </h2>
            <div
              data-anim="line"
              style={{
                width: "48px",
                height: "1px",
                background: "#b89a6a",
                margin: "0 auto",
              }}
            />
          </div>

          {/* Timeline container */}
          <div style={{ position: "relative" }}>
            {/* Vertical line (GSAP scrub) */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "rgba(184,154,106,0.18)",
                transform: "translateX(-50%)",
              }}
              className="hidden-mobile"
            >
              <div
                className="nos-timeline-line"
                style={{
                  width: "1px",
                  height: "100%",
                  background: "linear-gradient(to bottom, #b89a6a, rgba(184,154,106,0.3))",
                  transformOrigin: "top center",
                  transform: "scaleY(0)",
                }}
              />
            </div>

            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {credentials.map((cred, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={`${cred.year}-${i}`}
                    data-anim={isLeft ? "left" : "right"}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 32px 1fr",
                      gap: 0,
                      alignItems: "center",
                    }}
                    className="timeline-row"
                  >
                    {/* Left cell */}
                    <div
                      style={{
                        paddingRight: "2rem",
                        textAlign: isLeft ? "right" : "left",
                        gridColumn: isLeft ? 1 : 3,
                        gridRow: 1,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display), Georgia, serif",
                          fontSize: "clamp(3rem, 5vw, 4.5rem)",
                          fontWeight: 300,
                          color: "rgba(184,154,106,0.18)",
                          lineHeight: 1,
                          letterSpacing: "-0.04em",
                          display: "block",
                          marginBottom: "4px",
                        }}
                      >
                        {cred.year}
                      </span>
                      {isLeft && (
                        <div
                          style={{
                            backgroundColor: "#f4ede6",
                            border: "1px solid rgba(184,154,106,0.18)",
                            borderRight: "3px solid #b89a6a",
                            padding: "16px 20px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "var(--font-display), Georgia, serif",
                              fontSize: "1rem",
                              fontWeight: 400,
                              color: "#1c1c1c",
                              marginBottom: "4px",
                            }}
                          >
                            {cred.title}
                          </p>
                          <p
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.75rem",
                              color: "#888580",
                              lineHeight: 1.6,
                              marginBottom: "8px",
                            }}
                          >
                            {cred.institution}
                          </p>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.55rem",
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "#b89a6a",
                              border: "1px solid rgba(184,154,106,0.3)",
                              padding: "2px 8px",
                            }}
                          >
                            {cred.country}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gridColumn: 2,
                        gridRow: 1,
                        zIndex: 2,
                      }}
                      className="timeline-dot"
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: "#b89a6a",
                          boxShadow: "0 0 0 4px rgba(184,154,106,0.12), 0 0 0 8px rgba(184,154,106,0.05)",
                        }}
                      />
                    </div>

                    {/* Right cell */}
                    <div
                      style={{
                        paddingLeft: "2rem",
                        textAlign: isLeft ? "right" : "left",
                        gridColumn: isLeft ? 3 : 1,
                        gridRow: 1,
                      }}
                    >
                      {!isLeft && (
                        <>
                          <span
                            style={{
                              fontFamily: "var(--font-display), Georgia, serif",
                              fontSize: "clamp(3rem, 5vw, 4.5rem)",
                              fontWeight: 300,
                              color: "rgba(184,154,106,0.18)",
                              lineHeight: 1,
                              letterSpacing: "-0.04em",
                              display: "block",
                              marginBottom: "4px",
                            }}
                          >
                            {cred.year}
                          </span>
                          <div
                            style={{
                              backgroundColor: "#f4ede6",
                              border: "1px solid rgba(184,154,106,0.18)",
                              borderLeft: "3px solid #b89a6a",
                              padding: "16px 20px",
                            }}
                          >
                            <p
                              style={{
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontSize: "1rem",
                                fontWeight: 400,
                                color: "#1c1c1c",
                                marginBottom: "4px",
                              }}
                            >
                              {cred.title}
                            </p>
                            <p
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.75rem",
                                color: "#888580",
                                lineHeight: 1.6,
                                marginBottom: "8px",
                              }}
                            >
                              {cred.institution}
                            </p>
                            <span
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.55rem",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "#b89a6a",
                                border: "1px solid rgba(184,154,106,0.3)",
                                padding: "2px 8px",
                              }}
                            >
                              {cred.country}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .hidden-mobile { display: none !important; }
            .timeline-dot { display: none !important; }
            .timeline-row {
              grid-template-columns: 1fr !important;
            }
            .timeline-row > div {
              grid-column: 1 !important;
              grid-row: auto !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              text-align: left !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 4 — PULL QUOTE (Misión)
      ══════════════════════════════════════════════════════ */}
      <section
        className="nos-quote"
        style={{
          backgroundColor: "#141414",
          padding: "clamp(80px, 14vw, 160px) clamp(24px, 8vw, 120px)",
          textAlign: "center",
        }}
      >
        {/* Gold rule top */}
        <div
          data-anim="scale"
          style={{
            width: "1px",
            height: "56px",
            background: "linear-gradient(to bottom, transparent, #b89a6a)",
            margin: "0 auto 3rem",
          }}
        />

        {/* Large open-quote glyph */}
        <div
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(5rem, 12vw, 10rem)",
            fontWeight: 300,
            color: "rgba(184,154,106,0.12)",
            lineHeight: 0.6,
            marginBottom: "2.5rem",
            userSelect: "none",
          }}
        >
          &ldquo;
        </div>

        {/* Quote text — each word gets animated */}
        <blockquote
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#faf8f5",
            letterSpacing: "-0.02em",
            lineHeight: 1.55,
            maxWidth: "760px",
            margin: "0 auto 3rem",
          }}
        >
          {pullQuote.split(" ").map((word, i) => (
            <span
              key={i}
              className="nos-quote-word"
              style={{ display: "inline-block", marginRight: "0.28em", opacity: 0 }}
            >
              {word}
            </span>
          ))}
        </blockquote>

        {/* Attribution */}
        <div
          data-anim="up"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div style={{ width: "32px", height: "1px", backgroundColor: "#b89a6a" }} />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#b89a6a",
            }}
          >
            DRA. DANIELA DÍEZ · FUNDADORA DRA.D10
          </span>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#b89a6a" }} />
        </div>

        {/* Gold rule bottom */}
        <div
          data-anim="scale"
          style={{
            width: "1px",
            height: "56px",
            background: "linear-gradient(to bottom, #b89a6a, transparent)",
            margin: "3rem auto 0",
          }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════
          § 5 — FILOSOFÍA
      ══════════════════════════════════════════════════════ */}
      <section
        className="nos-filosofia"
        style={{
          backgroundColor: "#faf8f5",
          padding: "clamp(72px, 12vw, 140px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "4rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p data-anim="up" className="section-label" style={{ marginBottom: "0.75rem" }}>
                FILOSOFÍA
              </p>
              <h2
                data-anim="up"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 300,
                  color: "#1c1c1c",
                  letterSpacing: "-0.025em",
                }}
              >
                Lo que nos define
              </h2>
            </div>
            <div
              data-anim="line"
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(to right, #b89a6a, transparent)",
                marginBottom: "8px",
              }}
            />
          </div>

          {/* 4 cards (NosotrosAnimations handles stagger) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              border: "1px solid rgba(184,154,106,0.14)",
            }}
            className="nos-filosofia-grid"
          >
            {filosofia.map((card, i) => (
              <div
                key={card.num}
                className="nos-filosofia-card"
                style={{
                  padding: "2.5rem 2rem",
                  borderRight: i < 3 ? "1px solid rgba(184,154,106,0.14)" : "none",
                  borderTop: "3px solid transparent",
                  transition: "border-color 0.3s ease, background-color 0.3s ease",
                  opacity: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "rgba(184,154,106,0.2)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {card.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
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

        <style>{`
          .nos-filosofia-card:hover { border-top-color: #b89a6a !important; background-color: #f4ede6; }
          @media (max-width: 900px) {
            .nos-filosofia-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .nos-filosofia-grid > div:nth-child(2) { border-right: none !important; }
            .nos-filosofia-grid > div:nth-child(3), .nos-filosofia-grid > div:nth-child(4) {
              border-top: 1px solid rgba(184,154,106,0.14) !important;
            }
          }
          @media (max-width: 560px) {
            .nos-filosofia-grid { grid-template-columns: 1fr !important; }
            .nos-filosofia-grid > div { border-right: none !important; border-top: 1px solid rgba(184,154,106,0.14) !important; }
            .nos-filosofia-grid > div:first-child { border-top: none !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 6 — EQUIPO
      ══════════════════════════════════════════════════════ */}
      <section
        className="nos-equipo"
        style={{
          backgroundColor: "#141414",
          padding: "clamp(72px, 12vw, 140px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              data-anim="up"
              className="section-label"
              style={{ color: "#b89a6a", marginBottom: "1rem" }}
            >
              NUESTRO EQUIPO
            </p>
            <h2
              data-anim="up"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Profesionales{" "}
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>dedicadas a ti</em>
            </h2>
            <p
              data-anim="up"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "rgba(250,248,245,0.4)",
                maxWidth: "500px",
                margin: "0 auto 1.5rem",
                lineHeight: 1.85,
              }}
            >
              Un equipo con vocación, experiencia y calidez humana, comprometido
              con los más altos estándares clínicos de medicina estética.
            </p>
            <div
              data-anim="line"
              style={{
                width: "48px",
                height: "1px",
                background: "#b89a6a",
                margin: "0 auto",
              }}
            />
          </div>

          {/* Team cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              backgroundColor: "rgba(184,154,106,0.12)",
              marginBottom: "3px",
            }}
            className="nos-equipo-grid"
          >
            {equipo.map((persona, i) => (
              <div
                key={i}
                className="nos-team-card"
                style={{
                  backgroundColor: "#1a1a1a",
                  overflow: "hidden",
                  opacity: 0,
                }}
              >
                {/* Photo / Avatar */}
                <div
                  className="img-zoom"
                  style={{
                    aspectRatio: "3 / 4",
                    position: "relative",
                    backgroundColor: "#222",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {/* Gold top accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#b89a6a",
                      zIndex: 5,
                    }}
                  />

                  {persona.foto ? (
                    <Image
                      src={persona.foto}
                      alt={persona.nombre}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        background:
                          "radial-gradient(ellipse at center, #2a2a2a 0%, #181818 100%)",
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(184,154,106,0.08)",
                          border: "1px solid rgba(184,154,106,0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-display), Georgia, serif",
                            fontSize: "1.3rem",
                            fontWeight: 300,
                            color: "#b89a6a",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {persona.initials}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.5rem",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "rgba(184,154,106,0.3)",
                        }}
                      >
                        Próximamente
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "1.25rem 1.5rem 1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#faf8f5",
                      lineHeight: 1.25,
                    }}
                  >
                    {persona.nombre}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#b89a6a",
                    }}
                  >
                    {persona.cargo}
                  </p>
                  <div
                    style={{
                      width: "20px",
                      height: "1px",
                      backgroundColor: "rgba(184,154,106,0.25)",
                      margin: "6px 0",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "rgba(250,248,245,0.38)",
                      lineHeight: 1.7,
                    }}
                  >
                    {persona.bio}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      color: "rgba(184,154,106,0.4)",
                      marginTop: "10px",
                      paddingTop: "10px",
                      borderTop: "1px solid rgba(184,154,106,0.08)",
                    }}
                  >
                    {persona.especialidad}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div
            data-anim="up"
            style={{
              marginTop: "3rem",
              padding: "2.5rem 3rem",
              border: "1px solid rgba(184,154,106,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
              backgroundColor: "rgba(184,154,106,0.04)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                  marginBottom: "6px",
                }}
              >
                CLÍNICA QUANTUM · MEDELLÍN
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                  fontWeight: 300,
                  color: "#faf8f5",
                  letterSpacing: "-0.02em",
                }}
              >
                Un equipo, una visión
              </p>
            </div>
            <Link
              href="https://wa.me/573002440656"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "0.62rem" }}
            >
              AGENDAR CITA
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .nos-equipo-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .nos-equipo-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <CTABanner />
      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
