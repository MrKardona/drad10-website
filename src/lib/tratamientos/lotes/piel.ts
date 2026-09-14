import type { Tratamiento } from "../types";

// Lote: piel, manchas y cicatrices. Fuente: docs/servicios-manifest.json.
export const piel: Tratamiento[] = [
  // ─────────────────────────────────────────────────────────────
  {
    slug: "laser-co2",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Láser CO2 de última tecnología",
    resultados: [],
    relacionados: ["subcision-de-hoyuelos", "tratamiento-de-acne", "microagujas"],
    hero: {
      eyebrow: "LÁSER CO2 · RENOVACIÓN PROFUNDA",
      titulo: "Una piel renovada desde adentro,",
      tituloEm: "con textura más pareja y firme",
      sub: "Renovación profunda y controlada para mejorar cicatrices, marcas de acné, textura y firmeza. Siempre con valoración médica previa para definir si tu piel es apta y cómo prepararla.",
    },
    seo: {
      title: "Láser CO2 en Medellín | Clínica Quantum",
      description: "Láser CO2 en El Poblado, Medellín: mejora cicatrices, marcas de acné, textura y firmeza de la piel con valoración médica y seguimiento cercano.",
      keywords: ["láser co2 medellín", "láser co2 cicatrices de acné", "láser co2 precio medellín", "rejuvenecimiento con láser co2", "láser para textura de la piel"],
    },
    ficha: {
      duracion: "30 a 60 min según la zona",
      sesiones: "1 a 3 sesiones según tu caso",
      recuperacion: "Enrojecimiento y descamación por días",
      resultados: "Progresivos, en semanas a meses",
    },
    paraQuien: {
      ideal: [
        "Tienes cicatrices o marcas de acné que no mejoran con tratamientos superficiales",
        "Notas la textura irregular o los poros muy marcados",
        "Buscas más firmeza en una piel que empieza a perder tono",
        "Puedes cuidarte del sol de forma estricta durante la recuperación",
      ],
      noIdeal: [
        "Tienes acné activo, herpes u otra infección en la zona",
        "Estás en embarazo o lactancia",
        "Tu piel es oscura o tiende a mancharse: la valoración define si es apto",
        "No puedes evitar el sol en las semanas siguientes",
      ],
    },
    problema: {
      titulo: "Marcas que el maquillaje ya no disimula",
      parrafos: [
        "Las cicatrices de acné, los poros abiertos y una textura irregular cambian cómo la luz se refleja en tu rostro. Muchas veces ya probaste cremas y limpiezas, y la piel sigue igual.",
        "Cuando el daño está en capas más profundas, hace falta una renovación más profunda. El láser CO2 trabaja justo ahí, de forma controlada y con un plan que se ajusta a tu tipo de piel.",
      ],
    },
    queEs: {
      titulo: "Qué es el láser CO2",
      desc: "Es un láser que genera microzonas de calor controlado en la piel. Esas microlesiones estimulan la renovación del tejido y la producción de colágeno, lo que ayuda a mejorar cicatrices, marcas de acné, textura y firmeza. Es un tratamiento con recuperación real: la piel se enrojece y se descama durante varios días, y la fotoprotección estricta es parte del resultado.",
    },
    beneficios: ["Mejora cicatrices de acné", "Textura más pareja", "Estimula colágeno", "Plan según tu piel"],
    zonasTitulo: "Qué puede mejorar",
    zonas: [
      { icon: "◇", label: "Cicatrices de acné", desc: "Suaviza el relieve de las marcas hundidas." },
      { icon: "○", label: "Textura y poros", desc: "Una superficie más lisa y uniforme." },
      { icon: "◠", label: "Firmeza", desc: "Estimula colágeno en pieles con pérdida de tono." },
      { icon: "✦", label: "Otras cicatrices", desc: "Marcas en cara o cuerpo, según la valoración." },
    ],
    pasos: [
      { num: "01", title: "Valoración de tu piel", desc: "Analizamos tu piel con el analizador facial, revisamos tu fototipo y tu tendencia a mancharte, y definimos si el láser es apto y cómo preparar la piel.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesión de láser CO2", desc: "Aplicamos anestesia tópica y tratamos la zona con parámetros ajustados a tu caso. Sientes calor y picor que se controla durante la sesión.", detail: "30 a 60 min" },
      { num: "03", title: "Recuperación y seguimiento", desc: "Te damos un plan de cuidados para los días de enrojecimiento y descamación, y revisamos la evolución de tu piel.", detail: "Control de evolución" },
    ],
    seguridad: [
      { num: "01", title: "Tu fototipo decide", desc: "En pieles oscuras o con tendencia a manchas evaluamos el riesgo de hiperpigmentación antes de proponer el láser." },
      { num: "02", title: "Parámetros a tu medida", desc: "La intensidad y la profundidad se ajustan a tu piel y a lo que queremos corregir, no a un protocolo único." },
      { num: "03", title: "Recuperación explicada", desc: "Sabes desde antes cuántos días de enrojecimiento y descamación esperar, para organizar tu agenda." },
      { num: "04", title: "Acompañamiento posterior", desc: "Revisamos tu evolución y ajustamos los cuidados si la piel lo necesita." },
    ],
    cuidados: {
      antes: [
        "Evita el sol y las camas bronceadoras las semanas previas",
        "Suspende retinoides y exfoliantes cuando te lo indiquemos",
        "Cuéntanos si has tenido herpes, manchas o cicatrices abultadas",
        "Llega sin maquillaje",
      ],
      despues: [
        "Usa protector solar a diario y evita el sol directo",
        "No retires las costras ni la piel que se descama",
        "Hidrata con los productos que te indiquemos",
        "Evita maquillaje, piscina y sauna los primeros días",
        "Consulta si notas dolor intenso, pus o ampollas",
      ],
    },
    precio: {
      desde: null,
      opciones: [
        { label: "Cicatrices, textura, acné, flacidez", valor: null },
      ],
      incluye: ["Valoración médica previa", "Sesión de láser CO2 según tu plan", "Indicaciones de cuidado posterior", "Control de evolución"],
      nota: "El precio se define en la valoración según la zona, la indicación y el número de sesiones.",
    },
    faq: [
      { q: "¿Cuánto cuesta el láser CO2?", a: "El precio es a valoración, porque depende de la zona, de lo que queremos tratar y de cuántas sesiones necesitas. En la consulta te damos el valor exacto." },
      { q: "¿Duele?", a: "Se aplica anestesia tópica antes de la sesión. Aun así sientes calor y picor, que la mayoría de pacientes tolera bien." },
      { q: "¿Cuánto dura la recuperación?", a: "Habitualmente hay enrojecimiento, inflamación y descamación durante varios días. La piel puede seguir rosada algunas semanas. Te explicamos cómo manejarlo." },
      { q: "¿Cuándo se ven los resultados?", a: "Primero notas la piel más lisa al terminar la descamación. La mejoría de cicatrices y firmeza sigue avanzando durante semanas y meses, a medida que se forma colágeno nuevo." },
      { q: "¿Sirve para pieles oscuras?", a: "Depende. En pieles oscuras o con tendencia a manchas hay más riesgo de hiperpigmentación. La valoración define si es apto o si otro tratamiento es más seguro para ti." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Los más comunes son enrojecimiento, inflamación, sensibilidad y descamación. Con menos frecuencia pueden aparecer manchas o brotes. Por eso la fotoprotección y los cuidados son estrictos." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. En cicatrices hundidas a veces se combina con subcisión, y en acné con un protocolo para controlar los brotes antes del láser." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Láser CO2",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "cosmelan",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Tratamiento de manchas – Cosmelan",
    resultados: [],
    relacionados: ["manchas-mesoterapeutico", "microagujas-despigmentantes", "porcelanizacion-facial"],
    hero: {
      eyebrow: "COSMELAN · PROTOCOLO DESPIGMENTANTE",
      titulo: "Un tono más uniforme,",
      tituloEm: "una piel que recupera su luz",
      sub: "Protocolo despigmentante para manchas, melasma e hiperpigmentación, con una fase en consulta y otra en casa. Te acompañamos en cada etapa con seguimiento profesional.",
    },
    seo: {
      title: "Cosmelan en Medellín | Clínica Quantum",
      description: "Cosmelan en El Poblado, Medellín: protocolo despigmentante para manchas y melasma que ayuda a unificar el tono de la piel, con seguimiento profesional.",
      keywords: ["cosmelan medellín", "tratamiento para melasma medellín", "quitar manchas de la cara", "cosmelan precio medellín", "despigmentante facial"],
    },
    ficha: {
      duracion: "Aplicación en consulta de 30 min",
      sesiones: "1 protocolo con fase en casa",
      recuperacion: "Enrojecimiento y descamación por días",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes manchas, melasma o hiperpigmentación en el rostro",
        "Sientes que tu tono está apagado o disparejo",
        "Puedes seguir la fase en casa con disciplina",
        "Estás dispuesta a usar protector solar todos los días",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes heridas, infección o piel irritada en la zona",
        "Esperas eliminar las manchas para siempre sin cuidarte del sol",
      ],
    },
    problema: {
      titulo: "Manchas que vuelven aunque las cubras",
      parrafos: [
        "El melasma y las manchas por sol cambian cómo te ves en fotos y frente al espejo. El corrector ayuda un rato, pero la mancha sigue ahí y a veces se oscurece más.",
        "Las manchas tienen varias causas, como el sol, las hormonas o la inflamación. Por eso necesitan un protocolo ordenado y un seguimiento que te acompañe más allá de la primera aplicación.",
      ],
    },
    queEs: {
      titulo: "Qué es el protocolo Cosmelan",
      desc: "Es un protocolo despigmentante que actúa sobre la producción de melanina para ayudar a unificar el tono. Tiene una fase en consulta, donde se aplica la mascarilla, y una fase en casa con cremas de mantenimiento. Según el portafolio incluye Cosme 1, Cosme 2, pantalla y calmante. La respuesta varía en cada piel y la fotoprotección es parte del tratamiento.",
    },
    beneficios: ["Unifica el tono", "Fase en consulta y en casa", "Incluye pantalla y calmante", "Seguimiento profesional"],
    zonasTitulo: "Qué ayuda a tratar",
    zonas: [
      { icon: "○", label: "Melasma", desc: "Manchas de origen hormonal en frente, mejillas o bigote." },
      { icon: "✦", label: "Manchas por sol", desc: "Pigmento acumulado por la exposición solar." },
      { icon: "◇", label: "Hiperpigmentación", desc: "Marcas oscuras que dejan el acné o la inflamación." },
      { icon: "◠", label: "Tono apagado", desc: "Más luminosidad y un color más parejo." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico de tus manchas", desc: "Analizamos tu piel con el analizador facial para ver el tipo y la profundidad del pigmento, y confirmamos si el protocolo es para ti.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en consulta", desc: "Aplicamos la mascarilla Cosme 1 y te explicamos cuánto tiempo mantenerla y cómo retirarla en casa.", detail: "Fase en consulta" },
      { num: "03", title: "Fase en casa y seguimiento", desc: "Continúas con Cosme 2, la pantalla y el calmante, y revisamos cómo evoluciona tu piel en los controles.", detail: "Controles de seguimiento" },
    ],
    seguridad: [
      { num: "01", title: "Diagnóstico antes de aplicar", desc: "No todas las manchas son iguales. Confirmamos el tipo de pigmento antes de indicar el protocolo." },
      { num: "02", title: "Instrucciones claras para casa", desc: "Te llevas por escrito cuándo retirar la mascarilla y cómo usar cada producto." },
      { num: "03", title: "Expectativas reales", desc: "El melasma es crónico y puede reaparecer. Te explicamos cómo mantener el resultado." },
      { num: "04", title: "Seguimiento de la irritación", desc: "Es normal que la piel se enrojezca y se pele. Revisamos que la reacción sea la esperada." },
    ],
    cuidados: {
      antes: [
        "Evita el sol y los exfoliantes la semana previa",
        "Cuéntanos qué cremas y medicamentos usas",
        "Organiza tu agenda para los días de descamación",
      ],
      despues: [
        "Retira la mascarilla a la hora exacta que te indicamos",
        "Usa la pantalla todos los días, incluso en casa",
        "Aplica el calmante si sientes ardor o tirantez",
        "No arranques la piel que se descama",
        "Asiste a tus controles de seguimiento",
      ],
    },
    precio: {
      desde: 3500000,
      opciones: [
        { label: "Protocolo completo", detalle: "Cosme 1, Cosme 2, pantalla, calmante", valor: 3500000 },
      ],
      incluye: ["Valoración médica previa", "Cosme 1 (aplicación en consulta)", "Cosme 2 para la fase en casa", "Pantalla y calmante", "Indicaciones y seguimiento profesional"],
    },
    faq: [
      { q: "¿Cuánto cuesta Cosmelan?", a: "El protocolo completo tiene un valor de $3.500.000 e incluye Cosme 1, Cosme 2, pantalla y calmante." },
      { q: "¿Duele?", a: "No es un procedimiento con agujas. Durante los primeros días puedes sentir ardor, picor y tirantez, que se manejan con el calmante y las indicaciones." },
      { q: "¿Cuánto dura la recuperación?", a: "Habitualmente la piel se enrojece y se descama durante varios días. Muchas personas prefieren hacer esos días en casa." },
      { q: "¿Cuándo veo el resultado?", a: "El aclaramiento es progresivo y se nota en las semanas siguientes. Cuánto mejora depende del tipo de mancha y de cómo sigas la fase en casa." },
      { q: "¿Las manchas vuelven?", a: "Pueden volver, sobre todo el melasma, si hay exposición al sol o cambios hormonales. La fotoprotección diaria y el mantenimiento son clave." },
      { q: "¿Quién no puede hacerlo?", a: "No se indica en embarazo, lactancia, piel irritada o con heridas. En la valoración revisamos tu caso." },
      { q: "¿Se combina con otros tratamientos?", a: "Sí. Según tu piel puede complementarse más adelante con mesoterapia despigmentante o microagujas. Lo definimos en el seguimiento." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Tratamiento de manchas Cosmelan",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "manchas-mesoterapeutico",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Tratamiento de manchas mesoterapéutico",
    resultados: [],
    relacionados: ["cosmelan", "microagujas-despigmentantes", "peeling"],
    hero: {
      eyebrow: "MESOTERAPIA · APARATOLOGÍA · MANCHAS",
      titulo: "Aclara tus manchas paso a paso,",
      tituloEm: "sin detener tu rutina",
      sub: "Un paquete que combina mesoterapia y aparatología para ayudar a reducir la apariencia de las manchas y unificar el tono de forma progresiva, con criterio médico en cada sesión.",
    },
    seo: {
      title: "Tratamiento de manchas en Medellín | Clínica Quantum",
      description: "Tratamiento de manchas en El Poblado, Medellín: mesoterapia y aparatología en paquete para unificar el tono de tu piel de forma progresiva y cuidadosa.",
      keywords: ["tratamiento de manchas medellín", "mesoterapia para manchas", "quitar manchas de la cara medellín", "manchas en la piel tratamiento", "unificar tono de piel"],
    },
    ficha: {
      duracion: "30 a 45 min por sesión",
      sesiones: "Paquete de 6 sesiones",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, sesión a sesión",
    },
    paraQuien: {
      ideal: [
        "Tienes manchas leves a moderadas por sol o por acné",
        "Prefieres un tratamiento gradual sin días de descamación intensa",
        "Buscas un tono más parejo y luminoso",
        "Puedes asistir a sesiones periódicas durante varias semanas",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes infección activa o heridas en la zona",
        "Tienes alergia conocida a alguno de los activos",
      ],
    },
    problema: {
      titulo: "Ese tono disparejo que te hace ver cansada",
      parrafos: [
        "Las manchas pequeñas se van sumando: sol, marcas de granitos, cambios hormonales. De pronto la piel se ve opaca y dependes del maquillaje para sentirte bien.",
        "No siempre necesitas un tratamiento agresivo. Un plan por sesiones, constante y bien guiado, puede ayudar a unificar el tono sin sacarte de tu rutina.",
      ],
    },
    queEs: {
      titulo: "Qué es el tratamiento mesoterapéutico de manchas",
      desc: "Combina mesoterapia, que deposita activos despigmentantes y antioxidantes en la piel mediante microinyecciones superficiales, con sesiones de aparatología que potencian su efecto. El paquete incluye 6 mesoterapias, 6 sesiones de aparatología y 2 limpiezas. La mejoría es progresiva y depende del tipo de mancha.",
    },
    beneficios: ["6 mesoterapias", "6 sesiones de aparatología", "2 limpiezas incluidas", "Sin incapacidad"],
    zonasTitulo: "Qué ayuda a mejorar",
    zonas: [
      { icon: "✦", label: "Manchas por sol", desc: "Pigmento acumulado en mejillas, frente y nariz." },
      { icon: "◇", label: "Marcas de acné", desc: "Manchas oscuras que quedan después de los brotes." },
      { icon: "○", label: "Tono disparejo", desc: "Un color más homogéneo en todo el rostro." },
      { icon: "◠", label: "Luminosidad", desc: "Una piel con más luz y aspecto descansado." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Vemos el tipo de mancha y su profundidad para definir el orden de las sesiones.", detail: "Valoración médica previa" },
      { num: "02", title: "Mesoterapia y aparatología", desc: "En cada sesión aplicamos los activos con microinyecciones superficiales y complementamos con aparatología. Incluye 2 limpiezas en el paquete.", detail: "30 a 45 min" },
      { num: "03", title: "Evolución y mantenimiento", desc: "Comparamos tu piel a lo largo del paquete y te dejamos un plan de cuidado para mantener el resultado.", detail: "Seguimiento por sesión" },
    ],
    seguridad: [
      { num: "01", title: "Tipo de mancha confirmado", desc: "Identificamos el pigmento antes de empezar para indicar lo que tiene sentido en tu piel." },
      { num: "02", title: "Microinyecciones superficiales", desc: "Técnica en consultorio con material estéril y de un solo uso." },
      { num: "03", title: "Progreso medido", desc: "Revisamos la evolución durante el paquete para ajustar si hace falta." },
    ],
    cuidados: {
      antes: [
        "Evita el sol intenso los días previos",
        "Llega sin maquillaje",
        "Cuéntanos si tomas anticoagulantes o tienes alergias",
      ],
      despues: [
        "Usa protector solar a diario",
        "No te maquilles durante las primeras horas",
        "Evita piscina, sauna y ejercicio intenso ese día",
        "Es normal un leve enrojecimiento o pequeños puntos por unas horas",
      ],
    },
    precio: {
      desde: 2000000,
      opciones: [
        { label: "Paquete", detalle: "6 mesoterapias, 6 aparatología, 2 limpiezas", valor: 2000000 },
      ],
      incluye: ["Valoración médica previa", "6 sesiones de mesoterapia", "6 sesiones de aparatología", "2 limpiezas faciales", "Indicaciones de cuidado"],
    },
    faq: [
      { q: "¿Cuánto cuesta el paquete?", a: "El paquete tiene un valor de $2.000.000 e incluye 6 mesoterapias, 6 sesiones de aparatología y 2 limpiezas." },
      { q: "¿Duele?", a: "Las microinyecciones son superficiales. Sientes pequeños pinchazos, tolerables para la mayoría de pacientes." },
      { q: "¿Necesito incapacidad?", a: "No. Puede quedar un leve enrojecimiento o pequeños puntos por unas horas y retomas tu rutina el mismo día." },
      { q: "¿Cuándo se nota la mejoría?", a: "Es progresiva. Habitualmente se empieza a notar después de varias sesiones y se consolida al final del paquete." },
      { q: "¿Las manchas pueden volver?", a: "Sí, si hay exposición al sol sin protección o cambios hormonales. El protector diario ayuda a mantener el resultado." },
      { q: "¿Quién no puede hacerlo?", a: "No se indica en embarazo, lactancia, infección activa en la zona o alergia a los activos." },
      { q: "¿En qué se diferencia de Cosmelan?", a: "Este paquete es gradual y sin días de descamación intensa. Cosmelan es un protocolo más intenso. En la valoración te decimos cuál conviene a tu tipo de mancha." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Tratamiento de manchas mesoterapéutico",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "microagujas-despigmentantes",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Microagujas con despigmentantes",
    resultados: [],
    relacionados: ["microagujas", "cosmelan", "manchas-mesoterapeutico"],
    hero: {
      eyebrow: "MICROAGUJAS · DESPIGMENTANTES",
      titulo: "Textura renovada y manchas más tenues,",
      tituloEm: "en un mismo plan",
      sub: "Microagujas que estimulan colágeno y mejoran poros, cicatrices y textura, en paquete con activos despigmentantes para ayudar a unificar el tono.",
    },
    seo: {
      title: "Microagujas con despigmentantes Medellín | Quantum",
      description: "Microagujas con despigmentantes en El Poblado, Medellín: estimulan colágeno, mejoran poros y textura y ayudan a unificar el tono de tu piel con manchas.",
      keywords: ["microagujas con despigmentantes", "microneedling manchas medellín", "microagujas medellín", "tratamiento manchas y poros", "dermapunción facial medellín"],
    },
    ficha: {
      duracion: "45 a 60 min por sesión",
      sesiones: "Paquete, según tu plan",
      recuperacion: "Enrojecimiento de 1 a 3 días",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes manchas y además poros abiertos o textura irregular",
        "Te quedaron marcas de acné oscuras o hundidas leves",
        "Buscas mejorar la calidad de tu piel de forma integral",
        "Puedes cuidarte del sol durante el tratamiento",
      ],
      noIdeal: [
        "Tienes acné activo inflamado, herpes o infección en la zona",
        "Estás en embarazo o lactancia",
        "Tienes tendencia a cicatrices queloides: hay que valorarlo antes",
      ],
    },
    problema: {
      titulo: "Cuando no son solo manchas",
      parrafos: [
        "Muchas pieles tienen dos preocupaciones a la vez: manchas que opacan el tono y una textura con poros o marcas que se nota de cerca.",
        "Tratar solo una deja la sensación de que falta algo. Este paquete une la renovación de las microagujas con activos despigmentantes para trabajar ambas cosas.",
      ],
    },
    queEs: {
      titulo: "Qué son las microagujas con despigmentantes",
      desc: "Las microagujas crean microcanales controlados en la piel que estimulan la producción de colágeno y mejoran poros, cicatrices y textura. Esos microcanales permiten que los activos despigmentantes penetren mejor. La mejoría es gradual y el número de sesiones del paquete se explica en la valoración.",
    },
    beneficios: ["Estimula colágeno", "Mejora poros y textura", "Ayuda a unificar el tono", "Recuperación corta"],
    zonasTitulo: "Qué ayuda a mejorar",
    zonas: [
      { icon: "✦", label: "Manchas", desc: "Pigmento por sol o por inflamación." },
      { icon: "○", label: "Poros", desc: "Poros menos visibles y piel más fina." },
      { icon: "◇", label: "Marcas de acné", desc: "Cicatrices leves y manchas posteriores al acné." },
      { icon: "◠", label: "Textura", desc: "Una superficie más lisa y uniforme." },
    ],
    pasos: [
      { num: "01", title: "Valoración de tu piel", desc: "Con el analizador facial revisamos manchas, poros y textura para definir el plan del paquete.", detail: "Valoración médica previa" },
      { num: "02", title: "Microagujas con activos", desc: "Aplicamos anestesia tópica, realizamos las microagujas y depositamos los despigmentantes en la piel.", detail: "45 a 60 min" },
      { num: "03", title: "Evolución entre sesiones", desc: "Revisamos cómo responde tu piel y ajustamos el plan hasta completar el paquete.", detail: "Seguimiento por sesión" },
    ],
    seguridad: [
      { num: "01", title: "Material estéril de un solo uso", desc: "Cada sesión se hace con cartuchos nuevos y la piel desinfectada." },
      { num: "02", title: "Profundidad según la zona", desc: "Ajustamos la profundidad a cada área del rostro y a lo que queremos tratar." },
      { num: "03", title: "Cuidado del pigmento", desc: "En pieles con tendencia a manchas cuidamos la intensidad para no generar más pigmento." },
    ],
    cuidados: {
      antes: [
        "Evita el sol y los exfoliantes la semana previa",
        "Suspende retinoides cuando te lo indiquemos",
        "Llega sin maquillaje",
      ],
      despues: [
        "No te maquilles durante 24 horas",
        "Usa protector solar a diario",
        "Hidrata con los productos que te indiquemos",
        "Evita piscina, sauna y ejercicio intenso 48 horas",
      ],
    },
    precio: {
      desde: 1000000,
      opciones: [
        { label: "Paquete", valor: 1000000 },
      ],
      incluye: ["Valoración médica previa", "Sesiones de microagujas del paquete", "Activos despigmentantes", "Indicaciones de cuidado"],
      nota: "En la valoración te explicamos cuántas sesiones incluye el paquete para tu caso.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El paquete de microagujas con despigmentantes tiene un valor de $1.000.000." },
      { q: "¿Duele?", a: "Se aplica anestesia tópica. Sientes una vibración y molestia leve, sobre todo en zonas óseas como frente y nariz." },
      { q: "¿Cuánto dura el enrojecimiento?", a: "Habitualmente de 1 a 3 días, parecido a una quemadura de sol leve. Puede haber algo de descamación fina." },
      { q: "¿Cuándo veo resultados?", a: "La piel se ve más luminosa en pocos días. La mejoría de manchas, poros y textura es progresiva a lo largo de las sesiones." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Enrojecimiento, sensibilidad, inflamación leve y, en algunos casos, pequeños puntos. Con poca frecuencia pueden aparecer brotes o manchas." },
      { q: "¿Quién no puede hacérselo?", a: "No se indica con acné activo inflamado, infección en la zona, embarazo o lactancia. Si tienes tendencia a queloides lo valoramos antes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Microagujas con despigmentantes",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "nanopore",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Nanopore",
    resultados: [],
    relacionados: ["microagujas", "mesobotox", "skinbooster"],
    hero: {
      eyebrow: "NANOPORE · RENOVACIÓN DE LA PIEL",
      titulo: "Una piel más firme y luminosa,",
      tituloEm: "con un tono que se ve parejo",
      sub: "Nanopore crea microcanales que potencian la entrada de activos y activan la renovación de la piel. Una opción para mejorar calidad y luz con recuperación corta.",
    },
    seo: {
      title: "Nanopore en Medellín | Clínica Quantum",
      description: "Nanopore en El Poblado, Medellín: microcanales que potencian activos y renuevan la piel para verla más firme, luminosa y uniforme, con valoración médica.",
      keywords: ["nanopore medellín", "nanopore facial", "nanopore precio medellín", "piel luminosa tratamiento", "renovación de la piel medellín"],
    },
    ficha: {
      duracion: "45 a 60 min",
      sesiones: "1 o varias sesiones según tu caso",
      recuperacion: "Enrojecimiento leve de 1 a 2 días",
      resultados: "Piel más luminosa en días",
    },
    paraQuien: {
      ideal: [
        "Sientes la piel opaca, cansada o sin firmeza",
        "Quieres mejorar poros y uniformidad del tono",
        "Buscas un tratamiento con poca recuperación",
        "Te preparas para un evento y quieres una piel más luminosa",
      ],
      noIdeal: [
        "Tienes acné activo inflamado o infección en la zona",
        "Estás en embarazo o lactancia",
        "Tienes alergia a alguno de los activos que se aplican",
      ],
    },
    problema: {
      titulo: "Cuando la piel pierde su brillo",
      parrafos: [
        "El estrés, el sol y el paso del tiempo hacen que la piel se vea apagada, con poros más visibles y menos firmeza. Las cremas ayudan, pero se quedan en la superficie.",
        "Nanopore abre caminos para que los activos lleguen donde se necesitan y estimula la renovación natural de tu piel.",
      ],
    },
    queEs: {
      titulo: "Qué es Nanopore",
      desc: "Es un tratamiento que crea microcanales superficiales en la piel. Esos canales potencian la entrada de activos elegidos para tu caso y activan los procesos de renovación, lo que ayuda a una piel más firme, luminosa y uniforme. Habitualmente deja un enrojecimiento leve que cede en uno o dos días.",
    },
    beneficios: ["Piel más luminosa", "Potencia los activos", "Tono más uniforme", "Recuperación corta"],
    zonasTitulo: "Qué ayuda a mejorar",
    zonas: [
      { icon: "✦", label: "Luminosidad", desc: "Una piel con más luz y aspecto descansado." },
      { icon: "◠", label: "Firmeza", desc: "Activa la renovación para una piel más tensa." },
      { icon: "○", label: "Poros", desc: "Superficie más fina y poros menos visibles." },
      { icon: "◇", label: "Uniformidad", desc: "Un tono más parejo en todo el rostro." },
    ],
    pasos: [
      { num: "01", title: "Análisis de tu piel", desc: "Usamos el analizador facial para ver hidratación, poros y tono, y elegir los activos adecuados.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesión de Nanopore", desc: "Limpiamos la piel, creamos los microcanales y aplicamos los activos para que penetren mejor.", detail: "45 a 60 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "Te damos indicaciones para los primeros días y definimos si conviene repetir o combinar.", detail: "Plan de mantenimiento" },
    ],
    seguridad: [
      { num: "01", title: "Activos elegidos para ti", desc: "Seleccionamos lo que aplicamos según tu tipo de piel y lo que quieres mejorar." },
      { num: "02", title: "Técnica estéril", desc: "Piel desinfectada y material de un solo uso en cada sesión." },
      { num: "03", title: "Expectativas claras", desc: "Te explicamos qué puede mejorar y cuándo conviene otro tratamiento." },
    ],
    cuidados: {
      antes: [
        "Evita el sol intenso y los exfoliantes unos días antes",
        "Llega sin maquillaje",
        "Cuéntanos si tienes alergias o piel sensible",
      ],
      despues: [
        "No te maquilles durante 24 horas",
        "Usa protector solar a diario",
        "Evita piscina, sauna y ejercicio intenso 48 horas",
        "Hidrata con los productos que te indiquemos",
      ],
    },
    precio: {
      desde: 700000,
      opciones: [
        { label: "Sesión", valor: 700000 },
      ],
      incluye: ["Valoración médica previa", "Sesión de Nanopore", "Activos según tu piel", "Indicaciones de cuidado"],
    },
    faq: [
      { q: "¿Cuánto cuesta Nanopore?", a: "Cada sesión tiene un valor de $700.000." },
      { q: "¿Duele?", a: "Es tolerable. Puedes sentir una molestia leve o sensación de calor; en algunos casos aplicamos anestesia tópica." },
      { q: "¿Tiene recuperación?", a: "Habitualmente un enrojecimiento leve de 1 a 2 días. La mayoría retoma su rutina enseguida." },
      { q: "¿Cuándo se ve el resultado?", a: "La luminosidad se nota en pocos días. Los cambios en firmeza y textura son progresivos." },
      { q: "¿Cuántas sesiones necesito?", a: "Depende de tu piel y de tu objetivo. En la valoración te decimos si basta una sesión o conviene un plan." },
      { q: "¿Se combina con otros tratamientos?", a: "Sí. Puede complementarse con skinbooster o mesobotox según lo que necesite tu piel." },
      { q: "¿Quién no puede hacérselo?", a: "No se indica con acné inflamado, infección en la zona, embarazo, lactancia o alergia a los activos." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Nanopore",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "peeling",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Peeling químico y mecánico",
    resultados: [],
    relacionados: ["manchas-mesoterapeutico", "tratamiento-de-acne", "limpieza-facial"],
    hero: {
      eyebrow: "PEELING · RENOVACIÓN SUPERFICIAL",
      titulo: "Más luz en tu rostro,",
      tituloEm: "una textura suave y pareja",
      sub: "Renueva las capas superficiales de la piel para darle más luz y una textura pareja. Elegimos el tipo de peeling según tu piel y te explicamos la descamación desde antes.",
    },
    seo: {
      title: "Peeling químico en Medellín | Clínica Quantum",
      description: "Peeling químico y mecánico en El Poblado, Medellín: renueva las capas superficiales de tu piel para más luz y textura pareja, con criterio médico.",
      keywords: ["peeling químico medellín", "peeling facial precio medellín", "peeling para manchas", "peeling para acné", "exfoliación facial medellín"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 o varias sesiones según tu piel",
      recuperacion: "Enrojecimiento y descamación por días",
      resultados: "Piel más luminosa tras descamar",
    },
    paraQuien: {
      ideal: [
        "Sientes la piel opaca o con textura áspera",
        "Tienes manchas superficiales o marcas leves de acné",
        "Buscas poros menos visibles y un tono más parejo",
        "Puedes protegerte del sol de forma estricta",
      ],
      noIdeal: [
        "Tienes heridas, herpes activo o piel irritada",
        "Estás en embarazo o lactancia",
        "Tu piel es oscura o tiende a mancharse: la valoración define el tipo de peeling o si es apto",
        "Vas a estar expuesta al sol en los días siguientes",
      ],
    },
    problema: {
      titulo: "Una piel que se ve cansada aunque la cuides",
      parrafos: [
        "Con el tiempo se acumulan células muertas, pequeñas manchas y marcas. La piel pierde luz y se siente áspera, aunque tengas una buena rutina.",
        "Un peeling bien indicado retira esas capas superficiales para que aparezca una piel más fresca. La clave es elegir el adecuado para tu tipo de piel.",
      ],
    },
    queEs: {
      titulo: "Qué es un peeling químico y mecánico",
      desc: "Es una exfoliación controlada de las capas superficiales de la piel. El peeling químico usa ácidos que aflojan las células muertas y el mecánico las retira por fricción controlada. Después la piel se enrojece y se descama durante varios días, y aparece una superficie más luminosa y pareja. La fotoprotección estricta es obligatoria.",
    },
    beneficios: ["Más luminosidad", "Textura más suave", "Ayuda con manchas leves", "Tipo según tu piel"],
    zonasTitulo: "Qué puede mejorar",
    zonas: [
      { icon: "✦", label: "Luminosidad", desc: "Retira la capa opaca para una piel con más luz." },
      { icon: "○", label: "Textura", desc: "Una superficie más suave al tacto." },
      { icon: "◇", label: "Manchas superficiales", desc: "Ayuda a atenuar pigmento leve." },
      { icon: "◠", label: "Marcas de acné", desc: "Mejora marcas leves y poros visibles." },
    ],
    pasos: [
      { num: "01", title: "Valoración y elección del peeling", desc: "Con el analizador facial revisamos tu piel, tu fototipo y tu tendencia a mancharte para elegir el tipo e intensidad del peeling.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación del peeling", desc: "Limpiamos la piel y aplicamos el peeling el tiempo indicado. Puedes sentir ardor o picor pasajero.", detail: "30 a 45 min" },
      { num: "03", title: "Descamación y seguimiento", desc: "Te explicamos cómo cuidar la piel mientras se descama y revisamos cómo evolucionó.", detail: "Plan de cuidados" },
    ],
    seguridad: [
      { num: "01", title: "Intensidad según tu fototipo", desc: "En pieles oscuras o con tendencia a manchas elegimos con más cautela o proponemos otra opción." },
      { num: "02", title: "Tiempo controlado", desc: "El producto se aplica y se neutraliza o retira en el tiempo exacto que indica el protocolo." },
      { num: "03", title: "Descamación anunciada", desc: "Sabes desde antes que la piel se va a pelar varios días, para planear tu agenda." },
    ],
    cuidados: {
      antes: [
        "Evita el sol y las camas bronceadoras las semanas previas",
        "Suspende retinoides y exfoliantes cuando te lo indiquemos",
        "Cuéntanos si has tenido herpes o manchas después de tratamientos",
      ],
      despues: [
        "Usa protector solar a diario y evita el sol directo",
        "No arranques la piel que se descama",
        "Hidrata con los productos que te indiquemos",
        "Evita exfoliantes y maquillaje los primeros días",
        "Consulta si notas ampollas, costras o ardor intenso",
      ],
    },
    precio: {
      desde: 380000,
      opciones: [
        { label: "Sesión", valor: 380000 },
      ],
      incluye: ["Valoración médica previa", "Sesión de peeling", "Indicaciones de cuidado posterior"],
      nota: "El tipo de peeling y el número de sesiones se definen en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta un peeling?", a: "Cada sesión tiene un valor de $380.000." },
      { q: "¿Duele?", a: "Durante la aplicación sientes ardor o picor que dura pocos minutos. Después la piel queda sensible." },
      { q: "¿Cuánto dura la descamación?", a: "Habitualmente varios días, según la intensidad. La piel se enrojece y luego se pela de forma fina o en láminas." },
      { q: "¿Cuándo veo el resultado?", a: "Cuando termina la descamación la piel se ve más luminosa y suave. En manchas y marcas la mejoría suele requerir varias sesiones." },
      { q: "¿Sirve para pieles oscuras?", a: "Depende. En pieles oscuras o con tendencia a manchas hay más riesgo de hiperpigmentación, por eso la valoración define si es apto y qué tipo usar." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Enrojecimiento, ardor, sensibilidad y descamación. Con menos frecuencia, manchas, brotes o herpes en quienes lo han tenido." },
      { q: "¿Se combina con otros tratamientos?", a: "Sí. Se usa dentro de protocolos de manchas o de acné, y puede alternarse con limpiezas faciales." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Peeling químico y mecánico",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "plasma-rico-en-plaquetas-facial",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Plasma rico en plaquetas facial",
    resultados: [],
    relacionados: ["microagujas", "plasma-fibroblast", "nctf-mesoterapia"],
    hero: {
      eyebrow: "PRP · PLASMA RICO EN PLAQUETAS",
      titulo: "Tu propio plasma,",
      tituloEm: "una piel con más vida",
      sub: "Usamos tu propio plasma para ayudar a regenerar la piel y darle vitalidad. Un tratamiento autólogo, preparado en consulta y aplicado por personal médico.",
    },
    seo: {
      title: "Plasma rico en plaquetas facial Medellín | Quantum",
      description: "Plasma rico en plaquetas facial en El Poblado, Medellín: usa tu propio plasma para regenerar la piel y darle vitalidad, con valoración y personal médico.",
      keywords: ["plasma rico en plaquetas facial medellín", "prp facial", "plasma rico en plaquetas precio", "rejuvenecimiento con plasma", "vampire facial medellín"],
    },
    ficha: {
      duracion: "45 a 60 min",
      sesiones: "Habitualmente 2 a 3 sesiones",
      recuperacion: "Puntos o morado leve por días",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Sientes la piel apagada, deshidratada o cansada",
        "Tienes líneas finas o textura irregular",
        "Prefieres un tratamiento con tu propio plasma",
        "Buscas mejorar la calidad de la piel de forma gradual",
      ],
      noIdeal: [
        "Tienes alteraciones de la coagulación o de las plaquetas",
        "Estás en embarazo o lactancia",
        "Tienes infección activa en la zona o enfermedad autoinmune no controlada",
      ],
    },
    problema: {
      titulo: "Una piel que se ve más cansada que tú",
      parrafos: [
        "Hay momentos en que la piel se ve opaca y sin vida, aunque duermas bien y te cuides. Aparecen líneas finas y la textura cambia.",
        "El plasma rico en plaquetas aprovecha los factores de crecimiento de tu propia sangre para estimular la regeneración de la piel desde adentro.",
      ],
    },
    queEs: {
      titulo: "Qué es el plasma rico en plaquetas",
      desc: "Es un tratamiento autólogo: tomamos una pequeña muestra de tu sangre, la centrifugamos para concentrar las plaquetas y aplicamos ese plasma en la piel. Sus factores de crecimiento ayudan a estimular la regeneración, la hidratación y la producción de colágeno. Como es tu propio plasma, el riesgo de alergia es muy bajo.",
    },
    beneficios: ["Con tu propio plasma", "Piel más luminosa", "Estimula colágeno", "Mejora la textura"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◠", label: "Rostro completo", desc: "Vitalidad, luz e hidratación en toda la cara." },
      { icon: "◡", label: "Contorno de ojos", desc: "Piel fina con líneas y aspecto cansado." },
      { icon: "▭", label: "Cuello", desc: "Mejora la calidad de una piel delgada." },
      { icon: "▽", label: "Escote", desc: "Textura y luminosidad en la piel del pecho." },
    ],
    pasos: [
      { num: "01", title: "Valoración y toma de muestra", desc: "Revisamos tu piel con el analizador facial y tu historia clínica, y tomamos una pequeña muestra de sangre.", detail: "Valoración médica previa" },
      { num: "02", title: "Preparación y aplicación", desc: "Centrifugamos la muestra para obtener el plasma y lo aplicamos en la zona con microinyecciones o microagujas.", detail: "45 a 60 min" },
      { num: "03", title: "Resultados y seguimiento", desc: "La piel mejora de forma progresiva. Revisamos tu evolución y planeamos las siguientes sesiones.", detail: "Plan por sesiones" },
    ],
    seguridad: [
      { num: "01", title: "Material estéril y cerrado", desc: "La muestra se procesa con tubos y material de un solo uso, solo para ti." },
      { num: "02", title: "Revisión de tu historia clínica", desc: "Confirmamos que no tengas alteraciones de coagulación ni medicamentos que contraindiquen el tratamiento." },
      { num: "03", title: "Expectativas claras", desc: "Es un tratamiento de calidad de piel: no reemplaza rellenos ni toxina. Te lo explicamos en la valoración." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina y antiinflamatorios los días previos, si tu médico lo permite",
        "Hidrátate bien y come algo antes de la cita",
        "Llega sin maquillaje",
      ],
      despues: [
        "No te maquilles durante 24 horas",
        "Evita ejercicio intenso, sauna y piscina ese día",
        "Usa protector solar a diario",
        "Es normal un leve enrojecimiento, puntos o morados pequeños",
      ],
    },
    precio: {
      desde: 300000,
      opciones: [
        { label: "Por zona", valor: 300000 },
      ],
      incluye: ["Valoración médica previa", "Toma y procesamiento de la muestra", "Aplicación en la zona elegida", "Indicaciones de cuidado"],
      nota: "El valor es por zona. En la valoración definimos las zonas y el número de sesiones.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El plasma rico en plaquetas facial tiene un valor de $300.000 por zona." },
      { q: "¿Duele?", a: "Sientes el pinchazo de la toma de sangre y pequeñas molestias en la aplicación. Podemos usar anestesia tópica." },
      { q: "¿Cuántas sesiones necesito?", a: "Habitualmente se recomiendan de 2 a 3 sesiones espaciadas, pero depende de tu piel. Lo definimos en la valoración." },
      { q: "¿Cuándo veo resultados?", a: "La piel puede verse más luminosa en pocos días. La mejoría en textura y firmeza es progresiva en las semanas siguientes." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Enrojecimiento, inflamación leve, pequeños puntos o morados que desaparecen en pocos días." },
      { q: "¿Quién no puede hacérselo?", a: "No se indica con alteraciones de plaquetas o coagulación, embarazo, lactancia, infección en la zona o enfermedad autoinmune no controlada." },
      { q: "¿Se combina con microagujas?", a: "Sí, es una combinación frecuente: las microagujas ayudan a que el plasma penetre mejor en la piel." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Plasma rico en plaquetas facial",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "microagujas",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Microagujas faciales",
    resultados: [],
    relacionados: ["microagujas-despigmentantes", "plasma-rico-en-plaquetas-facial", "nanopore"],
    hero: {
      eyebrow: "MICROAGUJAS · COLÁGENO",
      titulo: "Poros más finos y textura suave,",
      tituloEm: "con tu propio colágeno",
      sub: "Las microagujas estimulan colágeno y mejoran poros, cicatrices y textura. Un tratamiento versátil, con recuperación corta y profundidad ajustada a cada zona.",
    },
    seo: {
      title: "Microagujas faciales en Medellín | Clínica Quantum",
      description: "Microagujas faciales en El Poblado, Medellín: estimulan colágeno y mejoran poros, cicatrices y textura con recuperación corta y valoración médica previa.",
      keywords: ["microagujas faciales medellín", "microneedling medellín", "microagujas para poros", "microagujas cicatrices de acné", "microagujas precio medellín"],
    },
    ficha: {
      duracion: "45 a 60 min",
      sesiones: "Habitualmente 3 a 6 sesiones",
      recuperacion: "Enrojecimiento de 1 a 3 días",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes poros abiertos o textura irregular",
        "Te quedaron cicatrices leves de acné",
        "Buscas una piel más firme sin tratamientos agresivos",
        "Quieres mejorar la calidad de tu piel de forma progresiva",
      ],
      noIdeal: [
        "Tienes acné activo inflamado, herpes o infección en la zona",
        "Estás en embarazo o lactancia",
        "Tienes tendencia a cicatrices queloides: hay que valorarlo antes",
      ],
    },
    problema: {
      titulo: "Poros y marcas que se notan de cerca",
      parrafos: [
        "Los poros abiertos y las pequeñas cicatrices hacen que la piel se vea irregular, sobre todo con luz directa o en fotos cercanas.",
        "Las microagujas activan la capacidad de tu piel para repararse y producir colágeno nuevo, mejorando la textura sesión a sesión.",
      ],
    },
    queEs: {
      titulo: "Qué son las microagujas faciales",
      desc: "Es un tratamiento que usa agujas muy finas para crear microcanales controlados en la piel. Esas microlesiones activan la reparación natural y la producción de colágeno, lo que ayuda a mejorar poros, cicatrices y textura. También facilitan la penetración de activos aplicados durante la sesión.",
    },
    beneficios: ["Estimula colágeno", "Poros menos visibles", "Mejora cicatrices leves", "Recuperación corta"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◠", label: "Rostro", desc: "Textura, poros y firmeza en toda la cara." },
      { icon: "◇", label: "Cicatrices de acné", desc: "Marcas leves en mejillas y sienes." },
      { icon: "▭", label: "Cuello", desc: "Piel más firme y uniforme." },
      { icon: "▽", label: "Escote", desc: "Mejora textura y líneas finas." },
    ],
    pasos: [
      { num: "01", title: "Valoración de tu piel", desc: "Con el analizador facial revisamos poros, textura y marcas, y definimos cuántas zonas tratar.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesión de microagujas", desc: "Aplicamos anestesia tópica, desinfectamos y tratamos cada zona con la profundidad adecuada.", detail: "45 a 60 min" },
      { num: "03", title: "Evolución y nuevas sesiones", desc: "Revisamos cómo responde tu piel y programamos las siguientes sesiones con el espacio indicado.", detail: "Seguimiento por sesión" },
    ],
    seguridad: [
      { num: "01", title: "Cartuchos de un solo uso", desc: "Material estéril nuevo en cada sesión." },
      { num: "02", title: "Profundidad por zona", desc: "La piel del contorno de ojos no se trata igual que la de las mejillas." },
      { num: "03", title: "Piel sin infección", desc: "No tratamos sobre acné inflamado ni heridas, para no diseminar bacterias." },
    ],
    cuidados: {
      antes: [
        "Evita el sol y los exfoliantes la semana previa",
        "Suspende retinoides cuando te lo indiquemos",
        "Llega sin maquillaje",
      ],
      despues: [
        "No te maquilles durante 24 horas",
        "Usa protector solar a diario",
        "Evita piscina, sauna y ejercicio intenso 48 horas",
        "Hidrata con los productos que te indiquemos",
      ],
    },
    precio: {
      desde: 280000,
      opciones: [
        { label: "Por zona", valor: 280000 },
      ],
      incluye: ["Valoración médica previa", "Sesión de microagujas en la zona", "Indicaciones de cuidado"],
      nota: "El valor es por zona. El número de sesiones lo define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuestan las microagujas?", a: "Tienen un valor de $280.000 por zona." },
      { q: "¿Duele?", a: "Aplicamos anestesia tópica. Sientes vibración y una molestia leve, más en zonas óseas." },
      { q: "¿Cuánto dura el enrojecimiento?", a: "Habitualmente de 1 a 3 días, como una quemadura de sol leve." },
      { q: "¿Cuántas sesiones necesito?", a: "Para textura y cicatrices se suelen indicar de 3 a 6 sesiones espaciadas. Lo definimos según tu piel." },
      { q: "¿Cuándo veo resultados?", a: "La piel se ve más luminosa en días. La mejoría de poros y cicatrices avanza en las semanas siguientes a cada sesión." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Enrojecimiento, sensibilidad, descamación fina y pequeños puntos. Con poca frecuencia, brotes o manchas." },
      { q: "¿Se combina con plasma?", a: "Sí. Las microagujas con plasma rico en plaquetas es una combinación frecuente para potenciar la regeneración." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Microagujas faciales",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "mesoterapia-facial",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Mesoterapia facial de revitalización",
    resultados: [],
    relacionados: ["nctf-mesoterapia", "skinbooster", "hydrafacial"],
    hero: {
      eyebrow: "MESOTERAPIA · REVITALIZACIÓN",
      titulo: "Una piel hidratada y luminosa,",
      tituloEm: "que se ve descansada",
      sub: "Un cóctel de activos y nutrientes que revitaliza la piel y ayuda a mejorar su luminosidad, hidratación y apariencia. Lo ajustamos a lo que tu piel necesita.",
    },
    seo: {
      title: "Mesoterapia facial en Medellín | Clínica Quantum",
      description: "Mesoterapia facial en El Poblado, Medellín: cóctel de activos y nutrientes que revitaliza tu piel y mejora su luminosidad e hidratación, con valoración.",
      keywords: ["mesoterapia facial medellín", "mesoterapia facial precio", "revitalización facial", "hidratación profunda de la piel", "piel luminosa medellín"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "Varias sesiones según tu piel",
      recuperacion: "Puntos o morado leve por días",
      resultados: "Luminosidad progresiva",
    },
    paraQuien: {
      ideal: [
        "Sientes la piel deshidratada, opaca o sin vitalidad",
        "Notas los efectos del estrés, el sol o la falta de descanso",
        "Buscas mejorar la calidad de tu piel sin cambiar tus facciones",
        "Quieres preparar la piel antes de un evento",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes infección activa o heridas en la zona",
        "Tienes alergia conocida a alguno de los componentes",
      ],
    },
    problema: {
      titulo: "Cuando la piel pide algo más que crema",
      parrafos: [
        "Hay etapas en las que la piel se ve apagada y seca, y ni la mejor crema parece suficiente. Se nota en el maquillaje y en cómo te ves en el espejo.",
        "La mesoterapia lleva los nutrientes directamente a la piel, donde los productos tópicos no llegan, para devolverle hidratación y luz.",
      ],
    },
    queEs: {
      titulo: "Qué es la mesoterapia facial",
      desc: "Es un tratamiento que deposita un cóctel de activos y nutrientes, como vitaminas, antioxidantes o agentes hidratantes, mediante microinyecciones superficiales en la piel. Ayuda a revitalizarla y a mejorar su luminosidad, hidratación y apariencia. El cóctel y el número de sesiones se definen en la valoración.",
    },
    beneficios: ["Hidratación profunda", "Más luminosidad", "Cóctel según tu piel", "Sin cambiar tus facciones"],
    zonasTitulo: "Qué ayuda a mejorar",
    zonas: [
      { icon: "✦", label: "Luminosidad", desc: "Una piel con más brillo natural." },
      { icon: "○", label: "Hidratación", desc: "Menos sensación de tirantez y sequedad." },
      { icon: "◠", label: "Aspecto descansado", desc: "Una piel que se ve fresca y cuidada." },
      { icon: "◇", label: "Líneas finas", desc: "Suaviza la apariencia de las líneas por deshidratación." },
    ],
    pasos: [
      { num: "01", title: "Análisis de tu piel", desc: "Con el analizador facial vemos hidratación, tono y textura para elegir el cóctel de activos.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesión de mesoterapia", desc: "Aplicamos anestesia tópica si hace falta y depositamos el cóctel con microinyecciones superficiales.", detail: "30 a 45 min" },
      { num: "03", title: "Evolución y mantenimiento", desc: "Revisamos cómo responde tu piel y definimos el ritmo de sesiones para mantener el resultado.", detail: "Plan de sesiones" },
    ],
    seguridad: [
      { num: "01", title: "Cóctel con criterio médico", desc: "Elegimos los activos según tu tipo de piel y tus antecedentes de alergias." },
      { num: "02", title: "Técnica estéril", desc: "Piel desinfectada y agujas de un solo uso." },
      { num: "03", title: "Expectativas claras", desc: "Mejora la calidad de la piel; no reemplaza rellenos ni toxina botulínica." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina y antiinflamatorios los días previos, si tu médico lo permite",
        "Llega sin maquillaje",
        "Cuéntanos tus alergias y medicamentos",
      ],
      despues: [
        "No te maquilles durante 12 a 24 horas",
        "Evita sauna, piscina y ejercicio intenso ese día",
        "Usa protector solar a diario",
        "Es normal ver pequeños puntos o morados leves por unos días",
      ],
    },
    precio: {
      desde: null,
      opciones: [
        { label: "Sesión", valor: null },
      ],
      incluye: ["Valoración médica previa", "Cóctel de activos según tu piel", "Sesión de mesoterapia", "Indicaciones de cuidado"],
      nota: "El precio se define en la valoración según el cóctel y el número de sesiones.",
    },
    faq: [
      { q: "¿Cuánto cuesta la mesoterapia facial?", a: "El precio es a valoración, porque depende del cóctel de activos y de cuántas sesiones necesite tu piel." },
      { q: "¿Duele?", a: "Sientes pequeños pinchazos superficiales. Si lo necesitas, aplicamos anestesia tópica." },
      { q: "¿Tiene recuperación?", a: "Mínima. Puede haber pequeños puntos, inflamación leve o morados que ceden en pocos días." },
      { q: "¿Cuándo se ven los resultados?", a: "Muchas personas notan la piel más luminosa en pocos días, y el efecto mejora con las sesiones." },
      { q: "¿Cuánto dura el efecto?", a: "Es temporal y depende de tu piel y tus hábitos. Por eso se suelen programar sesiones de mantenimiento." },
      { q: "¿Quién no puede hacérsela?", a: "No se indica en embarazo, lactancia, infección en la zona o alergia a los componentes." },
      { q: "¿Se combina con otros tratamientos?", a: "Sí. Puede alternarse con skinbooster, NCTF o Hydrafacial según lo que busques." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Mesoterapia facial de revitalización",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "tratamiento-de-acne",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Tratamiento de acné",
    resultados: [],
    relacionados: ["laser-co2", "peeling", "limpieza-facial"],
    hero: {
      eyebrow: "ACNÉ · PROTOCOLO PERSONALIZADO",
      titulo: "Menos brotes, menos marcas,",
      tituloEm: "más tranquilidad frente al espejo",
      sub: "Un protocolo personalizado para ayudar a controlar los brotes y mejorar la apariencia de las marcas que deja el acné. Empieza por entender por qué aparece en tu piel.",
    },
    seo: {
      title: "Tratamiento de acné en Medellín | Clínica Quantum",
      description: "Tratamiento de acné en El Poblado, Medellín: protocolo personalizado para controlar los brotes y mejorar las marcas que deja el acné, con criterio médico.",
      keywords: ["tratamiento de acné medellín", "médico para acné medellín", "marcas de acné tratamiento", "acné adulto tratamiento", "eliminar granitos de la cara"],
    },
    ficha: {
      duracion: "Sesiones de 30 a 60 min",
      sesiones: "Protocolo según tu caso",
      recuperacion: "Depende de lo que se aplique",
      resultados: "Progresivos, en semanas a meses",
    },
    paraQuien: {
      ideal: [
        "Tienes brotes frecuentes que no ceden con productos de farmacia",
        "Te preocupa el acné en la adultez",
        "Te quedan manchas o marcas después de cada brote",
        "Quieres un plan ordenado y con seguimiento",
      ],
      noIdeal: [
        "Buscas un resultado inmediato en una sola sesión",
        "No puedes seguir las indicaciones en casa",
        "Estás en embarazo o lactancia: el protocolo se adapta y hay tratamientos que no se usan",
      ],
    },
    problema: {
      titulo: "El acné también afecta cómo te sientes",
      parrafos: [
        "Los brotes que vuelven una y otra vez cansan. Afectan tu seguridad, te hacen evitar fotos y dejan marcas que duran más que el granito.",
        "El acné tiene varias causas, como hormonas, grasa, bacterias o inflamación. Un protocolo que parte de tu caso concreto funciona mejor que probar productos al azar.",
      ],
    },
    queEs: {
      titulo: "Qué incluye el tratamiento de acné",
      desc: "Es un protocolo que diseñamos según el tipo de acné, su intensidad y tu piel. Puede combinar limpiezas, peelings, procedimientos en consulta e indicaciones de cuidado en casa. El objetivo es ayudar a controlar los brotes y, cuando la piel está estable, mejorar la apariencia de las marcas. En algunos casos puede requerirse tratamiento médico adicional.",
    },
    beneficios: ["Plan personalizado", "Ayuda a controlar brotes", "Mejora las marcas", "Seguimiento médico"],
    zonasTitulo: "Qué trabajamos",
    zonas: [
      { icon: "○", label: "Brotes activos", desc: "Granitos, comedones y lesiones inflamadas." },
      { icon: "✦", label: "Exceso de grasa", desc: "Piel brillante y poros obstruidos." },
      { icon: "◇", label: "Manchas post acné", desc: "Marcas oscuras que quedan tras el brote." },
      { icon: "◠", label: "Cicatrices", desc: "Marcas hundidas, cuando la piel ya está estable." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico de tu acné", desc: "Revisamos tu piel con el analizador facial, tus antecedentes y tus hábitos para entender qué desencadena los brotes.", detail: "Valoración médica previa" },
      { num: "02", title: "Protocolo en consulta", desc: "Aplicamos los procedimientos indicados para tu caso, como limpieza o peeling, y te damos una rutina para casa.", detail: "Sesiones de 30 a 60 min" },
      { num: "03", title: "Control y marcas", desc: "Revisamos la evolución, ajustamos el plan y, cuando los brotes están controlados, trabajamos las marcas.", detail: "Controles periódicos" },
    ],
    seguridad: [
      { num: "01", title: "Primero el diagnóstico", desc: "Identificamos el tipo de acné antes de proponer procedimientos." },
      { num: "02", title: "Marcas en el momento correcto", desc: "No tratamos cicatrices de forma agresiva mientras hay brotes activos." },
      { num: "03", title: "Remisión cuando hace falta", desc: "Si tu caso necesita manejo médico adicional, te lo indicamos con claridad." },
      { num: "04", title: "Seguimiento cercano", desc: "El acné cambia; revisamos y ajustamos el plan en cada control." },
    ],
    cuidados: {
      antes: [
        "Trae la lista de productos y medicamentos que usas",
        "No manipules ni revientes los granitos",
        "Llega sin maquillaje",
      ],
      despues: [
        "Sigue la rutina en casa tal como te la indicamos",
        "Usa protector solar a diario para evitar manchas",
        "No explotes las lesiones",
        "Cambia con frecuencia la funda de la almohada",
        "Asiste a tus controles",
      ],
    },
    precio: {
      desde: null,
      opciones: [
        { label: "Protocolo personalizado", valor: null },
      ],
      incluye: ["Valoración médica previa", "Protocolo diseñado para tu tipo de acné", "Indicaciones de cuidado en casa", "Controles de seguimiento"],
      nota: "El precio depende del protocolo que necesites y se define en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta el tratamiento de acné?", a: "El precio es a valoración, porque cada protocolo se diseña según el tipo de acné y los procedimientos que necesites." },
      { q: "¿En cuánto tiempo mejora?", a: "El control de los brotes suele notarse en semanas y la mejoría de las marcas toma más tiempo. Depende de cada piel." },
      { q: "¿Duele?", a: "Depende de lo que se aplique. Las limpiezas y peelings pueden generar molestia o ardor pasajero, que se tolera bien." },
      { q: "¿Tiene recuperación?", a: "Algunos procedimientos dejan enrojecimiento o descamación por días. Te lo explicamos antes de cada sesión." },
      { q: "¿El acné puede volver?", a: "Sí. El acné tiende a ser recurrente, por eso el mantenimiento y la rutina en casa son parte del tratamiento." },
      { q: "¿Qué pasa con las cicatrices?", a: "Cuando la piel está estable, podemos tratarlas con opciones como láser CO2, microagujas o subcisión, según el tipo de marca." },
      { q: "¿Puedo hacerlo en embarazo?", a: "El protocolo se adapta. Hay activos y procedimientos que no se usan en embarazo o lactancia, y lo revisamos en la valoración." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Tratamiento de acné",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "ojeras-mesoterapia",
    categoria: "faciales",
    grupo: "Piel y manchas",
    nombre: "Ojeras con mesoterapia",
    resultados: [],
    relacionados: ["ojeras-acido-hialuronico", "mesoterapia-facial", "skinbooster"],
    hero: {
      eyebrow: "OJERAS · MESOTERAPIA",
      titulo: "Una mirada más clara,",
      tituloEm: "que no refleja el cansancio",
      sub: "Mesoterapia que ayuda a aclarar y desinflamar la zona bajo los ojos. Primero identificamos el tipo de ojera, porque no todas se tratan igual.",
    },
    seo: {
      title: "Ojeras con mesoterapia en Medellín | Clínica Quantum",
      description: "Ojeras con mesoterapia en El Poblado, Medellín: ayuda a aclarar y desinflamar la zona bajo los ojos para una mirada más descansada, con valoración médica.",
      keywords: ["tratamiento de ojeras medellín", "mesoterapia para ojeras", "quitar ojeras oscuras", "ojeras precio medellín", "bolsas debajo de los ojos"],
    },
    ficha: {
      duracion: "20 a 30 min",
      sesiones: "Varias sesiones según tu caso",
      recuperacion: "Posible morado leve por días",
      resultados: "Progresivos, sesión a sesión",
    },
    paraQuien: {
      ideal: [
        "Tienes ojeras pigmentadas o de color oscuro",
        "Notas la zona bajo los ojos inflamada o cansada",
        "Buscas un tratamiento suave sin rellenar la zona",
        "Quieres complementar hábitos de descanso y cuidado",
      ],
      noIdeal: [
        "Tu ojera es principalmente un surco hundido: puede convenir otra opción",
        "Tienes bolsas grasas marcadas, que no mejoran con mesoterapia",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Te ves cansada aunque hayas dormido",
      parrafos: [
        "Las ojeras hacen que el rostro se vea agotado y triste, y el corrector no siempre las disimula. Es una de las preocupaciones más comunes en consulta.",
        "Hay ojeras por pigmento, por vascularización, por hundimiento o por inflamación. Identificar la tuya es lo que permite elegir bien el tratamiento.",
      ],
    },
    queEs: {
      titulo: "Qué es la mesoterapia para ojeras",
      desc: "Es la aplicación de activos seleccionados mediante microinyecciones muy superficiales en la zona bajo los ojos. Ayuda a aclarar el pigmento, mejorar la calidad de una piel muy fina y desinflamar la zona. Funciona mejor en ojeras pigmentadas o inflamadas; si tu ojera es por hundimiento, te lo diremos en la valoración.",
    },
    beneficios: ["Ayuda a aclarar la zona", "Desinflama", "No rellena", "Mirada más descansada"],
    zonasTitulo: "Qué ayuda a mejorar",
    zonas: [
      { icon: "◡", label: "Ojera pigmentada", desc: "Tono oscuro o café bajo los ojos." },
      { icon: "○", label: "Inflamación", desc: "Aspecto hinchado y cansado de la zona." },
      { icon: "◇", label: "Piel fina", desc: "Mejora la calidad de una piel delicada." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico de tu ojera", desc: "Revisamos con el analizador facial y la exploración si tu ojera es pigmentada, vascular, hundida o mixta.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesión de mesoterapia", desc: "Aplicamos los activos con microinyecciones muy superficiales, con técnica cuidadosa por la delicadeza de la zona.", detail: "20 a 30 min" },
      { num: "03", title: "Evolución y sesiones", desc: "Revisamos el cambio en el tono y la inflamación, y definimos cuántas sesiones más conviene hacer.", detail: "Plan de sesiones" },
    ],
    seguridad: [
      { num: "01", title: "Tipo de ojera antes que técnica", desc: "Si la mesoterapia no es lo indicado para tu ojera, te proponemos otra opción." },
      { num: "02", title: "Zona delicada, técnica cuidadosa", desc: "Agujas muy finas y aplicación superficial en la piel del contorno de ojos." },
      { num: "03", title: "Expectativas reales", desc: "La mejoría es gradual y los hábitos de descanso siguen siendo importantes." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina y antiinflamatorios los días previos, si tu médico lo permite",
        "Llega sin maquillaje en los ojos",
        "Cuéntanos si tienes alergias",
      ],
      despues: [
        "Aplica frío suave si notas inflamación",
        "No frotes la zona durante el día",
        "Evita maquillaje en la zona por 24 horas",
        "Usa protector solar y lentes de sol",
      ],
    },
    precio: {
      desde: null,
      opciones: [
        { label: "Sesión", valor: null },
      ],
      incluye: ["Valoración médica previa", "Diagnóstico del tipo de ojera", "Sesión de mesoterapia", "Indicaciones de cuidado"],
      nota: "El precio se define en la valoración según tu tipo de ojera y el número de sesiones.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El precio es a valoración, porque depende del tipo de ojera y de cuántas sesiones necesites." },
      { q: "¿Duele?", a: "Es una zona sensible, pero las microinyecciones son muy superficiales. Podemos aplicar anestesia tópica." },
      { q: "¿Sirve para todas las ojeras?", a: "No. Funciona mejor en ojeras pigmentadas o inflamadas. Si tu ojera es por hundimiento puede convenir ácido hialurónico, y lo definimos en la valoración." },
      { q: "¿Cuándo veo resultados?", a: "La mejoría es progresiva y suele notarse a lo largo de las sesiones." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Inflamación leve, pequeños puntos o un morado que cede en pocos días." },
      { q: "¿Cuánto dura el resultado?", a: "Depende de la causa de tu ojera y de tus hábitos. Puede requerir mantenimiento." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Ojeras con mesoterapia",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "enzimas-papada",
    categoria: "faciales",
    grupo: "Enzimas y cicatrices",
    nombre: "Enzimas para papada",
    resultados: [],
    relacionados: ["perfilado-mandibular", "volumen-de-menton", "criolipolisis"],
    hero: {
      eyebrow: "ENZIMAS · PAPADA",
      titulo: "Un óvalo del rostro más definido,",
      tituloEm: "sin cirugía",
      sub: "Enzimas que ayudan a reducir la grasa bajo el mentón y a definir el óvalo del rostro. Te decimos en la valoración si tu papada es de grasa o de otra causa.",
    },
    seo: {
      title: "Enzimas para papada en Medellín | Clínica Quantum",
      description: "Enzimas para papada en El Poblado, Medellín: ayudan a reducir la grasa bajo el mentón y definir el óvalo del rostro sin cirugía, con valoración médica.",
      keywords: ["enzimas para papada medellín", "eliminar papada sin cirugía", "enzimas papada precio", "reducir papada medellín", "papada tratamiento"],
    },
    ficha: {
      duracion: "15 a 30 min",
      sesiones: "Habitualmente 2 a 4 sesiones",
      recuperacion: "Inflamación por algunos días",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes grasa localizada bajo el mentón",
        "Quieres definir el ángulo entre cuello y mandíbula",
        "Buscas una opción sin cirugía",
        "Estás cerca de tu peso habitual",
      ],
      noIdeal: [
        "Tu papada es principalmente flacidez de piel",
        "Estás en embarazo o lactancia",
        "Tienes infección en la zona o alergia a los componentes",
      ],
    },
    problema: {
      titulo: "Esa papada que aparece en todas las fotos",
      parrafos: [
        "La grasa bajo el mentón borra la línea de la mandíbula y hace que el rostro se vea más redondo, incluso en personas delgadas.",
        "Muchas veces es genética y no mejora con dieta ni ejercicio. Las enzimas actúan de forma localizada sobre esa grasa.",
      ],
    },
    queEs: {
      titulo: "Qué son las enzimas para papada",
      desc: "Son sustancias que se aplican con microinyecciones en la grasa bajo el mentón para ayudar a reducirla. Con el paso de las semanas la zona se afina y el óvalo del rostro se define. Se presentan en viales de 3 cc y el número de sesiones depende de la cantidad de grasa y de cómo responde tu cuerpo.",
    },
    beneficios: ["Sin cirugía", "Define el óvalo", "Sesiones cortas", "Reduce grasa localizada"],
    zonasTitulo: "Qué ayuda a mejorar",
    zonas: [
      { icon: "∪", label: "Papada", desc: "Grasa localizada bajo el mentón." },
      { icon: "▭", label: "Línea mandibular", desc: "Un contorno más marcado entre cara y cuello." },
      { icon: "◠", label: "Óvalo del rostro", desc: "Un rostro que se ve más estilizado." },
    ],
    pasos: [
      { num: "01", title: "Valoración de la papada", desc: "Revisamos si hay grasa, flacidez o ambas, y confirmamos que las enzimas son lo indicado.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación de enzimas", desc: "Marcamos la zona y aplicamos las enzimas con microinyecciones en la grasa bajo el mentón.", detail: "15 a 30 min" },
      { num: "03", title: "Evolución y sesiones", desc: "Revisamos la reducción de la zona y definimos si hacen falta más sesiones.", detail: "Control entre sesiones" },
    ],
    seguridad: [
      { num: "01", title: "Grasa o flacidez", desc: "Si tu papada es de piel y no de grasa, te lo decimos y te orientamos a otra opción." },
      { num: "02", title: "Zona marcada con precisión", desc: "Aplicamos solo en la grasa, respetando las estructuras del cuello." },
      { num: "03", title: "Inflamación anunciada", desc: "Sabes desde antes que la zona se inflama unos días." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina y antiinflamatorios los días previos, si tu médico lo permite",
        "Cuéntanos tus alergias y medicamentos",
        "Agenda la cita lejos de eventos importantes",
      ],
      despues: [
        "Es normal inflamación, sensibilidad o morado leve por días",
        "Aplica frío suave si hay molestia",
        "Evita ejercicio intenso ese día",
        "No masajees la zona salvo que te lo indiquemos",
      ],
    },
    precio: {
      desde: 480000,
      opciones: [
        { label: "3 cc", valor: 480000 },
      ],
      incluye: ["Valoración médica previa", "Enzimas en presentación de 3 cc", "Aplicación en la zona", "Indicaciones de cuidado"],
      nota: "El número de sesiones lo define la valoración según la cantidad de grasa.",
    },
    faq: [
      { q: "¿Cuánto cuestan las enzimas para papada?", a: "La presentación de 3 cc tiene un valor de $480.000." },
      { q: "¿Cuántas sesiones necesito?", a: "Habitualmente de 2 a 4 sesiones espaciadas, pero depende de la cantidad de grasa y de tu respuesta." },
      { q: "¿Duele?", a: "Sientes pinchazos y ardor pasajero durante la aplicación. La zona queda sensible por unos días." },
      { q: "¿Qué pasa después?", a: "Es normal que la zona se inflame, se sienta dura o aparezca un morado leve durante algunos días." },
      { q: "¿Cuándo veo resultados?", a: "La reducción es progresiva y se nota en las semanas siguientes a cada sesión." },
      { q: "¿Sirve si mi papada es por flacidez?", a: "No es lo indicado. En ese caso pueden servir otras opciones de tensado o perfilado, que te explicamos en la valoración." },
      { q: "¿Se combina con otros tratamientos?", a: "Sí. Puede complementarse con perfilado mandibular o volumen de mentón para definir más el perfil." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Enzimas para papada",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "enzimas-cicatrices-queloides",
    categoria: "faciales",
    grupo: "Enzimas y cicatrices",
    nombre: "Enzimas para cicatrices queloides y fibrosis",
    resultados: [],
    relacionados: ["tratamiento-de-fibrosis", "tratamiento-de-cicatrices", "subcision-de-hoyuelos"],
    hero: {
      eyebrow: "ENZIMAS · QUELOIDES Y FIBROSIS",
      titulo: "Cicatrices más planas y suaves,",
      tituloEm: "piel que vuelve a sentirse tuya",
      sub: "Enzimas que ayudan a suavizar cicatrices abultadas y tejido fibroso. Un tratamiento por sesiones, con expectativas claras sobre lo que puede mejorar.",
    },
    seo: {
      title: "Enzimas para queloides y fibrosis | Clínica Quantum",
      description: "Enzimas para cicatrices queloides y fibrosis en El Poblado, Medellín: ayudan a suavizar cicatrices abultadas y tejido fibroso, con valoración médica.",
      keywords: ["tratamiento de queloides medellín", "enzimas para fibrosis", "cicatriz queloide tratamiento", "fibrosis después de lipo", "cicatrices abultadas"],
    },
    ficha: {
      duracion: "15 a 30 min",
      sesiones: "Varias sesiones según la cicatriz",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, en semanas a meses",
    },
    paraQuien: {
      ideal: [
        "Tienes una cicatriz abultada, dura o elevada",
        "Te quedaron zonas duras o irregulares después de una cirugía",
        "Sientes tirantez o molestia en una cicatriz",
        "Entiendes que la mejoría es gradual",
      ],
      noIdeal: [
        "Buscas borrar la cicatriz por completo",
        "Estás en embarazo o lactancia",
        "Tienes infección activa o una herida abierta en la zona",
      ],
    },
    problema: {
      titulo: "Una cicatriz que no deja de recordarte",
      parrafos: [
        "Las cicatrices queloides y la fibrosis se sienten al tacto, se ven en la ropa o en la piel descubierta y a veces pican o tiran.",
        "No siempre hay que resignarse. Hay tratamientos que ayudan a ablandar ese tejido y hacer que la cicatriz sea menos notoria.",
      ],
    },
    queEs: {
      titulo: "Qué son las enzimas para queloides y fibrosis",
      desc: "Son sustancias que se aplican con microinyecciones directamente en la cicatriz o en el tejido fibroso para ayudar a suavizarlo y aplanarlo. Se presentan en viales de 3 cc. El número de sesiones depende del tamaño, la antigüedad y la dureza de la cicatriz. Las queloides pueden reaparecer, por eso el seguimiento es importante.",
    },
    beneficios: ["Suaviza el tejido", "Cicatriz más plana", "Menos tirantez", "Sesiones cortas"],
    zonasTitulo: "Qué ayuda a tratar",
    zonas: [
      { icon: "◇", label: "Cicatrices queloides", desc: "Cicatrices que crecen por encima de la piel." },
      { icon: "▭", label: "Cicatrices hipertróficas", desc: "Cicatrices elevadas y rojizas." },
      { icon: "○", label: "Fibrosis posquirúrgica", desc: "Zonas duras o irregulares después de una cirugía." },
    ],
    pasos: [
      { num: "01", title: "Valoración de la cicatriz", desc: "Revisamos tamaño, dureza, antigüedad y tus antecedentes para definir si las enzimas son lo indicado.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación de enzimas", desc: "Aplicamos las enzimas con microinyecciones dentro de la cicatriz o del tejido fibroso.", detail: "15 a 30 min" },
      { num: "03", title: "Evolución y sesiones", desc: "Medimos el cambio en la cicatriz y definimos el ritmo de las siguientes sesiones.", detail: "Control entre sesiones" },
    ],
    seguridad: [
      { num: "01", title: "Diagnóstico de la cicatriz", desc: "Diferenciamos queloide, hipertrófica o fibrosis antes de tratar." },
      { num: "02", title: "Expectativas honestas", desc: "El objetivo es suavizar y aplanar, no borrar la cicatriz." },
      { num: "03", title: "Vigilancia de recaídas", desc: "Las queloides pueden volver a crecer; hacemos seguimiento para actuar a tiempo." },
    ],
    cuidados: {
      antes: [
        "Cuéntanos cuándo y cómo se formó la cicatriz",
        "Informa tus alergias y medicamentos",
        "Evita aspirina y antiinflamatorios los días previos, si tu médico lo permite",
      ],
      despues: [
        "Es normal sensibilidad o inflamación leve en la zona",
        "Evita traumatizar o rascar la cicatriz",
        "Protege la zona del sol",
        "Asiste a tus controles entre sesiones",
      ],
    },
    precio: {
      desde: 480000,
      opciones: [
        { label: "3 cc", valor: 480000 },
      ],
      incluye: ["Valoración médica previa", "Enzimas en presentación de 3 cc", "Aplicación en la cicatriz o zona fibrosa", "Indicaciones de cuidado"],
      nota: "El número de sesiones lo define la valoración según la cicatriz.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "La presentación de 3 cc tiene un valor de $480.000." },
      { q: "¿La cicatriz desaparece?", a: "No se borra. El objetivo es que quede más plana, blanda y menos notoria." },
      { q: "¿Cuántas sesiones necesito?", a: "Suelen necesitarse varias sesiones espaciadas. El número exacto depende del tamaño y la dureza de la cicatriz." },
      { q: "¿Duele?", a: "El tejido cicatricial es firme y la aplicación genera molestia o ardor pasajero, tolerable para la mayoría." },
      { q: "¿Cuándo veo cambios?", a: "La mejoría es progresiva y suele notarse después de algunas sesiones." },
      { q: "¿Sirve para fibrosis después de una lipo?", a: "Puede ayudar a suavizar zonas duras. Lo valoramos junto con otras opciones como el tratamiento de fibrosis." },
      { q: "¿Las queloides pueden volver?", a: "Sí, tienen tendencia a recurrir. Por eso hacemos seguimiento después del tratamiento." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Enzimas para cicatrices queloides y fibrosis",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "tratamiento-de-cicatrices",
    categoria: "faciales",
    grupo: "Enzimas y cicatrices",
    nombre: "Tratamiento de cicatrices",
    resultados: [],
    relacionados: ["laser-co2", "subcision-de-hoyuelos", "enzimas-cicatrices-queloides"],
    hero: {
      eyebrow: "CICATRICES · ENZIMAS PB SERUM",
      titulo: "Cicatrices menos visibles,",
      tituloEm: "en tu rostro o en tu cuerpo",
      sub: "Un tratamiento que ayuda a atenuar cicatrices en cara o cuerpo con enzimas PB Serum. Revisamos el tipo de cicatriz para indicarte lo que realmente puede ayudarte.",
    },
    seo: {
      title: "Tratamiento de cicatrices en Medellín | Clínica Quantum",
      description: "Tratamiento de cicatrices en El Poblado, Medellín: enzimas PB Serum para ayudar a atenuar cicatrices en cara o cuerpo, con valoración médica previa.",
      keywords: ["tratamiento de cicatrices medellín", "pb serum cicatrices", "atenuar cicatrices", "cicatrices en la cara tratamiento", "quitar cicatrices del cuerpo"],
    },
    ficha: {
      duracion: "15 a 30 min",
      sesiones: "Varias sesiones según la cicatriz",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes cicatrices en la cara o en el cuerpo que te incomodan",
        "Te quedaron marcas por accidentes, cirugías o acné",
        "Buscas que la cicatriz se vea más suave y uniforme",
        "Tienes expectativas realistas sobre la mejoría",
      ],
      noIdeal: [
        "Tu cicatriz es reciente y aún no ha terminado de cerrar",
        "Estás en embarazo o lactancia",
        "Tienes infección activa en la zona",
      ],
    },
    problema: {
      titulo: "Marcas que cuentan una historia que prefieres no contar",
      parrafos: [
        "Una cicatriz en el rostro o en el cuerpo puede hacerte cambiar la ropa que usas o evitar ciertas fotos. Aunque ya sanó, sigue siendo visible.",
        "Cada cicatriz es distinta: hundida, elevada, pigmentada o con cambio de textura. Por eso el primer paso es entender la tuya.",
      ],
    },
    queEs: {
      titulo: "Qué es el tratamiento de cicatrices",
      desc: "Es la aplicación de enzimas PB Serum en presentación de 3 cc, con microinyecciones en la cicatriz, para ayudar a suavizar el tejido y atenuar su apariencia. Según el tipo de cicatriz, en la valoración podemos proponer combinarlo con otras técnicas como subcisión o láser CO2.",
    },
    beneficios: ["Cara o cuerpo", "Atenúa la cicatriz", "Sesiones cortas", "Plan según la marca"],
    zonasTitulo: "Qué ayuda a tratar",
    zonas: [
      { icon: "◠", label: "Cicatrices faciales", desc: "Marcas por accidentes, acné o procedimientos." },
      { icon: "▭", label: "Cicatrices corporales", desc: "Marcas en abdomen, brazos, piernas o espalda." },
      { icon: "◇", label: "Cicatrices quirúrgicas", desc: "Cicatrices ya cerradas después de una cirugía." },
    ],
    pasos: [
      { num: "01", title: "Valoración de la cicatriz", desc: "Revisamos el tipo, la antigüedad y la zona de la cicatriz para definir el plan.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación de PB Serum", desc: "Aplicamos las enzimas con microinyecciones en la cicatriz.", detail: "15 a 30 min" },
      { num: "03", title: "Evolución y ajustes", desc: "Revisamos el cambio entre sesiones y, si hace falta, proponemos combinar técnicas.", detail: "Control entre sesiones" },
    ],
    seguridad: [
      { num: "01", title: "Cada cicatriz se diagnostica", desc: "Una cicatriz hundida no se trata igual que una elevada." },
      { num: "02", title: "Tiempo de maduración", desc: "Esperamos a que la cicatriz esté cerrada y estable antes de tratar." },
      { num: "03", title: "Mejoría, no borrado", desc: "Te explicamos con claridad cuánto puede mejorar tu caso." },
    ],
    cuidados: {
      antes: [
        "Cuéntanos el origen y la antigüedad de la cicatriz",
        "Informa tus alergias y medicamentos",
        "Llega con la zona limpia, sin cremas",
      ],
      despues: [
        "Es normal inflamación leve o sensibilidad por unos días",
        "Protege la cicatriz del sol",
        "No rasques ni manipules la zona",
        "Asiste a tus controles",
      ],
    },
    precio: {
      desde: 280000,
      opciones: [
        { label: "Enzimas PB Serum · 3 cc", valor: 280000 },
      ],
      incluye: ["Valoración médica previa", "Enzimas PB Serum, 3 cc", "Aplicación en la cicatriz", "Indicaciones de cuidado"],
      nota: "El número de sesiones lo define la valoración según el tipo de cicatriz.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "Las enzimas PB Serum en presentación de 3 cc tienen un valor de $280.000." },
      { q: "¿La cicatriz se borra?", a: "No se borra por completo. El objetivo es que se vea más suave, uniforme y menos notoria." },
      { q: "¿Cuántas sesiones necesito?", a: "Suelen requerirse varias sesiones. El número depende del tipo, tamaño y antigüedad de la cicatriz." },
      { q: "¿Duele?", a: "Sientes pinchazos y una molestia pasajera durante la aplicación." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Inflamación leve, enrojecimiento o sensibilidad en la zona por unos días." },
      { q: "¿Se puede tratar una cicatriz reciente?", a: "Primero debe estar cerrada y estable. En la valoración te decimos cuándo es el momento adecuado." },
      { q: "¿Se combina con otros tratamientos?", a: "Sí. En cicatrices hundidas puede combinarse con subcisión o láser CO2, según la valoración." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Tratamiento de cicatrices",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "plasma-fibroblast",
    categoria: "faciales",
    grupo: "Enzimas y cicatrices",
    nombre: "Plasma fibroblast",
    resultados: [],
    relacionados: ["cauterizacion", "laser-co2", "hidroxiapatita-de-calcio"],
    hero: {
      eyebrow: "PLASMA FIBROBLAST · RETRACCIÓN DE PIEL",
      titulo: "Piel más tensa en zonas pequeñas,",
      tituloEm: "sin bisturí",
      sub: "Técnica de sublimación con arco de plasma que ayuda a retraer la piel en zonas pequeñas, como párpados o arrugas finas. Siempre con valoración previa, sobre todo en pieles oscuras.",
    },
    seo: {
      title: "Plasma fibroblast en Medellín | Clínica Quantum",
      description: "Plasma fibroblast en El Poblado, Medellín: ayuda a retraer la piel en zonas pequeñas como párpados o arrugas finas, con valoración médica previa.",
      keywords: ["plasma fibroblast medellín", "plasma fibroblast párpados", "plasma fibroblast precio", "tensar párpados sin cirugía", "plasma pen medellín"],
    },
    ficha: {
      duracion: "30 a 60 min según la zona",
      sesiones: "1 a 2 sesiones según tu caso",
      recuperacion: "Costras pequeñas por días",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes exceso leve de piel en los párpados",
        "Te preocupan arrugas finas en zonas pequeñas",
        "Buscas una opción sin cirugía para una zona puntual",
        "Puedes cuidar la zona y evitar el sol varias semanas",
      ],
      noIdeal: [
        "Tu piel es oscura o tiende a mancharse: el riesgo de manchas es mayor y requiere valoración cuidadosa",
        "Tienes exceso importante de piel, que puede requerir cirugía",
        "Estás en embarazo o lactancia",
        "Tienes tendencia a queloides o infección en la zona",
      ],
    },
    problema: {
      titulo: "Pequeñas zonas que envejecen la mirada",
      parrafos: [
        "Un poco de piel de más en el párpado o unas líneas finas alrededor de los ojos o la boca pueden hacer que te veas cansada, aunque el resto de tu piel esté bien.",
        "Para zonas pequeñas y bien seleccionadas existen técnicas que ayudan a retraer la piel sin llegar a una cirugía.",
      ],
    },
    queEs: {
      titulo: "Qué es el plasma fibroblast",
      desc: "Es una técnica que usa un pequeño arco de plasma para sublimar puntos diminutos de la superficie de la piel. Esos puntos generan una retracción del tejido y estimulan la renovación, lo que ayuda a tensar zonas pequeñas como párpados o arrugas finas. Deja costras pequeñas que caen solas en días. En fototipos altos el riesgo de manchas es mayor, por eso la valoración es indispensable.",
    },
    beneficios: ["Para zonas pequeñas", "Sin bisturí", "Ayuda a retraer la piel", "Valoración previa"],
    zonasTitulo: "Zonas que se pueden valorar",
    zonas: [
      { icon: "◡", label: "Párpados", desc: "Exceso leve de piel en el párpado superior." },
      { icon: "◠", label: "Contorno de ojos", desc: "Arrugas finas alrededor de los ojos." },
      { icon: "○", label: "Líneas peribucales", desc: "Arrugas finas alrededor de la boca." },
    ],
    pasos: [
      { num: "01", title: "Valoración de la zona y tu fototipo", desc: "Revisamos la zona, la cantidad de piel y tu tendencia a mancharte para confirmar si es apto.", detail: "Valoración médica previa" },
      { num: "02", title: "Sesión de plasma fibroblast", desc: "Aplicamos anestesia tópica y tratamos la zona con puntos pequeños de plasma, siguiendo un patrón controlado.", detail: "30 a 60 min" },
      { num: "03", title: "Costras y seguimiento", desc: "Te explicamos cómo cuidar las costras mientras caen y revisamos la evolución de la retracción.", detail: "Control de evolución" },
    ],
    seguridad: [
      { num: "01", title: "Fototipo evaluado", desc: "En pieles oscuras o con tendencia a manchas el riesgo es mayor; puede no ser la mejor opción." },
      { num: "02", title: "Selección de casos", desc: "Solo para zonas pequeñas y exceso leve de piel. Si necesitas otra opción, te lo decimos." },
      { num: "03", title: "Recuperación explicada", desc: "Sabes desde antes que habrá inflamación y costras pequeñas por varios días." },
    ],
    cuidados: {
      antes: [
        "Evita el sol y el bronceado las semanas previas",
        "Cuéntanos si has tenido herpes, manchas o queloides",
        "Organiza tu agenda para los días de costras",
      ],
      despues: [
        "No retires las costras: deja que caigan solas",
        "Mantén la zona limpia y seca según las indicaciones",
        "Evita el sol y usa protector cuando te lo autoricemos",
        "No uses maquillaje sobre las costras",
        "Consulta si notas pus, dolor intenso o inflamación que empeora",
      ],
    },
    precio: {
      desde: 700000,
      opciones: [
        { label: "Sesión", valor: 700000 },
      ],
      incluye: ["Valoración médica previa", "Sesión de plasma fibroblast", "Indicaciones de cuidado posterior", "Control de evolución"],
      nota: "En la valoración confirmamos si tu zona y tu tipo de piel son aptos.",
    },
    faq: [
      { q: "¿Cuánto cuesta el plasma fibroblast?", a: "Cada sesión tiene un valor de $700.000." },
      { q: "¿Duele?", a: "Aplicamos anestesia tópica. Durante la sesión se siente calor y picor en los puntos tratados." },
      { q: "¿Cuánto dura la recuperación?", a: "Habitualmente hay inflamación los primeros días, sobre todo en párpados, y costras pequeñas que caen en alrededor de una semana." },
      { q: "¿Cuándo veo resultados?", a: "La retracción se va notando después de que caen las costras y sigue mejorando en las semanas siguientes." },
      { q: "¿Sirve para pieles oscuras?", a: "Hay mayor riesgo de manchas en fototipos altos. La valoración define si es apto o si conviene otra técnica." },
      { q: "¿Reemplaza una cirugía de párpados?", a: "No. Puede ayudar en excesos leves de piel. Si el exceso es importante, te lo diremos con claridad." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Inflamación, enrojecimiento y costras. Con menos frecuencia, manchas claras u oscuras en la zona." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Plasma fibroblast",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "subcision-de-hoyuelos",
    categoria: "faciales",
    grupo: "Enzimas y cicatrices",
    nombre: "Subcisión de hoyuelos",
    resultados: [],
    relacionados: ["laser-co2", "tratamiento-de-cicatrices", "celulitis"],
    hero: {
      eyebrow: "SUBCISIÓN · CÁNULA FINA",
      titulo: "Libera lo que hunde tu piel,",
      tituloEm: "una superficie más uniforme",
      sub: "La subcisión libera las adherencias que generan cicatrices hundidas y hoyuelos, ayudando a conseguir una piel más uniforme. La realizamos con cánula fina.",
    },
    seo: {
      title: "Subcisión de hoyuelos en Medellín | Clínica Quantum",
      description: "Subcisión con cánula fina en El Poblado, Medellín: libera las adherencias de cicatrices hundidas y hoyuelos para una piel más uniforme, con valoración.",
      keywords: ["subcisión medellín", "subcisión cicatrices de acné", "subcisión celulitis hoyuelos", "cicatrices hundidas tratamiento", "subcisión precio medellín"],
    },
    ficha: {
      duracion: "30 a 60 min según la zona",
      sesiones: "1 a 3 sesiones según tu caso",
      recuperacion: "Morados e inflamación por días",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes cicatrices de acné hundidas que se ven como sombras",
        "Te preocupan hoyuelos marcados en glúteos o piernas",
        "Notas que la cicatriz se ve mejor al estirar la piel",
        "Buscas mejorar el relieve de forma localizada",
      ],
      noIdeal: [
        "Tienes alteraciones de la coagulación o tomas anticoagulantes sin control",
        "Estás en embarazo o lactancia",
        "Tienes infección activa en la zona",
      ],
    },
    problema: {
      titulo: "Hundimientos que ninguna crema levanta",
      parrafos: [
        "Algunas cicatrices y hoyuelos se ven como sombras en la piel. Con luz lateral se notan más y ningún producto tópico logra cambiarlos.",
        "Muchas veces la causa está debajo: bandas de tejido que tiran de la piel hacia adentro. Si liberas esa tensión, la superficie puede nivelarse.",
      ],
    },
    queEs: {
      titulo: "Qué es la subcisión",
      desc: "Es un procedimiento en el que, con anestesia local y una cánula fina, se liberan por debajo de la piel las bandas fibrosas que tiran de ella y forman cicatrices hundidas o hoyuelos. Al soltarse, la piel puede elevarse y verse más uniforme. Es habitual que queden morados e inflamación durante varios días.",
    },
    beneficios: ["Con cánula fina", "Libera adherencias", "Piel más uniforme", "Cara o cuerpo"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◇", label: "Cicatrices de acné", desc: "Marcas hundidas en mejillas y sienes." },
      { icon: "◡", label: "Hoyuelos en glúteos", desc: "Hundimientos localizados por celulitis." },
      { icon: "▭", label: "Hoyuelos en piernas", desc: "Depresiones marcadas en muslos." },
      { icon: "○", label: "Cicatrices hundidas", desc: "Marcas deprimidas en otras zonas del cuerpo." },
    ],
    pasos: [
      { num: "01", title: "Valoración del relieve", desc: "Revisamos las cicatrices u hoyuelos con distinta luz y confirmamos si están adheridos por debajo.", detail: "Valoración médica previa" },
      { num: "02", title: "Subcisión con cánula fina", desc: "Aplicamos anestesia local y liberamos las adherencias con una cánula fina a través de pequeños puntos de entrada.", detail: "30 a 60 min" },
      { num: "03", title: "Recuperación y seguimiento", desc: "Revisamos la evolución cuando baja la inflamación y definimos si conviene otra sesión o combinar.", detail: "Control de evolución" },
    ],
    seguridad: [
      { num: "01", title: "Selección de cicatrices", desc: "La subcisión funciona en marcas adheridas; si tu cicatriz es de otro tipo, te proponemos otra opción." },
      { num: "02", title: "Anestesia local y cánula fina", desc: "Procedimiento en consultorio con técnica estéril." },
      { num: "03", title: "Revisión de medicamentos", desc: "Revisamos anticoagulantes y antecedentes para reducir el riesgo de hematomas." },
      { num: "04", title: "Morados anunciados", desc: "Sabes desde antes que habrá morados e inflamación por días." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina y antiinflamatorios los días previos, si tu médico lo permite",
        "Cuéntanos todos tus medicamentos y suplementos",
        "Agenda lejos de eventos importantes",
      ],
      despues: [
        "Es normal tener morados, inflamación y sensibilidad por días",
        "Aplica frío suave según las indicaciones",
        "Evita ejercicio intenso los primeros días",
        "Mantén limpios los puntos de entrada",
        "Asiste a tu control",
      ],
    },
    precio: {
      desde: 650000,
      opciones: [
        { label: "Con cánula fina", valor: 650000 },
      ],
      incluye: ["Valoración médica previa", "Subcisión con cánula fina", "Anestesia local", "Indicaciones de cuidado"],
      nota: "El número de sesiones y las zonas se definen en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta la subcisión?", a: "La subcisión con cánula fina tiene un valor de $650.000." },
      { q: "¿Duele?", a: "Se hace con anestesia local, por lo que durante el procedimiento sientes presión. Después la zona queda sensible unos días." },
      { q: "¿Cuánto dura la recuperación?", a: "Habitualmente hay morados e inflamación durante una a dos semanas, según la zona." },
      { q: "¿Cuándo veo el resultado?", a: "Cuando baja la inflamación empieza a notarse el cambio, que sigue mejorando en las semanas siguientes." },
      { q: "¿Cuántas sesiones necesito?", a: "Algunas cicatrices mejoran con una sesión y otras necesitan más. Lo definimos según tu caso." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Morados, inflamación, sensibilidad y, con menos frecuencia, pequeños nódulos o irregularidades que se revisan en el control." },
      { q: "¿Se combina con otros tratamientos?", a: "Sí. En cicatrices de acné es frecuente combinarla con láser CO2, y en celulitis con otros tratamientos corporales." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Subcisión de hoyuelos",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "cauterizacion",
    categoria: "faciales",
    grupo: "Enzimas y cicatrices",
    nombre: "Cauterización de lunares y verrugas",
    resultados: [],
    relacionados: ["plasma-fibroblast", "peeling", "laser-co2"],
    hero: {
      eyebrow: "CAUTERIZACIÓN · LESIONES DE PIEL",
      titulo: "Despídete de esas lesiones que te incomodan,",
      tituloEm: "con revisión médica previa",
      sub: "Eliminamos lunares, verrugas y lentigos solares, además de milium, xantelasmas y acrocordones. Cada lesión se valora antes y lo que resulte sospechoso se remite a estudio.",
    },
    seo: {
      title: "Cauterización de lunares y verrugas | Clínica Quantum",
      description: "Cauterización de lunares, verrugas y acrocordones en El Poblado, Medellín: eliminamos lesiones benignas de la piel con valoración médica previa.",
      keywords: ["cauterización de verrugas medellín", "quitar lunares medellín", "eliminar acrocordones", "cauterización de lunares precio", "quitar milium medellín"],
    },
    ficha: {
      duracion: "15 a 45 min según las lesiones",
      sesiones: "Habitualmente 1 sesión",
      recuperacion: "Costras pequeñas por días",
      resultados: "Visibles al caer las costras",
    },
    paraQuien: {
      ideal: [
        "Tienes verrugas, acrocordones o milium que te incomodan",
        "Te molestan lunares benignos que rozan con la ropa",
        "Tienes lentigos solares o xantelasmas",
        "Quieres retirar lesiones con revisión médica previa",
      ],
      noIdeal: [
        "Tienes un lunar que cambió de forma, color o tamaño: primero debe estudiarse",
        "Tienes infección activa en la zona",
        "Tienes tendencia a queloides: hay que valorarlo antes",
      ],
    },
    problema: {
      titulo: "Pequeñas lesiones que no pasan desapercibidas",
      parrafos: [
        "Una verruga en la mano, acrocordones en el cuello o un milium cerca del ojo pueden incomodarte, engancharse con la ropa o afectar cómo te ves.",
        "No todas las lesiones son iguales. Por eso las revisamos antes de retirarlas y, si algo no se ve benigno, lo remitimos a estudio.",
      ],
    },
    queEs: {
      titulo: "Qué es la cauterización",
      desc: "Es un procedimiento que usa calor controlado para retirar lesiones superficiales de la piel, como verrugas, acrocordones, milium, xantelasmas, lentigos solares y lunares benignos. Se hace con anestesia local o tópica según la lesión. Deja una costra pequeña que cae en días; la marca final depende de la lesión y de tu piel.",
    },
    beneficios: ["Lesión valorada antes", "Sesión corta", "Varias lesiones por sesión", "Recuperación sencilla"],
    zonasTitulo: "Lesiones que tratamos",
    zonas: [
      { icon: "○", label: "Lunares benignos", desc: "Previa revisión médica de la lesión." },
      { icon: "◇", label: "Verrugas", desc: "En rostro, manos o cuerpo." },
      { icon: "▭", label: "Acrocordones", desc: "Pequeñas lesiones colgantes en cuello o axilas." },
      { icon: "✦", label: "Milium y xantelasmas", desc: "Quistes blancos y placas amarillentas en párpados." },
      { icon: "◠", label: "Lentigos solares", desc: "Manchas planas causadas por el sol." },
    ],
    pasos: [
      { num: "01", title: "Revisión de cada lesión", desc: "Examinamos las lesiones para confirmar que son benignas. Lo sospechoso se remite a estudio antes de cualquier procedimiento.", detail: "Valoración médica previa" },
      { num: "02", title: "Cauterización", desc: "Aplicamos anestesia y retiramos cada lesión con calor controlado.", detail: "15 a 45 min" },
      { num: "03", title: "Cicatrización y control", desc: "Te explicamos cómo cuidar las costras y revisamos que la piel cicatrice bien.", detail: "Control de cicatrización" },
    ],
    seguridad: [
      { num: "01", title: "Nada sospechoso se cauteriza", desc: "Si un lunar tiene características atípicas, lo remitimos a estudio en lugar de retirarlo." },
      { num: "02", title: "Anestesia según la lesión", desc: "Tópica o local, para que el procedimiento sea tolerable." },
      { num: "03", title: "Expectativas sobre la marca", desc: "Puede quedar una marca leve o un cambio de color; te lo explicamos antes." },
    ],
    cuidados: {
      antes: [
        "Cuéntanos si alguna lesión ha cambiado o sangrado",
        "Evita el sol en la zona los días previos",
        "Informa tus medicamentos y alergias",
      ],
      despues: [
        "No retires las costras: deja que caigan solas",
        "Mantén la zona limpia y seca según las indicaciones",
        "Protege la zona del sol para evitar manchas",
        "No apliques maquillaje sobre las costras",
        "Consulta si notas pus, dolor intenso o enrojecimiento que se extiende",
      ],
    },
    precio: {
      desde: 380000,
      opciones: [
        { label: "Sesión", detalle: "Lunares, verrugas, milium, xantelasmas, acrocordones", valor: 380000 },
      ],
      incluye: ["Valoración médica de las lesiones", "Sesión de cauterización", "Anestesia según la lesión", "Indicaciones de cuidado"],
      nota: "En la valoración revisamos cuántas lesiones se pueden tratar en la sesión.",
    },
    faq: [
      { q: "¿Cuánto cuesta la cauterización?", a: "La sesión tiene un valor de $380.000 e incluye lunares, verrugas, milium, xantelasmas o acrocordones." },
      { q: "¿Duele?", a: "Aplicamos anestesia tópica o local según la lesión, así que la molestia es breve." },
      { q: "¿Queda marca?", a: "Puede quedar una marca leve o un cambio de tono, que depende de la lesión, la zona y tu piel. La fotoprotección ayuda a que se note menos." },
      { q: "¿Cuánto dura la recuperación?", a: "Se forma una costra pequeña que habitualmente cae en una a dos semanas. Retomas tu rutina el mismo día." },
      { q: "¿Pueden quitarme cualquier lunar?", a: "No. Revisamos cada lunar antes y, si tiene características sospechosas, lo remitimos a estudio antes de cualquier procedimiento." },
      { q: "¿Las verrugas pueden volver?", a: "Sí, algunas verrugas son de origen viral y pueden reaparecer. Si pasa, las revisamos de nuevo." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Cauterización de lunares y verrugas",
  },
];
