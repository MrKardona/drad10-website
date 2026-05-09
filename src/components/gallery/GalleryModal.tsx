"use client";

import { useEffect } from "react";
import Link from "next/link";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import type { GalleryCase } from "@/lib/gallery-data";
import { categoryLabels } from "@/lib/gallery-data";

interface Props {
  item: GalleryCase;
  onClose: () => void;
}

export function GalleryModal({ item, onClose }: Props) {
  /* Close on ESC */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px, 4vw, 48px)",
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(10px)",
      }}
      onClick={onClose}
    >
      {/* Panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: "960px",
          width: "100%",
          maxHeight: "90vh",
          background: "#141414",
          border: "1px solid rgba(184,154,106,0.2)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 20,
            background: "rgba(20,20,20,0.85)",
            border: "1px solid rgba(184,154,106,0.3)",
            width: 36,
            height: 36,
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#b89a6a",
            fontSize: "1.1rem",
            lineHeight: 1,
            backdropFilter: "blur(6px)",
          }}
        >
          ×
        </button>

        {/* Left: slider */}
        <div style={{ overflow: "hidden", maxHeight: "90vh" }}>
          <BeforeAfterSlider
            image={item.image}
            alt={item.title}
            sizes="(max-width: 960px) 50vw, 480px"
          />
        </div>

        {/* Right: info */}
        <div
          style={{
            padding: "clamp(24px, 5%, 48px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1.25rem",
            overflowY: "auto",
          }}
        >
          {/* Category badge */}
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#b89a6a",
              border: "1px solid rgba(184,154,106,0.35)",
              padding: "3px 10px",
              alignSelf: "flex-start",
            }}
          >
            {categoryLabels[item.category]}
          </span>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {item.title}
          </h2>

          {/* Gold line */}
          <div
            style={{
              width: "36px",
              height: "1px",
              background: "linear-gradient(to right, #b89a6a, transparent)",
            }}
          />

          {/* Treatment + Zone */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#888580",
                  minWidth: "80px",
                }}
              >
                Tratamiento
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  color: "#d4b896",
                }}
              >
                {item.treatment}
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#888580",
                  minWidth: "80px",
                }}
              >
                Zona
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  color: "#d4b896",
                }}
              >
                {item.zone}
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "rgba(250,248,245,0.55)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {item.description}
          </p>

          {/* CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
            <Link
              href="https://wa.me/573002440656"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ textAlign: "center", fontSize: "0.62rem" }}
            >
              AGENDAR VALORACIÓN
            </Link>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "1px solid rgba(184,154,106,0.2)",
                color: "#888580",
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              VER MÁS CASOS
            </button>
          </div>
        </div>
      </div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 640px) {
          .modal-panel { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
