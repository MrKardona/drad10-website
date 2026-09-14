import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollVideoSection } from "@/components/ScrollVideoSection";
import { BeforeAfterSlider } from "@/components/gallery/BeforeAfterSlider";
import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { TratamientoFAQ } from "@/components/servicios/TratamientoFAQ";
import { galleryCases } from "@/lib/gallery-data";
import { reviews, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_MAPS_URL } from "@/lib/testimonios";
import { getTratamiento, getAllSlugs } from "@/lib/tratamientos";
import { mediosDe } from "@/lib/tratamientos/medios";
import type { CategoriaTratamiento } from "@/lib/tratamientos/types";

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
  const medios = mediosDe(t);
  return {
    title: t.seo.title,
    description: t.seo.description,
    keywords: t.seo.keywords,
    alternates: { canonical: `https://drad10.com/servicios/${t.slug}` },
    openGraph: {
      title: t.seo.title,
      description: t.seo.description,
      url: `https://drad10.com/servicios/${t.slug}`,
      siteName: "DRA.D10 | Clínica Quantum",
      locale: "es_CO",
      type: "website",
      images: medios ? [{ url: `https://drad10.com${medios.hero}`, alt: t.nombre }] : undefined,
    },
  };
}

/* ── Tokens ─────────────────────────────────────────────────────────────── */
const GOLD = "#b89a6a";
const CREAM = "#faf8f5";
const SAND = "#f4ede6";
const DARK = "#141414";
const INK = "#1c1c1c";
const MUTED = "#6b6760";

const CATEGORIAS: Record<CategoriaTratamiento, { label: string; href: string }> = {
  faciales: { label: "Faciales", href: "/#faciales" },
  corporales: { label: "Corporales", href: "/#corporales" },
  capilares: { label: "Capilares", href: "/#capilares" },
  "zona-intima": { label: "Zona íntima", href: "/#zona-intima" },
  bienestar: { label: "Bienestar", href: "/#corporales" },
  quirurgicos: { label: "Quirúrgicos", href: "/#quirurgicos" },
};

const formatCOP = (n: number) => `$${n.toLocaleString("es-CO")}`;

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

const cuerpo = (color: string, size = "0.95rem"): React.CSSProperties => ({
  fontFamily: "var(--font-body)",
  fontSize: size,
  color,
  lineHeight: 1.85,
});

const contenedor = (ancho = 1180): React.CSSProperties => ({
  maxWidth: `${ancho}px`,
  margin: "0 auto",
  padding: "0 clamp(20px, 6vw, 80px)",
});

const seccion = (bg: string): React.CSSProperties => ({
  backgroundColor: bg,
  padding: "clamp(64px, 9vw, 112px) 0",
});

