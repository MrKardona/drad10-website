const faciales = [
  "Botox", "Ácido Hialurónico", "Hilos Tensores", "Bioestimuladores de Colágeno",
  "Peeling Químico", "Microagujamiento Facial", "Plasma Rico en Plaquetas",
  "Mesoterapia Facial", "Limpieza Profunda", "Radiofrecuencia Facial",
];

const corporales = [
  "Microagujas Corporales", "Mesoterapia Corporal",
  "Sueroterapia", "Moldeamiento Corporal",
];

const capilares = [
  "Implante Capilar", "Exosomas Capilares",
  "PRP Capilar", "Mesoterapia Capilar", "Tratamiento Folicular",
];

const inyectables = [
  "Inyectables Estéticos", "Plasma Rico en Plaquetas",
  "Mesoterapia", "Sueroterapia",
];

const zonaIntima = [
  "Despigmentación Zona Íntima", "Estrechamiento Vaginal",
  "Relleno de Labios Mayores", "Otomodeolación",
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

        {/* ══ BLOQUE 1: Scanner D10 — Protagonista full-width ══ */}
        <div
          className="mb-6 p-10 lg:p-14 relative overflow-hidden"
          data-anim="up"
          style={{ backgroundColor: "#1c1c1c" }}
        >
          {/* Gold corner accent */}
          <div
            className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
            style={{
              background: "radial-gradient(circle at top right, rgba(184,154,106,0.12), transparent 70%)",
            }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p className="section-label mb-4" style={{ color: "#b89a6a" }}>
                TECNOLOGÍA INSIGNIA
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 300,
                  color: "#faf8f5",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Scanner D10
                <br />
                <em style={{ color: "#b89a6a" }}>INDIBA®</em>
              </h3>
              <p
                className="mt-5 max-w-lg leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "rgba(250,248,245,0.6)",
                  lineHeight: 1.8,
                }}
              >
                Nuestra tecnología exclusiva de radiofrecuencia profunda para
                rejuvenecimiento celular, lifting sin bisturí y regeneración de
                colágeno. El tratamiento insignia de DRA.D10.
              </p>
              <div className="flex flex-wrap gap-2 mt-7">
                {["Radiofrecuencia", "Anti-aging", "Lifting", "Colágeno"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#b89a6a",
                      border: "1px solid rgba(184,154,106,0.35)",
                      padding: "0.3rem 0.8rem",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="text-right hidden lg:block"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "7rem",
                fontWeight: 300,
                color: "rgba(184,154,106,0.08)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                userSelect: "none",
              }}
            >
              D10
            </div>
          </div>
        </div>

        {/* ══ BLOQUE 2: Faciales — Grid editorial ancho completo ══ */}
        <div
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
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "#1c1c1c",
                  border: "1px solid #e0d0c6",
                  padding: "0.45rem 1rem",
                  whiteSpace: "nowrap",
                  transition: "border-color 0.25s, color 0.25s",
                  cursor: "default",
                }}
                className="hover:border-[#b89a6a] hover:text-[#b89a6a]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ══ BLOQUE 3: Corporales + Capilares — side by side, pesos distintos ══ */}
        <div
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
                <div
                  key={t}
                  className="flex items-center gap-3"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#1c1c1c" }}
                >
                  <span style={{ color: "#b89a6a", fontSize: "0.5rem" }}>◆</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Capilares */}
          <div className="px-8 py-12">
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
                <div
                  key={t}
                  className="flex items-center gap-3"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#1c1c1c" }}
                >
                  <span style={{ color: "#b89a6a", fontSize: "0.5rem" }}>◆</span>
                  {t}
                </div>
              ))}
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
                Inyectables
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {inyectables.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    color: "#888580",
                    border: "1px solid #e0d0c6",
                    padding: "0.3rem 0.75rem",
                  }}
                >
                  {t}
                </span>
              ))}
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
                Zona Íntima
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {zonaIntima.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    color: "#888580",
                    border: "1px solid #e0d0c6",
                    padding: "0.3rem 0.75rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center" data-anim="up">
          <a href="#agenda" className="btn-gold">
            AGENDA UNA VALORACIÓN GRATUITA
          </a>
        </div>
      </div>
    </section>
  );
}
