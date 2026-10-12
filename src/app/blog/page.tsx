import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { blogPosts, PILARES, type BlogPost } from "@/lib/blog";
import { Firma } from "@/components/blog/BloquesArticulo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | DRA.D10 — Medicina Estética Medellín",
  description:
    "Artículos de la Dra. Daniela Díez sobre medicina estética, cuidado de la piel, cabello y bienestar: tratamientos sin mitos, consejos y su forma de entender la belleza natural.",
  alternates: { canonical: "/blog" },
};

/** Id de ancla para cada pilar (p. ej. «Cuidado de la piel» → «cuidado-de-la-piel»). */
const anclaPilar = (p: string) =>
  p
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  // El resto se agrupa por pilar para que el blog se lea como una colección coherente.
  const grupos = PILARES.map((p) => ({ pilar: p, posts: rest.filter((x) => x.category === p) })).filter((g) => g.posts.length);

  return (
    <>
      <NavBar />
      <main>

      {/* ── Hero ── */}
      <div
        style={{
          backgroundColor: "#1c1c1c",
          paddingTop: "120px",
          paddingBottom: "72px",
          borderBottom: "1px solid rgba(184,154,106,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              letterSpacing: "0.01em",
              color: "rgba(184,154,106,0.7)",
              marginBottom: "1.25rem",
            }}
          >
            Conocimiento · Bienestar
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 600,
              color: "#faf8f5",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Blog{" "}
            <em style={{ color: "inherit" }}>DRA.D10</em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "rgba(250,248,245,0.72)",
              lineHeight: 1.75,
              maxWidth: "620px",
              marginTop: "1.25rem",
            }}
          >
            Lo que explico todos los días en consulta, escrito para ti: tratamientos sin mitos, cómo cuidar tu piel en casa y mi
            forma de entender una medicina estética honesta y natural.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Firma />
          </div>
          <nav aria-label="Temas del blog" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "2.25rem" }}>
            {grupos.map((g) => (
              <a
                key={g.pilar}
                href={`#${anclaPilar(g.pilar)}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "#faf8f5",
                  border: "1px solid rgba(184,154,106,0.4)",
                  padding: "8px 14px",
                  textDecoration: "none",
                }}
              >
                {g.pilar}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div style={{ backgroundColor: "#1c1c1c", minHeight: "60vh" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* ── Featured post ── */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
              <div
                className="group mb-16 blog-featured"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0",
                  border: "1px solid rgba(184,154,106,0.15)",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <div
                  className="img-zoom"
                  style={{ position: "relative", height: "420px", overflow: "hidden" }}
                >
                  <Image
                    src={featured.coverImage}
                    alt={featured.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    style={{ objectFit: "cover",
                      transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    backgroundColor: "#242424",
                    padding: "clamp(2rem, 4vw, 3.5rem)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "1.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        letterSpacing: "0.01em",
                        color: "#b89a6a",
                        border: "1px solid rgba(184,154,106,0.35)",
                        padding: "4px 10px",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        color: "#a39f98",
                      }}
                    >
                      {featured.readTime} lectura
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                      fontWeight: 600,
                      color: "#faf8f5",
                      lineHeight: 1.3,
                      marginBottom: "1.25rem",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {featured.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "rgba(250,248,245,0.6)",
                      lineHeight: 1.8,
                      marginBottom: "2rem",
                    }}
                  >
                    {featured.excerpt}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        color: "#a39f98",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {featured.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        letterSpacing: "0.01em",
                        color: "#b89a6a",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "gap 0.25s",
                      }}
                    >
                      Leer artículo →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* ── Resto de artículos, por pilar ── */}
          {grupos.map((g) => (
            <section key={g.pilar} id={anclaPilar(g.pilar)} style={{ marginBottom: "4rem", scrollMarginTop: "120px" }} aria-labelledby={`t-${anclaPilar(g.pilar)}`}>
              <h2
                id={`t-${anclaPilar(g.pilar)}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                  fontWeight: 600,
                  color: "#faf8f5",
                  letterSpacing: "-0.03em",
                  paddingBottom: "0.9rem",
                  marginBottom: "1.75rem",
                  borderBottom: "1px solid rgba(184,154,106,0.18)",
                }}
              >
                {g.pilar}
              </h2>
              <Tarjetas posts={g.posts} />
            </section>
          ))}

        </div>
      </div>
      </main>

      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}

function Tarjetas({ posts }: { posts: BlogPost[] }) {
  return (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      border: "1px solid rgba(184,154,106,0.12)",
                      backgroundColor: "#242424",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <div className="img-zoom" style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8125rem",
                          letterSpacing: "0.01em",
                          color: "#b89a6a",
                          display: "block",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {post.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "#faf8f5",
                          lineHeight: 1.35,
                          marginBottom: "0.75rem",
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          color: "rgba(250,248,245,0.5)",
                          lineHeight: 1.7,
                        }}
                      >
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
  );
}
