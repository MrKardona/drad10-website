// Reseñas y testimonios reales de Clínica Quantum. Nunca se inventan: las de
// Google salen del perfil público; las de "clinica", del portafolio oficial.

export interface Review {
  name: string;
  /** Fecha visible. Solo cuando la fuente la aporta; nunca se inventa. */
  date?: string;
  rating: number;
  text: string;
  /**
   * google: reseña del perfil de Google (lleva el logo).
   * clinica: testimonio publicado en el portafolio oficial de la clínica.
   */
  fuente: "google" | "clinica";
}

// ─── Reseñas reales del perfil de Google (Clínica Quantum) ─────────────────
export const reviews: Review[] = [
  {
    name: "Camilo López Posada",
    date: "Hace 8 meses",
    rating: 5,
    text: "La mejor clínica, una atención demasiado increíble, muy buen equipo de trabajo (altamente capacitado) y estoy muy feliz con mi proceso. SUPER RECOMENDADO.",
    fuente: "google",
  },
  {
    name: "Karen Siachoque",
    date: "Hace 3 meses",
    rating: 5,
    text: "Mi experiencia en la clínica Quantum fue increíble. Destaco la calidad humana de todo el equipo, su paciencia y el amor con el que tratan a cada persona. Realmente hacen sentir confianza y bienestar desde el primer momento. ¡Totalmente recomendado!",
    fuente: "google",
  },
  {
    name: "Manuela Gomez",
    date: "Hace 3 meses",
    rating: 5,
    text: "La atención es increíble, se siente súper cálida y familiar. Todo el equipo es muy atento y hace que uno se sienta en confianza desde el primer momento. Se nota el amor y la dedicación en lo que hacen. ¡Súper recomendada! La Dra Daniela es una crack! 😍",
    fuente: "google",
  },
  {
    name: "Antonia Aguirre",
    date: "Hace un año",
    rating: 5,
    text: "La experiencia fue INCREÍBLE, la atención me encantó. El precio fue super bueno para todo lo que me hicieron. Manejan super buena tecnología, son innovadores y tienen la mejor calidad. Son tan buenos que me voy a traer a mi hermana y a mi novio porque la verdad SUPER recomendado.",
    fuente: "google",
  },
  {
    name: "Catalina Serra",
    date: "Hace 2 años",
    rating: 5,
    text: "Es muy profesional en la asesoría de cada procedimiento a realizar en sus pacientes de acuerdo a sus necesidades estéticas, y mezclado con su calidez en el trato hace que la Dra tenga asertividad al ejercer sus labores médicas.",
    fuente: "google",
  },
  // Testimonios del portafolio comercial oficial de Clínica Quantum.
  {
    name: "Yuliana S.",
    rating: 5,
    text: "Tienen excelente asesoría, su conocimiento es de los mejores y la calidad humana, estupenda.",
    fuente: "clinica",
  },
  {
    name: "César O.",
    rating: 5,
    text: "Excelente atención, muy cordiales y amables. He notado mucha mejoría con la mesoterapia capilar. 100% recomendado.",
    fuente: "clinica",
  },
  {
    name: "Livaana V.",
    rating: 5,
    text: "Hace mucho no recibía una atención tan bonita. Me sentí atendida, querida y cuidada. Una experiencia maravillosa.",
    fuente: "clinica",
  },
  {
    name: "Rosellyi R.",
    rating: 5,
    text: "La Dra. Daniela fue muy profesional en todas sus indicaciones y los resultados superaron mis expectativas. Recomendado.",
    fuente: "clinica",
  },
];

export const GOOGLE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = 266;
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/dtwj4zv9ayygTz8NA";
