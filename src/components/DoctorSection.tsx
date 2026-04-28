import Link from "next/link";

interface Credential {
  icon: string;
  label: string;
}

const credentials: Credential[] = [
  { icon: "✦", label: "Microimplante Capilar Expert" },
  { icon: "◉", label: "INDIBA Certified" },
  { icon: "⊕", label: "Médica Certificada" },
  { icon: "◈", label: "Formación Internacional" },
];

export function DoctorSection() {
  return (
    <section
      className="py-28 overflow-hidden"
      style={{ backgroundColor: "#f0e8e2" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: image placeholder ── */}
          <div className="relative opacity-0 animate-slide-right">
            {/* Main placeholder frame */}
            <div
              className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden flex flex-col items-center justify-end pb-12"
              style={{
                backgroundColor: "#e0d0c6",
                background:
                  "linear-gradient(160deg, #ede0d6 0%, #d8c8bb 60%, #c8b8a8 100%)",
              }}
            >
              {/* Subtle top light */}
              <div
                className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(250,248,245,0.15) 0%, transparent 100%)",
                }}
              />

              {/* Initials circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 animate-float"
                style={{ backgroundColor: "#b89a6a" }}
              >
                <span
                  className="text-xl font-semibold tracking-wider"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    color: "#faf8f5",
                    letterSpacing: "0.08em",
                  }}
                >
                  DD
                </span>
              </div>

              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "#5a4a3e", fontFamily: "var(--font-body)" }}
              >
                Dra. Daniela Díez
              </p>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -right-4 lg:-right-6 top-12 px-5 py-4 shadow-xl hidden lg:block opacity-0 animate-scale-in delay-400"
              style={{
                backgroundColor: "#1c1c1c",
                maxWidth: "210px",
                borderLeft: "2px solid #b89a6a",
              }}
            >
              <p className="section-label mb-2">ESPECIALIDAD</p>
              <p
                className="text-xs leading-snug"
                style={{ color: "#faf8f5", fontFamily: "var(--font-body)" }}
              >
                Medicina Estética &amp;
                <br />
                Microimplante Capilar
              </p>
            </div>

            {/* Gold corner accent */}
            <div
              className="absolute -bottom-3 -left-3 w-16 h-16 hidden lg:block"
              style={{ backgroundColor: "#b89a6a", opacity: 0.18 }}
            />
          </div>

          {/* ── Right: content ── */}
          <div className="opacity-0 animate-slide-left delay-200">
            {/* Section label */}
            <p className="section-label mb-5">CONOCE A LA FUNDADORA</p>

            {/* Heading */}
            <h2
              className="mb-1 leading-tight"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.025em",
              }}
            >
              Dra. Daniela
              <br />
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>Díez</em>
            </h2>

            <span className="gold-line" />

            {/* Bio paragraphs */}
            <p
              className="leading-relaxed mb-5"
              style={{
                color: "#1c1c1c",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                opacity: 0.78,
              }}
            >
              Médica formada en diversos niveles de complejidad, con una sólida
              vocación humana basada en valores éticos y morales. Especialista
              en Medicina Estética y Microimplante Capilar con formación en
              Colombia y Argentina.
            </p>
            <p
              className="leading-relaxed mb-10 text-sm"
              style={{ color: "#888580", fontFamily: "var(--font-body)" }}
            >
              Su enfoque proactivo, analítico y su liderazgo natural hacen de
              cada tratamiento una experiencia completamente personalizada. La
              Dra. Díez se distingue por su compromiso responsable con cada
              paciente y su búsqueda constante de la excelencia clínica.
            </p>

            {/* Credentials 2×2 */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {credentials.map((c, i) => {
                const delayClass =
                  i === 0
                    ? "delay-300"
                    : i === 1
                    ? "delay-400"
                    : i === 2
                    ? "delay-500"
                    : "delay-600";
                return (
                  <div
                    key={c.label}
                    className={`flex items-start gap-3 p-4 opacity-0 animate-fade-up ${delayClass}`}
                    style={{
                      backgroundColor: "rgba(184,154,106,0.07)",
                      borderLeft: "2px solid #b89a6a",
                    }}
                  >
                    <span
                      className="text-base mt-0.5 flex-shrink-0"
                      style={{ color: "#b89a6a" }}
                    >
                      {c.icon}
                    </span>
                    <span
                      className="text-xs font-medium leading-snug"
                      style={{ color: "#1c1c1c", fontFamily: "var(--font-body)" }}
                    >
                      {c.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              href="/nosotros"
              className="btn-outline-dark inline-block opacity-0 animate-fade-up delay-700"
            >
              CONOCER MÁS SOBRE EL EQUIPO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
