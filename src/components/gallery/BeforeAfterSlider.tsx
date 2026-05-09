"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt?: string;
  /** Starting position 0–100 (default 50) */
  initialPosition?: number;
  sizes?: string;
}

// The "before" effect is simulated with CSS filters on the same image:
// desaturated + dimmed = before state ; original colours = after state
const BEFORE_FILTER =
  "grayscale(30%) brightness(0.75) saturate(0.35) contrast(0.92)";

export function BeforeAfterSlider({
  image,
  alt = "Resultado",
  initialPosition = 50,
  sizes = "100vw",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const isDragging = useRef(false);

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(val, max));

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(pct, 2, 98));
  }, []);

  /* ── Mouse ────────────────────────────────────────────────── */
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isDragging.current = true;
      updatePos(e.clientX);
    },
    [updatePos]
  );

  /* ── Touch ────────────────────────────────────────────────── */
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      isDragging.current = true;
      updatePos(e.touches[0].clientX);
    },
    [updatePos]
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (isDragging.current) updatePos(e.clientX);
    };
    const up = () => {
      isDragging.current = false;
    };
    const tmove = (e: TouchEvent) => {
      if (isDragging.current) updatePos(e.touches[0].clientX);
    };
    const tend = () => {
      isDragging.current = false;
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    document.addEventListener("touchmove", tmove, { passive: true });
    document.addEventListener("touchend", tend);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchmove", tmove);
      document.removeEventListener("touchend", tend);
    };
  }, [updatePos]);

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        cursor: "col-resize",
        userSelect: "none",
        WebkitUserSelect: "none",
        backgroundColor: "#1c1c1c",
      }}
    >
      {/* ── AFTER layer (full width, original colours) ── */}
      <Image
        src={image}
        alt={`${alt} — después`}
        fill
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition: "center top" }}
        draggable={false}
      />

      {/* ── BEFORE layer (clipped, filtered) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <Image
          src={image}
          alt={`${alt} — antes`}
          fill
          sizes={sizes}
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: BEFORE_FILTER,
          }}
          draggable={false}
        />
      </div>

      {/* ── Labels ── */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          background: "rgba(20,20,20,0.82)",
          backdropFilter: "blur(6px)",
          padding: "3px 10px",
          border: "1px solid rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            color: "#faf8f5",
            fontSize: "0.52rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          ANTES
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "rgba(184,154,106,0.92)",
          backdropFilter: "blur(6px)",
          padding: "3px 10px",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            color: "#1c1c1c",
            fontSize: "0.52rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          DESPUÉS
        </span>
      </div>

      {/* ── Gold divider ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: "2px",
          background: "#b89a6a",
          transform: "translateX(-50%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {/* Circular handle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "#b89a6a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 16px rgba(0,0,0,0.5)",
            pointerEvents: "all",
            cursor: "col-resize",
          }}
        >
          {/* Arrows icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 8L3 12L7 16M17 8L21 12L17 16"
              stroke="#1c1c1c"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* ── Drag hint ── */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
          padding: "3px 10px",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "0.48rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          ARRASTRA PARA COMPARAR
        </span>
      </div>
    </div>
  );
}
