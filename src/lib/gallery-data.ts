export type GalleryCategory = "facial" | "corporal" | "capilar" | "inyectable";

export interface GalleryCase {
  id: string;
  title: string;
  treatment: string;
  zone: string;
  category: GalleryCategory;
  /** Foto real tomada antes del tratamiento. */
  antes: string;
  /** Foto real tomada después del tratamiento. */
  despues: string;
  /** Proporción del visor. Rostros 3:4, cuerpo y composites partidos 1:2. */
  aspectRatio: string;
  /** Encuadre dentro del visor. */
  objectPosition?: string;
  description: string;
  featured?: boolean;
}

/**
 * Casos reales de Clínica Quantum, extraídos del portafolio comercial oficial.
 *
 * Cada par se asignó cruzando la posición de la foto en la página del PDF con
 * la de sus rótulos ANTES/DESPUÉS, y contrastándolo con la lógica médica del
 * procedimiento. Detalle y casos retenidos en docs/ANALISIS-PORTAFOLIO.md.
 *
 * Tres casos del portafolio NO están aquí a propósito: toxina botulínica,
 * Sculptra y mesoterapia capilar. Sus tomas no son comparables entre sí
 * (expresión, paciente o ángulo distinto) y no deben publicarse sin revisión.
 */
const R = "/images/resultados-reales";

