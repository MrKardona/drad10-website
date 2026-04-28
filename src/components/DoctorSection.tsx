import Link from "next/link";
import Image from "next/image";

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

          {/* ── Left: Doctor photo ── */}
          <div className="relative opacity-0 animate-slide-right">
            <div className="relative inline-block w-full max-w-sm mx-auto lg:mx-0">
              {/* Top-left gold corner */}
              <div
                className="absolute -top-3 -left-3 w-10 h-10 hidden lg:block pointer-events-none z-10"
                style={{
                  borderTop: "2px solid #b89a6a",
                  borderLeft: "2px solid #b89a6a",
                }}
              />
              {/* Bottom-right gold corner */}
              <div
                className="absolute -bottom-3 -right-3 w-10 h-10 hidden lg:block pointer-events-none z-10"
                style={{
                  borderBottom: "2px solid #b89a6a",
                  borderRight: "2px solid #b89a6a",
                }}
              />

              {/* Photo frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden img-zoom">
                <Image
                  src="/images/dra-daniela.jpg"
                  alt="Dra. Daniela Díez — DRA.D10 Medicina Estética"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 384px"
                  priority
                />
                {/* Bottom badge overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4 z-10"
                  style={{
                    backgroundColor: "rgba(28,28,28,0.92)",
                    borderTop: "2px solid #b89a6a",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <p className="section-label mb-1">FUNDADORA</p>
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
            <p className="section-label mb-5">CONOCE A LA FUNDADORA</p>

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

        {/* ── Team photo strip ── */}
        <div className="mt-24 opacity-0 animate-fade-up delay-300">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden" style={{ borderRadius: 0 }}>
            {/* Left label */}
            <div
              className="md:col-span-2 flex flex-col justify-center px-10 py-12"
              style={{ backgroundColor: "#1c1c1c" }}
            >
              <p className="section-label mb-4" style={{ color: "#b89a6a" }}>NUESTRO EQUIPO</p>
              <h3
                className="leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 300,
                  color: "#faf8f5",
                  letterSpacing: "-0.02em",
                }}
              >
                Profesionales
                <br />
                <em style={{ color: "#b89a6a", fontStyle: "italic" }}>dedicadas</em>
                <br />
                a ti
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-body)" }}
              >
                Un equipo formado con vocación, experiencia y calidez humana.
                Cada miembro está comprometida con tu bienestar y tus resultados.
              </p>
            </div>

            {/* Team photo */}
            <div className="md:col-span-3 relative" style={{ minHeight: "340px" }}>
              <Image
                src="/images/equipo.jpg"
                alt="Equipo DRA.D10 — Clínica Quantum Medellín"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              {/* Gold overlay strip at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: "#b89a6a" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
