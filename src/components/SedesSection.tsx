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
              fontSize: "0.8125rem",
              letterSpacing: "0.01em",
              color: "#b89a6a",
              marginBottom: "1rem",
            }}
          >
            Presencia internacional
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 600,
              color: "#faf8f5",
              letterSpacing: "-0.03em",
            }}
          >
            Nuestras{" "}
            <em style={{ color: "inherit" }}>
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
                    fontSize: "0.8125rem",
                    letterSpacing: "0.01em",
                    color: "#b89a6a",
                    marginBottom: "0.75rem",
                  }}
                >
                  Sede principal
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 600,
                    color: "#faf8f5",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Colombia
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "rgba(250,248,245,0.4)",
                    marginTop: "0.3rem",
                  }}
                >
                  Medellín · El Poblado
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { label: "Dirección", value: "Cl. 7 #39–290 Consultorio 516" },
                { label: "Zona", value: "El Poblado, Medellín, Antioquia" },
                { label: "Teléfono", value: "304 375 1975" },
                { label: "Horario", value: "Lun–Vie 9–19h · Sáb 9–14h" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        letterSpacing: "0.01em",
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
                fontSize: "0.8125rem",
                letterSpacing: "0.01em",
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
                    fontSize: "0.8125rem",
                    letterSpacing: "0.01em",
                    color: "#b89a6a",
                    marginBottom: "0.75rem",
                  }}
                >
                  Sede Argentina
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 600,
                    color: "#faf8f5",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Argentina
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "rgba(250,248,245,0.4)",
                    marginTop: "0.3rem",
                  }}
                >
                  Buenos Aires
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { label: "Dirección", value: "Av. Gaona 1237, Depto 11-2" },
                { label: "Ciudad", value: "Buenos Aires, Argentina" },
                { label: "Habilitación", value: "Doble habilitación ARG & COL" },
                { label: "WhatsApp", value: "+54 11 5344-7956" },
                { label: "Horario", value: "Lun–Vie 14–20h · Sáb 9–14h" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        letterSpacing: "0.01em",
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

            <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="https://wa.me/5491153447956?text=Hola%2C%20me%20interesa%20información%20sobre%20atención%20en%20Argentina"
              data-wa-fijo
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                letterSpacing: "0.01em",
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Gaona+1237,+Buenos+Aires,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                letterSpacing: "0.01em",
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
            </a>
            </div>
          </div>

        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              letterSpacing: "0.01em",
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
