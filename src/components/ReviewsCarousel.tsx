"use client";

import { useCallback, useRef, useState } from "react";

interface Review {
  name: string;
  date: string;       // fecha visible, ej. "Julio 6, 2025"
  rating: number;
  text: string;
}

// ─── Reseñas reales del perfil de Google (Clínica Quantum) ─────────────────
const reviews: Review[] = [
  {
    name: "Camilo López Posada",
    date: "Hace 8 meses",
    rating: 5,
    text: "La mejor clínica, una atención demasiado increíble, muy buen equipo de trabajo (altamente capacitado) y estoy muy feliz con mi proceso. SUPER RECOMENDADO.",
  },
  {
    name: "Karen Siachoque",
    date: "Hace 3 meses",
    rating: 5,
    text: "Mi experiencia en la clínica Quantum fue increíble. Destaco la calidad humana de todo el equipo, su paciencia y el amor con el que tratan a cada persona. Realmente hacen sentir confianza y bienestar desde el primer momento. ¡Totalmente recomendado!",
  },
  {
    name: "Manuela Gomez",
    date: "Hace 3 meses",
    rating: 5,
    text: "La atención es increíble, se siente súper cálida y familiar. Todo el equipo es muy atento y hace que uno se sienta en confianza desde el primer momento. Se nota el amor y la dedicación en lo que hacen. ¡Súper recomendada! La Dra Daniela es una crack! 😍",
  },
  {
    name: "Antonia Aguirre",
    date: "Hace un año",
    rating: 5,
    text: "La experiencia fue INCREÍBLE, la atención me encantó. El precio fue super bueno para todo lo que me hicieron. Manejan super buena tecnología, son innovadores y tienen la mejor calidad. Son tan buenos que me voy a traer a mi hermana y a mi novio porque la verdad SUPER recomendado.",
  },
  {
    name: "Catalina Serra",
    date: "Hace 2 años",
    rating: 5,
    text: "Es muy profesional en la asesoría de cada procedimiento a realizar en sus pacientes de acuerdo a sus necesidades estéticas, y mezclado con su calidez en el trato hace que la Dra tenga asertividad al ejercer sus labores médicas.",
  },
];

// ─── Datos del perfil de Google (Clínica Quantum, El Poblado) ──────────────
const GOOGLE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = 266;
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/dtwj4zv9ayygTz8NA";

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

function GoogleLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 150;

  return (
    <article
      className="review-card"
      style={{
        flex: "0 0 auto",
        scrollSnapAlign: "start",
        backgroundColor: "#242424",
        border: "1px solid rgba(184,154,106,0.15)",
        padding: "1.75rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        minHeight: "230px",
      }}
    >
      {/* Nombre + fecha + logo Google */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem" }}>
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#faf8f5",
            }}
          >
            {review.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              color: "#888580",
              marginTop: "3px",
            }}
          >
            {review.date}
          </p>
        </div>
        <GoogleLogo size={18} />
      </div>

      <StarRating rating={review.rating} size={15} />

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.82rem",
          color: "rgba(250,248,245,0.82)",
          lineHeight: 1.65,
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : 5,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {review.text}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            alignSelf: "flex-start",
            background: "none",
            border: "none",
            padding: 0,
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#b89a6a",
            cursor: "pointer",
          }}
        >
          {expanded ? "Leer menos" : "Leer más"}
        </button>
      )}
    </article>
  );
}

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".review-card");
    const step = card ? card.offsetWidth + 16 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  const arrowStyle: React.CSSProperties = {
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
    flexShrink: 0,
  };

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

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* ── Encabezado ── */}
        <div className="text-center mb-10" data-anim="up">
          <p className="section-label mb-4" style={{ color: "rgba(184,154,106,0.7)" }}>
            RESEÑAS DE GOOGLE
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
            Lo que dicen <em style={{ color: "#b89a6a" }}>nuestros pacientes</em>
          </h2>
        </div>

        {/* ── Resumen + carrusel ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-stretch" data-anim="up">
          {/* Bloque resumen (izquierda) */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center"
            style={{
              flexShrink: 0,
              minWidth: "220px",
              gap: "0.6rem",
              padding: "2rem 1.5rem",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(184,154,106,0.18)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.9rem",
                fontWeight: 300,
                letterSpacing: "0.12em",
                color: "#faf8f5",
              }}
            >
              EXCELENTE
            </span>
            <StarRating rating={5} size={26} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "#888580",
              }}
            >
              {GOOGLE_RATING.toFixed(1)} · A base de{" "}
              <strong style={{ color: "#faf8f5", fontWeight: 600 }}>
                {GOOGLE_REVIEW_COUNT} reseñas
              </strong>
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "0.4rem" }}>
              <GoogleLogo size={26} />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: "#faf8f5",
                }}
              >
                Google
              </span>
            </div>
          </a>

          {/* Carrusel (derecha) */}
          <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button onClick={() => scrollByCard(-1)} aria-label="Reseñas anteriores" style={arrowStyle}>
              ←
            </button>

            <div
              ref={trackRef}
              className="reviews-track"
              style={{
                display: "flex",
                gap: "16px",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                flex: 1,
                minWidth: 0,
              }}
            >
              {reviews.map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>

            <button onClick={() => scrollByCard(1)} aria-label="Más reseñas" style={arrowStyle}>
              →
            </button>
          </div>
        </div>

        {/* Ancho responsivo de las tarjetas + ocultar scrollbar WebKit */}
        <style>{`
          .reviews-track::-webkit-scrollbar { display: none; }
          .review-card { width: 100%; }
          @media (min-width: 640px)  { .review-card { width: calc(50% - 8px); } }
          @media (min-width: 1024px) { .review-card { width: calc(33.333% - 11px); } }
        `}</style>

        {/* ── Pie: enlace al perfil ── */}
        <div className="mt-8 text-center" style={{ borderTop: "1px solid rgba(184,154,106,0.1)", paddingTop: "1.25rem" }}>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              color: "#b89a6a",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Ver todas las reseñas en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
