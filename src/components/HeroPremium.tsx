import Link from "next/link";

export function HeroPremium() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden grain" style={{ backgroundColor: '#0f1219' }}>
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,18,25,0.97) 0%, rgba(15,18,25,0.7) 50%, rgba(26,31,46,0.85) 100%)' }} />
      </div>

      {/* Decorative gold vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px opacity-30" style={{ background: 'linear-gradient(to bottom, transparent, #c9a84c 30%, #c9a84c 70%, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — main copy */}
        <div className="opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <p className="section-label mb-6">Medellín · El Poblado · Colombia</p>

          <h1
            className="text-white leading-[0.95] mb-6"
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
            }}
          >
            Medicina<br />
            <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>Estética</em><br />
            de Alto<br />Nivel
          </h1>

          <span className="gold-line" />

          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md" style={{ fontFamily: 'var(--font-body)' }}>
            Transformamos tu bienestar con tratamientos seguros, naturales y personalizados. Respaldo médico certificado, tecnología de vanguardia y resultados reales.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#agenda" className="btn-gold">Agenda tu Cita</Link>
            <Link href="#servicios" className="btn-outline-white">Ver Tratamientos</Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { n: '+500', label: 'Pacientes satisfechos' },
              { n: '5+', label: 'Años de experiencia' },
              { n: '98%', label: 'Tasa de satisfacción' },
            ].map((b) => (
              <div key={b.label} className="flex flex-col">
                <span className="text-2xl font-bold" style={{ color: '#c9a84c', fontFamily: 'var(--font-display)' }}>{b.n}</span>
                <span className="text-xs tracking-wider text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating card */}
        <div className="hidden lg:flex flex-col items-end opacity-0 animate-fade-up delay-300" style={{ animationFillMode: 'forwards' }}>
          <div
            className="w-full max-w-sm border p-8"
            style={{ backgroundColor: 'rgba(26,31,46,0.7)', borderColor: 'rgba(201,168,76,0.25)', backdropFilter: 'blur(16px)' }}
          >
            <p className="section-label mb-4">Tratamiento Destacado</p>
            <h3 className="text-white text-2xl mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
              INDIBA · Scanner Facial D10
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Tecnología de radiofrecuencia de última generación para rejuvenecimiento facial profundo y resultados visibles desde la primera sesión.
            </p>
            <div className="border-t pt-6 flex items-center justify-between" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
              <span className="text-xs text-gray-500 tracking-wider">CLÍNICA QUANTUM CERTIFIED</span>
              <span style={{ color: '#c9a84c' }}>⚡</span>
            </div>
          </div>

          {/* Social proof pill */}
          <div className="mt-4 flex items-center gap-3 px-5 py-3 border" style={{ borderColor: 'rgba(201,168,76,0.2)', backgroundColor: 'rgba(15,18,25,0.8)' }}>
            <div className="flex -space-x-2">
              {['DD', 'MP', 'AL'].map((i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ backgroundColor: '#c9a84c', borderColor: '#0f1219' }}>{i}</div>
              ))}
            </div>
            <p className="text-xs text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
              <strong className="text-white">+500 pacientes</strong> nos eligieron este año
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-600" style={{ animationFillMode: 'forwards' }}>
        <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #c9a84c, transparent)' }} />
      </div>
    </section>
  );
}
