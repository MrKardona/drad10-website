"use client";

import { useEffect, useRef, useState } from "react";
import type { ClipTratamiento } from "@/lib/tratamientos/videos";

const GOLD = "#b89a6a";

/**
 * Carrusel de clips reales del tratamiento. Los de procedimiento no tienen
 * audio y se reproducen en bucle mientras están en pantalla; los testimonios
 * esperan a que la persona toque para reproducir con sonido.
 */
export function VideosTratamiento({ clips, nombre }: { clips: ClipTratamiento[]; nombre: string }) {
  return (
    <div
      className="videos-trat"
      style={{
        display: "grid",
        gridAutoFlow: "column",
        gridAutoColumns: "min(62vw, 250px)",
        gap: "16px",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        paddingBottom: "12px",
        justifyContent: clips.length <= 4 ? "center" : "start",
      }}
    >
      {clips.map((c, i) => (
        <Clip key={c.src} clip={c} alt={`${nombre}: ${c.tipo === "testimonio" ? "testimonio de paciente" : c.tipo === "educativo" ? "explicación del equipo" : "procedimiento real"} ${i + 1}`} />
      ))}
      <style>{`.videos-trat::-webkit-scrollbar{height:4px}.videos-trat::-webkit-scrollbar-thumb{background:${GOLD}66;border-radius:4px}`}</style>
    </div>
  );
}

function Clip({ clip, alt }: { clip: ClipTratamiento; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [activo, setActivo] = useState(false);

  // Clips mudos: reproducir solo mientras son visibles para no gastar datos ni CPU.
  useEffect(() => {
    const v = ref.current;
    if (!v || clip.sonido) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.4 });
    io.observe(v);
    return () => io.disconnect();
  }, [clip.sonido]);

  const reproducir = () => {
    const v = ref.current;
    if (!v) return;
    document.querySelectorAll<HTMLVideoElement>(".videos-trat video").forEach((o) => {
      if (o !== v && !o.muted) o.pause();
    });
    setActivo(true);
    v.play().catch(() => {});
  };

  return (
    <figure style={{ margin: 0, scrollSnapAlign: "start" }}>
      <div style={{ position: "relative", aspectRatio: "9 / 16", overflow: "hidden", background: "#111" }}>
        <video
          ref={ref}
          src={clip.src}
          poster={clip.poster}
          muted={!clip.sonido}
          loop={!clip.sonido}
          playsInline
          preload={clip.sonido ? "none" : "metadata"}
          controls={clip.sonido && activo}
          aria-label={alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {clip.sonido && !activo && (
          <button
            type="button"
            onClick={reproducir}
            aria-label={`Reproducir ${alt}`}
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05) 55%)",
              border: 0,
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: "rgba(250,248,245,0.92)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden>
                <path d="M2 1.5v19l17-9.5z" fill="#1c1c1c" />
              </svg>
            </span>
          </button>
        )}
        <span
          style={{
            position: "absolute",
            left: 10,
            top: 10,
            fontSize: "0.72rem",
            fontWeight: 600,
            color: "#1c1c1c",
            background: "rgba(250,248,245,0.9)",
            padding: "3px 9px",
            borderRadius: 999,
            pointerEvents: "none",
          }}
        >
          {clip.tipo === "testimonio" ? "Testimonio" : clip.tipo === "educativo" ? "Te explicamos" : "En la clínica"}
        </span>
      </div>
    </figure>
  );
}
