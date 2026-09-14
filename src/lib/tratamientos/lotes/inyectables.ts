import type { Tratamiento } from "../types";

/**
 * Lote inyectables: toxina botulínica (usos estéticos y médicos) y ácido
 * hialurónico. Fuente: docs/servicios-manifest.json.
 */
export const inyectables: Tratamiento[] = [
  // ── Botox (toxina botulínica) ─────────────────────────────────────────────
  {
    slug: "botox",
    categoria: "faciales",
    grupo: "Toxina botulínica",
    nombre: "Botox (toxina botulínica)",
    resultados: [],
    relacionados: ["mesobotox", "toxina-bruxismo", "skinbooster"],
    hero: {
      eyebrow: "Toxina botulínica · Tercio superior",
      titulo: "Una mirada descansada,",
      tituloEm: "con tu expresión intacta",
      sub: "Suavizamos las líneas de expresión de frente, entrecejo y patas de gallo para que te veas más fresca y descansada, conservando la expresión natural de tu rostro.",
    },
    seo: {
      title: "Botox en Medellín | Clínica Quantum",
      description:
        "Botox en El Poblado, Medellín: suaviza líneas de frente, entrecejo y patas de gallo con un resultado natural. Tercio superior desde $1.100.000.",
      keywords: ["botox medellín", "toxina botulínica medellín", "botox el poblado", "precio botox medellín", "patas de gallo botox"],
    },
    ficha: {
      duracion: "20 a 30 min",
      sesiones: "1 sesión, con control",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "En días; duran meses",
    },
    paraQuien: {
      ideal: [
        "Te molestan las líneas de la frente, el entrecejo o las patas de gallo",
        "Te dicen que te ves cansada o molesta aunque no lo estés",
        "Quieres prevenir que las líneas de expresión se marquen más",
        "Buscas un resultado natural, sin cara congelada",
      ],
      noIdeal: [
        "Estás en embarazo o lactancia",
        "Tienes una enfermedad neuromuscular o infección activa en la zona",
        "Buscas rellenar surcos o recuperar volumen: para eso existen otros tratamientos",
        "Esperas eliminar por completo arrugas muy profundas en reposo",
      ],
    },
    problema: {
      titulo: "Cuando tu cara dice cansancio aunque te sientas bien",
      parrafos: [
        "Las líneas de la frente, el entrecejo y las patas de gallo se forman por el movimiento repetido de los músculos al gesticular. Con los años se marcan más y empiezan a verse incluso en reposo.",
        "La toxina botulínica relaja de forma controlada esos músculos. El objetivo no es borrar tu expresión, sino suavizar las líneas para que tu rostro se vea más fresco y descansado.",
      ],
    },
    queEs: {
      titulo: "Qué es la toxina botulínica",
      desc: "Es un medicamento que se aplica en microdosis en músculos específicos de la expresión para relajarlos de forma temporal. Al disminuir su contracción, la piel que está encima se suaviza. Es uno de los tratamientos de medicina estética más estudiados; su efecto es reversible y se va perdiendo con los meses, por eso se repite periódicamente según cada persona.",
    },
    beneficios: ["Resultado natural", "Sin incapacidad", "Efecto visible en días", "Aplicación en pocos minutos"],
    zonasTitulo: "Zonas del tercio superior",
    zonas: [
      { icon: "▭", label: "Frente", desc: "Líneas horizontales al levantar las cejas." },
      { icon: "◇", label: "Entrecejo", desc: "Las líneas que dan aspecto de enojo o preocupación." },
      { icon: "◠", label: "Patas de gallo", desc: "Líneas junto a los ojos al sonreír." },
    ],
    pasos: [
      { num: "01", title: "Valoración de tu expresión", desc: "Estudiamos cómo se mueve tu rostro, dónde se marcan las líneas y qué quieres lograr. Definimos puntos y dosis para ti.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación precisa", desc: "Limpiamos la zona y aplicamos microdosis con una aguja muy fina. Se siente como pequeños pinchazos breves.", detail: "20 a 30 min" },
      { num: "03", title: "Resultado y control", desc: "El efecto empieza a notarse en pocos días y se completa en las semanas siguientes. Revisamos el resultado en el control.", detail: "Control posterior" },
    ],
    seguridad: [
      { num: "01", title: "Dosis a la medida de tu rostro", desc: "No usamos una fórmula igual para todos: puntos y unidades se definen según tu musculatura y tu expresión." },
      { num: "02", title: "Naturalidad como criterio", desc: "Buscamos que te veas descansada, no que pierdas tu forma de expresarte." },
      { num: "03", title: "Expectativas claras", desc: "Te explicamos qué líneas pueden suavizarse y cuáles necesitan otro enfoque." },
      { num: "04", title: "Personal médico", desc: "Aplicada por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Evita alcohol el día anterior",
        "Cuéntanos si tomas anticoagulantes o tienes alguna condición neuromuscular",
        "Llega sin maquillaje en la zona o lo retiramos en la clínica",
      ],
      despues: [
        "No te acuestes ni te frotes la zona durante las primeras horas",
        "Evita ejercicio intenso, sauna y calor ese día",
        "Es normal un pequeño enrojecimiento o punto de pinchazo que desaparece pronto",
        "Asiste a tu control para revisar el resultado",
      ],
    },
    precio: {
      desde: 1100000,
      opciones: [
        { label: "Tercio superior · mujer", detalle: "Entrecejo, patas de gallo, frente", valor: 1100000 },
        { label: "Tercio superior · hombre", detalle: "Entrecejo, patas de gallo, frente", valor: 1200000 },
        { label: "Por unidad", valor: 19000 },
      ],
      incluye: ["Valoración médica previa", "Aplicación en las zonas acordadas", "Indicaciones de cuidado", "Control posterior"],
      nota: "El tercio superior incluye entrecejo, patas de gallo y frente. Para otras zonas se calcula por unidades.",
    },
    faq: [
      { q: "¿Cuánto cuesta el botox?", a: "El tercio superior (entrecejo, patas de gallo y frente) cuesta desde $1.100.000 en mujeres y desde $1.200.000 en hombres. Para otras zonas se calcula por unidad, desde $19.000 cada una." },
      { q: "¿Voy a quedar con la cara congelada?", a: "No es el objetivo. Las dosis se ajustan a tu musculatura para suavizar las líneas conservando tu expresión natural." },
      { q: "¿Cuándo se ve el resultado?", a: "Habitualmente empieza a notarse entre los primeros días y la primera semana, y se completa en las semanas siguientes." },
      { q: "¿Cuánto dura?", a: "Suele durar varios meses; depende de cada persona, la zona y la actividad muscular. Por eso se repite periódicamente." },
      { q: "¿Duele?", a: "Se usa una aguja muy fina y la aplicación es rápida. La mayoría lo describe como pequeños pinchazos tolerables." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Lo más frecuente es enrojecimiento leve, sensibilidad o un pequeño morado en el punto de aplicación, que desaparecen pronto. Otros efectos son poco frecuentes y te los explicamos en la valoración." },
      { q: "¿Quién no puede aplicárselo?", a: "No se aplica en embarazo o lactancia, con infección activa en la zona ni en ciertas enfermedades neuromusculares. Lo revisamos en tu historia clínica." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Se combina con frecuencia con ácido hialurónico, skinbooster o tratamientos de piel. Definimos el orden en la valoración." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Botox (toxina botulínica)",
  },

  // ── Mesobotox ─────────────────────────────────────────────────────────────
  {
    slug: "mesobotox",
    categoria: "faciales",
    grupo: "Toxina botulínica",
    nombre: "Mesobotox",
    resultados: [],
    relacionados: ["botox", "skinbooster", "nanopore"],
    hero: {
      eyebrow: "Toxina botulínica · Mesobotox",
      titulo: "Poros más finos y menos brillo,",
      tituloEm: "con toda tu expresión intacta",
      sub: "Toxina botulínica aplicada de forma superficial que cierra el poro y controla el brillo, para un acabado tipo glass skin. Sin congelar tu rostro y con criterio médico en cada punto.",
    },
    seo: {
      title: "Mesobotox en Medellín | Clínica Quantum",
      description:
        "Mesobotox en El Poblado, Medellín: toxina superficial que afina el poro y controla el brillo para una piel tipo glass skin, sin perder tu expresión.",
      keywords: ["mesobotox medellín", "microbotox poros", "controlar brillo facial", "glass skin medellín", "cerrar poros abiertos"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión, repetible según tu caso",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "En días; duran meses",
    },
    paraQuien: {
      ideal: [
        "Tienes poros visibles en frente, nariz o mejillas",
        "Tu piel brilla a las pocas horas aunque la limpies",
        "Quieres una piel más lisa y uniforme bajo el maquillaje",
        "Buscas mejorar la textura sin perder movimiento facial",
      ],
      noIdeal: [
        "Buscas suavizar arrugas de expresión marcadas: para eso está el botox",
        "Estás en embarazo o lactancia",
        "Tienes una enfermedad neuromuscular o infección activa en la zona",
      ],
    },
    problema: {
      titulo: "Ese brillo y esos poros que el maquillaje no esconde",
      parrafos: [
        "Te limpias la cara en la mañana y a media tarde la piel ya brilla. Los poros se notan en la frente y la nariz, y la base se asienta justo ahí. No es falta de cuidado: es cómo funcionan tus glándulas sebáceas.",
        "El mesobotox trabaja en la superficie de la piel, no en los músculos. Por eso afina la textura y regula el brillo sin cambiar la forma en que sonríes o gesticulas.",
      ],
    },
    queEs: {
      titulo: "Qué es el mesobotox",
      desc: "Es la aplicación de toxina botulínica muy diluida en microinyecciones superficiales, distribuidas por la zona a tratar. A ese nivel actúa sobre las glándulas sebáceas y sudoríparas y sobre la tensión fina de la piel, lo que se traduce en poros menos visibles, menos brillo y un acabado más liso. A diferencia del botox tradicional, no busca relajar los músculos de la expresión.",
    },
    beneficios: ["Poros menos visibles", "Control del brillo", "Conserva tu expresión", "Sin incapacidad"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "○", label: "Poro", desc: "Poros de apariencia más fina en frente, nariz y mejillas." },
      { icon: "✦", label: "Brillo", desc: "Menos grasa visible durante el día." },
      { icon: "▭", label: "Textura", desc: "Una superficie más lisa y uniforme." },
      { icon: "◇", label: "Maquillaje", desc: "La base se asienta mejor y dura más." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico de tu piel", desc: "Revisamos tu piel con el analizador facial para ver poros, brillo y textura, y confirmamos que el mesobotox es lo indicado para ti.", detail: "Valoración médica previa" },
      { num: "02", title: "Microinyecciones superficiales", desc: "Limpiamos la piel y aplicamos pequeñas cantidades de toxina en la superficie de la zona. Se siente como pequeños pinchazos, tolerables.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "La textura empieza a verse más fina en pocos días. Te damos indicaciones de cuidado y definimos cuándo conviene repetir.", detail: "Efecto visible en días" },
    ],
    seguridad: [
      { num: "01", title: "Dosis pensadas para la piel, no para el músculo", desc: "La dilución y la profundidad se ajustan para tratar la superficie sin afectar tu expresión." },
      { num: "02", title: "Diagnóstico con analizador facial", desc: "Vemos tus poros y tu brillo antes de decidir, para no tratar lo que no lo necesita." },
      { num: "03", title: "Expectativas claras", desc: "Te explicamos qué puede mejorar y qué no. Si tu piel necesita otra cosa primero, te lo decimos." },
      { num: "04", title: "Personal médico", desc: "Aplicado por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Evita alcohol el día anterior",
        "Llega sin maquillaje o permite que lo retiremos",
        "Cuéntanos qué medicamentos tomas, en especial anticoagulantes",
        "Suspende exfoliantes fuertes unos días antes",
      ],
      despues: [
        "No masajees ni frotes la zona ese día",
        "Evita ejercicio intenso, sauna y calor durante 24 horas",
        "No te acuestes boca abajo las primeras horas",
        "Es normal ver pequeñas ronchas o puntos rojos que ceden en horas",
        "Usa protector solar a diario",
      ],
    },
    precio: {
      desde: 750000,
      opciones: [{ label: "Sesión", valor: 750000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "Sesión de mesobotox", "Indicaciones de cuidado"],
      nota: "La frecuencia para repetir la definimos en la valoración según tu piel.",
    },
    faq: [
      { q: "¿Cuánto cuesta el mesobotox?", a: "La sesión tiene un valor desde $750.000. En la valoración confirmamos que es el tratamiento indicado para tu piel." },
      { q: "¿Me va a quitar expresión?", a: "No es su objetivo. Se aplica de forma superficial para tratar la piel, no los músculos de la expresión. Si buscas suavizar arrugas de movimiento, el tratamiento indicado es el botox." },
      { q: "¿Duele?", a: "Son pequeños pinchazos superficiales. La mayoría de pacientes lo describe como una molestia leve y tolerable." },
      { q: "¿Cuándo veo el resultado y cuánto dura?", a: "Habitualmente empieza a notarse en pocos días. El efecto dura meses y varía según tu piel, por eso definimos contigo cuándo repetir." },
      { q: "¿Tiene efectos secundarios?", a: "Lo más común es enrojecimiento leve, pequeñas ronchas en los puntos de aplicación o algún morado pequeño, que ceden en horas o pocos días." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Suele complementarse con skinbooster para hidratación o con tratamientos de poro. En la valoración armamos el orden adecuado." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, enfermedades neuromusculares, infección activa en la zona ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Mesobotox",
  },

  // ── Toxina para bruxismo ──────────────────────────────────────────────────
  {
    slug: "toxina-bruxismo",
    categoria: "faciales",
    grupo: "Toxina botulínica",
    nombre: "Toxina para bruxismo",
    resultados: ["bruxismo"],
    relacionados: ["botox", "toxina-migrana", "perfilado-mandibular"],
    hero: {
      eyebrow: "Toxina botulínica · Bruxismo",
      titulo: "Suelta la mandíbula,",
      tituloEm: "descansa de apretar los dientes",
      sub: "Toxina botulínica en los músculos de la mandíbula para disminuir el apretamiento y la tensión muscular. Un procedimiento corto, con valoración médica y dosis ajustada a tu caso.",
    },
    seo: {
      title: "Toxina para bruxismo en Medellín | Clínica Quantum",
      description:
        "Toxina botulínica para bruxismo en El Poblado, Medellín: disminuye el apretamiento y la tensión de la mandíbula con valoración médica previa.",
      keywords: ["botox bruxismo medellín", "toxina botulínica bruxismo", "apretar los dientes tratamiento", "botox masetero medellín", "dolor de mandíbula"],
    },
    ficha: {
      duracion: "15 a 30 min",
      sesiones: "1 sesión, repetible según tu caso",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "En días; duran meses",
    },
    paraQuien: {
      ideal: [
        "Aprietas o rechinas los dientes, sobre todo al dormir",
        "Te levantas con la mandíbula cansada o adolorida",
        "Sientes tensión en la cara, las sienes o el cuello",
        "Tu odontólogo te habló de desgaste por apretamiento",
        "Quieres complementar el manejo que ya llevas con placa",
      ],
      noIdeal: [
        "Tu dolor viene de una lesión de la articulación que aún no se ha estudiado",
        "Estás en embarazo o lactancia",
        "Tienes una enfermedad neuromuscular",
      ],
    },
    problema: {
      titulo: "Cuando tu mandíbula no descansa ni dormida",
      parrafos: [
        "Te despiertas con la mandíbula cansada, dolor en las sienes o la sensación de haber apretado toda la noche. A veces te lo dice tu pareja; a veces lo nota tu odontólogo por el desgaste de los dientes.",
        "El bruxismo tiene que ver con músculos que trabajan de más. Reducir esa actividad ayuda a disminuir el apretamiento y la tensión, y le da a tu mandíbula un respiro.",
      ],
    },
    queEs: {
      titulo: "Qué hace la toxina en el bruxismo",
      desc: "La toxina botulínica se aplica en los músculos que cierran la mandíbula, principalmente el masetero. Reduce su actividad de forma temporal, de modo que la fuerza con la que aprietas disminuye, sin impedirte hablar, masticar ni sonreír. No reemplaza la valoración odontológica: suele complementar el manejo con placa y los hábitos que te indiquen. En algunos casos, al relajar un masetero muy desarrollado, el contorno inferior del rostro también se ve más estilizado.",
    },
    beneficios: ["Menos apretamiento", "Menos tensión mandibular", "Procedimiento corto", "Sin incapacidad"],
    zonasTitulo: "Qué puede mejorar",
    zonas: [
      { icon: "▽", label: "Apretamiento", desc: "Menos fuerza al apretar, de día y de noche." },
      { icon: "◡", label: "Tensión mandibular", desc: "Menos cansancio en la mandíbula al despertar." },
      { icon: "◠", label: "Sienes", desc: "Alivio de la tensión que sube hacia los lados de la cabeza." },
      { icon: "◇", label: "Contorno", desc: "En algunos casos, un tercio inferior más estilizado." },
    ],
    pasos: [
      { num: "01", title: "Valoración médica", desc: "Revisamos tus síntomas, palpamos los músculos de la mandíbula y definimos si la toxina es adecuada y en qué dosis.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en el masetero", desc: "Aplicamos la toxina en puntos definidos de los músculos de la mandíbula. Son pocos pinchazos y el procedimiento es corto.", detail: "15 a 30 min" },
      { num: "03", title: "Efecto y seguimiento", desc: "La reducción del apretamiento se nota de forma progresiva en los días siguientes. Te indicamos cuándo volver para evaluar y cuándo repetir.", detail: "Efecto progresivo en días" },
    ],
    seguridad: [
      { num: "01", title: "Dosis según tu músculo", desc: "La cantidad se ajusta a la fuerza y el tamaño de tus maseteros, para reducir el apretamiento sin afectar la masticación normal." },
      { num: "02", title: "Mirada integral", desc: "Si tus síntomas sugieren un problema de articulación, te recomendamos estudiarlo antes o en paralelo." },
      { num: "03", title: "Expectativas claras", desc: "La toxina ayuda a disminuir el apretamiento; no corrige la mordida ni reemplaza la placa si tu odontólogo la indicó." },
      { num: "04", title: "Personal médico", desc: "Aplicada por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Cuéntanos si usas placa o tienes diagnóstico odontológico",
        "Informa los medicamentos que tomas, en especial anticoagulantes",
        "Evita alcohol el día anterior",
      ],
      despues: [
        "No masajees la zona de la mandíbula ese día",
        "Evita ejercicio intenso y calor durante 24 horas",
        "No te acuestes las primeras horas tras la aplicación",
        "Sigue usando tu placa si te la indicaron",
        "Es normal sentir la masticación un poco más suave los primeros días",
      ],
    },
    precio: {
      desde: 950000,
      opciones: [{ label: "Sesión", valor: 950000 }],
      incluye: ["Valoración médica previa", "Aplicación de toxina botulínica en maseteros", "Indicaciones de cuidado", "Orientación sobre cuándo repetir"],
      nota: "La dosis y la frecuencia se definen en la valoración según tu caso.",
    },
    faq: [
      { q: "¿Cuánto cuesta la toxina para bruxismo?", a: "La sesión tiene un valor desde $950.000. Antes hacemos una valoración médica para confirmar que es lo indicado para ti." },
      { q: "¿Voy a poder masticar normal?", a: "Sí. La dosis busca reducir la fuerza excesiva, no impedir la función. Algunas personas sienten la masticación más suave los primeros días con alimentos duros." },
      { q: "¿Cuándo se nota y cuánto dura?", a: "El efecto se nota de forma progresiva en los días siguientes. Dura meses y varía según la fuerza de tus músculos, por eso definimos contigo cuándo repetir." },
      { q: "¿Duele la aplicación?", a: "Son pocos pinchazos en la mandíbula. La mayoría lo describe como una molestia leve y breve." },
      { q: "¿Reemplaza la placa?", a: "No necesariamente. La toxina ayuda a disminuir el apretamiento, pero la placa protege los dientes. Si tu odontólogo te la indicó, lo ideal es combinar ambos." },
      { q: "¿Me cambia la forma de la cara?", a: "En algunos casos, cuando el masetero es muy grande, el contorno inferior se ve más estilizado con el tiempo. Lo conversamos en la valoración." },
      { q: "¿Tiene efectos secundarios?", a: "Lo más común es sensibilidad o un morado pequeño en los puntos de aplicación. Con poca frecuencia puede haber sensación de cansancio al masticar o una leve asimetría al sonreír, que son temporales." },
      { q: "¿Quién no se la puede aplicar?", a: "No está indicada en embarazo, lactancia, enfermedades neuromusculares, infección activa en la zona ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Toxina para bruxismo",
  },

  // ── Hiperhidrosis ─────────────────────────────────────────────────────────
  {
    slug: "hiperhidrosis",
    categoria: "faciales",
    grupo: "Toxina botulínica",
    nombre: "Toxina botulínica para hiperhidrosis",
    resultados: [],
    relacionados: ["botox", "toxina-migrana", "sueroterapia"],
    hero: {
      eyebrow: "Toxina botulínica · Hiperhidrosis",
      titulo: "Deja de pensar en el sudor,",
      tituloEm: "vuelve a vestirte con tranquilidad",
      sub: "Toxina botulínica para ayudar a reducir la sudoración excesiva en axilas, manos y pies. Un uso médico que indicamos después de una valoración cuidadosa.",
    },
    seo: {
      title: "Toxina para hiperhidrosis en Medellín | Clínica Quantum",
      description:
        "Toxina botulínica para hiperhidrosis en El Poblado, Medellín: ayuda a reducir la sudoración excesiva en axilas, manos y pies, con valoración médica.",
      keywords: ["hiperhidrosis medellín", "botox para sudoración", "sudor excesivo axilas tratamiento", "toxina botulínica hiperhidrosis", "sudoración en manos"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión, repetible según tu caso",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "En días; duran meses",
    },
    paraQuien: {
      ideal: [
        "Sudas en exceso aunque no haga calor ni hagas ejercicio",
        "Evitas ciertos colores de ropa o levantar los brazos",
        "El sudor en las manos te incomoda al saludar o trabajar",
        "Los antitranspirantes ya no te funcionan",
      ],
      noIdeal: [
        "La sudoración empezó de repente o viene con fiebre, pérdida de peso u otros síntomas: primero hay que estudiar la causa",
        "Estás en embarazo o lactancia",
        "Tienes una enfermedad neuromuscular o infección en la zona",
      ],
    },
    problema: {
      titulo: "Cuando el sudor decide por ti",
      parrafos: [
        "Eliges la ropa pensando en que no se note, cargas una camisa de repuesto o evitas dar la mano. La hiperhidrosis no es un tema de higiene: es una sudoración mayor a la que el cuerpo necesita, y afecta la vida diaria.",
        "La toxina botulínica es un uso médico reconocido para este problema. Ayuda a reducir la actividad de las glándulas del sudor en la zona tratada y te devuelve la tranquilidad en tu día a día.",
      ],
    },
    queEs: {
      titulo: "Cómo actúa la toxina en la hiperhidrosis",
      desc: "La toxina botulínica se aplica en múltiples puntos superficiales de la zona afectada. Allí bloquea de forma temporal la señal nerviosa que activa las glándulas sudoríparas, por lo que la sudoración en esa zona disminuye. No afecta la capacidad del cuerpo de regular la temperatura, porque el resto de la piel sigue sudando con normalidad. Antes de aplicarla descartamos que la sudoración tenga otra causa médica.",
    },
    beneficios: ["Menos sudoración", "Uso médico reconocido", "Procedimiento ambulatorio", "Sin incapacidad"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◠", label: "Axilas", desc: "La zona más frecuente, con cambios muy notorios en la ropa." },
      { icon: "○", label: "Manos", desc: "Para saludar, escribir y trabajar con más comodidad." },
      { icon: "▭", label: "Pies", desc: "Menos humedad dentro del calzado." },
    ],
    pasos: [
      { num: "01", title: "Valoración médica", desc: "Revisamos tu historia, cuándo empezó la sudoración y si hay otras causas por descartar. Definimos la zona y confirmamos que el tratamiento es adecuado.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en la zona", desc: "Marcamos el área y aplicamos la toxina en pequeños puntos superficiales. En manos y pies la zona es más sensible, por eso explicamos contigo cómo manejar la molestia.", detail: "30 a 45 min" },
      { num: "03", title: "Efecto y seguimiento", desc: "La sudoración disminuye de forma progresiva en los días siguientes. Te acompañamos para evaluar el efecto y definir cuándo repetir.", detail: "Efecto progresivo en días" },
    ],
    seguridad: [
      { num: "01", title: "Primero descartamos otras causas", desc: "Una sudoración que aparece de repente o con otros síntomas se estudia antes de tratarla." },
      { num: "02", title: "Mapa de la zona", desc: "Delimitamos el área que suda de más para distribuir la dosis de forma pareja." },
      { num: "03", title: "Expectativas claras", desc: "El objetivo es reducir la sudoración de forma notoria; el efecto es temporal y se repite según tu evolución." },
      { num: "04", title: "Personal médico", desc: "Aplicada por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "No te apliques desodorante ni antitranspirante el día del procedimiento",
        "Si es en axilas, evita depilarte el mismo día",
        "Cuéntanos qué medicamentos tomas y si tienes alguna enfermedad",
        "Evita alcohol el día anterior",
      ],
      despues: [
        "No masajees la zona tratada ese día",
        "Evita ejercicio intenso, sauna y calor durante 24 horas",
        "Espera 24 horas para volver a usar desodorante",
        "Es normal sentir sensibilidad o ver pequeños puntos rojos unos días",
      ],
    },
    precio: {
      desde: 2000000,
      opciones: [{ label: "Sesión", valor: 2000000 }],
      incluye: ["Valoración médica previa", "Aplicación de toxina botulínica en la zona indicada", "Indicaciones de cuidado", "Orientación sobre cuándo repetir"],
      nota: "La zona a tratar y la dosis se confirman en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta el tratamiento?", a: "La sesión tiene un valor desde $2.000.000. En la valoración confirmamos la zona a tratar y que el tratamiento es adecuado para ti." },
      { q: "¿Es seguro dejar de sudar en una zona?", a: "Sí. La zona tratada es pequeña frente al total de la piel, que sigue sudando y regulando tu temperatura con normalidad." },
      { q: "¿Duele?", a: "En axilas la molestia suele ser leve. Manos y pies son zonas más sensibles, por eso conversamos antes cómo hacer la aplicación más tolerable." },
      { q: "¿Cuándo se nota y cuánto dura?", a: "La sudoración disminuye de forma progresiva en los días siguientes. El efecto dura meses y varía entre personas, así que definimos contigo cuándo repetir." },
      { q: "¿Tiene efectos secundarios?", a: "Lo más común es sensibilidad, enrojecimiento o algún morado pequeño en los puntos. En manos puede haber una sensación temporal de menos fuerza en los dedos, que te explicamos antes." },
      { q: "¿Necesito exámenes antes?", a: "Depende de tu historia. Si la sudoración es reciente o viene con otros síntomas, te pediremos estudiar la causa antes de tratarla." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, enfermedades neuromusculares, infección activa en la zona ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Toxina botulínica para hiperhidrosis",
  },

  // ── Toxina para migraña ───────────────────────────────────────────────────
  {
    slug: "toxina-migrana",
    categoria: "faciales",
    grupo: "Toxina botulínica",
    nombre: "Toxina botulínica para migraña",
    resultados: [],
    relacionados: ["toxina-bruxismo", "botox", "indiba-dolor"],
    hero: {
      eyebrow: "Toxina botulínica · Migraña",
      titulo: "Menos días perdidos por la migraña,",
      tituloEm: "más días para ti",
      sub: "Toxina botulínica aplicada en frente, zona temporal y occipital para ayudar a reducir la frecuencia e intensidad de las migrañas. Un uso médico que indicamos solo tras valoración.",
    },
    seo: {
      title: "Toxina para migraña en Medellín | Clínica Quantum",
      description:
        "Toxina botulínica para migraña en El Poblado, Medellín: ayuda a reducir la frecuencia e intensidad de las crisis. Frente, temporal y occipital.",
      keywords: ["botox para migraña medellín", "toxina botulínica migraña", "tratamiento migraña crónica", "migraña medellín", "botox dolor de cabeza"],
    },
    ficha: {
      duracion: "20 a 30 min",
      sesiones: "1 sesión, repetible según tu caso",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Tienes migrañas frecuentes que afectan tu trabajo o tu vida social",
        "Ya tienes un diagnóstico de migraña",
        "Los tratamientos que has probado no te han dado suficiente alivio",
        "Buscas una opción que complemente tu manejo médico",
      ],
      noIdeal: [
        "Tu dolor de cabeza es reciente, cambió de forma brusca o viene con síntomas neurológicos: primero requiere estudio",
        "Estás en embarazo o lactancia",
        "Tienes una enfermedad neuromuscular",
        "Buscas un reemplazo de tu control con el especialista",
      ],
    },
    problema: {
      titulo: "Cuando la migraña organiza tu calendario",
      parrafos: [
        "Cancelas planes, trabajas con la luz apagada o pierdes días enteros esperando que pase. Vivir con migrañas frecuentes cansa, y a veces los tratamientos habituales no alcanzan.",
        "La toxina botulínica es un uso médico reconocido en migraña. No es una cura, pero en pacientes seleccionados ayuda a que las crisis sean menos frecuentes y menos intensas.",
      ],
    },
    queEs: {
      titulo: "Cómo actúa la toxina en la migraña",
      desc: "Se aplica en puntos definidos de la frente, la zona temporal y la región occipital, en este caso con 50 unidades. Se cree que actúa sobre las señales de dolor de los nervios de esas zonas, lo que ayuda a disminuir la frecuencia y la intensidad de las crisis con el paso de las semanas. Es un tratamiento complementario: no reemplaza el diagnóstico ni el seguimiento de tu médico tratante, y su indicación se define en la valoración.",
    },
    beneficios: ["Menos crisis", "Crisis menos intensas", "Uso médico reconocido", "Procedimiento ambulatorio"],
    zonasTitulo: "Zonas de aplicación",
    zonas: [
      { icon: "▭", label: "Frente", desc: "Puntos en la frente y el entrecejo." },
      { icon: "◠", label: "Zona temporal", desc: "Los lados de la cabeza, donde muchas crisis se concentran." },
      { icon: "∪", label: "Región occipital", desc: "La parte posterior de la cabeza, hacia la nuca." },
    ],
    pasos: [
      { num: "01", title: "Valoración médica", desc: "Revisamos tu diagnóstico, la frecuencia de tus crisis y los tratamientos que has usado. Si tienes exámenes o conceptos previos, tráelos.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en frente, temporal y occipital", desc: "Aplicamos la toxina en puntos definidos de las tres zonas. Son pinchazos pequeños y el procedimiento es corto.", detail: "50 unidades" },
      { num: "03", title: "Evolución y seguimiento", desc: "El efecto es progresivo. Te pedimos llevar un registro de tus crisis para evaluar la respuesta y definir contigo si conviene repetir.", detail: "Efecto progresivo en semanas" },
    ],
    seguridad: [
      { num: "01", title: "Indicación médica, no estética", desc: "Solo aplicamos si tu historia y tu diagnóstico lo justifican." },
      { num: "02", title: "Señales de alarma", desc: "Un dolor de cabeza nuevo, distinto o con síntomas neurológicos se remite a estudio antes de cualquier tratamiento." },
      { num: "03", title: "Registro de crisis", desc: "Medimos la respuesta con tu propio registro de frecuencia e intensidad, no con impresiones." },
      { num: "04", title: "Trabajo complementario", desc: "El tratamiento se suma a tu manejo médico, no lo reemplaza. Personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Trae tu diagnóstico y la lista de medicamentos que usas",
        "Si puedes, lleva un registro de tus crisis del último mes",
        "Evita alcohol el día anterior",
      ],
      despues: [
        "No masajees las zonas de aplicación ese día",
        "Evita ejercicio intenso y calor durante 24 horas",
        "No suspendas tus medicamentos sin indicación de tu médico",
        "Anota la frecuencia e intensidad de tus crisis",
        "Es normal sentir sensibilidad en los puntos o el cuello unos días",
      ],
    },
    precio: {
      desde: 1500000,
      opciones: [{ label: "Sesión", detalle: "Frente, temporal y occipital (50 unidades)", valor: 1500000 }],
      incluye: ["Valoración médica previa", "Aplicación en frente, temporal y occipital", "50 unidades de toxina botulínica", "Indicaciones de cuidado y registro de crisis"],
      nota: "La indicación del tratamiento se confirma en la valoración médica.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "La sesión tiene un valor desde $1.500.000 e incluye la aplicación en frente, zona temporal y occipital con 50 unidades." },
      { q: "¿La toxina cura la migraña?", a: "No. Es un tratamiento que ayuda a reducir la frecuencia e intensidad de las crisis en pacientes seleccionados. La respuesta varía entre personas." },
      { q: "¿Cuándo empiezo a notar el efecto?", a: "Es progresivo y suele evaluarse en las semanas siguientes. Por eso te pedimos llevar un registro de tus crisis." },
      { q: "¿Duele la aplicación?", a: "Son varios pinchazos pequeños en la cabeza y el cuello. La mayoría lo describe como una molestia tolerable y breve." },
      { q: "¿Tiene efectos secundarios?", a: "Lo más común es sensibilidad en los puntos, dolor leve de cuello o un morado pequeño. Con poca frecuencia puede haber sensación de pesadez en la frente o en un párpado, que es temporal." },
      { q: "¿Tengo que dejar mis medicamentos?", a: "No. Cualquier cambio en tu tratamiento lo define tu médico tratante. La toxina se suma a tu manejo." },
      { q: "¿Quién no se la puede aplicar?", a: "No está indicada en embarazo, lactancia, enfermedades neuromusculares, infección en la zona ni alergia a los componentes. Un dolor de cabeza nuevo o distinto requiere estudio antes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Toxina botulínica para migraña",
  },

  // ── Ácido hialurónico (página general) ────────────────────────────────────
  {
    slug: "acido-hialuronico",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Ácido hialurónico",
    resultados: [
      "surcos-nasogenianos",
      "ojeras-acido-hialuronico",
      "perfilado-mandibular",
      "volumen-menton",
      "rinomodelacion",
      "labios-acido-hialuronico",
    ],
    relacionados: ["relleno-de-labios", "rinomodelacion", "ojeras-acido-hialuronico"],
    hero: {
      eyebrow: "Armonización con inyectables",
      titulo: "Tu rostro en equilibrio,",
      tituloEm: "fresco y natural, nunca exagerado",
      sub: "Armonización con ácido hialurónico. Trabajamos el rostro como un todo, buscando equilibrio, proporción y naturalidad, y todo parte de un diagnóstico con analizador facial.",
    },
    seo: {
      title: "Ácido hialurónico en Medellín | Clínica Quantum",
      description:
        "Ácido hialurónico en El Poblado, Medellín: labios, nariz, pómulos, mentón, mandíbula, ojeras y surcos. Armonización natural con diagnóstico facial.",
      keywords: ["ácido hialurónico medellín", "rellenos faciales medellín", "armonización facial medellín", "precio ácido hialurónico medellín", "ácido hialurónico el poblado"],
    },
    ficha: {
      duracion: "30 a 60 min según zonas",
      sesiones: "1 sesión, con plan por fases",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Notas que tu rostro perdió volumen o se ve cansado",
        "Quieres mejorar la proporción de labios, nariz, mentón o mandíbula",
        "Buscas resultados visibles sin cirugía",
        "Prefieres un cambio natural, planeado por fases",
        "Quieres mejorar la hidratación y calidad de tu piel",
      ],
      noIdeal: [
        "Buscas un cambio drástico o un rostro distinto al tuyo",
        "Estás en embarazo o lactancia",
        "Tienes una infección activa en la zona o una enfermedad autoinmune no controlada",
        "Tienes flacidez muy marcada que requiere otro tipo de manejo",
      ],
    },
    problema: {
      titulo: "Cuando te miras y algo no está en proporción",
      parrafos: [
        "Ojeras que te hacen ver cansada aunque duermas bien, pómulos que se aplanan, surcos que marcan la expresión o un perfil que sientes desbalanceado. Con los años el rostro pierde volumen y soporte, y cada zona afecta a las demás.",
        "Tratar una sola arruga rara vez resuelve lo que ves. Por eso miramos el rostro completo y proponemos lo que realmente aporta equilibrio, con un resultado que se ve como tú en tu mejor versión.",
      ],
    },
    queEs: {
      titulo: "Qué es el ácido hialurónico",
      desc: "Es una molécula que tu cuerpo produce de forma natural y que retiene agua en la piel. En medicina estética se usa en forma de gel inyectable con dos grandes propósitos: dar estructura y volumen en zonas como pómulos, mentón, mandíbula, nariz, labios, ojeras y surcos, o hidratar la piel en profundidad, como en el skinbooster. No es permanente: el organismo lo reabsorbe con el tiempo. Como información general, cuando es necesario puede disolverse con una enzima llamada hialuronidasa, lo que el personal médico evalúa en cada caso.",
    },
    beneficios: ["Diagnóstico con analizador facial", "Resultado visible desde el primer día", "Sin cirugía", "Plan por fases", "Reabsorbible"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◡", label: "Labios", desc: "Volumen, contorno e hidratación sin efecto inflado." },
      { icon: "◇", label: "Nariz", desc: "Rinomodelación del perfil y la punta sin cirugía." },
      { icon: "◠", label: "Pómulos y tercio medio", desc: "Estructura, definición y soporte para el rostro." },
      { icon: "▽", label: "Mentón y mandíbula", desc: "Proyección del mentón y contorno mandibular definido." },
      { icon: "∪", label: "Ojeras y surcos", desc: "Mirada descansada y pliegues nasogenianos y de marioneta suavizados." },
      { icon: "✦", label: "Skinbooster", desc: "Hidratación profunda para una piel más luminosa." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Analizamos proporciones, volumen y calidad de piel. Con esa información definimos contigo prioridades y un plan que puede hacerse por fases.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación por zonas", desc: "Limpiamos y preparamos la piel, y aplicamos el ácido hialurónico en los puntos definidos, con la técnica que el personal médico elige según la zona.", detail: "30 a 60 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "El cambio se ve desde el primer día y se asienta cuando baja la inflamación. Te damos indicaciones de cuidado y definimos contigo el control.", detail: "Se asienta en unas 2 semanas" },
    ],
    seguridad: [
      { num: "01", title: "El rostro como un todo", desc: "Diagnóstico con analizador facial para trabajar proporción y equilibrio, no zonas sueltas." },
      { num: "02", title: "Conocimiento anatómico", desc: "Inyectar en el rostro exige conocer vasos y estructuras. Lo realiza personal médico bajo la dirección médica de la Dra. Daniela Díez." },
      { num: "03", title: "Menos es más", desc: "Preferimos avanzar por fases antes que sobrecargar. El objetivo es que te veas descansada, no distinta." },
      { num: "04", title: "Honestidad sobre los riesgos", desc: "Te explicamos los efectos esperados y las complicaciones poco frecuentes, y cómo actuamos si se presentan." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Cuéntanos si has tenido herpes, alergias o rellenos previos",
        "Llega sin maquillaje en la zona",
        "Evita procedimientos dentales cercanos a la fecha",
      ],
      despues: [
        "No masajees ni presiones la zona salvo indicación",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Aplica frío suave si hay inflamación",
        "Es normal ver inflamación, enrojecimiento o morados leves unos días",
        "Consulta de inmediato si notas dolor intenso, cambio de color de la piel o palidez en la zona",
      ],
    },
    precio: {
      desde: 800000,
      opciones: [
        { label: "Rinomodelación", detalle: "1 jeringa", valor: 1300000 },
        { label: "Labios", detalle: "1 jeringa", valor: 1200000 },
        { label: "Definición de pómulos", detalle: "≈2 jeringas · precio por jeringa", valor: 1200000 },
        { label: "Volumen de mentón", detalle: "≈2 jeringas · precio por jeringa", valor: 1200000 },
        { label: "Surcos nasogenianos", detalle: "1 jeringa", valor: 1200000 },
        { label: "Líneas de marioneta", detalle: "1 jeringa", valor: 1200000 },
        { label: "Ojeras", detalle: "1 jeringa", valor: 1200000 },
        { label: "Soporte tercio medio", detalle: "≈2 jeringas · precio por jeringa", valor: 1200000 },
        { label: "Perfilado mandibular", detalle: "≈4 jeringas · precio por jeringa", valor: 1200000 },
        { label: "Skinbooster", detalle: "1 jeringa", valor: 800000 },
      ],
      incluye: [
        "Valoración médica previa",
        "Diagnóstico con analizador facial",
        "Ácido hialurónico según la zona y el número de jeringas",
        "Indicaciones de cuidado",
      ],
      nota: "En las zonas marcadas con ≈2 o ≈4 jeringas, el valor es por jeringa: es la cantidad que suele requerirse, y el número exacto lo define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta el ácido hialurónico?", a: "Depende de la zona. La jeringa para labios, ojeras, surcos y líneas de marioneta tiene un valor desde $1.200.000, la rinomodelación desde $1.300.000 y el skinbooster desde $800.000. Puedes ver la tabla completa arriba." },
      { q: "¿Qué significa ≈2 jeringas o ≈4 jeringas?", a: "En pómulos, mentón y tercio medio suelen requerirse cerca de 2 jeringas, y en perfilado mandibular cerca de 4. El valor de la tabla es por jeringa, y la cantidad exacta la definimos en la valoración según tu rostro." },
      { q: "¿Duele?", a: "Se siente como pinchazos y presión. Según la zona puede usarse anestesia tópica, y muchos productos incluyen anestésico. La mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura el resultado?", a: "Habitualmente de varios meses a alrededor de un año, según la zona, el producto y tu metabolismo. Las zonas con más movimiento, como los labios, suelen durar menos." },
      { q: "¿Voy a quedar con la cara inflada?", a: "No es nuestro enfoque. Trabajamos por proporción y por fases, y preferimos quedarnos cortos antes que sobrecargar." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Lo habitual es inflamación, enrojecimiento, sensibilidad y morados leves que ceden en días. Las complicaciones serias, como la afectación de un vaso sanguíneo, son poco frecuentes; por eso lo realiza personal médico y te indicamos qué señales vigilar." },
      { q: "¿Se puede revertir?", a: "Como información general, el ácido hialurónico puede disolverse con hialuronidasa cuando hay una indicación médica. Si llegara a ser necesario, lo evalúa el personal médico en tu caso." },
      { q: "¿Quién no se lo puede aplicar?", a: "No está indicado en embarazo, lactancia, infección activa en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Ácido hialurónico",
  },

  // ── Labios con ácido hialurónico ──────────────────────────────────────────
  {
    slug: "relleno-de-labios",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Labios con ácido hialurónico",
    resultados: ["labios-acido-hialuronico"],
    relacionados: ["acido-hialuronico", "rinomodelacion", "volumen-de-menton"],
    hero: {
      eyebrow: "Ácido hialurónico · Labios",
      titulo: "Labios que se ven tuyos,",
      tituloEm: "más definidos, nunca inflados",
      sub: "Volumen, contorno e hidratación a tu medida. Diseñamos labios proporcionados y naturales, sin el efecto inflado, con criterio médico y un diagnóstico de tu rostro completo.",
    },
    seo: {
      title: "Relleno de labios en Medellín | Clínica Quantum",
      description:
        "Labios con ácido hialurónico en El Poblado, Medellín: volumen, contorno e hidratación a tu medida, proporcionados con tu rostro y sin efecto inflado.",
      keywords: ["relleno de labios medellín", "aumento de labios medellín", "ácido hialurónico labios", "labios naturales medellín", "precio relleno de labios medellín"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión",
      recuperacion: "Inflamación leve de 2 a 5 días",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Sientes tus labios delgados o sin definición",
        "Quieres corregir una asimetría entre labio superior e inferior",
        "Tus labios se ven resecos o con líneas finas",
        "Buscas un cambio sutil que se vea natural",
      ],
      noIdeal: [
        "Buscas un volumen exagerado o desproporcionado con tu rostro",
        "Tienes herpes labial activo o una infección en la zona",
        "Estás en embarazo o lactancia",
        "Tienes alergia a los componentes del producto",
      ],
    },
    problema: {
      titulo: "El miedo a quedar con labios exagerados",
      parrafos: [
        "Quieres labios con más forma, pero te frena la idea de verte artificial. Es el temor más común, y es válido: los resultados inflados existen y se notan.",
        "Un buen resultado no se ve como relleno. Se ve como unos labios hidratados, definidos y en proporción con tu nariz, tu mentón y tu sonrisa. Por eso diseñamos contigo antes de aplicar.",
      ],
    },
    queEs: {
      titulo: "Qué es el relleno de labios con ácido hialurónico",
      desc: "Es la aplicación de un gel de ácido hialurónico, una molécula que tu cuerpo produce, para aportar volumen, definir el contorno e hidratar los labios. El diseño se basa en la proporción de tu rostro: a veces el cambio está en el borde, otras en el volumen o en la simetría. No es permanente, porque el organismo lo reabsorbe con el tiempo, y como información general puede disolverse con hialuronidasa si hay una indicación médica.",
    },
    beneficios: ["Resultado proporcionado", "Contorno más definido", "Hidratación visible", "Procedimiento ambulatorio", "Reabsorbible"],
    zonasTitulo: "Qué podemos lograr",
    zonas: [
      { icon: "◡", label: "Volumen", desc: "Aumento medido, acordado contigo en la valoración." },
      { icon: "◠", label: "Contorno", desc: "Definición del borde y del arco de cupido." },
      { icon: "✦", label: "Hidratación", desc: "Labios con mejor textura y menos líneas finas." },
      { icon: "◇", label: "Simetría", desc: "Equilibrio entre labio superior e inferior." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico y diseño", desc: "Analizamos tu rostro con el analizador facial y la forma de tus labios. Definimos contigo cuánto volumen y qué forma se ve armónica en ti.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación", desc: "Preparamos la zona y aplicamos el ácido hialurónico de forma gradual, revisando la simetría durante el procedimiento.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "El cambio se ve de inmediato; la inflamación baja en pocos días y el resultado se asienta. Te indicamos cuándo volver a control.", detail: "Se asienta en unas 2 semanas" },
    ],
    seguridad: [
      { num: "01", title: "Diseño antes que volumen", desc: "Acordamos la forma y la cantidad antes de aplicar, con base en la proporción de tu rostro." },
      { num: "02", title: "Aplicación gradual", desc: "Avanzamos poco a poco y revisamos la simetría. Siempre es posible sumar en otra sesión." },
      { num: "03", title: "Anatomía del labio", desc: "El labio tiene una irrigación importante; lo realiza personal médico bajo la dirección médica de la Dra. Daniela Díez." },
      { num: "04", title: "Señales que vigilamos contigo", desc: "Te explicamos qué es normal después y qué síntomas requieren consulta inmediata." },
    ],
    cuidados: {
      antes: [
        "Si has tenido herpes labial, avísanos antes de la cita",
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Llega sin labial ni maquillaje en la zona",
        "Evita tratamientos dentales cercanos a la fecha",
      ],
      despues: [
        "No presiones ni masajees los labios salvo indicación",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Aplica frío suave si hay inflamación",
        "Espera 24 horas para usar labial",
        "Consulta de inmediato si notas dolor intenso o cambio de color en la zona",
      ],
    },
    precio: {
      desde: 1200000,
      opciones: [{ label: "1 jeringa", valor: 1200000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "1 jeringa de ácido hialurónico", "Indicaciones de cuidado"],
      nota: "Si tu diseño requiere algo distinto a 1 jeringa, lo conversamos en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta el relleno de labios?", a: "La jeringa tiene un valor desde $1.200.000. En la valoración confirmamos que es la cantidad adecuada para el resultado que buscas." },
      { q: "¿Voy a quedar con labios exagerados?", a: "No es nuestro enfoque. El diseño se acuerda contigo y la aplicación es gradual. Es más fácil sumar en otra sesión que quitar." },
      { q: "¿Duele?", a: "Los labios son sensibles. Puede usarse anestesia tópica y muchos productos incluyen anestésico, así que la mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura el resultado?", a: "Habitualmente varios meses, según el producto y tu metabolismo. Los labios se mueven mucho, por eso suelen durar menos que otras zonas." },
      { q: "¿Cuánto tiempo estaré inflamada?", a: "La inflamación suele ser más notoria las primeras 24 a 48 horas y baja en pocos días. Puede haber algún morado leve." },
      { q: "¿Qué pasa si no me gusta?", a: "Como información general, el ácido hialurónico puede disolverse con hialuronidasa cuando hay una indicación médica. Lo evalúa el personal médico en tu caso." },
      { q: "¿Se puede combinar con otras zonas?", a: "Sí. A veces el equilibrio del perfil mejora más al trabajar también el mentón o la nariz. Lo vemos en el diagnóstico facial." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado con herpes labial activo, infección en la zona, embarazo, lactancia, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Labios con ácido hialurónico",
  },

  // ── Rinomodelación ────────────────────────────────────────────────────────
  {
    slug: "rinomodelacion",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Rinomodelación",
    resultados: ["rinomodelacion"],
    relacionados: ["alectomia", "volumen-de-menton", "relleno-de-labios"],
    hero: {
      eyebrow: "Ácido hialurónico · Rinomodelación",
      titulo: "Un perfil más armónico,",
      tituloEm: "sin pasar por cirugía",
      sub: "Mejora el perfil y la punta de la nariz sin cirugía, buscando mayor armonía y proporción facial. Una zona delicada que trabajamos con criterio médico y diagnóstico previo.",
    },
    seo: {
      title: "Rinomodelación en Medellín | Clínica Quantum",
      description:
        "Rinomodelación con ácido hialurónico en El Poblado, Medellín: mejora el perfil y la punta de la nariz sin cirugía, con armonía y proporción facial.",
      keywords: ["rinomodelación medellín", "rinomodelación precio medellín", "nariz sin cirugía medellín", "ácido hialurónico nariz", "corregir giba nasal sin cirugía"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Tienes una giba o dorso irregular que quieres disimular",
        "Sientes la punta de la nariz caída o poco proyectada",
        "Buscas mejorar el perfil sin cirugía",
        "Quieres probar un cambio antes de pensar en una rinoplastia",
      ],
      noIdeal: [
        "Buscas reducir el tamaño de la nariz: el ácido hialurónico suma, no quita",
        "Quieres afinar las aletas nasales: para eso existe la alectomía",
        "Tuviste cirugía nasal reciente o tienes problemas respiratorios sin estudiar",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Ese perfil que evitas en las fotos",
      parrafos: [
        "Te fijas en la giba cuando te ves de lado, o sientes que la punta cae cuando sonríes. Pensar en una cirugía asusta por la recuperación y por lo definitivo.",
        "La rinomodelación puede equilibrar el perfil agregando volumen en puntos precisos. No reduce la nariz, pero sí la hace verse más recta y proporcionada con el resto de tu rostro.",
      ],
    },
    queEs: {
      titulo: "Qué es la rinomodelación",
      desc: "Es la aplicación de ácido hialurónico en puntos específicos de la nariz para camuflar irregularidades del dorso, dar soporte a la punta o mejorar el ángulo con el labio. Al rellenar las zonas que están por debajo de la línea ideal, el perfil se ve más recto y armónico. No cambia el tamaño de la nariz ni corrige problemas respiratorios. La nariz tiene una irrigación delicada, por eso se hace con diagnóstico previo y por personal médico.",
    },
    beneficios: ["Perfil más recto", "Punta con más soporte", "Sin cirugía", "Resultado desde el primer día"],
    zonasTitulo: "Qué podemos mejorar",
    zonas: [
      { icon: "◇", label: "Dorso nasal", desc: "Camuflaje de la giba para un perfil más recto." },
      { icon: "▽", label: "Punta", desc: "Más soporte y proyección en la punta." },
      { icon: "◠", label: "Ángulo nasolabial", desc: "Mejor relación entre la nariz y el labio." },
      { icon: "○", label: "Armonía del perfil", desc: "Equilibrio de la nariz con frente, labios y mentón." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Estudiamos tu perfil y las proporciones de tu rostro, revisamos antecedentes de cirugía o traumas y definimos si la rinomodelación es para ti.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en puntos precisos", desc: "Aplicamos pequeñas cantidades de ácido hialurónico en los puntos definidos, vigilando la piel durante todo el procedimiento.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "El perfil se ve distinto desde el primer día. Te explicamos los cuidados y las señales que debes vigilar, y definimos el control.", detail: "1 jeringa" },
    ],
    seguridad: [
      { num: "01", title: "Una zona que exige experiencia anatómica", desc: "La nariz tiene vasos importantes. Lo realiza personal médico bajo la dirección médica de la Dra. Daniela Díez." },
      { num: "02", title: "Antecedentes primero", desc: "Una cirugía nasal previa cambia la anatomía; lo revisamos antes de decidir." },
      { num: "03", title: "Pequeñas cantidades", desc: "Aplicamos de forma gradual y observamos la piel en todo momento." },
      { num: "04", title: "Señales de alarma explicadas", desc: "Te decimos con claridad qué es normal después y qué requiere consulta inmediata." },
    ],
    cuidados: {
      antes: [
        "Cuéntanos si tuviste cirugía, fractura o golpes en la nariz",
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Llega sin maquillaje",
      ],
      despues: [
        "No uses gafas que se apoyen en la nariz durante los primeros días",
        "No masajees ni presiones la zona",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Es normal un poco de inflamación o sensibilidad",
        "Consulta de inmediato si notas dolor intenso, palidez o cambio de color en la piel",
      ],
    },
    precio: {
      desde: 1300000,
      opciones: [{ label: "1 jeringa", valor: 1300000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "1 jeringa de ácido hialurónico", "Indicaciones de cuidado y señales de alarma"],
      nota: "La valoración confirma si tu perfil se beneficia de la rinomodelación.",
    },
    faq: [
      { q: "¿Cuánto cuesta la rinomodelación?", a: "Tiene un valor desde $1.300.000 e incluye 1 jeringa de ácido hialurónico. Antes confirmamos en la valoración que es adecuada para tu nariz." },
      { q: "¿Me puede hacer la nariz más pequeña?", a: "No. El ácido hialurónico agrega volumen: camufla la giba y da soporte a la punta, pero no reduce el tamaño. Para eso la opción es quirúrgica." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos pequeños. La mayoría lo describe como una molestia tolerable y breve." },
      { q: "¿Cuánto dura?", a: "Habitualmente varios meses a alrededor de un año, según el producto y tu metabolismo. Es una zona con poco movimiento, lo que favorece la duración." },
      { q: "¿Es riesgosa?", a: "La nariz es una zona delicada por su irrigación. Las complicaciones serias son poco frecuentes, pero existen; por eso la realiza personal médico y te explicamos las señales de alarma." },
      { q: "¿Puedo hacérmela si ya tuve rinoplastia?", a: "Depende de tu caso. La anatomía cambia después de una cirugía, así que lo evaluamos con cuidado en la valoración." },
      { q: "¿Se puede combinar con otras zonas?", a: "Sí. El perfil también depende del mentón y los labios, y a veces equilibrarlos da un resultado más armónico." },
      { q: "¿Quién no se la puede hacer?", a: "No está indicada en embarazo, lactancia, infección activa en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Rinomodelación",
  },

  // ── Definición de pómulos ─────────────────────────────────────────────────
  {
    slug: "definicion-de-pomulos",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Definición de pómulos",
    resultados: [],
    relacionados: ["soporte-tercio-medio", "perfilado-mandibular", "volumen-de-menton"],
    hero: {
      eyebrow: "Ácido hialurónico · Pómulos",
      titulo: "Pómulos que dan estructura,",
      tituloEm: "luz y armonía a tu rostro",
      sub: "Realzamos y definimos los pómulos con ácido hialurónico para mejorar la estructura y armonía del rostro, con un diseño basado en tus proporciones y no en una moda.",
    },
    seo: {
      title: "Definición de pómulos en Medellín | Clínica Quantum",
      description:
        "Definición de pómulos con ácido hialurónico en El Poblado, Medellín: realza y define la estructura del rostro con un resultado armónico y natural.",
      keywords: ["pómulos con ácido hialurónico medellín", "relleno de pómulos medellín", "definir pómulos sin cirugía", "aumento de pómulos", "precio relleno pómulos medellín"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Sientes tus pómulos planos o poco marcados",
        "Notas que el rostro perdió forma en la zona media",
        "Quieres más definición en fotos y con luz lateral",
        "Buscas estructura sin que se note un relleno",
      ],
      noIdeal: [
        "Buscas pómulos muy prominentes que no van con tu rostro",
        "Tienes flacidez marcada que requiere otro tipo de manejo primero",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Cuando el rostro se ve plano",
      parrafos: [
        "Los pómulos son los que dan luz y forma a la cara. Cuando son poco marcados de nacimiento o pierden volumen con los años, el rostro se ve más plano y cansado.",
        "Definirlos devuelve estructura y ayuda a que el resto del rostro se vea más armónico, siempre que se haga en proporción con tus rasgos.",
      ],
    },
    queEs: {
      titulo: "Qué es la definición de pómulos",
      desc: "Es la aplicación de ácido hialurónico en el hueso malar y sus alrededores para realzar y definir el pómulo. Al dar estructura en esa zona, se marca el contorno del rostro y se refleja mejor la luz. Suele requerir cerca de 2 jeringas, aunque la cantidad exacta la define la valoración. No es permanente: el organismo lo reabsorbe con el tiempo.",
    },
    beneficios: ["Rostro con más estructura", "Pómulo definido", "Resultado natural", "Sin cirugía"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "◠", label: "Proyección", desc: "Un pómulo que se nota con más forma." },
      { icon: "◇", label: "Definición", desc: "Contorno más marcado entre pómulo y mejilla." },
      { icon: "✦", label: "Luz", desc: "Mejor reflejo de la luz en la zona media del rostro." },
      { icon: "○", label: "Armonía", desc: "Equilibrio con mandíbula, mentón y ojeras." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Estudiamos la forma y las proporciones de tu rostro para definir dónde y cuánto aportar.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en el pómulo", desc: "Aplicamos el ácido hialurónico en los puntos definidos y revisamos la simetría entre ambos lados.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "La definición se ve de inmediato y se asienta cuando baja la inflamación. Te indicamos los cuidados y el control.", detail: "Suele requerir ≈2 jeringas" },
    ],
    seguridad: [
      { num: "01", title: "Proporción antes que tendencia", desc: "Diseñamos según tus rasgos, no según un modelo de pómulo de moda." },
      { num: "02", title: "Simetría revisada", desc: "Comparamos ambos lados durante la aplicación." },
      { num: "03", title: "Cantidad honesta", desc: "Te decimos cuántas jeringas tiene sentido usar y por qué." },
      { num: "04", title: "Personal médico", desc: "Aplicado por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Cuéntanos si tienes rellenos o hilos previos en la zona",
        "Llega sin maquillaje",
      ],
      despues: [
        "No masajees ni presiones la zona salvo indicación",
        "Duerme boca arriba las primeras noches",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Es normal sentir sensibilidad o ver un morado leve",
        "Consulta de inmediato si notas dolor intenso o cambio de color en la piel",
      ],
    },
    precio: {
      desde: 1200000,
      opciones: [{ label: "Por jeringa", detalle: "Suele requerir ≈2 jeringas", valor: 1200000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "Ácido hialurónico según el número de jeringas definido", "Indicaciones de cuidado"],
      nota: "El valor es por jeringa. Suele requerir cerca de 2, y el número exacto lo define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El valor es desde $1.200.000 por jeringa. La definición de pómulos suele requerir cerca de 2 jeringas; el número exacto lo definimos en la valoración según tu rostro." },
      { q: "¿Por qué el precio es por jeringa?", a: "Porque la cantidad depende de tu estructura y del resultado que buscamos. Preferimos cotizar con base en lo que tu rostro necesita." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos. La mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura?", a: "Habitualmente de varios meses a alrededor de un año, según el producto y tu metabolismo." },
      { q: "¿Voy a verme con la cara inflada?", a: "No es el objetivo. Definimos el pómulo en proporción con tus rasgos y preferimos avanzar por fases." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual es inflamación, sensibilidad o un morado leve que ceden en días. Las complicaciones serias son poco frecuentes y te explicamos las señales de alarma." },
      { q: "¿Se combina con otras zonas?", a: "Sí. Suele combinarse con soporte de tercio medio, ojeras o mandíbula para un resultado más equilibrado." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Definición de pómulos",
  },

  // ── Volumen de mentón ─────────────────────────────────────────────────────
  {
    slug: "volumen-de-menton",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Volumen de mentón",
    resultados: ["volumen-menton"],
    relacionados: ["perfilado-mandibular", "rinomodelacion", "enzimas-papada"],
    hero: {
      eyebrow: "Ácido hialurónico · Mentón",
      titulo: "Un mentón con proyección,",
      tituloEm: "un perfil en equilibrio",
      sub: "Aportamos proyección al mentón para equilibrar el perfil y la proporción del rostro. Un cambio pequeño en centímetros que se nota en toda la armonía facial.",
    },
    seo: {
      title: "Volumen de mentón en Medellín | Clínica Quantum",
      description:
        "Volumen de mentón con ácido hialurónico en El Poblado, Medellín: aporta proyección y equilibra el perfil y la proporción del rostro sin cirugía.",
      keywords: ["relleno de mentón medellín", "aumento de mentón sin cirugía", "ácido hialurónico mentón", "proyección de mentón", "perfilación facial medellín"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Sientes tu mentón retraído o poco marcado de perfil",
        "Tu nariz o tus labios se ven desproporcionados por falta de mentón",
        "Quieres un perfil más definido sin cirugía",
        "Buscas equilibrar el tercio inferior del rostro",
      ],
      noIdeal: [
        "Tienes un problema de mordida que requiere manejo odontológico o quirúrgico",
        "Buscas eliminar grasa de papada: para eso hay otros tratamientos",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Cuando el perfil se ve incompleto",
      parrafos: [
        "Te ves de lado y sientes que algo falta. Un mentón poco proyectado hace que la nariz parezca más grande, que el cuello se vea menos definido y que el rostro pierda equilibrio.",
        "Dar proyección al mentón es de los cambios que más armonizan el perfil. Es sutil en cantidad, pero se nota en todo el rostro.",
      ],
    },
    queEs: {
      titulo: "Qué es el volumen de mentón",
      desc: "Es la aplicación de ácido hialurónico en el mentón para aportar proyección hacia adelante o hacia abajo, según lo que necesite tu perfil. Mejora la relación entre nariz, labios y mentón, y ayuda a definir el tercio inferior. Suele requerir cerca de 2 jeringas, y la cantidad exacta la define la valoración. No reemplaza tratamientos de mordida ni reduce la grasa de la papada.",
    },
    beneficios: ["Perfil más equilibrado", "Mentón con proyección", "Sin cirugía", "Resultado desde el primer día"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "▽", label: "Proyección", desc: "Un mentón que se adelanta y define el perfil." },
      { icon: "◇", label: "Proporción", desc: "Mejor relación entre nariz, labios y mentón." },
      { icon: "◡", label: "Tercio inferior", desc: "Contorno más definido en la parte baja del rostro." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Analizamos tu perfil y las proporciones del rostro para definir cuánta proyección aporta armonía.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en el mentón", desc: "Aplicamos el ácido hialurónico en los puntos definidos y revisamos el perfil durante el procedimiento.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "El cambio de perfil se ve de inmediato y se asienta en los días siguientes. Te damos cuidados y definimos el control.", detail: "Suele requerir ≈2 jeringas" },
    ],
    seguridad: [
      { num: "01", title: "Perfil completo", desc: "Evaluamos nariz, labios y mandíbula antes de decidir cuánto proyectar." },
      { num: "02", title: "Límites claros", desc: "Si tu caso es de mordida o de estructura ósea, te lo decimos y te orientamos." },
      { num: "03", title: "Cantidad honesta", desc: "Te explicamos cuántas jeringas tienen sentido y por qué." },
      { num: "04", title: "Personal médico", desc: "Aplicado por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Evita tratamientos dentales cercanos a la fecha",
        "Llega sin maquillaje",
      ],
      despues: [
        "No masajees ni presiones la zona salvo indicación",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Aplica frío suave si hay inflamación",
        "Es normal sentir sensibilidad o ver un morado leve",
        "Consulta de inmediato si notas dolor intenso o cambio de color en la piel",
      ],
    },
    precio: {
      desde: 1200000,
      opciones: [{ label: "Por jeringa", detalle: "Suele requerir ≈2 jeringas", valor: 1200000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "Ácido hialurónico según el número de jeringas definido", "Indicaciones de cuidado"],
      nota: "El valor es por jeringa. Suele requerir cerca de 2, y el número exacto lo define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El valor es desde $1.200.000 por jeringa. El volumen de mentón suele requerir cerca de 2 jeringas; el número exacto lo definimos en la valoración." },
      { q: "¿Por qué el precio es por jeringa?", a: "Porque la proyección que necesita cada perfil es distinta. Cotizamos según lo que tu rostro requiere." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos. La mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura?", a: "Habitualmente de varios meses a alrededor de un año, según el producto y tu metabolismo." },
      { q: "¿Sirve para la papada?", a: "No elimina grasa, aunque un mentón con más proyección puede hacer que el contorno se vea más definido. Para la grasa de la papada existen otros tratamientos." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual es inflamación, sensibilidad o un morado leve que ceden en días. Las complicaciones serias son poco frecuentes y te explicamos las señales de alarma." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, infección activa en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Volumen de mentón",
  },

  // ── Surcos nasogenianos ───────────────────────────────────────────────────
  {
    slug: "surcos-nasogenianos",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Surcos nasogenianos",
    resultados: ["surcos-nasogenianos"],
    relacionados: ["lineas-de-marioneta", "soporte-tercio-medio", "long-lasting"],
    hero: {
      eyebrow: "Ácido hialurónico · Surcos nasogenianos",
      titulo: "Suaviza los surcos,",
      tituloEm: "recupera una expresión descansada",
      sub: "Suavizamos los pliegues que van de la nariz a la boca con ácido hialurónico, evaluando también el soporte del rostro para que el resultado se vea natural.",
    },
    seo: {
      title: "Surcos nasogenianos en Medellín | Clínica Quantum",
      description:
        "Relleno de surcos nasogenianos con ácido hialurónico en El Poblado, Medellín: suaviza los pliegues de la nariz a la boca para un rostro más descansado.",
      keywords: ["surcos nasogenianos medellín", "relleno de surcos nasogenianos", "ácido hialurónico surcos", "líneas de la nariz a la boca", "rellenos faciales el poblado"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Notas pliegues marcados de la nariz a la boca",
        "Sientes que esos surcos te hacen ver cansada o seria",
        "Quieres suavizarlos sin cambiar tu expresión",
        "Buscas un resultado natural, sin rellenar de más",
      ],
      noIdeal: [
        "El surco se debe a flacidez marcada que requiere otro manejo primero",
        "Buscas borrar por completo un pliegue natural de la expresión",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Esos surcos que te hacen ver cansada",
      parrafos: [
        "Te ves en el espejo y los pliegues entre la nariz y la boca se notan más que antes, incluso cuando no sonríes. Le dan al rostro un aire de cansancio que no refleja cómo te sientes.",
        "Muchas veces el surco se marca porque la zona media perdió soporte. Por eso lo miramos en contexto: suavizarlo con criterio se ve natural; rellenarlo de más no.",
      ],
    },
    queEs: {
      titulo: "Qué es el relleno de surcos nasogenianos",
      desc: "Es la aplicación de ácido hialurónico en el pliegue que va de la nariz a la comisura de la boca para suavizarlo. Un surco nasogeniano forma parte de la expresión natural, así que el objetivo es atenuarlo, no borrarlo. Cuando el surco se debe a pérdida de soporte en la zona media, a veces conviene tratar también ese soporte. No es permanente: el organismo lo reabsorbe con el tiempo.",
    },
    beneficios: ["Surcos más suaves", "Expresión descansada", "Resultado natural", "Sin cirugía"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "∪", label: "Surco nasogeniano", desc: "El pliegue de la nariz a la boca se ve más suave." },
      { icon: "◡", label: "Comisuras", desc: "Transición más suave hacia las comisuras de la boca." },
      { icon: "○", label: "Expresión", desc: "Un rostro que se ve menos cansado en reposo." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Evaluamos el surco y el soporte de la zona media para definir si basta con suavizarlo o conviene un plan más completo.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en el surco", desc: "Aplicamos el ácido hialurónico a lo largo del pliegue, de forma gradual, cuidando que la expresión se mantenga natural.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "El surco se ve más suave de inmediato y el resultado se asienta en los días siguientes. Te damos cuidados y definimos el control.", detail: "1 jeringa" },
    ],
    seguridad: [
      { num: "01", title: "Suavizar, no borrar", desc: "Un pliegue natural no se elimina; se atenúa para que la expresión no se vea rígida." },
      { num: "02", title: "Causa antes que síntoma", desc: "Si el surco viene de pérdida de soporte, te lo explicamos para no sobrecargar la zona." },
      { num: "03", title: "Anatomía de la zona", desc: "Es un área con vasos importantes; lo realiza personal médico bajo la dirección médica de la Dra. Daniela Díez." },
      { num: "04", title: "Señales de alarma explicadas", desc: "Te decimos qué es normal después y qué requiere consulta inmediata." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Cuéntanos si tienes rellenos previos en la zona",
        "Llega sin maquillaje",
      ],
      despues: [
        "No masajees ni presiones la zona salvo indicación",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Aplica frío suave si hay inflamación",
        "Es normal sentir sensibilidad o ver un morado leve",
        "Consulta de inmediato si notas dolor intenso o cambio de color en la piel",
      ],
    },
    precio: {
      desde: 1200000,
      opciones: [{ label: "1 jeringa", valor: 1200000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "1 jeringa de ácido hialurónico", "Indicaciones de cuidado"],
      nota: "Si tu caso requiere trabajar también el soporte del rostro, lo conversamos en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "La jeringa tiene un valor desde $1.200.000. En la valoración confirmamos si es suficiente para tu caso." },
      { q: "¿Se borran por completo?", a: "No es el objetivo. El surco es parte de la expresión natural; lo suavizamos para que el rostro se vea descansado sin verse rígido." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos. Puede usarse anestesia tópica y la mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura?", a: "Habitualmente varios meses, según el producto, tu metabolismo y el movimiento de la zona." },
      { q: "¿Por qué me hablan de tratar el pómulo?", a: "Porque muchas veces el surco se marca por pérdida de soporte en la zona media. Tratar solo el surco puede quedarse corto o sobrecargarlo." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual es inflamación, sensibilidad o un morado leve que ceden en días. Las complicaciones serias son poco frecuentes y te explicamos las señales de alarma." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, infección activa en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Surcos nasogenianos",
  },

  // ── Líneas de marioneta ───────────────────────────────────────────────────
  {
    slug: "lineas-de-marioneta",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Líneas de marioneta",
    resultados: ["surcos-nasogenianos"],
    relacionados: ["surcos-nasogenianos", "perfilado-mandibular", "sculptra"],
    hero: {
      eyebrow: "Ácido hialurónico · Líneas de marioneta",
      titulo: "Adiós al gesto de tristeza,",
      tituloEm: "hola a una expresión serena",
      sub: "Suavizamos las líneas de marioneta, conocidas como líneas de amargura, con ácido hialurónico para que tu rostro en reposo no transmita un cansancio que no sientes.",
    },
    seo: {
      title: "Líneas de marioneta en Medellín | Clínica Quantum",
      description:
        "Líneas de marioneta con ácido hialurónico en El Poblado, Medellín: suaviza las líneas de amargura junto a la boca para una expresión más serena y fresca.",
      keywords: ["líneas de marioneta medellín", "líneas de amargura tratamiento", "relleno líneas de marioneta", "comisuras caídas tratamiento", "ácido hialurónico boca"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Notas líneas que bajan desde las comisuras hacia el mentón",
        "Te dicen que te ves triste o molesta cuando estás en reposo",
        "Sientes las comisuras de la boca caídas",
        "Buscas suavizar la zona sin cambiar tu sonrisa",
      ],
      noIdeal: [
        "La línea se debe a flacidez marcada de la mandíbula que requiere otro manejo",
        "Buscas un cambio inmediato de todo el tercio inferior con una sola jeringa",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Cuando tu rostro dice algo que no sientes",
      parrafos: [
        "Estás tranquila y aun así te preguntan si pasa algo. Las líneas que bajan desde las comisuras dan un gesto de tristeza o amargura que no tiene nada que ver con tu ánimo.",
        "Suavizarlas cambia la lectura de tu expresión. El objetivo no es transformar tu rostro, sino que refleje cómo te sientes.",
      ],
    },
    queEs: {
      titulo: "Qué es el tratamiento de líneas de marioneta",
      desc: "Es la aplicación de ácido hialurónico en las líneas que van de las comisuras de la boca hacia el mentón, conocidas como líneas de amargura, y en el soporte de las comisuras. Al rellenar la depresión de la zona, la línea se suaviza y la comisura se ve menos caída. Cuando la causa principal es la pérdida de soporte de la mandíbula, la valoración puede sugerir tratar también esa zona.",
    },
    beneficios: ["Líneas de amargura suavizadas", "Comisuras con más soporte", "Expresión serena", "Sin cirugía"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "∪", label: "Líneas de marioneta", desc: "Las líneas junto a la boca se ven más suaves." },
      { icon: "◡", label: "Comisuras", desc: "Menos aspecto de boca caída en reposo." },
      { icon: "○", label: "Expresión", desc: "Un gesto más sereno y descansado." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Evaluamos las líneas, las comisuras y el soporte del tercio inferior para definir el plan adecuado.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación en la zona", desc: "Aplicamos el ácido hialurónico de forma gradual en las líneas y el soporte de las comisuras, revisando la simetría.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "La zona se ve más suave de inmediato y se asienta en los días siguientes. Te damos cuidados y definimos el control.", detail: "1 jeringa" },
    ],
    seguridad: [
      { num: "01", title: "Lectura de la causa", desc: "Distinguimos si la línea es por volumen o por soporte mandibular antes de proponer un plan." },
      { num: "02", title: "Sonrisa intacta", desc: "Aplicamos cuidando el movimiento de la boca para que no se vea rígida." },
      { num: "03", title: "Expectativas claras", desc: "Te explicamos qué puede lograr una jeringa y cuándo conviene un plan por fases." },
      { num: "04", title: "Personal médico", desc: "Aplicado por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Evita tratamientos dentales cercanos a la fecha",
        "Llega sin maquillaje",
      ],
      despues: [
        "No masajees ni presiones la zona salvo indicación",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Evita gestos exagerados con la boca el primer día",
        "Es normal sentir sensibilidad o ver un morado leve",
        "Consulta de inmediato si notas dolor intenso o cambio de color en la piel",
      ],
    },
    precio: {
      desde: 1200000,
      opciones: [{ label: "1 jeringa", valor: 1200000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "1 jeringa de ácido hialurónico", "Indicaciones de cuidado"],
      nota: "Si tu caso requiere trabajar también el soporte mandibular, lo conversamos en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "La jeringa tiene un valor desde $1.200.000. En la valoración confirmamos si es suficiente para tu caso." },
      { q: "¿Qué diferencia hay con los surcos nasogenianos?", a: "Los surcos van de la nariz a la boca; las líneas de marioneta bajan desde las comisuras hacia el mentón. Pueden tratarse por separado o juntas." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos. La mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura?", a: "Habitualmente varios meses, según el producto, tu metabolismo y el movimiento de la zona." },
      { q: "¿Me va a cambiar la sonrisa?", a: "No debería. Aplicamos cuidando el movimiento de la boca. Los primeros días puedes sentir la zona un poco tensa por la inflamación." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual es inflamación, sensibilidad o un morado leve que ceden en días. Las complicaciones serias son poco frecuentes y te explicamos las señales de alarma." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, infección activa en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Líneas de marioneta",
  },

  // ── Ojeras con ácido hialurónico ──────────────────────────────────────────
  {
    slug: "ojeras-acido-hialuronico",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Ojeras con ácido hialurónico",
    resultados: ["ojeras-acido-hialuronico"],
    relacionados: ["ojeras-mesoterapia", "soporte-tercio-medio", "skinbooster"],
    hero: {
      eyebrow: "Ácido hialurónico · Ojeras",
      titulo: "Una mirada fresca,",
      tituloEm: "descansada aunque el día sea largo",
      sub: "Mejoramos la apariencia de la zona periocular para una mirada más fresca, uniforme y descansada. Una zona delicada que solo tratamos después de entender el origen de tu ojera.",
    },
    seo: {
      title: "Ojeras con ácido hialurónico en Medellín | Clínica Quantum",
      description:
        "Ojeras con ácido hialurónico en El Poblado, Medellín: mejora la zona periocular para una mirada más fresca, uniforme y descansada, con valoración médica.",
      keywords: ["ojeras con ácido hialurónico medellín", "relleno de ojeras medellín", "tratamiento ojeras hundidas", "surco lagrimal ácido hialurónico", "precio relleno ojeras medellín"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Visibles pronto; duran meses",
    },
    paraQuien: {
      ideal: [
        "Tienes ojeras hundidas que dan sombra aunque duermas bien",
        "Te dicen que te ves cansada sin estarlo",
        "El corrector no logra disimular la sombra",
        "Quieres una mirada más fresca sin cirugía",
      ],
      noIdeal: [
        "Tu ojera es sobre todo de color o pigmento: suele responder mejor a otros tratamientos",
        "Tienes bolsas marcadas o retención de líquido en la zona",
        "Tienes piel muy delgada con flacidez importante bajo el ojo",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Te ves cansada aunque hayas dormido bien",
      parrafos: [
        "Duermes tus horas, te cuidas, y aun así la sombra bajo los ojos sigue ahí. Te preguntan si estás cansada y el corrector solo la disimula a medias.",
        "No todas las ojeras son iguales. Cuando la sombra se debe a un hundimiento, el ácido hialurónico puede suavizarla. Cuando es de pigmento o hay bolsas, te lo decimos y buscamos otra alternativa.",
      ],
    },
    queEs: {
      titulo: "Qué es el tratamiento de ojeras con ácido hialurónico",
      desc: "Es la aplicación de pequeñas cantidades de ácido hialurónico en el surco bajo el ojo para suavizar el hundimiento que genera sombra. Al nivelar la transición entre el párpado y la mejilla, la mirada se ve más descansada y uniforme. Funciona mejor en ojeras hundidas; las de pigmento o con bolsas suelen requerir otro enfoque. Es una zona delicada que requiere diagnóstico previo y aplicación cuidadosa.",
    },
    beneficios: ["Mirada descansada", "Menos sombra bajo el ojo", "Aplicación cuidadosa", "Sin cirugía"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "◡", label: "Surco lagrimal", desc: "Menos hundimiento bajo el ojo." },
      { icon: "○", label: "Sombra", desc: "Una zona periocular más uniforme." },
      { icon: "◠", label: "Transición con la mejilla", desc: "Paso más suave entre párpado y pómulo." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico del tipo de ojera", desc: "Con el analizador facial y la exploración definimos si tu ojera es hundida, de pigmento o con bolsas, y si el ácido hialurónico es lo indicado.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación cuidadosa", desc: "Aplicamos pequeñas cantidades de ácido hialurónico de forma gradual, con la técnica que el personal médico elige para esta zona delicada.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "La sombra se suaviza pronto y el resultado se asienta cuando baja la inflamación. Te indicamos los cuidados y cuándo volver a control.", detail: "1 jeringa" },
    ],
    seguridad: [
      { num: "01", title: "Diagnóstico del origen", desc: "Si tu ojera no es de hundimiento, no la rellenamos: te orientamos hacia lo que sí funciona." },
      { num: "02", title: "Poca cantidad, mucho criterio", desc: "Bajo el ojo el exceso se nota; aplicamos de forma conservadora." },
      { num: "03", title: "Zona de alto cuidado", desc: "Por su cercanía al ojo, lo realiza personal médico bajo la dirección médica de la Dra. Daniela Díez." },
      { num: "04", title: "Señales de alarma explicadas", desc: "Te decimos con claridad qué es normal y qué síntomas requieren consulta inmediata." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Llega sin maquillaje en los ojos",
        "Cuéntanos si tienes rellenos previos o cirugía de párpados",
      ],
      despues: [
        "No frotes ni masajees la zona",
        "Duerme con la cabeza un poco elevada las primeras noches",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Es normal un poco de inflamación o un morado leve",
        "Consulta de inmediato si notas dolor intenso, cambios en la visión o cambio de color en la piel",
      ],
    },
    precio: {
      desde: 1200000,
      opciones: [{ label: "1 jeringa", valor: 1200000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "1 jeringa de ácido hialurónico", "Indicaciones de cuidado y señales de alarma"],
      nota: "La valoración define si tu tipo de ojera se beneficia del ácido hialurónico.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "La jeringa tiene un valor desde $1.200.000. Antes confirmamos en la valoración que tu tipo de ojera responde a este tratamiento." },
      { q: "¿Sirve para todo tipo de ojeras?", a: "No. Funciona mejor en ojeras hundidas. Las de pigmento o con bolsas suelen responder a otros tratamientos, como la mesoterapia de ojeras, y te lo decimos en la valoración." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos pequeños. La mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura?", a: "Habitualmente varios meses a alrededor de un año, según el producto y tu metabolismo." },
      { q: "¿Puede quedar hinchado?", a: "Los primeros días es normal un poco de inflamación. Aplicamos poca cantidad y de forma gradual justamente para evitar un aspecto abultado." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual es inflamación, sensibilidad o morados leves que ceden en días. Las complicaciones serias son poco frecuentes, pero existen, y te explicamos las señales de alarma." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, infección activa en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Ojeras con ácido hialurónico",
  },

  // ── Soporte de tercio medio ───────────────────────────────────────────────
  {
    slug: "soporte-tercio-medio",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Soporte de tercio medio",
    resultados: [],
    relacionados: ["definicion-de-pomulos", "ojeras-acido-hialuronico", "surcos-nasogenianos"],
    hero: {
      eyebrow: "Ácido hialurónico · Tercio medio",
      titulo: "Devuelve estructura al rostro,",
      tituloEm: "sin que se note el cambio",
      sub: "Recuperamos el volumen y el soporte del tercio medio para devolver estructura y armonía al rostro. Un tratamiento de base que suele mejorar también ojeras y surcos.",
    },
    seo: {
      title: "Soporte de tercio medio en Medellín | Clínica Quantum",
      description:
        "Soporte de tercio medio con ácido hialurónico en El Poblado, Medellín: recupera volumen y estructura en la zona media para un rostro armónico y fresco.",
      keywords: ["tercio medio ácido hialurónico", "pérdida de volumen facial medellín", "rellenos faciales medellín", "efecto lifting sin cirugía", "armonización facial el poblado"],
    },
    ficha: {
      duracion: "30 a 60 min",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Notas que las mejillas perdieron volumen con los años",
        "Tus surcos y ojeras se marcan más que antes",
        "Sientes el rostro más plano o cansado",
        "Buscas un efecto de soporte natural sin cirugía",
      ],
      noIdeal: [
        "Tienes flacidez muy marcada que requiere otro manejo primero",
        "Buscas volumen exagerado en las mejillas",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Cuando la zona media del rostro se desinfla",
      parrafos: [
        "Con los años las mejillas pierden volumen y lo que antes estaba arriba empieza a verse más abajo. Los surcos se marcan, la ojera se hunde y el rostro se ve cansado.",
        "Tratar cada línea por separado no devuelve esa estructura. Recuperar el soporte de la zona media sí, y con frecuencia mejora varias cosas a la vez.",
      ],
    },
    queEs: {
      titulo: "Qué es el soporte de tercio medio",
      desc: "Es la aplicación de ácido hialurónico en puntos estratégicos de la zona media del rostro, entre los párpados y la boca, para reponer volumen y dar soporte. Al devolver estructura en esa zona, la piel se ve mejor sostenida y suelen suavizarse surcos y sombras. Suele requerir cerca de 2 jeringas, y la cantidad exacta la define la valoración.",
    },
    beneficios: ["Estructura recuperada", "Rostro más sostenido", "Surcos y sombras suavizados", "Sin cirugía"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "◠", label: "Mejillas", desc: "Recuperan volumen y forma." },
      { icon: "◡", label: "Ojeras", desc: "Menos hundimiento por falta de soporte." },
      { icon: "∪", label: "Surcos", desc: "Pliegues nasogenianos menos marcados." },
      { icon: "○", label: "Armonía", desc: "Un rostro más fresco y equilibrado." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Identificamos dónde se perdió volumen y cómo afecta a ojeras y surcos, para definir los puntos de soporte.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación estratégica", desc: "Aplicamos el ácido hialurónico en los puntos definidos de la zona media, revisando la simetría y el efecto en el resto del rostro.", detail: "30 a 60 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "El soporte se ve de inmediato y se asienta en los días siguientes. Te damos cuidados y definimos el control.", detail: "Suele requerir ≈2 jeringas" },
    ],
    seguridad: [
      { num: "01", title: "Base antes que detalles", desc: "Priorizamos el soporte que más impacto tiene, en lugar de rellenar cada línea." },
      { num: "02", title: "Naturalidad", desc: "Reponemos lo que se perdió, sin agregar volumen que tu rostro nunca tuvo." },
      { num: "03", title: "Cantidad honesta", desc: "Te explicamos cuántas jeringas tienen sentido y por qué." },
      { num: "04", title: "Personal médico", desc: "Aplicado por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Cuéntanos si tienes rellenos o hilos previos",
        "Llega sin maquillaje",
      ],
      despues: [
        "No masajees ni presiones la zona salvo indicación",
        "Duerme boca arriba las primeras noches",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Es normal sentir sensibilidad o ver un morado leve",
        "Consulta de inmediato si notas dolor intenso o cambio de color en la piel",
      ],
    },
    precio: {
      desde: 1200000,
      opciones: [{ label: "Por jeringa", detalle: "Suele requerir ≈2 jeringas", valor: 1200000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "Ácido hialurónico según el número de jeringas definido", "Indicaciones de cuidado"],
      nota: "El valor es por jeringa. Suele requerir cerca de 2, y el número exacto lo define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El valor es desde $1.200.000 por jeringa. El soporte de tercio medio suele requerir cerca de 2 jeringas; el número exacto lo definimos en la valoración." },
      { q: "¿Por qué el precio es por jeringa?", a: "Porque la pérdida de volumen es distinta en cada rostro. Cotizamos según lo que tu caso necesita." },
      { q: "¿Qué diferencia hay con la definición de pómulos?", a: "La definición de pómulos busca realzar y marcar el pómulo. El soporte de tercio medio busca reponer volumen perdido y sostener la zona, lo que suele mejorar ojeras y surcos." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos. La mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura?", a: "Habitualmente de varios meses a alrededor de un año, según el producto y tu metabolismo." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual es inflamación, sensibilidad o un morado leve que ceden en días. Las complicaciones serias son poco frecuentes y te explicamos las señales de alarma." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, infección activa en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Soporte de tercio medio",
  },

  // ── Perfilado mandibular ──────────────────────────────────────────────────
  {
    slug: "perfilado-mandibular",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Perfilado mandibular",
    resultados: ["perfilado-mandibular"],
    relacionados: ["volumen-de-menton", "enzimas-papada", "toxina-bruxismo"],
    hero: {
      eyebrow: "Ácido hialurónico · Mandíbula",
      titulo: "Una línea mandibular definida,",
      tituloEm: "un contorno que se nota",
      sub: "Definimos la línea mandibular para mejorar el contorno y la armonía del rostro. Un diseño a la medida de tus rasgos, femenino o masculino, con diagnóstico previo.",
    },
    seo: {
      title: "Perfilado mandibular en Medellín | Clínica Quantum",
      description:
        "Perfilado mandibular con ácido hialurónico en El Poblado, Medellín: define la línea de la mandíbula para mejorar el contorno y la armonía del rostro.",
      keywords: ["perfilado mandibular medellín", "marcación mandibular ácido hialurónico", "definir mandíbula sin cirugía", "contorno facial medellín", "precio perfilado mandibular medellín"],
    },
    ficha: {
      duracion: "45 a 60 min",
      sesiones: "1 sesión",
      recuperacion: "Retomas tu rutina en 24 a 48 h",
      resultados: "Inmediatos; duran meses",
    },
    paraQuien: {
      ideal: [
        "Sientes la línea de la mandíbula poco definida",
        "Quieres separar visualmente el rostro del cuello",
        "Buscas un contorno más marcado sin cirugía",
        "Notas que el ángulo mandibular perdió forma",
      ],
      noIdeal: [
        "El contorno se pierde sobre todo por grasa de papada: primero conviene tratarla",
        "Tienes flacidez muy marcada que requiere otro manejo",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Cuando el rostro y el cuello se confunden",
      parrafos: [
        "En las fotos de perfil sientes que la mandíbula no se marca y que el rostro se funde con el cuello. Con los años, o por tu estructura, ese contorno pierde definición.",
        "Una línea mandibular definida da estructura a todo el rostro. Trabajarla con criterio aporta forma sin que el cambio se vea artificial.",
      ],
    },
    queEs: {
      titulo: "Qué es el perfilado mandibular",
      desc: "Es la aplicación de ácido hialurónico a lo largo de la mandíbula, desde el ángulo hasta cerca del mentón, para definir su contorno. El diseño cambia según tus rasgos: más suave y armónico o más marcado y anguloso. Como es una zona extensa, suele requerir cerca de 4 jeringas, y la cantidad exacta la define la valoración. Si hay grasa de papada o flacidez importante, puede convenir tratarlas antes o en paralelo.",
    },
    beneficios: ["Contorno definido", "Separación rostro y cuello", "Diseño según tus rasgos", "Sin cirugía"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "▽", label: "Ángulo mandibular", desc: "Un ángulo con más forma y definición." },
      { icon: "▭", label: "Línea mandibular", desc: "Contorno continuo del ángulo al mentón." },
      { icon: "◇", label: "Perfil", desc: "Mejor separación entre rostro y cuello." },
      { icon: "○", label: "Armonía", desc: "Equilibrio con mentón y pómulos." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Estudiamos tu estructura, el perfil y la papada para definir el diseño y la cantidad adecuada.", detail: "Valoración médica previa" },
      { num: "02", title: "Aplicación a lo largo de la mandíbula", desc: "Aplicamos el ácido hialurónico en los puntos definidos del ángulo y la línea mandibular, revisando la simetría.", detail: "45 a 60 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "El contorno se ve de inmediato y se asienta en los días siguientes. Te damos cuidados y definimos el control.", detail: "Suele requerir ≈4 jeringas" },
    ],
    seguridad: [
      { num: "01", title: "Diseño según tus rasgos", desc: "Un contorno femenino y uno masculino no se trabajan igual; lo definimos contigo." },
      { num: "02", title: "Papada y flacidez evaluadas", desc: "Si la causa principal es otra, te lo decimos antes de sumar jeringas." },
      { num: "03", title: "Cantidad honesta", desc: "Te explicamos cuántas jeringas tienen sentido y si conviene hacerlo por fases." },
      { num: "04", title: "Personal médico", desc: "Aplicado por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Evita tratamientos dentales cercanos a la fecha",
        "Cuéntanos si tienes rellenos o hilos previos",
      ],
      despues: [
        "No masajees ni presiones la zona salvo indicación",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "Mastica alimentos blandos si sientes sensibilidad los primeros días",
        "Es normal sentir sensibilidad o ver morados leves",
        "Consulta de inmediato si notas dolor intenso o cambio de color en la piel",
      ],
    },
    precio: {
      desde: 1200000,
      opciones: [{ label: "Por jeringa", detalle: "Suele requerir ≈4 jeringas", valor: 1200000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "Ácido hialurónico según el número de jeringas definido", "Indicaciones de cuidado"],
      nota: "El valor es por jeringa. Suele requerir cerca de 4, y el número exacto lo define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El valor es desde $1.200.000 por jeringa. El perfilado mandibular suele requerir cerca de 4 jeringas; el número exacto lo definimos en la valoración según tu estructura." },
      { q: "¿Por qué suele requerir más jeringas?", a: "Porque la mandíbula es una zona extensa: va del ángulo hasta cerca del mentón en ambos lados. Si prefieres, podemos plantear el tratamiento por fases." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos. La mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuánto dura?", a: "Habitualmente de varios meses a alrededor de un año, según el producto y tu metabolismo." },
      { q: "¿Sirve si tengo papada?", a: "Depende. Si el contorno se pierde sobre todo por grasa, primero conviene tratarla; después la definición luce mejor. Lo vemos en la valoración." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual es inflamación, sensibilidad o morados leves que ceden en días. Las complicaciones serias son poco frecuentes y te explicamos las señales de alarma." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, infección activa en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Perfilado mandibular",
  },

  // ── Skinbooster ───────────────────────────────────────────────────────────
  {
    slug: "skinbooster",
    categoria: "faciales",
    grupo: "Ácido hialurónico",
    nombre: "Hidratación intensiva facial (Skinbooster)",
    resultados: [],
    relacionados: ["nctf-mesoterapia", "mesobotox", "hydrafacial"],
    hero: {
      eyebrow: "Ácido hialurónico · Skinbooster",
      titulo: "Piel hidratada desde adentro,",
      tituloEm: "luminosa sin cambiar tus rasgos",
      sub: "Hidratación profunda con ácido hialurónico que mejora la calidad, la luminosidad y la apariencia de la piel. No da volumen: devuelve jugosidad y brillo saludable.",
    },
    seo: {
      title: "Skinbooster en Medellín | Clínica Quantum",
      description:
        "Skinbooster en El Poblado, Medellín: hidratación profunda con ácido hialurónico que mejora la calidad, la luminosidad y la apariencia de tu piel.",
      keywords: ["skinbooster medellín", "hidratación facial profunda", "ácido hialurónico hidratación piel", "piel luminosa tratamiento", "precio skinbooster medellín"],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "Según valoración",
      recuperacion: "Retomas tu rutina en 24 h",
      resultados: "Progresivos, en días",
    },
    paraQuien: {
      ideal: [
        "Sientes la piel deshidratada, opaca o sin brillo",
        "Notas líneas finas por resequedad",
        "Quieres mejorar la textura sin cambiar tus rasgos",
        "Buscas una piel luminosa para un evento o como mantenimiento",
      ],
      noIdeal: [
        "Buscas volumen o corregir surcos marcados: para eso están los rellenos",
        "Tienes acné activo o infección en la zona",
        "Estás en embarazo o lactancia",
      ],
    },
    problema: {
      titulo: "Cuando la piel se ve cansada aunque la cuides",
      parrafos: [
        "Usas cremas, tomas agua y aun así la piel se siente tirante y se ve opaca. El maquillaje marca las líneas finas y el brillo saludable no aparece.",
        "Hay hidratación que no llega desde afuera. El skinbooster lleva el ácido hialurónico al interior de la piel, donde retiene agua y mejora su calidad.",
      ],
    },
    queEs: {
      titulo: "Qué es el skinbooster",
      desc: "Es la aplicación de ácido hialurónico en microinyecciones distribuidas por la piel del rostro. A diferencia de los rellenos, su objetivo no es dar volumen ni cambiar la forma, sino hidratar en profundidad: el ácido hialurónico atrae y retiene agua, lo que mejora la elasticidad, la textura y la luminosidad. El número de sesiones y la frecuencia de mantenimiento se definen en la valoración según tu piel.",
    },
    beneficios: ["Hidratación profunda", "Piel más luminosa", "Mejor textura", "No cambia tus rasgos"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "✦", label: "Luminosidad", desc: "Un brillo saludable que se nota sin maquillaje." },
      { icon: "○", label: "Hidratación", desc: "Piel menos tirante y más elástica." },
      { icon: "▭", label: "Textura", desc: "Superficie más lisa y uniforme." },
      { icon: "◡", label: "Líneas finas", desc: "Menos marcadas por resequedad." },
    ],
    pasos: [
      { num: "01", title: "Diagnóstico con analizador facial", desc: "Evaluamos hidratación, textura y calidad de tu piel para confirmar que el skinbooster es lo indicado y definir el plan.", detail: "Valoración médica previa" },
      { num: "02", title: "Microinyecciones de hidratación", desc: "Limpiamos la piel y distribuimos el ácido hialurónico en pequeños puntos por la zona. Puede usarse anestesia tópica según tu sensibilidad.", detail: "30 a 45 min" },
      { num: "03", title: "Resultado y seguimiento", desc: "Las pequeñas ronchas ceden pronto y la piel se ve más hidratada en los días siguientes. Definimos contigo el mantenimiento.", detail: "1 jeringa por sesión" },
    ],
    seguridad: [
      { num: "01", title: "Calidad de piel, no volumen", desc: "Distribución superficial pensada para hidratar sin alterar tus rasgos." },
      { num: "02", title: "Diagnóstico con analizador facial", desc: "Medimos tu piel antes para saber qué esperar y cómo acompañarlo." },
      { num: "03", title: "Expectativas claras", desc: "Te explicamos que es un tratamiento de calidad de piel y cuándo conviene otro enfoque." },
      { num: "04", title: "Personal médico", desc: "Aplicado por personal médico bajo la dirección médica de la Dra. Daniela Díez." },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Suspende exfoliantes y retinoides unos días antes",
        "Llega sin maquillaje",
      ],
      despues: [
        "No te maquilles durante las primeras 24 horas",
        "Evita ejercicio intenso, sauna y sol directo durante 48 horas",
        "No masajees ni frotes la zona",
        "Es normal ver pequeñas ronchas o puntos rojos que ceden en horas o pocos días",
        "Usa protector solar a diario",
      ],
    },
    precio: {
      desde: 800000,
      opciones: [{ label: "1 jeringa", valor: 800000 }],
      incluye: ["Valoración médica previa", "Diagnóstico con analizador facial", "1 jeringa de ácido hialurónico para hidratación", "Indicaciones de cuidado"],
      nota: "El número de sesiones y la frecuencia de mantenimiento se definen en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta el skinbooster?", a: "Tiene un valor desde $800.000 por jeringa. En la valoración definimos cuántas sesiones tienen sentido para tu piel." },
      { q: "¿Me va a dar volumen?", a: "No. El skinbooster hidrata y mejora la calidad de la piel. Si buscas volumen o suavizar surcos, lo indicado son los rellenos." },
      { q: "¿Duele?", a: "Son varios pinchazos pequeños. Puede usarse anestesia tópica, y la mayoría lo describe como una molestia tolerable." },
      { q: "¿Cuándo veo el resultado y cuánto dura?", a: "La piel se ve más hidratada en los días siguientes, cuando ceden las ronchas. El efecto dura meses y se prolonga con mantenimiento." },
      { q: "¿Cuántas sesiones necesito?", a: "Depende del estado de tu piel. Algunas personas empiezan con varias sesiones y luego mantienen; lo definimos en la valoración." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual son pequeñas ronchas, enrojecimiento o algún morado leve que ceden en horas o pocos días." },
      { q: "¿Se combina con otros tratamientos?", a: "Sí. Suele complementarse con mesobotox, mesoterapia o limpiezas profundas. Armamos el orden en la valoración." },
      { q: "¿Quién no se lo puede hacer?", a: "No está indicado en embarazo, lactancia, acné activo o infección en la zona, enfermedades autoinmunes no controladas ni alergia a los componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Hidratación intensiva facial (Skinbooster)",
  },
];
