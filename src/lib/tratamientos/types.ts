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

export interface Tratamiento {
  slug: string;
  categoria: CategoriaTratamiento;
  nombre: string;
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
