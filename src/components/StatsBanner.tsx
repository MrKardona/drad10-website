import Image from "next/image";

const marqueeItems: string[] = [
  "MEDICINA ESTÉTICA",
  "INDIBA CERTIFIED",
  "EL POBLADO",
  "MEDELLÍN",
  "+20.000 PACIENTES",
  "DRA. DANIELA DÍEZ",
  "RESULTADOS REALES",
  "QUANTUM CERTIFIED",
];

const marqueeTrack = [...marqueeItems, ...marqueeItems];

export function StatsBanner() {
  return (
    <section style={{ backgroundColor: "#1c1c1c" }}>

      {/* ── Top gold stripe ── */}
      <div
        className="w-full"
        style={{
          height: "2px",
          background: "linear-gradient(to right, transparent, #b89a6a 20%, #b89a6a 80%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* ── Main content: narrative + facts ── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px_auto] gap-12 lg:gap-16 items-center">

          {/* Left: editorial sentence */}
          <div data-anim="left">
            <p
              className="section-label mb-6"
              style={{ color: "rgba(184,154,106,0.6)" }}
            >
              RESPALDO REAL
            </p>
            <p
              className="leading-snug"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.02em",
                maxWidth: "560px",
              }}
            >
              <span style={{ color: "#b89a6a" }}>20.000 pacientes</span> y{" "}
              <span style={{ color: "#b89a6a" }}>5 años</span> después, seguimos
              midiendo lo único que importa:{" "}
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
                resultados que se notan.
              </em>
            </p>
          </div>

          {/* Middle: foto de marca (TODO: reemplazar por foto real de la clínica) */}
          <div
            className="relative hidden lg:block"
            data-anim="up"
            style={{ aspectRatio: "3 / 4" }}
          >
            {/* Esquinas doradas */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                width: "36px",
                height: "36px",
                borderTop: "2px solid #b89a6a",
                borderLeft: "2px solid #b89a6a",
                zIndex: 10,
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                width: "36px",
                height: "36px",
                borderBottom: "2px solid #b89a6a",
                borderRight: "2px solid #b89a6a",
                zIndex: 10,
              }}
            />
            <Image
              src="/images/instagram/post-01.webp"
              alt="DRA.D10 — Medicina estética en Medellín"
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>

          {/* Right: 4 compact facts stacked */}
          <div
            className="flex flex-row lg:flex-col gap-8 lg:gap-0 flex-wrap"
            data-anim="right"
          >
            {[
              { num: "20000", pre: "+", suf: "", label: "Pacientes atendidas" },
              { num: "5",   pre: "",  suf: "+", label: "Años de trayectoria" },
              { num: "35",  pre: "",  suf: "+", label: "Tratamientos disponibles" },
              { num: "4.9", pre: "",  suf: "★", label: "Calificación en Google" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex items-baseline gap-3 lg:py-5"
                style={{
                  borderTop: i > 0 ? "1px solid rgba(184,154,106,0.15)" : "none",
                }}
              >
                {/* Number */}
                <span
                  data-counter={s.num}
                  data-prefix={s.pre}
                  data-suffix={s.suf}
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(2rem, 3vw, 2.6rem)",
                    fontWeight: 300,
                    color: "#b89a6a",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    minWidth: "80px",
                  }}
                >
                  {s.pre}{s.num}{s.suf}
                </span>
                {/* Label */}
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(250,248,245,0.45)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gold divider ── */}
      <div
        className="w-full"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(184,154,106,0.3) 20%, rgba(184,154,106,0.3) 80%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* ── Marquee ── */}
      <div className="py-5 overflow-hidden" aria-hidden="true">
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
              <span className="text-[8px]" style={{ color: "#b89a6a" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
