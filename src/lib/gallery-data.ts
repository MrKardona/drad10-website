export type GalleryCategory = "facial" | "corporal" | "capilar" | "inyectable";

export interface GalleryCase {
  id: string;
  title: string;
  treatment: string;
  zone: string;
  category: GalleryCategory;
  image: string;
  description: string;
  featured?: boolean;
}

const BASE = "https://images.unsplash.com";

export const galleryCases: GalleryCase[] = [
  {
    id: "indiba-corporal",
    title: "Remodelación corporal INDIBA",
    treatment: "INDIBA Activ",
    zone: "Abdomen y flancos",
    category: "corporal",
    image: `${BASE}/photo-1571019614242-c5c5dee9f50b?w=900&h=1100&fit=crop&crop=center`,
    description:
      "Tecnología INDIBA de radiofrecuencia profunda para reducción de grasa localizada, lifting sin bisturí y regeneración del tejido. Resultados visibles desde la primera sesión.",
    featured: true,
  },
  {
    id: "acido-hialuronico-labios",
    title: "Volumen y definición labial",
    treatment: "Ácido Hialurónico",
    zone: "Labios",
    category: "inyectable",
    image: `${BASE}/photo-1531746020798-e6953c6e8e04?w=700&h=900&fit=crop&crop=face`,
    description:
      "Relleno con ácido hialurónico para volumizar y definir el contorno labial de forma natural, sin sobredimensionar. Efecto hidratado y juvenil.",
  },
  {
    id: "botox-frente",
    title: "Suavizado de expresión",
    treatment: "Toxina Botulínica",
    zone: "Frente y entrecejo",
    category: "inyectable",
    image: `${BASE}/photo-1508214751196-bcfd4ca60f91?w=700&h=900&fit=crop&crop=face`,
    description:
      "Aplicación precisa de toxina botulínica para suavizar líneas de expresión en frente y entrecejo. Resultado natural que preserva la expresividad del rostro.",
  },
  {
    id: "rejuvenecimiento-facial",
    title: "Rejuvenecimiento global del rostro",
    treatment: "Radiofrecuencia Facial",
    zone: "Rostro completo",
    category: "facial",
    image: `${BASE}/photo-1544005313-94ddf0286df2?w=700&h=900&fit=crop&crop=face`,
    description:
      "Protocolo combinado de radiofrecuencia para estimular la producción de colágeno, tensar la piel y reducir manchas. Piel luminosa y rejuvenecida.",
  },
  {
    id: "hilos-tensores",
    title: "Lifting sin cirugía",
    treatment: "Hilos Tensores PDO",
    zone: "Óvalo facial",
    category: "facial",
    image: `${BASE}/photo-1534528741775-53994a69daeb?w=700&h=900&fit=crop&crop=face`,
    description:
      "Hilos tensores de PDO para reposicionar tejidos caídos y estimular colágeno de forma progresiva. Efecto lifting inmediato con resultados que mejoran durante semanas.",
  },
  {
    id: "microimplante-capilar",
    title: "Recuperación capilar",
    treatment: "Microimplante Capilar FUE",
    zone: "Zona frontal y coronilla",
    category: "capilar",
    image: `${BASE}/photo-1522337360788-8b13dee7a37e?w=700&h=900&fit=crop&crop=top`,
    description:
      "Técnica FUE de microimplante capilar para restaurar la densidad del cabello con resultados naturales y permanentes. Sin cicatrices visibles.",
  },
  {
    id: "mesoterapia-capilar",
    title: "Fortalecimiento del cabello",
    treatment: "Mesoterapia Capilar",
    zone: "Cuero cabelludo",
    category: "capilar",
    image: `${BASE}/photo-1492106087820-71f1a00d2b11?w=700&h=900&fit=crop&crop=top`,
    description:
      "Microinyecciones de vitaminas, minerales y factores de crecimiento directamente en el cuero cabelludo para frenar la caída y activar los folículos.",
  },
  {
    id: "reduccion-corporal",
    title: "Contorno y firmeza corporal",
    treatment: "Criolipólisis + Radiofrecuencia",
    zone: "Muslos y glúteos",
    category: "corporal",
    image: `${BASE}/photo-1518611012118-696072aa579a?w=700&h=900&fit=crop&crop=center`,
    description:
      "Protocolo combinado de criolipólisis para eliminar grasa y radiofrecuencia para tensar la piel. Resultados progresivos y duraderos sin tiempo de recuperación.",
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
