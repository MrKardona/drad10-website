interface Testimonial {
  initials: string;
  name: string;
  treatment: string;
  quote: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    initials: "MC",
    name: "María Camila R.",
    treatment: "Botox + Ácido Hialurónico",
    quote:
      "El resultado fue increíble y completamente natural. La Dra. Díez me explicó todo el proceso y me hizo sentir muy segura. Sin duda volvería.",
    stars: 5,
  },
  {
    initials: "VS",
    name: "Valentina S.",
    treatment: "Implante Capilar",
    quote:
      "Llevaba años buscando una solución para mi cabello. En DRAD10 encontré no solo el tratamiento sino una atención cálida y totalmente profesional.",
    stars: 5,
  },
  {
    initials: "JM",
    name: "Juliana M.",
    treatment: "Scanner Facial D10",
    quote:
      "Después de la primera sesión noté la diferencia. Mi piel se veía más luminosa y firme. El equipo es muy profesional y el espacio precioso.",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="py-28 overflow-hidden"
      style={{ backgroundColor: "#1c1c1c" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 opacity-0 animate-fade-up">
          <div>
            <p className="section-label mb-5">LO QUE DICEN</p>
            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.025em",
              }}
            >
              Pacientes que
              <br />
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
                confían en nosotros
              </em>
            </h2>
          </div>

          {/* Rating badge */}
          <div
            className="flex flex-col items-start lg:items-end gap-2 opacity-0 animate-fade-in delay-300"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="text-lg"
                  style={{ color: "#b89a6a" }}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>
            <span
              className="text-sm tracking-wide"
              style={{ color: "#888580", fontFamily: "var(--font-body)" }}
            >
              5.0 · Google Reviews
            </span>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(184,154,106,0.12)" }}>
          {testimonials.map((t, index) => {
            const delayClass =
              index === 0 ? "delay-200" : index === 1 ? "delay-400" : "delay-600";

            return (
              <div
                key={t.name}
                className={`flex flex-col gap-6 p-8 opacity-0 animate-fade-up ${delayClass}`}
                style={{
                  backgroundColor: "#2e2e2e",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1" aria-label={`${t.stars} estrellas`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span
                      key={i}
                      className="text-sm"
                      style={{ color: "#b89a6a" }}
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p
                    className="italic leading-relaxed"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "1.05rem",
                      color: "rgba(250,248,245,0.82)",
                      fontWeight: 300,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-5"
                  style={{ borderTop: "1px solid rgba(184,154,106,0.18)" }}
                >
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(184,154,106,0.2)" }}
                  >
                    <span
                      className="text-xs font-semibold tracking-wider"
                      style={{
                        color: "#d4b896",
                        fontFamily: "var(--font-body)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {t.initials}
                    </span>
                  </div>

                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#faf8f5", fontFamily: "var(--font-body)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#888580", fontFamily: "var(--font-body)" }}
                    >
                      {t.treatment}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Subtle bottom note ── */}
        <p
          className="mt-10 text-center text-xs opacity-0 animate-fade-in delay-800"
          style={{ color: "#888580", fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
        >
          Reseñas verificadas · Más de 500 pacientes satisfechas
        </p>
      </div>
    </section>
  );
}
