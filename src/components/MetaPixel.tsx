"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EVENTO_DECISION, fbq, leerDecision, pixelCargado, type Decision } from "@/lib/consentimiento";

// Píxel de Meta de la clínica (dataset «CP1- CESH|2024|», el mismo de quantummedicinaestetica.com).
// Solo se carga si la persona acepta las cookies en el aviso (BannerCookies); sin decisión no se envía nada.
// - PageView en la carga y en cada navegación interna (Next.js no recarga la página entre rutas).
// - Contact en cada clic a WhatsApp (wa.me / api.whatsapp.com), el evento estándar de Meta para
//   iniciar una conversación.
// Sin <noscript>: sin JavaScript no hay forma de aceptar, así que tampoco se mide.
export const META_PIXEL_ID = "1589069078656534";

export function MetaPixel() {
  const pathname = usePathname();
  const primera = useRef(true);
  const [permitido, setPermitido] = useState(false);

  useEffect(() => {
    setPermitido(leerDecision() === "aceptado");
    const alDecidir = (e: Event) => {
      const acepta = (e as CustomEvent<Decision>).detail === "aceptado";
      // Si ya estaba cargado (rechazó y vuelve a aceptar en la misma visita), se reactiva.
      if (acepta && pixelCargado()) {
        fbq("consent", "grant");
        fbq("track", "PageView");
      }
      setPermitido(acepta);
    };
    window.addEventListener(EVENTO_DECISION, alDecidir);
    return () => window.removeEventListener(EVENTO_DECISION, alDecidir);
  }, []);

  useEffect(() => {
    if (primera.current) {
      primera.current = false;
      return;
    }
    if (permitido) fbq("track", "PageView");
    // Solo debe reaccionar a cambios de ruta, no a la decisión de cookies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!permitido) return;
    const alClic = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href*='wa.me'], a[href*='api.whatsapp.com']");
      if (a) fbq("track", "Contact", { content_category: window.location.pathname });
    };
    document.addEventListener("click", alClic, { capture: true });
    return () => document.removeEventListener("click", alClic, { capture: true });
  }, [permitido]);

  if (!permitido) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
