import Link from "next/link";

const services = [
  {
    icon: "✦",
    title: "Tratamientos Faciales",
    desc: "Botox, ácido hialurónico, hilos tensores, bioestimuladores, peeling y más. Rejuvenecimiento con resultados naturales.",
    items: ["Botox", "Ácido Hialurónico", "Hilos Tensores", "Bioestimuladores"],
    color: "#c9a84c",
  },
  {
    icon: "◎",
    title: "Corporales",
    desc: "Microagujas, mesoterapia, sueroterapia y moldeamiento corporal. Transforma tu figura con tecnología médica.",
    items: ["Microagujas", "Mesoterapia", "Sueroterapia", "Moldeamiento"],
    color: "#8b9dc3",
  },
  {
    icon: "◈",
    title: "Capilares",
    desc: "Implante capilar, exosomas, PRP y mesoterapia capilar. Recupera tu cabello con técnicas de vanguardia.",
    items: ["Implante Capilar", "Exosomas", "PRP Capilar", "Mesoterapia"],
    color: "#7eb8a4",
  },
  {
    icon: "⚡",
    title: "Inyectables",
    desc: "Inyectables estéticos, plasma rico en plaquetas y sueroterapia. Resultados visibles y duraderos.",
    items: ["Inyectables Estéticos", "PRP", "Sueroterapia", "Mesoterapia"],
    color: "#c9a84c",
  },
  {
    icon: "◐",
    title: "Zona Íntima",
    desc: "Despigmentación, estrechamiento vaginal, relleno de labios mayores y otomodeolación.",
    items: ["Despigmentación", "Estrechamiento", "Relleno Labios", "Alectomia"],
    color: "#d4a0a0",
  },
  {
    icon: "INDIBA",
    title: "Scanner D10",
    desc: "Nuestra tecnología INDIBA exclusiva para rejuvenecimiento profundo. El tratamiento insignia de DRA.D10.",
    items: ["Radiofrecuencia", "Anti-aging", "Lifting", "Colágeno"],
    color: "#c9a84c",
    featured: true,
  },
];

export function ServicesPremium() {
  return (
    <section id="servicios" className="py-28" style={{ backgroundColor: '#f7f3ee' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="section-label mb-4">Lo que hacemos</p>
            <h2
              className="leading-none"
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                color: '#0f1219',
                letterSpacing: '-0.02em',
              }}
            >
              Nuestros<br /><em style={{ color: '#c9a84c' }}>Tratamientos</em>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Cada tratamiento es diseñado a medida para tus necesidades únicas, con protocolos médicos certificados y tecnología de última generación.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(0,0,0,0.08)' }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="card-hover p-8 flex flex-col gap-4 group cursor-pointer"
              style={{ backgroundColor: s.featured ? '#0f1219' : '#ffffff' }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-mono"
                  style={{ color: s.color }}
                >
                  {s.icon}
                </span>
                <span className="text-xs tracking-widest text-gray-400 group-hover:translate-x-1 transition-transform inline-block" style={{ fontFamily: 'var(--font-body)' }}>
                  →
                </span>
              </div>

              <h3
                className="text-xl"
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontWeight: 400,
                  color: s.featured ? '#ffffff' : '#0f1219',
                }}
              >
                {s.title}
              </h3>

              <p className="text-sm leading-relaxed flex-1" style={{ color: s.featured ? '#9ca3af' : '#6b7280', fontFamily: 'var(--font-body)' }}>
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: s.featured ? 'rgba(201,168,76,0.2)' : 'rgba(0,0,0,0.06)' }}>
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] tracking-wider px-2 py-1"
                    style={{
                      backgroundColor: s.featured ? 'rgba(201,168,76,0.1)' : '#f7f3ee',
                      color: s.featured ? '#c9a84c' : '#9ca3af',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#agenda" className="btn-dark inline-block">
            Agenda una Valoración Gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}
