import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | DRA.D10 — Medicina Estética Medellín",
  description:
    "Artículos sobre medicina estética, tratamientos faciales, capilares y corporales. Consejos de la Dra. Daniela Díez para cuidar tu piel y bienestar.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <NavBar />

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
              fontSize: "0.6rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(184,154,106,0.7)",
              marginBottom: "1.25rem",
            }}
          >
            Conocimiento · Bienestar
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Blog{" "}
            <em style={{ color: "#b89a6a" }}>DRA.D10</em>
          </h1>
        </div>
      </div>

      <div style={{ backgroundColor: "#1c1c1c", minHeight: "60vh" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* ── Featured post ── */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
              <div
                className="group mb-16"
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
                  style={{ height: "420px", overflow: "hidden" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
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
                        fontSize: "0.58rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
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
                        fontSize: "0.62rem",
                        color: "#888580",
                      }}
                    >
                      {featured.readTime} lectura
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                      fontWeight: 300,
                      color: "#faf8f5",
                      lineHeight: 1.3,
                      marginBottom: "1.25rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {featured.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
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
                        fontSize: "0.65rem",
                        color: "#888580",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {featured.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
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

          {/* ── Grid of remaining posts ── */}
          {rest.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      border: "1px solid rgba(184,154,106,0.12)",
                      backgroundColor: "#242424",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <div className="img-zoom" style={{ height: "220px", overflow: "hidden" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.55rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#b89a6a",
                          display: "block",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {post.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display), Georgia, serif",
                          fontSize: "1.05rem",
                          fontWeight: 300,
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
                          fontSize: "0.78rem",
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
          )}

          {/* ── Empty state if only 1 post ── */}
          {rest.length === 0 && (
            <div
              style={{
                borderTop: "1px solid rgba(184,154,106,0.1)",
                paddingTop: "3rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "#888580",
                  letterSpacing: "0.1em",
                }}
              >
                Próximos artículos — muy pronto ✦
              </p>
            </div>
          )}

        </div>
      </div>

      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
