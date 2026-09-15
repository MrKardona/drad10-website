import Image from "next/image";

const marqueeItems: string[] = [
  "Medicina estética",
  "INDIBA certified",
  "El Poblado",
  "Medellín",
  "+20.000 pacientes",
  "Dra. Daniela Díez",
  "Resultados reales",
  "Quantum certified",
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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px_340px] gap-12 lg:gap-16 items-center">

          {/* Left: editorial sentence */}
          <div data-anim="left">
            <p
              className="section-label mb-6"
              style={{ color: "rgba(184,154,106,0.6)" }}
            >
              Respaldo real
            </p>
            <p
              className="leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: "#faf8f5",
                letterSpacing: "-0.03em",
                maxWidth: "560px",
              }}
            >
              20.000 pacientes y{" "}
              5 años después, seguimos
              midiendo lo único que importa:{" "}
              <em style={{ color: "inherit" }}>
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
              src="/images/dra/bata-rosa.webp"
              alt="Dra. Daniela Díez — directora médica de DRA.D10, El Poblado, Medellín"
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
              { num: "20000", pre: "+", suf: "", label: "Pacientes atendidas", texto: "+20.000" },
              { num: "5",   pre: "",  suf: "+", label: "Años de trayectoria", texto: "5+" },
              { num: "35",  pre: "",  suf: "+", label: "Tratamientos disponibles", texto: "35+" },
              { num: "4.9", pre: "",  suf: "★", label: "Calificación en Google", texto: "4.9★" },
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
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 3vw, 2.6rem)",
                    fontWeight: 600,
                    color: "#b89a6a",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    // Ancho fijo y cifras del mismo ancho: el contador no empuja la foto.
                    display: "inline-block",
                    width: "6.8ch",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.texto}
                </span>
                {/* Label */}
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.01em",
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
                className="text-[13px] tracking-normal font-medium whitespace-nowrap"
                style={{ color: "#888580" }}
              >
                {text}
              </span>
              <span className="text-[13px]" style={{ color: "#b89a6a" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
