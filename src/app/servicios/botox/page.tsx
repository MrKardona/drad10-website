import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BotoxFAQ } from "@/components/servicios/BotoxFAQ";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Botox en Medellín | DRA.D10 — Toxina Botulínica Natural",
  description:
    "Toxina Botulínica aplicada con precisión médica en El Poblado, Medellín. Resultados naturales sin cara congelada. Valoración gratuita con la Dra. Daniela Díez. Agenda hoy.",
  keywords: [
    "botox medellín",
    "toxina botulínica medellín",
    "botox natural medellín",
    "botox el poblado",
    "dra daniela diez botox",
    "medicina estética medellín",
  ],
  openGraph: {
    title: "Botox Natural en Medellín | DRA.D10",
    description:
      "Rejuvenece tu expresión sin perder naturalidad. Toxina Botulínica certificada en El Poblado, Medellín. Valoración gratuita.",
    url: "https://drad10.com/servicios/botox",
    siteName: "DRA.D10",
    locale: "es_CO",
    type: "website",
  },
};

// ── Data ────────────────────────────────────────────────────────────────────

const zonas = [
  {
    icon: "⌀",
    label: "Frente",
    desc: "Líneas horizontales de expresión suavizadas sin perder movimiento natural.",
  },
  {
    icon: "↕",
    label: "Entrecejo",
    desc: "Líneas del ceño y arrugas verticales ('código 11'). Efecto de apertura de mirada.",
  },
  {
    icon: "◎",
    label: "Patas de gallo",
    desc: "Líneas en el contorno exterior del ojo. Resultado limpio y juvenil.",
  },
  {
    icon: "↑",
    label: "Lifting de cejas",
    desc: "Elevación no quirúrgica del arco de ceja. Abre y define la mirada.",
  },
  {
    icon: "≈",
    label: "Bunny lines",
    desc: "Líneas en el dorso nasal al sonreír. Tratamiento de detalle de alta precisión.",
  },
  {
    icon: "⌇",
    label: "Hiperhidrosis",
    desc: "Control de la sudoración excesiva en axilas, manos y pies. Duración de hasta 8 meses.",
  },
];

const pasos = [
  {
    num: "01",
    title: "Valoración gratuita",
    desc: "Analizamos tu rostro, el estado muscular y diseñamos un protocolo 100% personalizado. Sin compromiso. Sin presión.",
    detail: "~30 min · Presencial",
  },
  {
    num: "02",
    title: "Aplicación precisa",
    desc: "Con anestésico tópico previo. Microinyecciones de toxina en los puntos exactos diseñados para ti. Prácticamente indoloro.",
    detail: "15–20 min · Mismo día",
  },
  {
    num: "03",
    title: "Resultados visibles",
    desc: "En 3 a 7 días notas el efecto. A los 14 días el resultado es completo. Seguimiento incluido en tu próxima visita.",
    detail: "3–7 días · 4–6 meses duración",
  },
];

const diferenciadores = [
  {
    num: "01",
    title: "Médica certificada ARG & COL",
    desc: "Doble habilitación médica. No esteticistas — médica con formación en la Universidad de Buenos Aires y certificación en Colombia.",
  },
  {
    num: "02",
    title: "Protocolo personalizado",
    desc: "No hay una fórmula única. Diseñamos cada aplicación según tu anatomía, expresión y objetivos. Nunca un resultado genérico.",
  },
  {
    num: "03",
    title: "Anestesia tópica incluida",
    desc: "Aplicamos crema anestésica antes del procedimiento. Tu comodidad es parte del protocolo, no un extra.",
  },
  {
    num: "04",
    title: "Seguimiento post-tratamiento",
    desc: "A los 14 días revisamos el resultado. Si algo no está perfecto, lo corregimos. Tu satisfacción tiene garantía real.",
  },
];

