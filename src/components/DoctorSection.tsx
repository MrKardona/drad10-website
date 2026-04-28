import Link from "next/link";

interface Credential {
  label: string;
}

const credentials: Credential[] = [
  { label: "Microimplante Capilar Expert" },
  { label: "INDIBA Certified" },
  { label: "Médica Certificada" },
  { label: "Formación Internacional" },
];

export function DoctorSection() {
  return (
    <section
      className="py-28 overflow-hidden"
      style={{ backgroundColor: "#f0e8e2" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: visual placeholder ── */}
          <div className="relative opacity-0 animate-slide-right">
            {/* Gold corner decorations — outer container */}
            <div className="relative inline-block w-full max-w-sm mx-auto lg:mx-0">
              {/* Top-left gold corner */}
              <div
                className="absolute -top-3 -left-3 w-10 h-10 hidden lg:block pointer-events-none"
                style={{
                  borderTop: "2px solid #b89a6a",
                  borderLeft: "2px solid #b89a6a",
                }}
              />
              {/* Bottom-right gold corner */}
              <div
                className="absolute -bottom-3 -right-3 w-10 h-10 hidden lg:block pointer-events-none"
                style={{
                  borderBottom: "2px solid #b89a6a",
                  borderRight: "2px solid #b89a6a",
                }}
              />

              {/* Main placeholder frame */}
              <div
                className="relative aspect-[3/4] w-full overflow-hidden flex flex-col items-center justify-center pb-12"
                style={{
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

                {/* Initials circle with gold border */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-5 animate-float"
                  style={{
                    backgroundColor: "rgba(184,154,106,0.15)",
                    border: "2px solid #b89a6a",
                  }}
                >
                  <span
                    className="text-2xl font-semibold tracking-wider"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      color: "#5a4a3e",
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

                {/* Floating badge — bottom of image frame */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{
                    backgroundColor: "#1c1c1c",
                    borderTop: "2px solid #b89a6a",
                  }}
                >
                  <p className="section-label mb-1">ESPECIALIDAD</p>
                  <p
                    className="text-xs leading-snug"
                    style={{
                      color: "#faf8f5",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Medicina Estética &amp; Microimplante Capilar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className="opacity-0 animate-slide-left delay-200">
            {/* Section label */}
            <p className="section-label mb-5">CONOCE A LA FUNDADORA</p>

            {/* Heading — two lines */}
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

            {/* Bio — two real paragraphs */}
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
              en Medicina Estética y Microimplante Capilar.
            </p>
            <p
              className="leading-relaxed mb-10 text-sm"
              style={{ color: "#888580", fontFamily: "var(--font-body)" }}
            >
              Su enfoque proactivo, analítico y su liderazgo natural hacen de
              cada tratamiento una experiencia personalizada y de alto nivel. La
              Dra. Díez se destaca por su fácil adaptación y un compromiso
              responsable con cada paciente.
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
                      className="text-xs font-medium leading-snug"
                      style={{
                        color: "#1c1c1c",
                        fontFamily: "var(--font-body)",
                      }}
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
