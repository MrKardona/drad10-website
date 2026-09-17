"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface Credencial {
  year: string;
  title: string;
  institution: string;
  country: string;
}

const VIDEO = "/videos/nosotros/formacion.mp4";
const POSTER = "/images/nosotros/formacion-poster.webp";

/**
 * Formación académica de /nosotros. La sección queda fija mientras se recorre:
 * el video de fondo avanza con el scroll y cada credencial se enciende en su
 * turno, con el año grande a la izquierda. Sin movimiento reducido, todo se
 * muestra estático y completo.
 */
export function FormacionAcademica({ credenciales }: { credenciales: Credencial[] }) {
  const seccion = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const barra = useRef<HTMLDivElement>(null);
  const [activa, setActiva] = useState(0);
  // Cambia en cada año nuevo para relanzar la animación del destello.
  const [pulso, setPulso] = useState(0);
  const [estatica, setEstatica] = useState(false);

  useEffect(() => {
    const raiz = seccion.current;
    const v = video.current;
    if (!raiz || !v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEstatica(true);
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // El video se mueve hacia el tiempo objetivo con suavizado, así el scroll
    // rápido no produce saltos bruscos de fotograma.
    let objetivo = 0;
    let actual = 0;
    let raf = 0;
    let buscando = false;
    // Al terminar cada búsqueda el navegador avisa; así no encolamos seeks y el
    // video avanza fluido incluso con scroll rápido.
    const listo = () => {
      buscando = false;
    };
    v.addEventListener("seeked", listo);
    const paso = () => {
      if (v.duration) {
        const dist = objetivo - actual;
        // Cuanto más lejos está el objetivo, más rápido alcanza: evita el arrastre.
        actual += dist * Math.min(0.35, 0.12 + Math.abs(dist) * 0.25);
        if (!buscando && Math.abs(v.currentTime - actual) > 1 / 30) {
          buscando = true;
          v.currentTime = actual;
        }
      }
      raf = requestAnimationFrame(paso);
    };
    raf = requestAnimationFrame(paso);

    const st = ScrollTrigger.create({
      trigger: raiz,
      start: "top top",
      end: "bottom bottom",
      // Al soltar el scroll, cada credencial queda centrada en su tramo.
      snap: {
        snapTo: (p) => {
          const n = credenciales.length;
          return (Math.round(p * n - 0.5) + 0.5) / n;
        },
        duration: { min: 0.15, max: 0.45 },
        delay: 0.08,
        ease: "power2.inOut",
      },
      onUpdate: (self) => {
        const p = self.progress;
        if (v.duration) objetivo = p * (v.duration - 0.05);
        if (barra.current) barra.current.style.transform = `scaleY(${p})`;
        const i = Math.min(credenciales.length - 1, Math.floor(p * credenciales.length));
        setActiva((prev) => {
          if (prev !== i) setPulso((n) => n + 1);
          return i;
        });
      },
    });

    return () => {
      st.kill();
      cancelAnimationFrame(raf);
      v.removeEventListener("seeked", listo);
    };
  }, [credenciales.length]);

  const actual = credenciales[activa];

  return (
    <section
      ref={seccion}
      id="formacion"
      className={`form-sec${estatica ? " form-estatica" : ""}`}
      style={{ ["--pasos" as string]: credenciales.length }}
      aria-labelledby="formacion-titulo"
    >
      <div className="form-fijo">
        <video
          ref={video}
          className="form-video"
          src={VIDEO}
          poster={POSTER}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="form-velo" aria-hidden="true" />

        <div className="form-grid">
          <div className="form-cabeza">
            <p className="form-etiqueta">Formación académica</p>
            <h2 id="formacion-titulo" className="form-titulo">Preparación internacional</h2>
            <p className="form-anio" aria-hidden="true">
              <span key={actual.year + activa}>{actual.year}</span>
            </p>
            <p className="form-contador" aria-hidden="true">
              {String(activa + 1).padStart(2, "0")} / {String(credenciales.length).padStart(2, "0")}
            </p>
          </div>

          <div className="form-lista">
            <div className="form-riel" aria-hidden="true">
              <div ref={barra} className="form-riel-lleno" />
            </div>
            <ol>
              {credenciales.map((c, i) => (
                <li key={`${c.year}-${i}`} className={i === activa ? "es-activa" : i < activa ? "es-pasada" : ""}>
                  <span className="form-punto" aria-hidden="true">
                    {i === activa && (
                      <span className="form-chispas" key={pulso}>
                        {Array.from({ length: 10 }).map((_, ch) => (
                          <i key={ch} style={{ ["--a" as string]: `${ch * 36}deg` }} />
                        ))}
                      </span>
                    )}
                  </span>
                  <span className="form-item-anio">{c.year}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.institution}</p>
                    <span className="form-pais">{c.country}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <style>{`
        .form-sec {
          position: relative;
          background: #0a0908;
          color: #faf8f5;
          height: calc(var(--pasos) * 70vh + 100vh);
          scroll-margin-top: 90px;
        }
        .form-fijo {
          position: sticky;
          top: 0;
          height: 100vh;
          height: 100svh;
          overflow: hidden;
        }
        .form-video, .form-velo { position: absolute; inset: 0; width: 100%; height: 100%; }
        .form-video { object-fit: cover; opacity: 0.9; transform: translateX(16%) scale(1.08); }
        .form-velo {
          background:
            linear-gradient(90deg, rgba(10,9,8,0.95) 0%, rgba(10,9,8,0.7) 38%, rgba(10,9,8,0.05) 70%),
            linear-gradient(0deg, rgba(18,17,16,0.85) 0%, rgba(18,17,16,0) 35%);
        }
        .form-grid {
          position: relative;
          height: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding: clamp(110px, 15vh, 150px) clamp(20px, 5vw, 64px) clamp(32px, 6vh, 64px);
          display: grid;
          grid-template-columns: minmax(0, 560px) 1fr;
          align-content: center;
          row-gap: clamp(20px, 3.5vh, 36px);
        }
        .form-cabeza, .form-lista { grid-column: 1; }
        .form-etiqueta { font-size: 0.875rem; color: #c8a978; margin: 0 0 12px; }
        .form-titulo {
          font-size: clamp(2rem, 3.6vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 clamp(12px, 3vh, 28px);
          color: #faf8f5;
        }
        .form-anio {
          margin: 0;
          font-weight: 600;
          letter-spacing: -0.05em;
          line-height: 0.85;
          font-size: clamp(4rem, 9vw, 7.5rem);
          color: #c8a978;
          font-variant-numeric: tabular-nums;
          overflow: hidden;
        }
        .form-anio span { display: inline-block; animation: formAnio 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes formAnio {
          0% { transform: translateY(45%) scale(0.94); opacity: 0; text-shadow: none; }
          45% { text-shadow: 0 0 26px rgba(200,169,120,0.85); }
          100% { transform: none; opacity: 1; text-shadow: 0 0 0 rgba(200,169,120,0); }
        }
        .form-contador { margin: 14px 0 0; font-size: 0.875rem; color: rgba(250,248,245,0.55); font-variant-numeric: tabular-nums; }

        .form-lista { position: relative; padding-left: 28px; }
        .form-riel { position: absolute; left: 0; top: 6px; bottom: 6px; width: 1px; background: rgba(250,248,245,0.14); }
        .form-riel-lleno { width: 1px; height: 100%; background: #c8a978; transform-origin: top; transform: scaleY(0); }
        .form-lista ol { list-style: none; margin: 0; padding: 0; display: grid; gap: clamp(10px, 1.8vh, 18px); }
        .form-lista li {
          display: grid;
          grid-template-columns: 14px 64px minmax(0, 1fr);
          gap: 12px;
          align-items: baseline;
          opacity: 0.38;
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .form-lista li.es-pasada { opacity: 0.6; }
        .form-lista li.es-activa { opacity: 1; transform: translateX(8px); }
        .form-item-anio { font-size: 0.9375rem; color: #c8a978; font-variant-numeric: tabular-nums; }

        /* Cada año es un punto sobre el riel; al activarse estalla en destellos. */
        .form-punto {
          position: relative;
          width: 10px;
          height: 10px;
          margin-left: -33px;
          border-radius: 50%;
          background: rgba(250,248,245,0.28);
          align-self: center;
          transition: background 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .form-lista li.es-pasada .form-punto { background: rgba(200,169,120,0.65); }
        .form-lista li.es-activa .form-punto {
          background: #f3e2c4;
          transform: scale(1.5);
          box-shadow: 0 0 0 4px rgba(200,169,120,0.22), 0 0 22px 6px rgba(200,169,120,0.55);
        }
        .form-chispas { position: absolute; inset: 0; pointer-events: none; }
        .form-chispas::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(200,169,120,0.8);
          animation: formOnda 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .form-chispas i {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 3px;
          height: 3px;
          margin: -1.5px 0 0 -1.5px;
          border-radius: 50%;
          background: #f6e6c8;
          animation: formChispa 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes formOnda {
          from { transform: scale(0.4); opacity: 0.9; }
          to { transform: scale(3.6); opacity: 0; }
        }
        @keyframes formChispa {
          from { transform: rotate(var(--a)) translateX(0) scale(1); opacity: 1; }
          to { transform: rotate(var(--a)) translateX(26px) scale(0.2); opacity: 0; }
        }
        .form-lista h3 { margin: 0 0 4px; font-size: clamp(1.05rem, 1.6vw, 1.35rem); line-height: 1.2; color: #faf8f5; }
        .form-lista p { margin: 0 0 8px; font-size: 0.9375rem; line-height: 1.5; color: rgba(250,248,245,0.72); }
        .form-pais { font-size: 0.8125rem; color: rgba(250,248,245,0.6); border: 1px solid rgba(250,248,245,0.2); padding: 2px 10px; border-radius: 999px; }

        .form-estatica { height: auto; }
        .form-estatica .form-fijo { position: relative; height: auto; }
        .form-estatica .form-grid { height: auto; }
        .form-estatica .form-lista li { opacity: 1; transform: none; }

        @media (max-width: 860px) {
          .form-grid {
            grid-template-columns: 1fr;
            align-content: center;
            gap: 20px;
            padding-top: 88px;
          }
          .form-titulo { margin-bottom: 12px; }
          .form-anio { font-size: clamp(3.5rem, 20vw, 5.5rem); }
          .form-contador { display: none; }
          .form-lista li { grid-template-columns: 12px 48px minmax(0, 1fr); gap: 8px; }
          .form-punto { margin-left: -27px; }
          .form-lista p { font-size: 0.875rem; margin-bottom: 4px; }
          .form-pais { display: none; }
          .form-video { opacity: 0.45; transform: none; }
          .form-velo { background: linear-gradient(180deg, rgba(18,17,16,0.9) 0%, rgba(18,17,16,0.7) 100%); }
        }
      `}</style>
    </section>
  );
}
