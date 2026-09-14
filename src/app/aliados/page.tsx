import type { Metadata } from "next";
import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Todo el contenido sale del portafolio oficial de Clínica Quantum (págs. 3 y
// 28 de QUANTUM_PORTAFOLIO.pdf). No añadir condiciones, plazos ni cifras que
// no estén ahí: los detalles del programa se conversan directamente.

export const metadata: Metadata = {
  title: "Programa de Aliados | Clínica Quantum — Medellín",
  description:
    "Hoteles, gimnasios, spas, odontología, wellness y profesionales de la salud: ofrece a tus clientes medicina estética con respaldo médico en El Poblado, Medellín. Comisión del 5% para quien vende y 5% para quien refiere.",
  keywords: [
    "programa de aliados medicina estética",
    "turismo estético medellín",
    "alianzas hoteles medellín estética",
    "referidos clínica estética medellín",
  ],
  openGraph: {
    title: "Programa de Aliados | Clínica Quantum",
    description:
      "Medicina estética de alto nivel con respaldo médico para los clientes de tu negocio. 5% para quien vende y 5% para quien refiere.",
    url: "https://drad10.com/aliados",
    siteName: "DRA.D10",
    locale: "es_CO",
    type: "website",
  },
};

const GOLD = "#b89a6a";
const CREAM = "#faf8f5";
const DARK = "#141414";
const INK = "#1c1c1c";

const WA = `https://wa.me/573002440656?text=${encodeURIComponent(
  "Hola, quiero información sobre el Programa de Aliados de Clínica Quantum",
)}`;

const sectores = [
  "Hoteles",
  "Gimnasios",
  "Spas",
  "Odontología",
  "Wellness",
  "Profesionales de la salud",
];

const razones = [
  {
    titulo: "Criterio médico",
    desc: "Cada plan lo diseña y ejecuta personal médico, no un catálogo de promociones.",
  },
  {
    titulo: "Tecnología propia",
    desc: "Criolipólisis, láser CO2, INDIBA, Hydrafacial y sistemas de análisis facial y capilar.",
  },
  {
    titulo: "Resultados naturales",
    desc: "Buscamos armonía y equilibrio, no exageración.",
  },
  {
    titulo: "En el corazón de El Poblado",
    desc: "Un espacio diseñado para ofrecer comodidad, privacidad y atención bajo estándares clínicos.",
  },
];

const label: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.6rem",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: GOLD,
};

const display = (size: string, color: string): React.CSSProperties => ({
  fontFamily: "var(--font-display), Georgia, serif",
  fontSize: size,
  fontWeight: 300,
  color,
  letterSpacing: "-0.03em",
  lineHeight: 1.1,
});

const cuerpo = (color: string): React.CSSProperties => ({
  fontFamily: "var(--font-body)",
  fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
  lineHeight: 1.85,
  color,
});

