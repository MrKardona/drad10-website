import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";

/** Últimos 4 artículos del blog en el home — SEO interno + frescura. */
export function BlogTeaser() {
  const posts = blogPosts.slice(0, 4);

  return (
    <section style={{ backgroundColor: "#faf8f5", padding: "clamp(56px, 9vw, 100px) 0" }}>
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 clamp(24px, 6vw, 80px)",
        }}
      >
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          style={{ marginBottom: "2.75rem" }}
          data-anim="up"
        >
          <div>
            <p
              className="section-label"
              style={{ marginBottom: "0.85rem", color: "rgba(184,154,106,0.9)" }}
            >
              SALUD Y ESTÉTICA
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                color: "#1c1c1c",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Nuestro <em style={{ color: "#b89a6a", fontStyle: "italic" }}>blog</em>
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b89a6a",
              textDecoration: "none",
              paddingBottom: "4px",
              borderBottom: "1px solid rgba(184,154,106,0.4)",
              alignSelf: "flex-start",
            }}
          >
            VER TODOS LOS ARTÍCULOS →
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
          data-anim="up"
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-teaser-card"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  marginBottom: "1rem",
                }}
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#b89a6a",
                  marginBottom: "0.5rem",
                }}
              >
                {post.date}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 400,
                  color: "#1c1c1c",
                  lineHeight: 1.35,
                  marginBottom: "0.5rem",
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "#888580",
                  lineHeight: 1.65,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
