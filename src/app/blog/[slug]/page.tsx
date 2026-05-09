import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BlogRating } from "@/components/blog/BlogRating";
import { BlogComments } from "@/components/blog/BlogComments";
import { getBlogPost, getAllSlugs, type BlogSection } from "@/lib/blog-posts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog DRA.D10`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
            fontWeight: 300,
            color: "#faf8f5",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1.25rem",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid rgba(184,154,106,0.15)",
          }}
        >
          {section.text}
        </h2>
      );

    case "paragraph":
      return (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "rgba(250,248,245,0.72)",
            lineHeight: 1.9,
            marginBottom: "1.25rem",
          }}
        >
          {section.text}
        </p>
      );

    case "image":
      return (
        <figure style={{ margin: "2.5rem 0" }}>
          <div
            style={{
              position: "relative",
              height: "420px",
              overflow: "hidden",
              border: "1px solid rgba(184,154,106,0.12)",
            }}
          >
            <Image
              src={section.src ?? ""}
              alt={section.alt ?? ""}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          {section.caption && (
            <figcaption
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                color: "#888580",
                textAlign: "center",
                marginTop: "0.75rem",
                letterSpacing: "0.06em",
                fontStyle: "italic",
              }}
            >
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote
          style={{
            margin: "2.5rem 0",
            padding: "2rem 2.5rem",
            borderLeft: "3px solid #b89a6a",
            backgroundColor: "rgba(184,154,106,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              fontWeight: 300,
              color: "rgba(250,248,245,0.88)",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            &ldquo;{section.text}&rdquo;
          </p>
        </blockquote>
      );

    case "list":
      return (
        <ul
          style={{
            margin: "1.25rem 0 1.5rem",
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {section.items?.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.92rem",
                color: "rgba(250,248,245,0.7)",
                lineHeight: 1.7,
                paddingLeft: "1.25rem",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "0.5rem",
                  width: "5px",
                  height: "1px",
                  backgroundColor: "#b89a6a",
                  display: "inline-block",
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <NavBar />

      {/* ── Cover image ── */}
      <div style={{ position: "relative", height: "65vh", overflow: "hidden" }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        {/* Title overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 6rem)",
            maxWidth: "860px",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "1.25rem" }}>
            <Link
              href="/blog"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(250,248,245,0.6)",
                textDecoration: "none",
              }}
            >
              ← Blog
            </Link>
            <span style={{ color: "rgba(184,154,106,0.5)", fontSize: "0.4rem" }}>✦</span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#b89a6a",
                border: "1px solid rgba(184,154,106,0.4)",
                padding: "3px 10px",
              }}
            >
              {post.category}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                color: "rgba(250,248,245,0.5)",
              }}
            >
              {post.date}
            </span>
            <span style={{ color: "rgba(184,154,106,0.4)", fontSize: "0.4rem" }}>✦</span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                color: "rgba(250,248,245,0.5)",
              }}
            >
              {post.readTime} de lectura
            </span>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div style={{ backgroundColor: "#1c1c1c" }}>
        <div
          className="max-w-3xl mx-auto px-6 py-16"
          style={{ borderTop: "1px solid rgba(184,154,106,0.12)" }}
        >
          {/* Excerpt intro */}
          <p
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              fontWeight: 300,
              color: "rgba(250,248,245,0.8)",
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: "2.5rem",
              paddingBottom: "2.5rem",
              borderBottom: "1px solid rgba(184,154,106,0.12)",
            }}
          >
            {post.excerpt}
          </p>

          {/* Sections */}
          {post.content.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}

          {/* ── Rating ── */}
          <BlogRating slug={post.slug} />

          {/* ── Comments ── */}
          <BlogComments slug={post.slug} />

          {/* ── CTA final ── */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2.5rem",
              border: "1px solid rgba(184,154,106,0.2)",
              backgroundColor: "rgba(184,154,106,0.05)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#b89a6a",
                marginBottom: "0.75rem",
              }}
            >
              ¿Lista para tu tratamiento?
            </p>
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.4rem",
                fontWeight: 300,
                color: "#faf8f5",
                marginBottom: "1.75rem",
                lineHeight: 1.4,
              }}
            >
              Agenda tu valoración gratuita con la Dra. Daniela Díez
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/573002440656"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.65rem" }}
              >
                Agendar por WhatsApp
              </a>
              <Link href="/blog" className="btn-outline-cream" style={{ fontSize: "0.65rem" }}>
                Ver más artículos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
