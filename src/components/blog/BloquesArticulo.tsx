import Image from "next/image";
import Link from "next/link";
import type { BlogPost, Ingrediente, Pregunta } from "@/lib/blog/tipos";

// Bloques de los artículos del blog que construyen la marca personal de la Dra. Daniela Díez:
// consejo destacado, ingredientes recomendados (sin marcas), preguntas frecuentes, firma y relacionados.

const DORADO = "#b89a6a";
const CREMA = "#faf8f5";

/** «Consejo de la Dra.»: recuadro destacado con su firma. */
export function Consejo({ title, text }: { title?: string; text: string }) {
  return (
    <aside
      style={{
        margin: "2.5rem 0",
        padding: "1.75rem 2rem",
        backgroundColor: "rgba(184,154,106,0.08)",
        border: "1px solid rgba(184,154,106,0.28)",
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: "1.25rem",
        alignItems: "start",
      }}
    >
      <Image
        src="/images/dra-daniela.jpg"
        alt=""
        width={48}
        height={48}
        style={{ borderRadius: "9999px", objectFit: "cover", objectPosition: "50% 22%", width: 48, height: 48 }}
      />
      <div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", letterSpacing: "0.04em", color: DORADO, marginBottom: "0.5rem", fontWeight: 600 }}>
          {title ?? "Consejo de la Dra."}
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(250,248,245,0.86)", lineHeight: 1.8 }}>{text}</p>
      </div>
    </aside>
  );
}

/** Ingredientes o tipos de producto que recomienda, sin marcas. */
export function Ingredientes({ items }: { items: Ingrediente[] }) {
  return (
    <section style={{ margin: "3rem 0" }} aria-label="Ingredientes que recomiendo">
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", letterSpacing: "0.04em", color: DORADO, fontWeight: 600, marginBottom: "1rem" }}>
        Lo que recomiendo buscar en tus productos
      </p>
      {/* Cada tarjeta lleva su propio borde: con un número impar de ingredientes no queda una celda vacía visible */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
        {items.map((i) => (
          <div key={i.nombre} style={{ backgroundColor: "#202020", padding: "1.4rem 1.5rem", border: "1px solid rgba(184,154,106,0.18)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: CREMA, marginBottom: "0.5rem" }}>{i.nombre}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(250,248,245,0.75)", lineHeight: 1.65, marginBottom: "0.6rem" }}>{i.para}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#a39f98", lineHeight: 1.6 }}>
              <span style={{ color: DORADO }}>Cómo usarlo: </span>
              {i.como}
            </p>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#a39f98", marginTop: "0.9rem", lineHeight: 1.6 }}>
        Son orientaciones generales: la concentración y la combinación adecuadas para tu piel las definimos en valoración.
      </p>
    </section>
  );
}

/** Preguntas frecuentes con <details> nativo (accesible y sin JS). */
export function PreguntasFrecuentes({ items }: { items: Pregunta[] }) {
  return (
    <section style={{ margin: "3rem 0" }} aria-label="Preguntas frecuentes">
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: 600, color: CREMA, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
        Lo que más me preguntan
      </h2>
      <div style={{ borderTop: "1px solid rgba(184,154,106,0.18)" }}>
        {items.map((p) => (
          <details key={p.q} className="faq-blog" style={{ borderBottom: "1px solid rgba(184,154,106,0.18)", padding: "1.1rem 0" }}>
            <summary style={{ cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 500, color: CREMA, lineHeight: 1.5 }}>{p.q}</summary>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "rgba(250,248,245,0.72)", lineHeight: 1.8, marginTop: "0.75rem" }}>{p.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Firma corta bajo el título. */
export function Firma() {
  return (
    <Link href="/nosotros" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
      <Image
        src="/images/dra-daniela.jpg"
        alt=""
        width={36}
        height={36}
        style={{ borderRadius: "9999px", objectFit: "cover", objectPosition: "50% 22%", width: 36, height: 36, border: "1px solid rgba(184,154,106,0.5)" }}
      />
      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(250,248,245,0.85)" }}>
        Por <strong style={{ fontWeight: 600, color: CREMA }}>Dra. Daniela Díez</strong>
        <span style={{ color: "rgba(250,248,245,0.6)" }}> · Médica estética</span>
      </span>
    </Link>
  );
}

/** Caja de autora al final del artículo. */
export function SobreLaAutora() {
  return (
    <section
      aria-label="Sobre la autora"
      style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "minmax(0, 120px) 1fr", gap: "1.75rem", alignItems: "center", padding: "2rem", backgroundColor: "#202020", border: "1px solid rgba(184,154,106,0.18)" }}
    >
      <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden" }}>
        <Image src="/images/dra-daniela.jpg" alt="Dra. Daniela Díez" fill sizes="120px" style={{ objectFit: "cover", objectPosition: "50% 18%" }} />
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", letterSpacing: "0.04em", color: DORADO, fontWeight: 600, marginBottom: "0.4rem" }}>Sobre la autora</p>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 600, color: CREMA, marginBottom: "0.6rem" }}>Dra. Daniela Díez</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "rgba(250,248,245,0.75)", lineHeight: 1.75 }}>
          Médica con habilitación en Argentina y Colombia, con formación en medicina estética en la Universidad de Buenos Aires.
          Fundé DRA.D10 en Medellín para ofrecer una medicina estética cercana, honesta y con resultados naturales. Aquí comparto lo
          que explico todos los días en consulta.
        </p>
        <Link href="/nosotros" style={{ display: "inline-block", marginTop: "0.9rem", fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: DORADO, textDecoration: "underline", textUnderlineOffset: "4px" }}>
          Conoce mi historia y formación
        </Link>
      </div>
    </section>
  );
}

/** Artículos relacionados. */
export function Relacionados({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;
  return (
    <section style={{ marginTop: "4rem" }} aria-label="Sigue leyendo">
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: 600, color: CREMA, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
        Sigue leyendo
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none", display: "block", backgroundColor: "#202020", border: "1px solid rgba(184,154,106,0.12)" }}>
            <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
              <Image src={p.coverImage} alt={p.coverAlt} fill sizes="(max-width: 768px) 100vw, 260px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "1rem 1.1rem 1.25rem" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: DORADO, marginBottom: "0.4rem" }}>{p.category}</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.02rem", fontWeight: 600, color: CREMA, lineHeight: 1.35 }}>{p.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
