import Link from "next/link";

export function SedesSection() {
  return (
    <section
      id="sedes"
      style={{ backgroundColor: "#1c1c1c" }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase" as const,
              color: "#b89a6a",
              marginBottom: "1rem",
            }}
          >
            PRESENCIA INTERNACIONAL
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.025em",
            }}
          >
            Nuestras{" "}
            <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
              sedes
            </em>
          </h2>
        </div>

        {/* Two locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(184,154,106,0.15)" }}>

          {/* Colombia */}
          <div
            style={{ backgroundColor: "#1c1c1c", padding: "clamp(2.5rem, 5vw, 4rem)" }}
            className="group"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase" as const,
                    color: "#b89a6a",
                    marginBottom: "0.75rem",
                  }}
                >
                  SEDE PRINCIPAL
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 300,
                    color: "#faf8f5",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Colombia
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "rgba(250,248,245,0.4)",
                    marginTop: "0.3rem",
                  }}
                >
                  Medellín · El Poblado
                </p>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "4rem",
                  fontWeight: 300,
                  color: "rgba(184,154,106,0.1)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none" as const,
                }}
              >
                CO
              </span>
            </div>

            <div
              style={{
                width: "48px",
                height: "1px",
                background: "linear-gradient(to right, #b89a6a, transparent)",
                marginBottom: "2rem",
              }}
            />

            <div className="space-y-4 mb-8">
              {[
                { icon: "📍", label: "Dirección", value: "Cl. 7 #39–290 Consultorio 516" },
                { icon: "🏙️", label: "Zona", value: "El Poblado, Medellín, Antioquia" },
                { icon: "📞", label: "Teléfono", value: "300 244 0656" },
                { icon: "🕐", label: "Horario", value: "Lun–Vie 9–19h · Sáb 9–14h" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span style={{ fontSize: "0.85rem", marginTop: "1px", opacity: 0.6 }}>{item.icon}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase" as const,
                        color: "rgba(184,154,106,0.5)",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "rgba(250,248,245,0.65)",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="https://maps.app.goo.gl/dtwj4zv9ayygTz8NA"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: "#b89a6a",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-70"
            >
              Ver en Google Maps
              <span>→</span>
            </Link>
          </div>

          {/* Argentina */}
          <div
            style={{ backgroundColor: "#141414", padding: "clamp(2.5rem, 5vw, 4rem)" }}
            className="group"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase" as const,
                    color: "#b89a6a",
                    marginBottom: "0.75rem",
                  }}
                >
                  SEDE ARGENTINA
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 300,
                    color: "#faf8f5",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Argentina
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "rgba(250,248,245,0.4)",
                    marginTop: "0.3rem",
                  }}
                >
                  Buenos Aires
                </p>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "4rem",
                  fontWeight: 300,
                  color: "rgba(184,154,106,0.1)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none" as const,
                }}
              >
                AR
              </span>
            </div>

            <div
              style={{
                width: "48px",
                height: "1px",
                background: "linear-gradient(to right, #b89a6a, transparent)",
                marginBottom: "2rem",
              }}
            />

            <div className="space-y-4 mb-8">
              {[
                { icon: "📍", label: "Ciudad", value: "Buenos Aires, Argentina" },
                { icon: "🌎", label: "Habilitación", value: "Doble habilitación ARG & COL" },
                { icon: "📞", label: "Contacto", value: "A través de WhatsApp" },
                { icon: "🕐", label: "Atención", value: "Consultar disponibilidad" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span style={{ fontSize: "0.85rem", marginTop: "1px", opacity: 0.6 }}>{item.icon}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase" as const,
                        color: "rgba(184,154,106,0.5)",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "rgba(250,248,245,0.65)",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20atención%20en%20Argentina"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: "#b89a6a",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-70"
            >
              Consultar por WhatsApp
              <span>→</span>
            </a>
          </div>

        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: "rgba(184,154,106,0.35)",
            }}
          >
            Dra. Daniela Díez · Habilitación médica en Argentina y Colombia
          </p>
        </div>
      </div>
    </section>
  );
}
