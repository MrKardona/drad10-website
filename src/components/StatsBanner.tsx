type Stat = {
  value: string;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  { value: "+500", label: "Pacientes Atendidos", sub: "Con resultados reales" },
  { value: "5+",   label: "Años de Experiencia", sub: "En medicina estética" },
  { value: "33+",  label: "Tratamientos",        sub: "Especializados y certificados" },
  { value: "98%",  label: "Satisfacción",        sub: "En encuestas post-tratamiento" },
];

// Full marquee set — duplicated for seamless infinite loop
const marqueeItems: string[] = [
  "MEDICINA ESTÉTICA",
  "INDIBA CERTIFIED",
  "EL POBLADO",
  "MEDELLÍN",
  "+500 PACIENTES",
  "DRA. DANIELA DÍEZ",
  "RESULTADOS REALES",
  "QUANTUM CERTIFIED",
];

const marqueeTrack = [...marqueeItems, ...marqueeItems];

export function StatsBanner() {
  return (
    <section style={{ backgroundColor: "#1c1c1c" }}>

      {/* ── Top gold decorative stripe (2 px) ── */}
      <div
        className="w-full"
        style={{
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #b89a6a 20%, #b89a6a 80%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* ── Stats grid ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const delayClass =
              i === 0
                ? "delay-100"
                : i === 1
                ? "delay-200"
                : i === 2
                ? "delay-300"
                : "delay-400";

            return (
              <div
                key={stat.label}
                className={`relative px-8 py-14 flex flex-col gap-1 opacity-0 animate-scale-in ${delayClass}`}
                style={{ animationFillMode: "forwards" }}
              >
                {/* Vertical gold separator between columns (desktop only) */}
                {i > 0 && (
                  <div
                    className="absolute left-0 top-10 bottom-10 w-px hidden lg:block"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(184,154,106,0.35) 30%, rgba(184,154,106,0.35) 70%, transparent)",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Mobile: thin horizontal bottom border */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px lg:hidden"
                  style={{ backgroundColor: "rgba(184,154,106,0.12)" }}
                  aria-hidden="true"
                />

                {/* Number — large Cormorant gold */}
                <span
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(2.8rem, 5vw, 4rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    color: "#b89a6a",
                  }}
                >
                  {stat.value}
                </span>

                {/* Label — white */}
                <span
                  className="text-sm font-medium mt-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#ffffff",
                    letterSpacing: "0.03em",
                  }}
                >
                  {stat.label}
                </span>

                {/* Sub-label — muted grey */}
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#888580",
                  }}
                >
                  {stat.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mid gold thin divider ── */}
      <div
        className="w-full"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(184,154,106,0.35) 20%, rgba(184,154,106,0.35) 80%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* ── Marquee band ── */}
      <div
        className="py-5 overflow-hidden"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {marqueeTrack.map((text, idx) => (
            <span
              key={`${text}-${idx}`}
              className="flex items-center gap-6 pr-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-medium whitespace-nowrap"
                style={{ color: "#888580" }}
              >
                {text}
              </span>
              <span
                className="text-[8px]"
                style={{ color: "#b89a6a" }}
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
