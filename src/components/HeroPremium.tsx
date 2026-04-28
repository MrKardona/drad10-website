import Link from "next/link";

export function HeroPremium() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #faf8f5 0%, #f5ede6 55%, #f0e8e2 100%)",
      }}
    >
      {/* ── Subtle background ornaments ── */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        aria-hidden="true"
        style={{ backgroundColor: "#e0d0c6", opacity: 0.35 }}
      />
      {/* Large faint circle top-right */}
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
          {/* Section label */}
          <p
            className="section-label mb-6 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards" }}
          >
            ✦ Medellín · El Poblado · Colombia
          </p>

          {/* Heading */}
          <h1
            className="leading-[0.92] mb-2 opacity-0 animate-fade-up delay-100"
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
            className="gold-line opacity-0 animate-fade-up delay-300"
            style={{ animationFillMode: "forwards" }}
          />

          {/* Subtitle */}
          <p
            className="text-base leading-relaxed max-w-lg mb-10 opacity-0 animate-fade-up delay-400"
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
            className="flex flex-wrap gap-4 mb-14 opacity-0 animate-fade-up delay-500"
            style={{ animationFillMode: "forwards" }}
          >
            <Link href="#agenda" className="btn-gold">
              AGENDA TU CITA
            </Link>
            <Link href="#servicios" className="btn-outline-dark">
              VER TRATAMIENTOS
            </Link>
          </div>

          {/* Floating badges */}
          <div
            className="flex flex-wrap gap-3 opacity-0 animate-fade-up delay-600"
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
          {/* Main rectangle panel */}
          <div
            className="relative rounded-none overflow-hidden"
            style={{
              backgroundColor: "#e0d0c6",
              minHeight: "460px",
            }}
          >
            {/* Decorative circles inside panel */}
            <div
              className="absolute top-8 right-8 w-40 h-40 rounded-full"
              style={{
                border: "1px solid rgba(184,154,106,0.3)",
                background: "transparent",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute top-16 right-16 w-24 h-24 rounded-full"
              style={{
                border: "1px solid rgba(184,154,106,0.22)",
                background: "transparent",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-12 left-8 w-28 h-28 rounded-full"
              style={{
                border: "1px solid rgba(184,154,106,0.2)",
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

            {/* Floating feature card — animate-float */}
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
                <p className="section-label mb-3">Tratamiento Destacado</p>
                <h3
                  className="text-[#1c1c1c] text-xl mb-2 leading-snug"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  INDIBA · Scanner D10
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#888580",
                  }}
                >
                  Radiofrecuencia de última generación. Resultados visibles
                  desde la primera sesión.
                </p>
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "rgba(184,154,106,0.2)" }}
                >
                  <span
                    className="text-[9px] tracking-[0.25em] uppercase"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#888580",
                    }}
                  >
                    Tecnología Certificada
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

            {/* Subtle label top */}
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
            background:
              "linear-gradient(to bottom, #b89a6a, transparent)",
          }}
        />
      </div>
    </section>
  );
}