function Encabezado({
  eyebrow,
  titulo,
  em,
  sub,
  claro = false,
  centrado = true,
}: {
  eyebrow: string;
  titulo: string;
  em?: string;
  sub?: string;
  claro?: boolean;
  centrado?: boolean;
}) {
  return (
    <div style={{ textAlign: centrado ? "center" : "left", marginBottom: "clamp(2.25rem, 4vw, 3.25rem)" }}>
      <p data-anim="up" style={{ ...label, marginBottom: "1rem" }}>
        {eyebrow}
      </p>
      <h2 data-anim="mask" style={display("clamp(1.9rem, 3.6vw, 2.8rem)", claro ? CREAM : INK)}>
        {titulo} {em && <em style={{ color: GOLD, fontStyle: "italic" }}>{em}</em>}
      </h2>
      {sub && (
        <p
          data-anim="up"
          style={{
            ...cuerpo(claro ? "rgba(250,248,245,0.55)" : MUTED, "0.92rem"),
            maxWidth: "560px",
            margin: centrado ? "1rem auto 0" : "1rem 0 0",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export default async function TratamientoPage({ params }: Props) {
  const { slug } = await params;
  const t = getTratamiento(slug);
  if (!t) notFound();

  const medios = mediosDe(t);
  const casos = (t.resultados ?? [])
    .map((id) => galleryCases.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const relacionados = (t.relacionados ?? [])
    .map((s) => {
      const r = getTratamiento(s);
      if (r) return { slug: r.slug, nombre: r.nombre, grupo: r.grupo ?? CATEGORIAS[r.categoria].label, desde: r.precio.desde, hero: mediosDe(r)?.hero };
      // Botox tiene página propia fuera del registro de tratamientos.
      if (s === "botox") return { slug: "botox", nombre: "Botox (toxina botulínica)", grupo: "Toxina botulínica", desde: 1100000, hero: "/images/servicios/botox/paso-1.webp" };
      return null;
    })
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  // Las reseñas de Google van primero: son verificables públicamente.
  const testimonios = [...reviews].sort((a, b) => (a.fuente === "google" ? -1 : 1) - (b.fuente === "google" ? -1 : 1)).slice(0, 3);
  const categoria = CATEGORIAS[t.categoria];
  const WA = `https://wa.me/573002440656?text=${encodeURIComponent(t.waMensaje)}`;
  const precioTexto = t.precio.desde ? `Desde ${formatCOP(t.precio.desde)}` : "Precio a valoración";
  // Cosmetología y bienestar no son procedimientos médicos: se agenda una cita.
  const cta = t.grupo === "Cosmetología" || t.categoria === "bienestar" ? "Agendar cita" : "Agendar valoración";

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: t.nombre,
      description: t.seo.description,
      image: medios ? `https://drad10.com${medios.hero}` : undefined,
      provider: {
        "@type": "MedicalBusiness",
        name: "DRA.D10 | Clínica Quantum",
        telephone: "+573002440656",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cl. 7 #39-290 Consultorio 516",
          addressLocality: "Medellín",
          addressRegion: "Antioquia",
          addressCountry: "CO",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_RATING,
          reviewCount: GOOGLE_REVIEW_COUNT,
        },
      },
      ...(t.precio.desde
        ? { offers: { "@type": "Offer", price: t.precio.desde, priceCurrency: "COP" } }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://drad10.com" },
        { "@type": "ListItem", position: 2, name: categoria.label, item: `https://drad10.com${categoria.href}` },
        { "@type": "ListItem", position: 3, name: t.nombre, item: `https://drad10.com/servicios/${t.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NavBar />

      {/* Barra de progreso de lectura */}
      <div aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 90, pointerEvents: "none" }}>
        <div
          data-progress-bar
          style={{ height: "100%", background: GOLD, transform: "scaleX(0)", transformOrigin: "left center" }}
        />
      </div>

      {/* ══ 1. PORTADA ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: DARK, overflow: "hidden", paddingBottom: "clamp(40px, 6vw, 72px)" }}>
        <div style={{ ...contenedor(1240), paddingTop: "clamp(20px, 3vw, 32px)" }}>
          <nav aria-label="Ruta de navegación" style={{ ...cuerpo("rgba(250,248,245,0.4)", "0.7rem"), letterSpacing: "0.04em" }}>
            <Link href="/" className="hover:text-[#b89a6a] transition-colors">Inicio</Link>
            <span aria-hidden style={{ margin: "0 0.6rem" }}>/</span>
            <Link href={categoria.href} className="hover:text-[#b89a6a] transition-colors">{categoria.label}</Link>
            {t.grupo && (
              <>
                <span aria-hidden style={{ margin: "0 0.6rem" }}>/</span>
                <span>{t.grupo}</span>
              </>
            )}
          </nav>
        </div>

        <div
          className={medios ? "grid lg:grid-cols-[1.05fr_0.95fr] items-center" : ""}
          style={{ ...contenedor(1240), paddingTop: "clamp(36px, 6vw, 72px)", gap: "clamp(36px, 5vw, 80px)" }}
        >
          <div style={{ textAlign: medios ? "left" : "center" }}>
            <p data-anim="up" style={{ ...label, marginBottom: "1.25rem" }}>
              {t.hero.eyebrow}
            </p>
            <h1 data-anim="mask" style={{ ...display("clamp(2.4rem, 5.4vw, 4.3rem)", CREAM), marginBottom: "1.4rem" }}>
              {t.hero.titulo}
              <br />
              <em style={{ color: GOLD, fontStyle: "italic" }}>{t.hero.tituloEm}</em>
            </h1>
            <p
              data-anim="up"
              style={{
                ...cuerpo("rgba(250,248,245,0.66)", "clamp(0.95rem, 1.4vw, 1.05rem)"),
                maxWidth: "500px",
                margin: medios ? "0 0 2.25rem" : "0 auto 2.25rem",
              }}
            >
              {t.hero.sub}
            </p>
            <div
              data-anim="up"
              className="flex flex-col sm:flex-row gap-3"
              style={{ justifyContent: medios ? "flex-start" : "center" }}
            >
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold text-center">
                {cta}
              </a>
              <a href="#precio" className="btn-outline-cream text-center">
                {precioTexto}
              </a>
            </div>

            {/* Prueba social verificable */}
            <div
              data-anim="up"
              className="flex flex-wrap items-center"
              style={{
                justifyContent: medios ? "flex-start" : "center",
                gap: "0.5rem 1.5rem",
                marginTop: "2.25rem",
                ...cuerpo("rgba(250,248,245,0.5)", "0.72rem"),
                letterSpacing: "0.04em",
              }}
            >
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#b89a6a] transition-colors">
                <span style={{ color: GOLD }}>★ {GOOGLE_RATING}</span> en Google · {GOOGLE_REVIEW_COUNT} reseñas
              </a>
              <span>Dirección médica: Dra. Daniela Díez</span>
              <span>El Poblado, Medellín</span>
            </div>
          </div>

          {medios && (
            <div data-anim="up" className="relative mx-auto w-full max-w-md lg:max-w-none" style={{ aspectRatio: "4 / 5" }}>
              <div
                aria-hidden
                className="absolute"
                style={{ inset: "-12px 12px 12px -12px", border: "1px solid rgba(184,154,106,0.3)" }}
              />
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={medios.hero}
                  alt={t.nombre}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 46vw"
                  className="object-cover"
                />
                {medios.video && (
                  <video
                    className="servicio-video absolute inset-0 h-full w-full object-cover"
                    src={medios.video}
                    poster={medios.hero}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Beneficios */}
        <ul
          className="flex flex-wrap"
          style={{
            ...contenedor(1240),
            listStyle: "none",
            marginTop: "clamp(36px, 5vw, 56px)",
            gap: "0.5rem",
            justifyContent: medios ? "flex-start" : "center",
          }}
        >
          {t.beneficios.map((b) => (
            <li
              key={b}
              style={{
                ...cuerpo("rgba(250,248,245,0.78)", "0.7rem"),
                letterSpacing: "0.08em",
                border: "1px solid rgba(184,154,106,0.28)",
                padding: "7px 14px",
                lineHeight: 1.4,
              }}
            >
              <span aria-hidden style={{ color: GOLD, marginRight: "0.45rem" }}>✓</span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* ══ 2. FICHA RÁPIDA ══════════════════════════════════════════════ */}
      {t.ficha && (
        <section style={{ backgroundColor: CREAM, borderBottom: "1px solid rgba(184,154,106,0.18)" }}>
          <dl
            className="ficha-sin-borde grid grid-cols-2 lg:grid-cols-5"
            style={{ ...contenedor(1240), margin: "0 auto" }}
          >
            {[
              { k: "Duración", v: t.ficha.duracion },
              { k: "Sesiones", v: t.ficha.sesiones },
              { k: "Recuperación", v: t.ficha.recuperacion },
              { k: "Resultados", v: t.ficha.resultados },
              { k: "Inversión", v: precioTexto },
            ].map((d, i) => (
              <div
                key={d.k}
                className={i === 4 ? "col-span-2 lg:col-span-1" : ""}
                style={{
                  padding: "clamp(1.25rem, 2.5vw, 1.9rem) clamp(0.75rem, 1.5vw, 1.25rem)",
                  borderTop: i >= 2 ? "1px solid rgba(184,154,106,0.14)" : undefined,
                }}
              >
                <dt style={{ ...label, letterSpacing: "0.22em", marginBottom: "0.45rem" }}>{d.k}</dt>
                <dd style={{ ...display("clamp(1.05rem, 1.6vw, 1.25rem)", INK), lineHeight: 1.3, margin: 0 }}>{d.v}</dd>
              </div>
            ))}
          </dl>
          <style>{`@media (min-width:1024px){.ficha-sin-borde>div{border-top:none!important}}`}</style>
        </section>
      )}

      {/* ══ 3. RESULTADOS REALES ═════════════════════════════════════════ */}
      {casos.length > 0 && (
        <section style={seccion(CREAM)}>
          <div style={contenedor()}>
            <Encabezado
              eyebrow="Resultados reales"
              titulo="Casos de pacientes de"
              em="Clínica Quantum"
              sub="Arrastra el visor para comparar el antes y el después."
            />
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(${casos.length === 1 ? "300px" : "260px"}, 1fr))`,
                gap: "clamp(20px, 3vw, 32px)",
                maxWidth: casos.length === 1 ? "440px" : undefined,
                margin: "0 auto",
              }}
            >
              {casos.map((c) => (
                <figure key={c.id} data-anim="up" style={{ margin: 0 }}>
                  <BeforeAfterSlider
                    antes={c.antes}
                    despues={c.despues}
                    alt={c.title}
                    aspectRatio={c.aspectRatio}
                    objectPosition={c.objectPosition}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <figcaption style={{ paddingTop: "0.9rem" }}>
                    <p style={{ ...label, marginBottom: "0.3rem" }}>{c.zone}</p>
                    <p style={display("1.15rem", INK)}>{c.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p style={{ ...cuerpo("#8a867f", "0.72rem"), maxWidth: "620px", margin: "2.5rem auto 0", textAlign: "center" }}>
              Los resultados varían según las características de cada persona y todo tratamiento requiere valoración médica previa.{" "}
              <Link href="/resultados" style={{ color: GOLD, textDecoration: "underline" }}>
                Ver más resultados
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* ══ 4. EL PROBLEMA ═══════════════════════════════════════════════ */}
      <section style={seccion(casos.length > 0 ? SAND : CREAM)}>
        <div
          className={medios?.resultado ? "grid lg:grid-cols-[1fr_0.8fr] items-center" : ""}
          style={{ ...contenedor(), gap: "clamp(36px, 6vw, 96px)" }}
        >
          <div style={{ maxWidth: medios?.resultado ? undefined : "720px", margin: medios?.resultado ? undefined : "0 auto" }}>
            <h2 data-anim="mask" style={{ ...display("clamp(1.9rem, 3.6vw, 2.8rem)", INK), marginBottom: "1.75rem" }}>
              {t.problema.titulo}
            </h2>
            {t.problema.parrafos.map((p, i) => (
              <p key={i} data-anim="up" style={{ ...cuerpo(MUTED), marginBottom: "1.1rem" }}>
                {p}
              </p>
            ))}
          </div>
          {medios?.resultado && (
            <div data-anim="up" className="relative w-full max-w-sm mx-auto lg:max-w-none" style={{ aspectRatio: "4 / 5" }}>
              <Image src={medios.resultado} alt={`Resultado natural de ${t.nombre}`} fill sizes="(max-width: 1024px) 80vw, 36vw" className="object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* ══ 5. QUÉ ES + ZONAS ════════════════════════════════════════════ */}
      <section style={seccion(DARK)}>
        <div style={contenedor()}>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]" style={{ gap: "clamp(32px, 6vw, 96px)" }}>
            <div>
              <p data-anim="up" style={{ ...label, marginBottom: "1rem" }}>El tratamiento</p>
              <h2 data-anim="mask" style={{ ...display("clamp(1.9rem, 3.6vw, 2.8rem)", CREAM), marginBottom: "1.4rem" }}>
                {t.queEs.titulo}
              </h2>
              <p data-anim="up" style={cuerpo("rgba(250,248,245,0.62)")}>
                {t.queEs.desc}
              </p>
            </div>
            <div>
              <p data-anim="up" style={{ ...label, marginBottom: "1.25rem" }}>{t.zonasTitulo}</p>
              <ul data-anim="stagger" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {t.zonas.map((z) => (
                  <li
                    key={z.label}
                    className="grid grid-cols-[2.25rem_1fr]"
                    style={{ gap: "1rem", padding: "1.15rem 0", borderBottom: "1px solid rgba(184,154,106,0.16)" }}
                  >
                    <span aria-hidden style={{ ...display("1.5rem", GOLD), lineHeight: 1 }}>{z.icon}</span>
                    <div>
                      <p style={{ ...display("1.15rem", CREAM), marginBottom: "0.25rem", lineHeight: 1.3 }}>{z.label}</p>
                      <p style={cuerpo("rgba(250,248,245,0.5)", "0.85rem")}>{z.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. PARA QUIÉN ════════════════════════════════════════════════ */}
      {t.paraQuien && (
        <section style={seccion(CREAM)}>
          <div style={contenedor(1080)}>
            <Encabezado
              eyebrow="¿Es para ti?"
              titulo="Te decimos con claridad"
              em="qué necesitas y qué no"
            />
            <div className="grid md:grid-cols-2" style={{ gap: "clamp(20px, 3vw, 40px)" }}>
              <div data-anim="up" style={{ backgroundColor: "#fff", border: "1px solid rgba(184,154,106,0.22)", padding: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                <p style={{ ...display("1.35rem", INK), marginBottom: "1.25rem" }}>Es para ti si…</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {t.paraQuien.ideal.map((x) => (
                    <li key={x} className="flex" style={{ ...cuerpo("#3d3a36", "0.92rem"), gap: "0.75rem", padding: "0.4rem 0" }}>
                      <span aria-hidden style={{ color: GOLD, flexShrink: 0 }}>✓</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-anim="up" style={{ border: "1px solid rgba(28,28,28,0.1)", padding: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                <p style={{ ...display("1.35rem", INK), marginBottom: "1.25rem" }}>Primero lo valoramos si…</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {t.paraQuien.noIdeal.map((x) => (
                    <li key={x} className="flex" style={{ ...cuerpo(MUTED, "0.92rem"), gap: "0.75rem", padding: "0.4rem 0" }}>
                      <span aria-hidden style={{ color: "#a8a49d", flexShrink: 0 }}>○</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══ SECUENCIA ATADA AL SCROLL (opcional) ═════════════════════════ */}
      {t.secuencia && (
        <ScrollVideoSection
          dir={t.secuencia.dir}
          frameCount={t.secuencia.frameCount}
          alturaVh={t.secuencia.alturaVh ?? 300}
          badge={t.secuencia.badge ?? ""}
          frase={t.secuencia.frase ?? ""}
        />
      )}

      {/* ══ 7. PROCESO ═══════════════════════════════════════════════════ */}
      <section style={seccion(SAND)}>
        <div style={contenedor()}>
          <Encabezado eyebrow="Paso a paso" titulo="Así es tu" em="proceso" />
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }} className="grid md:grid-cols-3" >
            {t.pasos.map((paso, i) => (
              <li
                key={paso.num}
                data-anim="up"
                style={{
                  padding: "0 clamp(0px, 1.5vw, 20px)",
                  marginBottom: "2.5rem",
                }}
              >
                {medios?.pasos?.[i] && (
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 2", marginBottom: "1.4rem" }}>
                    <Image
                      src={medios.pasos[i]}
                      alt={`${paso.title}: ${t.nombre}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex items-baseline" style={{ gap: "0.9rem", marginBottom: "0.6rem" }}>
                  <span style={{ ...display("2rem", GOLD), lineHeight: 1 }}>{paso.num}</span>
                  <p style={{ ...display("1.25rem", INK), lineHeight: 1.25 }}>{paso.title}</p>
                </div>
                <p style={{ ...cuerpo(MUTED, "0.88rem"), marginBottom: "0.7rem" }}>{paso.desc}</p>
                <p style={{ ...label, letterSpacing: "0.18em" }}>{paso.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ CTA INTERMEDIO ═══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: INK, padding: "clamp(32px, 5vw, 52px) 0" }}>
        <div className="flex flex-wrap items-center justify-center text-center" style={{ ...contenedor(), gap: "1.25rem 2.5rem" }}>
          <p style={display("clamp(1.2rem, 2.4vw, 1.65rem)", CREAM)}>
            ¿Tienes dudas? <em style={{ color: GOLD, fontStyle: "italic" }}>Escríbenos y te orientamos.</em>
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* ══ 8. PRECIO ════════════════════════════════════════════════════ */}
      <section id="precio" style={{ ...seccion(CREAM), scrollMarginTop: "80px" }}>
        <div style={contenedor(880)}>
          <Encabezado
            eyebrow="Inversión"
            titulo={t.precio.desde ? "Precios claros," : "Un plan a tu medida,"}
            em={t.precio.desde ? "sin sorpresas" : "cotizado en tu valoración"}
          />

          {t.precio.opciones && t.precio.opciones.length > 0 && (
            <table data-anim="up" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
              <caption className="sr-only">Precios de {t.nombre}</caption>
              <tbody>
                {t.precio.opciones.map((o, i) => (
                  <tr key={o.label + i} style={{ borderBottom: "1px solid rgba(184,154,106,0.22)", borderTop: i === 0 ? `1px solid ${GOLD}` : undefined }}>
                    <th scope="row" style={{ textAlign: "left", padding: "1.15rem 1rem 1.15rem 0", fontWeight: 400 }}>
                      <span style={{ ...display("1.15rem", INK), lineHeight: 1.3, display: "block" }}>{o.label}</span>
                      {o.detalle && <span style={{ ...cuerpo("#8a867f", "0.8rem"), display: "block", lineHeight: 1.5, marginTop: "0.2rem" }}>{o.detalle}</span>}
                    </th>
                    <td style={{ textAlign: "right", padding: "1.15rem 0", whiteSpace: "nowrap", verticalAlign: "top" }}>
                      <span style={{ ...display("clamp(1.1rem, 2vw, 1.35rem)", o.valor ? INK : MUTED) }}>
                        {o.valor ? formatCOP(o.valor) : "A valoración"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="grid md:grid-cols-[1.2fr_0.8fr] items-start" style={{ gap: "clamp(24px, 4vw, 48px)" }}>
            <div data-anim="up" style={{ backgroundColor: SAND, padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              <p style={{ ...label, marginBottom: "1rem" }}>Incluye</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {t.precio.incluye.map((item) => (
                  <li key={item} className="flex" style={{ ...cuerpo("#3d3a36", "0.9rem"), gap: "0.7rem", padding: "0.3rem 0" }}>
                    <span aria-hidden style={{ color: GOLD }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div data-anim="up">
              {t.precio.nota && <p style={{ ...cuerpo(MUTED, "0.86rem"), marginBottom: "1.5rem" }}>{t.precio.nota}</p>}
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold text-center" style={{ display: "block" }}>
                {cta}
              </a>
              <p style={{ ...cuerpo("#8a867f", "0.72rem"), marginTop: "0.9rem" }}>
                Valores de referencia en pesos colombianos. El plan final lo define la valoración médica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. TESTIMONIOS ═══════════════════════════════════════════════ */}
      <section style={seccion(DARK)}>
        <div style={contenedor()}>
          <Encabezado
            eyebrow={`★ ${GOOGLE_RATING} en Google · ${GOOGLE_REVIEW_COUNT} reseñas`}
            titulo="Lo que dicen"
            em="nuestros pacientes"
            claro
          />
          <div className="grid md:grid-cols-3" style={{ gap: "clamp(28px, 4vw, 56px)" }}>
            {testimonios.map((r) => (
              <figure key={r.name} data-anim="up" style={{ margin: 0 }}>
                <p aria-label={`${r.rating} estrellas`} style={{ color: GOLD, letterSpacing: "0.2em", marginBottom: "1rem" }}>★★★★★</p>
                <blockquote style={{ ...display("1.2rem", CREAM), lineHeight: 1.5, margin: 0 }}>“{r.text}”</blockquote>
                <figcaption style={{ ...cuerpo("rgba(250,248,245,0.45)", "0.75rem"), marginTop: "1.1rem", letterSpacing: "0.06em" }}>
                  {r.name}
                  {r.fuente === "google" ? " · Reseña de Google" : ""}
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" style={{ ...cuerpo(GOLD, "0.8rem"), textDecoration: "underline" }}>
              Ver todas las reseñas en Google
            </a>
          </p>
        </div>
      </section>

      {/* ══ 10. DIRECCIÓN MÉDICA + SEGURIDAD ═════════════════════════════ */}
      <section style={seccion(CREAM)}>
        <div className="grid lg:grid-cols-[0.75fr_1.25fr]" style={{ ...contenedor(), gap: "clamp(36px, 6vw, 96px)" }}>
          <div data-anim="up">
            <div className="relative w-full max-w-sm" style={{ aspectRatio: "3 / 4" }}>
              <Image src="/images/dra/scrubs.webp" alt="Dra. Daniela Díez, directora médica de Clínica Quantum" fill sizes="(max-width: 1024px) 80vw, 30vw" className="object-cover" />
            </div>
            <p style={{ ...display("1.3rem", INK), marginTop: "1.1rem" }}>Dra. Daniela Díez</p>
            <p style={cuerpo(MUTED, "0.82rem")}>Dirección médica · Clínica Quantum</p>
          </div>
          <div>
            <p data-anim="up" style={{ ...label, marginBottom: "1rem" }}>Tu seguridad, primero</p>
            <h2 data-anim="mask" style={{ ...display("clamp(1.9rem, 3.6vw, 2.8rem)", INK), marginBottom: "1.25rem" }}>
              Entender primero, <em style={{ color: GOLD, fontStyle: "italic" }}>tratar después</em>
            </h2>
            <p data-anim="up" style={{ ...cuerpo(MUTED), marginBottom: "2rem", maxWidth: "560px" }}>
              Cada plan lo diseña y ejecuta personal médico, con una valoración previa y los requisitos de habilitación
              sanitaria aplicables. Si un tratamiento no es lo que necesitas, te lo decimos.
            </p>
            <div data-anim="stagger" className="grid sm:grid-cols-2" style={{ gap: "1.75rem 2.5rem" }}>
              {t.seguridad.map((s) => (
                <div key={s.num} style={{ borderTop: "1px solid rgba(184,154,106,0.35)", paddingTop: "1.1rem" }}>
                  <p style={{ ...display("1.12rem", INK), marginBottom: "0.4rem", lineHeight: 1.3 }}>{s.title}</p>
                  <p style={cuerpo(MUTED, "0.86rem")}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 11. CUIDADOS ═════════════════════════════════════════════════ */}
      {t.cuidados && (
        <section style={seccion(SAND)}>
          <div style={contenedor(1080)}>
            <Encabezado eyebrow="Prepárate" titulo="Cuidados antes" em="y después" />
            <div className="grid md:grid-cols-2" style={{ gap: "clamp(28px, 5vw, 72px)" }}>
              {[
                { titulo: "Antes de tu cita", items: t.cuidados.antes },
                { titulo: "Después del tratamiento", items: t.cuidados.despues },
              ].map((b) => (
                <div key={b.titulo} data-anim="up">
                  <p style={{ ...display("1.35rem", INK), paddingBottom: "0.9rem", borderBottom: `1px solid ${GOLD}`, marginBottom: "0.5rem" }}>
                    {b.titulo}
                  </p>
                  <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {b.items.map((x, i) => (
                      <li key={x} className="grid grid-cols-[2rem_1fr]" style={{ ...cuerpo("#3d3a36", "0.9rem"), padding: "0.7rem 0", borderBottom: "1px solid rgba(28,28,28,0.07)" }}>
                        <span style={{ ...label, letterSpacing: "0.1em", paddingTop: "0.2rem" }}>{String(i + 1).padStart(2, "0")}</span>
                        {x}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ 12. PREGUNTAS FRECUENTES ═════════════════════════════════════ */}
      <section style={seccion(CREAM)}>
        <div style={contenedor(780)}>
          <Encabezado eyebrow="Preguntas frecuentes" titulo="Resolvemos tus" em="dudas" />
          <TratamientoFAQ items={t.faq} />
        </div>
      </section>

      {/* ══ 13. RELACIONADOS ═════════════════════════════════════════════ */}
      {relacionados.length > 0 && (
        <section style={seccion(SAND)}>
          <div style={contenedor()}>
            <Encabezado eyebrow="Se complementa con" titulo="Tratamientos" em="relacionados" />
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ listStyle: "none", padding: 0, margin: 0, gap: "clamp(20px, 3vw, 32px)" }}>
              {relacionados.map((r) => (
                <li key={r.slug} data-anim="up">
                  <Link href={`/servicios/${r.slug}`} className="group block">
                    {r.hero && (
                      <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3", marginBottom: "1rem" }}>
                        <Image src={r.hero} alt={r.nombre} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      </div>
                    )}
                    <p style={{ ...label, marginBottom: "0.35rem" }}>{r.grupo}</p>
                    <p style={{ ...display("1.3rem", INK), lineHeight: 1.25 }} className="group-hover:text-[#b89a6a] transition-colors">
                      {r.nombre}
                    </p>
                    <p style={{ ...cuerpo(MUTED, "0.82rem"), marginTop: "0.3rem" }}>
                      {r.desde ? `Desde ${formatCOP(r.desde)}` : "Precio a valoración"} →
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ══ 14. CIERRE ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: DARK, padding: "clamp(72px, 11vw, 132px) 0", textAlign: "center" }}>
        <div style={contenedor(720)}>
          <h2 data-anim="mask" style={{ ...display("clamp(2rem, 4.4vw, 3.2rem)", CREAM), marginBottom: "1.25rem" }}>
            Tu mejor versión empieza con <em style={{ color: GOLD, fontStyle: "italic" }}>una valoración</em>
          </h2>
          <p data-anim="up" style={{ ...cuerpo("rgba(250,248,245,0.58)"), marginBottom: "2.25rem" }}>
            Revisamos tu caso con el analizador facial y capilar y te decimos con claridad qué necesitas y qué no. Sin presión:
            la decisión siempre es tuya.
          </p>
          <div data-anim="up">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Agendar por WhatsApp
            </a>
          </div>
          <p style={{ ...label, letterSpacing: "0.2em", color: "rgba(250,248,245,0.38)", marginTop: "2.25rem", lineHeight: 2 }}>
            Cl. 7 #39-290, Consultorio 516 · El Poblado, Medellín
            <br />
            Lunes a sábado · 300 244 0656
          </p>
        </div>
      </section>

      <FooterPremium />

      {/* Barra fija en móvil: precio y acción siempre a mano */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 flex items-center justify-between"
        style={{
          zIndex: 80,
          gap: "1rem",
          backgroundColor: "rgba(20,20,20,0.96)",
          borderTop: "1px solid rgba(184,154,106,0.3)",
          padding: "0.7rem clamp(16px, 5vw, 24px) calc(0.7rem + env(safe-area-inset-bottom))",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <p style={{ ...cuerpo("rgba(250,248,245,0.5)", "0.62rem"), lineHeight: 1.3 }} className="truncate">{t.nombre}</p>
          <p style={{ ...display("1rem", CREAM), lineHeight: 1.3 }}>{precioTexto}</p>
        </div>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.85rem 1.25rem", flexShrink: 0 }}>
          Agendar
        </a>
      </div>
      {/* Espacio para que la barra fija no tape el pie de página */}
      <div className="lg:hidden" style={{ height: "72px", backgroundColor: DARK }} aria-hidden />

      <style>{`
        @media (prefers-reduced-motion: reduce) { .servicio-video { display: none; } }
      `}</style>
    </>
  );
}
