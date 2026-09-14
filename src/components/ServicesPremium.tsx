// Solo servicios reales del portafolio, cada uno con su página.
type Servicio = { label: string; slug: string };

const faciales: Servicio[] = [
  { label: "Botox", slug: "botox" },
  { label: "Ácido hialurónico", slug: "acido-hialuronico" },
  { label: "Labios", slug: "relleno-de-labios" },
  { label: "Rinomodelación", slug: "rinomodelacion" },
  { label: "Sculptra", slug: "sculptra" },
  { label: "Hilos tensores", slug: "hilos-tensores" },
  { label: "Láser CO2", slug: "laser-co2" },
  { label: "Tratamiento de manchas", slug: "cosmelan" },
  { label: "Hydrafacial", slug: "hydrafacial" },
  { label: "Limpieza facial", slug: "limpieza-facial" },
];

const corporales: Servicio[] = [
  { label: "Criolipólisis", slug: "criolipolisis" },
  { label: "Moldeamiento con INDIBA", slug: "moldeamiento-corporal" },
  { label: "Reducción metabólica", slug: "descenso-de-peso" },
  { label: "Tratamiento de celulitis", slug: "celulitis" },
];

const capilares: Servicio[] = [
  { label: "Trasplante capilar", slug: "implante-capilar-fue" },
  { label: "Trasplante de barba", slug: "trasplante-de-barba" },
  { label: "Exosomas capilares", slug: "exosomas-capilares" },
  { label: "PRP capilar", slug: "prp-capilar" },
  { label: "Mesoterapia capilar", slug: "mesoterapia-capilar" },
];

const inyectables: Servicio[] = [
  { label: "Ojeras", slug: "ojeras-acido-hialuronico" },
  { label: "Perfilado mandibular", slug: "perfilado-mandibular" },
  { label: "Skinbooster", slug: "skinbooster" },
  { label: "Sueroterapia", slug: "sueroterapia" },
];

const zonaIntima: Servicio[] = [
  { label: "Rejuvenecimiento vaginal", slug: "rejuvenecimiento-vaginal" },
  { label: "Despigmentación íntima y axilas", slug: "despigmentacion-intima-axilas" },
  { label: "Otomodelización", slug: "otomodelizacion" },
  { label: "Alectomía", slug: "alectomia" },
];

