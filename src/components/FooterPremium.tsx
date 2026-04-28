import Link from "next/link";

export function FooterPremium() {
  return (
    <footer style={{ backgroundColor: '#0a0d14' }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <p
              className="text-2xl font-bold tracking-[0.18em] text-white"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              DRA.D10
            </p>
            <p className="text-[9px] tracking-[0.35em] mt-0.5" style={{ color: '#c9a84c' }}>
              MEDICINA ESTÉTICA
            </p>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
            Clínica Estética y de Rejuvenecimiento en Medellín, Colombia. Medicina estética segura, natural y personalizada.
          </p>
          {/* Socials */}
          <div className="flex gap-3">
            {[
              { label: 'FB', href: '#' },
              { label: 'IG', href: '#' },
              { label: 'WA', href: 'https://wa.me/573002440656' },
              { label: 'TK', href: '#' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-8 h-8 flex items-center justify-center text-[10px] font-bold footer-social"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Tratamientos */}
        <div>
          <h3 className="text-white text-xs tracking-widest uppercase mb-5 font-semibold" style={{ fontFamily: 'var(--font-body)' }}>Tratamientos</h3>
          <ul className="flex flex-col gap-2">
            {['Faciales', 'Corporales', 'Capilares', 'Inyectables', 'Zona Íntima', 'Scanner D10'].map((t) => (
              <li key={t}>
                <Link href="#" className="text-gray-500 hover:text-yellow-400 transition-colors text-xs tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Clínica */}
        <div>
          <h3 className="text-white text-xs tracking-widest uppercase mb-5 font-semibold" style={{ fontFamily: 'var(--font-body)' }}>Clínica</h3>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'Nosotros', href: '/nosotros' },
              { label: 'Blog', href: '/blog' },
              { label: 'Resultados', href: '/resultados' },
              { label: 'Política de Privacidad', href: '#' },
              { label: 'Política de Reembolso', href: '#' },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-500 hover:text-yellow-400 transition-colors text-xs tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white text-xs tracking-widest uppercase mb-5 font-semibold" style={{ fontFamily: 'var(--font-body)' }}>Contacto</h3>
          <div className="flex flex-col gap-4 text-xs text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
            <div>
              <p style={{ color: '#c9a84c' }} className="mb-1">Dirección</p>
              <p>Cl. 7 #39 - 290 Consultorio 516<br />El Poblado, Medellín</p>
            </div>
            <div>
              <p style={{ color: '#c9a84c' }} className="mb-1">Citas</p>
              <p>300 244 0656</p>
            </div>
            <div>
              <p style={{ color: '#c9a84c' }} className="mb-1">Horarios</p>
              <p>Lun–Vie: 9:00 AM – 7:00 PM<br />Sáb: 9:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-700 text-[10px] tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>
          © 2026 Clínica Estética DraD10. Todos los derechos reservados.
        </p>
        <p className="text-gray-700 text-[10px]" style={{ fontFamily: 'var(--font-body)' }}>
          Medellín · Colombia ✦ Medicina Estética Certificada
        </p>
      </div>
    </footer>
  );
}
