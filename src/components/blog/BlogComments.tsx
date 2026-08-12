"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: string;
  name: string;
  initials: string;
  text: string;
  rating: number;
  created_at: string;
}

function MiniStars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i <= rating ? "#b89a6a" : "rgba(184,154,106,0.2)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });
}

export function BlogComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function loadComments() {
    const res = await fetch(`/api/comments?slug=${slug}`);
    const data = await res.json();
    setComments(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/comments?slug=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setComments(Array.isArray(data) ? data : []);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) { setError("Por favor ingresa tu nombre."); return; }
    if (!text.trim()) { setError("Por favor escribe tu comentario."); return; }
    if (rating === 0) { setError("Por favor selecciona una valoración."); return; }
    setError("");
    setSending(true);

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, name, text, rating }),
    });

    if (res.ok) {
      setName(""); setText(""); setRating(0);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
      await loadComments();
    } else {
      setError("Hubo un error. Intenta de nuevo.");
    }
    setSending(false);
  }

  const labelMap = ["", "Malo", "Regular", "Bueno", "Muy bueno", "Excelente"];

  return (
    <div style={{ marginTop: "4rem" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "2.5rem", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(184,154,106,0.15)" }}>
        <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.4rem", fontWeight: 300, color: "#faf8f5", margin: 0 }}>
          Comentarios
        </h3>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", color: "#b89a6a", border: "1px solid rgba(184,154,106,0.3)", padding: "3px 10px", letterSpacing: "0.1em" }}>
          {loading ? "—" : comments.length}
        </span>
      </div>

      {/* Comment list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
        {loading ? (
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#888580", textAlign: "center", padding: "2rem 0" }}>
            Cargando comentarios...
          </p>
        ) : comments.length === 0 ? (
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#888580", textAlign: "center", padding: "2rem 0" }}>
            Sé el primero en comentar este artículo ✦
          </p>
        ) : comments.map((c) => (
          <div key={c.id} style={{ display: "flex", gap: "16px", padding: "1.5rem", backgroundColor: "#242424", border: "1px solid rgba(184,154,106,0.1)" }}>
            {/* Avatar */}
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "rgba(184,154,106,0.15)", border: "1px solid rgba(184,154,106,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, color: "#d4b896", letterSpacing: "0.04em" }}>
                {c.initials}
              </span>
            </div>
            {/* Content */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px", flexWrap: "wrap", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: "#faf8f5" }}>
                    {c.name}
                  </span>
                  <MiniStars rating={c.rating} />
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", color: "#888580", letterSpacing: "0.06em" }}>
                  {formatDate(c.created_at)}
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(250,248,245,0.65)", lineHeight: 1.75, margin: 0 }}>
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <div style={{ padding: "2.5rem", border: "1px solid rgba(184,154,106,0.18)", backgroundColor: "#1e1e1e" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#b89a6a", marginBottom: "0.5rem" }}>
          Deja tu comentario
        </p>
        <p style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.15rem", fontWeight: 300, color: "#faf8f5", marginBottom: "2rem" }}>
          ¿Tienes alguna pregunta o comentario sobre este artículo?
        </p>

        {success ? (
          <div style={{ padding: "1.25rem 1.5rem", backgroundColor: "rgba(184,154,106,0.12)", border: "1px solid rgba(184,154,106,0.3)", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#b89a6a", fontSize: "1.2rem" }}>✓</span>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(250,248,245,0.8)", margin: 0 }}>
              ¡Gracias por tu comentario! Ya aparece en la lista.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Name */}
            <div>
              <label style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888580", display: "block", marginBottom: "8px" }}>
                Nombre *
              </label>
              <input
                type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                style={{ width: "100%", backgroundColor: "#2a2a2a", border: "1px solid rgba(184,154,106,0.2)", color: "#faf8f5", fontFamily: "var(--font-body)", fontSize: "0.875rem", padding: "12px 16px", outline: "none" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(184,154,106,0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(184,154,106,0.2)")}
              />
            </div>

            {/* Rating */}
            <div>
              <label style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888580", display: "block", marginBottom: "10px" }}>
                Tu valoración *
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {[1, 2, 3, 4, 5].map((star) => {
                  const filled = star <= (hovered || rating);
                  return (
                    <button key={star} type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      style={{ background: "none", border: "none", padding: "2px", cursor: "pointer", transition: "transform 0.15s", transform: hovered >= star ? "scale(1.15)" : "scale(1)" }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24"
                        fill={filled ? "#b89a6a" : "rgba(184,154,106,0.15)"}
                        stroke={filled ? "#b89a6a" : "rgba(184,154,106,0.35)"}
                        strokeWidth="1" style={{ transition: "fill 0.2s" }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  );
                })}
                {rating > 0 && (
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "#b89a6a", marginLeft: "8px" }}>
                    {labelMap[rating]}
                  </span>
                )}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888580", display: "block", marginBottom: "8px" }}>
                Comentario *
              </label>
              <textarea
                value={text} onChange={(e) => setText(e.target.value)}
                placeholder="Escribe tu pregunta o comentario..."
                rows={4}
                style={{ width: "100%", backgroundColor: "#2a2a2a", border: "1px solid rgba(184,154,106,0.2)", color: "#faf8f5", fontFamily: "var(--font-body)", fontSize: "0.875rem", padding: "12px 16px", outline: "none", resize: "vertical", lineHeight: 1.7 }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(184,154,106,0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(184,154,106,0.2)")}
              />
            </div>

            {error && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#e07070", margin: 0 }}>
                {error}
              </p>
            )}

            <div>
              <button type="submit" className="btn-gold" style={{ fontSize: "0.65rem", opacity: sending ? 0.7 : 1 }} disabled={sending}>
                {sending ? "Publicando..." : "Publicar comentario"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
