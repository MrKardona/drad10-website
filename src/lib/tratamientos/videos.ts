// Clips reales de la clínica por tratamiento, recortados de los videos de marketing.
// Procedimiento: sin audio, en bucle. Testimonio y educativo: con sonido, al tocar.
export interface ClipTratamiento {
  src: string;
  poster: string;
  tipo: "procedimiento" | "testimonio" | "educativo";
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
    },
    {
      src: "/videos/clips/alectomia/educativo-1.mp4",
      poster: "/videos/clips/alectomia/educativo-1.jpg",
      tipo: "educativo",
      duracion: 28,
      sonido: true
    },
    {
      src: "/videos/clips/alectomia/educativo-2.mp4",
      poster: "/videos/clips/alectomia/educativo-2.jpg",
      tipo: "educativo",
      duracion: 37,
      sonido: true
    },
    {
      src: "/videos/clips/alectomia/educativo-3.mp4",
      poster: "/videos/clips/alectomia/educativo-3.jpg",
      tipo: "educativo",
      duracion: 43,
      sonido: true
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
    },
    {
      src: "/videos/clips/botox/educativo-1.mp4",
      poster: "/videos/clips/botox/educativo-1.jpg",
      tipo: "educativo",
      duracion: 25,
      sonido: true
    },
    {
      src: "/videos/clips/botox/educativo-2.mp4",
      poster: "/videos/clips/botox/educativo-2.jpg",
      tipo: "educativo",
      duracion: 40,
      sonido: true
    },
    {
      src: "/videos/clips/botox/educativo-3.mp4",
      poster: "/videos/clips/botox/educativo-3.jpg",
      tipo: "educativo",
      duracion: 57,
      sonido: true
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
    },
    {
      src: "/videos/clips/implante-capilar-fue/educativo-1.mp4",
      poster: "/videos/clips/implante-capilar-fue/educativo-1.jpg",
      tipo: "educativo",
      duracion: 11,
      sonido: true
    },
    {
      src: "/videos/clips/implante-capilar-fue/educativo-2.mp4",
      poster: "/videos/clips/implante-capilar-fue/educativo-2.jpg",
      tipo: "educativo",
      duracion: 55,
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
    },
    {
      src: "/videos/clips/indiba-capilar/educativo-1.mp4",
      poster: "/videos/clips/indiba-capilar/educativo-1.jpg",
      tipo: "educativo",
      duracion: 39,
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
    },
    {
      src: "/videos/clips/long-lasting/educativo-1.mp4",
      poster: "/videos/clips/long-lasting/educativo-1.jpg",
      tipo: "educativo",
      duracion: 29,
      sonido: true
    },
    {
      src: "/videos/clips/long-lasting/educativo-2.mp4",
      poster: "/videos/clips/long-lasting/educativo-2.jpg",
      tipo: "educativo",
      duracion: 29,
      sonido: true
    },
    {
      src: "/videos/clips/long-lasting/educativo-3.mp4",
      poster: "/videos/clips/long-lasting/educativo-3.jpg",
      tipo: "educativo",
      duracion: 59,
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
    },
    {
      src: "/videos/clips/mesoterapia-capilar/educativo-1.mp4",
      poster: "/videos/clips/mesoterapia-capilar/educativo-1.jpg",
      tipo: "educativo",
      duracion: 28,
      sonido: true
    },
    {
      src: "/videos/clips/mesoterapia-capilar/educativo-2.mp4",
      poster: "/videos/clips/mesoterapia-capilar/educativo-2.jpg",
      tipo: "educativo",
      duracion: 32,
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
    },
    {
      src: "/videos/clips/moldeamiento-corporal/educativo-1.mp4",
      poster: "/videos/clips/moldeamiento-corporal/educativo-1.jpg",
      tipo: "educativo",
      duracion: 38,
      sonido: true
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
    },
    {
      src: "/videos/clips/perfilado-mandibular/educativo-1.mp4",
      poster: "/videos/clips/perfilado-mandibular/educativo-1.jpg",
      tipo: "educativo",
      duracion: 18,
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
      src: "/videos/clips/prp-capilar/educativo-1.mp4",
      poster: "/videos/clips/prp-capilar/educativo-1.jpg",
      tipo: "educativo",
      duracion: 40,
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
      src: "/videos/clips/relleno-de-labios/educativo-1.mp4",
      poster: "/videos/clips/relleno-de-labios/educativo-1.jpg",
      tipo: "educativo",
      duracion: 21,
      sonido: true
    },
    {
      src: "/videos/clips/relleno-de-labios/educativo-2.mp4",
      poster: "/videos/clips/relleno-de-labios/educativo-2.jpg",
      tipo: "educativo",
      duracion: 34,
      sonido: true
    },
    {
      src: "/videos/clips/relleno-de-labios/educativo-3.mp4",
      poster: "/videos/clips/relleno-de-labios/educativo-3.jpg",
      tipo: "educativo",
      duracion: 41,
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
    },
    {
      src: "/videos/clips/skinbooster/educativo-1.mp4",
      poster: "/videos/clips/skinbooster/educativo-1.jpg",
      tipo: "educativo",
      duracion: 24,
      sonido: true
    },
    {
      src: "/videos/clips/skinbooster/educativo-2.mp4",
      poster: "/videos/clips/skinbooster/educativo-2.jpg",
      tipo: "educativo",
      duracion: 40,
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
    }
  ],
  "rejuvenecimiento-vaginal": [
    {
      src: "/videos/clips/rejuvenecimiento-vaginal/educativo-1.mp4",
      poster: "/videos/clips/rejuvenecimiento-vaginal/educativo-1.jpg",
      tipo: "educativo",
      duracion: 15,
      sonido: true
    }
  ],
  sculptra: [
    {
      src: "/videos/clips/sculptra/educativo-1.mp4",
      poster: "/videos/clips/sculptra/educativo-1.jpg",
      tipo: "educativo",
      duracion: 19,
      sonido: true
    },
    {
      src: "/videos/clips/sculptra/educativo-2.mp4",
      poster: "/videos/clips/sculptra/educativo-2.jpg",
      tipo: "educativo",
      duracion: 28,
      sonido: true
    },
    {
      src: "/videos/clips/sculptra/educativo-3.mp4",
      poster: "/videos/clips/sculptra/educativo-3.jpg",
      tipo: "educativo",
      duracion: 60,
      sonido: true
    }
  ],
  sueroterapia: [
    {
      src: "/videos/clips/sueroterapia/educativo-1.mp4",
      poster: "/videos/clips/sueroterapia/educativo-1.jpg",
      tipo: "educativo",
      duracion: 30,
      sonido: true
    }
  ],
  celulitis: [
    {
      src: "/videos/clips/celulitis/educativo-1.mp4",
      poster: "/videos/clips/celulitis/educativo-1.jpg",
      tipo: "educativo",
      duracion: 42,
      sonido: true
    }
  ]
};
