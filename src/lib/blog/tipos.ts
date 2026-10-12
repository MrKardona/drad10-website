// Modelo de los artículos del blog (guía editorial: docs/blog/GUIA-EDITORIAL.md).

export type Pilar =
  | "Rostro y rejuvenecimiento"
  | "Cuidado de la piel"
  | "Cabello"
  | "Cuerpo y bienestar"
  | "Filosofía de la Dra.";

export const PILARES: Pilar[] = [
  "Rostro y rejuvenecimiento",
  "Cuidado de la piel",
  "Cabello",
  "Cuerpo y bienestar",
  "Filosofía de la Dra.",
];

export interface Ingrediente {
  /** Ingrediente o tipo de producto, sin marcas. */
  nombre: string;
  /** Para qué sirve. */
  para: string;
  /** Cómo usarlo (frecuencia, momento del día, precauciones). */
  como: string;
}

export interface Pregunta {
  q: string;
  a: string;
}

export interface BlogSection {
  type: "heading" | "paragraph" | "image" | "quote" | "list" | "tip" | "ingredientes" | "faq";
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  /** Título del bloque `tip` (por defecto «Consejo de la Dra.»). */
  title?: string;
  ingredientes?: Ingrediente[];
  preguntas?: Pregunta[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Pilar;
  /** Fecha visible, p. ej. «12 de octubre, 2026». */
  date: string;
  /** Fecha ISO para datos estructurados. */
  dateISO: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
  /** Servicio principal relacionado (slug de /servicios), si aplica. */
  servicio?: string;
  /** 2-3 slugs de artículos relacionados. */
  relacionados: string[];
  content: BlogSection[];
}
