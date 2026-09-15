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
  // ── Casos reales del archivo de la clínica (carpeta "0. Antes y después" y
  //    evidencias de marketing en Drive). Pendientes de confirmar autorización
  //    de publicación de cada paciente antes de salir a producción.
  {
    id: "botox-entrecejo",
    title: "Entrecejo sin líneas de expresión marcadas",
    treatment: "Toxina botulínica",
    zone: "Entrecejo",
    category: "inyectable",
    antes: `${R}/botox-entrecejo-antes.webp`,
    despues: `${R}/botox-entrecejo-despues.webp`,
    aspectRatio: "2 / 1",
    description:
      "Misma expresión antes y después: al fruncir el ceño, las líneas del entrecejo se suavizan y la mirada se ve descansada.",
  },
  {
    id: "botox-frente",
    title: "Frente más lisa al levantar las cejas",
    treatment: "Toxina botulínica",
    zone: "Frente",
    category: "inyectable",
    antes: `${R}/botox-frente-antes.webp`,
    despues: `${R}/botox-frente-despues.webp`,
    aspectRatio: "2 / 1",
    description:
      "Al elevar las cejas, las líneas horizontales de la frente se marcan mucho menos, conservando el movimiento natural.",
  },
  {
    id: "botox-entrecejo-2",
    title: "Ceño relajado",
    treatment: "Toxina botulínica",
    zone: "Entrecejo",
    category: "inyectable",
    antes: `${R}/botox-entrecejo-2-antes.webp`,
    despues: `${R}/botox-entrecejo-2-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Comparación con el mismo gesto: el ceño fruncido ya no forma pliegues profundos entre las cejas.",
  },
  {
    id: "rinomodelacion-2",
    title: "Perfil nasal más armónico",
    treatment: "Rinomodelación",
    zone: "Dorso nasal",
    category: "inyectable",
    antes: `${R}/rinomodelacion-2-antes.webp`,
    despues: `${R}/rinomodelacion-2-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Sin cirugía, el dorso se ve más recto y el perfil más equilibrado.",
  },
  {
    id: "rinomodelacion-3",
    title: "Dorso recto y punta definida",
    treatment: "Rinomodelación",
    zone: "Dorso y punta nasal",
    category: "inyectable",
    antes: `${R}/rinomodelacion-3-antes.webp`,
    despues: `${R}/rinomodelacion-3-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Corrección de la giba y del ángulo de la punta con ácido hialurónico, vista de perfil.",
  },
  {
    id: "rinomodelacion-4",
    title: "Perfil más suave",
    treatment: "Rinomodelación",
    zone: "Dorso nasal",
    category: "inyectable",
    antes: `${R}/rinomodelacion-4-antes.webp`,
    despues: `${R}/rinomodelacion-4-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "El dorso nasal se ve más continuo y el perfil gana armonía con el resto del rostro.",
  },
  {
    id: "labios-2",
    title: "Labios hidratados y definidos",
    treatment: "Relleno de labios",
    zone: "Labios",
    category: "inyectable",
    antes: `${R}/labios-2-antes.webp`,
    despues: `${R}/labios-2-despues.webp`,
    aspectRatio: "2 / 1",
    description:
      "Más definición del contorno y volumen equilibrado entre labio superior e inferior.",
  },
  {
    id: "labios-3",
    title: "Contorno de labios marcado",
    treatment: "Relleno de labios",
    zone: "Labios",
    category: "inyectable",
    antes: `${R}/labios-3-antes.webp`,
    despues: `${R}/labios-3-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista lateral: el labio gana proyección y un borde más definido, con resultado natural.",
  },
  {
    id: "labios-4",
    title: "Volumen proporcionado",
    treatment: "Relleno de labios",
    zone: "Labios",
    category: "inyectable",
    antes: `${R}/labios-4-antes.webp`,
    despues: `${R}/labios-4-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Labios con más volumen y simetría, en proporción con los rasgos del rostro.",
  },
  {
    id: "long-lasting-2",
    title: "Rostro con soporte y luminosidad",
    treatment: "Long Lasting",
    zone: "Rostro completo",
    category: "inyectable",
    antes: `${R}/long-lasting-2-antes.webp`,
    despues: `${R}/long-lasting-2-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Tratamiento de ácido hialurónico de larga duración para devolver soporte y frescura al rostro.",
  },
  {
    id: "ojeras-2",
    title: "Mirada más descansada",
    treatment: "Ácido hialurónico",
    zone: "Ojeras",
    category: "inyectable",
    antes: `${R}/ojeras-2-antes.webp`,
    despues: `${R}/ojeras-2-despues.webp`,
    aspectRatio: "2 / 1",
    description:
      "El surco de la ojera se ve menos hundido y la mirada luce más fresca.",
  },
  {
    id: "ojeras-3",
    title: "Ojeras menos marcadas",
    treatment: "Ácido hialurónico",
    zone: "Ojeras",
    category: "inyectable",
    antes: `${R}/ojeras-3-antes.webp`,
    despues: `${R}/ojeras-3-despues.webp`,
    aspectRatio: "2 / 1",
    description:
      "Menos sombra bajo los ojos y una transición más suave entre párpado y mejilla.",
  },
  {
    id: "alectomia-2",
    title: "Aletas nasales más estrechas",
    treatment: "Alectomía",
    zone: "Aletas nasales",
    category: "facial",
    antes: `${R}/alectomia-2-antes.webp`,
    despues: `${R}/alectomia-2-despues.webp`,
    aspectRatio: "2 / 1",
    description:
      "Vista inferior: las aletas nasales se ven más estrechas y en proporción con la punta.",
  },
  {
    id: "alectomia-3",
    title: "Base nasal armonizada",
    treatment: "Alectomía",
    zone: "Aletas nasales",
    category: "facial",
    antes: `${R}/alectomia-3-antes.webp`,
    despues: `${R}/alectomia-3-despues.webp`,
    aspectRatio: "2 / 1",
    description:
      "Reducción del ancho de las aletas nasales para una base de la nariz más equilibrada.",
  },
  {
    id: "alectomia-4",
    title: "Nariz más proporcionada",
    treatment: "Alectomía",
    zone: "Aletas nasales",
    category: "facial",
    antes: `${R}/alectomia-4-antes.webp`,
    despues: `${R}/alectomia-4-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Las aletas se ven más estrechas y la nariz más proporcionada con el resto del rostro.",
  },
  {
    id: "manos",
    title: "Manos con aspecto más joven",
    treatment: "Rejuvenecimiento de manos",
    zone: "Dorso de las manos",
    category: "facial",
    antes: `${R}/manos-antes.webp`,
    despues: `${R}/manos-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Las venas y los tendones se notan menos y la piel del dorso de la mano luce más uniforme.",
  },
  {
    id: "manos-2",
    title: "Piel de las manos renovada",
    treatment: "Rejuvenecimiento de manos",
    zone: "Dorso de las manos",
    category: "facial",
    antes: `${R}/manos-2-antes.webp`,
    despues: `${R}/manos-2-despues.webp`,
    aspectRatio: "4 / 3",
    description:
      "Dorso de las manos con piel más uniforme y menos marcas del paso del tiempo.",
  },
  {
    id: "capilar-tratamiento",
    title: "Más densidad en la coronilla",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-tratamiento-antes.webp`,
    despues: `${R}/capilar-tratamiento-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla: el cuero cabelludo se nota mucho menos y el cabello gana densidad.",
  },
  {
    id: "capilar-coronilla",
    title: "Coronilla cubierta de nuevo",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-coronilla-antes.webp`,
    despues: `${R}/capilar-coronilla-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "La zona despoblada de la coronilla, visible al inicio, queda cubierta en el control.",
  },
  {
    id: "capilar-2",
    title: "Menos cuero cabelludo visible",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-2-antes.webp`,
    despues: `${R}/capilar-2-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-3",
    title: "Coronilla más poblada",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-3-antes.webp`,
    despues: `${R}/capilar-3-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-4",
    title: "Densidad recuperada en la coronilla",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-4-antes.webp`,
    despues: `${R}/capilar-4-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-5",
    title: "Cabello más denso en la parte superior",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-5-antes.webp`,
    despues: `${R}/capilar-5-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-6",
    title: "Coronilla con más cobertura",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-6-antes.webp`,
    despues: `${R}/capilar-6-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-7",
    title: "Del claro en la coronilla a un cabello abundante",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-7-antes.webp`,
    despues: `${R}/capilar-7-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-8",
    title: "Coronilla sin claros",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-8-antes.webp`,
    despues: `${R}/capilar-8-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-9",
    title: "Más cabello y menos brillo del cuero cabelludo",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-9-antes.webp`,
    despues: `${R}/capilar-9-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-10",
    title: "Coronilla más densa",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-10-antes.webp`,
    despues: `${R}/capilar-10-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "capilar-11",
    title: "Cobertura que vuelve a la coronilla",
    treatment: "Mesoterapia, PRP y exosomas capilares",
    zone: "Coronilla",
    category: "capilar",
    antes: `${R}/capilar-11-antes.webp`,
    despues: `${R}/capilar-11-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Vista superior de la coronilla al inicio y en el control, tras un protocolo que combina mesoterapia, PRP y exosomas capilares.",
  },
  {
    id: "implante-capilar",
    title: "Nueva línea frontal",
    treatment: "Trasplante capilar",
    zone: "Zona frontal y entradas",
    category: "capilar",
    antes: `${R}/implante-capilar-antes.webp`,
    despues: `${R}/implante-capilar-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Antes, con la línea de implantación marcada sobre la frente. Nueve meses después, la zona frontal tiene cabello propio y una línea definida.",
  },
  {
    id: "implante-capilar-2",
    title: "Entradas cerradas",
    treatment: "Trasplante capilar",
    zone: "Entradas",
    category: "capilar",
    antes: `${R}/implante-capilar-2-antes.webp`,
    despues: `${R}/implante-capilar-2-despues.webp`,
    aspectRatio: "3 / 4",
    description: "Las entradas pierden profundidad y el frente gana densidad.",
  },
  {
    id: "implante-capilar-3",
    title: "Densidad en la zona superior",
    treatment: "Trasplante capilar",
    zone: "Zona frontal y media",
    category: "capilar",
    antes: `${R}/implante-capilar-3-antes.webp`,
    despues: `${R}/implante-capilar-3-despues.webp`,
    aspectRatio: "3 / 4",
    description:
      "Antes, con el área a trabajar marcada en azul. Después, la parte superior de la cabeza se ve poblada.",
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
