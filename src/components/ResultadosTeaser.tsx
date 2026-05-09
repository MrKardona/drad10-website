import Link from "next/link";
import Image from "next/image";

// Muestra 4 casos representativos — cambia por imágenes reales de la clínica
const casos = [
  {
    id: "botox",
    label: "Faciales",
    tratamiento: "Toxina Botulínica",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=750&fit=crop&crop=face",
  },
  {
    id: "labios",
    label: "Inyectables",
    tratamiento: "Ácido Hialurónico",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=750&fit=crop&crop=face",
  },
  {
    id: "corporal",
    label: "Corporales",
    tratamiento: "INDIBA Activ",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=750&fit=crop&crop=center",
  },
  {
    id: "capilar",
    label: "Capilares",
    tratamiento: "Implante Capilar",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=750&fit=crop&crop=top",
  },
];

export function ResultadosTeaser() {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{ backgroundColor: "#1c1c1c" }}
      data-anim="up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-4" style={{ color: "rgba(184,154,106,0.7)" }}>
              RESULTADOS REALES
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Transformaciones{" "}
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
                de nuestras pacientes
              </em>
            </h2>
          </div>

          <Link
            href="/resultados"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-70 flex-shrink-0"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b89a6a",
            }}
          >
            Ver galería completa
            <span aria-hidden="true" style={{ fontSize: "1rem" }}>→</span>
          </Link>
        </div>

        {/* ── Photo grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {casos.map((caso, i) => (
            <Link
              key={caso.id}
              href="/resultados"
              className="group relative block overflow-hidden"
              style={{ aspectRatio: "3/4" }}
              aria-label={`Ver resultados de ${caso.tratamiento}`}
            >
              {/* Photo */}
              <Image
                src={caso.image}
                alt={`Resultado ${caso.tratamiento} — DRA.D10`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Dark overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.25) 55%, rgba(10,10,10,0.1) 100%)",
                  opacity: 1,
                }}
              />

              {/* Hover gold top stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: "#b89a6a" }}
              />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#b89a6a",
                  }}
                >
                  {caso.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                    fontWeight: 300,
                    color: "#faf8f5",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {caso.tratamiento}
                </p>
              </div>

              {/* "Ver resultado" hint — appears on hover */}
              <div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                  border: "1px solid rgba(184,154,106,0.5)",
                  padding: "0.3rem 0.6rem",
                  backgroundColor: "rgba(10,10,10,0.6)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Ver
              </div>

              {/* Decorative index number — very subtle */}
              <div
                className="absolute top-4 left-4"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  color: "rgba(184,154,106,0.15)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA row ── */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8"
          style={{ borderTop: "1px solid rgba(184,154,106,0.12)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              color: "rgba(250,248,245,0.45)",
              letterSpacing: "0.06em",
            }}
          >
            Resultados reales de pacientes de DRA.D10 · Medellín, Colombia
          </p>
          <Link href="/resultados" className="btn-gold flex-shrink-0">
            VER TODOS LOS RESULTADOS
          </Link>
        </div>
      </div>
    </section>
  );
}