export const galleryCases: GalleryCase[] = [
  {
    id: "trasplante-capilar",
    title: "Recuperación de densidad en coronilla",
    treatment: "Trasplante capilar",
    zone: "Coronilla y zona frontal",
    category: "capilar",
    antes: `${R}/trasplante-capilar-antes.webp`,
    despues: `${R}/trasplante-capilar-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Recupera densidad y redefine la línea del cabello mediante una técnica diseñada para lograr un resultado natural y duradero. Ideal para entradas, coronilla y zonas con pérdida de densidad.",
    featured: true,
  },
  {
    id: "criolipolisis-abdomen",
    title: "Moldeamiento de abdomen",
    treatment: "Criolipólisis (Cryonic)",
    zone: "Abdomen",
    category: "corporal",
    antes: `${R}/criolipolisis-abdomen-antes.webp`,
    despues: `${R}/criolipolisis-abdomen-despues.webp`,
    aspectRatio: "1 / 2",
    objectPosition: "center",
    description:
      "En una sola sesión congelamos las células de grasa localizada; se complementa con INDIBA y drenaje linfático. No baja de peso: reduce medidas y moldea la zona.",
  },
  {
    id: "criolipolisis-espalda",
    title: "Contorno de espalda y flancos",
    treatment: "Criolipólisis (Cryonic)",
    zone: "Espalda y flancos",
    category: "corporal",
    antes: `${R}/criolipolisis-espalda-antes.webp`,
    despues: `${R}/criolipolisis-espalda-despues.webp`,
    aspectRatio: "1 / 2",
    objectPosition: "center",
    description:
      "Nuestra tecnología estrella para moldear la figura. Congela la grasa localizada sin cirugía ni incapacidad y afina medidas en espalda, flancos, abdomen o piernas.",
  },
  {
    id: "labios-acido-hialuronico",
    title: "Volumen y contorno labial",
    treatment: "Ácido hialurónico",
    zone: "Labios",
    category: "inyectable",
    antes: `${R}/labios-acido-hialuronico-antes.webp`,
    despues: `${R}/labios-acido-hialuronico-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Volumen, contorno e hidratación a tu medida. Diseñamos labios que se ven tuyos, proporcionados y naturales, sin el efecto inflado.",
  },
  {
    id: "rinomodelacion",
    title: "Perfil y punta nasal sin cirugía",
    treatment: "Rinomodelación",
    zone: "Nariz",
    category: "inyectable",
    antes: `${R}/rinomodelacion-antes.webp`,
    despues: `${R}/rinomodelacion-despues.webp`,
    aspectRatio: "3 / 4",
    objectPosition: "center",
    description:
      "Mejora el perfil y la punta de la nariz sin cirugía, buscando mayor armonía y proporción facial.",
  },
  {
    id: "perfilado-mandibular",
    title: "Definición de la línea mandibular",
    treatment: "Perfilado mandibular",
    zone: "Mandíbula",
    category: "inyectable",
    antes: `${R}/perfilado-mandibular-antes.webp`,
    despues: `${R}/perfilado-mandibular-despues.webp`,
    aspectRatio: "1 / 2",
    objectPosition: "center",
    description:
      "Define la línea mandibular para mejorar el contorno y la armonía del rostro.",
  },
  {
    id: "volumen-menton",
    title: "Proyección del mentón",
    treatment: "Volumen de mentón",
    zone: "Mentón",
    category: "inyectable",
    antes: `${R}/volumen-menton-antes.webp`,
    despues: `${R}/volumen-menton-despues.webp`,
    aspectRatio: "3 / 4",
    objectPosition: "center",
    description:
      "Aporta proyección al mentón para equilibrar el perfil y la proporción del rostro.",
  },
  {
    id: "surcos-nasogenianos",
    title: "Suavizado de surcos nasogenianos",
    treatment: "Ácido hialurónico",
    zone: "Surcos nasogenianos",
    category: "inyectable",
    antes: `${R}/surcos-nasogenianos-antes.webp`,
    despues: `${R}/surcos-nasogenianos-despues.webp`,
    aspectRatio: "8 / 5",
    objectPosition: "center",
    description:
      "Suaviza los pliegues que van de la nariz a la boca y las líneas de marioneta, conocidas como líneas de amargura.",
  },
  {
    id: "ojeras-acido-hialuronico",
    title: "Mirada más descansada",
    treatment: "Ácido hialurónico",
    zone: "Ojeras",
    category: "inyectable",
    antes: `${R}/ojeras-acido-hialuronico-antes.webp`,
    despues: `${R}/ojeras-acido-hialuronico-despues.webp`,
    aspectRatio: "2 / 1",
    objectPosition: "center",
    description:
      "Mejora la apariencia de la zona periocular para una mirada más fresca, uniforme y descansada.",
  },
  {
    id: "long-lasting",
    title: "Rejuvenecimiento de rostro y cuello",
    treatment: "Long Lasting",
    zone: "Rostro y cuello",
    category: "inyectable",
    antes: `${R}/long-lasting-antes.webp`,
    despues: `${R}/long-lasting-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Rejuvenecimiento de cara y cuello pensado para durar: recupera frescura y firmeza con un efecto que se sostiene en el tiempo.",
  },
  {
    id: "bruxismo",
    title: "Relajación del músculo masetero",
    treatment: "Toxina para bruxismo",
    zone: "Mandíbula",
    category: "inyectable",
    antes: `${R}/bruxismo-antes.webp`,
    despues: `${R}/bruxismo-despues.webp`,
    aspectRatio: "1 / 2",
    description:
      "Reduce la actividad de los músculos de la mandíbula para disminuir el apretamiento y la tensión muscular.",
  },
  {
    id: "alectomia",
    title: "Afinado de aletas nasales",
    treatment: "Alectomía",
    zone: "Aletas nasales",
    category: "facial",
    antes: `${R}/alectomia-antes.webp`,
    despues: `${R}/alectomia-despues.webp`,
    aspectRatio: "1 / 2",
    objectPosition: "center",
    description:
      "Procedimiento de armonización quirúrgica menor para afinar las aletas nasales y lograr una armonización natural del rostro.",
  },
];

export const categoryLabels: Record<GalleryCategory | "all", string> = {
  all: "Todos",
  facial: "Faciales",
  corporal: "Corporales",
  capilar: "Capilares",
  inyectable: "Inyectables",
};

export const allCategories: Array<GalleryCategory | "all"> = [
  "all",
  "facial",
  "corporal",
  "capilar",
  "inyectable",
];
