/**
 * Registro central de imágenes del sitio.
 *
 * Imágenes propias generadas con Higgsfield (soul_2) siguiendo la dirección
 * de arte de docs/LOTE-1-PROMPTS.md. Para reemplazar una imagen basta con
 * cambiar el valor aquí — los componentes no se tocan.
 */


/** LOTE 1 · Tratamientos destacados (home) — 1400×788 */
// Mismas fotos que las páginas de servicio, para que el inicio y cada página
// compartan estilo. Las anteriores (estilo oscuro) mostraban a una "doctora"
// generada con IA y a un médico con bata que no es parte del equipo.
export const tratamientos = {
  botox: "/images/servicios/botox/paso-2.webp",
  implanteCapilar: "/images/servicios/implante-capilar-fue/paso-2.webp",
  limpiezaFacial: "/images/servicios/limpieza-facial/paso-2.webp",
  recuperacionCapilar: "/images/servicios/mesoterapia-capilar/paso-2.webp",
  descensoPeso: "/images/servicios/descenso-de-peso/paso-2.webp",
} as const;

/** LOTE 1 · Teaser de resultados (home) — 1200×1600 */
export const resultadosTeaser = {
  faciales: "/images/servicios/botox/hero.webp",
  inyectables: "/images/servicios/relleno-de-labios/hero.webp",
  corporales: "/images/servicios/criolipolisis/hero.webp",
  capilares: "/images/servicios/implante-capilar-fue/hero.webp",
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
