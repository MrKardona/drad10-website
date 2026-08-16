import Image from "next/image";
import Link from "next/link";
import { TecnologiaShowcase } from "@/components/TecnologiaShowcase";

export function TratamientosDestacados() {
  return (
    <section
      id="tratamientos-destacados"
      style={{ backgroundColor: "#faf8f5" }}
      className="py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">

        {/* ─── Section Header ─── */}
        <div className="mb-12 md:mb-16" data-anim="up">
          <p
            style={{
              fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.2em",
              color: "#b89a6a",
              fontWeight: 500,
            }}
            className="uppercase mb-5"
          >
            TRATAMIENTOS DESTACADOS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 300,
              color: "#1c1c1c",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Nuestros tratamientos{" "}
            <br className="hidden sm:block" />
            <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
              más solicitados
            </em>
          </h2>
        </div>

        {/* ══ BLOQUE A — Explorador interactivo Scanner D10 / INDIBA ══ */}
        <TecnologiaShowcase />

        {/* ════════════════════════════════════════════
            BLOCK B — Two asymmetric columns
        ════════════════════════════════════════════ */}
        <div
          className="flex flex-col md:flex-row gap-4"
          style={{ minHeight: "560px" }}
        >

          {/* ── Left column: Botox — 58% ── */}
          <div
            data-anim="up"
            className="relative overflow-hidden flex flex-col group"
            style={{
              backgroundColor: "#f0e8e2",
              flex: "0 0 58%",
            }}
          >
            {/* Top image — 55% height */}
            <div
              className="relative overflow-hidden"
              style={{ height: "55%" , minHeight: "260px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&h=400&fit=crop&crop=face"
                alt="Tratamiento de Botox — resultados naturales"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
                style={{
                  transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                  transformOrigin: "center center",
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-end flex-1 px-8 py-10 md:px-10 md:py-12">
              <p
                style={{
                  fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "#1c1c1c",
                  opacity: 0.45,
                  fontWeight: 500,
                }}
                className="uppercase mb-4"
              >
                FACIALES · INYECTABLES
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 300,
                  color: "#1c1c1c",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.95,
                  fontSize: "clamp(3.2rem, 5vw, 5.5rem)",
                }}
                className="mb-5"
              >
                Botox
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
                  color: "rgba(28,28,28,0.6)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  maxWidth: "40ch",
                }}
                className="mb-7"
              >
                Suaviza líneas de expresión preservando tu naturalidad. Resultado
                discreto y duradero desde la primera sesión.
              </p>

              <Link
                href="/servicios/botox"
                style={{
                  fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
                  color: "#1c1c1c",
                  fontSize: "0.875rem",
                  letterSpacing: "0.06em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "opacity 0.2s",
                }}
                className="hover:opacity-50 group/blink"
              >
                Ver tratamiento
                <span
                  style={{ transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                  className="group-hover/blink:translate-x-1 inline-block"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ── Right column: Implante Capilar — 42% ── */}
          <div
            data-anim="up"
            className="relative overflow-hidden flex flex-col group"
            style={{
              backgroundColor: "#1c1c1c",
              flex: "0 0 42%",
            }}
          >
            {/* Top image — 40% height */}
            <div
              className="relative overflow-hidden"
              style={{ height: "40%", minHeight: "180px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=300&fit=crop"
                alt="Implante Capilar — técnica FUE"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
                style={{
                  transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                  filter: "brightness(0.75)",
                }}
              />
              {/* Bottom-edge fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, #1c1c1c, transparent)",
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-end flex-1 px-8 py-10 md:px-10 md:py-12">
              <p
                style={{
                  fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "#b89a6a",
                  fontWeight: 500,
                }}
                className="uppercase mb-4"
              >
                CAPILARES
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 300,
                  color: "#faf8f5",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.0,
                  fontSize: "clamp(2.4rem, 3.8vw, 3.8rem)",
                }}
                className="mb-5"
              >
                Implante{" "}
                <br />
                Capilar
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
                  color: "rgba(250,248,245,0.45)",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  maxWidth: "32ch",
                }}
                className="mb-8"
              >
                Recupera densidad y línea de nacimiento con técnica FUE. Resultados
                permanentes.
              </p>

              <a
                href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20implante%20capilar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
                  color: "#b89a6a",
                  fontSize: "0.875rem",
                  letterSpacing: "0.06em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "opacity 0.2s",
                }}
                className="hover:opacity-70 group/clink"
              >
                Solicitar valoración
                <span
                  style={{ transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                  className="group-hover/clink:translate-x-1 inline-block"
                >
                  →
                </span>
              </a>
            </div>
          </div>

        </div>
        {/* END Block B */}

        {/* ════════════════════════════════════════════
            BLOCK C — Three new treatments
════════════════════════════════════════════ */}
<div
  className="flex flex-col md:flex-row gap-4 mt-4"
>
  {/* Limpiezas Faciales */}
  <div
    data-anim="up"
    className="relative overflow-hidden flex flex-col group"
    style={{ backgroundColor: "#f4ede6", flex: "1" }}
  >
    <div className="relative overflow-hidden" style={{ height: "220px" }}>
      <img
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=300&fit=crop&crop=center"
        alt="Limpiezas Faciales — protocolo profundo"
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
      />
    </div>
    <div className="flex flex-col justify-end flex-1 px-7 py-8">
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#1c1c1c", opacity: 0.45, fontWeight: 500, textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>
        FACIALES
      </p>
      <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 300, color: "#1c1c1c", letterSpacing: "-0.02em", lineHeight: 1.05, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", marginBottom: "0.75rem" }}>
        Limpiezas<br />Faciales
      </h3>
      <p style={{ fontFamily: "var(--font-body)", color: "rgba(28,28,28,0.55)", fontSize: "0.875rem", lineHeight: 1.65, maxWidth: "30ch", marginBottom: "1.25rem" }}>
        Limpieza profunda, extracción y nutrición personalizada para una piel sana, luminosa y equilibrada.
      </p>
      <a href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20limpiezas%20faciales" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", color: "#1c1c1c", fontSize: "0.875rem", letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: "0.4rem", transition: "opacity 0.2s" }} className="hover:opacity-50 group/fl">
        Consultar <span style={{ transition: "transform 0.3s" }} className="group-hover/fl:translate-x-1 inline-block">→</span>
      </a>
    </div>
  </div>

  {/* Recuperación Capilar */}
  <div
    data-anim="up"
    className="relative overflow-hidden flex flex-col group"
    style={{ backgroundColor: "#1c1c1c", flex: "1" }}
  >
    <div className="relative overflow-hidden" style={{ height: "220px" }}>
      <img
        src="https://images.unsplash.com/photo-1612908773990-5ac37a0e65c4?w=500&h=300&fit=crop&crop=center"
        alt="Recuperación Capilar — PRP y exosomas"
        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7)", transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #1c1c1c 0%, transparent 60%)" }} />
    </div>
    <div className="flex flex-col justify-end flex-1 px-7 py-8">
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#b89a6a", fontWeight: 500, textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>
        CAPILARES
      </p>
      <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 300, color: "#faf8f5", letterSpacing: "-0.02em", lineHeight: 1.05, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", marginBottom: "0.75rem" }}>
        Recuperación<br />Capilar
      </h3>
      <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,248,245,0.45)", fontSize: "0.875rem", lineHeight: 1.65, maxWidth: "30ch", marginBottom: "1.25rem" }}>
        PRP, exosomas y mesoterapia capilar para frenar la caída y estimular el crecimiento natural.
      </p>
      <a href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20recuperación%20capilar" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", color: "#b89a6a", fontSize: "0.875rem", letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: "0.4rem", transition: "opacity 0.2s" }} className="hover:opacity-70 group/rc">
        Solicitar valoración <span style={{ transition: "transform 0.3s" }} className="group-hover/rc:translate-x-1 inline-block">→</span>
      </a>
    </div>
  </div>

  {/* Descenso de Peso */}
  <div
    data-anim="up"
    className="relative overflow-hidden flex flex-col group"
    style={{ backgroundColor: "#b89a6a", flex: "1" }}
  >
    <div className="relative overflow-hidden" style={{ height: "220px" }}>
      <img
        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop&crop=center"
        alt="Descenso de Peso — tratamiento médico"
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35, transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
      />
    </div>
    <div className="flex flex-col justify-end flex-1 px-7 py-8">
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(28,28,28,0.55)", fontWeight: 500, textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>
        CORPORALES
      </p>
      <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 300, color: "#1c1c1c", letterSpacing: "-0.02em", lineHeight: 1.05, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", marginBottom: "0.75rem" }}>
        Descenso<br />de Peso
      </h3>
      <p style={{ fontFamily: "var(--font-body)", color: "rgba(28,28,28,0.65)", fontSize: "0.875rem", lineHeight: 1.65, maxWidth: "30ch", marginBottom: "1.25rem" }}>
        Protocolo médico supervisado, personalizado y seguro para reducción de peso con resultados sostenibles.
      </p>
      <a href="https://wa.me/573002440656?text=Hola%2C%20me%20interesa%20información%20sobre%20descenso%20de%20peso" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", color: "#1c1c1c", fontSize: "0.875rem", letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: "0.4rem", transition: "opacity 0.2s" }} className="hover:opacity-50 group/dp">
        Ver protocolo <span style={{ transition: "transform 0.3s" }} className="group-hover/dp:translate-x-1 inline-block">→</span>
      </a>
    </div>
  </div>
</div>
{/* END Block C */}

      </div>
    </section>
  );
}
