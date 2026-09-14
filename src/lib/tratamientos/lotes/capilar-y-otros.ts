import type { Tratamiento } from "../types";

export const capilarYOtros: Tratamiento[] = [
  // ── Trasplante capilar ───────────────────────────────────────────────────
  {
    slug: "implante-capilar-fue",
    categoria: "capilares",
    grupo: "Medicina capilar",
    nombre: "Trasplante capilar",
    resultados: ["trasplante-capilar"],
    relacionados: ["trasplante-de-barba", "prp-capilar", "exosomas-capilares"],
    secuencia: {
      dir: "capilar",
      frameCount: 61,
      alturaVh: 300,
      badge: "Folículo a folículo",
      frase: "Cada injerto, colocado a mano",
    },
    hero: {
      eyebrow: "MEDICINA CAPILAR · TRASPLANTE CAPILAR",
      titulo: "Recupera densidad y tu línea del cabello,",
      tituloEm: "con un resultado natural",
      sub: "Trasplante capilar para entradas, coronilla y zonas con pérdida de densidad. Partimos de una valoración médica individual con analizador capilar, bajo la dirección médica de la Dra. Daniela Díez.",
    },
    seo: {
      title: "Trasplante capilar en Medellín | Clínica Quantum",
      description:
        "Trasplante capilar en El Poblado, Medellín: recupera densidad en entradas y coronilla con un resultado natural y duradero. Valoración con analizador.",
      keywords: [
        "trasplante capilar medellín",
        "implante capilar medellín",
        "trasplante de cabello el poblado",
        "injerto capilar medellín",
        "trasplante capilar precio medellín",
      ],
    },
    ficha: {
      duracion: "Varias horas, en una jornada",
      sesiones: "Habitualmente 1 procedimiento",
      recuperacion: "Rutina suave en pocos días",
      resultados: "Progresivos, entre 9 y 12 meses",
    },
    paraQuien: {
      ideal: [
        "Tienes entradas o coronilla que te hacen sentir mayor",
        "Notas zonas con menos densidad que ya no se recuperan",
        "Tu caída está estable o controlada con tratamiento",
        "Buscas un resultado natural con tu propio cabello",
        "Estás dispuesto a esperar el crecimiento de varios meses",
      ],
      noIdeal: [
        "Tu zona donante no tiene suficiente densidad",
        "La caída está muy activa y sin estudiar: primero hay que diagnosticarla",
        "Tienes una infección o enfermedad activa en el cuero cabelludo",
        "Esperas ver el resultado final en pocas semanas",
      ],
    },
    problema: {
      titulo: "Cuando el espejo te recuerda lo que has perdido",
      parrafos: [
        "Las entradas avanzan, la coronilla clarea y empiezas a evitar ciertas luces o fotos. Lociones y shampoos pueden ayudar a cuidar el cabello que tienes, pero no devuelven folículos a las zonas que ya se despoblaron.",
        "El trasplante capilar redistribuye tu propio cabello hacia donde lo necesitas. Su resultado depende del diagnóstico, del diseño de la línea y del criterio médico con que se planea cada zona.",
      ],
    },
    queEs: {
      titulo: "Qué es el trasplante capilar",
      desc: "Es una cirugía en la que se extraen unidades foliculares de una zona donante, habitualmente la parte posterior de la cabeza, y se implantan en las zonas con pérdida de densidad, cuidando dirección y distribución para que se vea natural. Una técnica habitual para hacerlo es la FUE, que extrae los folículos uno a uno. Se realiza con anestesia local y el cabello trasplantado crece de forma progresiva durante los meses siguientes.",
    },
    beneficios: ["Tu propio cabello", "Anestesia local", "Diseño natural de la línea", "Resultado duradero", "Valoración con analizador capilar"],
    zonasTitulo: "Qué podemos trabajar",
    zonas: [
      { icon: "◠", label: "Entradas", desc: "Redefinimos la línea frontal con una forma que acompañe tu rostro." },
      { icon: "○", label: "Coronilla", desc: "Recuperamos cobertura en la zona que más clarea." },
      { icon: "✦", label: "Repoblamiento", desc: "Densidad en zonas donde el cabello se ve más fino." },
    ],
    pasos: [
      { num: "01", title: "Valoración con analizador capilar", desc: "Estudiamos tu cuero cabelludo, la causa de la caída y tu zona donante. Te decimos con claridad si el trasplante es lo indicado y qué resultado es realista.", detail: "Valoración médica previa" },
      { num: "02", title: "Trasplante capilar", desc: "Con anestesia local, extraemos unidades foliculares de la zona donante y las implantamos en las zonas a recuperar, cuidando ángulo y distribución.", detail: "Una jornada · anestesia local" },
      { num: "03", title: "Crecimiento y seguimiento", desc: "Las pequeñas costras caen en las primeras semanas. El cabello nuevo empieza a notarse hacia el tercer o cuarto mes y madura durante el primer año.", detail: "Resultado final: 9 a 12 meses" },
    ],
    seguridad: [
      { num: "01", title: "Diagnóstico antes que cirugía", desc: "No toda pérdida de cabello se resuelve con un trasplante. Primero entendemos la causa y, si conviene estabilizar la caída, te lo decimos." },
      { num: "02", title: "Cuidado de la zona donante", desc: "La zona donante es limitada. Planeamos la extracción de forma distribuida pensando también en tu cabello a futuro." },
      { num: "03", title: "Diseño que se ve natural", desc: "La línea frontal se planea con irregularidad y densidad progresiva, acorde a tu edad y a tus facciones." },
      { num: "04", title: "Expectativas claras", desc: "Te explicamos los tiempos reales de crecimiento, la caída temporal esperable y los cuidados de cada etapa." },
    ],
    cuidados: {
      antes: [
        "Cuéntanos qué medicamentos y suplementos tomas",
        "Evita alcohol y cigarrillo los días previos",
        "Llega con el cabello limpio y ropa que abotone al frente",
        "Sigue las indicaciones de ayuno o alimentación que te demos",
      ],
      despues: [
        "Duerme con la cabeza elevada los primeros días",
        "No toques ni rasques las zonas implantadas",
        "Lava el cabello solo como te lo indiquemos",
        "Evita sol directo, piscina y ejercicio intenso hasta que te autoricemos",
        "Asiste a tus controles de seguimiento",
      ],
    },
    precio: {
      desde: 7500000,
      opciones: [{ label: "Coronilla, entradas, repoblamiento", valor: 7500000 }],
      incluye: [
        "Valoración médica previa con analizador capilar",
        "Diseño de la zona a trabajar",
        "Procedimiento con anestesia local",
        "Indicaciones de cuidado postoperatorio",
        "Controles de seguimiento según indicación médica",
      ],
      nota: "En la valoración confirmamos si el trasplante es lo indicado para tu caso.",
    },
    faq: [
      { q: "¿Cuánto cuesta el trasplante capilar?", a: "El procedimiento para coronilla, entradas o repoblamiento tiene un valor de $7.500.000 COP. En la valoración confirmamos si es lo indicado para ti." },
      { q: "¿Duele?", a: "Se realiza con anestesia local. Lo que más se siente es la aplicación de la anestesia; después suele ser tolerable. En los días siguientes puede haber molestia leve que se maneja con las indicaciones médicas." },
      { q: "¿Cuándo se ve el resultado?", a: "Es progresivo. Es normal una caída temporal del cabello implantado en las primeras semanas; el crecimiento nuevo suele notarse desde el tercer o cuarto mes y el resultado final se aprecia entre los 9 y 12 meses." },
      { q: "¿Cuánto tiempo de recuperación necesito?", a: "Habitualmente puedes retomar actividades suaves en pocos días. Las costras caen en las primeras semanas y el ejercicio intenso se retoma cuando lo autoricemos." },
      { q: "¿Qué efectos secundarios son normales?", a: "Inflamación en la frente, enrojecimiento, pequeñas costras, sensibilidad o adormecimiento temporal en la zona donante y receptora. Te explicamos cuáles son esperables y cuándo consultar." },
      { q: "¿El resultado es natural?", a: "Buscamos que lo sea: el diseño respeta tus facciones y el cabello implantado es tuyo. Cada caso tiene límites que te explicamos con honestidad en la valoración." },
      { q: "¿Puedo combinarlo con otros tratamientos capilares?", a: "Sí, y a menudo conviene. PRP capilar, mesoterapia o exosomas pueden ayudar a cuidar el cabello existente. El plan lo definimos según tu diagnóstico." },
      { q: "¿Quién no es candidato?", a: "Personas con zona donante insuficiente, caída activa sin diagnóstico, infecciones en el cuero cabelludo o condiciones médicas no controladas. Lo revisamos en la valoración." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Trasplante capilar",
  },

  // ── Trasplante de barba ──────────────────────────────────────────────────
  {
    slug: "trasplante-de-barba",
    categoria: "capilares",
    grupo: "Medicina capilar",
    nombre: "Trasplante de barba",
    resultados: [],
    relacionados: ["implante-capilar-fue", "prp-capilar", "mesoterapia-capilar"],
    hero: {
      eyebrow: "MEDICINA CAPILAR · TRASPLANTE DE BARBA",
      titulo: "La barba que quieres llevar,",
      tituloEm: "diseñada y con densidad natural",
      sub: "Diseña o densifica la barba con tu propio cabello y resultados naturales. Planeamos cada zona desde una valoración médica individual.",
    },
    seo: {
      title: "Trasplante de barba en Medellín | Clínica Quantum",
      description:
        "Trasplante de barba en El Poblado, Medellín: diseña o densifica tu barba con tu propio cabello y un resultado natural. Agenda tu valoración médica.",
      keywords: [
        "trasplante de barba medellín",
        "implante de barba medellín",
        "injerto de barba el poblado",
        "densificar barba",
        "trasplante de barba precio",
      ],
    },
    ficha: {
      duracion: "Varias horas, en una jornada",
      sesiones: "Habitualmente 1 procedimiento",
      recuperacion: "Rutina suave en pocos días",
      resultados: "Progresivos, en varios meses",
    },
    paraQuien: {
      ideal: [
        "Tu barba crece con zonas vacías o poco pobladas",
        "Quieres definir mejillas, bigote, perilla o patillas",
        "Tienes una cicatriz en la barba que quisieras disimular",
        "Buscas un resultado natural con tu propio cabello",
      ],
      noIdeal: [
        "Tu zona donante no tiene suficiente densidad",
        "Tienes una infección o lesión activa en la piel del rostro",
        "Esperas el resultado final en pocas semanas",
      ],
    },
    problema: {
      titulo: "Una barba que no termina de llenar",
      parrafos: [
        "Parches en las mejillas, un bigote que no conecta con la perilla o una barba que se ve rala aunque la dejes crecer. Para muchos hombres la barba es parte de su identidad y no poder llevarla como quieren incomoda.",
        "El trasplante de barba lleva folículos de tu propio cabello a esas zonas para dar forma y densidad, respetando la dirección natural del vello facial.",
      ],
    },
    queEs: {
      titulo: "Qué es el trasplante de barba",
      desc: "Es un procedimiento con anestesia local en el que se extraen unidades foliculares de una zona donante, habitualmente la parte posterior de la cabeza, y se implantan en el rostro siguiendo el ángulo y la dirección del vello de la barba. El cabello trasplantado crece de forma progresiva y puede afeitarse o recortarse como el resto de la barba.",
    },
    beneficios: ["Tu propio cabello", "Diseño a tu medida", "Anestesia local", "Resultado natural"],
    zonasTitulo: "Zonas que podemos diseñar",
    zonas: [
      { icon: "◡", label: "Mejillas", desc: "Llenamos los espacios que dejan la barba despareja." },
      { icon: "▭", label: "Bigote", desc: "Densidad y conexión con el resto de la barba." },
      { icon: "▽", label: "Perilla y mentón", desc: "Definimos la forma central de la barba." },
      { icon: "◇", label: "Patillas", desc: "Unión natural entre el cabello y la barba." },
    ],
    pasos: [
      { num: "01", title: "Valoración y diseño", desc: "Revisamos tu zona donante y el vello facial, y diseñamos contigo la forma de barba que se ajusta a tu rostro.", detail: "Valoración médica previa" },
      { num: "02", title: "Trasplante de barba", desc: "Con anestesia local, extraemos unidades foliculares y las implantamos en el rostro respetando la dirección natural del vello.", detail: "Una jornada · anestesia local" },
      { num: "03", title: "Crecimiento y seguimiento", desc: "Las costras caen en los primeros días. Tras una caída temporal esperable, el vello nuevo crece de forma progresiva durante los meses siguientes.", detail: "Resultado progresivo" },
    ],
    seguridad: [
      { num: "01", title: "Diseño acorde a tu rostro", desc: "La forma de la barba se planea con tus facciones y tu estilo, no con una plantilla." },
      { num: "02", title: "Dirección natural del vello", desc: "El vello facial crece con ángulos muy definidos. Implantar con esa dirección es lo que hace que se vea real." },
      { num: "03", title: "Zona donante protegida", desc: "Extraemos de forma distribuida para no dejar zonas visiblemente despobladas en el cuero cabelludo." },
      { num: "04", title: "Expectativas claras", desc: "Te explicamos tiempos de crecimiento, caída temporal y cuidados antes de decidir." },
    ],
    cuidados: {
      antes: [
        "Cuéntanos qué medicamentos y suplementos tomas",
        "Evita alcohol y cigarrillo los días previos",
        "No te afeites ni recortes la barba sin indicación",
        "Llega con el rostro limpio, sin cremas",
      ],
      despues: [
        "No toques ni rasques las zonas implantadas",
        "No te afeites hasta que te lo autoricemos",
        "Lava el rostro con suavidad según las indicaciones",
        "Evita sol directo, sauna y ejercicio intenso los primeros días",
        "Asiste a tus controles de seguimiento",
      ],
    },
    precio: {
      desde: 6500000,
      opciones: [{ label: "Procedimiento", valor: 6500000 }],
      incluye: [
        "Valoración médica previa",
        "Diseño de la barba",
        "Procedimiento con anestesia local",
        "Indicaciones de cuidado postoperatorio",
        "Controles de seguimiento según indicación médica",
      ],
      nota: "En la valoración confirmamos si tu zona donante permite el diseño que buscas.",
    },
    faq: [
      { q: "¿Cuánto cuesta el trasplante de barba?", a: "El procedimiento tiene un valor de $6.500.000 COP. En la valoración revisamos tu caso y confirmamos si es lo indicado." },
      { q: "¿Duele?", a: "Se hace con anestesia local. Se siente sobre todo la aplicación de la anestesia; luego suele ser tolerable. Después puede haber molestia leve e inflamación unos días." },
      { q: "¿Cuándo se ve el resultado?", a: "Es progresivo. Es normal que el vello implantado se caiga en las primeras semanas y vuelva a crecer; el resultado se aprecia a lo largo de varios meses." },
      { q: "¿Se nota que es trasplantado?", a: "Buscamos que no. Diseñamos con tus facciones y respetamos la dirección natural del vello facial. Te explicamos los límites de tu caso en la valoración." },
      { q: "¿Puedo afeitarme después?", a: "Sí, cuando te lo autoricemos. Una vez crecido, el vello trasplantado se puede afeitar, recortar y peinar como el resto de tu barba." },
      { q: "¿Qué efectos secundarios son normales?", a: "Enrojecimiento, pequeñas costras, inflamación leve y sensibilidad en el rostro y en la zona donante durante los primeros días." },
      { q: "¿Quién no es candidato?", a: "Personas con zona donante insuficiente, infecciones o lesiones activas en la piel del rostro o condiciones médicas no controladas." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Trasplante de barba",
  },

  // ── Mesoterapia capilar + INDIBA ─────────────────────────────────────────
  {
    slug: "mesoterapia-capilar",
    categoria: "capilares",
    grupo: "Medicina capilar",
    nombre: "Mesoterapia capilar + INDIBA",
    resultados: [],
    relacionados: ["prp-capilar", "exosomas-capilares", "indiba-capilar"],
    hero: {
      eyebrow: "MEDICINA CAPILAR · MESOTERAPIA + INDIBA",
      titulo: "Un cabello más fuerte,",
      tituloEm: "sesión a sesión",
      sub: "Aportamos activos directamente al cuero cabelludo para ayudar a fortalecer el folículo y mejorar la calidad del cabello. Cada sesión incluye aparatología capilar y parte de un diagnóstico médico.",
    },
    seo: {
      title: "Mesoterapia capilar en Medellín | Clínica Quantum",
      description:
        "Mesoterapia capilar con INDIBA en El Poblado, Medellín: activos en el cuero cabelludo para fortalecer el folículo y mejorar tu cabello. Agenda valoración.",
      keywords: [
        "mesoterapia capilar medellín",
        "tratamiento caída del cabello medellín",
        "mesoterapia capilar precio",
        "indiba capilar medellín",
        "fortalecer el cabello",
      ],
    },
    ficha: {
      duracion: "30 a 45 min por sesión",
      sesiones: "Varias sesiones, según tu caso",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, en semanas o meses",
    },
    paraQuien: {
      ideal: [
        "Notas más caída de lo habitual al peinarte o lavarte",
        "Tu cabello se ve más fino, débil o sin brillo",
        "Quieres cuidar tu cabello antes de que la pérdida avance",
        "Te hiciste un trasplante y quieres fortalecer el cabello existente",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes una infección o herida activa en el cuero cabelludo",
        "Eres alérgico a alguno de los componentes",
        "Buscas recuperar zonas ya sin folículos: ahí conviene valorar un trasplante",
      ],
    },
    problema: {
      titulo: "Ver más cabello en la almohada inquieta",
      parrafos: [
        "El cepillo, la ducha o la almohada empiezan a mostrar más cabello del normal. El pelo se siente más delgado y pierde volumen, y es fácil pasar de un producto a otro sin saber qué está pasando.",
        "La mesoterapia capilar lleva activos justo donde nace el cabello, y la aparatología con INDIBA complementa la estimulación del cuero cabelludo, siempre a partir de un diagnóstico.",
      ],
    },
    queEs: {
      titulo: "Qué es la mesoterapia capilar",
      desc: "Es un tratamiento en el que se aplican microinfiltraciones con activos en el cuero cabelludo para nutrir y estimular el folículo. En Clínica Quantum cada sesión se complementa con aparatología capilar con INDIBA. No reemplaza el estudio de la causa de la caída: por eso comenzamos con una valoración con analizador capilar.",
    },
    beneficios: ["Activos en el cuero cabelludo", "Incluye aparatología capilar", "Sin incapacidad", "Parte de un diagnóstico"],
    zonasTitulo: "Qué buscamos mejorar",
    zonas: [
      { icon: "○", label: "Caída del cabello", desc: "Apoyo al folículo cuando la caída aumenta." },
      { icon: "✦", label: "Calidad del cabello", desc: "Cabello con mejor aspecto, grosor y brillo." },
      { icon: "◠", label: "Cuero cabelludo", desc: "Estimulación y nutrición de la zona donde nace el cabello." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador capilar", desc: "Revisamos tu cuero cabelludo y la densidad del cabello para entender la caída y definir si la mesoterapia es lo indicado.", detail: "Valoración médica previa" },
      { num: "02", title: "Mesoterapia y aparatología", desc: "Aplicamos los activos con microinfiltraciones en el cuero cabelludo y complementamos con aparatología capilar con INDIBA.", detail: "30 a 45 min" },
      { num: "03", title: "Seguimiento del progreso", desc: "Programamos las sesiones según tu caso y revisamos la evolución del cabello a lo largo del tratamiento.", detail: "Resultados progresivos" },
    ],
    seguridad: [
      { num: "01", title: "Primero la causa", desc: "La caída puede tener orígenes distintos. Si necesitas estudios adicionales o manejo médico, te lo indicamos." },
      { num: "02", title: "Aplicación médica y aséptica", desc: "Las microinfiltraciones se hacen con técnica limpia y material de uso individual." },
      { num: "03", title: "Plan según tu evolución", desc: "Ajustamos la frecuencia de las sesiones según cómo responde tu cabello." },
      { num: "04", title: "Expectativas realistas", desc: "Te explicamos qué puede mejorar y cuándo conviene pensar en otras opciones, como un trasplante." },
    ],
    cuidados: {
      antes: [
        "Llega con el cabello limpio y sin productos de peinado",
        "Cuéntanos si tomas anticoagulantes o tienes alergias",
        "Evita alcohol el día anterior",
      ],
      despues: [
        "No laves el cabello ese mismo día, salvo otra indicación",
        "Evita tintes, alisados y químicos unos días",
        "Evita sol directo, piscina y sauna 24 a 48 horas",
        "Es normal sentir sensibilidad leve en el cuero cabelludo",
        "Sigue las recomendaciones de cuidado en casa",
      ],
    },
    precio: {
      desde: 250000,
      opciones: [{ label: "Sesión", detalle: "Mesoterapia + aparatología capilar + recomendados", valor: 250000 }],
      incluye: [
        "Valoración médica previa con analizador capilar",
        "Mesoterapia capilar",
        "Aparatología capilar en la misma sesión",
        "Recomendaciones para tu cuidado en casa",
      ],
      nota: "El número de sesiones lo define la valoración según tu caso.",
    },
    faq: [
      { q: "¿Cuánto cuesta la mesoterapia capilar?", a: "Cada sesión tiene un valor de $250.000 COP e incluye mesoterapia, aparatología capilar y recomendaciones. El número de sesiones se define en la valoración." },
      { q: "¿Duele?", a: "Se sienten pequeños pinchazos en el cuero cabelludo. La mayoría de pacientes lo describe como tolerable y la sesión es corta." },
      { q: "¿Cuántas sesiones necesito?", a: "Depende de tu diagnóstico. Habitualmente se hace un ciclo de varias sesiones espaciadas y luego mantenimiento según la evolución." },
      { q: "¿Cuándo veo cambios?", a: "El ciclo del cabello es lento: los cambios suelen notarse de forma progresiva a lo largo de semanas o meses." },
      { q: "¿Tiene efectos secundarios?", a: "Puede haber enrojecimiento, sensibilidad o pequeños puntos en el cuero cabelludo por unas horas o pocos días." },
      { q: "¿Puedo combinarla con PRP o exosomas?", a: "Sí, en algunos casos se combinan. El plan lo definimos según la causa y la intensidad de tu caída." },
      { q: "¿Quién no puede hacerse mesoterapia capilar?", a: "No está indicada en embarazo, lactancia, infecciones activas del cuero cabelludo o alergia a los componentes. Otras condiciones las revisamos en la valoración." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Mesoterapia capilar + INDIBA",
  },

  // ── PRP capilar ──────────────────────────────────────────────────────────
  {
    slug: "prp-capilar",
    categoria: "capilares",
    grupo: "Medicina capilar",
    nombre: "Plasma rico en plaquetas capilar",
    resultados: [],
    relacionados: ["mesoterapia-capilar", "exosomas-capilares", "implante-capilar-fue"],
    hero: {
      eyebrow: "MEDICINA CAPILAR · PLASMA RICO EN PLAQUETAS",
      titulo: "Tu propio plasma",
      tituloEm: "para fortalecer tu cabello",
      sub: "Usamos el plasma rico en plaquetas de tu propia sangre para estimular y fortalecer el cabello. Indicado tras una valoración médica con analizador capilar.",
    },
    seo: {
      title: "PRP capilar en Medellín | Clínica Quantum",
      description:
        "Plasma rico en plaquetas capilar en El Poblado, Medellín: tu propio plasma para estimular y fortalecer el cabello. Valoración con analizador capilar.",
      keywords: [
        "prp capilar medellín",
        "plasma rico en plaquetas capilar",
        "plasma para la caída del cabello",
        "prp capilar precio medellín",
        "tratamiento caída del cabello el poblado",
      ],
    },
    ficha: {
      duracion: "45 a 60 min por sesión",
      sesiones: "Varias sesiones, según tu caso",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, en meses",
    },
    paraQuien: {
      ideal: [
        "Notas que tu cabello se cae más o se ve más fino",
        "Prefieres un tratamiento con un componente de tu propio cuerpo",
        "Quieres complementar un trasplante capilar",
        "Buscas cuidar la densidad que todavía tienes",
      ],
      noIdeal: [
        "Tienes alteraciones de la coagulación o de las plaquetas",
        "Estás en embarazo o lactancia",
        "Tienes una infección activa en el cuero cabelludo o fiebre",
        "Tienes zonas ya sin folículos: ahí conviene valorar un trasplante",
      ],
    },
    problema: {
      titulo: "Cuando el cabello pierde fuerza",
      parrafos: [
        "Menos volumen, la raya se ve más ancha o el cabello se quiebra con facilidad. Es un cambio que se nota poco a poco y que pesa en cómo te ves.",
        "El plasma rico en plaquetas aprovecha los factores de crecimiento de tu propia sangre para estimular el folículo, como parte de un plan que empieza por entender por qué se está cayendo tu cabello.",
      ],
    },
    queEs: {
      titulo: "Qué es el PRP capilar",
      desc: "Es un tratamiento en el que se toma una pequeña muestra de tu sangre, se procesa para concentrar el plasma rico en plaquetas y se aplica en el cuero cabelludo con microinfiltraciones. Las plaquetas contienen factores de crecimiento que ayudan a estimular el folículo. Al ser de tu propio cuerpo, el riesgo de reacción alérgica es bajo.",
    },
    beneficios: ["Tu propio plasma", "Estimula el folículo", "Sin incapacidad", "Complementa el trasplante"],
    zonasTitulo: "Qué buscamos mejorar",
    zonas: [
      { icon: "○", label: "Caída del cabello", desc: "Estímulo al folículo cuando la caída aumenta." },
      { icon: "✦", label: "Densidad", desc: "Apoyo en zonas donde el cabello se ve más fino." },
      { icon: "◠", label: "Después del trasplante", desc: "Complemento para cuidar el cabello existente." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico capilar", desc: "Con el analizador capilar revisamos tu cuero cabelludo y la densidad del cabello, y confirmamos que el PRP es lo indicado.", detail: "Valoración médica previa" },
      { num: "02", title: "Extracción y aplicación", desc: "Tomamos una muestra de sangre, la procesamos para obtener el plasma y lo aplicamos en el cuero cabelludo con microinfiltraciones.", detail: "45 a 60 min" },
      { num: "03", title: "Seguimiento del cabello", desc: "Programamos las sesiones según tu caso y revisamos la evolución para ajustar el plan.", detail: "Resultados progresivos" },
    ],
    seguridad: [
      { num: "01", title: "Material de uso individual", desc: "La muestra se toma y procesa con material estéril y se aplica solo a ti." },
      { num: "02", title: "Revisión de tu salud", desc: "Preguntamos por coagulación, medicamentos y condiciones de base antes de indicar el tratamiento." },
      { num: "03", title: "Primero la causa de la caída", desc: "Si tu caída requiere estudios o manejo médico adicional, te lo indicamos antes de empezar." },
      { num: "04", title: "Expectativas claras", desc: "Te explicamos que los cambios son graduales y que cada cuero cabelludo responde distinto." },
    ],
    cuidados: {
      antes: [
        "Come algo ligero y bebe agua antes de la cita",
        "Cuéntanos si tomas anticoagulantes, aspirina o antiinflamatorios",
        "Llega con el cabello limpio y sin productos",
        "Evita alcohol el día anterior",
      ],
      despues: [
        "No laves el cabello ese mismo día, salvo otra indicación",
        "Evita tintes y químicos unos días",
        "Evita sol directo, sauna y ejercicio intenso 24 horas",
        "Es normal sentir sensibilidad leve en el cuero cabelludo",
      ],
    },
    precio: {
      desde: 350000,
      opciones: [{ label: "Sesión", valor: 350000 }],
      incluye: [
        "Valoración médica previa con analizador capilar",
        "Extracción y procesamiento del plasma",
        "Aplicación en el cuero cabelludo",
        "Indicaciones de cuidado",
      ],
      nota: "El número de sesiones lo define la valoración según tu caso.",
    },
    faq: [
      { q: "¿Cuánto cuesta el PRP capilar?", a: "Cada sesión tiene un valor de $350.000 COP. El número de sesiones lo definimos en la valoración." },
      { q: "¿Duele?", a: "Se siente el pinchazo de la toma de sangre y pequeñas punciones en el cuero cabelludo. Suele ser tolerable y la molestia pasa rápido." },
      { q: "¿Cuántas sesiones necesito?", a: "Habitualmente se hace un ciclo de varias sesiones espaciadas y luego mantenimiento. Lo ajustamos a tu diagnóstico y a tu evolución." },
      { q: "¿Cuándo se ven los resultados?", a: "Los cambios son progresivos y suelen notarse con el paso de los meses, porque dependen del ciclo natural del cabello." },
      { q: "¿Tiene efectos secundarios?", a: "Puede haber sensibilidad, enrojecimiento o inflamación leve en el cuero cabelludo, y un pequeño morado en el sitio de la toma de sangre." },
      { q: "¿Puedo combinarlo con otros tratamientos?", a: "Sí. Se puede combinar con mesoterapia capilar o complementar un trasplante capilar, según lo que indique la valoración." },
      { q: "¿Quién no puede hacerse PRP capilar?", a: "No está indicado en alteraciones de la coagulación o de las plaquetas, embarazo, lactancia, infecciones activas o algunas enfermedades de base. Lo revisamos contigo." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Plasma rico en plaquetas capilar",
  },

  // ── Exosomas capilares ───────────────────────────────────────────────────
  {
    slug: "exosomas-capilares",
    categoria: "capilares",
    grupo: "Medicina capilar",
    nombre: "Exosomas capilares",
    resultados: [],
    relacionados: ["prp-capilar", "mesoterapia-capilar", "implante-capilar-fue"],
    hero: {
      eyebrow: "MEDICINA CAPILAR · EXOSOMAS",
      titulo: "Revitaliza tu cuero cabelludo,",
      tituloEm: "mejora calidad y densidad",
      sub: "Tratamiento avanzado que favorece la regeneración y revitalización del cuero cabelludo, ayudando a mejorar la calidad y densidad del cabello. Indicado tras una valoración médica.",
    },
    seo: {
      title: "Exosomas capilares en Medellín | Clínica Quantum",
      description:
        "Exosomas capilares en El Poblado, Medellín: revitalizan el cuero cabelludo y ayudan a mejorar la calidad y densidad del cabello. Agenda tu valoración.",
      keywords: [
        "exosomas capilares medellín",
        "exosomas para el cabello",
        "tratamiento capilar avanzado medellín",
        "exosomas capilares precio",
        "densidad capilar el poblado",
      ],
    },
    ficha: {
      duracion: "30 a 45 min por sesión",
      sesiones: "Según tu caso",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, en meses",
    },
    paraQuien: {
      ideal: [
        "Tu cabello ha perdido densidad y calidad",
        "Buscas un tratamiento capilar avanzado dentro de un plan médico",
        "Quieres complementar otros tratamientos o un trasplante",
        "Tu cuero cabelludo se ve apagado o debilitado",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes una infección o herida activa en el cuero cabelludo",
        "Tienes antecedentes de cáncer activo o en estudio",
        "Buscas recuperar zonas ya sin folículos: ahí conviene valorar un trasplante",
      ],
    },
    problema: {
      titulo: "Un cabello que ya no se ve como antes",
      parrafos: [
        "Pierde cuerpo, se ve opaco y el cuero cabelludo se nota más. Pruebas productos y rutinas, pero sientes que falta algo más profundo.",
        "Los exosomas capilares están pensados para revitalizar el cuero cabelludo y apoyar la calidad del cabello, integrados en un plan que parte de un diagnóstico médico.",
      ],
    },
    queEs: {
      titulo: "Qué son los exosomas capilares",
      desc: "Los exosomas son pequeñas vesículas que participan en la comunicación entre células. En medicina capilar se aplican en el cuero cabelludo para favorecer su regeneración y revitalización, ayudando a mejorar la calidad y densidad del cabello. Es un área en desarrollo: por eso lo indicamos con criterio, después de valorar tu caso.",
    },
    beneficios: ["Revitaliza el cuero cabelludo", "Apoya calidad y densidad", "Sin incapacidad", "Indicado con criterio médico"],
    zonasTitulo: "Qué buscamos mejorar",
    zonas: [
      { icon: "◠", label: "Cuero cabelludo", desc: "Favorecer su regeneración y vitalidad." },
      { icon: "✦", label: "Calidad del cabello", desc: "Cabello con mejor aspecto y fuerza." },
      { icon: "○", label: "Densidad", desc: "Apoyo en zonas donde el cabello se ve más fino." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico capilar", desc: "Con el analizador capilar estudiamos tu cuero cabelludo y definimos si los exosomas son lo indicado o si conviene otra opción.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación de exosomas", desc: "Aplicamos el tratamiento en el cuero cabelludo en las zonas definidas en la valoración.", detail: "30 a 45 min" },
      { num: "03", title: "Seguimiento", desc: "Revisamos la evolución del cabello y ajustamos el plan según tu respuesta.", detail: "Resultados progresivos" },
    ],
    seguridad: [
      { num: "01", title: "Indicación responsable", desc: "Es un tratamiento avanzado, no la primera respuesta para todos. Lo recomendamos solo cuando tiene sentido para tu diagnóstico." },
      { num: "02", title: "Revisión de antecedentes", desc: "Preguntamos por tu historia médica antes de aplicar, para descartar situaciones en las que no conviene." },
      { num: "03", title: "Aplicación con técnica limpia", desc: "El procedimiento se realiza con material de uso individual y protocolo aséptico." },
      { num: "04", title: "Expectativas claras", desc: "Te explicamos que los cambios son graduales y que la respuesta varía entre personas." },
    ],
    cuidados: {
      antes: [
        "Llega con el cabello limpio y sin productos",
        "Cuéntanos tus antecedentes médicos y medicamentos",
        "Evita alcohol el día anterior",
      ],
      despues: [
        "No laves el cabello ese mismo día, salvo otra indicación",
        "Evita tintes y químicos unos días",
        "Evita sol directo, sauna y ejercicio intenso 24 horas",
        "Es normal sentir sensibilidad leve en el cuero cabelludo",
      ],
    },
    precio: {
      desde: 800000,
      opciones: [{ label: "Sesión", valor: 800000 }],
      incluye: [
        "Valoración médica previa con analizador capilar",
        "Aplicación de exosomas en el cuero cabelludo",
        "Indicaciones de cuidado",
        "Seguimiento de la evolución",
      ],
      nota: "El número de sesiones y la combinación con otros tratamientos los define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuestan los exosomas capilares?", a: "Cada sesión tiene un valor de $800.000 COP. En la valoración definimos cuántas sesiones tienen sentido para ti." },
      { q: "¿Duele?", a: "Se siente una molestia leve en el cuero cabelludo durante la aplicación. Suele ser tolerable." },
      { q: "¿Cuándo se ven los resultados?", a: "Los cambios son progresivos y dependen del ciclo del cabello, por eso suelen apreciarse con el paso de los meses." },
      { q: "¿Qué diferencia hay con el PRP?", a: "El PRP usa el plasma de tu propia sangre; los exosomas son un tratamiento distinto orientado a revitalizar el cuero cabelludo. En la valoración te decimos cuál conviene o si se combinan." },
      { q: "¿Tiene efectos secundarios?", a: "Puede haber enrojecimiento o sensibilidad leve en el cuero cabelludo por unas horas o pocos días." },
      { q: "¿Tengo que dejar de hacer otros tratamientos?", a: "No necesariamente. Muchas veces se integran con mesoterapia, PRP o después de un trasplante. Lo organizamos según tu plan." },
      { q: "¿Quién no puede hacerse exosomas capilares?", a: "No lo indicamos en embarazo, lactancia, infecciones activas del cuero cabelludo o antecedentes de cáncer activo. Otras condiciones las revisamos contigo." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Exosomas capilares",
  },

  // ── Aparatología capilar con INDIBA ──────────────────────────────────────
  {
    slug: "indiba-capilar",
    categoria: "capilares",
    grupo: "Medicina capilar",
    nombre: "Aparatología capilar con INDIBA",
    resultados: [],
    relacionados: ["mesoterapia-capilar", "prp-capilar", "exosomas-capilares"],
    hero: {
      eyebrow: "MEDICINA CAPILAR · RADIOFRECUENCIA E INDIBA",
      titulo: "Oxigena y estimula tu cuero cabelludo,",
      tituloEm: "sin agujas",
      sub: "Radiofrecuencia e INDIBA para oxigenar y estimular el cuero cabelludo en un paquete de 10 sesiones. Un complemento cómodo dentro de tu plan capilar.",
    },
    seo: {
      title: "INDIBA capilar en Medellín | Clínica Quantum",
      description:
        "Aparatología capilar con INDIBA en El Poblado, Medellín: radiofrecuencia para oxigenar y estimular el cuero cabelludo. Paquete de 10 sesiones sin agujas.",
      keywords: [
        "indiba capilar medellín",
        "radiofrecuencia capilar medellín",
        "aparatología capilar",
        "tratamiento capilar sin agujas",
        "estimular cuero cabelludo",
      ],
    },
    ficha: {
      duracion: "Aprox. 30 min por sesión",
      sesiones: "Paquete de 10 sesiones",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, a lo largo del ciclo",
    },
    paraQuien: {
      ideal: [
        "Quieres estimular tu cuero cabelludo sin agujas",
        "Notas el cabello más fino o con más caída de lo habitual",
        "Buscas complementar mesoterapia, PRP o exosomas",
        "Tu cabello se ve más débil y quieres cuidarlo",
        "Prefieres un tratamiento cómodo y sin incapacidad",
      ],
      noIdeal: [
        "Tienes marcapasos u otro dispositivo electrónico implantado",
        "Estás en embarazo",
        "Tienes una infección o herida activa en el cuero cabelludo",
        "Buscas recuperar zonas sin folículos activos: ahí se valora el implante capilar",
      ],
    },
    problema: {
      titulo: "Cuidar el cabello también es cuidar donde nace",
      parrafos: [
        "Cuando notas el cabello más fino o débil, lo normal es fijarse en el cabello y olvidar el cuero cabelludo, que es donde el folículo necesita buenas condiciones para crecer fuerte. El estrés, los cambios hormonales y el paso del tiempo también se reflejan ahí.",
        "La aparatología con INDIBA estimula el cuero cabelludo de forma cómoda y sin agujas. No reemplaza los tratamientos de fondo, pero suma a tu plan capilar y te ayuda a cuidar tu cabello con constancia.",
      ],
    },
    queEs: {
      titulo: "Qué es la aparatología capilar con INDIBA",
      desc: "Es un tratamiento con radiofrecuencia e INDIBA aplicado en el cuero cabelludo. La radiofrecuencia es una energía que, al pasar por los tejidos, genera un calor suave desde el interior; ese calor favorece la circulación local, la oxigenación y la estimulación de la zona donde nace el cabello. Es no invasivo, se siente cálido y agradable, y funciona mejor como parte de un plan capilar definido en la valoración. No hace crecer cabello donde el folículo ya no está activo, por eso lo indicamos según tu diagnóstico.",
    },
    beneficios: ["Sin agujas", "Paquete de 10 sesiones", "Sensación cálida y cómoda", "Complementa otros tratamientos"],
    zonasTitulo: "Qué buscamos mejorar",
    zonas: [
      { icon: "◠", label: "Oxigenación", desc: "Favorecer la oxigenación del cuero cabelludo." },
      { icon: "✦", label: "Estimulación", desc: "Estímulo de la zona donde nace el cabello." },
      { icon: "▭", label: "Zonas con menos densidad", desc: "Coronilla, entradas o raya donde el cabello se ve más fino." },
      { icon: "○", label: "Apoyo a tu plan", desc: "Suma a mesoterapia, PRP o exosomas." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico capilar", desc: "Revisamos tu cuero cabelludo con el analizador capilar, identificamos el tipo de caída y definimos cómo encaja INDIBA dentro de tu plan capilar.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesión de INDIBA", desc: "Aplicamos radiofrecuencia sobre el cuero cabelludo con movimientos suaves. Sientes un calor agradable y puedes descansar durante toda la sesión.", detail: "Aprox. 30 min" },
      { num: "03", title: "Ciclo y seguimiento", desc: "Completas el paquete de 10 sesiones con la frecuencia indicada y revisamos la evolución de tu cabello y de tu cuero cabelludo en los controles.", detail: "10 sesiones" },
    ],
    seguridad: [
      { num: "01", title: "Revisión de contraindicaciones", desc: "Antes de empezar confirmamos que no tengas dispositivos implantados ni condiciones que impidan la radiofrecuencia." },
      { num: "02", title: "Temperatura controlada", desc: "La intensidad se ajusta a tu tolerancia para que la sesión sea cómoda." },
      { num: "03", title: "Parte de un plan médico", desc: "Te decimos con claridad qué aporta INDIBA y cuándo necesitas otros tratamientos." },
      { num: "04", title: "Evolución revisada en controles", desc: "Si la respuesta de tu cabello no es la esperada, te proponemos ajustar el plan con otros tratamientos capilares." },
    ],
    cuidados: {
      antes: [
        "Llega con el cabello limpio y sin productos",
        "Evita tinturas o químicos en el cabello los días previos",
        "Retira aretes, ganchos y accesorios metálicos",
        "Cuéntanos si tienes marcapasos o implantes metálicos",
      ],
      despues: [
        "Puedes retomar tu rutina el mismo día",
        "Mantente bien hidratado",
        "Evita secador o plancha muy calientes ese día",
        "Asiste a tus sesiones con la frecuencia indicada",
        "Sigue las recomendaciones de cuidado del cabello en casa",
      ],
    },
    precio: {
      desde: 800000,
      opciones: [{ label: "Paquete", detalle: "10 sesiones", valor: 800000 }],
      incluye: [
        "Valoración médica previa",
        "10 sesiones de aparatología capilar con INDIBA",
        "Indicaciones de cuidado",
        "Seguimiento de la evolución",
      ],
      nota: "La frecuencia de las sesiones la definimos en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta el paquete de INDIBA capilar?", a: "El paquete de 10 sesiones tiene un valor de $800.000 COP. Incluye las sesiones de aparatología capilar con INDIBA, indicaciones de cuidado y seguimiento; en la valoración definimos la frecuencia y cómo encaja en tu plan." },
      { q: "¿Duele o se siente algo?", a: "Habitualmente no es doloroso. Se siente un calor suave en el cuero cabelludo que la mayoría de pacientes describe como relajante. La intensidad se ajusta a tu tolerancia y puedes avisarnos si quieres menos calor." },
      { q: "¿Cuántas sesiones son y cada cuánto?", a: "El paquete incluye 10 sesiones que habitualmente se programan una o dos veces por semana. La frecuencia exacta la ajustamos en la valoración según tu diagnóstico y los demás tratamientos de tu plan capilar." },
      { q: "¿Cuándo se notan los cambios?", a: "Los cambios en el cabello son lentos porque dependen de su ciclo de crecimiento. Se aprecian de forma progresiva a lo largo del ciclo de sesiones y, sobre todo, en los meses siguientes." },
      { q: "¿Cuánto dura el efecto?", a: "El estímulo se suma sesión a sesión, y conservar lo logrado depende de la causa de la caída y de mantener tu plan capilar. Según tu evolución, en los controles te indicamos si conviene repetir un ciclo más adelante." },
      { q: "¿Tiene efectos secundarios o recuperación?", a: "No requiere recuperación: retomas tu rutina el mismo día. Puede quedar un enrojecimiento leve o sensación de calor en la zona por un rato después de la sesión, que desaparece por sí sola." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Es un buen complemento de la mesoterapia capilar, el PRP capilar o los exosomas capilares, que trabajan el folículo desde otro ángulo. En la valoración organizamos el orden y la frecuencia de cada uno." },
      { q: "¿Quién no puede hacerlo?", a: "No se indica en personas con marcapasos u otros dispositivos implantados, en embarazo ni con infecciones o heridas activas en el cuero cabelludo. Si tienes implantes metálicos o alguna condición médica, lo revisamos en la valoración." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Aparatología capilar con INDIBA",
  },

  // ── Alectomía ────────────────────────────────────────────────────────────
  {
    slug: "alectomia",
    categoria: "quirurgicos",
    grupo: "Armonización quirúrgica menor",
    nombre: "Alectomía",
    resultados: ["alectomia"],
    relacionados: ["rinomodelacion", "otomodelizacion", "lobulo-rasgado"],
    hero: {
      eyebrow: "ARMONIZACIÓN QUIRÚRGICA MENOR · ALECTOMÍA",
      titulo: "Aletas nasales más finas,",
      tituloEm: "una nariz en armonía con tu rostro",
      sub: "Procedimiento para afinar las aletas nasales buscando una armonización natural del rostro. Cirugía menor con anestesia local, planeada desde una valoración médica.",
    },
    seo: {
      title: "Alectomía en Medellín | Clínica Quantum",
      description:
        "Alectomía en El Poblado, Medellín: afina las aletas nasales con cirugía menor y anestesia local para una armonización natural del rostro. Agenda tu cita.",
      keywords: [
        "alectomía medellín",
        "reducción de aletas nasales",
        "afinar la nariz medellín",
        "alectomía precio medellín",
        "cirugía de aletas nasales el poblado",
      ],
    },
    ficha: {
      duracion: "Aprox. 1 hora",
      sesiones: "1 procedimiento",
      recuperacion: "Retiro de puntos en 1 a 2 semanas",
      resultados: "Visibles al bajar la inflamación",
    },
    paraQuien: {
      ideal: [
        "Sientes que la base de tu nariz se ve ancha",
        "Tus aletas nasales se ven amplias al sonreír o de frente",
        "Buscas un cambio sutil, no una rinoplastia",
        "Quieres más armonía entre la nariz y tus facciones",
      ],
      noIdeal: [
        "Buscas cambiar el dorso o la punta de la nariz",
        "Tienes una infección activa en la zona o problemas de cicatrización",
        "Estás en embarazo o lactancia",
        "Tienes condiciones médicas no controladas o alteraciones de la coagulación",
      ],
    },
    problema: {
      titulo: "Un detalle que cambia cómo ves tu rostro",
      parrafos: [
        "A veces no es toda la nariz: son las aletas, que se ven anchas en fotos o al sonreír y le quitan equilibrio al rostro.",
        "La alectomía trabaja solo esa parte. Con un procedimiento menor se reduce el ancho de las aletas nasales y la nariz se integra mejor con tus facciones.",
      ],
    },
    queEs: {
      titulo: "Qué es la alectomía",
      desc: "Es una cirugía menor en la que se retira una pequeña porción de tejido de las aletas nasales para reducir su ancho. Se realiza con anestesia local y se cierra con puntos finos, ubicando las incisiones en el pliegue natural de la nariz para que la cicatriz sea discreta. No modifica el dorso ni la punta nasal.",
    },
    beneficios: ["Anestesia local", "Cambio sutil y natural", "Cirugía menor", "Cicatriz en el pliegue natural"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "◇", label: "Ancho de la base nasal", desc: "Reduce la amplitud de las aletas vistas de frente." },
      { icon: "◡", label: "Forma de las fosas", desc: "Aletas más proporcionadas al sonreír." },
      { icon: "✦", label: "Armonía del rostro", desc: "Nariz más integrada con tus facciones." },
    ],
    pasos: [
      { num: "01", title: "Valoración y planeación", desc: "Analizamos tu rostro y tus aletas nasales, revisamos tu salud y definimos cuánto tejido conviene retirar para un resultado natural.", detail: "Valoración médica previa" },
      { num: "02", title: "Alectomía con anestesia local", desc: "Retiramos una pequeña porción de tejido de las aletas y cerramos con puntos finos en el pliegue natural de la nariz.", detail: "Aprox. 1 hora" },
      { num: "03", title: "Retiro de puntos y control", desc: "Revisamos la cicatrización, retiramos los puntos cuando corresponde y acompañamos la evolución mientras baja la inflamación.", detail: "Controles de seguimiento" },
    ],
    seguridad: [
      { num: "01", title: "Planeación conservadora", desc: "Retirar de más no se puede revertir. Planeamos con prudencia para mantener la proporción natural de tu nariz." },
      { num: "02", title: "Revisión de salud previa", desc: "Revisamos medicamentos, coagulación y antecedentes antes de programar la cirugía." },
      { num: "03", title: "Protocolo estéril", desc: "El procedimiento se realiza con técnica aséptica y material estéril." },
      { num: "04", title: "Acompañamiento en la cicatrización", desc: "Te damos indicaciones claras y controles para cuidar la cicatriz en sus primeras semanas." },
    ],
    cuidados: {
      antes: [
        "Suspende aspirina y antiinflamatorios solo si te lo indicamos",
        "Evita cigarrillo y alcohol los días previos",
        "Llega con el rostro limpio, sin maquillaje",
        "Cuéntanos tus antecedentes y alergias",
      ],
      despues: [
        "Limpia la herida como te lo indiquemos",
        "Evita sonarte con fuerza y manipular la nariz",
        "Protege la zona del sol y usa protector cuando te lo autoricemos",
        "Evita ejercicio intenso hasta el control",
        "Asiste al retiro de puntos y a tus controles",
      ],
    },
    precio: {
      desde: 1800000,
      opciones: [{ label: "Reducción de aletas nasales", valor: 1800000 }],
      incluye: [
        "Valoración médica previa",
        "Procedimiento con anestesia local",
        "Indicaciones de cuidado postoperatorio",
        "Retiro de puntos y control",
      ],
      nota: "En la valoración confirmamos si la alectomía es lo indicado para tu nariz.",
    },
    faq: [
      { q: "¿Cuánto cuesta la alectomía?", a: "La reducción de aletas nasales tiene un valor de $1.800.000 COP. En la valoración confirmamos que es lo indicado para ti." },
      { q: "¿Duele?", a: "Se realiza con anestesia local, así que lo que se siente es la aplicación de la anestesia. Después puede haber molestia leve que se maneja con las indicaciones médicas." },
      { q: "¿Cuánto dura la recuperación?", a: "Habitualmente retomas actividades tranquilas en pocos días. Los puntos se retiran entre 1 y 2 semanas y la inflamación baja de forma progresiva." },
      { q: "¿Se nota la cicatriz?", a: "Las incisiones se ubican en el pliegue natural de la nariz para que sea discreta. Durante las primeras semanas se ve rosada y va madurando con los cuidados." },
      { q: "¿Qué efectos secundarios son normales?", a: "Inflamación, morado leve, sensibilidad y algo de costra en la herida durante los primeros días." },
      { q: "¿Es lo mismo que una rinoplastia?", a: "No. La alectomía solo reduce el ancho de las aletas nasales. Si buscas cambiar el perfil, podemos valorar la rinomodelación." },
      { q: "¿Quién no puede hacérsela?", a: "No está indicada con infecciones activas en la zona, embarazo, lactancia, alteraciones de la coagulación o condiciones médicas no controladas." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Alectomía",
  },

  // ── Otomodelización ──────────────────────────────────────────────────────
  {
    slug: "otomodelizacion",
    categoria: "quirurgicos",
    grupo: "Armonización quirúrgica menor",
    nombre: "Otomodelización",
    resultados: [],
    relacionados: ["lobulo-rasgado", "alectomia", "rinomodelacion"],
    hero: {
      eyebrow: "ARMONIZACIÓN QUIRÚRGICA MENOR · OTOMODELIZACIÓN",
      titulo: "Orejas en su lugar,",
      tituloEm: "un rostro en armonía natural",
      sub: "Procedimiento para mejorar la posición de las orejas, buscando una armonización natural del rostro. Cirugía menor con anestesia local y acompañamiento médico.",
    },
    seo: {
      title: "Otomodelización en Medellín | Clínica Quantum",
      description:
        "Otomodelización en El Poblado, Medellín: mejora la posición de las orejas con cirugía menor y anestesia local para armonizar tu rostro. Agenda valoración.",
      keywords: [
        "otomodelización medellín",
        "corrección de orejas medellín",
        "orejas separadas cirugía",
        "otoplastia medellín",
        "corrección de orejas precio",
      ],
    },
    ficha: {
      duracion: "1 a 2 horas",
      sesiones: "1 procedimiento",
      recuperacion: "Banda y cuidados unas semanas",
      resultados: "Visibles al bajar la inflamación",
    },
    paraQuien: {
      ideal: [
        "Sientes que tus orejas se ven muy separadas de la cabeza",
        "Evitas recogerte el cabello por cómo se ven tus orejas",
        "Una de tus orejas se ve más separada o con otra forma que la otra",
        "Buscas un cambio natural que armonice tu rostro",
        "Tienes expectativas realistas sobre el resultado",
      ],
      noIdeal: [
        "Tienes una infección activa en la zona",
        "Estás en embarazo o lactancia",
        "Tienes alteraciones de la coagulación o condiciones médicas no controladas",
        "Esperas una simetría perfecta entre ambas orejas",
      ],
    },
    problema: {
      titulo: "Algo que llevas años intentando disimular",
      parrafos: [
        "El cabello siempre suelto, evitar ciertas fotos, peinados o cortes de pelo. Las orejas muy separadas pueden hacerte sentir observado aunque nadie diga nada, y es algo que muchas personas cargan desde la infancia.",
        "La otomodelización mejora la posición de las orejas para que acompañen tu rostro con naturalidad, sin que se vean pegadas ni forzadas, y puedas llevar el cabello como quieras.",
      ],
    },
    queEs: {
      titulo: "Qué es la otomodelización",
      desc: "Es una cirugía menor que remodela la forma o el ángulo de las orejas para acercarlas a la cabeza y mejorar su posición. En muchas orejas separadas falta un pliegue del cartílago o la concha es más profunda; al remodelar ese cartílago y fijarlo con puntos internos, la oreja toma una posición más cercana a la cabeza. Se realiza con anestesia local y la incisión se ubica habitualmente detrás de la oreja, donde la cicatriz queda poco visible. Después se usa una banda o vendaje durante un tiempo para proteger el resultado.",
    },
    beneficios: ["Anestesia local", "Cicatriz detrás de la oreja", "Resultado natural", "Cirugía menor"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "◠", label: "Separación de las orejas", desc: "Acerca las orejas a la cabeza con un ángulo natural." },
      { icon: "◇", label: "Forma del pabellón", desc: "Remodela pliegues que no están bien marcados." },
      { icon: "○", label: "Diferencia entre orejas", desc: "Busca una posición más pareja entre ambos lados." },
      { icon: "✦", label: "Armonía del rostro", desc: "Orejas proporcionadas con tus facciones." },
    ],
    pasos: [
      { num: "01", title: "Valoración y planeación", desc: "Evaluamos la forma, el ángulo y la simetría de tus orejas, revisamos tu salud y tus medicamentos, y te explicamos con claridad qué cambio es realista en tu caso.", detail: "Valoración médica previa" },
      { num: "02", title: "Otomodelización con anestesia local", desc: "Remodelamos la oreja a través de una incisión detrás del pabellón y cerramos con puntos. Terminamos con un vendaje protector.", detail: "1 a 2 horas" },
      { num: "03", title: "Vendaje, puntos y control", desc: "Revisamos la cicatrización, retiramos los puntos cuando corresponde y te indicamos cuánto tiempo usar la banda para proteger la nueva posición de las orejas.", detail: "Controles de seguimiento" },
    ],
    seguridad: [
      { num: "01", title: "Resultado natural antes que exagerado", desc: "Buscamos que las orejas se vean armónicas, no pegadas ni forzadas." },
      { num: "02", title: "Revisión de salud previa", desc: "Revisamos medicamentos, coagulación y antecedentes antes de programar el procedimiento." },
      { num: "03", title: "Protocolo estéril", desc: "La cirugía se realiza con técnica aséptica y material estéril." },
      { num: "04", title: "Acompañamiento postoperatorio", desc: "Te damos indicaciones por escrito y controles para cuidar la cicatriz y la posición de las orejas." },
    ],
    cuidados: {
      antes: [
        "Suspende aspirina y antiinflamatorios solo si te lo indicamos",
        "Evita cigarrillo y alcohol los días previos",
        "Llega con el cabello limpio y recogido",
        "Usa ropa que abotone al frente",
      ],
      despues: [
        "Usa la banda o el vendaje el tiempo indicado",
        "Duerme boca arriba y sin presionar las orejas",
        "No mojes la herida hasta que te lo autoricemos",
        "Evita deportes de contacto y ejercicio intenso unas semanas",
        "Asiste al retiro de puntos y a tus controles",
      ],
    },
    precio: {
      desde: 2300000,
      opciones: [{ label: "Corrección de orejas", valor: 2300000 }],
      incluye: [
        "Valoración médica previa",
        "Procedimiento con anestesia local",
        "Indicaciones de cuidado postoperatorio",
        "Retiro de puntos y control",
      ],
      nota: "En la valoración confirmamos si la otomodelización es lo indicado para ti.",
    },
    faq: [
      { q: "¿Cuánto cuesta la otomodelización?", a: "La corrección de orejas tiene un valor de $2.300.000 COP y es un solo procedimiento. Contempla la cirugía con anestesia local, las indicaciones de cuidado postoperatorio y el retiro de puntos con control. En la valoración confirmamos que es lo indicado para ti." },
      { q: "¿Duele?", a: "Se hace con anestesia local, así que lo que se siente es la aplicación de la anestesia. Los primeros días puede haber molestia y sensibilidad que se manejan con las indicaciones médicas." },
      { q: "¿Cuánto dura la recuperación?", a: "Habitualmente retomas actividades tranquilas en pocos días. La banda se usa el tiempo que te indiquemos, a veces solo para dormir durante una etapa, y los deportes de contacto se evitan unas semanas." },
      { q: "¿Qué efectos secundarios son normales? ¿Se nota la cicatriz?", a: "Lo habitual es inflamación, morado leve, sensibilidad o adormecimiento temporal de las orejas, que mejoran en las semanas siguientes. La incisión se ubica detrás de la oreja, por lo que la cicatriz queda poco visible una vez madura." },
      { q: "¿Cuándo veo el resultado?", a: "Se aprecia desde que retiramos el vendaje y mejora a medida que baja la inflamación en las semanas siguientes. El aspecto más definitivo se ve cuando la inflamación ha cedido por completo, lo que puede tomar algunos meses." },
      { q: "¿El resultado es permanente?", a: "Habitualmente el cambio de posición es duradero, porque se remodela el cartílago. En algunos casos la oreja puede recuperar parte de su separación con el tiempo, por eso es importante usar la banda y evitar golpes durante la cicatrización." },
      { q: "¿Se puede combinar con otros procedimientos?", a: "Según tu caso, puede planearse en la misma etapa que la corrección de lóbulo rasgado. La alectomía o la rinomodelación también complementan la armonía del rostro; en la valoración definimos si conviene hacerlos juntos o por separado." },
      { q: "¿Quién no puede hacérsela?", a: "No está indicada con infecciones activas en la zona, embarazo, lactancia, alteraciones de la coagulación o condiciones médicas no controladas. Si fumas o tomas anticoagulantes, lo revisamos antes de programar la cirugía." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Otomodelización",
  },

  // ── Corrección de lóbulo rasgado ─────────────────────────────────────────
  {
    slug: "lobulo-rasgado",
    categoria: "quirurgicos",
    grupo: "Armonización quirúrgica menor",
    nombre: "Corrección de lóbulo rasgado",
    resultados: [],
    relacionados: ["otomodelizacion", "alectomia", "cauterizacion"],
    hero: {
      eyebrow: "ARMONIZACIÓN QUIRÚRGICA MENOR · LÓBULO RASGADO",
      titulo: "Vuelve a lucir tus aretes,",
      tituloEm: "con un lóbulo reparado",
      sub: "Corregimos el lóbulo rasgado o alargado por el uso de aretes con un procedimiento menor y anestesia local, planeado desde una valoración médica.",
    },
    seo: {
      title: "Corrección de lóbulo rasgado en Medellín | Clínica Quantum",
      description:
        "Corrección de lóbulo rasgado en El Poblado, Medellín: repara el lóbulo alargado o partido por aretes con cirugía menor y anestesia local. Agenda tu cita.",
      keywords: [
        "lóbulo rasgado medellín",
        "reparación de lóbulo de la oreja",
        "lóbulo partido por aretes",
        "corrección de lóbulo alargado",
        "cirugía de lóbulo el poblado",
      ],
    },
    ficha: {
      duracion: "30 a 60 min",
      sesiones: "1 procedimiento",
      recuperacion: "Retiro de puntos en 1 a 2 semanas",
      resultados: "Visibles desde el retiro de puntos",
    },
    paraQuien: {
      ideal: [
        "Tu lóbulo se partió por un arete o un tirón",
        "El agujero del arete se alargó con el peso de los aretes",
        "Usaste expansores y quieres cerrar el lóbulo",
        "Quieres volver a usar aretes con tranquilidad",
      ],
      noIdeal: [
        "Tienes una infección activa en la oreja",
        "Tienes tendencia a queloides sin haberlo valorado",
        "Estás en embarazo o tienes condiciones médicas no controladas",
      ],
    },
    problema: {
      titulo: "Un lóbulo partido también pesa",
      parrafos: [
        "Aretes pesados, un tirón o años de uso pueden alargar o partir el lóbulo. Dejas de usar tus aretes favoritos o te acostumbras a esconder las orejas con el cabello.",
        "La corrección de lóbulo rasgado repara esa forma con un procedimiento menor, para que la oreja vuelva a verse natural.",
      ],
    },
    queEs: {
      titulo: "Qué es la corrección de lóbulo rasgado",
      desc: "Es una cirugía menor con anestesia local en la que se reparan los bordes del lóbulo partido o del agujero alargado y se cierran con puntos finos. Una vez cicatrizado, y cuando el médico lo indique, se puede volver a perforar la oreja en un punto adecuado para usar aretes.",
    },
    beneficios: ["Anestesia local", "Procedimiento corto", "Cirugía menor", "Vuelves a usar aretes"],
    zonasTitulo: "Qué corregimos",
    zonas: [
      { icon: "○", label: "Lóbulo partido", desc: "Reparación del lóbulo rasgado por completo." },
      { icon: "◡", label: "Agujero alargado", desc: "Cierre del orificio estirado por el peso de los aretes." },
      { icon: "◇", label: "Lóbulo expandido", desc: "Reconstrucción después del uso de expansores." },
    ],
    pasos: [
      { num: "01", title: "Valoración del lóbulo", desc: "Revisamos el tipo de desgarro, tu cicatrización y tus antecedentes para planear la reparación.", detail: "Valoración médica previa" },
      { num: "02", title: "Reparación con anestesia local", desc: "Preparamos los bordes del lóbulo y lo cerramos con puntos finos para devolverle su forma.", detail: "30 a 60 min" },
      { num: "03", title: "Retiro de puntos y control", desc: "Revisamos la cicatrización, retiramos los puntos y te indicamos cuándo podrías volver a perforar.", detail: "Controles de seguimiento" },
    ],
    seguridad: [
      { num: "01", title: "Revisión de tu cicatrización", desc: "Preguntamos por queloides o cicatrices anormales antes de indicar el procedimiento." },
      { num: "02", title: "Protocolo estéril", desc: "La reparación se realiza con técnica aséptica y material estéril." },
      { num: "03", title: "Indicaciones para volver a perforar", desc: "Te decimos cuándo y dónde es prudente volver a perforar para cuidar la reparación." },
    ],
    cuidados: {
      antes: [
        "Retira todos los aretes de ambas orejas",
        "Cuéntanos si has tenido queloides o cicatrices anormales",
        "Suspende aspirina o antiinflamatorios solo si te lo indicamos",
      ],
      despues: [
        "Limpia la herida como te lo indiquemos",
        "No uses aretes en esa oreja hasta que te autoricemos",
        "Evita dormir sobre la oreja operada los primeros días",
        "No mojes la zona en piscina o mar hasta el control",
        "Asiste al retiro de puntos",
      ],
    },
    precio: {
      desde: null,
      opciones: [{ label: "Procedimiento", valor: null }],
      incluye: [
        "Valoración médica previa",
        "Procedimiento con anestesia local",
        "Indicaciones de cuidado",
        "Retiro de puntos y control",
      ],
      nota: "El valor se define en la valoración según el tipo de desgarro y si es una o ambas orejas.",
    },
    faq: [
      { q: "¿Cuánto cuesta la corrección de lóbulo rasgado?", a: "El precio se define en la valoración, según el tipo de desgarro y si se trata de una o ambas orejas." },
      { q: "¿Duele?", a: "Se hace con anestesia local. Se siente la aplicación de la anestesia y después suele ser tolerable." },
      { q: "¿Cuánto dura la recuperación?", a: "Es corta: habitualmente retomas tu rutina pronto y los puntos se retiran entre 1 y 2 semanas." },
      { q: "¿Cuándo puedo volver a usar aretes?", a: "Cuando el lóbulo haya cicatrizado bien, habitualmente después de varias semanas. Te indicamos el momento y el lugar adecuados para volver a perforar." },
      { q: "¿Queda cicatriz?", a: "Queda una cicatriz fina que suele ser discreta. Si tienes tendencia a queloides, lo valoramos con especial cuidado." },
      { q: "¿Qué efectos secundarios son normales?", a: "Inflamación leve, sensibilidad, pequeño morado y costra en la herida durante los primeros días." },
      { q: "¿Quién no puede hacérsela?", a: "No está indicada con infecciones activas en la oreja o condiciones médicas no controladas. La tendencia a queloides se revisa antes de decidir." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Corrección de lóbulo rasgado",
  },

  // ── Rejuvenecimiento vaginal ─────────────────────────────────────────────
  {
    slug: "rejuvenecimiento-vaginal",
    categoria: "zona-intima",
    grupo: "Salud íntima",
    nombre: "Rejuvenecimiento vaginal",
    resultados: [],
    relacionados: ["despigmentacion-intima-axilas", "hilos-de-colageno", "plasma-rico-en-plaquetas-facial"],
    hero: {
      eyebrow: "SALUD ÍNTIMA · REJUVENECIMIENTO VAGINAL",
      titulo: "Bienestar íntimo,",
      tituloEm: "con discreción y acompañamiento médico",
      sub: "Tonifica, hidrata y revitaliza la zona íntima con ácido hialurónico o hilos de colágeno. Tratamientos discretos, pensados para tu comodidad y tu seguridad.",
    },
    seo: {
      title: "Rejuvenecimiento vaginal en Medellín | Clínica Quantum",
      description:
        "Rejuvenecimiento vaginal en El Poblado, Medellín: tonifica, hidrata y revitaliza la zona íntima con ácido hialurónico o hilos de colágeno. Con discreción.",
      keywords: [
        "rejuvenecimiento vaginal medellín",
        "rejuvenecimiento íntimo femenino",
        "ácido hialurónico zona íntima",
        "hilos de colágeno zona íntima",
        "salud íntima el poblado",
      ],
    },
    ficha: {
      duracion: "30 a 60 min",
      sesiones: "Según el protocolo indicado",
      recuperacion: "Rutina suave en pocos días",
      resultados: "Progresivos, según el protocolo",
    },
    paraQuien: {
      ideal: [
        "Notas resequedad o menos hidratación en la zona íntima",
        "Sientes cambios después de partos, pérdida de peso o con los años",
        "Quieres sentirte más cómoda y segura con tu cuerpo",
        "Buscas un tratamiento discreto y con acompañamiento médico",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes una infección activa o un sangrado sin estudiar",
        "Tienes lesiones en la zona que no han sido valoradas",
        "Tienes alergia a alguno de los componentes",
      ],
    },
    problema: {
      titulo: "Un tema del que pocas veces se habla",
      parrafos: [
        "Con los partos, los cambios hormonales o el paso del tiempo, la zona íntima también cambia: menos hidratación, menos firmeza o incomodidad. Muchas mujeres lo viven en silencio porque no saben con quién hablarlo.",
        "Aquí lo conversamos con respeto y reserva. Valoramos tu caso y te proponemos un protocolo con ácido hialurónico o hilos de colágeno, pensado para tu comodidad.",
      ],
    },
    queEs: {
      titulo: "Qué es el rejuvenecimiento vaginal",
      desc: "Es un protocolo médico no quirúrgico para tonificar, hidratar y revitalizar la zona íntima. Según la valoración se utiliza ácido hialurónico, que aporta hidratación, o hilos de colágeno, que estimulan la firmeza de los tejidos. Se realiza con anestesia tópica o local, en un ambiente privado y con acompañamiento médico.",
    },
    beneficios: ["Tratamiento discreto", "Ácido hialurónico o hilos de colágeno", "Sin cirugía", "Acompañamiento médico"],
    zonasTitulo: "Qué buscamos mejorar",
    zonas: [
      { icon: "○", label: "Hidratación", desc: "Alivio de la sensación de resequedad." },
      { icon: "◇", label: "Tonicidad", desc: "Más firmeza en los tejidos de la zona íntima." },
      { icon: "✦", label: "Comodidad", desc: "Sentirte más a gusto en tu día a día." },
    ],
    pasos: [
      { num: "01", title: "Valoración privada", desc: "Conversamos con reserva sobre lo que sientes, revisamos tus antecedentes y definimos si conviene ácido hialurónico o hilos de colágeno.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación del protocolo", desc: "Aplicamos el tratamiento indicado con anestesia tópica o local, en un espacio privado y cuidando tu comodidad en todo momento.", detail: "30 a 60 min" },
      { num: "03", title: "Seguimiento", desc: "Te damos indicaciones claras para los días siguientes y revisamos tu evolución en control.", detail: "Control según protocolo" },
    ],
    seguridad: [
      { num: "01", title: "Privacidad y respeto", desc: "La valoración y el procedimiento se hacen en un espacio reservado, con lenguaje claro y sin juicios." },
      { num: "02", title: "Descartar lo que requiere otra atención", desc: "Si detectamos una infección, un sangrado o una lesión que necesite estudio, te orientamos antes de cualquier tratamiento." },
      { num: "03", title: "Material estéril y protocolo médico", desc: "Usamos material de uso individual y técnica aséptica en cada aplicación." },
      { num: "04", title: "Expectativas claras", desc: "Te explicamos qué puede mejorar el protocolo, cuánto dura y qué cuidados necesitas." },
    ],
    cuidados: {
      antes: [
        "Agenda fuera de tus días de menstruación",
        "Cuéntanos si tienes infecciones recientes o tratamientos en curso",
        "Evita cremas o productos en la zona el día del procedimiento",
        "Usa ropa interior de algodón y ropa cómoda",
      ],
      despues: [
        "Evita relaciones íntimas los días que te indiquemos",
        "Evita piscina, sauna y baños de inmersión unos días",
        "Usa ropa cómoda y evita el ejercicio intenso al inicio",
        "Es normal sentir inflamación o sensibilidad leve",
        "Consulta si notas dolor intenso, fiebre o secreción anormal",
      ],
    },
    precio: {
      desde: null,
      opciones: [{ label: "Protocolo", valor: null }],
      incluye: [
        "Valoración médica previa en un espacio privado",
        "Protocolo con ácido hialurónico o hilos de colágeno",
        "Indicaciones de cuidado",
        "Control de seguimiento",
      ],
      nota: "El precio depende del protocolo indicado y se define en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta el rejuvenecimiento vaginal?", a: "El precio depende del protocolo, con ácido hialurónico o hilos de colágeno, y se define en la valoración." },
      { q: "¿Duele?", a: "Usamos anestesia tópica o local para que el procedimiento sea tolerable. Puede haber sensibilidad leve en los días siguientes." },
      { q: "¿Es una cirugía?", a: "No. Es un protocolo médico no quirúrgico con ácido hialurónico o hilos de colágeno." },
      { q: "¿Cuánto dura la recuperación?", a: "Habitualmente retomas tu rutina en pocos días. Te indicamos cuánto tiempo evitar relaciones íntimas, piscina y ejercicio intenso." },
      { q: "¿Cuánto duran los resultados?", a: "Depende del protocolo y de cada organismo. Los productos se reabsorben con el tiempo, por lo que puede requerirse mantenimiento. Lo conversamos en la valoración." },
      { q: "¿Qué efectos secundarios son normales?", a: "Inflamación, sensibilidad, enrojecimiento o un morado leve en la zona durante los primeros días." },
      { q: "¿Quién no puede hacérselo?", a: "No está indicado en embarazo, lactancia, infecciones activas, sangrados sin estudiar o alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Rejuvenecimiento vaginal",
  },

  // ── Despigmentación de zona íntima y axilas ──────────────────────────────
  {
    slug: "despigmentacion-intima-axilas",
    categoria: "zona-intima",
    grupo: "Salud íntima",
    nombre: "Despigmentación de zona íntima y axilas",
    resultados: [],
    relacionados: ["rejuvenecimiento-vaginal", "depilacion-laser", "cosmelan"],
    hero: {
      eyebrow: "SALUD ÍNTIMA · DESPIGMENTACIÓN",
      titulo: "Un tono más parejo,",
      tituloEm: "para sentirte a gusto contigo misma",
      sub: "Aclaramos y emparejamos el tono de la piel de la zona íntima y las axilas con protocolos seguros, definidos desde una valoración médica y con total discreción.",
    },
    seo: {
      title: "Despigmentación íntima y axilas Medellín | Clínica Quantum",
      description:
        "Despigmentación de zona íntima y axilas en El Poblado, Medellín: aclara y empareja el tono de tu piel con protocolos seguros y discretos. Agenda tu cita.",
      keywords: [
        "despigmentación zona íntima medellín",
        "aclarar axilas medellín",
        "despigmentación de axilas",
        "aclaramiento íntimo",
        "manchas en axilas tratamiento",
      ],
    },
    ficha: {
      duracion: "Aprox. 30 a 45 min",
      sesiones: "Según el protocolo indicado",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, sesión a sesión",
    },
    paraQuien: {
      ideal: [
        "Tienes oscurecimiento en axilas, ingles o zona íntima",
        "Te incomoda usar vestido de baño o ropa sin mangas",
        "La pigmentación apareció por roce, depilación o cambios hormonales",
        "Quieres un tono más uniforme con un plan progresivo",
        "Buscas un protocolo discreto y con criterio médico",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes irritación, heridas o infección activa en la zona",
        "Tienes manchas que cambian de forma o color sin haberlas valorado",
        "Esperas un cambio inmediato en una sola sesión",
      ],
    },
    problema: {
      titulo: "Esas zonas que prefieres cubrir",
      parrafos: [
        "El roce, la depilación, el sudor o los cambios hormonales pueden oscurecer la piel de las axilas, las ingles o la zona íntima. No es falta de higiene, es una respuesta frecuente de la piel.",
        "Con un protocolo médico podemos aclarar y emparejar ese tono de forma progresiva, cuidando una piel que es especialmente sensible, para que vuelvas a usar vestido de baño o ropa sin mangas con tranquilidad.",
      ],
    },
    queEs: {
      titulo: "Qué es la despigmentación de zona íntima y axilas",
      desc: "Es un protocolo médico para aclarar y emparejar el tono de la piel en zonas donde se acumula pigmento. La piel de estas zonas produce más melanina como defensa ante la fricción y la inflamación repetida; por eso, además de aclarar, es clave reducir aquello que la estimula. Según la valoración se combinan productos y procedimientos despigmentantes aptos para piel sensible, junto con indicaciones para evitar lo que la oscurece. La mejoría es progresiva y requiere constancia.",
    },
    beneficios: ["Tono más parejo", "Protocolos seguros", "Total discreción", "Criterio médico"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◠", label: "Axilas", desc: "Oscurecimiento por roce, depilación o sudor." },
      { icon: "▽", label: "Zona íntima", desc: "Aclaramiento cuidadoso de una piel sensible." },
      { icon: "◡", label: "Ingles", desc: "Tono más uniforme en la zona del roce." },
      { icon: "◇", label: "Cara interna de los muslos", desc: "Donde el roce al caminar oscurece la piel." },
    ],
    pasos: [
      { num: "01", title: "Valoración de la piel", desc: "Revisamos las zonas con discreción, identificamos la causa de la pigmentación y descartamos lo que requiera otro manejo.", detail: "Valoración médica previa" },
      { num: "02", title: "Protocolo despigmentante", desc: "Aplicamos el protocolo despigmentante indicado para tu tipo de piel, con la intensidad adecuada para cada zona y cuidando su sensibilidad en todo momento.", detail: "Aprox. 30 a 45 min" },
      { num: "03", title: "Seguimiento y cuidado en casa", desc: "Revisamos la evolución sesión a sesión, ajustamos el protocolo si hace falta y te damos indicaciones para mantener en casa el tono logrado.", detail: "Resultados progresivos" },
    ],
    seguridad: [
      { num: "01", title: "Protocolo según tu piel", desc: "Las zonas íntimas y las axilas son sensibles. Elegimos la intensidad del protocolo según tu tipo de piel." },
      { num: "02", title: "Descartar lo que requiere estudio", desc: "Si una mancha tiene características que necesitan revisión, te orientamos antes de tratarla." },
      { num: "03", title: "Discreción en todo el proceso", desc: "La valoración y las sesiones se realizan en un espacio privado y con respeto." },
      { num: "04", title: "Expectativas claras", desc: "El aclaramiento es gradual y depende de la causa. Te lo explicamos antes de empezar." },
    ],
    cuidados: {
      antes: [
        "Evita depilarte la zona los días previos, salvo otra indicación",
        "Evita el sol y el bronceado en la zona los días previos",
        "No apliques desodorantes, cremas ni perfumes el día de la sesión",
        "Cuéntanos si tienes irritación o alergias en la piel",
      ],
      despues: [
        "Usa ropa holgada y de algodón",
        "Evita la depilación con cuchilla o cera hasta que te indiquemos",
        "Evita sol directo, piscina y sauna unos días",
        "Aplica solo los productos que te recomendemos",
        "Es normal sentir sensibilidad o enrojecimiento leve",
      ],
    },
    precio: {
      desde: null,
      opciones: [{ label: "Protocolo", valor: null }],
      incluye: [
        "Valoración médica previa",
        "Protocolo despigmentante según tu piel",
        "Indicaciones de cuidado en casa",
        "Seguimiento de la evolución",
      ],
      nota: "El precio depende de las zonas y del protocolo indicado, y se define en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta la despigmentación?", a: "El precio es personalizado porque depende de las zonas a tratar, del grado de pigmentación y del protocolo indicado. En la valoración revisamos tu piel con discreción y te damos el plan con su valor antes de empezar." },
      { q: "¿Duele?", a: "Suele ser tolerable. Según el protocolo puede haber ardor, calor o sensibilidad leve durante o después de la sesión. Si en algún momento te resulta molesto, nos avisas y ajustamos para cuidar tu piel." },
      { q: "¿Cuántas sesiones necesito?", a: "Depende del grado de pigmentación y de tu piel. Habitualmente se requieren varias sesiones y constancia con los cuidados en casa. El número aproximado te lo damos en la valoración." },
      { q: "¿Cuándo se ven los resultados?", a: "El aclaramiento es progresivo: la piel necesita tiempo para renovarse y eliminar el pigmento. Habitualmente se nota a lo largo de las sesiones, y el resultado depende de la causa de la pigmentación y de la constancia con los cuidados." },
      { q: "¿Cuánto dura el resultado? ¿La mancha puede volver?", a: "El tono logrado puede mantenerse, pero la pigmentación puede volver si persisten el roce, la depilación agresiva o los cambios hormonales. Por eso te damos indicaciones para cuidarlo y, si hace falta, sesiones de mantenimiento." },
      { q: "¿Qué efectos secundarios son normales?", a: "No requiere incapacidad: retomas tu rutina el mismo día. Lo habitual es enrojecimiento, descamación leve, sensibilidad o sensación de ardor pasajera. Usar ropa holgada y evitar el roce ayuda a que la piel se calme." },
      { q: "¿Puedo combinarlo con depilación láser?", a: "En muchos casos sí, porque reducir la depilación con cuchilla o cera ayuda a evitar que la zona se oscurezca. Si también te interesa el rejuvenecimiento vaginal, lo organizamos en la valoración para respetar los tiempos de la piel." },
      { q: "¿Quién no puede hacérselo?", a: "No está indicado en embarazo, lactancia, heridas o infecciones activas en la zona, ni sobre manchas que no han sido valoradas. Si una mancha cambia de forma o color, primero la revisamos antes de tratarla." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Despigmentación de zona íntima y axilas",
  },

  // ── Sueroterapia intravenosa ─────────────────────────────────────────────
  {
    slug: "sueroterapia",
    categoria: "bienestar",
    grupo: "Bienestar",
    nombre: "Sueroterapia intravenosa",
    resultados: [],
    relacionados: ["masajes-de-relajacion", "reduccion-intensiva", "post-quirurgico"],
    hero: {
      eyebrow: "BIENESTAR · SUEROTERAPIA INTRAVENOSA",
      titulo: "Vitaminas y antioxidantes,",
      tituloEm: "un respiro para tu organismo",
      sub: "Vitaminas y antioxidantes directo a tu organismo como complemento de tus hábitos de bienestar. Cada línea se indica después de una valoración médica.",
    },
    seo: {
      title: "Sueroterapia en Medellín | Clínica Quantum",
      description:
        "Sueroterapia intravenosa en El Poblado, Medellín: vitaminas y antioxidantes como complemento de bienestar, con valoración médica previa. Varias líneas.",
      keywords: [
        "sueroterapia medellín",
        "sueroterapia intravenosa",
        "sueros vitaminados medellín",
        "vitamina c intravenosa medellín",
        "sueroterapia precio medellín",
      ],
    },
    ficha: {
      duracion: "30 a 60 min por sesión",
      sesiones: "Según la línea y tu valoración",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Complemento de bienestar",
    },
    paraQuien: {
      ideal: [
        "Buscas un complemento para tus hábitos de bienestar",
        "Te recuperas de una etapa de desgaste físico o estrés",
        "Haces deporte y quieres apoyar tu recuperación",
        "Estás en un proceso posquirúrgico o de reducción con seguimiento médico",
        "Quieres una pausa supervisada dentro de tu rutina",
      ],
      noIdeal: [
        "Buscas curar o reemplazar el tratamiento de una enfermedad",
        "Tienes insuficiencia renal o cardíaca sin valoración",
        "Estás en embarazo o lactancia, salvo indicación médica",
        "Tienes alergia a alguno de los componentes",
      ],
    },
    problema: {
      titulo: "Cuando tu cuerpo te pide una pausa",
      parrafos: [
        "Semanas de trabajo intenso, entrenamientos exigentes, una cirugía reciente o el estrés del día a día. A veces sientes que te falta energía y que tu cuerpo necesita apoyo.",
        "La sueroterapia es un complemento de bienestar: no sustituye el descanso, la alimentación ni el tratamiento médico, pero puede sumar dentro de un plan cuidado y supervisado.",
      ],
    },
    queEs: {
      titulo: "Qué es la sueroterapia intravenosa",
      desc: "Es la administración por vía intravenosa de una mezcla de vitaminas y antioxidantes, bajo supervisión médica. Al ir por vena, los componentes pasan directamente a la circulación sin depender de la digestión. Tenemos varias líneas: détox, inmunológica, antienvejecimiento, adelgazante, post quirúrgica, deportiva, antiestrés, megadosis de vitamina C y energía. Es un complemento de bienestar y no cura enfermedades; la línea se elige después de valorar tu salud.",
    },
    beneficios: ["Valoración médica previa", "Varias líneas a tu medida", "Supervisión durante la sesión", "Sin incapacidad"],
    zonasTitulo: "Líneas de sueroterapia",
    zonas: [
      { icon: "○", label: "Détox e inmunológica", desc: "Apoyo antioxidante como complemento de tus hábitos." },
      { icon: "✦", label: "Antienvejecimiento y megadosis de vitamina C", desc: "Aporte de antioxidantes y vitamina C." },
      { icon: "▭", label: "Adelgazante", desc: "Complemento dentro de un plan de alimentación y actividad." },
      { icon: "◇", label: "Post quirúrgica", desc: "Apoyo en tu recuperación, según indicación médica." },
      { icon: "◠", label: "Deportiva y energía", desc: "Complemento para etapas de alta exigencia física." },
      { icon: "◡", label: "Antiestrés", desc: "Apoyo en temporadas de carga y cansancio." },
    ],
    pasos: [
      { num: "01", title: "Valoración médica", desc: "Revisamos tu salud, tus medicamentos y lo que buscas para indicar la línea adecuada o decirte si no es para ti.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesión de sueroterapia", desc: "Canalizamos una vena del brazo con material de uso individual y administramos el suero con calma, mientras descansas cómodamente con supervisión.", detail: "30 a 60 min" },
      { num: "03", title: "Seguimiento", desc: "Revisamos cómo te sentiste después de la sesión y definimos si conviene repetir, con qué frecuencia o si otra línea se ajusta mejor a lo que buscas.", detail: "Según tu plan" },
    ],
    seguridad: [
      { num: "01", title: "Valoración antes de cada indicación", desc: "La sueroterapia no es para todos. Revisamos antecedentes renales, cardíacos, alergias y medicamentos antes de indicarla." },
      { num: "02", title: "Canalización con técnica estéril", desc: "Usamos material de uso individual y protocolo aséptico en cada sesión." },
      { num: "03", title: "Supervisión durante la sesión", desc: "Controlamos la velocidad de administración y cómo te sientes mientras recibes el suero." },
      { num: "04", title: "Honestidad sobre sus alcances", desc: "Es un complemento de bienestar. No reemplaza tu tratamiento médico ni promete curar enfermedades." },
    ],
    cuidados: {
      antes: [
        "Come algo ligero antes de la sesión",
        "Bebe agua para facilitar la canalización",
        "Cuéntanos tus medicamentos, alergias y enfermedades",
        "Usa ropa cómoda con mangas fáciles de subir",
      ],
      despues: [
        "Puedes retomar tu rutina el mismo día",
        "Mantente bien hidratado",
        "Presiona unos minutos el sitio de la punción",
        "Es normal un pequeño morado en el sitio de la punción",
        "Consulta si notas enrojecimiento, dolor o calor en el brazo",
      ],
    },
    precio: {
      desde: 200000,
      opciones: [{ label: "Sesión (todas las líneas)", valor: 200000 }],
      incluye: [
        "Valoración médica previa",
        "Sesión de la línea indicada",
        "Supervisión durante la administración",
        "Indicaciones posteriores",
      ],
      nota: "El mismo valor aplica para todas las líneas. La línea y la frecuencia se definen en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta la sueroterapia?", a: "Cada sesión tiene un valor de $200.000 COP en cualquiera de las líneas: détox, inmunológica, antienvejecimiento, adelgazante, post quirúrgica, deportiva, antiestrés, megadosis de vitamina C y energía. La línea la definimos en la valoración." },
      { q: "¿Duele?", a: "Solo se siente el pinchazo al canalizar la vena, parecido al de un examen de sangre. Durante la sesión puedes descansar cómodamente; algunas personas notan una leve sensación de frío en el brazo mientras pasa el suero." },
      { q: "¿Qué puedo esperar? ¿Cura enfermedades?", a: "No. Es un complemento de bienestar y no reemplaza el tratamiento médico, la alimentación ni el descanso. La línea adelgazante tampoco hace bajar de peso por sí sola. Cómo te sientes después varía de una persona a otra, y lo revisamos en el seguimiento." },
      { q: "¿Cuánto dura la sesión y su efecto?", a: "La sesión dura habitualmente entre 30 y 60 minutos, según la línea. Su aporte es temporal, por eso funciona como complemento dentro de tus hábitos y no como una solución aislada; en el seguimiento definimos si conviene repetirla." },
      { q: "¿Cuántas sesiones necesito?", a: "Depende de la línea, de tu estado de salud y de lo que buscas. Algunas personas hacen una sesión puntual y otras un plan con cierta frecuencia; lo definimos en la valoración y lo revisamos en el seguimiento, sin sesiones innecesarias." },
      { q: "¿Qué efectos secundarios pueden aparecer?", a: "No requiere recuperación y retomas tu rutina el mismo día. Puede aparecer un morado leve en el sitio de la punción, sensación de frío en el brazo o, con menos frecuencia, mareo. Te acompañamos durante toda la sesión." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Puede acompañar los programas de reducción intensiva o la recuperación post quirúrgica cuando el médico lo indica, y también combinarse con un masaje de relajación para una jornada de bienestar. En la valoración vemos cómo encaja." },
      { q: "¿Quién no puede hacérsela?", a: "Personas con insuficiencia renal o cardíaca, alergia a los componentes y, salvo indicación médica, en embarazo o lactancia. Por eso la valoración previa es obligatoria." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Sueroterapia intravenosa",
  },

  // ── Masajes de relajación ────────────────────────────────────────────────
  {
    slug: "masajes-de-relajacion",
    categoria: "bienestar",
    grupo: "Bienestar",
    nombre: "Masajes de relajación",
    resultados: [],
    relacionados: ["sueroterapia", "indiba-dolor", "hydrafacial"],
    hero: {
      eyebrow: "BIENESTAR · MASAJE DE RELAJACIÓN",
      titulo: "Dos horas y media para ti,",
      tituloEm: "suelta la tensión y descansa",
      sub: "Dos horas y media de descanso profundo: masaje craneal, facial y corporal con piedras volcánicas para soltar la tensión, en el ambiente sereno de Clínica Quantum.",
    },
    seo: {
      title: "Masajes de relajación en Medellín | Clínica Quantum",
      description:
        "Masaje de relajación de 2 h 30 en El Poblado, Medellín: craneal, facial y corporal con piedras volcánicas para soltar la tensión y descansar a fondo.",
      keywords: [
        "masajes de relajación medellín",
        "masaje con piedras volcánicas medellín",
        "masaje relajante el poblado",
        "masaje craneal y facial",
        "spa medellín el poblado",
      ],
    },
    ficha: {
      duracion: "2 h 30",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Relajación desde la primera sesión",
    },
    paraQuien: {
      ideal: [
        "Sientes tensión en cuello, espalda o cabeza",
        "Llevas semanas de estrés y necesitas desconectarte",
        "Sientes que no terminas de descansar aunque duermas",
        "Quieres regalarte o regalar un momento de descanso",
        "Buscas un espacio tranquilo para cuidarte",
      ],
      noIdeal: [
        "Tienes fiebre, infección o una lesión aguda",
        "Tienes trombosis, várices dolorosas o problemas circulatorios sin valorar",
        "Estás en embarazo, salvo autorización médica",
        "Tienes heridas o irritación en la piel",
      ],
    },
    problema: {
      titulo: "Cargas más tensión de la que crees",
      parrafos: [
        "Hombros tensos, dolor de cabeza al final del día y la sensación de que nunca terminas de descansar. El estrés se acumula en el cuerpo aunque no siempre lo notes.",
        "Este masaje está pensado para frenar: dos horas y media en las que sueltas la tensión de la cabeza a los pies, sin mirar el celular ni pensar en lo que falta por hacer, y te regalas un descanso real.",
      ],
    },
    queEs: {
      titulo: "Qué incluye el masaje de relajación",
      desc: "Es una sesión de 2 h 30 que recorre todo el cuerpo: masaje craneal para liberar la tensión de la cabeza, masaje facial para relajar el rostro y masaje corporal con piedras volcánicas, cuyo calor ayuda a soltar los músculos y a profundizar la sensación de descanso. La presión se adapta a lo que te resulte cómodo y el ritmo es pausado, para que tu mente también descanse.",
    },
    beneficios: ["Sesión de 2 h 30", "Craneal, facial y corporal", "Piedras volcánicas", "Descanso profundo"],
    zonasTitulo: "Qué incluye la sesión",
    zonas: [
      { icon: "◠", label: "Masaje craneal", desc: "Libera la tensión acumulada en la cabeza." },
      { icon: "○", label: "Masaje facial", desc: "Relaja el rostro y la mandíbula." },
      { icon: "▭", label: "Masaje corporal", desc: "Suelta cuello, espalda, brazos y piernas." },
      { icon: "◇", label: "Piedras volcánicas", desc: "Calor que ayuda a relajar los músculos." },
    ],
    pasos: [
      { num: "01", title: "Bienvenida y preguntas previas", desc: "Te preguntamos por tu salud, tus zonas de tensión y tus preferencias de presión para adaptar la sesión a ti desde el primer minuto.", detail: "Antes de empezar" },
      { num: "02", title: "Masaje craneal, facial y corporal", desc: "Recorremos con calma cabeza, rostro y cuerpo, e integramos piedras volcánicas calientes en el masaje corporal para profundizar la relajación muscular.", detail: "2 h 30" },
      { num: "03", title: "Cierre y recomendaciones", desc: "Te damos un momento para incorporarte con calma y recomendaciones sencillas para prolongar la sensación de descanso el resto del día.", detail: "Al terminar" },
    ],
    seguridad: [
      { num: "01", title: "Preguntas de salud antes del masaje", desc: "Revisamos condiciones como problemas circulatorios, embarazo o lesiones para adaptar o posponer la sesión." },
      { num: "02", title: "Temperatura de las piedras controlada", desc: "Verificamos el calor de las piedras volcánicas antes de apoyarlas sobre tu piel." },
      { num: "03", title: "Presión a tu medida", desc: "Ajustamos la intensidad del masaje a lo que te resulte cómodo en todo momento." },
      { num: "04", title: "Pausas cuando lo necesites", desc: "Puedes pedir una pausa, cambiar de posición o que ajustemos el calor de las piedras en cualquier momento de la sesión." },
    ],
    cuidados: {
      antes: [
        "Evita comidas pesadas justo antes de la sesión",
        "Llega unos minutos antes para empezar con calma",
        "No programes compromisos justo después",
        "Cuéntanos si tienes lesiones, várices o condiciones de salud",
      ],
      despues: [
        "Bebe agua durante el resto del día",
        "Evita el ejercicio intenso ese día",
        "Date un tiempo tranquilo antes de volver a tus actividades",
        "Evita duchas muy calientes justo después",
        "Es normal sentir algún músculo sensible al día siguiente",
      ],
    },
    precio: {
      desde: 250000,
      opciones: [{ label: "Sesión de 2 h 30", detalle: "Craneal, facial, corporal, piedras volcánicas", valor: 250000 }],
      incluye: [
        "Masaje craneal",
        "Masaje facial",
        "Masaje corporal con piedras volcánicas",
        "Recomendaciones para después de la sesión",
      ],
      nota: "Cuéntanos al agendar si tienes alguna condición de salud para adaptar la sesión.",
    },
    faq: [
      { q: "¿Cuánto cuesta el masaje de relajación?", a: "La sesión de 2 h 30 tiene un valor de $250.000 COP e incluye masaje craneal, facial y corporal con piedras volcánicas. Si tienes alguna condición de salud, cuéntanos al agendar para adaptar la sesión a ti." },
      { q: "¿Duele o las piedras queman?", a: "No debería doler: la presión se ajusta a lo que te resulte cómodo. Controlamos la temperatura de las piedras volcánicas antes de apoyarlas sobre tu piel y puedes pedir que ajustemos el calor o la presión en cualquier momento." },
      { q: "¿Cuánto dura la sesión y su efecto?", a: "La sesión dura dos horas y media y la relajación se nota desde ese mismo momento. Cuánto se prolonga depende de tu ritmo y del estrés que cargues; hidratarte y darte un rato tranquilo después ayuda a conservarla." },
      { q: "¿Tiene efectos secundarios?", a: "No requiere recuperación: retomas tu rutina el mismo día. Algunas personas sienten somnolencia, sed o algún músculo sensible al día siguiente, algo pasajero. Bebe agua y evita el ejercicio intenso ese día." },
      { q: "¿Cada cuánto puedo hacérmelo?", a: "Es una sesión completa en sí misma, así que no requiere un número mínimo de sesiones. Puedes hacértelo de forma puntual o repetirlo cuando sientas que la tensión se acumula, según tu ritmo y tus necesidades." },
      { q: "¿Puedo combinarlo con otros tratamientos? ¿Es terapéutico?", a: "Puedes combinarlo con sueroterapia o con un facial como Hydrafacial para una jornada de bienestar. Es un masaje de relajación, no terapéutico: si tienes dolor o una lesión específica, podemos orientarte hacia opciones como INDIBA para el dolor." },
      { q: "¿Quién no debe hacérselo?", a: "Personas con fiebre, infecciones, trombosis, lesiones agudas o heridas en la piel. En embarazo solo con autorización médica. Si tienes várices o alguna condición de salud, cuéntanos antes para adaptar o posponer la sesión." },
    ],
    waMensaje: "Hola, quiero agendar un masaje de relajación",
  },
];
