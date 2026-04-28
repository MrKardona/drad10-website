import Link from "next/link";

export function DoctorSection() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <div className="relative">
          <div
            className="aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 flex items-end justify-center overflow-hidden"
            style={{ backgroundColor: '#f0ece6' }}
          >
            {/* Placeholder with elegant styling */}
            <div className="w-full h-full flex flex-col items-center justify-end pb-10"
              style={{ background: 'linear-gradient(180deg, #e8e0d5 0%, #d5cbc0 100%)' }}>
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
                style={{ backgroundColor: '#c9a84c', fontFamily: 'var(--font-display)' }}
              >
                DD
              </div>
              <p className="text-sm font-medium text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Dra. Daniela Díez</p>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -right-4 top-16 p-5 border shadow-xl hidden lg:block"
            style={{ backgroundColor: '#0f1219', borderColor: 'rgba(201,168,76,0.3)', maxWidth: '200px' }}
          >
            <p className="section-label mb-2">Especialidad</p>
            <p className="text-white text-sm leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
              Medicina Estética &amp;<br />Microimplante Capilar
            </p>
          </div>

          {/* Gold accent corner */}
          <div
            className="absolute -bottom-4 -left-4 w-20 h-20 hidden lg:block"
            style={{ backgroundColor: '#c9a84c', opacity: 0.2 }}
          />
        </div>

        {/* Content side */}
        <div>
          <p className="section-label mb-5">Conoce a la fundadora</p>
          <h2
            className="mb-3 leading-tight"
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: '#0f1219',
              letterSpacing: '-0.02em',
            }}
          >
            Dra. Daniela<br />
            <em style={{ color: '#c9a84c' }}>Díez</em>
          </h2>

          <span className="gold-line" />

          <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
            Médica formada en diversos niveles de complejidad, con una sólida vocación humana basada en valores éticos y morales. Especialista en Medicina Estética y Microimplante Capilar 🇨🇴 🇦🇷
          </p>
          <p className="text-gray-500 leading-relaxed mb-8 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            Su enfoque proactivo, analítico y su liderazgo natural hacen de cada tratamiento una experiencia personalizada. La Dra. Díez se destaca por su fácil adaptación y un compromiso responsable con cada paciente.
          </p>

          {/* Credentials */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { icon: "💉", label: "Microimplante Capilar Expert" },
              { icon: "⚡", label: "INDIBA Certified" },
              { icon: "🏥", label: "Médica Certificada" },
              { icon: "🌎", label: "Formación Internacional" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-3 p-3" style={{ backgroundColor: '#f7f3ee' }}>
                <span>{c.icon}</span>
                <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'var(--font-body)' }}>{c.label}</span>
              </div>
            ))}
          </div>

          <Link href="/nosotros" className="btn-dark inline-block">
            Conocer más sobre el equipo
          </Link>
        </div>
      </div>
    </section>
  );
}
