"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Retrato del hero de /nosotros: foto real de la Dra. Daniela en la clínica,
 * fundida con el fondo. En escritorio responde al mouse con profundidad (la foto
 * y la tarjeta se mueven a distinta distancia) y al hacer scroll se aleja y se
 * desvanece. Con movimiento reducido o pantalla táctil queda quieta.
 */
export function NosotrosRetrato() {
  const escena = useRef<HTMLDivElement>(null);
  const plano = useRef<HTMLDivElement>(null);
  const foto = useRef<HTMLDivElement>(null);
  const tarjeta = useRef<HTMLDivElement>(null);
  const luz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raiz = escena.current;
    if (!raiz || !plano.current || !foto.current || !tarjeta.current || !luz.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // Entrada: la foto se revela de derecha a izquierda y se asienta.
      gsap.fromTo(
        plano.current,
        { clipPath: "inset(0 0 0 100%)" },
        { clipPath: "inset(0 0 0 0%)", duration: reducido ? 0 : 1.6, ease: "expo.out", delay: 0.25 },
      );
      gsap.fromTo(
        tarjeta.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: reducido ? 0 : 1, ease: "expo.out", delay: 1.1 },
      );

      if (reducido) return;

      // Scroll: la foto baja más lento que la página y se desvanece.
      gsap.to(foto.current, {
        yPercent: 8,
        scale: 1.06,
        ease: "none",
        scrollTrigger: { trigger: raiz, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(raiz, {
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: raiz, start: "30% top", end: "bottom top", scrub: true },
      });
      gsap.to(tarjeta.current, {
        yPercent: -60,
        ease: "none",
        scrollTrigger: { trigger: raiz, start: "top top", end: "bottom top", scrub: true },
      });
    }, raiz);

    // Mouse: inclinación 3D con capas a distinta profundidad.
    const fino = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let raf = 0;
    const objetivo = { x: 0, y: 0 };
    const actual = { x: 0, y: 0 };
    const mover = (e: PointerEvent) => {
      objetivo.x = e.clientX / window.innerWidth - 0.5;
      objetivo.y = e.clientY / window.innerHeight - 0.5;
    };
    const cuadro = () => {
      actual.x += (objetivo.x - actual.x) * 0.06;
      actual.y += (objetivo.y - actual.y) * 0.06;
      plano.current!.style.transform = `rotateY(${actual.x * -9}deg) rotateX(${actual.y * 7}deg)`;
      foto.current!.style.translate = `${actual.x * -22}px ${actual.y * -16}px`;
      tarjeta.current!.style.translate = `${actual.x * 38}px ${actual.y * 28}px`;
      luz.current!.style.background = `radial-gradient(520px circle at ${50 + actual.x * 70}% ${40 + actual.y * 60}%, rgba(255,244,225,0.22), transparent 60%)`;
      raf = requestAnimationFrame(cuadro);
    };
    if (fino && !reducido) {
      window.addEventListener("pointermove", mover, { passive: true });
      raf = requestAnimationFrame(cuadro);
    }

    return () => {
      ctx.revert();
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", mover);
    };
  }, []);

  return (
    <div ref={escena} className="nos-retrato" aria-hidden="true">
      <div ref={plano} className="nos-retrato-plano">
        <div ref={foto} className="nos-retrato-foto">
          <Image
            src="/images/dra/retrato-sillon.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 12%" }}
          />
        </div>
        <div ref={luz} className="nos-retrato-luz" />
      </div>
      <div ref={tarjeta} className="nos-retrato-tarjeta">
        <span>Dra. Daniela Díez</span>
        <small>Dirección médica · Medellín y Buenos Aires</small>
      </div>
    </div>
  );
}