export function ServicesPremium() {
  return (
    <section id="servicios" className="py-28" style={{ backgroundColor: "#faf8f5" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-20" data-anim="up">
          <p className="section-label mb-4">LO QUE HACEMOS</p>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              fontWeight: 300,
              color: "#1c1c1c",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            Nuestros{" "}
            <em style={{ color: "#b89a6a", fontStyle: "italic" }}>Tratamientos</em>
          </h2>
        </div>

        {/* ══ BLOQUE 2: Faciales — Grid editorial ancho completo ══ */}
        <div
          id="faciales"
          className="mb-6 grid grid-cols-1 lg:grid-cols-[2fr_3fr]"
          data-anim="up"
          style={{ borderTop: "1px solid #e0d0c6" }}
        >
          {/* Label col */}
          <div
            className="px-8 py-12 flex flex-col justify-between"
            style={{ borderRight: "1px solid #e0d0c6" }}
          >
            <div>
              <span
                className="text-5xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 300,
                  color: "rgba(184,154,106,0.18)",
                  lineHeight: 1,
                }}
              >
                01
              </span>
              <h3
                className="mt-4"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 300,
                  color: "#1c1c1c",
                  letterSpacing: "-0.02em",
                }}
              >
                Faciales
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{
                  color: "#888580",
                  fontFamily: "var(--font-body)",
                  maxWidth: "220px",
                }}
              >
                Rejuvenecimiento con resultados naturales, sin sobrecargar el rostro.
              </p>
            </div>
            <div
              className="mt-8 h-px w-12"
              style={{ backgroundColor: "#b89a6a" }}
              data-anim="line"
            />
          </div>
          {/* Treatments col — pill cloud */}
          <div className="px-8 py-12 flex flex-wrap gap-3 content-start">
            {faciales.map((t) => (
              <a
                key={t.slug}
                href={`/servicios/${t.slug}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "#1c1c1c",
                  border: "1px solid #e0d0c6",
                  padding: "0.7rem 1rem",
                  whiteSpace: "nowrap",
                  transition: "border-color 0.25s, color 0.25s",
                                  }}
                className="hover:border-[#b89a6a] hover:text-[#b89a6a]"
              >
                {t.label}
              </a>
            ))}
            <div className="w-full mt-6">
              <a
                href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20tratamientos%20faciales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", color: "#b89a6a" }}
              >
                Solicitar información
                <span aria-hidden="true" style={{ fontSize: "0.8rem" }}>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ══ BLOQUE 3: Corporales + Capilares — side by side, pesos distintos ══ */}
        <div
          id="corporales"
          className="mb-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr]"
          data-anim="up"
          style={{ borderTop: "1px solid #e0d0c6", backgroundColor: "#f0e8e2" }}
        >
          {/* Corporales */}
          <div
            className="px-8 py-12"
            style={{ borderRight: "1px solid #e0d0c6" }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "rgba(184,154,106,0.18)",
                    lineHeight: 1,
                  }}
                >
                  02
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                    fontWeight: 300,
                    color: "#1c1c1c",
                    letterSpacing: "-0.02em",
                    marginTop: "0.5rem",
                  }}
                >
                  Corporales
                </h3>
              </div>
            </div>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: "#888580", fontFamily: "var(--font-body)", maxWidth: "300px" }}
            >
              Transforma tu figura con tecnología avanzada, sin cirugía.
            </p>
            <div className="flex flex-col gap-3">
              {corporales.map((t) => (
                <a
                  key={t.slug}
                  href={`/servicios/${t.slug}`}
                  className="flex items-center gap-3 transition-colors hover:text-[#b89a6a]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#1c1c1c" }}
                >
                  <span style={{ color: "#b89a6a", fontSize: "0.5rem" }}>◆</span>
                  {t.label}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20tratamientos%20corporales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", color: "#b89a6a" }}
              >
                Solicitar información
                <span aria-hidden="true" style={{ fontSize: "0.8rem" }}>→</span>
              </a>
            </div>
          </div>

          {/* Capilares */}
          <div id="capilares" className="px-8 py-12">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3rem",
                fontWeight: 300,
                color: "rgba(184,154,106,0.18)",
                lineHeight: 1,
              }}
            >
              03
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.02em",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Capilares
            </h3>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: "#888580", fontFamily: "var(--font-body)" }}
            >
              Recupera tu cabello con técnicas de vanguardia.
            </p>
            <div className="flex flex-col gap-3">
              {capilares.map((t) => (
                <a
                  key={t.slug}
                  href={`/servicios/${t.slug}`}
                  className="flex items-center gap-3 transition-colors hover:text-[#b89a6a]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#1c1c1c" }}
                >
                  <span style={{ color: "#b89a6a", fontSize: "0.5rem" }}>◆</span>
                  {t.label}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20implante%20capilar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", color: "#b89a6a" }}
              >
                Solicitar información
                <span aria-hidden="true" style={{ fontSize: "0.8rem" }}>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ══ BLOQUE 4: Inyectables + Zona Íntima — horizontal compact ══ */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          data-anim="up"
          style={{ borderTop: "1px solid #e0d0c6" }}
        >
          {/* Inyectables */}
          <div
            id="inyectables"
            className="px-8 py-10"
            style={{ borderRight: "1px solid #e0d0c6" }}
          >
            <div className="flex items-baseline gap-4 mb-5">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "rgba(184,154,106,0.18)",
                  lineHeight: 1,
                }}
              >
                04
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "#1c1c1c",
                  letterSpacing: "-0.02em",
                }}
              >
                Inyectables y bienestar
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {inyectables.map((t) => (
                <a
                  key={t.slug}
                  href={`/servicios/${t.slug}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    color: "#888580",
                    border: "1px solid #e0d0c6",
                    padding: "0.3rem 0.75rem",
                  }}
                >
                  {t.label}
                </a>
              ))}
            </div>
            <div className="w-full mt-5">
              <a
                href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20inyectables%20estéticos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", color: "#b89a6a" }}
              >
                Solicitar información
                <span aria-hidden="true" style={{ fontSize: "0.8rem" }}>→</span>
              </a>
            </div>
          </div>

          {/* Zona Íntima */}
          <div className="px-8 py-10">
            <div className="flex items-baseline gap-4 mb-5">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "rgba(184,154,106,0.18)",
                  lineHeight: 1,
                }}
              >
                05
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "#1c1c1c",
                  letterSpacing: "-0.02em",
                }}
              >
                Íntima y quirúrgicos
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {zonaIntima.map((t) => (
                <a
                  key={t.slug}
                  href={`/servicios/${t.slug}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    color: "#888580",
                    border: "1px solid #e0d0c6",
                    padding: "0.3rem 0.75rem",
                  }}
                >
                  {t.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center" data-anim="up">
          <a href="#agenda" className="btn-gold">
            AGENDA TU VALORACIÓN
          </a>
        </div>
      </div>
    </section>
  );
}
