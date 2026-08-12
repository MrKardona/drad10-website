import React from "react";
import Image from "next/image";

// Posts reales del feed de @clinicaquantum.co
const PHOTOS = [
  {
    src: "/images/instagram/post-01.webp",
    alt: "Clínica Quantum - ¿Vienes a Medellín para la Feria de las Flores?",
  },
  {
    src: "/images/instagram/post-03.webp",
    alt: "Clínica Quantum - Promo amigas: aumento de labios",
  },
  {
    src: "/images/instagram/post-04.webp",
    alt: "Clínica Quantum - La Dra. Daniela explica el Botox",
  },
  {
    src: "/images/instagram/post-05.webp",
    alt: "Clínica Quantum - Tratamiento tensor sin cirugía",
  },
  {
    src: "/images/instagram/post-02.webp",
    alt: "Clínica Quantum - ¿Por qué tantas personas eligen Medellín para aplicarse Botox?",
  },
  {
    src: "/images/instagram/post-06.webp",
    alt: "Clínica Quantum - Medicamentos para bajar de peso: no todos son iguales",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/clinicaquantum.co/";

const GoldStripe = () => (
  <div
    aria-hidden="true"
    style={{
      height: "2px",
      background:
        "linear-gradient(to right, transparent, #b89a6a 20%, #b89a6a 80%, transparent)",
    }}
  />
);

const InstagramIcon = ({
  size = 24,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function InstagramSection() {
  return (
    <section
      data-anim="up"
      style={{ backgroundColor: "#1c1c1c" }}
      className="relative"
    >
      <GoldStripe />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* ── Left column: editorial text (~40%) ── */}
          <div className="w-full md:w-[40%] flex flex-col gap-6">
            {/* Label */}
            <span
              style={{
                fontFamily: "var(--font-body)",
                color: "#b89a6a",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                fontWeight: 500,
              }}
            >
              INSTAGRAM
            </span>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "#faf8f5",
                fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                lineHeight: 1.1,
              }}
            >
              Síguenos y{" "}
              <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
                descubre más
              </em>
            </h2>

            {/* Thin gold divider */}
            <div
              aria-hidden="true"
              style={{
                width: "60px",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, #b89a6a, transparent)",
              }}
            />

            {/* Body text */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(250,248,245,0.55)",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                maxWidth: "34ch",
              }}
            >
              Cada semana compartimos técnicas, resultados y el día a día de
              nuestra clínica. Más de 8.000 pacientes transformadas son nuestra
              mayor inspiración.
            </p>

            {/* Handle */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group/handle"
              style={{ textDecoration: "none" }}
            >
              <InstagramIcon
                size={22}
                className="transition-opacity duration-300 group-hover/handle:opacity-70"
                style={{ color: "#b89a6a" } as React.CSSProperties}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#b89a6a",
                  fontSize: "1.35rem",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
                className="transition-opacity duration-300 group-hover/handle:opacity-70"
              >
                @clinicaquantum.co
              </span>
            </a>

            {/* CTA button */}
            <div className="flex flex-col gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold self-start"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                SEGUIR EN INSTAGRAM
              </a>

              {/* Secondary note */}
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(250,248,245,0.35)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.06em",
                }}
              >
                Reel · Stories · Resultados reales
              </span>
            </div>
          </div>

          {/* ── Right column: photo grid (~60%) ── */}
          <div className="w-full md:w-[60%]">
            <div className="grid grid-cols-3 gap-1">
              {PHOTOS.map((photo, index) => (
                <a
                  key={index}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/photo relative block overflow-hidden"
                  style={{ aspectRatio: "1" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 ease-out group-hover/photo:scale-[1.04]"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "rgba(28,28,28,0.55)" }}
                  >
                    <InstagramIcon size={28} style={{ color: "#ffffff" } as React.CSSProperties} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-12 pt-5"
          style={{
            borderTop: "1px solid rgba(184,154,106,0.12)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(250,248,245,0.35)",
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
            }}
          >
            Contenido nuevo cada semana · Resultados · Técnicas · Equipo
          </span>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/arrow flex items-center gap-1 transition-opacity duration-200 hover:opacity-70"
            style={{
              fontFamily: "var(--font-body)",
              color: "#b89a6a",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              textDecoration: "none",
            }}
          >
            Ver perfil completo
            <span
              className="inline-block transition-transform duration-200 group-hover/arrow:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </div>

      <GoldStripe />
    </section>
  );
}
