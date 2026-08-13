import type { Tratamiento } from "./types";

export const corporales: Tratamiento[] = [
  // ── Moldeamiento Corporal / INDIBA ───────────────────────────────────────
  {
    slug: "moldeamiento-corporal",
    categoria: "corporales",
    nombre: "Moldeamiento Corporal INDIBA",
    hero: {
      eyebrow: "INDIBA ACTIV · RADIOFRECUENCIA",
      titulo: "Moldea tu cuerpo,",
      tituloEm: "sin bisturí ni incapacidad",
      sub: "Radiofrecuencia INDIBA de grado médico para reducir grasa localizada, reafirmar tejido y definir contornos. Tecnología con respaldo científico, resultados desde la primera sesión.",
    },
    seo: {
      title: "Moldeamiento Corporal en Medellín | INDIBA — DRA.D10",
      description:
        "Moldeamiento corporal con radiofrecuencia INDIBA en El Poblado, Medellín. Grasa localizada, flacidez y definición sin cirugía. Valoración gratuita.",
      keywords: [
        "moldeamiento corporal medellín",
        "indiba medellín",
        "radiofrecuencia corporal medellín",
        "reducción de grasa sin cirugía",
        "tratamiento flacidez medellín",
      ],
    },
    problema: {
      titulo: "Hay zonas que la dieta y el gimnasio no alcanzan",
      parrafos: [
        "Abdomen bajo, flancos, brazos, papada: grasa localizada y flacidez que persisten aunque entrenes y comas bien. Es frustrante — y la cirugía no debería ser la única salida.",
        "La radiofrecuencia médica actúa exactamente ahí: estimula el tejido desde adentro, moviliza grasa localizada y activa la producción de colágeno, sin agujas, sin quirófano y sin pausar tu vida.",
      ],
    },
    queEs: {
      titulo: "Qué es INDIBA Activ",
      desc: "INDIBA es una tecnología española de radiofrecuencia a 448 kHz con más de 35 años de investigación clínica. Genera calor controlado en profundidad que acelera el metabolismo celular: reduce adiposidad localizada, reafirma la piel y mejora la circulación. Es la misma tecnología que usan deportistas de élite para recuperación.",
    },
    beneficios: ["Sin cirugía ni agujas", "Sin incapacidad", "Resultados desde la 1ª sesión", "Tecnología INDIBA original", "Compatible con tu rutina"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "▭", label: "Abdomen", desc: "Grasa localizada y flacidez post-embarazo o post-descenso de peso." },
      { icon: "◠", label: "Flancos", desc: "Los 'rollitos' laterales que deforman la silueta." },
      { icon: "∪", label: "Glúteos y piernas", desc: "Reafirmación, celulitis y definición." },
      { icon: "▽", label: "Brazos", desc: "Flacidez interna del brazo." },
      { icon: "◡", label: "Papada", desc: "Definición del óvalo facial y cuello." },
      { icon: "✚", label: "Post-quirúrgicos", desc: "Acelera recuperación y mejora resultados de cirugías." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración corporal",
        desc: "Evaluamos las zonas, el estado del tejido y tus objetivos. Definimos el número de sesiones realista para tu caso — sin prometer imposibles.",
        detail: "~30 min · Gratuita",
      },
      {
        num: "02",
        title: "Sesiones INDIBA",
        desc: "Sesión cómoda, tipo masaje con calor agradable. Sin dolor, sin agujas, sin incapacidad: sales y sigues tu día normal.",
        detail: "45–60 min por zona · 1–2 veces/semana",
      },
      {
        num: "03",
        title: "Resultados progresivos",
        desc: "Mejora visible desde las primeras sesiones; el resultado se consolida con el plan completo y hábitos de apoyo que te guiamos.",
        detail: "Plan típico: 6–10 sesiones",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Tecnología original certificada",
        desc: "Equipo INDIBA original — no imitaciones genéricas de radiofrecuencia. La clínica está certificada en el método y la Dra. Díez supervisa cada protocolo.",
      },
      {
        num: "02",
        title: "Sin cirugía, sin anestesia, sin incapacidad",
        desc: "Es un tratamiento no invasivo con décadas de evidencia. El riesgo de una liposucción no tiene comparación con una sesión de radiofrecuencia.",
      },
      {
        num: "03",
        title: "Expectativas honestas",
        desc: "INDIBA moldea y reafirma — no reemplaza un descenso de peso importante. En la valoración te decimos con franqueza qué resultados puedes esperar y cuáles no.",
      },
      {
        num: "04",
        title: "Protocolo supervisado por médica",
        desc: "Cada plan lo diseña y supervisa la Dra. Daniela. Si tu caso necesita otro enfoque (nutricional, médico), te lo decimos de frente.",
      },
    ],
    precio: {
      desde: null,
      incluye: [
        "Valoración corporal completa",
        "Sesión con equipo INDIBA original",
        "Plan personalizado por zonas",
        "Guía de hábitos de apoyo",
      ],
      nota: "Planes por paquetes de sesiones con mejor tarifa.",
    },
    faq: [
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Depende de la zona y el objetivo: planes típicos van de 6 a 10 sesiones. En la valoración te damos un número realista, no un gancho comercial.",
      },
      {
        q: "¿Duele o tiene incapacidad?",
        a: "No. La sesión se siente como un masaje con calor agradable. Sales y continúas tu día — puedes incluso entrenar.",
      },
      {
        q: "¿Cuándo veo resultados?",
        a: "Muchos pacientes notan la piel más firme desde las primeras sesiones. Los cambios de contorno se consolidan a lo largo del plan.",
      },
      {
        q: "¿Sirve para adelgazar?",
        a: "INDIBA reduce grasa localizada y reafirma — no es un tratamiento de pérdida de peso. Si tu objetivo es bajar kilos, tenemos un programa médico de descenso de peso que se puede combinar.",
      },
      {
        q: "¿Es seguro?",
        a: "Es de las tecnologías estéticas con más respaldo científico que existen (448 kHz, +35 años de estudios). No invasiva y operada bajo protocolo médico.",
      },
    ],
    waMensaje: "Hola, me interesa una valoración gratuita para Moldeamiento Corporal con INDIBA",
  },

  // ── Descenso de Peso ─────────────────────────────────────────────────────
  {
    slug: "descenso-de-peso",
    categoria: "corporales",
    nombre: "Descenso de Peso Médico",
    hero: {
      eyebrow: "PROGRAMA MÉDICO SUPERVISADO",
      titulo: "Baja de peso con ciencia,",
      tituloEm: "no con dietas de moda",
      sub: "Programa de descenso de peso diseñado y supervisado por médica: evaluación completa, plan personalizado y — cuando está indicado — medicación de última generación con seguimiento real.",
    },
    seo: {
      title: "Descenso de Peso Médico en Medellín | DRA.D10",
      description:
        "Programa médico de descenso de peso en El Poblado, Medellín. Evaluación completa, plan personalizado y seguimiento profesional. Valoración gratuita.",
      keywords: [
        "descenso de peso medellín",
        "bajar de peso con médico",
        "tratamiento obesidad medellín",
        "medicamentos para bajar de peso medellín",
        "programa pérdida de peso el poblado",
      ],
    },
    problema: {
      titulo: "Has intentado de todo — y el peso vuelve",
      parrafos: [
        "Dietas restrictivas, retos de gimnasio, pastillas 'naturales' compradas por internet: la mayoría fracasa porque no ataca la raíz metabólica y hormonal del problema, y nadie te acompaña en el proceso.",
        "Hoy existen herramientas médicas de última generación para el manejo del peso — pero mal usadas o auto-recetadas son un riesgo real. La diferencia está en quién te evalúa, te prescribe y te acompaña.",
      ],
    },
    queEs: {
      titulo: "Qué es nuestro programa de descenso de peso",
      desc: "Un programa médico integral: historia clínica y evaluación completa, metas realistas por etapas, plan de alimentación alcanzable, y — solo cuando está médicamente indicado — apoyo farmacológico de última generación con prescripción y seguimiento. No vendemos medicamentos: diseñamos procesos que funcionan y se sostienen.",
    },
    beneficios: ["Supervisión médica real", "Plan 100% personalizado", "Medicación solo si está indicada", "Seguimiento continuo", "Metas sostenibles"],
    zonasTitulo: "Qué incluye el enfoque",
    zonas: [
      { icon: "⚕", label: "Evaluación médica", desc: "Historia clínica, medidas, y paraclínicos si se requieren." },
      { icon: "◔", label: "Plan alimentario", desc: "Realista y adaptado a tu vida — no dietas imposibles." },
      { icon: "▤", label: "Apoyo farmacológico", desc: "Medicación de última generación solo si está indicada, con prescripción médica." },
      { icon: "↻", label: "Seguimiento", desc: "Controles periódicos para ajustar y sostener el proceso." },
      { icon: "◠", label: "Moldeamiento", desc: "INDIBA para reafirmar la piel durante el descenso." },
    ],
    pasos: [
      {
        num: "01",
        title: "Evaluación inicial completa",
        desc: "Historia clínica, composición corporal, hábitos y antecedentes. Definimos si eres candidata a apoyo farmacológico o si tu plan va por otro camino.",
        detail: "Primera consulta médica",
      },
      {
        num: "02",
        title: "Plan personalizado",
        desc: "Metas por etapas, plan de alimentación alcanzable y, si está indicado, prescripción médica con explicación completa de beneficios y efectos.",
        detail: "Plan por escrito",
      },
      {
        num: "03",
        title: "Seguimiento y ajuste",
        desc: "Controles periódicos: se ajusta la estrategia según tu progreso real. El objetivo no es solo bajar — es sostener el resultado.",
        detail: "Acompañamiento continuo",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Prescripción médica real",
        desc: "Los medicamentos para el peso son herramientas serias con indicaciones y contraindicaciones. Aquí los prescribe y supervisa una médica — nunca automedicación ni venta libre.",
      },
      {
        num: "02",
        title: "No todos los medicamentos son iguales",
        desc: "Evaluamos cuál molécula — si alguna — es la adecuada para tu caso, tu historia y tus objetivos. Lo barato o lo de moda no siempre es lo indicado.",
      },
      {
        num: "03",
        title: "Metas realistas, proceso sostenible",
        desc: "No prometemos '10 kilos en un mes'. Prometemos un proceso serio con resultados que se mantienen, a un ritmo saludable.",
      },
      {
        num: "04",
        title: "Acompañamiento de verdad",
        desc: "No te entregamos una fórmula y adiós: hay controles, ajustes y una médica disponible durante todo tu proceso.",
      },
    ],
    precio: {
      desde: null,
      incluye: [
        "Evaluación médica inicial completa",
        "Plan personalizado por escrito",
        "Controles de seguimiento",
        "Acceso a combinar con INDIBA para flacidez",
      ],
    },
    faq: [
      {
        q: "¿Usan medicamentos como Ozempic o Mounjaro?",
        a: "Trabajamos con medicación de última generación cuando está médicamente indicada, con prescripción y seguimiento. Cuál molécula, a qué dosis y si eres candidata se define en la evaluación — no antes.",
      },
      {
        q: "¿Cuánto peso puedo bajar?",
        a: "Depende de tu punto de partida, adherencia y respuesta. En la primera consulta definimos metas realistas por etapas — desconfía de quien te prometa cifras exactas.",
      },
      {
        q: "¿Los medicamentos tienen efectos secundarios?",
        a: "Pueden tenerlos, como todo medicamento — por eso la evaluación previa y el seguimiento son innegociables. Te explicamos todo antes de empezar y ajustamos si algo no va bien.",
      },
      {
        q: "¿Qué pasa cuando termine el programa?",
        a: "El programa incluye la fase de mantenimiento: hábitos, controles espaciados y estrategia para no recuperar lo perdido.",
      },
      {
        q: "¿Y la piel flácida después de bajar?",
        a: "Lo anticipamos: el programa se puede combinar con radiofrecuencia INDIBA para reafirmar el tejido mientras bajas de peso.",
      },
    ],
    waMensaje: "Hola, me interesa una valoración para el programa médico de Descenso de Peso",
  },
];
