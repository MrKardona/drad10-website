import Link from "next/link";

export function CTABanner() {
  return (
    <section
      id="cta"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0e8e2 0%, #e8ddd4 50%, #f0e8e2 100%)",
      }}
    >
      {/* ── Geometric diagonal lines pattern ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #b89a6a 0px, #b89a6a 1px, transparent 1px, transparent 48px)",
          opacity: 0.06,
        }}
      />

      {/* ── Soft radial glow center ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(250,248,245,0.55) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* ── Section label ── */}
        <p className="section-label mb-6 opacity-0 animate-fade-up">
          PRIMERA CITA DE VALORACIÓN
        </p>

        {/* ── Heading ── */}
        <h2
          className="mb-6 leading-tight opacity-0 animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 300,
            color: "#1c1c1c",
            letterSpacing: "-0.025em",
          }}
        >
          Tu transformación comienza
          <br />
          <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
            con una conversación
          </em>
        </h2>

        {/* ── Gold divider ── */}
        <div
          className="mx-auto mb-7 opacity-0 animate-scale-in delay-200"
          style={{
            height: "1px",
            width: "4rem",
            background: "linear-gradient(to right, transparent, #b89a6a, transparent)",
          }}
        />

        {/* ── Paragraph ── */}
        <p
          className="leading-relaxed mb-10 max-w-xl mx-auto opacity-0 animate-fade-up delay-300"
          style={{
            color: "#888580",
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
          }}
        >
          Agenda tu cita de valoración sin costo. Nuestros especialistas
          analizarán tus necesidades y diseñarán un plan personalizado
          para ti.
        </p>

        {/* ── Buttons ── */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up delay-400">
          {/* Primary */}
          <Link href="#agenda" className="btn-dark inline-block">
            AGENDAR CITA AHORA
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573002440656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-black text-black text-[0.68rem] tracking-[0.12em] uppercase font-semibold transition-all duration-300 hover:bg-black hover:text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {/* WhatsApp icon */}
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.853.496 3.587 1.36 5.085L2 22l5.057-1.33A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* ── Schedule info ── */}
        <p
          className="mt-10 text-xs opacity-0 animate-fade-in delay-600"
          style={{ color: "#c8c4be", fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
        >
          Lun–Vie 9:00–19:00 · Sáb 9:00–14:00 · Cl. 7 #39-290 Consultorio 516, El Poblado
        </p>
      </div>
    </section>
  );
}
