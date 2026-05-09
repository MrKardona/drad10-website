"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Page-specific GSAP effects for /nosotros.
 * Uses gsap.context() so cleanup is isolated from the global ScrollAnimations.
 */
export function NosotrosAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ── 1. Doctor photo: clip-path curtain reveal (top → bottom) ──────
      // Element starts hidden; clip retracts downward as it enters view.
      const photoEl = document.querySelector(".nos-photo-clip");
      if (photoEl) {
        gsap.fromTo(
          ".nos-photo-clip",
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: ".nos-photo-clip",
              start: "top 82%",
            },
          }
        );
      }

      // ── 2. Floating stat card: slides in from bottom-right ────────────
      const statCard = document.querySelector(".nos-stat-card");
      if (statCard) {
        gsap.fromTo(
          ".nos-stat-card",
          { opacity: 0, x: 32, y: 24 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power4.out",
            delay: 0.55,
            scrollTrigger: {
              trigger: ".nos-photo-clip",
              start: "top 82%",
            },
          }
        );
      }

      // ── 3. Timeline vertical line: grows with scroll (scrub) ──────────
      const lineEl = document.querySelector(".nos-timeline-line");
      if (lineEl) {
        gsap.fromTo(
          ".nos-timeline-line",
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".nos-timeline",
              start: "top 52%",
              end: "bottom 68%",
              scrub: 1.8,
            },
          }
        );
      }

      // ── 4. Filosofía cards: stagger up ───────────────────────────────
      const cards = document.querySelectorAll(".nos-filosofia-card");
      if (cards.length) {
        gsap.fromTo(
          ".nos-filosofia-card",
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".nos-filosofia",
              start: "top 78%",
            },
          }
        );
      }

      // ── 5. Team cards: stagger scale-in ─────────────────────────────
      const teamCards = document.querySelectorAll(".nos-team-card");
      if (teamCards.length) {
        gsap.fromTo(
          ".nos-team-card",
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".nos-equipo",
              start: "top 78%",
            },
          }
        );
      }

      // ── 6. Pull-quote chars: fade in word by word ────────────────────
      const words = document.querySelectorAll(".nos-quote-word");
      if (words.length) {
        gsap.fromTo(
          ".nos-quote-word",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".nos-quote",
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
