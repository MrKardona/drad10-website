"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ShoppingBag } from "lucide-react";

const nav = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Faciales", href: "#", sub: ["Botox", "Ácido Hialurónico", "Hilos Tensores", "Bioestimuladores de Colágeno", "Enzimas", "Peeling", "Cauterización", "Microagujas Faciales", "Nanopore", "Tratamiento para manchas"] },
  { label: "Corporales", href: "#", sub: ["Microagujas Corporales", "Mesoterapia", "Sueroterapia", "Masajes de relajación", "Moldeamiento corporal"] },
  { label: "Capilares", href: "#", sub: ["Implante de barba", "Implante Capilar", "Exosomas Capilares", "PRP Capilar", "Mesoterapia Capilar"] },
  { label: "Inyectables", href: "#", sub: ["Inyectables Estéticos", "Mesoterapia", "PRP", "Sueroterapia"] },
  { label: "Blog", href: "/blog" },
  { label: "Resultados", href: "/resultados" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="w-full text-white text-xs py-2 px-6 flex items-center justify-center gap-8 tracking-widest" style={{ backgroundColor: '#0f1219' }}>
        <span style={{ color: '#c9a84c' }}>✦</span>
        <span>Cl. 7 #39 - 290 Consultorio 516, El Poblado · Medellín</span>
        <span style={{ color: '#c9a84c' }}>✦</span>
        <span>Citas: <strong style={{ color: '#c9a84c' }}>300 244 0656</strong></span>
        <span style={{ color: '#c9a84c' }}>✦</span>
      </div>

      {/* Main nav */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(15,18,25,0.97)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid #e5e7eb',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span
              className="font-bold tracking-[0.18em] leading-none text-2xl"
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                color: scrolled ? '#ffffff' : '#0f1219',
              }}
            >
              DRA.D10
            </span>
            <span
              className="text-[9px] tracking-[0.35em] font-medium mt-0.5"
              style={{ color: '#c9a84c' }}
            >
              MEDICINA ESTÉTICA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <div key={item.label} className="relative group">
                {item.sub ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-xs tracking-widest uppercase font-medium transition-colors"
                      style={{ color: scrolled ? '#d1d5db' : '#374151', fontFamily: 'var(--font-body)' }}
                      onMouseEnter={() => setOpen(item.label)}
                      onMouseLeave={() => setOpen(null)}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {open === item.label && (
                      <div
                        className="absolute top-full left-0 pt-2 min-w-[220px] z-50"
                        onMouseEnter={() => setOpen(item.label)}
                        onMouseLeave={() => setOpen(null)}
                      >
                        <div className="border border-gray-100 shadow-xl" style={{ backgroundColor: '#0f1219' }}>
                          {item.sub.map((s) => (
                            <Link key={s} href="#"
                              className="block px-5 py-2.5 text-xs tracking-wider transition-colors"
                              style={{ color: '#9ca3af', fontFamily: 'var(--font-body)' }}
                              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#c9a84c'; }}
                              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#9ca3af'; }}
                            >
                              {s}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href}
                    className="text-xs tracking-widest uppercase font-medium transition-colors"
                    style={{ color: scrolled ? '#d1d5db' : '#374151', fontFamily: 'var(--font-body)' }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button style={{ color: scrolled ? '#9ca3af' : '#374151' }}>
              <ShoppingBag className="w-4 h-4" />
            </button>
            <Link href="#agenda" className="btn-gold hidden lg:block">
              Agenda Cita
            </Link>
            <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: scrolled ? '#ffffff' : '#0f1219' }}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t" style={{ backgroundColor: '#0f1219', borderColor: 'rgba(201,168,76,0.2)' }}>
            {nav.map((item) => (
              <Link key={item.label} href={item.href}
                className="block px-6 py-3 text-xs tracking-widest uppercase"
                style={{ color: '#d1d5db', fontFamily: 'var(--font-body)' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Link href="#agenda" className="btn-gold block text-center">Agenda Cita</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
