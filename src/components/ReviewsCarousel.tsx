"use client";

import { useState, useEffect, useCallback } from "react";

interface Review {
  name: string;
  initials: string;
  color: string;      // avatar background accent
  rating: number;
  text: string;
  treatment: string;
  timeAgo: string;
}

// ─── RESEÑAS REALES — reemplaza con las de Google ─────────────────────────
const reviews: Review[] = [
  {
    name: "María Camila R.",
    initials: "MC",
    color: "#c4956a",
    rating: 5,
    text: "El resultado fue increíble y completamente natural. La Dra. Díez me explicó todo el proceso y me hizo sentir muy segura. Sin duda volvería.",
    treatment: "Botox + Ácido Hialurónico",
    timeAgo: "hace 2 semanas",
  },
  {
    name: "Valentina S.",
    initials: "VS",
    color: "#a89070",
    rating: 5,
    text: "Llevaba años buscando una solución para mi cabello. En DRAD10 encontré no solo el tratamiento sino una atención cálida y profesional. 100% recomendado.",
    treatment: "Implante Capilar",
    timeAgo: "hace 1 mes",
  },
  {
    name: "Juliana M.",
    initials: "JM",
    color: "#b8906a",
    rating: 5,
    text: "Después de la primera sesión ya noté la diferencia. Mi piel se veía más luminosa y firme. El equipo es muy profesional y el espacio precioso.",
    treatment: "Scanner Facial D10",
    timeAgo: "hace 3 semanas",
  },
  {
    name: "Andrea P.",
    initials: "AP",
    color: "#c09878",
    rating: 5,
    text: "Fui por primera vez y me enamoré del lugar. La Dra. Daniela es muy detallada y honesta con lo que realmente necesitas. Nada de venderte lo que no es.",
    treatment: "Valoración Facial",
    timeAgo: "hace 2 meses",
  },
  {
    name: "Tatiana L.",
    initials: "TL",
    color: "#b08868",
    rating: 5,
    text: "El tratamiento capilar superó mis expectativas. Resultados visibles desde la segunda sesión. El equipo te hace sentir como en casa desde el primer momento.",
    treatment: "Mesoterapia Capilar",
    timeAgo: "hace 5 semanas",
  },
];

