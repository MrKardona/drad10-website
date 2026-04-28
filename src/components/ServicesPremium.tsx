import Link from "next/link";

interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  extraTag?: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: "✦",
    title: "Tratamientos Faciales",
    desc: "Botox, ácido hialurónico, hilos tensores, bioestimuladores, peeling y más. Rejuvenecimiento con resultados naturales.",
    tags: ["Botox", "Ácido Hialurónico", "Hilos Tensores", "Bioestimuladores de Colágeno"],
    extraTag: "y más...",
  },
  {
    icon: "◈",
    title: "Corporales",
    desc: "Microagujas, mesoterapia, sueroterapia y moldeamiento corporal. Transforma tu figura con tecnología avanzada.",
    tags: ["Microagujas Corporales", "Mesoterapia", "Sueroterapia", "Moldeamiento corporal"],
  },
  {
    icon: "❧",
    title: "Capilares",
    desc: "Implante capilar, exosomas, PRP y mesoterapia capilar. Recupera tu cabello con técnicas de vanguardia.",
    tags: ["Implante Capilar", "Exosomas Capilares", "PRP Capilar", "Mesoterapia Capilar"],
  },
  {
    icon: "⊕",
    title: "Inyectables",
    desc: "Inyectables estéticos, plasma rico en plaquetas y sueroterapia. Resultados visibles y duraderos.",
    tags: ["Inyectables Estéticos", "Mesoterapia", "PRP", "Sueroterapia"],
  },
  {
    icon: "○",
    title: "Zona Íntima",
    desc: "Despigmentación, estrechamiento vaginal, relleno de labios mayores y otomodeolación.",
    tags: ["Despigmentación Zona Íntima", "Relleno de Labios Mayores", "Estrechamiento Vaginal", "Otomodeolación"],
  },
  {
    icon: "◉",
    title: "Scanner D10 (INDIBA)",
    desc: "Nuestra tecnología INDIBA exclusiva para rejuvenecimiento profundo. El tratamiento insignia de DRA.D10.",
    tags: ["Radiofrecuencia", "Anti-aging", "Lifting", "Colágeno"],
    featured: true,
  },
];

export function ServicesPremium() {
  return (
    <section
      id="servicios"
      className="py-28"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="mb-16 opacity-0 animate-fade-up">
          <p className="section-label mb-5">LO QUE HACEMOS</p>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              fontWeight: 300,
              color: "#1c1c1c",
              letterSpacing: "-0.025em",
            }}
          >
            Nuestros{" "}
            <span
              style={{
                display: "block",
                fontWeight: 300,
                color: "#1c1c1c",
              }}
            >
              Tratamientos
            </span>
            <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
              Personalizados para ti
            </em>
          </h2>
          <p
            className="mt-6 max-w-xl leading-relaxed"
            style={{
              color: "#888580",
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
            }}
          >
            Cada tratamiento es diseñado a medida para tus necesidades únicas,
            con protocolos médicos certificados y tecnología de vanguardia.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => {
            const delayClass =
              index === 0
                ? "delay-100"
                : index === 1
                ? "delay-200"
                : index === 2
                ? "delay-300"
                : index === 3
                ? "delay-400"
                : index === 4
                ? "delay-500"
                : "delay-600";

            return (
              <div
                key={service.title}
                className={`card-hover flex flex-col gap-5 p-10 cursor-pointer group opacity-0 animate-fade-up ${delayClass}`}
                style={{
                  backgroundColor: service.featured ? "#1c1c1c" : "#faf8f5",
                  borderTop: "2px solid #b89a6a",
                  borderRight: "1px solid rgba(184,154,106,0.15)",
                  borderBottom: "1px solid rgba(184,154,106,0.15)",
                }}
              >
                {/* Icon row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl"
                    style={{ color: "#b89a6a", lineHeight: 1 }}
                  >
                    {service.icon}
                  </span>
                  <span
                    className="text-xs tracking-widest transition-transform duration-300 group-hover:translate-x-1 inline-block"
                    style={{
                      color: service.featured
                        ? "rgba(212,184,150,0.6)"
                        : "#888580",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    →
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    color: service.featured ? "#faf8f5" : "#1c1c1c",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    color: service.featured
                      ? "rgba(200,196,190,0.85)"
                      : "#888580",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {service.desc}
                </p>

                {/* Tags */}
                <div
                  className="flex flex-wrap gap-2 pt-4"
                  style={{
                    borderTop: service.featured
                      ? "1px solid rgba(184,154,106,0.25)"
                      : "1px solid rgba(28,28,28,0.08)",
                  }}
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider px-2.5 py-1 uppercase"
                      style={{
                        backgroundColor: service.featured
                          ? "rgba(184,154,106,0.12)"
                          : "rgba(184,154,106,0.08)",
                        color: service.featured ? "#d4b896" : "#b89a6a",
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {service.extraTag && (
                    <span
                      className="text-[10px] tracking-wider px-2.5 py-1"
                      style={{
                        color: "#888580",
                        fontFamily: "var(--font-body)",
                        fontStyle: "italic",
                      }}
                    >
                      {service.extraTag}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center opacity-0 animate-fade-up delay-700">
          <Link href="#agenda" className="btn-outline-dark inline-block">
            AGENDA UNA VALORACIÓN GRATUITA
          </Link>
        </div>
      </div>
    </section>
  );
}
