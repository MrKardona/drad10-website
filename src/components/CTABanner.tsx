import Link from "next/link";

export function CTABanner() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#c9a84c' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #0f1219 0, #0f1219 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-5 font-semibold"
          style={{ color: 'rgba(15,18,25,0.6)', fontFamily: 'var(--font-body)' }}
        >
          Primera cita de valoración
        </p>
        <h2
          className="mb-6 leading-tight"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: '#0f1219',
            letterSpacing: '-0.02em',
          }}
        >
          Tu transformación comienza<br />
          <em>con una conversación</em>
        </h2>
        <p className="text-sm leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'rgba(15,18,25,0.7)', fontFamily: 'var(--font-body)' }}>
          Agenda tu cita de valoración sin costo. Nuestros especialistas analizarán tus necesidades y diseñarán un plan personalizado para ti.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#agenda" className="btn-dark">
            Agendar Cita Ahora
          </Link>
          <a
            href="https://wa.me/573002440656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black text-xs tracking-widest uppercase font-semibold transition-all hover:bg-black hover:text-yellow-400"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.853.496 3.587 1.36 5.085L2 22l5.057-1.33A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        <p className="mt-8 text-xs" style={{ color: 'rgba(15,18,25,0.5)', fontFamily: 'var(--font-body)' }}>
          Lun–Vie 9:00–19:00 · Sáb 9:00–14:00 · Cl. 7 #39-290 Consultorio 516, El Poblado
        </p>
      </div>
    </section>
  );
}
