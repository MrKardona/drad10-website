"use client";

// YouTube video ID — change this if the hero video is ever updated
const VIDEO_ID = "V1-aiXd8ncM";

// Embed URL:
//  - youtube-nocookie.com: privacy-enhanced mode (no tracking cookies)
//  - autoplay=1 & mute=1: required for autoplay without user gesture
//  - loop=1 & playlist=VIDEO_ID: loops the video seamlessly
//  - controls=0: hides all player UI
//  - disablekb=1: disables keyboard shortcuts on the iframe
//  - iv_load_policy=3: hides annotations
//  - rel=0: no related videos at end
//  - modestbranding=1: minimal YouTube branding
const EMBED_URL =
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
  `&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1`;

export function HeroVideo() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>

      {/* ── YouTube background video ── */}
      {/* Technique: iframe is scaled to cover the full viewport regardless of
          aspect ratio. min-width/min-height ensure no black bars appear.
          pointer-events:none prevents clicks on the iframe (no YouTube controls). */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <iframe
          src={EMBED_URL}
          allow="autoplay; encrypted-media"
          title="DRA.D10 clínica — video de fondo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            /* 16:9 sizing that always covers the container */
            width: "177.78vh",   /* 100vh × (16/9) */
            height: "56.25vw",   /* 100vw × (9/16) */
            minWidth: "100%",
            minHeight: "100%",
            border: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── Overlay premium oscuro ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.62) 45%, rgba(10,10,10,0.90) 100%)",
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

        {/* Logo DRA.D10 */}
        <div className="mb-8 opacity-0 animate-fade-up">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="DRA.D10"
            style={{
              height: "clamp(52px, 8vw, 80px)",
              width: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 0.95,
            }}
          />
        </div>

        {/* Etiqueta superior */}
        <p
          className="section-label mb-6 opacity-0 animate-fade-up delay-100"
          style={{ color: "#b89a6a" }}
        >
          MEDELLÍN · EL POBLADO · COLOMBIA
        </p>

        {/* Título */}
        <h1
          className="mb-6 leading-tight opacity-0 animate-fade-up delay-200"
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
        <div className="flex justify-center mb-6 opacity-0 animate-fade-up delay-300">
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
          className="mb-10 max-w-lg leading-relaxed opacity-0 animate-fade-up delay-400"
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
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-500">
          <a href="#agenda" className="btn-gold">
            AGENDAR CITA
          </a>
          <a href="#servicios" className="btn-outline-cream">
            VER TRATAMIENTOS
          </a>
        </div>

        {/* Social proof */}
        <p
          className="mt-8 opacity-0 animate-fade-up delay-600 text-xs tracking-widest uppercase"
          style={{
            color: "rgba(250,248,245,0.45)",
            fontFamily: "var(--font-body)",
          }}
        >
          +8.000 personas han confiado en nosotras
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
