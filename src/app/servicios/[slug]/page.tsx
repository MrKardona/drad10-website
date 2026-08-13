import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TratamientoFAQ } from "@/components/servicios/TratamientoFAQ";
import { ContactPremium } from "@/components/ContactPremium";
import { getTratamiento, getAllSlugs } from "@/lib/tratamientos";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTratamiento(slug);
  if (!t) return {};
  return {
    title: t.seo.title,
    description: t.seo.description,
    keywords: t.seo.keywords,
    openGraph: {
      title: t.seo.title,
      description: t.seo.description,
      url: `https://drad10.com/servicios/${t.slug}`,
      siteName: "DRA.D10",
      locale: "es_CO",
      type: "website",
    },
  };
}

const GOLD = "#b89a6a";
const CREAM = "#faf8f5";
const DARK = "#141414";

function formatCOP(n: number) {
  return `$${n.toLocaleString("es-CO")}`;
}

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
  lineHeight: 1.12,
});

export default async function TratamientoPage({ params }: Props) {
  const { slug } = await params;
  const t = getTratamiento(slug);
  if (!t) notFound();

  const WA = `https://wa.me/573002440656?text=${encodeURIComponent(t.waMensaje)}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: t.nombre,
    description: t.seo.description,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    provider: {
      "@type": "MedicalBusiness",
      name: "DRA.D10 | Clínica Quantum",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cl. 7 #39-290 Consultorio 516",
        addressLocality: "Medellín",
        addressCountry: "CO",
      },
      telephone: "+573002440656",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NavBar />

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: DARK,
          paddingTop: "clamp(120px, 16vw, 190px)",
          paddingBottom: "clamp(56px, 8vw, 90px)",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
            textAlign: "center",
          }}
        >
          <p style={{ ...label, marginBottom: "1.5rem" }}>{t.hero.eyebrow}</p>
          <h1 style={{ ...display("clamp(2.6rem, 6vw, 4.6rem)", CREAM), marginBottom: "1.5rem" }}>
            {t.hero.titulo}
            <br />
            <em style={{ color: GOLD, fontStyle: "italic" }}>{t.hero.tituloEm}</em>
          </h1>
          <div
            style={{
              width: "56px",
              height: "1px",
              background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
              margin: "0 auto 1.75rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
              color: "rgba(250,248,245,0.6)",
              lineHeight: 1.85,
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
            }}
          >
            {t.hero.sub}
          </p>
          <Link href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold">
            AGENDA TU VALORACIÓN GRATUITA
          </Link>

          {/* Strip de prueba social */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.75rem 2rem",
              marginTop: "2.75rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(250,248,245,0.45)",
            }}
          >
            <span style={{ color: GOLD }}>★ 4.9 · 266 reseñas en Google</span>
            <span>+20.000 pacientes</span>
            <span>Médica certificada ARG · COL</span>
          </div>
        </div>

        {/* Chips de beneficios rápidos */}
        <div
          style={{
            maxWidth: "900px",
            margin: "2.75rem auto 0",
            padding: "0 clamp(24px, 6vw, 80px)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
          }}
        >
          {t.beneficios.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(250,248,245,0.75)",
                border: "1px solid rgba(184,154,106,0.3)",
                backgroundColor: "rgba(184,154,106,0.06)",
                padding: "8px 16px",
              }}
            >
              <span style={{ color: GOLD, marginRight: "0.5rem" }}>✓</span>
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ══ 2-3. PROBLEMA ════════════════════════════════════ */}
      <section style={{ backgroundColor: CREAM, padding: "clamp(56px, 9vw, 100px) 0" }}>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...display("clamp(1.7rem, 3.4vw, 2.6rem)", "#1c1c1c"), marginBottom: "1.75rem" }}>
            {t.problema.titulo}
          </h2>
          {t.problema.parrafos.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "#6f6b66",
                lineHeight: 1.9,
                marginBottom: "1.1rem",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ══ 4. QUÉ ES + ZONAS ════════════════════════════════ */}
      <section style={{ backgroundColor: "#f4ede6", padding: "clamp(56px, 9vw, 100px) 0" }}>
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          <div style={{ maxWidth: "680px", marginBottom: "3.5rem" }}>
            <p style={{ ...label, marginBottom: "1rem" }}>EL TRATAMIENTO</p>
            <h2 style={{ ...display("clamp(1.7rem, 3.4vw, 2.6rem)", "#1c1c1c"), marginBottom: "1.25rem" }}>
              {t.queEs.titulo}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "#6f6b66",
                lineHeight: 1.9,
              }}
            >
              {t.queEs.desc}
            </p>
          </div>

          <p style={{ ...label, marginBottom: "1.5rem" }}>{t.zonasTitulo.toUpperCase()}</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              backgroundColor: "rgba(184,154,106,0.2)",
              border: "1px solid rgba(184,154,106,0.2)",
            }}
          >
            {t.zonas.map((z) => (
              <div key={z.label} style={{ backgroundColor: CREAM, padding: "1.75rem 1.5rem" }}>
                <span
                  aria-hidden
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.6rem",
                    color: GOLD,
                    display: "block",
                    marginBottom: "0.75rem",
                    lineHeight: 1,
                  }}
                >
                  {z.icon}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    marginBottom: "0.5rem",
                  }}
                >
                  {z.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "#888580",
                    lineHeight: 1.7,
                  }}
                >
                  {z.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA INTERMEDIO ═══════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#f4ede6",
          borderTop: "1px solid rgba(184,154,106,0.2)",
          padding: "clamp(28px, 4vw, 44px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1.25rem 2.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
              fontWeight: 300,
              color: "#1c1c1c",
              letterSpacing: "-0.02em",
            }}
          >
            ¿Quieres saber si es para ti?{" "}
            <em style={{ color: GOLD, fontStyle: "italic" }}>La valoración es gratuita.</em>
          </p>
          <Link href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold">
            AGENDAR AHORA
          </Link>
        </div>
      </section>

      {/* ══ VIDEO EDUCATIVO (opcional) ═══════════════════════ */}
      {t.videoId && (
        <section style={{ backgroundColor: DARK, padding: "clamp(56px, 9vw, 100px) 0" }}>
          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              padding: "0 clamp(24px, 6vw, 80px)",
              textAlign: "center",
            }}
          >
            <p style={{ ...label, marginBottom: "1rem" }}>MÍRALO EN 1 MINUTO</p>
            <h2 style={{ ...display("clamp(1.6rem, 3vw, 2.2rem)", CREAM), marginBottom: "2.25rem" }}>
              La Dra. Daniela te lo explica
            </h2>
            <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${t.videoId}`}
                title={`Video: ${t.nombre}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
          </div>
        </section>
      )}

      {/* ══ 5. CÓMO FUNCIONA — 3 PASOS ═══════════════════════ */}
      <section style={{ backgroundColor: DARK, padding: "clamp(56px, 9vw, 100px) 0" }}>
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ ...label, marginBottom: "1rem" }}>PASO A PASO</p>
            <h2 style={display("clamp(1.7rem, 3.4vw, 2.6rem)", CREAM)}>
              Así es el <em style={{ color: GOLD, fontStyle: "italic" }}>proceso</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {t.pasos.map((paso) => (
              <div
                key={paso.num}
                style={{
                  border: "1px solid rgba(184,154,106,0.18)",
                  padding: "2.25rem 1.9rem",
                  backgroundColor: "#1a1a1a",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "2.6rem",
                    fontWeight: 300,
                    color: "rgba(184,154,106,0.35)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "1.25rem",
                  }}
                >
                  {paso.num}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: CREAM,
                    marginBottom: "0.75rem",
                  }}
                >
                  {paso.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "rgba(250,248,245,0.5)",
                    lineHeight: 1.8,
                    marginBottom: "1.1rem",
                  }}
                >
                  {paso.desc}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: GOLD,
                  }}
                >
                  {paso.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. SEGURIDAD — el corazón ════════════════════════ */}
      <section
        style={{
          backgroundColor: DARK,
          borderTop: "1px solid rgba(184,154,106,0.15)",
          padding: "clamp(56px, 9vw, 100px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ ...label, marginBottom: "1rem" }}>TU SEGURIDAD PRIMERO</p>
            <h2 style={display("clamp(1.7rem, 3.4vw, 2.6rem)", CREAM)}>
              Por qué es <em style={{ color: GOLD, fontStyle: "italic" }}>seguro</em> con nosotras
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "rgba(250,248,245,0.45)",
                maxWidth: "520px",
                margin: "1.25rem auto 0",
                lineHeight: 1.85,
              }}
            >
              En medicina estética la diferencia no está en el producto — está en
              quién lo aplica, con qué protocolo y qué pasa después.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {t.seguridad.map((s) => (
              <div
                key={s.num}
                style={{
                  borderLeft: `2px solid ${GOLD}`,
                  padding: "1.5rem 1.75rem",
                  backgroundColor: "rgba(184,154,106,0.05)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: CREAM,
                    marginBottom: "0.6rem",
                  }}
                >
                  {s.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "rgba(250,248,245,0.55)",
                    lineHeight: 1.8,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. PRECIO ════════════════════════════════════════ */}
      <section style={{ backgroundColor: CREAM, padding: "clamp(56px, 9vw, 100px) 0" }}>
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
            textAlign: "center",
          }}
        >
          <p style={{ ...label, marginBottom: "1rem" }}>INVERSIÓN</p>
          {t.precio.desde ? (
            <h2 style={{ ...display("clamp(2.2rem, 5vw, 3.6rem)", "#1c1c1c"), marginBottom: "0.5rem" }}>
              Desde {formatCOP(t.precio.desde)}
            </h2>
          ) : (
            <h2 style={{ ...display("clamp(1.7rem, 3.4vw, 2.6rem)", "#1c1c1c"), marginBottom: "0.5rem" }}>
              Precio personalizado en tu{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>valoración gratuita</em>
            </h2>
          )}
          {t.precio.nota && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "#888580",
                marginBottom: "0.5rem",
              }}
            >
              {t.precio.nota}
            </p>
          )}

          <div
            style={{
              border: "1px solid rgba(184,154,106,0.25)",
              backgroundColor: "#f4ede6",
              padding: "2rem 2.25rem",
              margin: "2.25rem 0",
              textAlign: "left",
            }}
          >
            <p style={{ ...label, marginBottom: "1.1rem" }}>SIEMPRE INCLUYE</p>
            {t.precio.incluye.map((item) => (
              <p
                key={item}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "#3d3a36",
                  lineHeight: 2.1,
                }}
              >
                <span style={{ color: GOLD, marginRight: "0.6rem" }}>✓</span>
                {item}
              </p>
            ))}
          </div>

          <Link href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold">
            AGENDAR VALORACIÓN GRATUITA
          </Link>
        </div>
      </section>

      {/* ══ 8. FAQ ═══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: CREAM,
          borderTop: "1px solid rgba(184,154,106,0.15)",
          padding: "clamp(56px, 9vw, 100px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
            <p style={{ ...label, marginBottom: "1rem" }}>PREGUNTAS FRECUENTES</p>
            <h2 style={display("clamp(1.7rem, 3.4vw, 2.4rem)", "#1c1c1c")}>
              Lo que todas preguntan
            </h2>
          </div>
          <TratamientoFAQ items={t.faq} />
        </div>
      </section>

      {/* ══ 9. CTA FINAL ═════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: DARK,
          padding: "clamp(64px, 10vw, 120px) 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
          }}
        >
          <h2 style={{ ...display("clamp(1.9rem, 4vw, 3rem)", CREAM), marginBottom: "1.25rem" }}>
            El primer paso no cuesta{" "}
            <em style={{ color: GOLD, fontStyle: "italic" }}>nada</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.92rem",
              color: "rgba(250,248,245,0.55)",
              lineHeight: 1.85,
              marginBottom: "2.25rem",
            }}
          >
            Agenda tu valoración gratuita con la Dra. Daniela Díez. Resolvemos
            todas tus dudas, sin compromiso y sin presión — la decisión siempre
            es tuya.
          </p>
          <Link href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold">
            AGENDAR POR WHATSAPP
          </Link>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(250,248,245,0.3)",
              marginTop: "1.5rem",
            }}
          >
            Cl. 7 #39-290 · El Poblado, Medellín · 300 244 0656
          </p>
        </div>
      </section>

      {/* ══ 10. FORMULARIO DE CONTACTO ═══════════════════════ */}
      <ContactPremium />

      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
