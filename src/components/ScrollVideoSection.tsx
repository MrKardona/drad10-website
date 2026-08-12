"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 224;

function src(i: number) {
  return `/frames/ezgif-frame-${(i + 1).toString().padStart(3, "0")}.jpg`;
}

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function fadeWindow(p: number, i0: number, i1: number, o0: number, o1: number) {
  if (p < i0) return 0;
  if (p < i1) return clamp01((p - i0) / (i1 - i0));
  if (p < o0) return 1;
  if (p < o1) return clamp01(1 - (p - o0) / (o1 - o0));
  return 0;
}

export function ScrollVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const framesRef    = useRef<HTMLImageElement[]>([]);
  const frameIdxRef  = useRef(0);

  const layerARef    = useRef<HTMLDivElement>(null); // "Tecnología de vanguardia"
  const layerBRef    = useRef<HTMLDivElement>(null); // frase central
  const layerCRef    = useRef<HTMLDivElement>(null); // CTA final

  const [pct, setPct]       = useState(0);
  const [loaded, setLoaded] = useState(false);

  /* ─── draw ─── */
  const draw = useCallback((idx: number) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const img = framesRef.current[idx];
    if (!img?.complete || !img.naturalWidth) return;
    const cw = c.width, ch = c.height;
    const iw = img.naturalWidth, ih = img.naturalHeight;
    const s  = Math.max(cw / iw, ch / ih);
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - iw * s) / 2, (ch - ih * s) / 2, iw * s, ih * s);
  }, []);

  /* ─── preload ─── */
  useEffect(() => {
    let done = 0;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);
    framesRef.current = imgs;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = src(i);
      const finish = () => {
        done++;
        setPct(Math.round((done / FRAME_COUNT) * 100));
        if (done === FRAME_COUNT) { setLoaded(true); draw(0); }
      };
      img.onload = finish;
      img.onerror = finish;
      imgs[i] = img;
    }
  }, [draw]);

  /* ─── canvas resize ─── */
  useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return;
      c.width  = window.innerWidth;
      c.height = window.innerHeight;
      draw(frameIdxRef.current);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [draw]);

  /* ─── ScrollTrigger ─── */
  useGSAP(() => {
    if (!loaded) return;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end:   "bottom bottom",
      scrub: 0.5,
      onUpdate(self) {
        const p = self.progress;

        /* frame */
        const fi = Math.round(p * (FRAME_COUNT - 1));
        if (fi !== frameIdxRef.current) { frameIdxRef.current = fi; draw(fi); }

        /* Layer A — badge bottom-left, visible p 0.05→0.35 */
        if (layerARef.current) {
          const op = fadeWindow(p, 0.05, 0.14, 0.28, 0.38);
          const y  = (1 - clamp01((p - 0.05) / 0.09)) * 18;
          layerARef.current.style.opacity   = String(op);
          layerARef.current.style.transform = `translateY(${y}px)`;
        }

        /* Layer B — centered phrase, visible p 0.42→0.72 */
        if (layerBRef.current) {
          const op = fadeWindow(p, 0.42, 0.52, 0.63, 0.73);
          layerBRef.current.style.opacity = String(op);
        }

        /* Layer C — CTA bottom-center, visible p 0.78→1 */
        if (layerCRef.current) {
          const op = clamp01((p - 0.78) / 0.12);
          const y  = (1 - clamp01((p - 0.78) / 0.12)) * 28;
          layerCRef.current.style.opacity   = String(op);
          layerCRef.current.style.transform = `translateY(${y}px)`;
        }
      },
    });

    return () => st.kill();
  }, { scope: containerRef, dependencies: [loaded] });

  return (
    <section ref={containerRef} style={{ height: "420vh" }} className="relative bg-black">

      {/* sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

        {/* edge vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{ background: "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.48) 100%)" }}
        />

        {/* ── LAYER A — scanner badge ── */}
        <div
          ref={layerARef}
          className="absolute pointer-events-none"
          style={{
            left: "clamp(1.5rem, 5vw, 4rem)",
            bottom: "clamp(2rem, 4vw, 3.5rem)",
            opacity: 0,
            willChange: "opacity, transform",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(184,154,106,0.35)",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0,0,0,0.28)",
              padding: "0.65rem 1.6rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#b89a6a",
                whiteSpace: "nowrap",
              }}
            >
              Scanner D10 · INDIBA Certified · Quantum
            </p>
          </div>
        </div>

        {/* ── LAYER B — central phrase ── */}
        <div
          ref={layerBRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0, willChange: "opacity" }}
        >
          <p
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1rem, 3vw, 2.5rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textAlign: "center",
              textShadow: "0 2px 24px rgba(0,0,0,0.6)",
              padding: "0 1.5rem",
            }}
          >
            Transforma&ensp;·&ensp;Renueva&ensp;·&ensp;Revela
          </p>
        </div>

        {/* ── LAYER C — outro CTA ── */}
        <div
          ref={layerCRef}
          className="absolute pointer-events-none"
          style={{
            bottom: "clamp(2rem, 4vw, 3.5rem)",
            left: "50%",
            transform: "translateX(-50%) translateY(28px)",
            opacity: 0,
            willChange: "opacity, transform",
            textAlign: "center",
            width: "max-content",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.01em",
              marginBottom: "0.3rem",
              textShadow: "0 2px 20px rgba(0,0,0,0.7)",
            }}
          >
            Tu versión más radiante
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#b89a6a",
              marginBottom: "1.4rem",
            }}
          >
            te espera en El Poblado
          </p>
          <a
            href="#agenda"
            className="btn-gold"
            style={{ pointerEvents: "auto" }}
          >
            AGENDA TU CITA
          </a>
        </div>

        {/* ── Loading bar (2 px strip, bottom) ── */}
        {!loaded && (
          <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 20 }}>
            <div style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.07)" }}>
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  backgroundColor: "#b89a6a",
                  transition: "width 0.12s linear",
                }}
              />
            </div>
            <p
              style={{
                position: "absolute",
                bottom: "0.6rem",
                right: "1rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.5rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(184,154,106,0.55)",
              }}
            >
              Cargando {pct}%
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
