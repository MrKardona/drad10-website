"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ── 1. Fade-up batch (most elements) ──────────────────────────────
    ScrollTrigger.batch("[data-anim='up']", {
      once: true,
      start: "top 88%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power4.out" }
        ),
    });

    // ── 2. Fade from left ─────────────────────────────────────────────
    ScrollTrigger.batch("[data-anim='left']", {
      once: true,
      start: "top 88%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, x: -56 },
          { opacity: 1, x: 0, duration: 0.9, stagger: 0.12, ease: "power4.out" }
        ),
    });

    // ── 3. Fade from right ────────────────────────────────────────────
    ScrollTrigger.batch("[data-anim='right']", {
      once: true,
      start: "top 88%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, x: 56 },
          { opacity: 1, x: 0, duration: 0.9, stagger: 0.12, ease: "power4.out" }
        ),
    });

    // ── 4. Scale-in ───────────────────────────────────────────────────
    ScrollTrigger.batch("[data-anim='scale']", {
      once: true,
      start: "top 88%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.9, stagger: 0.1, ease: "power4.out" }
        ),
    });

    // ── 5. Stagger children ───────────────────────────────────────────
    document.querySelectorAll("[data-anim='stagger']").forEach((parent) => {
      const children = parent.children;
      gsap.set(children, { opacity: 0, y: 32 });
      ScrollTrigger.create({
        trigger: parent,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
          }),
      });
    });

    // ── 6. Animated number counters ───────────────────────────────────
    document.querySelectorAll("[data-counter]").forEach((el) => {
      const target = parseFloat(el.getAttribute("data-counter") ?? "0");
      const prefix = el.getAttribute("data-prefix") ?? "";
      const suffix = el.getAttribute("data-suffix") ?? "";
      const isFloat = !Number.isInteger(target);

      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: "power3.out",
            onUpdate: () => {
              el.textContent =
                prefix +
                (isFloat
                  ? obj.val.toFixed(1)
                  : Math.round(obj.val).toString()) +
                suffix;
            },
          }),
      });
    });

    // ── 7. Parallax on images ─────────────────────────────────────────
    document.querySelectorAll("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax") ?? "0.15");
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    // ── 8. Gold line draw (section dividers) ─────────────────────────
    ScrollTrigger.batch("[data-anim='line']", {
      once: true,
      start: "top 90%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        ),
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
