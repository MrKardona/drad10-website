export type CategoriaTratamiento =
  | "faciales"
  | "corporales"
  | "capilares"
  | "zona-intima";

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
  nombre: string;
  /** Imágenes propias. Opcional: sin ellas la página cae al diseño sin foto. */
  imagenes?: ImagenesTratamiento;
  /** Secuencia de frames atada al scroll. Omitir para no mostrarla. */
  secuencia?: SecuenciaScroll;
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
    incluye: string[];
    nota?: string;
  };
  faq: FaqItem[];
  /** Texto prellenado para el link de WhatsApp (sin encodear) */
  waMensaje: string;
}
