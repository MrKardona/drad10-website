/**
 * Registro central de imágenes del sitio.
 *
 * Imágenes propias generadas con Higgsfield (soul_2) siguiendo la dirección
 * de arte de docs/LOTE-1-PROMPTS.md. Para reemplazar una imagen basta con
 * cambiar el valor aquí — los componentes no se tocan.
 */


/** LOTE 1 · Tratamientos destacados (home) — 1400×788 */
export const tratamientos = {
  botox: "/images/tratamientos/botox.webp",
  implanteCapilar: "/images/tratamientos/implante-capilar.webp",
  limpiezaFacial: "/images/tratamientos/limpieza-facial.webp",
  recuperacionCapilar: "/images/tratamientos/recuperacion-capilar.webp",
  descensoPeso: "/images/tratamientos/descenso-peso.webp",
} as const;

/** LOTE 1 · Teaser de resultados (home) — 1200×1600 */
export const resultadosTeaser = {
  faciales: "/images/resultados/teaser-01.webp",
  inyectables: "/images/resultados/teaser-02.webp",
  corporales: "/images/resultados/teaser-03.webp",
  capilares: "/images/resultados/teaser-04.webp",
} as const;

/** Explorador de tecnologías (home, dentro de TratamientosDestacados).
 *  Las cuatro coinciden con el equipamiento declarado en el portafolio. */
export const tecnologia = {
  /** Foto real: la Dra. Daniela con el analizador capilar. */
  analizador: "/images/dra/analizador.webp",
  /** Foto real: criolipólisis Cryonic en uso. */
  criolipolisis: "/images/clinica/criolipolisis.webp",
  /** Foto real: equipo INDIBA de la clínica. */
  indiba: "/images/clinica/indiba.webp",
  /** Pieza de campaña: mapeo facial. */
  laserCO2: "/images/campana/mapeo-facial.webp",
} as const;
