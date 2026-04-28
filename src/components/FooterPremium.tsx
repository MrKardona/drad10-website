import Link from "next/link";

const tratamientos: { label: string; href: string }[] = [
  { label: "Faciales", href: "#" },
  { label: "Corporales", href: "#" },
  { label: "Capilares", href: "#" },
  { label: "Inyectables", href: "#" },
  { label: "Zona Íntima", href: "#" },
  { label: "Scanner D10", href: "#" },
];

const clinicaLinks: { label: string; href: string }[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Resultados", href: "/resultados" },
  { label: "Política de Privacidad", href: "#" },
  { label: "Política de Reembolso", href: "#" },
];

const socialLinks: { label: string; href: string; ariaLabel: string }[] = [
  { label: "FB", href: "#", ariaLabel: "Facebook DRA.D10" },
  { label: "IG", href: "#", ariaLabel: "Instagram DRA.D10" },
  {
    label: "WA",
    href: "https://wa.me/573002440656",
    ariaLabel: "WhatsApp DRA.D10",
  },
  { label: "TK", href: "#", ariaLabel: "TikTok DRA.D10" },
];

export function FooterPremium() {
  return (
    <footer style={{ backgroundColor: "#1a1816" }}>
      {/* ── Top grid ── */}
      <div
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        style={{ borderBottom: "1px solid rgba(184,154,106,0.12)" }}
      >
        {/* Col 1 — Brand */}
        <div>
          {/* Logo */}
          <div className="mb-5">
            <img
              src="/logo.svg"
              alt="DRA.D10"
              className="h-8 w-auto"
              style={{ filter: "invert(1) brightness(0.85)" }}
            />
          </div>

          {/* Description */}
          <p
            className="mb-7 leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              color: "#888580",
              maxWidth: "230px",
            }}
          >
            Clínica de medicina estética y rejuvenecimiento en El Poblado,
            Medellín. Tratamientos seguros, naturales y personalizados.
          </p>

          {/* Social icons */}
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.ariaLabel}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="footer-social w-8 h-8 flex items-center justify-center font-bold"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.05em",
                  border: "1px solid rgba(136,133,128,0.25)",
                  color: "#888580",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Tratamientos */}
        <div>
          <h3
            className="mb-5"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 600,
            }}
          >
            Tratamientos
          </h3>
          <ul className="flex flex-col gap-2.5">
            {tratamientos.map((t) => (
              <li key={t.label}>
                <Link
                  href={t.href}
                  className="footer-nav-link"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: "#888580",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                    textDecoration: "none",
                  }}
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Clínica */}
        <div>
          <h3
            className="mb-5"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 600,
            }}
          >
            Clínica
          </h3>
          <ul className="flex flex-col gap-2.5">
            {clinicaLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="footer-nav-link"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: "#888580",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contacto */}
        <div>
          <h3
            className="mb-5"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 600,
            }}
          >
            Contacto
          </h3>

          <div className="flex flex-col gap-5">
            {/* Dirección */}
            <div>
              <p
                className="mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                }}
              >
                Dirección
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "#888580",
                  lineHeight: 1.6,
                }}
              >
                Cl. 7 #39-290 Consultorio 516
                <br />
                El Poblado, Medellín
              </p>
            </div>

            {/* Citas */}
            <div>
              <p
                className="mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                }}
              >
                Citas
              </p>
              <a
                href="tel:+573002440656"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "#888580",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="footer-nav-link"
              >
                300 244 0656
              </a>
            </div>

            {/* Horarios */}
            <div>
              <p
                className="mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                }}
              >
                Horarios
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "#888580",
                  lineHeight: 1.7,
                }}
              >
                Lun–Vie: 9:00 AM – 7:00 PM
                <br />
                Sáb: 9:00 AM – 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            letterSpacing: "0.18em",
            color: "#888580",
            textTransform: "uppercase",
          }}
        >
          © {new Date().getFullYear()} Clínica Estética DRA.D10. Todos los
          derechos reservados.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            letterSpacing: "0.18em",
            color: "#888580",
            textTransform: "uppercase",
          }}
        >
          Medellín · Colombia ✦ Medicina Estética Certificada
        </p>
      </div>
    </footer>
  );
}
