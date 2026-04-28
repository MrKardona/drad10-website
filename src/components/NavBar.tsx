"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  sub?: string[];
};

const nav: NavItem[] = [
  { label: "INICIO", href: "/" },
  { label: "NOSOTROS", href: "/nosotros" },
  {
    label: "FACIALES",
    href: "#",
    sub: [
      "Botox",
      "Ácido Hialurónico",
      "Hilos Tensores",
      "Bioestimuladores de Colágeno",
      "Enzimas",
      "Peeling",
      "Cauterización",
      "Microagujas Faciales",
      "Nanopore",
      "Tratamiento para manchas",
    ],
  },
  {
    label: "CORPORALES",
    href: "#",
    sub: [
      "Microagujas Corporales",
      "Mesoterapia",
      "Sueroterapia",
      "Masajes de relajación",
      "Moldeamiento corporal",
    ],
  },
  {
    label: "CAPILARES",
    href: "#",
    sub: [
      "Implante de barba",
      "Implante Capilar",
      "Exosomas Capilares",
      "PRP Capilar",
      "Mesoterapia Capilar",
    ],
  },
  {
    label: "INYECTABLES",
    href: "#",
    sub: [
      "Inyectables Estéticos",
      "Mesoterapia",
      "PRP",
      "Sueroterapia",
    ],
  },
  { label: "BLOG", href: "/blog" },
  { label: "RESULTADOS", href: "/resultados" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Top bar ── */}
      <div
        className="w-full py-2 px-6 flex items-center justify-center gap-6 text-[10px] tracking-[0.22em]"
        style={{ backgroundColor: "#f0e8e2", color: "#1c1c1c" }}
      >
        <span>Cl. 7 #39 – 290 Consultorio 516, El Poblado · Medellín</span>
        <span style={{ color: "#b89a6a", fontSize: "0.5rem" }}>✦</span>
        <span>
          Citas:{" "}
          <a
            href="tel:+573002440656"
            className="font-semibold tracking-[0.18em] transition-opacity hover:opacity-70"
            style={{ color: "#b89a6a" }}
          >
            300 244 0656
          </a>
        </span>
      </div>

      {/* ── Main navbar ── */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "#ffffff" : "#faf8f5",
          boxShadow: scrolled
            ? "0 1px 24px rgba(28,28,28,0.07)"
            : "none",
          borderBottom: scrolled
            ? "none"
            : "1px solid rgba(184,154,106,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-10 py-4 flex items-center justify-between gap-8">

          {/* Logo — centered mobile, left desktop */}
          <Link
            href="/"
            className="flex-shrink-0 text-[#1c1c1c]"
            aria-label="DRA.D10 – Inicio"
          >
            <div className="text-[#1c1c1c] h-10 flex items-center">
              <img
                src="/logo.svg"
                alt="DRA.D10"
                className="h-10 w-auto"
                style={{ color: "#1c1c1c" }}
              />
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
            {nav.map((item) => {
              const hasSub = Boolean(item.sub);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasSub && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {hasSub ? (
                    <>
                      <button
                        className="group flex items-center gap-0.5 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-200 relative pb-1"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "#1c1c1c",
                        }}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className="w-2.5 h-2.5 ml-0.5 transition-transform duration-200"
                          style={{
                            transform:
                              openDropdown === item.label
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            color: "#b89a6a",
                          }}
                        />
                        {/* Animated gold underline */}
                        <span
                          className="absolute bottom-0 left-0 h-px transition-all duration-300 origin-left"
                          style={{
                            width:
                              openDropdown === item.label ? "100%" : "0%",
                            backgroundColor: "#b89a6a",
                          }}
                        />
                      </button>

                      {/* Dropdown */}
                      <div
                        className="absolute top-full left-0 pt-3 min-w-[210px] z-50 transition-all duration-200"
                        style={{
                          opacity: openDropdown === item.label ? 1 : 0,
                          pointerEvents:
                            openDropdown === item.label ? "auto" : "none",
                          transform:
                            openDropdown === item.label
                              ? "translateY(0)"
                              : "translateY(-6px)",
                        }}
                      >
                        <div
                          className="py-2 border"
                          style={{
                            backgroundColor: "#faf8f5",
                            borderColor: "rgba(184,154,106,0.2)",
                            boxShadow:
                              "0 16px 48px rgba(28,28,28,0.09)",
                          }}
                        >
                          {item.sub!.map((sub) => (
                            <Link
                              key={sub}
                              href="#"
                              className="block px-5 py-2 text-[11px] tracking-wider transition-all duration-150"
                              style={{
                                fontFamily: "var(--font-body)",
                                color: "#888580",
                              }}
                              onMouseEnter={(e) => {
                                (
                                  e.currentTarget as HTMLElement
                                ).style.color = "#b89a6a";
                                (
                                  e.currentTarget as HTMLElement
                                ).style.paddingLeft = "22px";
                              }}
                              onMouseLeave={(e) => {
                                (
                                  e.currentTarget as HTMLElement
                                ).style.color = "#888580";
                                (
                                  e.currentTarget as HTMLElement
                                ).style.paddingLeft = "20px";
                              }}
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="group relative text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-200 pb-1 block"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "#1c1c1c",
                      }}
                    >
                      {item.label}
                      {/* Animated gold underline */}
                      <span
                        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300 origin-left"
                        style={{ backgroundColor: "#b89a6a" }}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="#agenda"
              className="btn-gold hidden lg:inline-block"
              style={{ whiteSpace: "nowrap" }}
            >
              AGENDA CITA
            </Link>

            <button
              className="lg:hidden p-1.5 transition-colors"
              style={{ color: "#1c1c1c" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: mobileOpen ? "100vh" : "0",
            opacity: mobileOpen ? 1 : 0,
            borderTop: mobileOpen
              ? "1px solid rgba(184,154,106,0.18)"
              : "none",
          }}
        >
          <div style={{ backgroundColor: "#faf8f5" }}>
            {nav.map((item) => {
              const hasSub = Boolean(item.sub);
              const isExpanded = mobileExpanded === item.label;
              return (
                <div key={item.label}>
                  {hasSub ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-6 py-3.5 text-[10px] tracking-[0.22em] uppercase font-medium transition-colors"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "#1c1c1c",
                          borderBottom: "1px solid rgba(184,154,106,0.1)",
                        }}
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : item.label)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className="w-3 h-3 transition-transform duration-200"
                          style={{
                            color: "#b89a6a",
                            transform: isExpanded
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </button>
                      {isExpanded && (
                        <div
                          style={{
                            backgroundColor: "#f0e8e2",
                            borderBottom: "1px solid rgba(184,154,106,0.1)",
                          }}
                        >
                          {item.sub!.map((sub) => (
                            <Link
                              key={sub}
                              href="#"
                              className="block px-9 py-2.5 text-[11px] tracking-wider transition-colors"
                              style={{
                                fontFamily: "var(--font-body)",
                                color: "#888580",
                              }}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileExpanded(null);
                              }}
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-6 py-3.5 text-[10px] tracking-[0.22em] uppercase font-medium transition-colors"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "#1c1c1c",
                        borderBottom: "1px solid rgba(184,154,106,0.1)",
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="px-6 py-5">
              <Link
                href="#agenda"
                className="btn-gold block text-center"
                onClick={() => setMobileOpen(false)}
              >
                AGENDA CITA
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
