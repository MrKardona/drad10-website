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

/** Explorador Scanner D10 / INDIBA (home, dentro de TratamientosDestacados) — 1400×788 */
export const tecnologia = {
  scannerDiagnostico: "/images/tecnologia/scanner-diagnostico.webp",
  indibaFacial: "/images/tecnologia/indiba-facial.webp",
  indibaCorporal: "/images/tecnologia/indiba-corporal.webp",
  indibaRegeneracion: "/images/tecnologia/indiba-regeneracion.webp",
} as const;

/** Página /servicios/botox */
export const botox = {
  /** Fondo del hero, se muestra al 18% de opacidad — 1600×900 */
  hero: "/images/servicios/botox-hero.webp",
  /** Retrato vertical 3:4 — expresión natural preservada — 1000×1333 */
  expresion: "/images/servicios/botox-expresion.webp",
} as const;
