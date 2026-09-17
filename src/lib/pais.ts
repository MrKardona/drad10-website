export type Pais = "co" | "ar";

export const PAISES: Record<Pais, { nombre: string; wa: string; telefono: string; tel: string; direccion: string; mapa: string }> = {
  co: { nombre: "Colombia", wa: "573043751975", telefono: "304 375 1975", tel: "+573043751975", direccion: "Cl. 7 #39 – 290 Consultorio 516, El Poblado · Medellín", mapa: "https://maps.app.goo.gl/dtwj4zv9ayygTz8NA" },
  ar: { nombre: "Argentina", wa: "5491153447956", telefono: "+54 11 5344-7956", tel: "+541153447956", direccion: "Av. Gaona 1237, Depto 11-2 · Buenos Aires", mapa: "https://www.google.com/maps/search/?api=1&query=Av.+Gaona+1237,+Buenos+Aires,+Argentina" },
};

const CLAVE = "drad10-pais";
const EVENTO = "drad10:pais";

export function leerPais(): Pais {
  try {
    const guardado = localStorage.getItem(CLAVE);
    if (guardado === "co" || guardado === "ar") return guardado;
  } catch {}
  // Primera visita: quien navega con zona horaria argentina arranca en Argentina.
  const zona = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  return zona.startsWith("America/Argentina") || zona === "America/Buenos_Aires" ? "ar" : "co";
}

export function guardarPais(pais: Pais) {
  try {
    localStorage.setItem(CLAVE, pais);
  } catch {}
  window.dispatchEvent(new CustomEvent<Pais>(EVENTO, { detail: pais }));
}

export function alCambiarPais(fn: (pais: Pais) => void) {
  const manejador = (e: Event) => fn((e as CustomEvent<Pais>).detail);
  window.addEventListener(EVENTO, manejador);
  return () => window.removeEventListener(EVENTO, manejador);
}
