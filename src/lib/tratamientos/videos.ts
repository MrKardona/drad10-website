// Clips reales de la clínica por tratamiento, recortados de los videos de marketing.
// Procedimiento: sin audio, en bucle. Testimonio: con voz del paciente.
export interface ClipTratamiento {
  src: string;
  poster: string;
  tipo: "procedimiento" | "testimonio";
  duracion: number;
  sonido: boolean;
}

export const videosPorTratamiento: Record<string, ClipTratamiento[]> = {
  "acido-hialuronico": [
    {
      src: "/videos/clips/acido-hialuronico/procedimiento-1.mp4",
      poster: "/videos/clips/acido-hialuronico/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 20,
      sonido: false
    },
    {
      src: "/videos/clips/acido-hialuronico/procedimiento-2.mp4",
      poster: "/videos/clips/acido-hialuronico/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 5,
      sonido: false
    },
    {
      src: "/videos/clips/acido-hialuronico/procedimiento-3.mp4",
      poster: "/videos/clips/acido-hialuronico/procedimiento-3.jpg",
      tipo: "procedimiento",
      duracion: 6,
      sonido: false
    },
    {
      src: "/videos/clips/acido-hialuronico/procedimiento-4.mp4",
      poster: "/videos/clips/acido-hialuronico/procedimiento-4.jpg",
      tipo: "procedimiento",
      duracion: 6,
      sonido: false
    },
    {
      src: "/videos/clips/acido-hialuronico/testimonio-5.mp4",
      poster: "/videos/clips/acido-hialuronico/testimonio-5.jpg",
      tipo: "testimonio",
      duracion: 19,
      sonido: true
    }
  ],
  alectomia: [
    {
      src: "/videos/clips/alectomia/procedimiento-1.mp4",
      poster: "/videos/clips/alectomia/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 10,
      sonido: false
    },
    {
      src: "/videos/clips/alectomia/procedimiento-2.mp4",
      poster: "/videos/clips/alectomia/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 16,
      sonido: false
    }
  ],
  botox: [
    {
      src: "/videos/clips/botox/procedimiento-1.mp4",
      poster: "/videos/clips/botox/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 6,
      sonido: false
    },
    {
      src: "/videos/clips/botox/procedimiento-2.mp4",
      poster: "/videos/clips/botox/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 4,
      sonido: false
    },
    {
      src: "/videos/clips/botox/procedimiento-3.mp4",
      poster: "/videos/clips/botox/procedimiento-3.jpg",
      tipo: "procedimiento",
      duracion: 7,
      sonido: false
    }
  ],
  hydrafacial: [
    {
      src: "/videos/clips/hydrafacial/procedimiento-1.mp4",
      poster: "/videos/clips/hydrafacial/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 30,
      sonido: true
    }
  ],
  "implante-capilar-fue": [
    {
      src: "/videos/clips/implante-capilar-fue/procedimiento-1.mp4",
      poster: "/videos/clips/implante-capilar-fue/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 38,
      sonido: true
    },
    {
      src: "/videos/clips/implante-capilar-fue/procedimiento-2.mp4",
      poster: "/videos/clips/implante-capilar-fue/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 23,
      sonido: true
    }
  ],
  "indiba-capilar": [
    {
      src: "/videos/clips/indiba-capilar/procedimiento-1.mp4",
      poster: "/videos/clips/indiba-capilar/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 60,
      sonido: true
    }
  ],
  "limpieza-facial": [
    {
      src: "/videos/clips/limpieza-facial/procedimiento-1.mp4",
      poster: "/videos/clips/limpieza-facial/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 14,
      sonido: false
    },
    {
      src: "/videos/clips/limpieza-facial/procedimiento-2.mp4",
      poster: "/videos/clips/limpieza-facial/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 20,
      sonido: false
    },
    {
      src: "/videos/clips/limpieza-facial/procedimiento-3.mp4",
      poster: "/videos/clips/limpieza-facial/procedimiento-3.jpg",
      tipo: "procedimiento",
      duracion: 9,
      sonido: false
    },
    {
      src: "/videos/clips/limpieza-facial/procedimiento-4.mp4",
      poster: "/videos/clips/limpieza-facial/procedimiento-4.jpg",
      tipo: "procedimiento",
      duracion: 14,
      sonido: false
    },
    {
      src: "/videos/clips/limpieza-facial/procedimiento-5.mp4",
      poster: "/videos/clips/limpieza-facial/procedimiento-5.jpg",
      tipo: "procedimiento",
      duracion: 25,
      sonido: false
    },
    {
      src: "/videos/clips/limpieza-facial/testimonio-6.mp4",
      poster: "/videos/clips/limpieza-facial/testimonio-6.jpg",
      tipo: "testimonio",
      duracion: 19,
      sonido: true
    }
  ],
  "long-lasting": [
    {
      src: "/videos/clips/long-lasting/procedimiento-1.mp4",
      poster: "/videos/clips/long-lasting/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 22,
      sonido: true
    }
  ],
  "mesoterapia-capilar": [
    {
      src: "/videos/clips/mesoterapia-capilar/procedimiento-1.mp4",
      poster: "/videos/clips/mesoterapia-capilar/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 20,
      sonido: false
    },
    {
      src: "/videos/clips/mesoterapia-capilar/procedimiento-2.mp4",
      poster: "/videos/clips/mesoterapia-capilar/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 6,
      sonido: false
    },
    {
      src: "/videos/clips/mesoterapia-capilar/procedimiento-3.mp4",
      poster: "/videos/clips/mesoterapia-capilar/procedimiento-3.jpg",
      tipo: "procedimiento",
      duracion: 7,
      sonido: false
    },
    {
      src: "/videos/clips/mesoterapia-capilar/procedimiento-4.mp4",
      poster: "/videos/clips/mesoterapia-capilar/procedimiento-4.jpg",
      tipo: "procedimiento",
      duracion: 8,
      sonido: false
    },
    {
      src: "/videos/clips/mesoterapia-capilar/procedimiento-5.mp4",
      poster: "/videos/clips/mesoterapia-capilar/procedimiento-5.jpg",
      tipo: "procedimiento",
      duracion: 30,
      sonido: true
    }
  ],
  "moldeamiento-corporal": [
    {
      src: "/videos/clips/moldeamiento-corporal/procedimiento-1.mp4",
      poster: "/videos/clips/moldeamiento-corporal/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 25,
      sonido: false
    }
  ],
  "perfilado-mandibular": [
    {
      src: "/videos/clips/perfilado-mandibular/procedimiento-1.mp4",
      poster: "/videos/clips/perfilado-mandibular/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 33,
      sonido: true
    },
    {
      src: "/videos/clips/perfilado-mandibular/procedimiento-2.mp4",
      poster: "/videos/clips/perfilado-mandibular/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 16,
      sonido: true
    }
  ],
  "prp-capilar": [
    {
      src: "/videos/clips/prp-capilar/procedimiento-1.mp4",
      poster: "/videos/clips/prp-capilar/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 20,
      sonido: false
    },
    {
      src: "/videos/clips/prp-capilar/procedimiento-2.mp4",
      poster: "/videos/clips/prp-capilar/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 20,
      sonido: false
    },
    {
      src: "/videos/clips/prp-capilar/procedimiento-3.mp4",
      poster: "/videos/clips/prp-capilar/procedimiento-3.jpg",
      tipo: "procedimiento",
      duracion: 2,
      sonido: false
    },
    {
      src: "/videos/clips/prp-capilar/procedimiento-4.mp4",
      poster: "/videos/clips/prp-capilar/procedimiento-4.jpg",
      tipo: "procedimiento",
      duracion: 3,
      sonido: false
    },
    {
      src: "/videos/clips/prp-capilar/testimonio-5.mp4",
      poster: "/videos/clips/prp-capilar/testimonio-5.jpg",
      tipo: "testimonio",
      duracion: 24,
      sonido: true
    }
  ],
  "relleno-de-labios": [
    {
      src: "/videos/clips/relleno-de-labios/procedimiento-1.mp4",
      poster: "/videos/clips/relleno-de-labios/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 19,
      sonido: false
    },
    {
      src: "/videos/clips/relleno-de-labios/procedimiento-2.mp4",
      poster: "/videos/clips/relleno-de-labios/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 8,
      sonido: false
    },
    {
      src: "/videos/clips/relleno-de-labios/procedimiento-3.mp4",
      poster: "/videos/clips/relleno-de-labios/procedimiento-3.jpg",
      tipo: "procedimiento",
      duracion: 9,
      sonido: false
    },
    {
      src: "/videos/clips/relleno-de-labios/procedimiento-4.mp4",
      poster: "/videos/clips/relleno-de-labios/procedimiento-4.jpg",
      tipo: "procedimiento",
      duracion: 16,
      sonido: true
    },
    {
      src: "/videos/clips/relleno-de-labios/procedimiento-5.mp4",
      poster: "/videos/clips/relleno-de-labios/procedimiento-5.jpg",
      tipo: "procedimiento",
      duracion: 27,
      sonido: true
    },
    {
      src: "/videos/clips/relleno-de-labios/testimonio-6.mp4",
      poster: "/videos/clips/relleno-de-labios/testimonio-6.jpg",
      tipo: "testimonio",
      duracion: 18,
      sonido: true
    }
  ],
  rinomodelacion: [
    {
      src: "/videos/clips/rinomodelacion/procedimiento-1.mp4",
      poster: "/videos/clips/rinomodelacion/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 13,
      sonido: false
    },
    {
      src: "/videos/clips/rinomodelacion/procedimiento-2.mp4",
      poster: "/videos/clips/rinomodelacion/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 34,
      sonido: true
    },
    {
      src: "/videos/clips/rinomodelacion/procedimiento-3.mp4",
      poster: "/videos/clips/rinomodelacion/procedimiento-3.jpg",
      tipo: "procedimiento",
      duracion: 13,
      sonido: false
    },
    {
      src: "/videos/clips/rinomodelacion/procedimiento-4.mp4",
      poster: "/videos/clips/rinomodelacion/procedimiento-4.jpg",
      tipo: "procedimiento",
      duracion: 17,
      sonido: false
    },
    {
      src: "/videos/clips/rinomodelacion/procedimiento-5.mp4",
      poster: "/videos/clips/rinomodelacion/procedimiento-5.jpg",
      tipo: "procedimiento",
      duracion: 20,
      sonido: false
    },
    {
      src: "/videos/clips/rinomodelacion/procedimiento-6.mp4",
      poster: "/videos/clips/rinomodelacion/procedimiento-6.jpg",
      tipo: "procedimiento",
      duracion: 20,
      sonido: false
    },
    {
      src: "/videos/clips/rinomodelacion/testimonio-7.mp4",
      poster: "/videos/clips/rinomodelacion/testimonio-7.jpg",
      tipo: "testimonio",
      duracion: 17,
      sonido: true
    },
    {
      src: "/videos/clips/rinomodelacion/testimonio-8.mp4",
      poster: "/videos/clips/rinomodelacion/testimonio-8.jpg",
      tipo: "testimonio",
      duracion: 35,
      sonido: true
    },
    {
      src: "/videos/clips/rinomodelacion/testimonio-9.mp4",
      poster: "/videos/clips/rinomodelacion/testimonio-9.jpg",
      tipo: "testimonio",
      duracion: 25,
      sonido: true
    }
  ],
  skinbooster: [
    {
      src: "/videos/clips/skinbooster/procedimiento-1.mp4",
      poster: "/videos/clips/skinbooster/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 26,
      sonido: true
    },
    {
      src: "/videos/clips/skinbooster/procedimiento-2.mp4",
      poster: "/videos/clips/skinbooster/procedimiento-2.jpg",
      tipo: "procedimiento",
      duracion: 31,
      sonido: true
    }
  ],
  "trasplante-de-barba": [
    {
      src: "/videos/clips/trasplante-de-barba/procedimiento-1.mp4",
      poster: "/videos/clips/trasplante-de-barba/procedimiento-1.jpg",
      tipo: "procedimiento",
      duracion: 11,
      sonido: false
    },
    {
      src: "/videos/clips/trasplante-de-barba/testimonio-2.mp4",
      poster: "/videos/clips/trasplante-de-barba/testimonio-2.jpg",
      tipo: "testimonio",
      duracion: 28,
      sonido: true
    }
  ]
};