// ─── Estadística total de Google (actualiza con tus datos reales) ──────────
const GOOGLE_RATING = 5.0;
const GOOGLE_REVIEW_COUNT = 227; // número real de reseñas en Google

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i <= rating ? "#b89a6a" : "rgba(184,154,106,0.2)"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Avatar({
  review,
  size = 44,
  active = false,
  onClick,
}: {
  review: Review;
  size?: number;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={review.name}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        border: active
          ? `2px solid #b89a6a`
          : "2px solid rgba(184,154,106,0.2)",
        backgroundColor: active
          ? "rgba(184,154,106,0.22)"
          : "rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: onClick ? "pointer" : "default",
        transition: "border-color 0.3s, background 0.3s, transform 0.3s",
        transform: active ? "scale(1.12)" : "scale(1)",
        flexShrink: 0,
        padding: 0,
        outline: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: size > 36 ? "0.72rem" : "0.6rem",
          fontWeight: 600,
          color: active ? "#b89a6a" : "rgba(184,154,106,0.5)",
          letterSpacing: "0.04em",
          transition: "color 0.3s",
        }}
      >
        {review.initials}
      </span>
    </button>
  );
}

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (idx: number, dir: "left" | "right" = "right") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setIsAnimating(false);
      }, 320);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, "left");
  }, [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const r = reviews[current];

  return (
    <section style={{ backgroundColor: "#1c1c1c" }}>
      {/* Top gold stripe */}
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #b89a6a 20%, #b89a6a 80%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* ── Header row ── */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
          data-anim="up"
        >
          {/* Left: title */}
          <div>
            <p className="section-label mb-4" style={{ color: "rgba(184,154,106,0.7)" }}>
              LO QUE DICEN
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Pacientes que
              <br />
              <em style={{ color: "#b89a6a" }}>confían en nosotras</em>
            </h2>
          </div>

          {/* Right: Google rating block */}
          <a
            href="https://maps.app.goo.gl/dtwj4zv9ayygTz8NA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px 28px",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(184,154,106,0.2)",
              textDecoration: "none",
              transition: "background 0.25s, border-color 0.25s",
              flexShrink: 0,
            }}
          >
            {/* Google icon */}
            <GoogleIcon size={28} />

            {/* Divider */}
            <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(255,255,255,0.1)" }} />

            {/* Rating + count */}
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "2.4rem",
                    fontWeight: 300,
                    color: "#faf8f5",
                    lineHeight: 1,
                  }}
                >
                  {GOOGLE_RATING.toFixed(1)}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <StarRating rating={5} size={13} />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6rem",
                      color: "#888580",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {GOOGLE_REVIEW_COUNT} reseñas · Google
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* ── Carousel card ── */}
        <div className="relative" data-anim="up">
          <div
            style={{
              backgroundColor: "#242424",
              border: "1px solid rgba(184,154,106,0.15)",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              minHeight: "280px",
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? `translateX(${direction === "right" ? "-28px" : "28px"})`
                : "translateX(0)",
              transition: "opacity 0.32s ease, transform 0.32s ease",
            }}
          >
            {/* Stars + Google icon */}
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={r.rating} size={17} />
              <div
                style={{ width: "1px", height: "14px", backgroundColor: "rgba(184,154,106,0.25)" }}
              />
              <GoogleIcon size={16} />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.62rem",
                  color: "#888580",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginLeft: "2px",
                }}
              >
                Reseña verificada
              </span>
            </div>

            {/* Quote */}
            <blockquote>
              <p
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
                  fontWeight: 300,
                  color: "rgba(250,248,245,0.88)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  maxWidth: "780px",
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div
              className="flex items-center gap-4 mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(184,154,106,0.12)" }}
            >
              {/* Avatar large */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "2px solid rgba(184,154,106,0.4)",
                  backgroundColor: "rgba(184,154,106,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#d4b896",
                    letterSpacing: "0.05em",
                  }}
                >
                  {r.initials}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: "#faf8f5",
                  }}
                >
                  {r.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: "#888580",
                    marginTop: "3px",
                  }}
                >
                  {r.treatment} · {r.timeAgo}
                </p>
              </div>

              {/* Counter badge */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.6rem",
                    fontWeight: 300,
                    color: "rgba(184,154,106,0.35)",
                    lineHeight: 1,
                  }}
                >
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    color: "rgba(136,133,128,0.5)",
                    letterSpacing: "0.1em",
                  }}
                >
                  / {String(reviews.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* ── Navigation: avatars + arrows ── */}
          <div className="flex items-center justify-between mt-6">

            {/* Avatar thumbs — one per reviewer */}
            <div className="flex items-center gap-2">
              {reviews.map((rev, i) => (
                <Avatar
                  key={i}
                  review={rev}
                  size={i === current ? 46 : 36}
                  active={i === current}
                  onClick={() => goTo(i, i > current ? "right" : "left")}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Anterior"
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid rgba(184,154,106,0.3)",
                  backgroundColor: "transparent",
                  color: "#b89a6a",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.25s, border-color 0.25s",
                  fontSize: "1.1rem",
                }}
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Siguiente"
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid rgba(184,154,106,0.3)",
                  backgroundColor: "transparent",
                  color: "#b89a6a",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.25s, border-color 0.25s",
                  fontSize: "1.1rem",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom: total rating summary bar ── */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            borderTop: "1px solid rgba(184,154,106,0.1)",
            paddingTop: "2.5rem",
          }}
        >
          {/* Stacked avatars */}
          <div style={{ display: "flex" }}>
            {reviews.map((rev, i) => (
              <div
                key={i}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "2px solid #1c1c1c",
                  backgroundColor: "rgba(184,154,106,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: i === 0 ? "0" : "-10px",
                  zIndex: reviews.length - i,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.52rem",
                    fontWeight: 700,
                    color: "#d4b896",
                    letterSpacing: "0.03em",
                  }}
                >
                  {rev.initials}
                </span>
              </div>
            ))}
          </div>

          {/* Stars + text */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <StarRating rating={5} size={14} />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                color: "#888580",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {GOOGLE_REVIEW_COUNT} reseñas verificadas ·{" "}
              <a
                href="https://maps.app.goo.gl/dtwj4zv9ayygTz8NA"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b89a6a", textDecoration: "none" }}
              >
                Google Maps
              </a>
              {" "}· Clínica Quantum Medellín
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
