import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { tratamientos } from "@/lib/tratamientos";
import { mediosDe } from "@/lib/tratamientos/medios";
import type { CategoriaTratamiento } from "@/lib/tratamientos/types";

export const metadata: Metadata = {
  title: "Tratamientos y precios | Clínica Quantum — Medellín",
  description:
    "Todos los tratamientos de Clínica Quantum en El Poblado, Medellín: toxina botulínica, ácido hialurónico, bioestimuladores, piel, capilar, corporal y más, con precios de referencia.",
  alternates: { canonical: "https://drad10.com/servicios" },
  openGraph: {
    title: "Tratamientos y precios | Clínica Quantum",
    description: "Medicina estética con criterio médico en El Poblado, Medellín. Conoce cada tratamiento y su precio de referencia.",
    url: "https://drad10.com/servicios",
    siteName: "DRA.D10 | Clínica Quantum",
    locale: "es_CO",
    type: "website",
  },
};

const GOLD = "#b89a6a";
const CREAM = "#faf8f5";
const SAND = "#f4ede6";
const DARK = "#141414";
const INK = "#1c1c1c";
const MUTED = "#6b6760";

const SECCIONES: { id: string; titulo: string; intro: string; categorias: CategoriaTratamiento[] }[] = [
  { id: "faciales", titulo: "Rostro y antienvejecimiento", intro: "Trabajamos el rostro como un todo, buscando equilibrio, proporción y naturalidad. Todo parte de un diagnóstico con analizador facial.", categorias: ["faciales"] },
  { id: "corporales", titulo: "Contorno corporal y bienestar", intro: "Programas y tecnología para moldear la figura, bajar medidas y firmar la piel, siempre con seguimiento profesional.", categorias: ["corporales", "bienestar"] },
  { id: "capilares", titulo: "Medicina capilar", intro: "Empezamos con un diagnóstico usando el analizador capilar y armamos un plan a la medida, para hombres y mujeres.", categorias: ["capilares"] },
  { id: "zona-intima", titulo: "Salud íntima", intro: "Tratamientos discretos y con acompañamiento médico, pensados para tu comodidad y tu seguridad.", categorias: ["zona-intima"] },
  { id: "quirurgicos", titulo: "Armonización quirúrgica menor", intro: "Procedimientos para afinar detalles del rostro buscando una armonización natural.", categorias: ["quirurgicos"] },
];

const ORDEN_GRUPOS = [
  "Toxina botulínica", "Ácido hialurónico", "Bioestimuladores", "Hilos", "Aparatología INDIBA",
  "Piel y manchas", "Enzimas y cicatrices", "Cosmetología", "Contorno corporal", "Descenso de peso",
  "Post quirúrgico", "Bienestar",
];

type Tarjeta = { slug: string; nombre: string; grupo: string; desde: number | null; hero?: string; categoria: CategoriaTratamiento };

const formatCOP = (n: number) => `$${n.toLocaleString("es-CO")}`;

export default function ServiciosPage() {
  const tarjetas: Tarjeta[] = [
    ...tratamientos.map((t) => ({
      slug: t.slug,
      nombre: t.nombre,
      grupo: t.grupo ?? "Otros",
      desde: t.precio.desde,
      hero: mediosDe(t)?.hero,
      categoria: t.categoria,
    })),
  ];
  const pos = (g: string) => ORDEN_GRUPOS.indexOf(g) + 1 || 99;

  return (
    <>
      <NavBar />

      <section style={{ backgroundColor: DARK, padding: "clamp(72px, 11vw, 136px) 0 clamp(48px, 7vw, 88px)" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(20px, 6vw, 80px)" }}>
          <p data-anim="up" style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", letterSpacing: "0.01em", color: GOLD, marginBottom: "1.25rem" }}>
            {tarjetas.length} tratamientos · Clínica Quantum
          </p>
          <h1 data-anim="mask" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.5rem, 6vw, 4.6rem)", color: CREAM, letterSpacing: "-0.03em", lineHeight: 1.08, maxWidth: "15ch", marginBottom: "1.5rem" }}>
            Tratamientos con <em style={{ color: "inherit" }}>criterio médico</em>
          </h1>
          <p data-anim="up" style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "rgba(250,248,245,0.62)", maxWidth: "560px", marginBottom: "2.5rem" }}>
            Cada plan lo diseña y ejecuta personal médico, no un catálogo de promociones. Explora cada tratamiento, sus precios de
            referencia y cómo es el proceso.
          </p>
          <nav data-anim="up" aria-label="Categorías" className="flex flex-wrap" style={{ gap: "0.5rem" }}>
            {SECCIONES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:border-[#b89a6a] hover:text-[#b89a6a] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", letterSpacing: "0.01em", color: "rgba(250,248,245,0.85)", border: "1px solid rgba(184,154,106,0.3)", padding: "12px 16px", display: "inline-block" }}
              >
                {s.titulo}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {SECCIONES.map((sec, i) => {
        const propias = tarjetas.filter((t) => sec.categorias.includes(t.categoria));
        const grupos = [...new Set(propias.map((t) => t.grupo))].sort((a, b) => pos(a) - pos(b));
        return (
          <section key={sec.id} id={sec.id} style={{ backgroundColor: i % 2 === 0 ? CREAM : SAND, padding: "clamp(64px, 9vw, 112px) 0", scrollMarginTop: "80px" }}>
            <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(20px, 6vw, 80px)" }}>
              <div style={{ maxWidth: "640px", marginBottom: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                <h2 data-anim="mask" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3rem)", color: INK, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
                  {sec.titulo}
                </h2>
                <p data-anim="up" style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.85, color: MUTED }}>{sec.intro}</p>
              </div>

              {grupos.map((g) => (
                <div key={g} style={{ marginBottom: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                  {grupos.length > 1 && (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", letterSpacing: "0.01em", color: GOLD, paddingBottom: "0.75rem", borderBottom: "1px solid rgba(184,154,106,0.25)", marginBottom: "1.5rem" }}>
                      {g}
                    </p>
                  )}
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ listStyle: "none", padding: 0, margin: 0, gap: "clamp(16px, 2.5vw, 28px)" }}>
                    {propias
                      .filter((t) => t.grupo === g)
                      .map((t) => (
                        <li key={t.slug}>
                          <Link href={`/servicios/${t.slug}`} className="group block">
                            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5", backgroundColor: "#e9e1d8", marginBottom: "0.8rem" }}>
                              {t.hero && (
                                <Image
                                  src={t.hero}
                                  alt={t.nombre}
                                  fill
                                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                              )}
                            </div>
                            <p className="group-hover:text-[#b89a6a] transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1rem, 1.6vw, 1.2rem)", color: INK, lineHeight: 1.25 }}>
                              {t.nombre}
                            </p>
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, marginTop: "0.25rem" }}>
                              {t.desde ? (
                                <>
                                  <span style={{ color: "#8a6a3c", fontWeight: 700 }}>Desde</span> {formatCOP(t.desde)}
                                </>
                              ) : "Precio a valoración"}
                            </p>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
