"use client";

import { useState, useEffect } from "react";

export function BlogRating({ slug }: { slug: string }) {
  const [userRating, setUserRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [average, setAverage] = useState("0.0");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const storageKey = `drad10_rated_${slug}`;

  useEffect(() => {
    // Check if user already voted
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setUserRating(parseInt(saved));
      setSubmitted(true);
    }
    // Fetch stats from API
    fetch(`/api/ratings?slug=${slug}`)
      .then((r) => r.json())
      .then((d) => {
        setAverage(d.average ?? "0.0");
        setCount(d.count ?? 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug, storageKey]);

  async function handleRate(star: number) {
    if (submitted) return;
    setUserRating(star);
    setSubmitted(true);
    localStorage.setItem(storageKey, String(star));

    await fetch("/api/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, rating: star }),
    });

    // Re-fetch updated stats
    const res = await fetch(`/api/ratings?slug=${slug}`);
    const d = await res.json();
    setAverage(d.average ?? "0.0");
    setCount(d.count ?? 0);
  }

  const pct = parseFloat(average) / 5 * 100;

  return (
    <div
      style={{
        margin: "3.5rem 0",
        padding: "2.5rem",
        border: "1px solid rgba(184,154,106,0.2)",
        backgroundColor: "#242424",
        textAlign: "center",
      }}
    >
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#b89a6a", marginBottom: "0.75rem" }}>
        {submitted ? "Tu valoración" : "¿Te fue útil este artículo?"}
      </p>

      <p style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.15rem", fontWeight: 300, color: "#faf8f5", marginBottom: "1.5rem" }}>
        {submitted ? "¡Gracias por tu valoración!" : "Valora este artículo"}
      </p>

      {/* Stars */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "1.25rem" }}>
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = submitted ? star <= userRating : star <= (hovered || userRating);
          return (
            <button
              key={star}
              onClick={() => handleRate(star)}
              onMouseEnter={() => !submitted && setHovered(star)}
              onMouseLeave={() => !submitted && setHovered(0)}
              disabled={submitted}
              aria-label={`${star} estrellas`}
              style={{ background: "none", border: "none", padding: "4px", cursor: submitted ? "default" : "pointer", transition: "transform 0.15s", transform: !submitted && hovered >= star ? "scale(1.2)" : "scale(1)" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24"
                fill={filled ? "#b89a6a" : "rgba(184,154,106,0.15)"}
                stroke={filled ? "#b89a6a" : "rgba(184,154,106,0.3)"}
                strokeWidth="1"
                style={{ transition: "fill 0.2s" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          );
        })}
      </div>

      {/* Stats */}
      {!loading && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          <span style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.8rem", fontWeight: 300, color: "#faf8f5", lineHeight: 1 }}>
            {average}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-start" }}>
            <div style={{ width: "120px", height: "4px", backgroundColor: "rgba(184,154,106,0.15)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, backgroundColor: "#b89a6a", borderRadius: "2px", transition: "width 0.6s ease" }} />
            </div>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "#888580", letterSpacing: "0.06em" }}>
              {count} {count === 1 ? "valoración" : "valoraciones"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
