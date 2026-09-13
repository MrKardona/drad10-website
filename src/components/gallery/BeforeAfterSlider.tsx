"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  /** Foto real tomada antes del tratamiento. */
  antes: string;
  /** Foto real tomada después del tratamiento. */
  despues: string;
  alt?: string;
  /** Posición inicial del divisor, de 0 a 100. */
  initialPosition?: number;
  /** Proporción del visor. Las fotos clínicas varían entre retrato y apaisado. */
  aspectRatio?: string;
  /** Encuadre dentro del visor: "center top" para rostros, "center" para cuerpo. */
  objectPosition?: string;
  sizes?: string;
}

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(v, max));

export function BeforeAfterSlider({
  antes,
  despues,
  alt = "Resultado",
  initialPosition = 50,
  aspectRatio = "3 / 4",
  objectPosition = "center top",
  sizes = "100vw",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  // Limpia los listeners del arrastre en curso (si lo hay).
  const soltarRef = useRef<(() => void) | null>(null);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100, 2, 98));
  }, []);

  // Los listeners del documento solo existen mientras se arrastra. Antes cada
  // visor dejaba cuatro permanentes: con 12 casos en /resultados eran 48
  // callbacks ejecutándose en cada movimiento del ratón o del dedo.
  const empezarArrastre = useCallback(
    (tactil: boolean) => {
      soltarRef.current?.();
      const mover = (e: MouseEvent | TouchEvent) =>
        updatePos("touches" in e ? e.touches[0].clientX : e.clientX);
      const soltar = () => {
        document.removeEventListener(tactil ? "touchmove" : "mousemove", mover);
        document.removeEventListener(tactil ? "touchend" : "mouseup", soltar);
        document.removeEventListener("touchcancel", soltar);
        soltarRef.current = null;
      };
      document.addEventListener(tactil ? "touchmove" : "mousemove", mover, { passive: true });
      document.addEventListener(tactil ? "touchend" : "mouseup", soltar);
      if (tactil) document.addEventListener("touchcancel", soltar);
      soltarRef.current = soltar;
    },
    [updatePos]
  );

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      updatePos(e.clientX);
      empezarArrastre(false);
    },
    [updatePos, empezarArrastre]
  );

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      updatePos(e.touches[0].clientX);
      empezarArrastre(true);
    },
    [updatePos, empezarArrastre]
  );

  // Teclado: flechas mueven de a 5%, Inicio/Fin llevan a los extremos.
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const paso = e.shiftKey ? 15 : 5;
    if (e.key === "ArrowLeft") setPosition((p) => clamp(p - paso, 2, 98));
    else if (e.key === "ArrowRight") setPosition((p) => clamp(p + paso, 2, 98));
    else if (e.key === "Home") setPosition(2);
    else if (e.key === "End") setPosition(98);
    else return;
    e.preventDefault();
  }, []);

  useEffect(() => () => soltarRef.current?.(), []);

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onKeyDown={onKeyDown}
      role="slider"
      tabIndex={0}
      aria-label={`Comparar antes y después: ${alt}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)}% antes`}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
        cursor: "col-resize",
        // El arrastre horizontal es del visor; el vertical sigue siendo scroll.
        touchAction: "pan-y",
        userSelect: "none",
        WebkitUserSelect: "none",
        backgroundColor: "#1c1c1c",
        outlineOffset: "3px",
      }}
    >
      {/* Capa DESPUÉS — ocupa todo el visor */}
      <Image
        src={despues}
        alt={`${alt} — después`}
        fill
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition }}
        draggable={false}
      />

      {/* Capa ANTES — recortada desde la derecha según el divisor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <Image
          src={antes}
          alt={`${alt} — antes`}
          fill
          sizes={sizes}
          style={{ objectFit: "cover", objectPosition }}
          draggable={false}
        />
      </div>

      {/* Etiquetas */}
      <div
        aria-hidden
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
        <span style={{ color: "#faf8f5", fontSize: "0.52rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
          ANTES
        </span>
      </div>
      <div
        aria-hidden
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

      {/* Divisor dorado */}
      <div
        aria-hidden
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

      {/* Indicación */}
      <div
        aria-hidden
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
