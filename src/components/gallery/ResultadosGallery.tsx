"use client";

import { useState, useMemo } from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { GalleryModal } from "./GalleryModal";
import {
  galleryCases,
  allCategories,
  categoryLabels,
  type GalleryCase,
  type GalleryCategory,
} from "@/lib/gallery-data";

export function ResultadosGallery() {
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "all"
  >("all");
  const [modalItem, setModalItem] = useState<GalleryCase | null>(null);

  const featured = galleryCases.find((c) => c.featured)!;
  const rest = useMemo(() => {
    const nonFeatured = galleryCases.filter((c) => !c.featured);
    if (activeCategory === "all") return nonFeatured;
    return nonFeatured.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const showFeatured =
    activeCategory === "all" || featured.category === activeCategory;

  return (
    <>
      {/* ── Featured showcase ─────────────────────────────────── */}
      {showFeatured && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            marginBottom: "4rem",
            border: "1px solid rgba(184,154,106,0.15)",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={() => setModalItem(featured)}
          className="featured-case"
        >
          {/* Slider */}
          <div style={{ position: "relative" }}>
            <BeforeAfterSlider
              image={featured.image}
              alt={featured.title}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Featured badge */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                background: "#b89a6a",
                padding: "6px 16px",
                zIndex: 20,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#1c1c1c",
                  fontWeight: 700,
                }}
              >
                CASO DESTACADO
              </span>
            </div>
          </div>

          {/* Info panel */}
          <div
            style={{
              backgroundColor: "#141414",
              padding: "clamp(28px, 6%, 56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.58rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#b89a6a",
                border: "1px solid rgba(184,154,106,0.3)",
                padding: "3px 10px",
                alignSelf: "flex-start",
              }}
            >
              {categoryLabels[featured.category]}
            </span>

            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                fontWeight: 300,
                color: "#faf8f5",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {featured.title}
            </h2>

            <div
              style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(to right, #b89a6a, transparent)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Tratamiento", value: featured.treatment },
                { label: "Zona", value: featured.zone },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{ display: "flex", gap: "12px", alignItems: "baseline" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#888580",
                      minWidth: "90px",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "#d4b896",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "rgba(250,248,245,0.5)",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {featured.description}
            </p>

            <button
              style={{
                alignSelf: "flex-start",
                background: "none",
                border: "1px solid rgba(184,154,106,0.35)",
                color: "#b89a6a",
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "10px 20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              VER DETALLE
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Filter pills ──────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "2.5rem",
        }}
      >
        {allCategories.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "8px 18px",
                border: active
                  ? "1px solid #b89a6a"
                  : "1px solid rgba(184,154,106,0.2)",
                background: active ? "#b89a6a" : "transparent",
                color: active ? "#1c1c1c" : "#888580",
                fontWeight: active ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {categoryLabels[cat]}
            </button>
          );
        })}
      </div>

      {/* ── Grid ─────────────────────────────────────────────── */}
      {rest.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "4rem 0",
            color: "#888580",
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
          }}
        >
          Próximos casos de {categoryLabels[activeCategory].toLowerCase()} — muy pronto ✦
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {rest.map((item) => (
            <GalleryCardItem
              key={item.id}
              item={item}
              onClick={() => setModalItem(item)}
            />
          ))}
        </div>
      )}

      {/* ── CTA bottom ───────────────────────────────────────── */}
      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "3rem",
          border: "1px solid rgba(184,154,106,0.12)",
          backgroundColor: "#141414",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#b89a6a",
            marginBottom: "0.75rem",
          }}
        >
          ¿QUIERES VER TU PROPIO RESULTADO?
        </p>
        <p
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            fontWeight: 300,
            color: "#faf8f5",
            letterSpacing: "-0.02em",
            marginBottom: "1.75rem",
          }}
        >
          Agenda tu valoración gratuita hoy
        </p>
        <a
          href="https://wa.me/573002440656"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ fontSize: "0.62rem" }}
        >
          AGENDAR AHORA — WHATSAPP
        </a>
      </div>

      {/* ── Modal ────────────────────────────────────────────── */}
      {modalItem && (
        <GalleryModal item={modalItem} onClose={() => setModalItem(null)} />
      )}

      <style>{`
        @media (max-width: 640px) {
          .featured-case { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

/* ── Individual card ───────────────────────────────────────── */
function GalleryCardItem({
  item,
  onClick,
}: {
  item: GalleryCase;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        border: "1px solid rgba(184,154,106,0.1)",
        transition: "border-color 0.3s ease",
        borderColor: hovered ? "rgba(184,154,106,0.4)" : "rgba(184,154,106,0.1)",
      }}
    >
      {/* Slider preview */}
      <BeforeAfterSlider
        image={item.image}
        alt={item.title}
        initialPosition={50}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Bottom info overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px",
          background:
            "linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 100%)",
          transform: hovered ? "translateY(0)" : "translateY(0)",
          transition: "opacity 0.3s ease",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b89a6a",
            display: "block",
            marginBottom: "4px",
          }}
        >
          {categoryLabels[item.category]} · {item.treatment}
        </span>
        <p
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "#faf8f5",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </p>
      </div>

      {/* Hover: "Ver detalle" */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(10,10,10,0.3)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s ease",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#b89a6a",
            padding: "10px 22px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#1c1c1c",
              fontWeight: 700,
            }}
          >
            VER DETALLE
          </span>
        </div>
      </div>
    </div>
  );
}
