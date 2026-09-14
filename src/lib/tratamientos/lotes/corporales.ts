import type { Tratamiento } from "../types";

// Lote corporales: fuente de verdad docs/servicios-manifest.json.
// Reglas de redacción: docs/GUIA-CONTENIDO-SERVICIOS.md.
export const corporales: Tratamiento[] = [
  // ── Criolipólisis (Cryonic) ──────────────────────────────────────────────
  {
    slug: "criolipolisis",
    categoria: "corporales",
    grupo: "Contorno corporal",
    nombre: "Criolipólisis (Cryonic)",
    resultados: ["criolipolisis-abdomen", "criolipolisis-espalda"],
    relacionados: ["moldeamiento-corporal", "fosfatidilcolina", "paquete-reductor-abdomen"],
    hero: {
      eyebrow: "Cryonic · Criolipólisis",
      titulo: "Congela la grasa localizada,",
      tituloEm: "afina medidas sin cirugía",
      sub: "Nuestra tecnología estrella para moldear la figura. En una sola sesión por zona congelamos las células de grasa localizada y lo complementamos con INDIBA y drenaje linfático, con criterio médico en cada plan.",
    },
    seo: {
      title: "Criolipólisis en Medellín | Clínica Quantum",
      description:
        "Criolipólisis Cryonic en El Poblado, Medellín: reduce grasa localizada en abdomen, flancos o espalda sin cirugía. Incluye INDIBA y drenaje linfático.",
      keywords: [
        "criolipólisis medellín",
        "cryonic medellín",
        "reducir abdomen sin cirugía",
        "criolipólisis precio medellín",
        "congelar grasa localizada",
      ],
    },
    ficha: {
      duracion: "35 a 60 min por zona",
      sesiones: "1 sesión por zona",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes grasa localizada que no cede con dieta ni ejercicio",
        "Estás cerca de tu peso ideal y buscas definir zonas",
        "Quieres reducir medidas sin cirugía ni incapacidad",
        "Te preocupa el abdomen, los flancos, la espalda o las piernas",
      ],
      noIdeal: [
        "Buscas bajar de peso: para eso están los programas de reducción",
        "Estás en embarazo o lactancia",
        "Tienes hernias en la zona, urticaria por frío o crioglobulinemia",
        "Tu principal molestia es la flacidez y no la grasa",
      ],
    },
    problema: {
      titulo: "Esa grasa que no se va con dieta ni ejercicio",
      parrafos: [
        "Abdomen, flancos, espalda o piernas: hay depósitos de grasa que se quedan aunque cuides tu alimentación y entrenes. No es falta de disciplina, es cómo tu cuerpo almacena grasa en ciertas zonas.",
        "La criolipólisis actúa justo ahí. El frío controlado elimina células de grasa de la zona tratada, sin agujas, sin quirófano y sin detener tu rutina.",
      ],
    },
    queEs: {
      titulo: "Qué es la criolipólisis",
      desc: "Es un tratamiento no invasivo que enfría de forma controlada el tejido graso. Las células de grasa son más sensibles al frío que la piel y el músculo: se dañan y el organismo las elimina de forma natural en las semanas siguientes. En Clínica Quantum lo hacemos con el equipo Cryonic y lo complementamos con INDIBA y drenaje linfático. No baja de peso: reduce medidas y moldea la zona.",
    },
    beneficios: [
      "Una sesión por zona",
      "Sin cirugía ni incapacidad",
      "Incluye 3 sesiones de INDIBA",
      "Incluye drenaje linfático",
    ],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "▭", label: "Abdomen", desc: "Grasa localizada en abdomen alto y bajo." },
      { icon: "◠", label: "Flancos", desc: "Los laterales de la cintura que marcan la silueta." },
      { icon: "◇", label: "Espalda", desc: "Pliegues de grasa en espalda alta y baja." },
      { icon: "∪", label: "Piernas", desc: "Cara interna y externa de los muslos." },
      { icon: "◡", label: "Papada", desc: "Definición del contorno bajo el mentón." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración y medición",
        desc: "Revisamos las zonas, medimos el pliegue de grasa y confirmamos que la criolipólisis es lo indicado para ti. Definimos cuántos aplicadores necesitas.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Sesión de criolipólisis",
        desc: "Colocamos el aplicador Cryonic sobre la zona. Al inicio sientes frío intenso y succión, que se vuelven tolerables en pocos minutos.",
        detail: "35 a 60 min por zona",
      },
      {
        num: "03",
        title: "INDIBA, drenaje y seguimiento",
        desc: "Complementamos con 3 sesiones de INDIBA y un drenaje linfático, y te acompañamos mientras se consolida el resultado.",
        detail: "3 INDIBA + 1 drenaje incluidos",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Criterio médico antes que promoción",
        desc: "Si la criolipólisis no es lo que necesitas, te lo decimos en la valoración y te orientamos a la opción adecuada.",
      },
      {
        num: "02",
        title: "Selección cuidadosa del paciente",
        desc: "Descartamos hernias en la zona, sensibilidad patológica al frío y otras condiciones que contraindican el procedimiento.",
      },
      {
        num: "03",
        title: "Expectativas claras",
        desc: "Reduce medidas en zonas puntuales, no kilos. Te explicamos también los efectos poco frecuentes, como el aumento paradójico de grasa en la zona.",
      },
      {
        num: "04",
        title: "Protocolo completo",
        desc: "INDIBA y drenaje linfático apoyan la respuesta del tejido, y hacemos seguimiento durante las semanas en que se ve el cambio.",
      },
    ],
    cuidados: {
      antes: [
        "Llega con la zona limpia, sin cremas ni aceites",
        "Usa ropa cómoda y holgada",
        "Cuéntanos si tienes hernias, problemas circulatorios o sensibilidad al frío",
      ],
      despues: [
        "Puedes retomar tu rutina el mismo día",
        "Mantente bien hidratada y activa",
        "Es normal sentir la zona sensible, adormecida o con leve morado unos días",
        "Asiste a tus sesiones de INDIBA y drenaje",
        "Consulta si notas dolor intenso o la zona crece semanas después",
      ],
    },
    precio: {
      desde: 1600000,
      opciones: [
        { label: "1 aplicador", detalle: "Zona grande o papada · incluye 3 INDIBA + 1 drenaje linfático", valor: 1600000 },
        { label: "2 aplicadores", detalle: "Incluye 3 INDIBA + 1 drenaje linfático", valor: 2400000 },
        { label: "3 aplicadores", detalle: "Incluye 3 INDIBA + 1 drenaje linfático", valor: 2600000 },
        { label: "4 aplicadores", detalle: "Incluye 3 INDIBA + 1 drenaje linfático", valor: 2700000 },
        { label: "5 aplicadores", detalle: "Incluye 3 INDIBA + 1 drenaje linfático", valor: 3650000 },
        { label: "6 aplicadores", detalle: "Incluye 3 INDIBA + 1 drenaje linfático", valor: 3800000 },
      ],
      incluye: [
        "Valoración médica previa",
        "Sesión de criolipólisis con equipo Cryonic",
        "3 sesiones de INDIBA",
        "1 drenaje linfático",
        "Indicaciones de cuidado",
      ],
      nota: "El número de aplicadores lo definimos en la valoración según tus zonas.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta la criolipólisis?",
        a: "Desde $1.600.000 con 1 aplicador. El valor depende del número de aplicadores, de 1 a 6, y todos los planes incluyen 3 sesiones de INDIBA y 1 drenaje linfático.",
      },
      {
        q: "¿Sirve para bajar de peso?",
        a: "No. Reduce medidas y moldea abdomen, flancos, espalda o piernas. Para bajar de peso tenemos programas de reducción con seguimiento médico.",
      },
      {
        q: "¿Duele?",
        a: "Al inicio se siente frío intenso y presión por la succión; en pocos minutos la zona se adormece y se vuelve tolerable. Después puede quedar sensibilidad pasajera.",
      },
      {
        q: "¿Cuándo veo resultados?",
        a: "El cuerpo elimina la grasa tratada de forma progresiva, por eso el cambio se nota a lo largo de las semanas siguientes y no al salir de la sesión.",
      },
      {
        q: "¿El resultado es permanente?",
        a: "Las células de grasa eliminadas no regresan, pero las que quedan pueden crecer si subes de peso. Mantener hábitos estables ayuda a conservar el resultado.",
      },
      {
        q: "¿Qué efectos secundarios tiene?",
        a: "Lo habitual es enrojecimiento, adormecimiento, inflamación o morado leve durante días. En casos poco frecuentes la grasa de la zona aumenta en lugar de disminuir; por eso hacemos seguimiento.",
      },
      {
        q: "¿Se puede combinar con otros tratamientos?",
        a: "Sí. Ya incluye INDIBA y drenaje, y según tu caso puede complementarse con fosfatidilcolina o el paquete reductor de abdomen.",
      },
      {
        q: "¿Quién no puede hacérsela?",
        a: "No está indicada en embarazo o lactancia, con hernias en la zona, urticaria por frío, crioglobulinemia u otras alteraciones de sensibilidad al frío.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Criolipólisis (Cryonic)",
  },

  // ── Reducción intensiva ──────────────────────────────────────────────────
  {
    slug: "reduccion-intensiva",
    categoria: "corporales",
    grupo: "Descenso de peso",
    nombre: "Reducción intensiva",
    resultados: [],
    relacionados: ["descenso-de-peso", "paquete-mesoterapeutico", "criolipolisis"],
    hero: {
      eyebrow: "Programa médico y nutricional",
      titulo: "Un proceso completo para tu peso,",
      tituloEm: "con acompañamiento de principio a fin",
      sub: "Programa integral que une seguimiento médico, nutrición, mesoterapia, aparatología y sueroterapia détox para favorecer la pérdida de peso y la reducción de medidas, con metas realistas.",
    },
    seo: {
      title: "Reducción intensiva en Medellín | Clínica Quantum",
      description:
        "Programa de reducción intensiva en El Poblado, Medellín: seguimiento médico, nutrición, mesoterapia y aparatología para bajar de peso con acompañamiento.",
      keywords: [
        "programa para bajar de peso medellín",
        "reducción de medidas medellín",
        "nutricionista y médico para bajar de peso",
        "mesoterapia reductora medellín",
        "tratamiento reductor el poblado",
      ],
    },
    ficha: {
      duracion: "Programa por etapas",
      sesiones: "Lo define tu plan",
      recuperacion: "Sin incapacidad",
      resultados: "Graduales, con seguimiento",
    },
    paraQuien: {
      ideal: [
        "Quieres bajar de peso y reducir medidas al mismo tiempo",
        "Has intentado solo con dieta y te falta acompañamiento",
        "Buscas un plan con controles médicos y nutricionales",
        "Estás dispuesta a cambiar hábitos durante el proceso",
      ],
      noIdeal: [
        "Buscas un resultado inmediato o una cifra exacta de kilos",
        "Estás en embarazo o lactancia",
        "Tienes una enfermedad descompensada que requiere manejo primero",
      ],
    },
    problema: {
      titulo: "Bajar de peso sola puede ser agotador",
      parrafos: [
        "Empiezas con toda la energía, pierdes algunos kilos y luego el proceso se estanca o el peso vuelve. No es falta de voluntad: sin un plan claro y alguien que ajuste el camino, es fácil perder el rumbo.",
        "La reducción intensiva te da ese acompañamiento: un equipo que revisa tu avance, ajusta la alimentación y suma tratamientos de apoyo para las medidas.",
      ],
    },
    queEs: {
      titulo: "Qué es la reducción intensiva",
      desc: "Es un programa integral de acompañamiento médico y nutricional, combinado con mesoterapia y aparatología, diseñado para favorecer la pérdida de peso y la reducción de medidas, con seguimiento profesional. Incluye sueroterapia détox. El avance depende de tu punto de partida, tu metabolismo y tu constancia.",
    },
    beneficios: [
      "Seguimiento médico",
      "Acompañamiento nutricional",
      "Mesoterapia y aparatología",
      "Sueroterapia détox",
      "Metas por etapas",
    ],
    zonasTitulo: "Qué incluye el programa",
    zonas: [
      { icon: "○", label: "Seguimiento médico", desc: "Controles para revisar tu avance y tu salud." },
      { icon: "◇", label: "Nutrición", desc: "Plan de alimentación realista, ajustado a tu vida." },
      { icon: "✦", label: "Mesoterapia", desc: "Apoyo localizado para las zonas que más te preocupan." },
      { icon: "▭", label: "Aparatología", desc: "Sesiones para acompañar la reducción de medidas." },
      { icon: "◡", label: "Sueroterapia détox", desc: "Parte del programa, según indicación médica." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración médica y nutricional",
        desc: "Revisamos tu historia clínica, hábitos, medidas y objetivos, y definimos si el programa es adecuado para ti.",
        detail: "Historia clínica y medidas",
      },
      {
        num: "02",
        title: "Plan y sesiones",
        desc: "Arrancas tu plan de alimentación y las sesiones de mesoterapia, aparatología y sueroterapia según el calendario acordado.",
        detail: "Calendario personalizado",
      },
      {
        num: "03",
        title: "Controles y ajustes",
        desc: "En cada control medimos tu avance y ajustamos la estrategia para que el resultado sea sostenible.",
        detail: "Seguimiento profesional",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Valoración antes de empezar",
        desc: "Revisamos antecedentes y medicamentos para descartar condiciones que hagan inadecuado el programa o alguno de sus tratamientos.",
      },
      {
        num: "02",
        title: "Metas realistas",
        desc: "El nombre del programa marca un rango de trabajo, no una promesa. Cada cuerpo responde distinto y así te lo explicamos.",
      },
      {
        num: "03",
        title: "Ritmo saludable",
        desc: "Buscamos una pérdida progresiva y sostenible, no dietas extremas que comprometan tu salud o te hagan recuperar el peso.",
      },
      {
        num: "04",
        title: "Ajustes con cada control",
        desc: "Si algo no funciona o no te sienta bien, lo modificamos. El plan se adapta a tu respuesta real.",
      },
    ],
    cuidados: {
      antes: [
        "Trae la lista de medicamentos y suplementos que tomas",
        "Si tienes exámenes de laboratorio recientes, llévalos a la valoración",
        "Cuéntanos tus horarios y hábitos con sinceridad",
      ],
      despues: [
        "Sigue el plan de alimentación acordado",
        "Mantente hidratada y suma actividad física según tu condición",
        "Asiste a todos los controles y sesiones",
        "Es normal sentir sensibilidad o morado leve donde se aplicó mesoterapia",
        "Avísanos si te sientes mareada, débil o con molestias persistentes",
      ],
    },
    precio: {
      desde: 3500000,
      opciones: [
        {
          label: "Programa 5–10 kg",
          detalle: "Seguimiento médico, nutrición, mesoterapia, aparatología, sueroterapia détox",
          valor: 3500000,
        },
      ],
      incluye: [
        "Valoración médica previa",
        "Seguimiento médico y nutricional",
        "Sesiones de mesoterapia y aparatología",
        "Sueroterapia détox",
        "Indicaciones de cuidado y hábitos",
      ],
      nota: "El nombre del programa indica el rango de trabajo, no una cifra asegurada: el resultado depende de tu punto de partida y tu constancia.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta el programa?",
        a: "El programa de reducción intensiva tiene un valor desde $3.500.000 e incluye seguimiento médico, nutrición, mesoterapia, aparatología y sueroterapia détox.",
      },
      {
        q: "¿Voy a bajar entre 5 y 10 kilos?",
        a: "Ese es el rango para el que está pensado el programa, pero no es una promesa. Cuánto bajas depende de tu punto de partida, tu metabolismo y tu adherencia al plan.",
      },
      {
        q: "¿Cuánto dura?",
        a: "Se organiza por etapas y el calendario lo definimos en la valoración según tus objetivos y tu disponibilidad.",
      },
      {
        q: "¿Incluye medicamentos para bajar de peso?",
        a: "No de forma rutinaria. Si en la valoración se considera que necesitas apoyo farmacológico, lo conversamos aparte dentro del programa de reducción metabólica.",
      },
      {
        q: "¿La mesoterapia duele?",
        a: "Se aplica con agujas muy finas; la mayoría de pacientes siente pinchazos tolerables. Después puede quedar sensibilidad, enrojecimiento o pequeños morados.",
      },
      {
        q: "¿Qué pasa cuando termino?",
        a: "Te damos pautas para mantener los hábitos y conservar el resultado. Si lo necesitas, podemos continuar con controles espaciados.",
      },
      {
        q: "¿Quién no puede hacerlo?",
        a: "No está indicado en embarazo o lactancia ni en enfermedades descompensadas sin manejo. Algunos tratamientos del programa se ajustan según tus antecedentes.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Reducción intensiva",
  },

  // ── Reducción metabólica (descenso de peso) ──────────────────────────────
  {
    slug: "descenso-de-peso",
    categoria: "corporales",
    grupo: "Descenso de peso",
    nombre: "Reducción metabólica",
    resultados: [],
    relacionados: ["reduccion-intensiva", "paquete-mesoterapeutico", "sueroterapia"],
    hero: {
      eyebrow: "Manejo médico del peso",
      titulo: "Tratar el peso es un acto médico,",
      tituloEm: "con valoración y seguimiento reales",
      sub: "Descenso de peso con manejo médico y apoyo farmacológico cuando está indicado, ajustado a tu metabolismo. Empieza siempre con historia clínica y continúa con controles.",
    },
    seo: {
      title: "Reducción metabólica en Medellín | Clínica Quantum",
      description:
        "Reducción metabólica en El Poblado, Medellín: manejo médico del peso con historia clínica, prescripción solo si está indicada y seguimiento continuo.",
      keywords: [
        "descenso de peso con médico medellín",
        "semaglutida medellín",
        "tirzepatida medellín",
        "tratamiento médico para bajar de peso",
        "médico para obesidad el poblado",
      ],
    },
    ficha: {
      duracion: "Tratamiento de varios meses",
      sesiones: "Controles médicos periódicos",
      recuperacion: "Sin incapacidad",
      resultados: "Graduales, varían en cada caso",
    },
    paraQuien: {
      ideal: [
        "Tienes sobrepeso u obesidad y quieres un manejo médico serio",
        "Has intentado bajar de peso con hábitos y no lo has sostenido",
        "Estás dispuesta a hacerte controles y exámenes si se requieren",
        "Entiendes que el medicamento acompaña, no reemplaza, los cambios de hábitos",
      ],
      noIdeal: [
        "Buscas bajar unos kilos rápido para un evento",
        "Estás en embarazo, lactancia o planeando un embarazo",
        "Tienes antecedente personal o familiar de ciertos tumores de tiroides",
        "Has tenido pancreatitis: requiere evaluación médica específica",
      ],
    },
    problema: {
      titulo: "Cuando el peso no responde solo a la fuerza de voluntad",
      parrafos: [
        "El peso tiene componentes metabólicos, hormonales y de hábitos. Por eso muchas personas hacen dieta tras dieta, bajan y vuelven a subir, y terminan sintiendo que el problema son ellas.",
        "Hoy existen medicamentos que pueden ayudar en ciertos casos, pero no son para todos ni son un atajo. Usarlos sin valoración ni seguimiento es un riesgo. Aquí el punto de partida es tu historia clínica.",
      ],
    },
    queEs: {
      titulo: "Qué es la reducción metabólica",
      desc: "Es un manejo médico del descenso de peso, ajustado a tu metabolismo, que puede incluir apoyo farmacológico con semaglutida o tirzepatida. Son medicamentos de prescripción médica: solo se indican después de una valoración con historia clínica, se ajusta la dosis de forma progresiva y se hace seguimiento de su tolerancia. No es un tratamiento estético ni un camino fácil: funciona junto con cambios de alimentación y actividad.",
    },
    beneficios: [
      "Valoración con historia clínica",
      "Prescripción solo si está indicada",
      "Dosis ajustada por controles",
      "Seguimiento médico continuo",
    ],
    zonasTitulo: "Cómo lo manejamos",
    zonas: [
      { icon: "○", label: "Historia clínica", desc: "Antecedentes, medicamentos, hábitos y exámenes si se requieren." },
      { icon: "◇", label: "Indicación médica", desc: "Definimos si eres candidata y cuál opción es adecuada." },
      { icon: "▭", label: "Dosis progresiva", desc: "Se inicia baja y se ajusta según tolerancia y respuesta." },
      { icon: "✦", label: "Hábitos", desc: "Alimentación y actividad como base del proceso." },
      { icon: "◡", label: "Controles", desc: "Revisamos efectos, avance y cuándo modificar el plan." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración médica completa",
        desc: "Historia clínica, antecedentes personales y familiares, medicamentos y medidas. Si es necesario solicitamos exámenes antes de decidir.",
        detail: "Historia clínica",
      },
      {
        num: "02",
        title: "Plan y prescripción si aplica",
        desc: "Si hay indicación, te explicamos el medicamento, cómo se aplica, sus efectos esperados y los signos de alarma. Si no la hay, te lo decimos.",
        detail: "Prescripción médica",
      },
      {
        num: "03",
        title: "Controles y ajuste de dosis",
        desc: "Revisamos tu tolerancia y tu avance en cada control, ajustamos la dosis y planeamos cómo sostener el resultado.",
        detail: "Seguimiento continuo",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Nunca sin valoración",
        desc: "Semaglutida y tirzepatida son medicamentos de prescripción. Solo se indican tras revisar tu historia clínica y descartar contraindicaciones.",
      },
      {
        num: "02",
        title: "Efectos secundarios explicados",
        desc: "Náuseas, vómito, diarrea, estreñimiento o llenura son frecuentes, sobre todo al iniciar o subir la dosis. Te enseñamos a manejarlos y cuándo consultar.",
      },
      {
        num: "03",
        title: "Contraindicaciones claras",
        desc: "No se usan en embarazo o lactancia ni con antecedente personal o familiar de ciertos tumores de tiroides, y requieren cuidado especial si has tenido pancreatitis.",
      },
      {
        num: "04",
        title: "Sin promesas de kilos",
        desc: "La respuesta varía entre personas y al suspender el medicamento el peso puede recuperarse. Por eso trabajamos hábitos y un plan de mantenimiento.",
      },
    ],
    cuidados: {
      antes: [
        "Trae la lista completa de medicamentos y suplementos",
        "Lleva exámenes de laboratorio recientes si los tienes",
        "Cuéntanos antecedentes de tiroides, páncreas, vesícula o diabetes, tuyos y de tu familia",
        "No inicies estos medicamentos por tu cuenta ni los compres sin fórmula",
      ],
      despues: [
        "Aplica el medicamento solo en la dosis y frecuencia indicadas",
        "Come porciones pequeñas, despacio, y evita comidas muy grasosas",
        "Mantente bien hidratada",
        "Asiste a todos tus controles",
        "Consulta de inmediato si tienes dolor abdominal intenso y persistente o vómito que no cede",
      ],
    },
    precio: {
      desde: 800000,
      opciones: [
        { label: "Reducción metabólica (semaglutida)", valor: 2000000 },
        { label: "Semaglutida", valor: 800000 },
        { label: "Semaglutida 1 mg", valor: 1000000 },
        { label: "Tirzepatida", valor: 1200000 },
      ],
      incluye: [
        "Valoración médica previa con historia clínica",
        "Prescripción solo si está médicamente indicada",
        "Controles de seguimiento y ajuste de dosis",
        "Indicaciones de alimentación y cuidado",
      ],
      nota: "El medicamento, la dosis y la duración los define el médico después de la valoración. Si no eres candidata, no se prescribe.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "Las opciones van desde $800.000 y dependen del medicamento y la dosis que se indiquen. Cuál aplica para ti se define en la valoración médica.",
      },
      {
        q: "¿Cuántos kilos voy a bajar?",
        a: "No es posible prometerlo. La respuesta depende de tu metabolismo, tu punto de partida, la dosis tolerada y tus hábitos. Desconfía de quien te asegure una cifra.",
      },
      {
        q: "¿Qué efectos secundarios tiene?",
        a: "Los más frecuentes son gastrointestinales: náuseas, vómito, diarrea, estreñimiento, reflujo o sensación de llenura. Suelen ser más notorios al iniciar o subir la dosis. Hay efectos menos frecuentes pero serios, que revisamos contigo.",
      },
      {
        q: "¿Quién no puede usarlos?",
        a: "No están indicados en embarazo o lactancia, ni con antecedente personal o familiar de ciertos tumores de tiroides. Antecedentes como pancreatitis o enfermedad de vesícula requieren evaluación médica específica.",
      },
      {
        q: "¿Puedo comprarlo y aplicármelo por mi cuenta?",
        a: "No es recomendable. Son medicamentos de prescripción que requieren valoración, ajuste de dosis y seguimiento para usarse con seguridad.",
      },
      {
        q: "¿Qué pasa cuando lo suspendo?",
        a: "El apetito puede regresar y con él parte del peso. Por eso trabajamos alimentación, actividad y un plan de retiro o mantenimiento definido con tu médico.",
      },
      {
        q: "¿Es un tratamiento estético?",
        a: "No. Es un manejo médico del peso. Si además te preocupan medidas o flacidez, en la valoración vemos si conviene complementar con otros tratamientos.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Reducción metabólica",
  },

  // ── Fosfatidilcolina ─────────────────────────────────────────────────────
  {
    slug: "fosfatidilcolina",
    categoria: "corporales",
    grupo: "Contorno corporal",
    nombre: "Reducción localizada con fosfatidilcolina",
    resultados: [],
    relacionados: ["criolipolisis", "paquete-mesoterapeutico", "paquete-reductor-abdomen"],
    hero: {
      eyebrow: "Fosfatidilcolina · Grasa localizada",
      titulo: "Trabaja esa zona puntual,",
      tituloEm: "con un plan hecho para ella",
      sub: "Tratamiento dirigido a zonas específicas de grasa localizada, complementado con drenaje, masajes y aparatología. Indicado tras valoración médica según tu zona y tu tejido.",
    },
    seo: {
      title: "Fosfatidilcolina en Medellín | Clínica Quantum",
      description:
        "Reducción localizada con fosfatidilcolina en El Poblado, Medellín: trata grasa en zonas específicas con drenajes, masajes y aparatología en un paquete.",
      keywords: [
        "fosfatidilcolina medellín",
        "grasa localizada medellín",
        "reducir grasa localizada sin cirugía",
        "tratamiento para la papada y abdomen",
        "fosfatidilcolina precio medellín",
      ],
    },
    ficha: {
      duracion: "20 a 40 min por sesión",
      sesiones: "2 sesiones con complementos",
      recuperacion: "Inflamación de 2 a 5 días",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes acúmulos pequeños de grasa en zonas definidas",
        "Estás en un peso estable y cerca de tu meta",
        "Buscas un tratamiento localizado sin cirugía",
        "Puedes asistir a los drenajes y masajes del paquete",
      ],
      noIdeal: [
        "Buscas bajar de peso general",
        "Estás en embarazo o lactancia",
        "Tienes infección activa en la zona o alergia a los componentes",
        "Tienes enfermedad hepática o renal sin control",
      ],
    },
    problema: {
      titulo: "Ese acúmulo que desentona con el resto de tu figura",
      parrafos: [
        "A veces no es mucho: un pequeño volumen en el abdomen bajo, los flancos o la cara interna del muslo. Pero es justo lo que notas cada vez que te miras o te pones cierta ropa.",
        "Para esas zonas puntuales, un tratamiento localizado con drenaje y aparatología puede ayudarte a afinar el contorno sin pasar por un quirófano.",
      ],
    },
    queEs: {
      titulo: "Qué es la reducción localizada con fosfatidilcolina",
      desc: "Es un tratamiento inyectable dirigido a zonas específicas de grasa localizada. La fosfatidilcolina se aplica con agujas finas en el tejido graso y se complementa con drenajes, masajes y aparatología según las necesidades de cada paciente. Genera una respuesta inflamatoria esperada en la zona, por eso los días siguientes hay hinchazón y sensibilidad. La respuesta varía entre personas.",
    },
    beneficios: [
      "Enfocado en zonas puntuales",
      "Sin cirugía",
      "Incluye drenajes y masajes",
      "Aparatología de apoyo",
    ],
    zonasTitulo: "Zonas donde se aplica",
    zonas: [
      { icon: "▭", label: "Abdomen bajo", desc: "Pequeños acúmulos bajo el ombligo." },
      { icon: "◠", label: "Flancos", desc: "Volumen lateral de la cintura." },
      { icon: "∪", label: "Muslos", desc: "Cara interna y externa de las piernas." },
      { icon: "▽", label: "Brazos", desc: "Grasa en la parte posterior del brazo." },
      { icon: "◡", label: "Papada", desc: "Volumen bajo el mentón, según valoración." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración de la zona",
        desc: "Revisamos la cantidad de grasa, la calidad de la piel y tus antecedentes para confirmar que el tratamiento es adecuado.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Aplicación localizada",
        desc: "Marcamos la zona y aplicamos la fosfatidilcolina con agujas finas. Cada sesión usa 6 ampollas según el paquete.",
        detail: "2 sesiones · 6 ampollas c/u",
      },
      {
        num: "03",
        title: "Drenajes, masajes y control",
        desc: "Los drenajes, masajes y la aparatología ayudan a manejar la inflamación y acompañan el resultado. Revisamos tu evolución.",
        detail: "2 drenajes + 4 masajes",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Indicación médica",
        desc: "Solo lo indicamos en acúmulos localizados y en pacientes sin contraindicaciones. Si tu caso responde mejor a otra opción, te lo decimos.",
      },
      {
        num: "02",
        title: "Aplicación con técnica precisa",
        desc: "Personal médico marca la zona y aplica en el plano graso para cuidar la piel y reducir efectos no deseados.",
      },
      {
        num: "03",
        title: "Efectos esperados explicados",
        desc: "Inflamación, ardor, enrojecimiento y morados son habituales los primeros días. Te decimos qué es normal y cuándo consultar.",
      },
      {
        num: "04",
        title: "Complementos incluidos",
        desc: "Drenajes, masajes y aparatología forman parte del protocolo para acompañar la recuperación de la zona.",
      },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes si tu médico lo autoriza",
        "Llega con la zona limpia, sin cremas",
        "Cuéntanos si tienes alergias o enfermedades hepáticas o renales",
      ],
      despues: [
        "Espera inflamación, ardor o sensibilidad de 2 a 5 días",
        "Usa ropa holgada los primeros días",
        "Mantente hidratada y evita alcohol mientras la zona se desinflama",
        "Asiste a tus drenajes y masajes",
        "Consulta si hay dolor creciente, calor intenso o cambios en la piel",
      ],
    },
    precio: {
      desde: 1400000,
      opciones: [
        {
          label: "Paquete",
          detalle: "2 sesiones (6 ampollas c/u) + 2 drenajes + 4 masajes + aparatología",
          valor: 1400000,
        },
      ],
      incluye: [
        "Valoración médica previa",
        "2 sesiones de fosfatidilcolina (6 ampollas cada una)",
        "2 drenajes y 4 masajes",
        "Aparatología complementaria",
        "Indicaciones de cuidado",
      ],
      nota: "Las zonas a tratar y la distribución de las ampollas las definimos en la valoración.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "El paquete tiene un valor desde $1.400.000 e incluye 2 sesiones de 6 ampollas cada una, 2 drenajes, 4 masajes y aparatología.",
      },
      {
        q: "¿Duele?",
        a: "Se sienten pinchazos y luego ardor o calor en la zona durante un rato. La mayoría de pacientes lo tolera bien; la sensibilidad puede durar unos días.",
      },
      {
        q: "¿Qué pasa después de la sesión?",
        a: "Es normal que la zona se inflame, se enrojezca y quede sensible o con morados de 2 a 5 días. Es parte de la respuesta esperada del tejido.",
      },
      {
        q: "¿Cuándo veo resultados?",
        a: "El cambio es progresivo y se aprecia en las semanas siguientes a las sesiones, cuando baja la inflamación. La respuesta varía entre personas.",
      },
      {
        q: "¿Sirve para bajar de peso?",
        a: "No. Está pensado para acúmulos localizados. Si tu objetivo es bajar de peso, te orientamos hacia un programa de reducción.",
      },
      {
        q: "¿Se combina con criolipólisis?",
        a: "Puede combinarse en zonas diferentes o en momentos distintos, según lo que defina la valoración.",
      },
      {
        q: "¿Quién no puede hacérselo?",
        a: "No se aplica en embarazo o lactancia, con infección en la zona, alergia a los componentes ni en enfermedades hepáticas o renales sin control.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Reducción localizada con fosfatidilcolina",
  },

  // ── Paquete mesoterapéutico corporal ─────────────────────────────────────
  {
    slug: "paquete-mesoterapeutico",
    categoria: "corporales",
    grupo: "Contorno corporal",
    nombre: "Paquete mesoterapéutico corporal",
    resultados: [],
    relacionados: ["fosfatidilcolina", "celulitis", "reduccion-intensiva"],
    hero: {
      eyebrow: "Mesoterapia · Drenaje · Nutrición",
      titulo: "Medidas que cambian de verdad,",
      tituloEm: "con un plan que te acompaña",
      sub: "Mesoterapia, drenajes, aparatología y acompañamiento nutricional en un solo paquete, para trabajar medidas y hábitos al mismo tiempo con orientación médica.",
    },
    seo: {
      title: "Mesoterapia corporal en Medellín | Clínica Quantum",
      description:
        "Paquete mesoterapéutico corporal en El Poblado, Medellín: 5 mesoterapias, 5 drenajes, aparatología y nutrición para trabajar medidas con acompañamiento.",
      keywords: [
        "mesoterapia corporal medellín",
        "mesoterapia reductora medellín",
        "drenaje linfático medellín",
        "paquete reductor medellín",
        "tratamiento de medidas el poblado",
      ],
    },
    ficha: {
      duracion: "30 a 60 min por sesión",
      sesiones: "5 sesiones de cada técnica",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, con el paquete",
    },
    paraQuien: {
      ideal: [
        "Quieres reducir medidas en abdomen, piernas o brazos",
        "Sientes retención de líquidos o pesadez",
        "Te sirve tener orientación nutricional durante el proceso",
        "Buscas un plan con sesiones periódicas y seguimiento",
      ],
      noIdeal: [
        "Buscas bajar mucho peso: hay programas más completos",
        "Estás en embarazo o lactancia",
        "Tienes infección en la piel de la zona o alergia a componentes",
      ],
    },
    problema: {
      titulo: "Cuando sientes el cuerpo pesado e inflamado",
      parrafos: [
        "La ropa aprieta, las piernas se sienten cargadas y el abdomen amanece inflamado. Cuidas lo que comes, pero sientes que las medidas no se mueven.",
        "Este paquete une técnicas que trabajan la zona con tu alimentación, para que los cambios se sientan en el cuerpo y en tu día a día.",
      ],
    },
    queEs: {
      titulo: "Qué incluye el paquete mesoterapéutico",
      desc: "Combina mesoterapia, que consiste en microinyecciones superficiales en las zonas a tratar, con drenajes linfáticos manuales, sesiones de aparatología y acompañamiento nutricional. La combinación busca mejorar medidas y sensación de pesadez mientras ajustas hábitos. La fórmula y las zonas se definen en la valoración.",
    },
    beneficios: [
      "5 mesoterapias",
      "5 drenajes linfáticos",
      "5 sesiones de aparatología",
      "Acompañamiento nutricional",
    ],
    zonasTitulo: "Dónde lo trabajamos",
    zonas: [
      { icon: "▭", label: "Abdomen", desc: "Medidas y sensación de inflamación." },
      { icon: "◠", label: "Flancos", desc: "Contorno de la cintura." },
      { icon: "∪", label: "Piernas y glúteos", desc: "Pesadez, retención y textura." },
      { icon: "▽", label: "Brazos", desc: "Parte posterior del brazo." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración y medidas",
        desc: "Tomamos medidas, revisamos tus hábitos y antecedentes y definimos las zonas y la fórmula de la mesoterapia.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Sesiones combinadas",
        desc: "Alternas mesoterapia, drenaje linfático y aparatología según el calendario acordado, con tu plan nutricional en marcha.",
        detail: "5 + 5 + 5 sesiones",
      },
      {
        num: "03",
        title: "Seguimiento de medidas",
        desc: "Comparamos medidas durante el paquete y ajustamos las recomendaciones de alimentación para sostener el cambio.",
        detail: "Control de avance",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Fórmula indicada por el médico",
        desc: "Lo que se aplica en la mesoterapia se define tras revisar tus antecedentes, alergias y medicamentos.",
      },
      {
        num: "02",
        title: "Técnica superficial y cuidadosa",
        desc: "Agujas finas, asepsia de la zona y aplicación por personal entrenado para cuidar la piel.",
      },
      {
        num: "03",
        title: "Expectativas honestas",
        desc: "Ayuda con medidas y retención; no reemplaza un descenso de peso importante. Así te lo explicamos desde el inicio.",
      },
    ],
    cuidados: {
      antes: [
        "Llega con la zona limpia, sin cremas ni aceites",
        "Evita alcohol el día anterior a la mesoterapia",
        "Cuéntanos tus alergias y medicamentos",
      ],
      despues: [
        "Evita sol, sauna y piscina el día de la mesoterapia",
        "Es normal sentir sensibilidad o pequeños morados unos días",
        "Toma suficiente agua",
        "Sigue las indicaciones nutricionales",
        "Asiste a tus drenajes y aparatología",
      ],
    },
    precio: {
      desde: 1300000,
      opciones: [
        {
          label: "Paquete",
          detalle: "5 mesoterapias, 5 drenajes, 5 aparatología, acompañamiento nutricional",
          valor: 1300000,
        },
      ],
      incluye: [
        "Valoración médica previa",
        "5 mesoterapias",
        "5 drenajes y 5 sesiones de aparatología",
        "Acompañamiento nutricional",
        "Indicaciones de cuidado",
      ],
      nota: "Las zonas y la frecuencia de las sesiones las definimos en la valoración.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta el paquete?",
        a: "Tiene un valor desde $1.300.000 e incluye 5 mesoterapias, 5 drenajes, 5 sesiones de aparatología y acompañamiento nutricional.",
      },
      {
        q: "¿La mesoterapia duele?",
        a: "Son pinchazos superficiales con agujas muy finas. Se sienten, pero suelen ser tolerables y la sesión es corta.",
      },
      {
        q: "¿Cada cuánto son las sesiones?",
        a: "Habitualmente una o dos veces por semana. El calendario exacto lo acordamos en la valoración.",
      },
      {
        q: "¿Cuándo noto cambios?",
        a: "Muchas pacientes sienten menos pesadez desde los primeros drenajes. Los cambios de medidas son progresivos y dependen también de tus hábitos.",
      },
      {
        q: "¿Qué efectos secundarios tiene?",
        a: "Lo habitual es enrojecimiento, sensibilidad, pequeños morados o puntos inflamados en la zona durante unos días.",
      },
      {
        q: "¿Sirve para bajar de peso?",
        a: "Ayuda a trabajar medidas, no a bajar muchos kilos. Si ese es tu objetivo, la reducción intensiva o la reducción metabólica pueden ser más adecuadas.",
      },
      {
        q: "¿Quién no puede hacérselo?",
        a: "No se aplica en embarazo o lactancia, con infección en la zona o alergia a los componentes de la fórmula.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Paquete mesoterapéutico corporal",
  },

  // ── Celulitis ────────────────────────────────────────────────────────────
  {
    slug: "celulitis",
    categoria: "corporales",
    grupo: "Contorno corporal",
    nombre: "Tratamiento de celulitis",
    resultados: [],
    relacionados: ["estrias", "moldeamiento-corporal", "paquete-mesoterapeutico"],
    hero: {
      eyebrow: "Celulitis · Textura y firmeza",
      titulo: "Piel más lisa y firme,",
      tituloEm: "para vestirte sin pensarlo",
      sub: "Un paquete que mejora la textura de piel de naranja y firma la zona, combinando Liposonic, mesoterapia, drenajes y aparatología con criterio médico.",
    },
    seo: {
      title: "Tratamiento de celulitis en Medellín | Clínica Quantum",
      description:
        "Tratamiento de celulitis en El Poblado, Medellín: Liposonic, mesoterapia, drenajes y aparatología para mejorar la piel de naranja y firmar la zona.",
      keywords: [
        "tratamiento celulitis medellín",
        "quitar piel de naranja",
        "celulitis en piernas y glúteos",
        "mesoterapia para celulitis medellín",
        "tratamiento celulitis precio",
      ],
    },
    ficha: {
      duracion: "30 a 60 min por sesión",
      sesiones: "16 sesiones en el paquete",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, con el paquete",
    },
    paraQuien: {
      ideal: [
        "Tienes piel de naranja en glúteos, piernas o abdomen",
        "Notas la zona con poca firmeza o irregular",
        "Sientes pesadez o retención en las piernas",
        "Quieres un plan combinado con seguimiento",
        "Buscas mejorar la textura sin cirugía ni incapacidad",
      ],
      noIdeal: [
        "Esperas que la celulitis desaparezca por completo",
        "Estás en embarazo o lactancia",
        "Tienes várices importantes o problemas de circulación sin valorar",
        "Tienes infección, heridas o irritación en la piel de la zona",
      ],
    },
    problema: {
      titulo: "La textura que te hace pensar dos veces antes de ponerte algo",
      parrafos: [
        "La celulitis aparece en mujeres de todos los pesos y edades, incluso en quienes entrenan y se alimentan bien. Tiene que ver con hormonas, circulación y la estructura del tejido bajo la piel, no solo con cuánto comes o cuánto te mueves. Por eso es tan frustrante cuando nada parece funcionar.",
        "Responde mejor a un abordaje combinado: trabajar el tejido, la circulación y la firmeza de la piel al mismo tiempo, con constancia y seguimiento. Así la textura mejora de forma visible y vuelves a elegir tu ropa sin pensar en la piel de naranja.",
      ],
    },
    queEs: {
      titulo: "Qué es el tratamiento de celulitis",
      desc: "Es un paquete que mejora la textura de piel de naranja y firma la zona. La celulitis se forma cuando pequeñas acumulaciones de grasa empujan la piel hacia afuera mientras bandas de tejido fibroso la sujetan hacia adentro, lo que crea los hoyuelos. Por eso combinamos una sesión de Liposonic con mesoterapias, drenajes linfáticos y aparatología, para trabajar el tejido graso superficial, la retención de líquidos y la calidad de la piel. La celulitis se puede mejorar de forma visible, pero tiende a reaparecer si no se mantienen hábitos y cuidados.",
    },
    beneficios: [
      "Mejora la textura",
      "Firma la zona",
      "Incluye Liposonic",
      "Drenajes y aparatología",
    ],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "∪", label: "Glúteos", desc: "Hoyuelos y textura irregular." },
      { icon: "▭", label: "Muslos", desc: "Cara externa, posterior e interna." },
      { icon: "◠", label: "Caderas", desc: "Contorno lateral con piel de naranja." },
      { icon: "◇", label: "Abdomen", desc: "Textura y firmeza de la piel." },
    ],
    pasos: [
      { num: "01", title: "Valoración del grado de celulitis", desc: "Revisamos el tipo y grado de celulitis, la circulación de tus piernas y la firmeza de la piel para definir las zonas del paquete y el calendario de sesiones.", detail: "Valoración médica previa" },
      { num: "02", title: "Liposonic y sesiones combinadas", desc: "Empiezas con la sesión de Liposonic y continúas con 5 mesoterapias, 5 drenajes linfáticos y 5 sesiones de aparatología, organizadas según el calendario acordado contigo.", detail: "1 + 5 + 5 + 5 sesiones" },
      { num: "03", title: "Evolución y mantenimiento", desc: "Revisamos cómo cambió la textura y la firmeza de la zona a lo largo del paquete y te damos pautas de hábitos y mantenimiento para conservar el resultado.", detail: "Control de avance" },
    ],
    seguridad: [
      { num: "01", title: "Diagnóstico antes de tratar", desc: "No toda irregularidad es celulitis. Revisamos circulación y tejido para no tratar algo que necesita otro enfoque." },
      { num: "02", title: "Técnicas combinadas con criterio", desc: "La mezcla y la frecuencia de las sesiones se ajustan a tu piel y tolerancia, no a una receta única." },
      { num: "03", title: "Expectativas realistas", desc: "Buscamos una mejora visible de la textura. Te explicamos que la celulitis puede volver sin hábitos de mantenimiento." },
      { num: "04", title: "Seguimiento durante el paquete", desc: "Revisamos cómo responde tu piel entre sesiones y ajustamos zonas o intensidad si notas molestias, morados o sensibilidad." },
    ],
    cuidados: {
      antes: [
        "Llega con la piel limpia, sin cremas",
        "Usa ropa cómoda",
        "Evita el sol intenso en la zona los días previos",
        "Cuéntanos si tienes várices, trombosis previa o problemas circulatorios",
      ],
      despues: [
        "Toma suficiente agua",
        "Evita sol directo, sauna y piscina el día de la mesoterapia",
        "Mantente activa: caminar ayuda a la circulación",
        "Es normal sentir sensibilidad o pequeños morados unos días",
        "Asiste a todas las sesiones del paquete",
      ],
    },
    precio: {
      desde: 1500000,
      opciones: [
        { label: "Paquete", detalle: "1 Liposonic, 5 mesoterapias, 5 drenajes, 5 aparatología", valor: 1500000 },
      ],
      incluye: [
        "Valoración médica previa",
        "1 sesión de Liposonic",
        "5 mesoterapias y 5 drenajes",
        "5 sesiones de aparatología",
        "Indicaciones de cuidado y mantenimiento",
      ],
      nota: "Las zonas y la frecuencia las definimos en la valoración según el grado de celulitis.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El paquete tiene un valor desde $1.500.000 COP e incluye 1 sesión de Liposonic, 5 mesoterapias, 5 drenajes y 5 sesiones de aparatología. En la valoración revisamos tus zonas y organizamos el calendario de sesiones contigo." },
      { q: "¿La celulitis se quita por completo? ¿Cuánto dura el resultado?", a: "Se puede mejorar de forma visible la textura y la firmeza, pero no desaparece del todo y tiende a reaparecer con cambios hormonales, de peso o de hábitos. Mantenerte activa, hidratada y hacer mantenimiento cuando se indique marca la diferencia." },
      { q: "¿Duele?", a: "Los drenajes y la aparatología suelen ser cómodos. La mesoterapia se siente como pinchazos finos y rápidos, generalmente tolerables. Durante la aparatología y el Liposonic puedes sentir calor o molestia leve, y ajustamos la intensidad a tu tolerancia." },
      { q: "¿Cuántas sesiones son?", a: "El paquete reúne 16 sesiones: 1 Liposonic, 5 mesoterapias, 5 drenajes y 5 de aparatología. La frecuencia la definimos en la valoración según el grado de celulitis y tu disponibilidad, para que puedas cumplir el plan con constancia." },
      { q: "¿Cuándo veo resultados?", a: "Los cambios son progresivos. Habitualmente primero notas la piel más suave y las piernas menos pesadas, y la mejoría de la textura se aprecia mejor a medida que avanzas y completas el paquete." },
      { q: "¿Tiene efectos secundarios o recuperación?", a: "No requiere incapacidad: retomas tu rutina el mismo día. Lo habitual es enrojecimiento, sensibilidad o pequeños morados donde se aplicó la mesoterapia, que ceden en pocos días. Ese día evita sol directo, sauna y piscina." },
      { q: "¿Lo puedo combinar con otros tratamientos?", a: "Sí. Según tu caso puede complementarse con el moldeamiento corporal con INDIBA, el paquete mesoterapéutico o el tratamiento de estrías si también te preocupan. En la valoración ordenamos las sesiones para que cada técnica sume." },
      { q: "¿Quién no puede hacérselo?", a: "No está indicado en embarazo o lactancia, con infección o heridas en la piel de la zona ni con alergia a los componentes de la mesoterapia. Si tienes várices, trombosis previa o problemas circulatorios, primero los valoramos." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Tratamiento de celulitis",
  },

  // ── Paquete reductor de abdomen ──────────────────────────────────────────
  {
    slug: "paquete-reductor-abdomen",
    categoria: "corporales",
    grupo: "Contorno corporal",
    nombre: "Paquete reductor de abdomen",
    resultados: [],
    relacionados: ["criolipolisis", "fosfatidilcolina", "moldeamiento-corporal"],
    hero: {
      eyebrow: "INDIBA · Maderoterapia · Abdomen",
      titulo: "Un abdomen más firme,",
      tituloEm: "sesión a sesión",
      sub: "Protocolo integral que combina INDIBA, maderoterapia y técnicas complementarias para ayudar a reducir medidas y mejorar la firmeza y apariencia del abdomen.",
    },
    seo: {
      title: "Reductor de abdomen en Medellín | Clínica Quantum",
      description:
        "Paquete reductor de abdomen en El Poblado, Medellín: INDIBA, maderoterapia y quemadores para ayudar a reducir medidas y dar más firmeza a tu abdomen.",
      keywords: [
        "reducir abdomen medellín",
        "maderoterapia medellín",
        "indiba abdomen medellín",
        "tratamiento reductor abdomen",
        "paquete reductor precio medellín",
      ],
    },
    ficha: {
      duracion: "40 a 60 min por sesión",
      sesiones: "5 o 10 de cada técnica",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, con el paquete",
    },
    paraQuien: {
      ideal: [
        "Quieres reducir medidas y mejorar la firmeza del abdomen",
        "Notas flacidez leve después de bajar de peso",
        "Buscas un tratamiento no invasivo con sesiones periódicas",
        "Estás en un peso estable o en proceso de mejorar hábitos",
      ],
      noIdeal: [
        "Tienes diástasis o hernias sin valorar",
        "Estás en embarazo o lactancia",
        "Tienes marcapasos o dispositivos electrónicos implantados",
        "Buscas un cambio equivalente a una cirugía",
      ],
    },
    problema: {
      titulo: "El abdomen que no termina de verse como quieres",
      parrafos: [
        "Después de un embarazo, de bajar de peso o simplemente con los años, el abdomen puede quedar con volumen y menos firmeza aunque te cuides.",
        "Este paquete trabaja las dos cosas a la vez: medidas y firmeza, con técnicas no invasivas que se acomodan a tu rutina.",
      ],
    },
    queEs: {
      titulo: "Qué es el paquete reductor de abdomen",
      desc: "Es un protocolo que combina radiofrecuencia médica INDIBA, que genera calor profundo para estimular el tejido, con maderoterapia, un masaje con instrumentos de madera que moviliza la zona, y quemadores como técnica complementaria. Se ofrece en versión reductor y versión GOLD, que suma más sesiones y una sueroterapia. Las técnicas complementarias se indican según tu valoración.",
    },
    beneficios: [
      "INDIBA en el abdomen",
      "Maderoterapia",
      "No invasivo",
      "Dos niveles de paquete",
    ],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "▭", label: "Medidas", desc: "Apoyo a la reducción del contorno abdominal." },
      { icon: "◇", label: "Firmeza", desc: "Piel del abdomen con mejor tono." },
      { icon: "◠", label: "Flancos", desc: "Contorno lateral de la cintura." },
      { icon: "◡", label: "Abdomen bajo", desc: "Zona bajo el ombligo." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración abdominal",
        desc: "Revisamos grasa, flacidez y pared abdominal, descartamos contraindicaciones y definimos si te conviene el paquete reductor o el GOLD.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "INDIBA y maderoterapia",
        desc: "Alternas sesiones de INDIBA, con calor agradable en profundidad, y maderoterapia, junto con los quemadores indicados.",
        detail: "5 o 10 sesiones de cada una",
      },
      {
        num: "03",
        title: "Control de medidas",
        desc: "Medimos tu abdomen durante el paquete y te damos pautas para sostener el resultado.",
        detail: "Seguimiento de avance",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Revisión de la pared abdominal",
        desc: "Antes de iniciar buscamos hernias o diástasis que cambien la indicación o requieran otro manejo.",
      },
      {
        num: "02",
        title: "Radiofrecuencia con precauciones",
        desc: "INDIBA no se aplica con marcapasos, embarazo o tumores activos en la zona. Lo verificamos en la valoración.",
      },
      {
        num: "03",
        title: "Maderoterapia con presión adecuada",
        desc: "Ajustamos la intensidad a tu tolerancia para trabajar la zona sin lastimar la piel.",
      },
      {
        num: "04",
        title: "Resultados honestos",
        desc: "Ayuda a reducir medidas y dar firmeza; no reemplaza una abdominoplastia ni un descenso de peso importante.",
      },
    ],
    cuidados: {
      antes: [
        "Llega con el abdomen limpio, sin cremas",
        "Retira joyas o piercings de la zona",
        "Cuéntanos si tienes marcapasos, implantes metálicos o hernias",
      ],
      despues: [
        "Toma suficiente agua",
        "Es normal sentir la zona tibia o enrojecida un rato",
        "Tras la maderoterapia puede quedar sensibilidad o morado leve",
        "Acompaña el paquete con alimentación y actividad",
        "Asiste a las sesiones con la frecuencia indicada",
      ],
    },
    precio: {
      desde: 800000,
      opciones: [
        { label: "Paquete reductor", detalle: "5 INDIBA + 5 maderoterapia + 2 quemadores", valor: 800000 },
        {
          label: "Paquete GOLD",
          detalle: "10 INDIBA + 10 maderoterapia + 5 quemadores + 1 sueroterapia",
          valor: null,
        },
      ],
      incluye: [
        "Valoración médica previa",
        "Sesiones de INDIBA y maderoterapia según el paquete",
        "Quemadores según el paquete",
        "Sueroterapia en el paquete GOLD",
        "Indicaciones de cuidado",
      ],
      nota: "El valor del paquete GOLD te lo confirmamos en la valoración.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "El paquete reductor tiene un valor desde $800.000 con 5 INDIBA, 5 maderoterapias y 2 quemadores. El valor del paquete GOLD te lo confirmamos en la valoración.",
      },
      {
        q: "¿Qué diferencia hay entre el reductor y el GOLD?",
        a: "El GOLD duplica las sesiones de INDIBA y maderoterapia, incluye 5 quemadores y suma una sueroterapia.",
      },
      {
        q: "¿Duele?",
        a: "INDIBA se siente como calor agradable. La maderoterapia ejerce presión y puede ser intensa en algunas zonas; la ajustamos a tu tolerancia.",
      },
      {
        q: "¿Cuándo veo cambios?",
        a: "Los cambios son progresivos a lo largo de las sesiones y dependen también de tu alimentación y actividad.",
      },
      {
        q: "¿Tiene efectos secundarios?",
        a: "Puede quedar enrojecimiento o calor pasajero tras INDIBA, y sensibilidad o morados leves tras la maderoterapia.",
      },
      {
        q: "¿Sirve si tengo mucha grasa abdominal?",
        a: "Si hay mucho volumen, conviene combinar con otras opciones como criolipólisis o un programa de reducción. Lo definimos en la valoración.",
      },
      {
        q: "¿Quién no puede hacérselo?",
        a: "No está indicado en embarazo, con marcapasos o dispositivos implantados, tumores activos, hernias sin valorar o infección en la zona.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Paquete reductor de abdomen",
  },

  // ── Estrías ──────────────────────────────────────────────────────────────
  {
    slug: "estrias",
    categoria: "corporales",
    grupo: "Contorno corporal",
    nombre: "Tratamiento de estrías",
    resultados: [],
    relacionados: ["celulitis", "microagujas", "laser-co2"],
    hero: {
      eyebrow: "Estrías · Textura y color",
      titulo: "Estrías menos visibles,",
      tituloEm: "una piel con la que te reconcilias",
      sub: "Un protocolo que mejora el aspecto y el color de las estrías, diseñado según el tipo de estría, su antigüedad y tu piel, con expectativas claras desde la valoración.",
    },
    seo: {
      title: "Tratamiento de estrías en Medellín | Clínica Quantum",
      description:
        "Tratamiento de estrías en El Poblado, Medellín: protocolo personalizado para mejorar el aspecto y el color de estrías rojas o blancas en tu piel.",
      keywords: [
        "tratamiento estrías medellín",
        "quitar estrías medellín",
        "estrías blancas tratamiento",
        "estrías rojas tratamiento",
        "estrías después del embarazo",
      ],
    },
    ficha: {
      duracion: "Según la técnica indicada",
      sesiones: "Varias, según valoración",
      recuperacion: "Según la técnica, de 0 a 5 días",
      resultados: "Progresivos, en meses",
    },
    paraQuien: {
      ideal: [
        "Tienes estrías por embarazo, cambios de peso o crecimiento",
        "Te molesta su color o su textura",
        "Tienes estrías recientes, rojizas o violáceas",
        "Te preocupa que se noten con vestido de baño o ropa corta",
        "Buscas mejorar su aspecto con un plan realista",
      ],
      noIdeal: [
        "Esperas que las estrías desaparezcan por completo",
        "Estás en embarazo o lactancia",
        "Tienes infección o herida activa en la zona",
        "Tienes tendencia a queloides sin valorar",
      ],
    },
    problema: {
      titulo: "Marcas que cuentan tu historia, pero no quieres ver siempre",
      parrafos: [
        "Un embarazo, un cambio de peso, un estirón en la adolescencia. Las estrías aparecen cuando la piel se estira más rápido de lo que puede adaptarse, y muchas veces hacen que evites ciertas prendas.",
        "No se borran del todo, pero sí pueden verse menos. La clave es tratar el tipo de estría que tienes, con constancia y con una técnica elegida para tu piel.",
      ],
    },
    queEs: {
      titulo: "Qué es el tratamiento de estrías",
      desc: "Es un protocolo que mejora el aspecto y el color de las estrías. Las estrías son pequeñas roturas de las fibras de colágeno y elastina en la capa profunda de la piel, que aparecen cuando esta se estira más rápido de lo que puede adaptarse. Los tratamientos buscan estimular colágeno nuevo y mejorar el color de la marca. En la valoración revisamos si son recientes, rojizas o violáceas, que suelen responder mejor, o antiguas y blancas, que mejoran de forma más limitada. Con eso definimos las técnicas, el número de sesiones y el intervalo entre ellas.",
    },
    beneficios: [
      "Protocolo personalizado",
      "Mejora color y textura",
      "Plan según tu tipo de estría",
      "Expectativas claras",
    ],
    zonasTitulo: "Zonas frecuentes",
    zonas: [
      { icon: "▭", label: "Abdomen", desc: "Estrías tras embarazo o cambios de peso." },
      { icon: "∪", label: "Glúteos y caderas", desc: "Estrías por crecimiento o aumento de peso." },
      { icon: "◇", label: "Muslos", desc: "Cara interna y externa." },
      { icon: "◠", label: "Senos", desc: "Estrías por cambios de volumen." },
      { icon: "▽", label: "Brazos", desc: "Parte interna del brazo." },
    ],
    pasos: [
      { num: "01", title: "Valoración de tus estrías", desc: "Revisamos el tipo, el color, la antigüedad y la extensión de tus estrías, junto con tu fototipo y tu tendencia a manchas, para definir un protocolo realista.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesiones del protocolo", desc: "Aplicamos en la zona las técnicas indicadas en tu protocolo, con el intervalo acordado entre sesiones, y te damos cuidados para proteger la piel mientras se renueva.", detail: "Plan por sesiones" },
      { num: "03", title: "Evolución y ajustes", desc: "Comparamos la zona en cada control y ajustamos técnicas, intensidad o intervalos según la respuesta de tu piel a lo largo de los meses.", detail: "Seguimiento en meses" },
    ],
    seguridad: [
      { num: "01", title: "Técnica elegida para tu piel", desc: "El fototipo y la tendencia a manchas o cicatrices cambian la indicación. Lo revisamos antes de proponer un protocolo." },
      { num: "02", title: "Promesas realistas", desc: "Buscamos que las estrías se vean menos, no que desaparezcan. Las blancas y antiguas mejoran de forma más limitada." },
      { num: "03", title: "Cuidado entre sesiones", desc: "Te damos indicaciones de protección solar e hidratación para cuidar la piel tratada y reducir el riesgo de manchas." },
      { num: "04", title: "Ajustes en cada control", desc: "Revisamos la reacción de la piel después de cada sesión y ajustamos el plan si aparece sensibilidad, manchas o una respuesta menor a la esperada." },
    ],
    cuidados: {
      antes: [
        "Evita el sol y el bronceado en la zona las semanas previas",
        "Suspende exfoliantes fuertes si tu médico lo indica",
        "Llega con la piel limpia, sin cremas ni aceites",
        "Cuéntanos si tienes tendencia a queloides o manchas",
      ],
      despues: [
        "Es normal que la zona quede enrojecida o sensible unos días",
        "Usa protector solar si la zona queda expuesta",
        "Hidrata la piel con los productos indicados",
        "No rasques ni retires costras si aparecen",
        "Respeta el intervalo entre sesiones",
      ],
    },
    precio: {
      desde: null,
      opciones: [{ label: "Protocolo", valor: null }],
      incluye: [
        "Valoración médica previa",
        "Protocolo definido según tus estrías",
        "Indicaciones de cuidado entre sesiones",
        "Controles de evolución",
      ],
      nota: "El valor depende de la zona, el tipo de estría y el número de sesiones: lo definimos en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El precio es personalizado porque depende de la zona, la extensión, el tipo de estría y el número de sesiones del protocolo. En la valoración revisamos tu piel y te entregamos el plan con su valor antes de empezar." },
      { q: "¿Las estrías se quitan por completo? ¿Cuánto dura la mejoría?", a: "No se borran del todo: el objetivo es mejorar su color y su textura para que se vean menos. La mejoría lograda suele mantenerse, aunque pueden aparecer estrías nuevas con otro embarazo o cambios de peso. Las recientes responden mejor que las blancas." },
      { q: "¿Cuántas sesiones necesito?", a: "Habitualmente varias, separadas por algunas semanas para dar tiempo a que la piel se renueve. El número exacto depende del tipo de estría, de la extensión de la zona y de cómo responda tu piel, y lo definimos en la valoración." },
      { q: "¿Duele?", a: "Depende de la técnica indicada. Suele sentirse una molestia tolerable, como calor o pinchazos finos, y cuando se requiere usamos anestesia tópica para que la sesión sea más cómoda. Te explicamos qué sentirás antes de empezar." },
      { q: "¿Qué efectos secundarios y recuperación tiene?", a: "Enrojecimiento, inflamación y sensibilidad pasajera son lo habitual, y según la técnica la recuperación va de 0 a 5 días. En pieles morenas existe riesgo de manchas, por eso el cuidado solar entre sesiones es importante." },
      { q: "¿Cuándo veo resultados?", a: "La mejoría es gradual porque la piel necesita tiempo para producir colágeno nuevo. Habitualmente se aprecia a lo largo de varios meses, y el resultado se evalúa mejor cuando terminas el protocolo." },
      { q: "¿Lo puedo combinar con otros tratamientos?", a: "Según tu caso, sí. En la valoración podemos proponer complementar con microagujas o láser CO2, que también realizamos, o sumar el tratamiento de celulitis si te preocupa la textura de la misma zona, respetando los tiempos de la piel." },
      { q: "¿Quién no puede hacérselo?", a: "No se indica en embarazo ni lactancia: es mejor esperar a terminarla. Tampoco con infección o herida activa en la zona. Si tienes tendencia a queloides o a manchas, lo revisamos antes para elegir una técnica adecuada para tu piel." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Tratamiento de estrías",
  },

  // ── Escleroterapia ───────────────────────────────────────────────────────
  {
    slug: "escleroterapia",
    categoria: "corporales",
    grupo: "Contorno corporal",
    nombre: "Escleroterapia",
    resultados: [],
    relacionados: ["celulitis", "estrias", "depilacion-laser"],
    hero: {
      eyebrow: "Escleroterapia · Piernas",
      titulo: "Piernas sin arañitas visibles,",
      tituloEm: "para lucirlas con tranquilidad",
      sub: "Tratamiento para las arañitas y várices finas de las piernas, con valoración médica previa. Si hay várices grandes, te orientamos primero a una valoración vascular.",
    },
    seo: {
      title: "Escleroterapia en Medellín | Clínica Quantum",
      description:
        "Escleroterapia en El Poblado, Medellín: tratamiento de arañitas y várices finas en las piernas, con valoración médica previa y cuidados de compresión.",
      keywords: [
        "escleroterapia medellín",
        "quitar arañitas de las piernas",
        "várices finas tratamiento medellín",
        "telangiectasias piernas",
        "escleroterapia precio medellín",
      ],
    },
    ficha: {
      duracion: "20 a 40 min por sesión",
      sesiones: "Habitualmente 2 a 4 sesiones",
      recuperacion: "Caminas y sigues tu día",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes arañitas rojas, azules o violáceas en las piernas",
        "Tienes várices finas que te incomodan estéticamente",
        "Quieres lucir tus piernas con más tranquilidad",
        "Puedes usar media de compresión después de las sesiones",
      ],
      noIdeal: [
        "Tienes várices grandes o abultadas: requieren valoración vascular",
        "Estás en embarazo o lactancia",
        "Tienes antecedente de trombosis o problemas de coagulación sin valorar",
        "Estarás en reposo prolongado o un viaje largo en los días siguientes",
      ],
    },
    problema: {
      titulo: "Esas líneas en las piernas que prefieres tapar",
      parrafos: [
        "Las arañitas y várices finas aparecen con los años, los embarazos, las hormonas o por pasar muchas horas de pie. No duelen, pero hacen que elijas pantalón aunque quieras ponerte falda.",
        "La escleroterapia es un tratamiento médico para estos vasos pequeños. Con sesiones y los cuidados correctos, las piernas se ven más uniformes.",
      ],
    },
    queEs: {
      titulo: "Qué es la escleroterapia",
      desc: "Es un procedimiento en el que se inyecta una solución esclerosante dentro de los vasos finos con una aguja muy delgada. La solución irrita la pared del vaso, que se cierra y el cuerpo va reabsorbiendo con el tiempo. Está indicada para arañitas y várices finas. Las várices grandes o con síntomas requieren una valoración vascular antes de cualquier tratamiento.",
    },
    beneficios: [
      "Para arañitas y várices finas",
      "Aguja muy fina",
      "Caminas después de la sesión",
      "Valoración médica previa",
    ],
    zonasTitulo: "Qué tratamos",
    zonas: [
      { icon: "✦", label: "Arañitas", desc: "Vasos finos rojos o violáceos en la piel." },
      { icon: "◇", label: "Várices finas", desc: "Venas azuladas pequeñas y superficiales." },
      { icon: "∪", label: "Muslos", desc: "Cara externa e interna." },
      { icon: "▽", label: "Pantorrillas y tobillos", desc: "Vasos finos visibles en la parte baja." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración de tus piernas",
        desc: "Revisamos el tamaño de los vasos, síntomas y antecedentes. Si hay várices grandes, te remitimos a valoración vascular antes de tratar.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Sesión de escleroterapia",
        desc: "Con una aguja muy fina aplicamos la solución esclerosante en los vasos a tratar. Se sienten pinchazos y a veces ardor breve.",
        detail: "20 a 40 min",
      },
      {
        num: "03",
        title: "Compresión y controles",
        desc: "Te colocas la media de compresión, caminas y seguimos la evolución para definir si necesitas otra sesión.",
        detail: "Control en semanas",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Selección de qué se puede tratar",
        desc: "La escleroterapia estética es para vasos finos. Várices grandes, dolor o hinchazón requieren primero estudio vascular.",
      },
      {
        num: "02",
        title: "Antecedentes revisados",
        desc: "Preguntamos por trombosis, coagulación, anticonceptivos y medicamentos antes de indicar el procedimiento.",
      },
      {
        num: "03",
        title: "Efectos explicados con honestidad",
        desc: "Morados, pequeñas manchas marrones temporales o nuevos vasos finos alrededor pueden aparecer. Te decimos cómo manejarlos.",
      },
      {
        num: "04",
        title: "Signos de alarma claros",
        desc: "Te explicamos qué síntomas requieren consulta inmediata, como dolor intenso o hinchazón de la pierna.",
      },
    ],
    cuidados: {
      antes: [
        "No te apliques cremas en las piernas el día de la sesión",
        "Trae o compra la media de compresión indicada",
        "Cuéntanos si tomas anticonceptivos, anticoagulantes u otros medicamentos",
        "Evita el bronceado en las piernas las semanas previas",
      ],
      despues: [
        "Usa la media de compresión el tiempo indicado",
        "Camina: ayuda a la circulación",
        "Evita ejercicio intenso, sauna y baños calientes los primeros días",
        "Protege las piernas del sol para reducir el riesgo de manchas",
        "Consulta de inmediato si tienes dolor intenso, calor o hinchazón en la pierna",
      ],
    },
    precio: {
      desde: null,
      opciones: [{ label: "Sesión", valor: null }],
      incluye: [
        "Valoración médica previa",
        "Sesión de escleroterapia",
        "Indicaciones de compresión y cuidado",
        "Control de evolución",
      ],
      nota: "El valor y el número de sesiones dependen de la extensión a tratar y los definimos en la valoración.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "El precio es personalizado según la extensión de las arañitas y el número de sesiones. Te lo damos en la valoración.",
      },
      {
        q: "¿Sirve para várices grandes?",
        a: "No es el tratamiento indicado para várices grandes o abultadas. En ese caso te orientamos a una valoración vascular especializada.",
      },
      {
        q: "¿Duele?",
        a: "Se sienten pinchazos con una aguja muy fina y, en algunos casos, ardor breve. La mayoría de pacientes lo tolera bien.",
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Habitualmente entre 2 y 4, separadas por semanas. Depende de la cantidad de vasos y de tu respuesta.",
      },
      {
        q: "¿Cuándo veo resultados?",
        a: "Los vasos tratados se van aclarando en las semanas siguientes; algunos tardan meses en desvanecerse por completo.",
      },
      {
        q: "¿Qué efectos secundarios tiene?",
        a: "Son frecuentes los morados y la sensibilidad. Pueden aparecer manchas marrones temporales o vasos muy finos alrededor. Las complicaciones serias son poco frecuentes y te explicamos cómo reconocerlas.",
      },
      {
        q: "¿Pueden salir nuevas arañitas?",
        a: "Sí. El tratamiento cierra los vasos tratados, pero la tendencia a formar nuevos continúa. Algunas pacientes hacen sesiones de mantenimiento.",
      },
      {
        q: "¿Quién no puede hacérsela?",
        a: "No está indicada en embarazo o lactancia, con antecedente de trombosis sin valorar, alergia a la solución esclerosante o si vas a estar en reposo prolongado.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Escleroterapia",
  },

  // ── Moldeamiento corporal con INDIBA ─────────────────────────────────────
  {
    slug: "moldeamiento-corporal",
    categoria: "corporales",
    grupo: "Aparatología INDIBA",
    nombre: "Moldeamiento corporal con INDIBA",
    resultados: [],
    relacionados: ["criolipolisis", "celulitis", "paquete-reductor-abdomen"],
    hero: {
      eyebrow: "INDIBA · Radiofrecuencia médica",
      titulo: "Moldea tu figura,",
      tituloEm: "sin cirugía ni incapacidad",
      sub: "Radiofrecuencia médica INDIBA combinada con mesoterapia para trabajar reducción, celulitis y flacidez. Un plan por sesiones, con criterio médico en cada paso.",
    },
    seo: {
      title: "Moldeamiento corporal INDIBA en Medellín | Quantum",
      description:
        "Moldeamiento corporal con INDIBA en El Poblado, Medellín: radiofrecuencia médica y mesoterapia para reducción, celulitis y flacidez sin cirugía.",
      keywords: [
        "moldeamiento corporal medellín",
        "indiba medellín",
        "radiofrecuencia corporal medellín",
        "tratamiento flacidez corporal",
        "indiba precio medellín",
      ],
    },
    ficha: {
      duracion: "40 a 60 min por sesión",
      sesiones: "5 o 12 sesiones según paquete",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, con el plan",
    },
    paraQuien: {
      ideal: [
        "Quieres reducir medidas en zonas puntuales",
        "Te preocupa la flacidez tras bajar de peso o un embarazo",
        "Tienes celulitis y buscas mejorar la textura",
        "Prefieres un tratamiento no invasivo, sin incapacidad",
      ],
      noIdeal: [
        "Tienes marcapasos o dispositivos electrónicos implantados",
        "Estás en embarazo",
        "Tienes tumores activos o trombosis reciente",
        "Buscas bajar mucho peso solo con aparatología",
      ],
    },
    problema: {
      titulo: "Hay zonas que la dieta y el gimnasio no alcanzan",
      parrafos: [
        "Abdomen, flancos, piernas o brazos: grasa localizada, celulitis o flacidez que persisten aunque entrenes y comas bien. Es frustrante, y la cirugía no debería ser la única salida.",
        "La radiofrecuencia médica trabaja el tejido con calor en profundidad y, combinada con mesoterapia, acompaña la reducción de medidas y la firmeza sin pausar tu vida.",
      ],
    },
    queEs: {
      titulo: "Qué es el moldeamiento corporal con INDIBA",
      desc: "INDIBA es una radiofrecuencia médica que se usa en tratamientos faciales, corporales, capilares, de dolor y de recuperación post quirúrgica. En el cuerpo genera calor controlado en profundidad que estimula el tejido y la circulación. Nuestro paquete corporal lo combina con mesoterapia para trabajar reducción, celulitis y flacidez. Es un tratamiento de moldeamiento: no reemplaza un descenso de peso.",
    },
    beneficios: [
      "Radiofrecuencia médica INDIBA",
      "Sin cirugía ni incapacidad",
      "Incluye mesoterapia",
      "Reducción, celulitis y flacidez",
    ],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "▭", label: "Abdomen", desc: "Grasa localizada y flacidez." },
      { icon: "◠", label: "Flancos", desc: "Contorno lateral de la cintura." },
      { icon: "∪", label: "Glúteos y piernas", desc: "Firmeza y textura de la celulitis." },
      { icon: "▽", label: "Brazos", desc: "Flacidez en la parte interna." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración corporal",
        desc: "Evaluamos las zonas, el estado del tejido y tus objetivos, y definimos el paquete y un número realista de sesiones.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Sesiones INDIBA y mesoterapia",
        desc: "La sesión de INDIBA se siente como un masaje con calor agradable. En el paquete corporal se intercalan las mesoterapias.",
        detail: "40 a 60 min por sesión",
      },
      {
        num: "03",
        title: "Resultados y seguimiento",
        desc: "Revisamos medidas y firmeza durante el plan y te damos pautas de hábitos para sostener el resultado.",
        detail: "Control de avance",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Contraindicaciones verificadas",
        desc: "Antes de iniciar descartamos marcapasos, embarazo, tumores activos, trombosis y alteraciones de sensibilidad en la zona.",
      },
      {
        num: "02",
        title: "Calor controlado",
        desc: "La intensidad se ajusta durante la sesión según lo que sientes, para trabajar el tejido de forma cómoda.",
      },
      {
        num: "03",
        title: "Expectativas honestas",
        desc: "INDIBA moldea y reafirma; no reemplaza un descenso de peso importante. En la valoración te decimos qué resultados esperar.",
      },
      {
        num: "04",
        title: "Plan con criterio médico",
        desc: "Si tu caso necesita otro enfoque, nutricional o médico, te lo decimos con claridad.",
      },
    ],
    cuidados: {
      antes: [
        "Llega con la piel limpia, sin cremas",
        "Retira joyas y objetos metálicos de la zona",
        "Cuéntanos si tienes marcapasos, implantes metálicos o estás en embarazo",
      ],
      despues: [
        "Toma suficiente agua",
        "Es normal que la zona quede tibia o enrojecida un rato",
        "Tras la mesoterapia evita sol, sauna y piscina ese día",
        "Mantén actividad física y buena alimentación",
        "Asiste a las sesiones con la frecuencia indicada",
      ],
    },
    precio: {
      desde: 450000,
      opciones: [
        {
          label: "INDIBA paquete corporal",
          detalle: "12 sesiones + 5 mesoterapias (reducción, celulitis, flacidez)",
          valor: 2500000,
        },
        { label: "Paquete de aparatología", detalle: "5 sesiones", valor: 450000 },
      ],
      incluye: [
        "Valoración médica previa",
        "Sesiones según el paquete elegido",
        "5 mesoterapias en el paquete corporal",
        "Indicaciones de cuidado y hábitos",
      ],
      nota: "El paquete adecuado y la frecuencia de las sesiones los definimos en la valoración.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "El paquete de aparatología de 5 sesiones cuesta desde $450.000. El paquete corporal INDIBA, con 12 sesiones y 5 mesoterapias, cuesta desde $2.500.000.",
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Depende de la zona y del objetivo. En la valoración te recomendamos el paquete con un número realista de sesiones.",
      },
      {
        q: "¿Duele o tiene incapacidad?",
        a: "La sesión de INDIBA se siente como calor agradable y no requiere incapacidad. La mesoterapia produce pinchazos finos, generalmente tolerables.",
      },
      {
        q: "¿Cuándo veo resultados?",
        a: "Muchas pacientes notan la piel más firme en las primeras semanas. Los cambios de contorno son progresivos a lo largo del plan.",
      },
      {
        q: "¿Sirve para adelgazar?",
        a: "No es un tratamiento para bajar de peso. Si ese es tu objetivo, tenemos programas médicos de reducción que pueden combinarse.",
      },
      {
        q: "¿Tiene efectos secundarios?",
        a: "Lo habitual es enrojecimiento o calor pasajero en la zona. Tras la mesoterapia puede haber sensibilidad o pequeños morados.",
      },
      {
        q: "¿Quién no puede hacérselo?",
        a: "No está indicado con marcapasos o dispositivos electrónicos implantados, embarazo, tumores activos, trombosis reciente o alteraciones de sensibilidad en la zona.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Moldeamiento corporal con INDIBA",
  },

  // ── INDIBA para dolor ────────────────────────────────────────────────────
  {
    slug: "indiba-dolor",
    categoria: "corporales",
    grupo: "Aparatología INDIBA",
    nombre: "INDIBA para dolor",
    resultados: [],
    relacionados: ["toxina-migrana", "masajes-de-relajacion", "indiba-post-quirurgico"],
    hero: {
      eyebrow: "INDIBA · Radiofrecuencia para dolor",
      titulo: "Menos tensión en el cuerpo,",
      tituloEm: "más ligereza en tu día",
      sub: "Radiofrecuencia médica INDIBA como complemento para el manejo del dolor muscular y articular, en un paquete de 10 sesiones y con valoración médica previa.",
    },
    seo: {
      title: "INDIBA para dolor en Medellín | Clínica Quantum",
      description:
        "INDIBA para dolor en El Poblado, Medellín: radiofrecuencia médica como complemento para aliviar dolor de espalda, cuello y contracturas, en 10 sesiones.",
      keywords: [
        "indiba para dolor medellín",
        "radiofrecuencia para dolor de espalda",
        "tratamiento dolor cervical medellín",
        "indiba contracturas",
        "terapia para dolor muscular el poblado",
      ],
    },
    ficha: {
      duracion: "30 a 45 min por sesión",
      sesiones: "Paquete de 10 sesiones",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Alivio progresivo, variable",
    },
    paraQuien: {
      ideal: [
        "Tienes dolor muscular o contracturas en espalda o cuello",
        "Sientes molestias articulares ya valoradas por tu médico",
        "Buscas un complemento no invasivo a tu tratamiento",
        "Quieres aliviar tensión acumulada por postura o estrés",
      ],
      noIdeal: [
        "Tienes un dolor nuevo, intenso o sin diagnóstico: primero debe estudiarse",
        "Tienes marcapasos o dispositivos electrónicos implantados",
        "Estás en embarazo",
        "Tienes tumores activos, trombosis o infección en la zona",
      ],
    },
    problema: {
      titulo: "Cuando el dolor se vuelve parte de tu rutina",
      parrafos: [
        "El cuello rígido después de horas frente al computador, la espalda baja que molesta al levantarte, una contractura que no termina de soltar. El dolor persistente cansa y cambia tu ánimo.",
        "INDIBA puede ser un apoyo para aliviar esa tensión y acompañar la recuperación del tejido, siempre como parte de un manejo con diagnóstico claro.",
      ],
    },
    queEs: {
      titulo: "Qué es INDIBA para dolor",
      desc: "INDIBA es una radiofrecuencia médica que se usa en tratamientos faciales, corporales, capilares, de dolor y de recuperación post quirúrgica. Aplicada sobre la zona, genera calor en profundidad que favorece la circulación y la relajación del tejido. Es un complemento terapéutico: no sustituye el diagnóstico médico del origen del dolor ni el tratamiento que este requiera.",
    },
    beneficios: [
      "Complemento no invasivo",
      "Calor terapéutico profundo",
      "Paquete de 10 sesiones",
      "Sin incapacidad",
    ],
    zonasTitulo: "Molestias que acompañamos",
    zonas: [
      { icon: "◠", label: "Cuello y hombros", desc: "Tensión y contracturas por postura." },
      { icon: "▭", label: "Espalda baja", desc: "Dolor muscular lumbar ya valorado." },
      { icon: "◇", label: "Articulaciones", desc: "Molestias de rodilla u hombro con diagnóstico." },
      { icon: "∪", label: "Contracturas", desc: "Músculos cargados por esfuerzo o estrés." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración del dolor",
        desc: "Revisamos tu historia, los estudios que tengas y el diagnóstico. Si el dolor no está estudiado, te orientamos antes de tratar.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Sesión de INDIBA",
        desc: "Aplicamos la radiofrecuencia sobre la zona con movimientos suaves. Sientes calor profundo y agradable.",
        detail: "30 a 45 min",
      },
      {
        num: "03",
        title: "Evolución del alivio",
        desc: "Revisamos cómo cambia tu dolor a lo largo de las 10 sesiones y ajustamos la intensidad y las zonas.",
        detail: "10 sesiones",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Diagnóstico primero",
        desc: "INDIBA complementa, no reemplaza, el estudio del origen del dolor. Dolor con fiebre, pérdida de fuerza u hormigueo requiere consulta médica.",
      },
      {
        num: "02",
        title: "Contraindicaciones revisadas",
        desc: "No se aplica con marcapasos, embarazo, tumores activos, trombosis o alteraciones de sensibilidad en la zona.",
      },
      {
        num: "03",
        title: "Intensidad según lo que sientes",
        desc: "Ajustamos el calor durante la sesión para que sea cómodo y seguro para tu piel.",
      },
      {
        num: "04",
        title: "Expectativas claras",
        desc: "La respuesta varía entre personas y según la causa del dolor. Te decimos con honestidad qué esperar.",
      },
    ],
    cuidados: {
      antes: [
        "Trae tus exámenes o diagnósticos previos",
        "Retira joyas y objetos metálicos de la zona",
        "Cuéntanos si tienes marcapasos, implantes metálicos o estás en embarazo",
      ],
      despues: [
        "Toma suficiente agua",
        "Es normal sentir la zona tibia o enrojecida un rato",
        "Continúa con el tratamiento y los ejercicios que te indicó tu médico",
        "Cuida la postura y las pausas activas",
        "Consulta si el dolor empeora o aparecen síntomas nuevos",
      ],
    },
    precio: {
      desde: 1500000,
      opciones: [{ label: "Paquete de dolor", detalle: "10 sesiones", valor: 1500000 }],
      incluye: [
        "Valoración médica previa",
        "10 sesiones de INDIBA",
        "Ajuste de zonas e intensidad según evolución",
        "Indicaciones de cuidado",
      ],
      nota: "Es un complemento terapéutico: no sustituye el diagnóstico ni el tratamiento médico del origen del dolor.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "El paquete de dolor tiene un valor desde $1.500.000 e incluye 10 sesiones de INDIBA.",
      },
      {
        q: "¿Reemplaza a mi médico o fisioterapeuta?",
        a: "No. Es un complemento. El origen del dolor debe estar diagnosticado y el tratamiento principal lo define tu médico tratante.",
      },
      {
        q: "¿Cómo se siente la sesión?",
        a: "Como un calor profundo y agradable en la zona. La intensidad se ajusta a lo que sientes.",
      },
      {
        q: "¿Cuándo noto alivio?",
        a: "Algunas personas sienten la zona más suelta desde las primeras sesiones; en otras el alivio es más gradual. La respuesta depende de la causa del dolor.",
      },
      {
        q: "¿Cada cuánto son las sesiones?",
        a: "Habitualmente una a tres veces por semana. La frecuencia la definimos en la valoración.",
      },
      {
        q: "¿Tiene efectos secundarios?",
        a: "Lo habitual es enrojecimiento o calor pasajero. Si tienes alteraciones de sensibilidad, lo revisamos antes para evitar molestias en la piel.",
      },
      {
        q: "¿Quién no puede hacérselo?",
        a: "No está indicado con marcapasos o dispositivos electrónicos implantados, embarazo, tumores activos, trombosis o infección en la zona.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para INDIBA para dolor",
  },

  // ── Acompañamiento post quirúrgico ───────────────────────────────────────
  {
    slug: "post-quirurgico",
    categoria: "corporales",
    grupo: "Post quirúrgico",
    nombre: "Acompañamiento post quirúrgico",
    resultados: [],
    relacionados: ["indiba-post-quirurgico", "tratamiento-de-fibrosis", "sueroterapia"],
    hero: {
      eyebrow: "Post quirúrgico · Drenajes y curaciones",
      titulo: "Tu recuperación en buenas manos,",
      tituloEm: "para cuidar el resultado de tu cirugía",
      sub: "Cuidamos tu recuperación con INDIBA, drenajes y curaciones para bajar la inflamación y proteger el resultado de tu cirugía, siempre en coordinación con las indicaciones de tu cirujano.",
    },
    seo: {
      title: "Post quirúrgico en Medellín | Clínica Quantum",
      description:
        "Acompañamiento post quirúrgico en El Poblado, Medellín: drenajes linfáticos, curaciones, ultrasonido e INDIBA para bajar la inflamación tras tu cirugía.",
      keywords: [
        "drenaje linfático post operatorio medellín",
        "post quirúrgico lipoescultura medellín",
        "curaciones post quirúrgicas medellín",
        "recuperación después de cirugía plástica",
        "indiba post operatorio",
      ],
    },
    ficha: {
      duracion: "45 a 60 min por sesión",
      sesiones: "8 o 10 sesiones según plan",
      recuperacion: "Acompaña tu recuperación",
      resultados: "Menos inflamación, progresivo",
    },
    paraQuien: {
      ideal: [
        "Te hiciste lipoescultura, abdominoplastia u otra cirugía corporal",
        "Tu cirujano autorizó iniciar drenajes",
        "Quieres controlar la inflamación y cuidar tu resultado",
        "Necesitas curaciones con seguimiento profesional",
      ],
      noIdeal: [
        "Tu cirujano aún no autoriza el inicio de las terapias",
        "Tienes signos de infección, fiebre o sangrado: debes consultar a tu cirujano",
        "Sospechas trombosis: dolor e hinchazón de una pierna requieren urgencias",
      ],
    },
    problema: {
      titulo: "Los días después de la cirugía también cuentan",
      parrafos: [
        "Después de una cirugía corporal es normal sentir el cuerpo inflamado, duro y sensible. Es un momento en el que te preguntas si todo va bien y cómo cuidar la inversión que hiciste.",
        "Un acompañamiento post quirúrgico ordenado ayuda a manejar la inflamación, vigila las heridas y te da tranquilidad durante la recuperación.",
      ],
    },
    queEs: {
      titulo: "Qué es el acompañamiento post quirúrgico",
      desc: "Es un plan de recuperación con drenajes linfáticos manuales, que ayudan a movilizar el líquido acumulado, curaciones de las heridas y terapias como ultrasonido o radiofrecuencia INDIBA. Tienes dos opciones: el plan básico con drenajes, curaciones y ultrasonido, o el plan con INDIBA. Iniciamos cuando tu cirujano lo autoriza y seguimos sus indicaciones.",
    },
    beneficios: [
      "Drenajes linfáticos manuales",
      "Curaciones incluidas",
      "Opción con INDIBA",
      "Coordinado con tu cirujano",
    ],
    zonasTitulo: "En qué te ayudamos",
    zonas: [
      { icon: "◡", label: "Inflamación", desc: "Drenajes para movilizar el líquido acumulado." },
      { icon: "✦", label: "Heridas", desc: "Curaciones y vigilancia de la cicatrización." },
      { icon: "◇", label: "Zonas endurecidas", desc: "Terapias para acompañar la suavidad del tejido." },
      { icon: "○", label: "Tranquilidad", desc: "Seguimiento cercano durante tu recuperación." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración post quirúrgica",
        desc: "Revisamos la cirugía, las indicaciones de tu cirujano, las heridas y el estado de la zona para definir tu plan.",
        detail: "Autorización del cirujano",
      },
      {
        num: "02",
        title: "Drenajes, curaciones y terapias",
        desc: "Realizamos los drenajes manuales con presión suave, las curaciones y las sesiones de ultrasonido o INDIBA según el plan.",
        detail: "8 o 10 sesiones",
      },
      {
        num: "03",
        title: "Seguimiento de la recuperación",
        desc: "Vigilamos inflamación, heridas y zonas endurecidas en cada sesión y te remitimos a tu cirujano si algo lo requiere.",
        detail: "Control en cada sesión",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Coordinación con tu cirujano",
        desc: "No reemplazamos sus controles. Iniciamos cuando lo autoriza y respetamos sus indicaciones sobre faja y cuidados.",
      },
      {
        num: "02",
        title: "Técnica suave y adecuada",
        desc: "El drenaje post quirúrgico es de presión suave. Evitamos maniobras bruscas que puedan lastimar el tejido en recuperación.",
      },
      {
        num: "03",
        title: "Curaciones con asepsia",
        desc: "Las heridas se manejan con técnica limpia y vigilamos signos de infección o seroma.",
      },
      {
        num: "04",
        title: "Signos de alarma claros",
        desc: "Fiebre, secreción, dolor creciente o hinchazón de una pierna requieren consulta inmediata. Te lo explicamos desde el inicio.",
      },
    ],
    cuidados: {
      antes: [
        "Trae el resumen de tu cirugía y las indicaciones de tu cirujano",
        "Asiste con la faja o prenda de compresión indicada",
        "Cuéntanos los medicamentos que estás tomando",
      ],
      despues: [
        "Usa la faja el tiempo que indicó tu cirujano",
        "Mantente hidratada y camina según lo permitido",
        "Mantén las heridas limpias y secas entre curaciones",
        "Asiste a las sesiones con la frecuencia acordada",
        "Consulta de inmediato si tienes fiebre, secreción o dolor intenso",
      ],
    },
    precio: {
      desde: 750000,
      opciones: [
        {
          label: "Post quirúrgico",
          detalle: "8 sesiones de drenaje + curaciones + 4 ultrasonido",
          valor: 750000,
        },
        {
          label: "Post quirúrgico con INDIBA",
          detalle: "10 sesiones INDIBA + drenajes manuales + curaciones",
          valor: 2500000,
        },
      ],
      incluye: [
        "Valoración post quirúrgica",
        "Drenajes linfáticos manuales",
        "Curaciones",
        "Ultrasonido o INDIBA según el plan",
        "Indicaciones de cuidado",
      ],
      nota: "Iniciamos cuando tu cirujano lo autoriza. El plan adecuado lo definimos en la valoración.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "El plan post quirúrgico con 8 drenajes, curaciones y 4 ultrasonidos cuesta desde $750.000. El plan con 10 sesiones de INDIBA, drenajes manuales y curaciones cuesta desde $2.500.000.",
      },
      {
        q: "¿Cuándo puedo empezar?",
        a: "Cuando tu cirujano lo autorice. Habitualmente es en los primeros días después de la cirugía, pero depende del procedimiento y de tu evolución.",
      },
      {
        q: "¿Los drenajes duelen?",
        a: "Se hacen con presión suave. Puede haber molestia en zonas sensibles o endurecidas, y ajustamos la técnica a lo que sientes.",
      },
      {
        q: "¿Cuál plan me conviene?",
        a: "Depende de la cirugía, la extensión de la zona y tu evolución. En la valoración te recomendamos el plan básico o el plan con INDIBA.",
      },
      {
        q: "¿Reemplaza los controles con mi cirujano?",
        a: "No. Es un acompañamiento complementario. Tu cirujano sigue siendo quien controla la cirugía y su resultado.",
      },
      {
        q: "¿Ayuda con la fibrosis?",
        a: "Un buen manejo post quirúrgico ayuda a cuidar el tejido. Si ya hay zonas de fibrosis, podemos valorar el tratamiento de fibrosis.",
      },
      {
        q: "¿Qué síntomas debo reportar?",
        a: "Fiebre, secreción o mal olor en las heridas, enrojecimiento que se extiende, dolor creciente, falta de aire o hinchazón de una pierna. Ante estos síntomas consulta de inmediato.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Acompañamiento post quirúrgico",
  },

  // ── INDIBA post quirúrgico ───────────────────────────────────────────────
  {
    slug: "indiba-post-quirurgico",
    categoria: "corporales",
    grupo: "Post quirúrgico",
    nombre: "INDIBA post quirúrgico",
    resultados: [],
    relacionados: ["post-quirurgico", "tratamiento-de-fibrosis", "indiba-dolor"],
    hero: {
      eyebrow: "INDIBA · Recuperación post quirúrgica",
      titulo: "Una recuperación más llevadera,",
      tituloEm: "con radiofrecuencia médica",
      sub: "Paquete de 10 sesiones de INDIBA con drenajes y curaciones para acompañar la recuperación después de tu cirugía corporal, con autorización de tu cirujano.",
    },
    seo: {
      title: "INDIBA post quirúrgico en Medellín | Clínica Quantum",
      description:
        "INDIBA post quirúrgico en El Poblado, Medellín: 10 sesiones de radiofrecuencia médica con drenajes y curaciones para acompañar tu recuperación.",
      keywords: [
        "indiba post operatorio medellín",
        "radiofrecuencia post quirúrgica",
        "recuperación lipoescultura medellín",
        "drenaje e indiba después de cirugía",
        "indiba fibrosis medellín",
      ],
    },
    ficha: {
      duracion: "45 a 60 min por sesión",
      sesiones: "Paquete de 10 sesiones",
      recuperacion: "Acompaña tu recuperación",
      resultados: "Progresivos, sesión a sesión",
    },
    paraQuien: {
      ideal: [
        "Tuviste una cirugía corporal como lipoescultura o abdominoplastia",
        "Tu cirujano autorizó iniciar terapias",
        "Tienes inflamación o zonas endurecidas en recuperación",
        "Quieres un plan completo con drenajes y curaciones",
      ],
      noIdeal: [
        "Tu cirujano aún no autoriza el uso de radiofrecuencia",
        "Tienes marcapasos o dispositivos electrónicos implantados",
        "Tienes signos de infección, sangrado o sospecha de trombosis",
        "Tienes alteraciones importantes de sensibilidad en la zona",
      ],
    },
    problema: {
      titulo: "Cuando la inflamación y la dureza no te dejan sentirte bien",
      parrafos: [
        "Las semanas después de una cirugía corporal traen inflamación, zonas duras y la incertidumbre de si el tejido está sanando como debe.",
        "Sumar radiofrecuencia médica a los drenajes y curaciones te da un acompañamiento más completo para esta etapa, con vigilancia profesional.",
      ],
    },
    queEs: {
      titulo: "Qué es INDIBA post quirúrgico",
      desc: "INDIBA es una radiofrecuencia médica que se usa en tratamientos faciales, corporales, capilares, de dolor y de recuperación post quirúrgica. Después de una cirugía genera calor suave y controlado que favorece la circulación del tejido. Este paquete combina 10 sesiones de INDIBA con drenajes y curaciones, y se inicia cuando tu cirujano lo autoriza.",
    },
    beneficios: [
      "10 sesiones de INDIBA",
      "Drenajes incluidos",
      "Curaciones incluidas",
      "Seguimiento cercano",
    ],
    zonasTitulo: "En qué te ayudamos",
    zonas: [
      { icon: "◡", label: "Inflamación", desc: "Apoyo a la reabsorción del líquido acumulado." },
      { icon: "◇", label: "Tejido endurecido", desc: "Acompañamos la suavidad de las zonas duras." },
      { icon: "✦", label: "Heridas", desc: "Curaciones y vigilancia de la cicatrización." },
      { icon: "○", label: "Comodidad", desc: "Menos sensación de tirantez durante la recuperación." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración post quirúrgica",
        desc: "Revisamos tu cirugía, las indicaciones de tu cirujano y el estado de la zona para planear las sesiones.",
        detail: "Autorización del cirujano",
      },
      {
        num: "02",
        title: "INDIBA, drenaje y curación",
        desc: "Aplicamos INDIBA con calor suave, realizamos el drenaje manual y la curación de las heridas cuando corresponde.",
        detail: "10 sesiones",
      },
      {
        num: "03",
        title: "Seguimiento del tejido",
        desc: "Vigilamos inflamación, zonas duras y cicatrización en cada sesión, y te remitimos a tu cirujano si algo lo requiere.",
        detail: "Control en cada sesión",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Coordinación con tu cirujano",
        desc: "Iniciamos la radiofrecuencia solo con su autorización y respetamos sus indicaciones sobre faja y actividad.",
      },
      {
        num: "02",
        title: "Calor adaptado a un tejido sensible",
        desc: "Después de cirugía la sensibilidad puede estar alterada. Usamos intensidades suaves y revisamos la piel constantemente.",
      },
      {
        num: "03",
        title: "Contraindicaciones verificadas",
        desc: "No aplicamos INDIBA con marcapasos, infección activa, sangrado, trombosis o tumores en la zona.",
      },
      {
        num: "04",
        title: "Signos de alarma claros",
        desc: "Fiebre, secreción, dolor creciente o hinchazón de una pierna requieren consulta inmediata con tu cirujano o urgencias.",
      },
    ],
    cuidados: {
      antes: [
        "Trae el resumen de tu cirugía y la autorización de tu cirujano",
        "Asiste con la faja o prenda de compresión indicada",
        "Retira joyas y objetos metálicos de la zona",
        "Cuéntanos si tienes implantes metálicos o marcapasos",
      ],
      despues: [
        "Usa la faja el tiempo indicado por tu cirujano",
        "Toma suficiente agua",
        "Mantén las heridas limpias y secas",
        "Asiste a las sesiones con la frecuencia acordada",
        "Consulta de inmediato si tienes fiebre, secreción o dolor intenso",
      ],
    },
    precio: {
      desde: 2800000,
      opciones: [{ label: "Paquete", detalle: "10 sesiones + drenajes + curaciones", valor: 2800000 }],
      incluye: [
        "Valoración post quirúrgica",
        "10 sesiones de INDIBA",
        "Drenajes",
        "Curaciones",
        "Indicaciones de cuidado",
      ],
      nota: "Iniciamos cuando tu cirujano lo autoriza. La frecuencia de las sesiones la definimos en la valoración.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "El paquete tiene un valor desde $2.800.000 e incluye 10 sesiones de INDIBA, drenajes y curaciones.",
      },
      {
        q: "¿Cuándo puedo empezar con INDIBA?",
        a: "Cuando tu cirujano lo autorice. El momento depende del tipo de cirugía y de cómo evoluciona tu recuperación.",
      },
      {
        q: "¿Cómo se siente?",
        a: "Como un calor suave en la zona. Después de una cirugía la sensibilidad puede cambiar, por eso usamos intensidades bajas y te preguntamos constantemente.",
      },
      {
        q: "¿Qué diferencia hay con el acompañamiento post quirúrgico básico?",
        a: "Este paquete suma 10 sesiones de INDIBA a los drenajes y curaciones. El básico usa drenajes, curaciones y ultrasonido.",
      },
      {
        q: "¿Ayuda con la fibrosis?",
        a: "La radiofrecuencia puede acompañar el manejo de zonas endurecidas. Si la fibrosis ya está establecida, valoramos complementar con el tratamiento de fibrosis.",
      },
      {
        q: "¿Tiene efectos secundarios?",
        a: "Puede quedar enrojecimiento o calor pasajero. Con la sensibilidad alterada existe riesgo de irritación de la piel, por eso vigilamos cada sesión.",
      },
      {
        q: "¿Reemplaza los controles con mi cirujano?",
        a: "No. Es un acompañamiento complementario y tu cirujano sigue controlando tu recuperación.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para INDIBA post quirúrgico",
  },

  // ── Tratamiento de fibrosis ──────────────────────────────────────────────
  {
    slug: "tratamiento-de-fibrosis",
    categoria: "corporales",
    grupo: "Enzimas y cicatrices",
    nombre: "Tratamiento de fibrosis",
    resultados: [],
    relacionados: ["post-quirurgico", "enzimas-cicatrices-queloides", "indiba-post-quirurgico"],
    hero: {
      eyebrow: "Enzimas recombinantes · Fibrosis",
      titulo: "Suaviza esas zonas duras,",
      tituloEm: "vuelve a sentir tu piel flexible",
      sub: "Ayuda a suavizar y mejorar la apariencia de la fibrosis postquirúrgica, favoreciendo una textura más uniforme y flexible, con aplicación de enzimas recombinantes tras valoración médica.",
    },
    seo: {
      title: "Tratamiento de fibrosis en Medellín | Clínica Quantum",
      description:
        "Tratamiento de fibrosis post quirúrgica en El Poblado, Medellín: enzimas recombinantes para suavizar zonas duras e irregulares y mejorar la textura.",
      keywords: [
        "tratamiento fibrosis medellín",
        "fibrosis después de lipoescultura",
        "enzimas para fibrosis medellín",
        "zonas duras después de cirugía",
        "fibrosis post operatoria tratamiento",
      ],
    },
    ficha: {
      duracion: "20 a 30 min por sesión",
      sesiones: "Según extensión de la fibrosis",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes zonas duras o irregulares después de una cirugía corporal",
        "Notas la piel con pliegues o hundimientos por fibrosis",
        "Ya pasaste la etapa inicial de recuperación",
        "Quieres mejorar la textura y flexibilidad de la zona",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes infección activa, seroma o herida abierta en la zona",
        "Tienes alergia conocida a los componentes",
      ],
    },
    problema: {
      titulo: "Cuando la cirugía sanó, pero la zona no se siente igual",
      parrafos: [
        "Después de una lipoescultura u otra cirugía corporal pueden quedar zonas duras, bultos o irregularidades que se notan al tacto y a veces a la vista. Es frustrante después de todo el proceso.",
        "La fibrosis es una respuesta de cicatrización del tejido. Con un manejo adecuado es posible suavizarla y mejorar la apariencia de la zona.",
      ],
    },
    queEs: {
      titulo: "Qué es el tratamiento de fibrosis",
      desc: "Es la aplicación de enzimas recombinantes en las zonas de fibrosis postquirúrgica para ayudar a suavizarlas y mejorar su apariencia, favoreciendo una textura más uniforme y flexible. Se aplica con aguja fina en el tejido afectado y puede complementarse con drenajes o INDIBA. El número de aplicaciones depende de la extensión y la antigüedad de la fibrosis.",
    },
    beneficios: [
      "Suaviza zonas endurecidas",
      "Textura más uniforme",
      "Aplicación localizada",
      "Complementa tu post quirúrgico",
    ],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "◇", label: "Zonas duras", desc: "Tejido endurecido al tacto." },
      { icon: "▭", label: "Irregularidades", desc: "Bultos o desniveles en la superficie." },
      { icon: "◡", label: "Hundimientos", desc: "Pliegues o retracciones por cicatrización." },
      { icon: "○", label: "Flexibilidad", desc: "Piel que se mueve de forma más natural." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración de la fibrosis",
        desc: "Palpamos y revisamos la zona, el tiempo desde la cirugía y tu evolución para confirmar que el tratamiento es adecuado.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Aplicación de enzimas",
        desc: "Aplicamos las enzimas recombinantes con aguja fina en las zonas de fibrosis marcadas.",
        detail: "Por cada 3 cc",
      },
      {
        num: "03",
        title: "Control y complementos",
        desc: "Revisamos cómo se suaviza la zona y definimos si se requiere otra aplicación o apoyo con drenajes o INDIBA.",
        detail: "Control en semanas",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Diagnóstico diferencial",
        desc: "No toda zona dura es fibrosis: descartamos seromas, infección u otras causas antes de aplicar.",
      },
      {
        num: "02",
        title: "Antecedentes de alergia revisados",
        desc: "Preguntamos por alergias y reacciones previas antes de usar las enzimas.",
      },
      {
        num: "03",
        title: "Aplicación precisa",
        desc: "Personal médico marca las zonas y aplica solo donde hay fibrosis para cuidar el tejido sano.",
      },
      {
        num: "04",
        title: "Expectativas claras",
        desc: "La mejoría es gradual y depende de la antigüedad de la fibrosis. Puede requerir varias aplicaciones.",
      },
    ],
    cuidados: {
      antes: [
        "Trae el resumen de tu cirugía",
        "Cuéntanos tus alergias y medicamentos",
        "Llega con la zona limpia, sin cremas",
      ],
      despues: [
        "Es normal sentir inflamación, enrojecimiento o sensibilidad unos días",
        "Sigue usando la faja si tu cirujano lo indica",
        "Asiste a los drenajes o sesiones complementarias",
        "Evita sauna y calor directo los primeros días",
        "Consulta si notas enrojecimiento que se extiende, ronchas o dificultad para respirar",
      ],
    },
    precio: {
      desde: 280000,
      opciones: [{ label: "Enzimas recombinantes · 3 cc", valor: 280000 }],
      incluye: [
        "Valoración médica previa",
        "Aplicación de enzimas recombinantes (3 cc)",
        "Indicaciones de cuidado",
        "Control de evolución",
      ],
      nota: "La cantidad de enzimas y el número de aplicaciones los definimos según la extensión de la fibrosis.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "La aplicación de enzimas recombinantes tiene un valor desde $280.000 por cada 3 cc. La cantidad necesaria depende de la extensión de la fibrosis.",
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Depende del tamaño y la antigüedad de las zonas duras. Algunas pacientes requieren una aplicación y otras varias.",
      },
      {
        q: "¿Duele?",
        a: "Se sienten pinchazos con aguja fina y algo de presión. La molestia suele ser tolerable y breve.",
      },
      {
        q: "¿Cuándo veo cambios?",
        a: "La zona se suaviza de forma progresiva en las semanas siguientes a la aplicación.",
      },
      {
        q: "¿Qué efectos secundarios tiene?",
        a: "Inflamación, enrojecimiento, sensibilidad o morados leves en la zona son lo habitual. Las reacciones alérgicas son poco frecuentes y por eso revisamos tus antecedentes.",
      },
      {
        q: "¿Se combina con INDIBA o drenajes?",
        a: "Sí. Puede complementarse con el acompañamiento post quirúrgico o INDIBA post quirúrgico según tu caso.",
      },
      {
        q: "¿Quién no puede hacérselo?",
        a: "No está indicado en embarazo o lactancia, con infección, seroma o herida abierta en la zona, ni con alergia a los componentes.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Tratamiento de fibrosis",
  },

  // ── Depilación láser ─────────────────────────────────────────────────────
  {
    slug: "depilacion-laser",
    categoria: "corporales",
    grupo: "Cosmetología",
    nombre: "Depilación láser",
    resultados: [],
    relacionados: ["despigmentacion-intima-axilas", "hiperhidrosis", "limpieza-facial"],
    hero: {
      eyebrow: "Depilación láser · Por zonas",
      titulo: "Menos vello, menos rutina,",
      tituloEm: "piel suave por más tiempo",
      sub: "Reduce el vello de forma progresiva, por zonas. Ajustamos el plan a tu tipo de vello y de piel para trabajar con criterio y cuidar tu piel en cada sesión.",
    },
    seo: {
      title: "Depilación láser en Medellín | Clínica Quantum",
      description:
        "Depilación láser en El Poblado, Medellín: reduce el vello de forma progresiva por zonas, con plan ajustado a tu tipo de vello y piel. Valor por zona.",
      keywords: [
        "depilación láser medellín",
        "depilación láser precio medellín",
        "depilación láser axilas",
        "depilación láser bikini medellín",
        "depilación láser el poblado",
      ],
    },
    ficha: {
      duracion: "10 a 30 min por zona",
      sesiones: "Habitualmente 6 a 10 sesiones",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Reducción progresiva del vello",
    },
    paraQuien: {
      ideal: [
        "Estás cansada de afeitarte o depilarte con cera",
        "Tienes vello oscuro que responde mejor al láser",
        "Te salen vellos encarnados o irritación al rasurar",
        "Quieres tratar zonas específicas a tu ritmo",
      ],
      noIdeal: [
        "Tu vello es blanco, canoso, rubio claro o pelirrojo: responde poco",
        "Tienes la piel bronceada o te expusiste al sol recientemente",
        "Estás en embarazo",
        "Tomas medicamentos fotosensibilizantes sin valorar",
      ],
    },
    problema: {
      titulo: "La cuchilla, la cera y la irritación de siempre",
      parrafos: [
        "Rasurarte cada pocos días, programar la cera, lidiar con vellos encarnados y manchas por irritación. Es tiempo y molestia que se repite sin fin.",
        "La depilación láser reduce el vello de forma progresiva, para que cada vez tengas que pensar menos en él.",
      ],
    },
    queEs: {
      titulo: "Qué es la depilación láser",
      desc: "Es un tratamiento que usa luz láser absorbida por el pigmento del vello para dañar el folículo y reducir su crecimiento. Actúa sobre los vellos en fase de crecimiento, por eso se necesitan varias sesiones espaciadas. Funciona mejor en vello oscuro y el número de sesiones depende de la zona, el tipo de vello y tu piel. Es una reducción progresiva: con el tiempo pueden requerirse sesiones de mantenimiento.",
    },
    beneficios: [
      "Reducción progresiva del vello",
      "Menos vellos encarnados",
      "Valor por zona",
      "Plan según tu piel",
    ],
    zonasTitulo: "Zonas frecuentes",
    zonas: [
      { icon: "◠", label: "Axilas", desc: "Menos vello y menos irritación." },
      { icon: "▽", label: "Bikini", desc: "Zona de ingle, según la extensión que elijas." },
      { icon: "∪", label: "Piernas", desc: "Media pierna o pierna completa por zonas." },
      { icon: "◡", label: "Rostro", desc: "Bozo y mentón." },
      { icon: "▭", label: "Abdomen y espalda", desc: "Línea alba, espalda o pecho." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración de piel y vello",
        desc: "Revisamos tu tipo de piel, el color y grosor del vello, medicamentos y exposición solar para definir si el láser es adecuado.",
        detail: "Valoración previa",
      },
      {
        num: "02",
        title: "Sesión por zona",
        desc: "Con la zona rasurada aplicamos el láser. Se siente como pequeños chasquidos de calor en la piel.",
        detail: "10 a 30 min por zona",
      },
      {
        num: "03",
        title: "Plan de sesiones",
        desc: "Repetimos las sesiones cada varias semanas según el crecimiento del vello y revisamos cómo responde tu piel.",
        detail: "6 a 10 sesiones habituales",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Parámetros según tu piel",
        desc: "El fototipo y el color del vello definen la configuración. En pieles morenas se trabaja con más precaución.",
      },
      {
        num: "02",
        title: "Sin sol reciente",
        desc: "No aplicamos sobre piel bronceada para reducir el riesgo de quemaduras o manchas.",
      },
      {
        num: "03",
        title: "Expectativas honestas",
        desc: "Es una reducción progresiva del vello. Vello claro o canoso responde poco y te lo decimos antes de empezar.",
      },
      {
        num: "04",
        title: "Protección ocular y de la piel",
        desc: "Usamos protección para los ojos y revisamos la zona durante la sesión para ajustar si hay molestia excesiva.",
      },
    ],
    cuidados: {
      antes: [
        "Rasura la zona uno o dos días antes",
        "No uses cera, pinzas ni cremas depilatorias semanas antes",
        "Evita el sol y el autobronceador en la zona",
        "Cuéntanos si tomas medicamentos o tienes tratamientos en la piel",
      ],
      despues: [
        "Es normal que la zona quede enrojecida o con pequeños puntos inflamados unas horas",
        "Usa protector solar si la zona queda expuesta",
        "Evita sol, sauna y ejercicio intenso ese día",
        "Entre sesiones solo rasura, sin cera ni pinzas",
        "Consulta si aparecen ampollas o manchas",
      ],
    },
    precio: {
      desde: 40000,
      opciones: [{ label: "Por zona", valor: 40000 }],
      incluye: [
        "Valoración de piel y vello",
        "Sesión de depilación láser por zona",
        "Indicaciones de cuidado antes y después",
      ],
      nota: "El valor es por zona y por sesión. El número de sesiones depende de tu tipo de vello y de piel.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta?",
        a: "El valor es desde $40.000 por zona. El costo total depende de cuántas zonas trates y del número de sesiones que necesites.",
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Habitualmente entre 6 y 10 por zona, espaciadas varias semanas. Depende del tipo de vello, la zona, tu piel y factores hormonales.",
      },
      {
        q: "¿Duele?",
        a: "Se siente como chasquidos de calor en la piel. En zonas sensibles como el bikini puede ser más intenso, pero suele ser tolerable.",
      },
      {
        q: "¿Es permanente?",
        a: "Es una reducción progresiva y duradera del vello, pero pueden quedar vellos más finos o salir nuevos con cambios hormonales. Algunas personas hacen sesiones de mantenimiento.",
      },
      {
        q: "¿Funciona en vello claro?",
        a: "El láser actúa sobre el pigmento, por eso el vello blanco, canoso, rubio claro o pelirrojo responde poco o nada.",
      },
      {
        q: "¿Qué efectos secundarios tiene?",
        a: "Lo habitual es enrojecimiento y pequeños puntos inflamados que ceden en horas. Con menor frecuencia pueden aparecer quemaduras o cambios de color de la piel, sobre todo con exposición solar.",
      },
      {
        q: "¿Puedo hacérmelo si estoy bronceada?",
        a: "No. Es necesario esperar a que el bronceado se vaya para reducir el riesgo de quemaduras y manchas.",
      },
      {
        q: "¿Quién no puede hacérselo?",
        a: "No se recomienda en embarazo, piel bronceada, infección o lesiones en la zona, ni con medicamentos fotosensibilizantes sin valoración.",
      },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Depilación láser",
  },
];
