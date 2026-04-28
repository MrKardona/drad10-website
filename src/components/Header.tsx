"use client";
import { useState } from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros", active: false },
  {
    label: "Faciales",
    href: "#",
    children: [
      "Botox", "Ácido Hialurónico", "Hilos Tensores", "Bioestimuladores de Colágeno",
      "Enzimas", "Peeling", "Cauterización", "Patologías de la Piel",
      "Microagujas Faciales", "Nanopore", "Tratamiento para manchas",
    ],
  },
  {
    label: "Corporales",
    href: "#",
    children: [
      "Microagujas Corporales", "Mesoterapia", "Sueroterapia",
      "Masajes de relajación", "Tratamiento de moldeamiento corporal",
    ],
  },
  {
    label: "Capilares",
    href: "#",
    children: [
      "Implante de barba", "Implante Capilar", "Exosomas Capilares",
      "PRP Capilar", "Mesoterapia Capilar",
    ],
  },
  {
    label: "Otros",
    href: "#",
    children: [
      "Despigmentación Zona intima", "Rellenno de labios Mayores",
      "Estrechamiento Vaginal", "Alectomia", "Otomodeolación",
    ],
  },
  {
    label: "Inyectables",
    href: "#",
    children: [
      "Inyectables Estéticos", "Mesoterapia iny",
      "Plasma Rico en plaqueta (PRP)", "Sueroterapia iny",
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Resultados", href: "/resultados" },
];

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://wa.me/573002440656" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 2C6.477 2 2 6.477 2 11.99c0 1.853.496 3.587 1.36 5.085L2 22l5.057-1.33A9.956 9.956 0 0 0 11.99 22C17.507 22 22 17.523 22 11.99S17.507 2 11.99 2z"/></svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
          </a>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <span className="text-3xl font-black tracking-widest leading-none" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.15em' }}>DRA.D10</span>
          <span className="text-xs tracking-[0.3em] font-medium text-gray-700 mt-0.5">MEDICINA ESTÉTICA</span>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-4">
          <button className="relative p-1" aria-label="Carrito">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <a
            href="#agenda"
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Agenda Cita
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-6 py-3 text-sm flex-wrap">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <div
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className="flex items-center gap-1 hover:underline underline-offset-4 font-medium">
                      {item.label} <ChevronDown className="w-3 h-3" />
                    </button>
                    {openMenu === item.label && (
                      <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-md py-2 min-w-[220px] z-50">
                        {item.children.map((child) => (
                          <a
                            key={child}
                            href="#"
                            className="block px-4 py-1.5 text-sm hover:bg-gray-50 text-gray-700"
                          >
                            {child}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`hover:underline underline-offset-4 font-medium ${item.label === "Inicio" ? "underline" : ""}`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
