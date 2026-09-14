"use client";
import { useEffect } from "react";
import { PAISES, alCambiarPais, leerPais, type Pais } from "@/lib/pais";

const WA_COLOMBIA = `wa.me/${PAISES.co.wa}`;
const WA_ARGENTINA = `wa.me/${PAISES.ar.wa}`;

/**
 * Los enlaces de WhatsApp del sitio apuntan al número de Colombia. Si el
 * visitante eligió Argentina, se reescriben al número de Argentina justo antes
 * de abrirse, sin tocar el mensaje prellenado.
 */
export function WhatsAppPorPais() {
  useEffect(() => {
    let pais: Pais = leerPais();
    const quitar = alCambiarPais((p) => (pais = p));

    const reescribir = (e: Event) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      // data-wa-fijo: enlaces que siempre van a su sede, como la tarjeta de Argentina.
      if (!a || a.dataset.waFijo !== undefined) return;
      const href = a.getAttribute("href") ?? "";
      const otro = pais === "ar" ? WA_COLOMBIA : WA_ARGENTINA;
      const destino = pais === "ar" ? WA_ARGENTINA : WA_COLOMBIA;
      if (href.includes(otro)) a.setAttribute("href", href.replace(otro, destino));
    };

    const eventos = ["pointerdown", "click", "auxclick", "contextmenu", "keydown", "focusin"] as const;
    eventos.forEach((ev) => document.addEventListener(ev, reescribir, true));
    return () => {
      quitar();
      eventos.forEach((ev) => document.removeEventListener(ev, reescribir, true));
    };
  }, []);

  return null;
}
