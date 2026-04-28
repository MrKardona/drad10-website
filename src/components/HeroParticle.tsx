"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  r: number;
  g: number;
  b: number;
  a: number;
  vx: number;
  vy: number;
  size: number;
}

export function HeroParticle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollRef = useRef(0);
  const rafRef = useRef<number>(0);
  const readyRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const PIXEL_SIZE = 3; // tamaño de cada partícula (menor = más detalle, más lento)
    const MAX_SCATTER = 600; // distancia máxima de dispersión

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function buildParticles(img: HTMLImageElement) {
      if (!canvas || !ctx) return;
      resize();

      // Dibuja la imagen escalada al canvas
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const ox = (canvas.width - w) / 2;
      const oy = (canvas.height - h) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, ox, oy, w, h);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const particles: Particle[] = [];

      for (let y = 0; y < canvas.height; y += PIXEL_SIZE) {
        for (let x = 0; x < canvas.width; x += PIXEL_SIZE) {
          const idx = (y * canvas.width + x) * 4;
          const alpha = data[idx + 3];
          if (alpha < 10) continue;

          const angle = Math.random() * Math.PI * 2;
          const speed = 0.5 + Math.random() * 2.5;

          particles.push({
            x,
            y,
            originX: x,
            originY: y,
            r: data[idx],
            g: data[idx + 1],
            b: data[idx + 2],
            a: alpha / 255,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.8, // deriva hacia arriba
            size: PIXEL_SIZE,
          });
        }
      }

      particlesRef.current = particles;
      readyRef.current = true;
    }

    // Carga imagen
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/images/hero-bg.jpg";
    img.onload = () => buildParticles(img);

    // Scroll listener
    function onScroll() {
      scrollRef.current = window.scrollY;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      if (img.complete) buildParticles(img);
    });

    // Render loop
    function render() {
      if (!canvas || !ctx) return;
      const scroll = scrollRef.current;
      const viewH = window.innerHeight;
      // progress: 0 (top) → 1 (after one full viewport scroll)
      const progress = Math.min(scroll / viewH, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!readyRef.current) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Interpolación: 0 = en origen, 1 = dispersado
        const tx = p.originX + p.vx * progress * MAX_SCATTER;
        const ty = p.originY + p.vy * progress * MAX_SCATTER;
        const alpha = p.a * (1 - progress * 1.4);

        if (alpha <= 0) continue;

        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${alpha.toFixed(3)})`;
        ctx.fillRect(tx, ty, p.size, p.size);
      }

      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Canvas de partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />

      {/* Overlay oscuro sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,28,28,0.45) 0%, rgba(28,28,28,0.2) 50%, rgba(28,28,28,0.7) 100%)",
        }}
      />

      {/* Partículas flotantes doradas decorativas */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none animate-float"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            backgroundColor: "#b89a6a",
            opacity: 0.25 + i * 0.05,
            left: `${10 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.9}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      {/* Contenido del hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Etiqueta superior */}
        <p
          className="section-label mb-6 opacity-0 animate-fade-up"
          style={{ color: "#b89a6a" }}
        >
          MEDELLÍN · EL POBLADO · COLOMBIA
        </p>

        {/* Título principal */}
        <h1
          className="mb-6 leading-tight opacity-0 animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 300,
            color: "#faf8f5",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Medicina Estética
          <br />
          <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
            de Alto Nivel
          </em>
        </h1>

        {/* Línea dorada */}
        <div className="flex justify-center mb-6 opacity-0 animate-fade-up delay-200">
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(to right, transparent, #b89a6a, transparent)",
            }}
          />
        </div>

        {/* Descripción */}
        <p
          className="mb-10 max-w-lg leading-relaxed opacity-0 animate-fade-up delay-300"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "rgba(250,248,245,0.75)",
            lineHeight: 1.8,
          }}
        >
          Transformamos tu bienestar con tratamientos seguros,
          naturales y personalizados. Tecnología INDIBA · Scanner Facial D10.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-400">
          <a href="#agenda" className="btn-gold">
            AGENDAR CITA
          </a>
          <a href="#servicios" className="btn-outline-cream">
            VER TRATAMIENTOS
          </a>
        </div>

        {/* Social proof */}
        <p
          className="mt-8 opacity-0 animate-fade-up delay-500 text-xs tracking-widest uppercase"
          style={{ color: "rgba(250,248,245,0.45)", fontFamily: "var(--font-body)" }}
        >
          +500 pacientes nos eligieron este año
        </p>
      </div>

      {/* Indicador de scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0 animate-fade-up delay-700"
        style={{ color: "rgba(250,248,245,0.4)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          className="w-px"
          style={{
            height: "40px",
            background: "linear-gradient(to bottom, rgba(184,154,106,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}
