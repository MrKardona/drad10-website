"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { menuServicios } from "@/lib/tratamientos/menu";
import { PAISES, alCambiarPais, guardarPais, leerPais, type Pais } from "@/lib/pais";
import type { CategoriaTratamiento } from "@/lib/tratamientos/types";

type Enlace = { label: string; href: string };
type Columna = { titulo: string; items: Enlace[] };
type NavItem = {
  label: string;
  href: string;
  /** Columnas por grupo. Con más de una se muestra como mega-menú. */
  columnas?: Columna[];
};

const WA_CITA = `https://wa.me/573043751975?text=${encodeURIComponent(
  "Hola, quiero agendar una cita en Clínica Quantum",
)}`;

// Orden de los grupos dentro de cada menú (los que no estén van al final).
const ORDEN_GRUPOS = [
  "Toxina botulínica",
  "Ácido hialurónico",
  "Bioestimuladores",
  "Hilos",
  "Aparatología INDIBA",
  "Piel y manchas",
  "Enzimas y cicatrices",
  "Cosmetología",
  "Contorno corporal",
  "Descenso de peso",
  "Post quirúrgico",
  "Bienestar",
];

function columnasDe(categorias: CategoriaTratamiento[]): Columna[] {
  const grupos = new Map<string, Enlace[]>();
  for (const s of menuServicios) {
    if (!categorias.includes(s.categoria)) continue;
    const lista = grupos.get(s.grupo) ?? [];
    lista.push({ label: s.nombre, href: `/servicios/${s.slug}` });
    grupos.set(s.grupo, lista);
  }
  const pos = (g: string) => (ORDEN_GRUPOS.indexOf(g) + 1 || 99);
  return [...grupos.entries()]
    .sort(([a], [b]) => pos(a) - pos(b))
    .map(([titulo, items]) => ({ titulo, items }));
}

const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Faciales", href: "/servicios#faciales", columnas: columnasDe(["faciales"]) },
  { label: "Corporales", href: "/servicios#corporales", columnas: columnasDe(["corporales", "bienestar"]) },
  { label: "Capilares", href: "/servicios#capilares", columnas: columnasDe(["capilares"]) },
  { label: "Zona íntima", href: "/servicios#zona-intima", columnas: columnasDe(["zona-intima"]) },
  { label: "Quirúrgicos", href: "/servicios#quirurgicos", columnas: columnasDe(["quirurgicos"]) },
  { label: "Blog", href: "/blog" },
  { label: "Resultados", href: "/resultados" },
];