const reviews = [
  {
    name: "Valentina M.",
    text: "Tenía mucho miedo de quedar con cara congelada. La Dra. Daniela me explicó todo y el resultado fue exactamente lo que quería — natural, descansada, yo misma.",
    stars: 5,
  },
  {
    name: "Camila R.",
    text: "Primera vez en hacerme algo así y superó todas mis expectativas. El proceso fue rápido, casi no dolió y en una semana ya veía la diferencia.",
    stars: 5,
  },
  {
    name: "Isabella T.",
    text: "Llevo 3 aplicaciones con ella y cada vez confío más. Sabe exactamente qué cantidad poner para que se vea bien sin exagerar.",
    stars: 5,
  },
];

const WA = "https://wa.me/573002440656?text=Hola%2C+me+interesa+una+valoraci%C3%B3n+gratuita+para+Toxina+Botul%C3%ADnica";

// ── Page ────────────────────────────────────────────────────────────────────

export default function BotoxPage() {
  return (
    <>
      <WhatsAppButton />

      {/* ══ HEADER MÍNIMO ══════════════════════════════════════════════════ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 5vw, 60px)",
          height: "68px",
          backgroundColor: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(184,154,106,0.12)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "1.15rem",
            fontWeight: 300,
            color: "#faf8f5",
            letterSpacing: "0.12em",
            textDecoration: "none",
          }}
        >
          DRA<span style={{ color: "#b89a6a" }}>.</span>D10
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(250,248,245,0.45)",
              textDecoration: "none",
            }}
          >
            ← Volver
          </Link>
          <Link
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: "0.65rem", padding: "0.65rem 1.4rem" }}
          >
            AGENDAR GRATIS
          </Link>
        </div>
      </header>

      {/* ══ § 1 — HERO ═════════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "100svh",
          backgroundColor: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 clamp(24px, 6vw, 80px) clamp(60px, 10vw, 100px)",
          paddingTop: "68px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1400&h=900&fit=crop&crop=center"
          alt="Tratamiento de toxina botulínica"
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
          priority
          sizes="100vw"
        />

        {/* Grain texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            opacity: 0.04,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 100%)",
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 3, maxWidth: "820px" }}>
          <p
            className="opacity-0 animate-fade-up"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#b89a6a",
              marginBottom: "1.5rem",
            }}
          >
            TOXINA BOTULÍNICA · EL POBLADO, MEDELLÍN
          </p>

          <h1
            className="opacity-0 animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3rem, 7.5vw, 6rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
            }}
          >
            El botox que{" "}
            <em style={{ color: "#b89a6a", fontStyle: "italic" }}>realza</em>,
            <br />
            no congela.
          </h1>

          <p
            className="opacity-0 animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "rgba(250,248,245,0.55)",
              lineHeight: 1.8,
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            Toxina Botulínica aplicada con precisión médica para resultados
            naturales. Tu expresión, mejorada — nunca alterada.
          </p>

          {/* CTA group */}
          <div
            className="opacity-0 animate-fade-up delay-300"
            style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap", marginBottom: "3rem" }}
          >
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "0.65rem" }}
            >
              VALORACIÓN GRATUITA — WHATSAPP
            </Link>
            <a
              href="#proceso"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(250,248,245,0.45)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Conoce el proceso
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="opacity-0 animate-fade-up delay-400"
            style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
          >
            {[
              "Médica certificada ARG & COL",
              "Resultados en 7 días",
              "+8.000 pacientes",
            ].map((badge) => (
              <span
                key={badge}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(184,154,106,0.7)",
                  whiteSpace: "nowrap",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ § 2 — DOLOR / PAIN ═════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#faf8f5", padding: "clamp(72px,12vw,140px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,80px)" }}>
          <div data-anim="up" style={{ marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>
              ¿TE IDENTIFICAS?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.025em",
                maxWidth: "600px",
              }}
            >
              Lo que muchas pacientes sienten
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}> antes de venir</em>
            </h2>
          </div>

          {/* Pain cards — no side-tab borders; hover uses bg tint only */}
          <div
            data-anim="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1px",
              backgroundColor: "rgba(184,154,106,0.12)",
              border: "1px solid rgba(184,154,106,0.12)",
            }}
          >
            {[
              {
                quote: "Me veo más cansada de lo que me siento.",
                desc: "Las líneas de expresión permanentes dan una apariencia de agotamiento constante, incluso cuando estás bien.",
              },
              {
                quote: "Las arrugas ya no desaparecen aunque descanse.",
                desc: "Con el tiempo, las líneas dinámicas se vuelven estáticas. El descanso ya no es suficiente.",
              },
              {
                quote: "Tengo miedo de quedar artificial o congelada.",
                desc: "El miedo más común. Y el más fácil de evitar con la técnica y la dosis correctas.",
              },
              {
                quote: "Nunca he hecho nada y no sé si es para mí.",
                desc: "La valoración gratuita existe exactamente para esto. Sin compromiso, sin presión.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#faf8f5",
                  padding: "2.5rem 2rem",
                  transition: "background-color 0.3s ease",
                }}
                className="pain-card"
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#1c1c1c",
                    lineHeight: 1.4,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "#888580",
                    lineHeight: 1.75,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`.pain-card:hover { background-color: #f0e8e0 !important; }`}</style>
      </section>

      {/* ══ § 3 — SOLUCIÓN ═════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#141414", padding: "clamp(72px,12vw,140px) 0" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 clamp(24px,6vw,80px)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,8vw,96px)",
            alignItems: "center",
          }}
          className="solucion-grid"
        >
          {/* Left — text */}
          <div>
            <p data-anim="up" className="section-label" style={{ color: "#b89a6a", marginBottom: "1rem" }}>
              LA SOLUCIÓN
            </p>
            <h2
              data-anim="up"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Toxina Botulínica:
              <br />
              <em style={{ color: "#b89a6a" }}>sencillo, seguro, probado</em>
            </h2>

            <div
              data-anim="line"
              style={{ width: "48px", height: "1px", background: "#b89a6a", marginBottom: "1.75rem" }}
            />

            <div
              data-anim="up"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "rgba(250,248,245,0.55)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              <p>
                La toxina botulínica actúa bloqueando temporalmente la señal
                nerviosa que contrae los músculos de expresión. El resultado:
                arrugas suavizadas sin perder movilidad ni naturalidad.
              </p>
              <p>
                No es un relleno. No cambia tus rasgos. Solo relaja los músculos
                que forman las líneas de expresión, devolviéndote un aspecto más
                descansado y juvenil — pero siempre tú.
              </p>
            </div>

            {/* Key facts */}
            <div
              data-anim="up"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                backgroundColor: "rgba(184,154,106,0.12)",
                border: "1px solid rgba(184,154,106,0.12)",
              }}
            >
              {[
                { val: "15–20", unit: "min", label: "de aplicación" },
                { val: "3–7", unit: "días", label: "para ver resultados" },
                { val: "4–6", unit: "meses", label: "de duración" },
                { val: "+30", unit: "años", label: "de uso clínico" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{ backgroundColor: "#1a1a1a", padding: "1.25rem 1.5rem" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "1.6rem",
                      fontWeight: 300,
                      color: "#b89a6a",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {stat.val}
                    <span style={{ fontSize: "0.9rem", marginLeft: "4px", color: "rgba(184,154,106,0.6)" }}>
                      {stat.unit}
                    </span>
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(250,248,245,0.35)",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div data-anim="right" style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "3 / 4",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(184,154,106,0.12)",
              }}
              className="img-zoom"
            >
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&h=900&fit=crop&crop=face"
                alt="Resultado natural toxina botulínica"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px 20px",
                  background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#b89a6a",
                  }}
                >
                  RESULTADO NATURAL · SIN SOBRECARGAR
                </span>
              </div>
            </div>
            {/* Gold corner */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                width: "36px",
                height: "36px",
                borderTop: "2px solid #b89a6a",
                borderRight: "2px solid #b89a6a",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .solucion-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ══ § 4 — ZONAS ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#faf8f5", padding: "clamp(72px,12vw,140px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,80px)" }}>
          <div data-anim="up" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>ÁREAS DE TRATAMIENTO</p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.025em",
              }}
            >
              ¿Dónde se{" "}
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>aplica?</em>
            </h2>
          </div>

          <div
            data-anim="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              backgroundColor: "rgba(184,154,106,0.12)",
              border: "1px solid rgba(184,154,106,0.12)",
            }}
            className="zonas-grid"
          >
            {zonas.map((zona) => (
              <div
                key={zona.label}
                style={{
                  backgroundColor: "#faf8f5",
                  padding: "2rem",
                  transition: "background-color 0.3s ease",
                }}
                className="zona-card"
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.6rem",
                    color: "rgba(184,154,106,0.4)",
                    marginBottom: "1rem",
                    lineHeight: 1,
                  }}
                >
                  {zona.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {zona.label}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "#888580",
                    lineHeight: 1.75,
                  }}
                >
                  {zona.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .zona-card:hover { background-color: #f0e8e0 !important; }
          @media (max-width: 640px) { .zonas-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 400px) { .zonas-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ══ § 5 — PROCESO ══════════════════════════════════════════════════ */}
      <section
        id="proceso"
        style={{ backgroundColor: "#0a0a0a", padding: "clamp(72px,12vw,140px) 0" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,80px)" }}>
          <div data-anim="up" style={{ marginBottom: "5rem" }}>
            <p className="section-label" style={{ color: "#b89a6a", marginBottom: "1rem" }}>
              PASO A PASO
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.025em",
              }}
            >
              Así funciona el proceso
            </h2>
          </div>

          {/* Paso cards — no side-tab border; hover uses subtle bg */}
          <div
            data-anim="stagger"
            style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(184,154,106,0.1)" }}
          >
            {pasos.map((paso) => (
              <div
                key={paso.num}
                style={{
                  backgroundColor: "#0a0a0a",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: "2rem",
                  padding: "2.5rem 2rem",
                  alignItems: "start",
                  transition: "background-color 0.3s ease",
                }}
                className="paso-card"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "3.5rem",
                    fontWeight: 300,
                    color: "rgba(184,154,106,0.18)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {paso.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: "#faf8f5",
                      letterSpacing: "-0.015em",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {paso.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "rgba(250,248,245,0.5)",
                      lineHeight: 1.85,
                    }}
                  >
                    {paso.desc}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#b89a6a",
                    border: "1px solid rgba(184,154,106,0.25)",
                    padding: "4px 10px",
                    whiteSpace: "nowrap",
                    alignSelf: "flex-start",
                    marginTop: "4px",
                  }}
                >
                  {paso.detail}
                </span>
              </div>
            ))}
          </div>

          <div data-anim="up" style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "0.65rem" }}
            >
              EMPEZAR CON MI VALORACIÓN
            </Link>
          </div>
        </div>

        <style>{`
          .paso-card:hover { background-color: #0f0f0f !important; }
          @media (max-width: 560px) {
            .paso-card { grid-template-columns: 60px 1fr !important; }
            .paso-detail { display: none !important; }
          }
        `}</style>
      </section>

      {/* ══ § 6 — DIFERENCIADORES — editorial row list ═════════════════════ */}
      {/*
        Breaks the card-grid monotony: each differentiator is a full-width
        horizontal row with a ghost number, title and description.
        Separated by a thin gold-tinted divider — no card boxes.
      */}
      <section style={{ backgroundColor: "#faf8f5", padding: "clamp(72px,12vw,140px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,80px)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "4rem",
            }}
          >
            <div>
              <p data-anim="up" className="section-label" style={{ marginBottom: "0.75rem" }}>
                POR QUÉ ELEGIRNOS
              </p>
              <h2
                data-anim="up"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                  fontWeight: 300,
                  color: "#1c1c1c",
                  letterSpacing: "-0.025em",
                }}
              >
                Lo que nos hace{" "}
                <em style={{ color: "#b89a6a", fontStyle: "italic" }}>diferentes</em>
              </h2>
            </div>
          </div>

          <div data-anim="stagger" style={{ borderTop: "1px solid rgba(184,154,106,0.18)" }}>
            {diferenciadores.map((d) => (
              <div
                key={d.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(60px,8vw,100px) 1fr 2fr",
                  gap: "clamp(1.5rem,4vw,3rem)",
                  padding: "clamp(1.5rem,3vw,2.5rem) 0",
                  borderBottom: "1px solid rgba(184,154,106,0.18)",
                  alignItems: "baseline",
                  transition: "background-color 0.25s ease",
                }}
                className="dif-row"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(2rem,4vw,3rem)",
                    fontWeight: 300,
                    color: "rgba(184,154,106,0.2)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {d.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(1rem,1.8vw,1.2rem)",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "#888580",
                    lineHeight: 1.8,
                  }}
                >
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .dif-row:hover { background-color: #f7f2ec; }
          @media (max-width: 640px) {
            .dif-row { grid-template-columns: 48px 1fr !important; }
            .dif-row p { grid-column: 2 / -1; }
          }
        `}</style>
      </section>

      {/* ══ § 7 — AUTORIDAD / DRA. DANIELA ════════════════════════════════ */}
      <section style={{ backgroundColor: "#141414", padding: "clamp(72px,12vw,140px) 0" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 clamp(24px,6vw,80px)",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "clamp(40px,8vw,80px)",
            alignItems: "center",
          }}
          className="autoridad-grid"
        >
          {/* Photo */}
          <div data-anim="left" style={{ position: "relative" }}>
            <div
              style={{ aspectRatio: "3 / 4", position: "relative", overflow: "hidden" }}
              className="img-zoom"
            >
              <Image
                src="/images/dra-daniela.jpg"
                alt="Dra. Daniela Díez"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "-10px",
                width: "36px",
                height: "36px",
                borderBottom: "2px solid #b89a6a",
                borderLeft: "2px solid #b89a6a",
              }}
            />
          </div>

          {/* Text */}
          <div>
            <p data-anim="up" className="section-label" style={{ color: "#b89a6a", marginBottom: "1rem" }}>
              TU ESPECIALISTA
            </p>
            <h2
              data-anim="up"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.025em",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Dra. Daniela Díez
            </h2>

            <div data-anim="line" style={{ width: "48px", height: "1px", background: "#b89a6a", marginBottom: "1.75rem" }} />

            <p
              data-anim="up"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "rgba(250,248,245,0.55)",
                lineHeight: 1.9,
                marginBottom: "2rem",
                maxWidth: "480px",
              }}
            >
              Médica con doble habilitación en Argentina y Colombia. Especialista
              en Medicina Estética formada en la Universidad de Buenos Aires, con
              certificación de la Asociación Médica Argentina y el Consejo
              Argentino de Ciencias Estéticas.
            </p>

            <div
              data-anim="up"
              style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}
            >
              {["Medicina Estética", "UBA Argentina", "Cert. Colombia", "INDIBA", "+5 años exp"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#b89a6a",
                      border: "1px solid rgba(184,154,106,0.3)",
                      padding: "4px 10px",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div data-anim="up">
              <Link
                href={WA}
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

        <style>{`
          @media (max-width: 768px) { .autoridad-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ══ § 8 — PRUEBA SOCIAL ════════════════════════════════════════════ */}
      {/*
        Break from card-grid: featured large quote + two compact testimonials below.
        No 1px-gap grid trick for the reviews — uses an editorial stacked layout.
      */}
      <section style={{ backgroundColor: "#faf8f5", padding: "clamp(72px,12vw,140px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,80px)" }}>

          {/* Stats row */}
          <div
            data-anim="up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              backgroundColor: "rgba(184,154,106,0.12)",
              border: "1px solid rgba(184,154,106,0.12)",
              marginBottom: "5rem",
            }}
            className="proof-stats"
          >
            {[
              { val: "+8.000", label: "Pacientes atendidas" },
              { val: "5.0★", label: "Rating en Google" },
              { val: "5+", label: "Años de experiencia" },
              { val: "100%", label: "Satisfacción garantizada" },
            ].map((s) => (
              <div
                key={s.label}
                style={{ backgroundColor: "#faf8f5", padding: "2rem 1.5rem", textAlign: "center" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(1.8rem,3vw,2.4rem)",
                    fontWeight: 300,
                    color: "#b89a6a",
                    letterSpacing: "-0.03em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.val}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#b0aba6",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonios header */}
          <div data-anim="up" style={{ marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>TESTIMONIOS</p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.025em",
              }}
            >
              Lo que dicen nuestras pacientes
            </h2>
          </div>

          {/* Featured quote — large, centred, editorial */}
          <div
            data-anim="up"
            style={{
              borderTop: "1px solid rgba(184,154,106,0.2)",
              borderBottom: "1px solid rgba(184,154,106,0.2)",
              padding: "clamp(2rem,5vw,4rem) 0",
              marginBottom: "2rem",
              position: "relative",
            }}
          >
            {/* Decorative opening quote mark */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "1rem",
                left: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(4rem,10vw,8rem)",
                lineHeight: 1,
                color: "rgba(184,154,106,0.1)",
                userSelect: "none",
              }}
            >
              &ldquo;
            </span>
            <div style={{ paddingLeft: "clamp(1rem,4vw,3rem)" }}>
              <p
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.15rem,2.5vw,1.55rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#1c1c1c",
                  lineHeight: 1.6,
                  letterSpacing: "-0.015em",
                  maxWidth: "800px",
                  marginBottom: "1.5rem",
                }}
              >
                {reviews[0].text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#b89a6a", fontSize: "0.85rem", letterSpacing: "2px" }}>
                  {"★".repeat(reviews[0].stars)}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "#888580",
                    letterSpacing: "0.08em",
                  }}
                >
                  {reviews[0].name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(184,154,106,0.5)",
                    border: "1px solid rgba(184,154,106,0.2)",
                    padding: "2px 8px",
                  }}
                >
                  Google
                </span>
              </div>
            </div>
          </div>

          {/* Two secondary testimonials — compact horizontal layout */}
          <div
            data-anim="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(1rem,3vw,2rem)",
            }}
            className="reviews-secondary"
          >
            {reviews.slice(1).map((r) => (
              <div
                key={r.name}
                style={{
                  padding: "1.75rem",
                  backgroundColor: "#f4f1ed",
                }}
              >
                <div style={{ marginBottom: "0.75rem", color: "#b89a6a", fontSize: "0.75rem", letterSpacing: "2px" }}>
                  {"★".repeat(r.stars)}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "0.92rem",
                    fontStyle: "italic",
                    color: "#1c1c1c",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                    letterSpacing: "-0.005em",
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(184,154,106,0.15)",
                      border: "1px solid rgba(184,154,106,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.65rem",
                        color: "#b89a6a",
                      }}
                    >
                      {r.name[0]}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      color: "#888580",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {r.name}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(184,154,106,0.5)",
                      border: "1px solid rgba(184,154,106,0.2)",
                      padding: "2px 6px",
                    }}
                  >
                    Google
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .proof-stats { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .reviews-secondary { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ══ § 9 — FAQ ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#141414", padding: "clamp(72px,12vw,140px) 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(24px,6vw,80px)" }}>
          <div data-anim="up" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ color: "#b89a6a", marginBottom: "1rem" }}>
              PREGUNTAS FRECUENTES
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.025em",
              }}
            >
              Resolvemos tus dudas <em style={{ color: "#b89a6a", fontStyle: "italic" }}>antes</em>
            </h2>
          </div>

          <div data-anim="up">
            <BotoxFAQ />
          </div>

          {/* Still have questions? */}
          <div
            data-anim="up"
            style={{
              marginTop: "3rem",
              padding: "2rem",
              border: "1px solid rgba(184,154,106,0.2)",
              backgroundColor: "rgba(184,154,106,0.04)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "rgba(250,248,245,0.5)",
                marginBottom: "1rem",
                lineHeight: 1.7,
              }}
            >
              ¿Tienes alguna duda específica? En la valoración gratuita resolvemos
              todo en persona antes de cualquier procedimiento.
            </p>
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#b89a6a",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Consultar por WhatsApp
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ § 10 — CTA FINAL ═══════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#0a0a0a",
          padding: "clamp(80px,14vw,160px) clamp(24px,6vw,80px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow — visible at 12% */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "60vw",
            background: "radial-gradient(ellipse at center, rgba(184,154,106,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Gold vertical line */}
          <div
            data-anim="scale"
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, transparent, #b89a6a)",
              margin: "0 auto 2.5rem",
            }}
          />

          <p data-anim="up" className="section-label" style={{ color: "#b89a6a", marginBottom: "1.5rem" }}>
            AGENDA TU VALORACIÓN
          </p>

          <h2
            data-anim="up"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.2rem,6vw,5rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Comienza hoy.
            <br />
            <em style={{ color: "#b89a6a" }}>Es gratis.</em>
          </h2>

          <p
            data-anim="up"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "rgba(250,248,245,0.45)",
              maxWidth: "480px",
              margin: "0 auto 3rem",
              lineHeight: 1.85,
            }}
          >
            La valoración inicial no tiene ningún costo. Analizamos tu caso,
            resolvemos todas tus dudas y diseñamos un protocolo a tu medida,
            sin ninguna presión.
          </p>

          <div
            data-anim="up"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
          >
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "0.68rem", padding: "1.1rem 3rem" }}
            >
              AGENDAR VALORACIÓN GRATUITA — WHATSAPP
            </Link>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(184,154,106,0.5)",
              }}
            >
              Cupos limitados por semana · Sin listas de espera largas
            </p>
          </div>

          {/* Guarantee badge */}
          <div
            data-anim="up"
            style={{
              marginTop: "3.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              border: "1px solid rgba(184,154,106,0.2)",
              padding: "1rem 2rem",
            }}
          >
            <span style={{ color: "#b89a6a", fontSize: "1.1rem" }}>✦</span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(250,248,245,0.45)",
              }}
            >
              Seguimiento de 14 días incluido · Sin riesgo
            </span>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════ */}
      <footer
        style={{
          backgroundColor: "#0a0a0a",
          borderTop: "1px solid rgba(184,154,106,0.1)",
          padding: "2.5rem clamp(24px,6vw,80px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "1.25rem",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "rgba(250,248,245,0.4)",
              letterSpacing: "0.12em",
              textDecoration: "none",
            }}
          >
            DRA<span style={{ color: "#b89a6a" }}>.</span>D10
          </Link>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Inicio", href: "/" },
              { label: "Nosotros", href: "/nosotros" },
              { label: "Resultados", href: "/resultados" },
              { label: "Privacidad", href: "/politica-de-privacidad" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(250,248,245,0.3)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact fallback */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(184,154,106,0.06)",
          }}
        >
          <a
            href="mailto:hola@drad10.com"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "rgba(250,248,245,0.25)",
              textDecoration: "none",
            }}
          >
            hola@drad10.com
          </a>
          <span style={{ color: "rgba(184,154,106,0.2)", fontSize: "0.6rem" }}>·</span>
          <a
            href="tel:+573002440656"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "rgba(250,248,245,0.25)",
              textDecoration: "none",
            }}
          >
            +57 300 244 0656
          </a>
          <span style={{ color: "rgba(184,154,106,0.2)", fontSize: "0.6rem" }}>·</span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "rgba(250,248,245,0.2)",
              letterSpacing: "0.04em",
            }}
          >
            El Poblado, Medellín
          </span>
        </div>
      </footer>
    </>
  );
}
