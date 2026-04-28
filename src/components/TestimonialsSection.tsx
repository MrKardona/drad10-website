const testimonials = [
  {
    name: "María Camila R.",
    treatment: "Botox + Ácido Hialurónico",
    text: "El resultado fue increíble y completamente natural. La Dra. Díez me explicó todo el proceso y me hizo sentir muy segura. Sin duda volvería.",
    stars: 5,
    initials: "MC",
  },
  {
    name: "Valentina S.",
    treatment: "Implante Capilar",
    text: "Llevaba años buscando una solución para mi cabello. En DRAD10 encontré no solo el tratamiento sino una atención cálida y profesional. 100% recomendado.",
    stars: 5,
    initials: "VS",
  },
  {
    name: "Juliana M.",
    treatment: "Scanner Facial D10",
    text: "Después de la primera sesión ya noté la diferencia. Mi piel se veía más luminosa y firme. El equipo es muy profesional y el espacio precioso.",
    stars: 5,
    initials: "JM",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28" style={{ backgroundColor: '#0f1219' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Lo que dicen</p>
            <h2
              className="text-white leading-none"
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              Pacientes que<br />
              <em style={{ color: '#c9a84c' }}>confían en nosotros</em>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#c9a84c' }}>★</span>)}
            </div>
            <span className="text-gray-400 text-sm ml-2" style={{ fontFamily: 'var(--font-body)' }}>
              5.0 · Google Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(201,168,76,0.1)' }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: '#1a1f2e' }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} style={{ color: '#c9a84c', fontSize: '0.75rem' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 italic" style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: '#c9a84c', color: '#0f1219' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>{t.name}</p>
                  <p className="text-gray-500 text-xs" style={{ fontFamily: 'var(--font-body)' }}>{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
