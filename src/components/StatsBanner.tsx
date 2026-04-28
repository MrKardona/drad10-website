const stats = [
  { value: "+500", label: "Pacientes Atendidos", sub: "Con resultados reales" },
  { value: "5+", label: "Años de Experiencia", sub: "En medicina estética" },
  { value: "33+", label: "Tratamientos", sub: "Especializados y certificados" },
  { value: "98%", label: "Satisfacción", sub: "En encuestas post-tratamiento" },
];

export function StatsBanner() {
  return (
    <section className="py-0" style={{ backgroundColor: '#0f1219' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="px-8 py-12 flex flex-col gap-1"
              style={{ borderColor: 'rgba(201,168,76,0.15)' }}
            >
              <span
                className="text-5xl font-light"
                style={{
                  color: '#c9a84c',
                  fontFamily: 'var(--font-display), Georgia, serif',
                  letterSpacing: '-0.02em',
                }}
              >
                {s.value}
              </span>
              <span className="text-white text-sm font-medium mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                {s.label}
              </span>
              <span className="text-gray-600 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