export default function AliadosPage() {
  return (
    <>
      <NavBar />

      {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: DARK }}>
        <div
          className="grid lg:grid-cols-[1.1fr_0.9fr] items-center"
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            gap: "clamp(40px, 6vw, 96px)",
            padding: "clamp(64px, 10vw, 128px) clamp(20px, 6vw, 80px)",
          }}
        >
          <div>
            <p data-anim="up" style={{ ...label, marginBottom: "1.5rem" }}>
              PROGRAMA DE ALIADOS · CLÍNICA QUANTUM
            </p>
            <h1
              data-anim="mask"
              style={{ ...display("clamp(2.5rem, 6vw, 4.75rem)", CREAM), marginBottom: "1.75rem" }}
            >
              Medicina estética para tus clientes,{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>con respaldo médico</em>
            </h1>
            <p
              data-anim="up"
              style={{ ...cuerpo("rgba(250,248,245,0.68)"), maxWidth: "34rem", marginBottom: "2.5rem" }}
            >
              Buscamos aliados estratégicos que quieran ofrecer a sus clientes
              medicina estética de alto nivel con respaldo médico, y generar
              ingresos por cada paciente referido.
            </p>
            <div data-anim="up" className="flex flex-col sm:flex-row gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold text-center">
                QUIERO SER ALIADO
              </a>
              <a href="#comision" className="btn-outline-cream text-center">
                VER LA COMISIÓN
              </a>
            </div>
          </div>

          <div
            data-anim="up"
            className="relative w-full max-w-md mx-auto lg:max-w-none"
            style={{ aspectRatio: "4 / 5", isolation: "isolate" }}
          >
            <Image
              src="/images/dra/sofa.webp"
              alt="Dra. Daniela Díez en Clínica Quantum, El Poblado"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              style={{ objectFit: "cover", objectPosition: "center 18%" }}
            />
            <div
              aria-hidden
              className="absolute"
              style={{ inset: "-14px 14px 14px -14px", border: `1px solid rgba(184,154,106,0.35)`, zIndex: -1 }}
            />
          </div>
        </div>
      </section>

      {/* ══ 2. A QUIÉN BUSCAMOS + COMISIÓN ═══════════════════════════════ */}
      <section id="comision" style={{ backgroundColor: CREAM, scrollMarginTop: "80px" }}>
        <div
          className="grid lg:grid-cols-2"
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            gap: "clamp(48px, 7vw, 112px)",
            padding: "clamp(72px, 10vw, 128px) clamp(20px, 6vw, 80px)",
          }}
        >
          <div>
            <p data-anim="up" style={{ ...label, marginBottom: "1.25rem" }}>
              BUSCAMOS ALIADOS ESTRATÉGICOS
            </p>
            <h2
              data-anim="mask"
              style={{ ...display("clamp(1.9rem, 3.6vw, 2.9rem)", INK), marginBottom: "2.25rem" }}
            >
              Negocios que cuidan a las personas
            </h2>
            <ul data-anim="stagger" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {sectores.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline"
                  style={{
                    gap: "1.25rem",
                    padding: "0.95rem 0",
                    borderTop: i === 0 ? "1px solid rgba(28,28,28,0.12)" : undefined,
                    borderBottom: "1px solid rgba(28,28,28,0.12)",
                  }}
                >
                  <span style={{ ...label, letterSpacing: "0.15em", minWidth: "1.75rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={display("clamp(1.25rem, 2.2vw, 1.6rem)", INK)}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <p data-anim="up" style={{ ...label, marginBottom: "2rem" }}>
              EL PROGRAMA CONTEMPLA UNA COMISIÓN
            </p>

            <div data-anim="up" style={{ borderTop: `1px solid ${GOLD}` }}>
              {[
                { rol: "para quien vende" },
                { rol: "para quien refiere al paciente" },
              ].map((c, i) => (
                <div
                  key={c.rol}
                  className="flex items-baseline flex-wrap"
                  style={{
                    gap: "0.4rem 1.5rem",
                    padding: "clamp(1.5rem, 3vw, 2.25rem) 0",
                    borderBottom: i === 0 ? "1px solid rgba(28,28,28,0.12)" : `1px solid ${GOLD}`,
                  }}
                >
                  <span style={{ ...display("clamp(4rem, 9vw, 6.5rem)", INK), lineHeight: 0.9 }}>
                    5<span style={{ color: GOLD }}>%</span>
                  </span>
                  <span style={{ ...cuerpo("#5c5a57"), fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}>
                    {c.rol}
                  </span>
                </div>
              ))}
            </div>

            <p data-anim="up" style={{ ...cuerpo("#6b6864"), marginTop: "1.75rem", maxWidth: "30rem" }}>
              Escríbenos y te compartimos el portafolio con los procedimientos y la
              tabla de valores de alianza.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 3. TURISMO ESTÉTICO ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: DARK, overflow: "hidden" }}>
        <div
          className="grid lg:grid-cols-[0.95fr_1.05fr] items-center"
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            gap: "clamp(40px, 6vw, 96px)",
            padding: "clamp(72px, 10vw, 128px) clamp(20px, 6vw, 80px)",
          }}
        >
          <div className="relative order-2 lg:order-1" style={{ aspectRatio: "3 / 2" }}>
            <Image
              src="/images/campana/tres-modelos.webp"
              alt="Campaña de medicina estética de Clínica Quantum"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p data-anim="up" style={{ ...label, marginBottom: "1.25rem" }}>
              TAMBIÉN RECIBIMOS PACIENTES NACIONALES E INTERNACIONALES
            </p>
            <h2
              data-anim="mask"
              style={{ ...display("clamp(1.9rem, 3.6vw, 2.9rem)", CREAM), marginBottom: "1.5rem" }}
            >
              Medellín es un referente{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>en turismo estético</em>
            </h2>
            <p data-anim="up" style={{ ...cuerpo("rgba(250,248,245,0.68)"), maxWidth: "32rem" }}>
              Somos un aliado ideal para hoteles y operadores que buscan un centro
              de medicina estética confiable y con respaldo médico.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 4. POR QUÉ QUANTUM ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: CREAM }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "clamp(72px, 10vw, 128px) clamp(20px, 6vw, 80px)",
          }}
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]" style={{ gap: "clamp(32px, 6vw, 96px)" }}>
            <div>
              <p data-anim="up" style={{ ...label, marginBottom: "1.25rem" }}>
                POR QUÉ ELEGIR QUANTUM
              </p>
              <h2 data-anim="mask" style={display("clamp(1.9rem, 3.6vw, 2.9rem)", INK)}>
                Lo que tus clientes encuentran aquí
              </h2>
            </div>
            <dl data-anim="stagger" style={{ margin: 0 }}>
              {razones.map((r) => (
                <div
                  key={r.titulo}
                  className="grid sm:grid-cols-[14rem_1fr]"
                  style={{
                    gap: "0.4rem 2rem",
                    padding: "1.5rem 0",
                    borderBottom: "1px solid rgba(28,28,28,0.12)",
                  }}
                >
                  <dt style={{ ...display("1.35rem", INK), lineHeight: 1.3 }}>{r.titulo}</dt>
                  <dd style={{ ...cuerpo("#6b6864"), margin: 0 }}>{r.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ══ 5. CIERRE ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: DARK, textAlign: "center" }}>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "clamp(80px, 11vw, 136px) clamp(20px, 6vw, 80px)",
          }}
        >
          <div data-anim="line" style={{ width: "48px", height: "1px", background: GOLD, margin: "0 auto 2rem" }} />
          <h2
            data-anim="mask"
            style={{ ...display("clamp(2rem, 4.5vw, 3.4rem)", CREAM), marginBottom: "1.5rem" }}
          >
            Hablemos de tu <em style={{ fontStyle: "italic", color: GOLD }}>alianza</em>
          </h2>
          <p data-anim="up" style={{ ...cuerpo("rgba(250,248,245,0.62)"), marginBottom: "2.5rem" }}>
            Cuéntanos a qué se dedica tu negocio y te explicamos cómo funciona el
            programa.
          </p>
          <div data-anim="up">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold">
              ESCRIBIR POR WHATSAPP
            </a>
          </div>
          <p
            data-anim="up"
            style={{ ...label, letterSpacing: "0.22em", color: "rgba(250,248,245,0.4)", marginTop: "2.75rem", lineHeight: 2 }}
          >
            (+57) 300 244 0656 · @clinicaquantum.co
            <br />
            Cl. 7 #39-290, Consultorio 516 · El Poblado, Medellín · Lunes a sábado
          </p>
        </div>
      </section>

      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
