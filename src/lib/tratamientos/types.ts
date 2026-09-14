export type CategoriaTratamiento =
  | "faciales"
  | "corporales"
  | "capilares"
  | "zona-intima"
  | "bienestar"
  | "quirurgicos";

/** Una línea de la tabla de precios del portafolio. valor null = "a valoración". */
export interface OpcionPrecio {
  label: string;
  detalle?: string;
  valor: number | null;
}

/** Datos rápidos que el paciente busca antes de decidir. Rangos orientativos. */
export interface FichaRapida {
  /** Duración de la sesión, p. ej. "30 a 45 min". */
  duracion: string;
  /** Número de sesiones habitual, p. ej. "1 sesión" o "4 a 6 sesiones". */
  sesiones: string;
  /** Tiempo de recuperación, p. ej. "Retomas tu rutina el mismo día". */
  recuperacion: string;
  /** Cuándo se notan y cuánto duran los resultados. */
  resultados: string;
}

export interface ParaQuien {
  /** Perfiles o motivos para los que el tratamiento está indicado. */
  ideal: string[];
  /** Casos en los que no es lo indicado o hay que valorar antes. */
  noIdeal: string[];
}

export interface Cuidados {
  antes: string[];
  despues: string[];
}

export interface ZonaBeneficio {
  icon: string;
  label: string;
  desc: string;
}

export interface Paso {
  num: string;
  title: string;
  desc: string;
  detail: string;
}

export interface PuntoSeguridad {
  num: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ImagenesTratamiento {
  /** Fondo del hero a pantalla completa — 16:9. La doctora en contexto. */
  hero: string;
  /** Apoyo de la sección "qué es" — 3:2. */
  queEs?: string;
  /** Una por paso, en el mismo orden que `pasos`. Macros del procedimiento. */
  pasos?: string[];
  /** Retrato vertical junto al CTA de cierre — 3:4. */
  cierre?: string;
  /** Imagen de resultado o estilo de vida — 4:5. */
  resultado?: string;
  /** Video corto en bucle para la portada (mp4, sin audio). */
  video?: string;
}
export interface SecuenciaScroll {
  /** Carpeta bajo /frames con los sets d/ y m/. */
  dir: string;
  /** Número de frames del set. */
  frameCount: number;
  /** Alto de la sección en vh: a más alto, más lento avanza. */
  alturaVh?: number;
  badge?: string;
  frase?: string;
}
export interface Tratamiento {
  slug: string;
  categoria: CategoriaTratamiento;
  /** Subgrupo del menú, p. ej. "Ácido hialurónico" o "Contorno corporal". */
  grupo?: string;
  nombre: string;
  ficha?: FichaRapida;
  paraQuien?: ParaQuien;
  cuidados?: Cuidados;
  /** Slugs de otros tratamientos que complementan este. */
  relacionados?: string[];
  /** Imágenes propias. Opcional: sin ellas la página cae al diseño sin foto. */
  imagenes?: ImagenesTratamiento;
  /** Secuencia de frames atada al scroll. Omitir para no mostrarla. */
  secuencia?: SecuenciaScroll;
  /** IDs de casos reales de gallery-data.ts que se muestran en esta página. */
  resultados?: string[];
  /** Título e intro del hero */
  hero: {
    eyebrow: string;
    /** Parte del título en color claro */
    titulo: string;
    /** Parte del título en dorado itálico */
    tituloEm: string;
    sub: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  problema: {
    titulo: string;
    parrafos: string[];
  };
  queEs: {
    titulo: string;
    desc: string;
  };
  /** Beneficios rápidos escaneables (chips bajo el hero), 4-6 items */
  beneficios: string[];
  /** ID de video de YouTube educativo (opcional, youtube-nocookie) */
  videoId?: string;
  /** Zonas tratadas o beneficios concretos */
  zonasTitulo: string;
  zonas: ZonaBeneficio[];
  pasos: Paso[];
  /** Protocolo de seguridad — el corazón de la página */
  seguridad: PuntoSeguridad[];
  precio: {
    /** COP. null = mostrar "precio personalizado en valoración" */
    desde: number | null;
    /** Tabla de opciones con su valor. La primera se destaca. */
    opciones?: OpcionPrecio[];
    incluye: string[];
    nota?: string;
  };
  faq: FaqItem[];
  /** Texto prellenado para el link de WhatsApp (sin encodear) */
  waMensaje: string;
}
