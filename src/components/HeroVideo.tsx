"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // IntersectionObserver: reproduce cuando entra al viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>

      {/* ── Video de fondo ── */}
      <video
        ref={videoRef}
        src="/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* ── Overlay premium oscuro ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.45) 45%, rgba(10,10,10,0.82) 100%)",
        }}
      />

      {/* ── Partículas doradas flotantes ── */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none animate-float"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            backgroundColor: "#b89a6a",
            opacity: 0.2 + i * 0.04,
            left: `${10 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.9}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      {/* ── Contenido centrado ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Etiqueta superior */}
        <p
          className="section-label mb-6 opacity-0 animate-fade-up"
          style={{ color: "#b89a6a" }}
        >
          MEDELLÍN · EL POBLADO · COLOMBIA
        </p>

        {/* Título */}
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
              background:
                "linear-gradient(to right, transparent, #b89a6a, transparent)",
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
          style={{
            color: "rgba(250,248,245,0.45)",
            fontFamily: "var(--font-body)",
          }}
        >
          +500 pacientes nos eligieron este año
        </p>
      </div>

      {/* ── Scroll indicator ── */}
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
            background:
              "linear-gradient(to bottom, rgba(184,154,106,0.7), transparent)",
          }}
        />
      </div>
    </section>
  );
}
