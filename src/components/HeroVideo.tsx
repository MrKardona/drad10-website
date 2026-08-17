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
      {/* z-index:1 so the dark overlay (z-index:2) always renders on top,
          hiding YouTube's title card and player UI completely. */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true" style={{ zIndex: 1 }}>
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
      {/* z-index:2 ensures this sits above the YouTube iframe (z-index:1)
          so the player's title card never bleeds through. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          // Fully opaque at 0-10% (hides YouTube title card in top-left corner),
          // then fades to semi-transparent so the video is visible in the mid section.
          background:
            "linear-gradient(to bottom, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 10%, rgba(10,10,10,0.60) 40%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.90) 100%)",
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

        {/* Acceso rápido a tratamientos */}
        <div
          className="mt-7 opacity-0 animate-fade-up delay-600 flex flex-wrap gap-2"
          aria-label="Tratamientos populares"
        >
          {[
            { label: "BOTOX", href: "/servicios/botox" },
            { label: "LABIOS", href: "/servicios/relleno-de-labios" },
            { label: "ÁCIDO HIALURÓNICO", href: "/servicios/acido-hialuronico" },
            { label: "IMPLANTE CAPILAR", href: "/servicios/implante-capilar-fue" },
            { label: "MOLDEAMIENTO", href: "/servicios/moldeamiento-corporal" },
            { label: "DESCENSO DE PESO", href: "/servicios/descenso-de-peso" },
          ].map((c) => (
            <a key={c.label} href={c.href} className="hero-chip">
              {c.label}
            </a>
          ))}
        </div>

        {/* Social proof */}
        <p
          className="mt-8 opacity-0 animate-fade-up delay-700 text-xs tracking-widest uppercase"
          style={{
            color: "rgba(250,248,245,0.45)",
            fontFamily: "var(--font-body)",
          }}
        >
          +20.000 personas han confiado en nosotras · ★ 4.9 en Google
        </p>
      </div>

    </section>
  );
}
