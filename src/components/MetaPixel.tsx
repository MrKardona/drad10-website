"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Píxel de Meta de la clínica (dataset «CP1- CESH|2024|», el mismo de quantummedicinaestetica.com).
// - PageView en la carga y en cada navegación interna (Next.js no recarga la página entre rutas).
// - Contact en cada clic a WhatsApp (wa.me / api.whatsapp.com), el evento estándar de Meta para
//   iniciar una conversación. El script se carga cuando la página ya es interactiva.
export const META_PIXEL_ID = "1589069078656534";

type Fbq = (...args: unknown[]) => void;
const fbq = (...args: unknown[]) => (window as unknown as { fbq?: Fbq }).fbq?.(...args);

export function MetaPixel() {
  const pathname = usePathname();
  const primera = useRef(true);

  useEffect(() => {
    if (primera.current) {
      primera.current = false;
      return;
    }
    fbq("track", "PageView");
  }, [pathname]);

  useEffect(() => {
    const alClic = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href*='wa.me'], a[href*='api.whatsapp.com']");
      if (a) fbq("track", "Contact", { content_category: window.location.pathname });
    };
    document.addEventListener("click", alClic, { capture: true });
    return () => document.removeEventListener("click", alClic, { capture: true });
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} />
      </noscript>
    </>
  );
}
