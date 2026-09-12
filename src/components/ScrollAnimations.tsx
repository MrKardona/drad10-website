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
      // globals.css deja todo [data-anim] en opacity:0. Los demás handlers lo
      // recuperan con fromTo sobre el propio elemento; aquí el movimiento lo
      // hacen los hijos, así que el contenedor hay que revelarlo aparte o la
      // sección entera queda invisible.
      gsap.set(parent, { opacity: 1 });
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
                  : Math.round(obj.val).toLocaleString("es-CO")) +
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

    // ── 9. Mask reveal — el texto asciende tras una máscara ──────────
    // Para titulares. Funciona con cualquier markup interno (<br>, <em>)
    // porque recorta el elemento entero en vez de trocear el texto.
    ScrollTrigger.batch("[data-anim='mask']", {
      once: true,
      start: "top 88%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { clipPath: "inset(105% 0% 0% 0%)", y: 24 },
          {
            clipPath: "inset(0% 0% -10% 0%)",
            y: 0,
            opacity: 1,
            duration: 1.05,
            stagger: 0.09,
            ease: "power4.out",
            onComplete: () => gsap.set(els, { clearProps: "clipPath" }),
          }
        ),
    });

    // ── 10. Barra de progreso de lectura ────────────────────────────
    const bar = document.querySelector<HTMLElement>("[data-progress-bar]");
    if (bar) {
      gsap.to(bar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }
    // ── 11. Red de seguridad ────────────────────────────────────────
    // globals.css deja todo [data-anim] en opacity:0 y son los batches
    // quienes lo revierten al animar. Pero ScrollTrigger.batch dispara
    // onEnter al *cruzar* el punto de inicio, y un elemento que ya está
    // por encima de esa línea al montar nunca lo cruza: se queda oculto.
    // Eso deja el hero entero invisible, que es justo lo primero que se ve.
    //
    // Esta pasada revela cualquier cosa que siga en opacity:0 una vez
    // asentado el layout. Si su batch ya la animó, no hay nada que hacer.
    const revelarPendientes = () => {
      ScrollTrigger.refresh();
      document.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => {
        if (getComputedStyle(el).opacity !== "0") return;
        const r = el.getBoundingClientRect();
        const visible = r.top < window.innerHeight && r.bottom > 0;
        if (!visible) return;
        gsap.set(el, { clearProps: "clipPath" });
        gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
      });
    };
    const idRevelado = window.setTimeout(revelarPendientes, 900);
    return () => {
      window.clearTimeout(idRevelado);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
