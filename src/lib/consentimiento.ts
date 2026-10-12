// Consentimiento de cookies publicitarias (píxel de Meta), Ley 1581 de 2012.
// La decisión se guarda en este navegador; sin decisión, el píxel no se carga.
// Si el almacenamiento no está disponible (modo privado estricto), se trata como «sin decisión».

export type Decision = "aceptado" | "rechazado";

const CLAVE = "drad10:cookies";
/** Se emite al tomar o cambiar la decisión (detail: Decision). */
export const EVENTO_DECISION = "cookies:decision";
/** Se emite para volver a mostrar el aviso (enlace «Preferencias de cookies»). */
export const EVENTO_ABRIR = "cookies:abrir";

type Fbq = (...args: unknown[]) => void;
export const fbq = (...args: unknown[]) => (window as unknown as { fbq?: Fbq }).fbq?.(...args);
export const pixelCargado = () => Boolean((window as unknown as { fbq?: Fbq }).fbq);

export function leerDecision(): Decision | null {
  try {
    const v = localStorage.getItem(CLAVE);
    return v === "aceptado" || v === "rechazado" ? v : null;
  } catch {
    return null;
  }
}

export function guardarDecision(d: Decision) {
  try {
    localStorage.setItem(CLAVE, d);
  } catch {}
  if (d === "rechazado") revocarPixel();
  window.dispatchEvent(new CustomEvent<Decision>(EVENTO_DECISION, { detail: d }));
}

export function abrirPreferencias() {
  window.dispatchEvent(new Event(EVENTO_ABRIR));
}

/** Si el píxel ya estaba cargado (aceptó antes y ahora rechaza): lo detiene y borra sus cookies. */
function revocarPixel() {
  fbq("consent", "revoke");
  const dominio = location.hostname.replace(/^www\./, "");
  for (const nombre of ["_fbp", "_fbc"]) {
    for (const d of [dominio, `.${dominio}`, ""]) {
      document.cookie = `${nombre}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}
