import Link from "next/link";

// 6 floating gold particles — positions and sizes chosen for visual balance
const particles: {
  width: number;
  height: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
}[] = [
  { width: 6,  height: 6,  top: "12%",  left: "8%",  delay: "0s",    duration: "9s"  },
  { width: 4,  height: 4,  top: "28%",  left: "18%", delay: "1.5s",  duration: "11s" },
  { width: 8,  height: 8,  top: "55%",  left: "5%",  delay: "0.8s",  duration: "13s" },
  { width: 5,  height: 5,  top: "72%",  left: "22%", delay: "2.2s",  duration: "10s" },
  { width: 7,  height: 7,  top: "18%",  left: "42%", delay: "3s",    duration: "12s" },
  { width: 4,  height: 4,  top: "80%",  left: "38%", delay: "1s",    duration: "8s"  },
];

export function HeroPremium() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden grain"
      style={{
        background:
          "linear-gradient(135deg, #faf8f5 0%, #f5ede6 55%, #f0e8e2 100%)",
      }}
    >
      {/* ── Floating gold particles ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
              backgroundColor: "#b89a6a",
              opacity: 0,
              animation: `particleFloat ${p.duration} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Subtle background wash right side ── */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        aria-hidden="true"
        style={{ backgroundColor: "#e0d0c6", opacity: 0.35 }}
      />

      {/* ── Large faint circle top-right ── */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          border: "1px solid rgba(184,154,106,0.18)",
          background: "transparent",
        }}
      />
      <div
        className="absolute top-20 right-20 w-[320px] h-[320px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          border: "1px solid rgba(184,154,106,0.12)",
          background: "transparent",
        }}
      />

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center w-full">

        {/* ═══ LEFT — copy ═══ */}
        <div>
          {/* Location label */}
          <p
            className="section-label mb-6 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            MEDELLÍN · EL POBLADO · COLOMBIA
          </p>

          {/* Heading line 1 */}
          <h1
            className="leading-[0.92] mb-2 opacity-0 animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 6rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#1c1c1c",
              animationFillMode: "forwards",
            }}
          >
            Medicina Estética
          </h1>

          {/* Heading line 2 — italic gold */}
          <h1
            className="leading-[0.92] mb-7 opacity-0 animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 6rem)",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "#b89a6a",
              animationFillMode: "forwards",
            }}
          >
            de Alto Nivel
          </h1>

          {/* Gold divider */}
          <span
            className="gold-line opacity-0 animate-fade-in delay-300"
            style={{ animationFillMode: "forwards" }}
          />

          {/* Description */}
          <p
            className="text-base leading-relaxed max-w-lg mb-10 opacity-0 animate-fade-up delay-300"
            style={{
              fontFamily: "var(--font-body)",
              color: "#888580",
              animationFillMode: "forwards",
            }}
          >
            Transformamos tu bienestar con tratamientos seguros, naturales y
            personalizados. Respaldo médico certificado, tecnología de
            vanguardia y resultados reales.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-14 opacity-0 animate-fade-up delay-400"
            style={{ animationFillMode: "forwards" }}
          >
            <Link href="#agenda" className="btn-gold">
              AGENDA TU CITA
            </Link>
            <Link href="#servicios" className="btn-outline-dark">
              VER TRATAMIENTOS
            </Link>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-3 opacity-0 animate-fade-up delay-500"
            style={{ animationFillMode: "forwards" }}
          >
            {[
              "✦ INDIBA Certified",
              "★ +500 Pacientes",
              "▲ Medellín",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-4 py-2 text-[10px] tracking-[0.2em] font-medium border transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#b89a6a",
                  borderColor: "rgba(184,154,106,0.35)",
                  backgroundColor: "rgba(184,154,106,0.06)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ RIGHT — decorative visual panel ═══ */}
        <div
          className="hidden lg:flex flex-col gap-5 items-stretch opacity-0 animate-slide-left delay-300"
          style={{ animationFillMode: "forwards" }}
        >
          {/* Main blush rectangle */}
          <div
            className="relative overflow-hidden"
            style={{
              backgroundColor: "#e0d0c6",
              minHeight: "480px",
            }}
          >
            {/* 3 concentric decorative circles — gold border */}
            <div
              className="absolute top-6 right-6 w-48 h-48 rounded-full"
              style={{
                border: "1px solid rgba(184,154,106,0.35)",
                background: "transparent",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute top-14 right-14 w-32 h-32 rounded-full"
              style={{
                border: "1px solid rgba(184,154,106,0.25)",
                background: "transparent",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute top-[4.5rem] right-[4.5rem] w-16 h-16 rounded-full"
              style={{
                border: "1px solid rgba(184,154,106,0.18)",
                background: "transparent",
              }}
              aria-hidden="true"
            />

            {/* Gold vertical accent line */}
            <div
              className="absolute left-0 top-10 bottom-10 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #b89a6a 40%, #b89a6a 60%, transparent)",
              }}
              aria-hidden="true"
            />

            {/* Top label */}
            <div className="absolute top-8 left-8">
              <span
                className="text-[9px] tracking-[0.3em] uppercase"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#b89a6a",
                  opacity: 0.7,
                }}
              >
                DRA.D10
              </span>
            </div>

            {/* Floating feature card */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[88%] animate-float"
              style={{ animationFillMode: "forwards" }}
            >
              <div
                className="p-6 border"
                style={{
                  backgroundColor: "#faf8f5",
                  borderColor: "rgba(184,154,106,0.28)",
                  boxShadow: "0 24px 56px rgba(28,28,28,0.10)",
                }}
              >
                <p className="section-label mb-3">TRATAMIENTO DESTACADO</p>
                <h3
                  className="text-[#1c1c1c] text-xl mb-2 leading-snug"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  INDIBA · Scanner Facial D10
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#888580",
                  }}
                >
                  Tecnología de radiofrecuencia de última generación para
                  rejuvenecimiento facial profundo y resultados visibles desde
                  la primera sesión.
                </p>
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "rgba(184,154,106,0.2)" }}
                >
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase font-medium"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#b89a6a",
                    }}
                  >
                    CLÍNICA QUANTUM CERTIFIED
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-widest"
                    style={{ color: "#b89a6a" }}
                  >
                    ✦
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social proof pill */}
          <div
            className="flex items-center gap-4 px-5 py-4 border"
            style={{
              backgroundColor: "#faf8f5",
              borderColor: "rgba(184,154,106,0.22)",
              boxShadow: "0 4px 20px rgba(28,28,28,0.05)",
            }}
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2 flex-shrink-0">
              {(["DD", "MP", "AL"] as const).map((initials) => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[9px] font-semibold"
                  style={{
                    backgroundColor: "#b89a6a",
                    borderColor: "#faf8f5",
                    color: "#faf8f5",
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p
              className="text-xs leading-snug"
              style={{
                fontFamily: "var(--font-body)",
                color: "#888580",
              }}
            >
              <strong style={{ color: "#1c1c1c" }}>+500 pacientes</strong>{" "}
              nos eligieron este año
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-800"
        style={{ animationFillMode: "forwards" }}
        aria-hidden="true"
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase"
          style={{ fontFamily: "var(--font-body)", color: "#b89a6a" }}
        >
          scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, #b89a6a, transparent)",
          }}
        />
      </div>
    </section>
  );
}