const textoMenu: React.CSSProperties = { fontFamily: "var(--font-body)", color: "#1c1c1c" };

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuMovilRef = useRef<HTMLDivElement>(null);
  const [altoMenuMovil, setAltoMenuMovil] = useState("100svh");

  // Con un submenú abierto el menú supera el alto de la pantalla. Se limita al
  // espacio que queda bajo el header, que varía: la barra superior ocupa una o
  // dos líneas y se va al hacer scroll.
  const toggleMenuMovil = () => {
    const el = menuMovilRef.current;
    if (!mobileOpen && el) {
      const top = Math.max(0, el.getBoundingClientRect().top);
      setAltoMenuMovil(`${window.innerHeight - top}px`);
    }
    setMobileOpen((v) => !v);
  };

  const cerrarTodo = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [pais, setPais] = useState<Pais>("co");
  useEffect(() => {
    setPais(leerPais());
    return alCambiarPais(setPais);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── Top bar ── */}
      <div
        className="w-full py-2 px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-6 text-[13px] sm:text-[13px] tracking-normal sm:tracking-normal"
        style={{ backgroundColor: "#f0e8e2", color: "#1c1c1c" }}
      >
        <a
          href="https://maps.app.goo.gl/dtwj4zv9ayygTz8NA"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", transition: "opacity 0.2s" }}
          className="hidden md:inline hover:opacity-60"
        >
          Cl. 7 #39 – 290 Consultorio 516, El Poblado · Medellín
        </a>
        <a
          href="https://www.instagram.com/dra.d10/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @dra.d10"
          style={{ color: "#1c1c1c", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none", transition: "opacity 0.2s", padding: "6px 0" }}
          className="hover:opacity-60"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="hidden sm:inline" style={{ letterSpacing: "0.01em" }}>@dra.d10</span>
        </a>
        <span className="hidden sm:inline">
          Citas:{" "}
          <a href={`tel:${PAISES[pais].tel}`} className="inline-block py-1.5 font-semibold tracking-normal transition-opacity hover:opacity-70" style={{ color: "#b89a6a" }}>
            {PAISES[pais].telefono}
          </a>
        </span>
        <div role="group" aria-label="País de atención" className="flex items-center rounded-full p-0.5" style={{ border: "1px solid rgba(184,154,106,0.45)" }}>
          {(["co", "ar"] as const).map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={pais === p}
              onClick={() => { setPais(p); guardarPais(p); }}
              className="rounded-full px-3 py-1.5 transition-colors"
              style={{ backgroundColor: pais === p ? "#1c1c1c" : "transparent", color: pais === p ? "#faf8f5" : "#1c1c1c", letterSpacing: "0.01em", minHeight: 30 }}
            >
              {PAISES[p].nombre}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main navbar ── */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "#ffffff" : "#faf8f5",
          boxShadow: scrolled ? "0 1px 24px rgba(28,28,28,0.07)" : "none",
          borderBottom: scrolled ? "none" : "1px solid rgba(184,154,106,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-10 py-4 flex items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0 text-[#1c1c1c]" aria-label="DRA.D10 – Inicio">
            <div className="text-[#1c1c1c] h-10 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="DRA.D10" className="h-10 w-auto" />
            </div>
          </Link>

          {/* ── Navegación de escritorio ── */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center" aria-label="Principal">
            {nav.map((item) => {
              const abierto = openDropdown === item.label;
              const mega = (item.columnas?.length ?? 0) > 1;
              if (!item.columnas) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative text-[13px] font-medium tracking-normal pb-1 block"
                    style={textoMenu}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300" style={{ backgroundColor: "#b89a6a" }} />
                  </Link>
                );
              }
              return (
                <div
                  key={item.label}
                  // El mega-menú se ancla al header (ancho completo); el simple, al ítem.
                  className={mega ? "static" : "relative"}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-0.5 text-[13px] font-medium tracking-normal relative pb-1"
                    style={textoMenu}
                    aria-haspopup="true"
                    aria-expanded={abierto}
                    onClick={() => setOpenDropdown(abierto ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className="w-2.5 h-2.5 ml-0.5 transition-transform duration-200"
                      style={{ transform: abierto ? "rotate(180deg)" : "none", color: "#b89a6a" }}
                    />
                    <span className="absolute bottom-0 left-0 h-px transition-all duration-300" style={{ width: abierto ? "100%" : "0%", backgroundColor: "#b89a6a" }} />
                    {/* Puente invisible sobre el padding del header: evita que el menú se cierre al bajar el ratón */}
                    {abierto && <span aria-hidden className="absolute left-[-12px] right-[-12px] top-full h-8" />}
                  </button>

                  <div
                    className={`absolute top-full z-50 transition-all duration-200 ${mega ? "left-0 right-0" : "left-0 pt-3"}`}
                    style={{
                      minWidth: mega ? undefined : "240px",
                      opacity: abierto ? 1 : 0,
                      visibility: abierto ? "visible" : "hidden",
                      transform: abierto ? "translateY(0)" : "translateY(-6px)",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#faf8f5",
                        borderTop: "1px solid rgba(184,154,106,0.2)",
                        borderBottom: "1px solid rgba(184,154,106,0.2)",
                        border: mega ? undefined : "1px solid rgba(184,154,106,0.2)",
                        boxShadow: "0 24px 48px rgba(28,28,28,0.09)",
                      }}
                    >
                      <div
                        className={mega ? "max-w-7xl mx-auto px-6 xl:px-10 py-8" : "py-3"}
                        style={
                          mega
                            ? { columnWidth: "220px", columnGap: "2.5rem", maxHeight: "calc(100vh - 140px)", overflowY: "auto" }
                            : undefined
                        }
                      >
                        {item.columnas.map((col) => (
                          <div key={col.titulo} style={{ breakInside: "avoid", marginBottom: mega ? "1.5rem" : 0 }}>
                            {mega && (
                              <p className="text-[13px] tracking-normal pb-2 mb-1" style={{ fontFamily: "var(--font-body)", color: "#b89a6a", borderBottom: "1px solid rgba(184,154,106,0.2)" }}>
                                {col.titulo}
                              </p>
                            )}
                            {col.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={cerrarTodo}
                                className={`block text-[13px] leading-snug transition-colors hover:text-[#b89a6a] ${mega ? "py-1.5" : "px-5 py-2"}`}
                                style={{ fontFamily: "var(--font-body)", color: "#5c5a57" }}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        {mega && (
                          <Link
                            href={item.href}
                            onClick={cerrarTodo}
                            className="inline-block text-[13px] tracking-normal mt-2 hover:text-[#b89a6a] transition-colors"
                            style={{ ...textoMenu, breakInside: "avoid" }}
                          >
                            Ver todos los tratamientos →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* ── CTA + hamburguesa ── */}
          <div className="flex items-center gap-4">
            <a href={WA_CITA} target="_blank" rel="noopener noreferrer" className="btn-gold hidden lg:inline-block" style={{ whiteSpace: "nowrap" }}>
              Agenda cita
            </a>
            <button
              type="button"
              className="lg:hidden p-2.5"
              style={{ color: "#1c1c1c" }}
              onClick={toggleMenuMovil}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ── Menú móvil ── */}
        <div
          ref={menuMovilRef}
          className="lg:hidden transition-all duration-400"
          style={{
            maxHeight: mobileOpen ? altoMenuMovil : "0",
            overflowY: mobileOpen ? "auto" : "hidden",
            overscrollBehavior: "contain",
            opacity: mobileOpen ? 1 : 0,
            borderTop: mobileOpen ? "1px solid rgba(184,154,106,0.18)" : "none",
          }}
        >
          <div style={{ backgroundColor: "#faf8f5" }}>
            {nav.map((item) => {
              const expandido = mobileExpanded === item.label;
              const filaStyle: React.CSSProperties = { ...textoMenu, borderBottom: "1px solid rgba(184,154,106,0.1)" };
              if (!item.columnas) {
                return (
                  <Link key={item.label} href={item.href} className="block px-6 py-4 text-[13px] tracking-normal font-medium" style={filaStyle} onClick={cerrarTodo}>
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-4 text-[13px] tracking-normal font-medium"
                    style={filaStyle}
                    aria-expanded={expandido}
                    onClick={() => setMobileExpanded(expandido ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{ color: "#b89a6a", transform: expandido ? "rotate(180deg)" : "none" }} />
                  </button>
                  {expandido && (
                    <div style={{ backgroundColor: "#f0e8e2", borderBottom: "1px solid rgba(184,154,106,0.1)", padding: "0.5rem 0 1rem" }}>
                      {item.columnas.map((col) => (
                        <div key={col.titulo}>
                          {item.columnas!.length > 1 && (
                            <p className="px-8 pt-4 pb-1 text-[13px] tracking-normal" style={{ fontFamily: "var(--font-body)", color: "#b89a6a" }}>
                              {col.titulo}
                            </p>
                          )}
                          {col.items.map((sub) => (
                            <Link key={sub.href} href={sub.href} className="block px-8 py-2.5 text-[14px]" style={{ fontFamily: "var(--font-body)", color: "#5c5a57" }} onClick={cerrarTodo}>
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="px-6 py-5">
              <a href={WA_CITA} target="_blank" rel="noopener noreferrer" className="btn-gold block text-center" onClick={cerrarTodo}>
                Agenda cita
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
