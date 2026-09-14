import type { Tratamiento } from "../types";

// Lote rejuvenecimiento y cosmetología. Fuente: docs/servicios-manifest.json.
// Reglas de redacción: docs/GUIA-CONTENIDO-SERVICIOS.md.
export const rejuvenecimiento: Tratamiento[] = [
  // ── Sculptra ──────────────────────────────────────────────────────────────
  {
    slug: "sculptra",
    categoria: "faciales",
    grupo: "Bioestimuladores",
    nombre: "Sculptra",
    resultados: [],
    relacionados: ["hidroxiapatita-de-calcio", "long-lasting", "hilos-tensores"],
    hero: {
      eyebrow: "Bioestimulador · Sculptra",
      titulo: "Tu piel recupera firmeza,",
      tituloEm: "poco a poco y con naturalidad",
      sub: "Sculptra es el bioestimulador de colágeno más reconocido. Devuelve firmeza y volumen de forma gradual, con un plan que definimos con criterio médico según tu rostro o la zona corporal a tratar.",
    },
    seo: {
      title: "Sculptra en Medellín | Clínica Quantum",
      description:
        "Sculptra en El Poblado, Medellín: bioestimulador de colágeno que da firmeza y volumen de forma gradual, con resultados que pueden durar hasta dos años.",
      keywords: [
        "sculptra medellín",
        "bioestimulador de colágeno medellín",
        "sculptra precio medellín",
        "ácido poliláctico medellín",
        "flacidez facial tratamiento",
      ],
    },
    ficha: {
      duracion: "30 a 45 min por sesión",
      sesiones: "Habitualmente 1 a 3 sesiones",
      recuperacion: "Rutina normal con cuidados leves",
      resultados: "Graduales, hasta dos años",
    },
    paraQuien: {
      ideal: [
        "Notas pérdida de firmeza o de volumen en el rostro",
        "Tu piel se ve más delgada o cansada que antes",
        "Prefieres un cambio progresivo que nadie identifique como relleno",
        "Buscas un resultado que se sostenga en el tiempo",
        "Quieres mejorar la calidad de la piel en una zona corporal",
      ],
      noIdeal: [
        "Buscas un cambio inmediato para un evento cercano",
        "Estás en embarazo o lactancia",
        "Tienes una infección activa en la zona o una enfermedad autoinmune no controlada",
        "Tienes tendencia a cicatrices queloides: lo revisamos antes en la valoración",
      ],
    },
    problema: {
      titulo: "Cuando el rostro pierde soporte y firmeza",
      parrafos: [
        "Con los años el cuerpo produce menos colágeno. La piel se afina, los pómulos pierden volumen y el contorno se ve menos definido. Te miras y te ves cansada aunque hayas dormido bien.",
        "Rellenar no siempre es la respuesta. A veces lo que necesitas es que tu propia piel vuelva a fabricar soporte, para que el cambio se vea tuyo y se mantenga en el tiempo.",
      ],
    },
    queEs: {
      titulo: "Qué es Sculptra",
      desc: "Sculptra es un bioestimulador a base de ácido poli-L-láctico, un material biocompatible y reabsorbible. Aplicado en capas profundas, estimula a la piel para producir colágeno nuevo. Por eso el efecto no es inmediato: la firmeza y el volumen mejoran en las semanas y meses siguientes, con resultados que pueden durar hasta dos años.",
    },
    beneficios: ["Estimula tu propio colágeno", "Cambio gradual y natural", "Resultados de larga duración", "Uso facial o corporal"],
    zonasTitulo: "Qué podemos mejorar",
    zonas: [
      { icon: "◠", label: "Pómulos y sienes", desc: "Recupera el volumen que da soporte al tercio medio." },
      { icon: "◡", label: "Contorno facial", desc: "Aporta firmeza al óvalo y a la línea mandibular." },
      { icon: "○", label: "Calidad de la piel", desc: "Piel más densa, firme y con mejor textura." },
      { icon: "▭", label: "Zonas corporales", desc: "Glúteos, abdomen o brazos con flacidez leve, según valoración." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración con analizador facial",
        desc: "Revisamos la calidad de tu piel, el volumen y la flacidez, y definimos si Sculptra es lo indicado, cuántas sesiones y en qué zonas.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Aplicación de Sculptra",
        desc: "Limpiamos la zona, aplicamos anestesia local cuando hace falta e inyectamos el producto en planos profundos con técnica de abanico o microdepósitos.",
        detail: "30 a 45 min",
      },
      {
        num: "03",
        title: "Masajes, controles y resultados",
        desc: "Te enseñamos los masajes de los días siguientes y te citamos a control. El colágeno se forma de a poco y el cambio se consolida en semanas y meses.",
        detail: "Resultado progresivo",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Indicación médica, no por catálogo",
        desc: "Sculptra no es para todas las pieles ni para todas las zonas. Si otro tratamiento te conviene más, te lo decimos en la valoración.",
      },
      {
        num: "02",
        title: "Preparación y dilución correctas",
        desc: "El producto se reconstituye con anticipación y se aplica en el plano adecuado, lo que reduce el riesgo de nódulos.",
      },
      {
        num: "03",
        title: "Expectativas claras desde el inicio",
        desc: "Te explicamos que el efecto es gradual y que el número de sesiones depende de tu punto de partida.",
      },
      {
        num: "04",
        title: "Seguimiento entre sesiones",
        desc: "Revisamos cómo responde tu piel antes de cada nueva aplicación, bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y suplementos como omega 3 unos días antes, si tu médico lo permite",
        "No consumas alcohol las 24 horas previas",
        "Llega con la piel limpia, sin maquillaje",
        "Cuéntanos si tienes enfermedades autoinmunes o antecedentes de queloides",
      ],
      despues: [
        "Haz los masajes indicados durante los días siguientes",
        "Evita el ejercicio intenso, el sol directo, el sauna y el vapor por 24 a 48 horas",
        "Es normal sentir inflamación, sensibilidad o morados leves unos días",
        "No apliques maquillaje en la zona durante las primeras horas",
        "Asiste a tus controles antes de la siguiente sesión",
      ],
    },
    precio: {
      desde: 2500000,
      opciones: [{ label: "Bioestimulación facial o corporal", valor: 2500000 }],
      incluye: [
        "Valoración médica previa con analizador facial",
        "Aplicación de Sculptra en la zona definida",
        "Indicaciones de masaje y cuidado",
        "Control posterior",
      ],
      nota: "La cantidad de producto y el número de sesiones los define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta Sculptra?", a: "La bioestimulación facial o corporal con Sculptra tiene un valor desde $2.500.000. En la valoración te decimos cuántas sesiones necesitas según tu piel." },
      { q: "¿Cuándo se ven los resultados?", a: "Es gradual. El colágeno nuevo se forma en las semanas siguientes y la mejora se aprecia mejor entre el segundo y el tercer mes." },
      { q: "¿Cuánto dura el efecto?", a: "Los resultados pueden durar hasta dos años. La duración varía según tu edad, tu piel y tus hábitos, como la exposición al sol." },
      { q: "¿Duele la aplicación?", a: "Se siente como pinchazos y algo de presión. Usamos anestesia local cuando hace falta para que el procedimiento sea tolerable." },
      { q: "¿Tiene efectos secundarios?", a: "Lo habitual es inflamación, enrojecimiento, sensibilidad o morados leves por unos días. Con la técnica y los masajes indicados se reduce el riesgo de nódulos." },
      { q: "¿Es lo mismo que el ácido hialurónico?", a: "No. El ácido hialurónico da volumen inmediato; Sculptra estimula a tu piel para que produzca colágeno propio y el cambio es progresivo. A veces se combinan." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí, puede complementarse con hilos tensores, hidroxiapatita o tratamientos de calidad de piel. El orden y los tiempos los define la valoración." },
      { q: "¿Quién no debería aplicárselo?", a: "No se aplica en embarazo, lactancia, infección activa en la zona ni enfermedades autoinmunes no controladas. Revisamos tu historia médica antes de indicarlo." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Sculptra",
  },

  // ── Long Lasting ──────────────────────────────────────────────────────────
  {
    slug: "long-lasting",
    categoria: "faciales",
    grupo: "Bioestimuladores",
    nombre: "Long Lasting",
    resultados: ["long-lasting"],
    relacionados: ["sculptra", "skinbooster", "nctf-mesoterapia"],
    hero: {
      eyebrow: "Bioestimulación · Cara y cuello",
      titulo: "Frescura y firmeza en cara y cuello,",
      tituloEm: "pensadas para durar",
      sub: "Long Lasting es nuestro rejuvenecimiento de cara y cuello enfocado en que el efecto se sostenga en el tiempo. Lo planeamos con criterio médico según el estado real de tu piel.",
    },
    seo: {
      title: "Long Lasting en Medellín | Clínica Quantum",
      description:
        "Long Lasting en El Poblado, Medellín: rejuvenecimiento de cara y cuello que recupera frescura y firmeza con un efecto que se sostiene en el tiempo.",
      keywords: [
        "rejuvenecimiento facial medellín",
        "rejuvenecimiento de cuello medellín",
        "bioestimulación facial medellín",
        "long lasting facial medellín",
      ],
    },
    ficha: {
      duracion: "30 a 60 min",
      sesiones: "Según tu valoración",
      recuperacion: "Rutina normal con cuidados leves",
      resultados: "Progresivos y sostenidos",
    },
    paraQuien: {
      ideal: [
        "Ves tu rostro y tu cuello apagados o con menos firmeza",
        "Quieres rejuvenecer sin cambiar tus facciones",
        "Buscas un efecto que se mantenga y no tener que retocar a cada rato",
        "Te preocupa que el cuello delate la edad más que el rostro",
      ],
      noIdeal: [
        "Buscas un cambio de volumen inmediato, como un relleno de labios o pómulos",
        "Estás en embarazo o lactancia",
        "Tienes una infección activa o lesiones en la piel de la zona",
        "Tienes enfermedades autoinmunes no controladas",
      ],
    },
    problema: {
      titulo: "Cuando el rostro y el cuello se ven cansados",
      parrafos: [
        "La piel pierde brillo, las líneas finas se marcan y el cuello empieza a mostrar flacidez. Muchas veces el cambio no está en un solo punto, sino en la calidad de toda la piel.",
        "Y cuando haces algo, quieres que valga la pena: que se note frescura, que nadie piense que te hiciste algo y que el efecto no se esfume en pocas semanas.",
      ],
    },
    queEs: {
      titulo: "Qué es Long Lasting",
      desc: "Es un tratamiento de rejuvenecimiento de cara y cuello de nuestro grupo de bioestimuladores. Su objetivo es que tu piel recupere frescura y firmeza estimulando sus propios procesos de regeneración, con un efecto que se sostiene en el tiempo. La técnica, las zonas y el número de sesiones se definen en la valoración médica según tu piel.",
    },
    beneficios: ["Cara y cuello en un plan", "Efecto que se sostiene", "Resultado natural", "Plan según tu piel"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "○", label: "Luminosidad", desc: "Piel con un aspecto más fresco y descansado." },
      { icon: "◇", label: "Firmeza", desc: "Mejor tono y soporte de la piel del rostro." },
      { icon: "∪", label: "Cuello", desc: "Calidad de piel y líneas del cuello." },
      { icon: "✦", label: "Líneas finas", desc: "Textura más uniforme y suave." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración con analizador facial",
        desc: "Evaluamos la calidad, la hidratación y la firmeza de tu piel de rostro y cuello para confirmar que Long Lasting es lo indicado.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Sesión de rejuvenecimiento",
        desc: "Preparamos la piel, aplicamos anestesia tópica si hace falta y realizamos el tratamiento en cara y cuello según el plan definido.",
        detail: "30 a 60 min",
      },
      {
        num: "03",
        title: "Resultados y seguimiento",
        desc: "La mejora se nota de forma progresiva. Te acompañamos con controles para ver cómo responde tu piel y cuidar el resultado.",
        detail: "Control posterior",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Diagnóstico antes de tratar",
        desc: "El analizador facial nos muestra el estado real de tu piel y evita tratamientos que no necesitas.",
      },
      {
        num: "02",
        title: "Plan de cara y cuello coherente",
        desc: "Tratamos ambas zonas con la misma lógica para que el resultado se vea armónico y no quede un rostro fresco con un cuello apagado.",
      },
      {
        num: "03",
        title: "Expectativas honestas",
        desc: "Te explicamos qué puede lograr y qué no, y si otro tratamiento o una combinación te conviene más.",
      },
      {
        num: "04",
        title: "Seguimiento médico",
        desc: "Controles bajo la dirección médica de la Dra. Daniela Díez para revisar tu evolución.",
      },
    ],
    cuidados: {
      antes: [
        "Suspende exfoliantes y retinoides unos días antes, según te indiquemos",
        "Evita el sol directo y el bronceado la semana previa",
        "Llega con la piel limpia, sin maquillaje",
        "Cuéntanos qué medicamentos tomas y si tienes alergias",
      ],
      despues: [
        "Usa protector solar todos los días",
        "Evita sauna, vapor y ejercicio intenso por 24 a 48 horas",
        "No apliques maquillaje en las primeras horas",
        "Es normal un enrojecimiento o sensibilidad leve de corta duración",
        "Asiste a tu control",
      ],
    },
    precio: {
      desde: 1600000,
      opciones: [{ label: "Rejuvenecimiento de cara y cuello", valor: 1600000 }],
      incluye: [
        "Valoración médica previa con analizador facial",
        "Tratamiento de cara y cuello",
        "Indicaciones de cuidado",
        "Control posterior",
      ],
      nota: "El plan exacto para tu piel lo definimos en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta Long Lasting?", a: "El rejuvenecimiento de cara y cuello Long Lasting tiene un valor desde $1.600.000. En la valoración confirmamos que es lo indicado para ti." },
      { q: "¿Cuándo se ven los resultados?", a: "La mejora es progresiva: la piel se ve más fresca en las primeras semanas y la firmeza se consolida con el tiempo." },
      { q: "¿Cuánto dura el efecto?", a: "Está pensado para sostenerse en el tiempo. La duración depende de tu piel, tu edad y tus hábitos, sobre todo del cuidado frente al sol." },
      { q: "¿Tiene incapacidad?", a: "Habitualmente no. Puedes retomar tu rutina con cuidados sencillos. Puede haber enrojecimiento o sensibilidad leve por poco tiempo." },
      { q: "¿Duele?", a: "La mayoría de pacientes lo describe como una molestia tolerable. Usamos anestesia tópica cuando hace falta." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Suele complementarse con Sculptra, skinbooster o NCTF mesoterapia. La combinación y el orden los define la valoración." },
      { q: "¿Quién no puede hacérselo?", a: "No lo realizamos en embarazo, lactancia, infección activa en la zona ni enfermedades autoinmunes no controladas." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Long Lasting",
  },

  // ── Hidroxiapatita de calcio ──────────────────────────────────────────────
  {
    slug: "hidroxiapatita-de-calcio",
    categoria: "faciales",
    grupo: "Bioestimuladores",
    nombre: "Tensado facial con hidroxiapatita (Radiesse / Facetem)",
    resultados: [],
    relacionados: ["sculptra", "rejuvenecimiento-manos-cuello-pecho", "hilos-tensores"],
    hero: {
      eyebrow: "BIOESTIMULADOR · RADIESSE / FACETEM",
      titulo: "Efecto lifting progresivo,",
      tituloEm: "que se ve real",
      sub: "Con hidroxiapatita de calcio estimulamos tu propio colágeno y elastina para tensar la piel, cerrar poros y suavizar líneas finas. Indicado con criterio médico, en rostro y también en manos, cuello y pecho.",
    },
    seo: {
      title: "Hidroxiapatita de calcio en Medellín | Clínica Quantum",
      description:
        "Tensado facial con hidroxiapatita (Radiesse / Facetem) en El Poblado, Medellín: estimula colágeno, tensa la piel y suaviza líneas finas con efecto natural.",
      keywords: [
        "hidroxiapatita de calcio medellín",
        "radiesse medellín",
        "tensado facial sin cirugía",
        "bioestimulador facial medellín",
        "flacidez facial medellín",
      ],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "Habitualmente 1 sesión",
      recuperacion: "Rutina normal con cuidados leves",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Notas flacidez leve a moderada en el rostro",
        "Te preocupan los poros abiertos y las líneas finas",
        "Quieres un efecto tensor sin cirugía",
        "Prefieres un cambio progresivo y natural",
        "También quieres mejorar manos, cuello o pecho",
      ],
      noIdeal: [
        "Tienes flacidez muy marcada que requiere una valoración quirúrgica",
        "Estás en embarazo o lactancia",
        "Tienes una infección activa en la zona o una enfermedad autoinmune no controlada",
        "Buscas volumen en labios: para eso está el ácido hialurónico",
      ],
    },
    problema: {
      titulo: "Cuando la piel pierde tensión",
      parrafos: [
        "El óvalo del rostro se desdibuja, los poros se ven más abiertos y aparecen líneas finas que antes no estaban. Es la pérdida natural de colágeno y elastina, y se nota aunque te cuides.",
        "No quieres una cara distinta ni un resultado evidente. Quieres que tu piel se vea firme otra vez, con un cambio que llegue de a poco y que se vea real.",
      ],
    },
    queEs: {
      titulo: "Qué es la hidroxiapatita de calcio",
      desc: "Es un bioestimulador compuesto por microesferas de hidroxiapatita de calcio en un gel que se reabsorbe. Aplicado por personal médico, da soporte a la piel y estimula la producción de colágeno y elastina. El resultado es un efecto tensor y de mejor calidad de piel que avanza en las semanas siguientes. Trabajamos con Radiesse y Facetem.",
    },
    beneficios: ["Efecto lifting progresivo", "Estimula colágeno y elastina", "Cierra poros", "Suaviza líneas finas", "Sin cirugía"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◡", label: "Óvalo facial", desc: "Tensión y definición del contorno del rostro." },
      { icon: "◠", label: "Mejillas", desc: "Firmeza en la zona que más acusa la flacidez." },
      { icon: "○", label: "Poros y textura", desc: "Piel más uniforme y compacta." },
      { icon: "∪", label: "Cuello", desc: "Mejor calidad y firmeza de la piel." },
      { icon: "▭", label: "Manos y pecho", desc: "Piel más densa y rejuvenecida." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración con analizador facial",
        desc: "Medimos la calidad de tu piel y el grado de flacidez para confirmar que la hidroxiapatita es lo indicado y definir las zonas.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Aplicación del bioestimulador",
        desc: "Desinfectamos, aplicamos anestesia cuando hace falta e inyectamos el producto con cánula o aguja en el plano adecuado.",
        detail: "30 a 45 min",
      },
      {
        num: "03",
        title: "Resultados y control",
        desc: "El efecto tensor se va notando en las semanas siguientes a medida que tu piel produce colágeno. Te citamos a control para revisar la evolución.",
        detail: "Resultado progresivo",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Producto indicado para tu caso",
        desc: "Elegimos entre Radiesse y Facetem, y la dilución, según la zona y el objetivo definidos en la valoración.",
      },
      {
        num: "02",
        title: "Técnica en el plano correcto",
        desc: "La aplicación con cánula en zonas seleccionadas reduce el riesgo de morados y respeta la anatomía del rostro.",
      },
      {
        num: "03",
        title: "Honestidad sobre el alcance",
        desc: "Si tu flacidez necesita otra solución, como hilos o una valoración quirúrgica, te lo decimos.",
      },
      {
        num: "04",
        title: "Seguimiento médico",
        desc: "Control posterior bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Llega con la piel limpia, sin maquillaje",
        "Evita otros procedimientos en la zona las semanas previas",
        "Cuéntanos tus antecedentes médicos y alergias",
      ],
      despues: [
        "Evita ejercicio intenso, sauna y vapor por 24 a 48 horas",
        "No masajees la zona salvo que te lo indiquemos",
        "Es normal sentir inflamación, sensibilidad o morados leves unos días",
        "Usa protector solar a diario",
        "Asiste a tu control",
      ],
    },
    precio: {
      desde: 2500000,
      opciones: [{ label: "Tensado y revitalización facial", detalle: "También manos, cuello, pecho", valor: 2500000 }],
      incluye: [
        "Valoración médica previa con analizador facial",
        "Aplicación de hidroxiapatita de calcio",
        "Indicaciones de cuidado",
        "Control posterior",
      ],
      nota: "La cantidad de producto y las zonas las define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta el tensado con hidroxiapatita?", a: "El tensado y revitalización facial tiene un valor desde $2.500.000. También se puede aplicar en manos, cuello y pecho." },
      { q: "¿Cuándo se ven los resultados?", a: "Parte del soporte se percibe pronto y el efecto tensor avanza en las semanas siguientes, a medida que tu piel produce colágeno." },
      { q: "¿Cuánto dura?", a: "Habitualmente el efecto se mantiene alrededor de un año o más. Depende de tu piel, tu edad y tus hábitos." },
      { q: "¿Duele?", a: "Se siente presión y pinchazos leves. Usamos anestesia cuando hace falta para que sea tolerable." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Lo habitual es inflamación, enrojecimiento, sensibilidad o morados leves por unos días. Te explicamos qué es normal y cuándo consultarnos." },
      { q: "¿En qué se diferencia de Sculptra?", a: "Ambos estimulan colágeno. La hidroxiapatita aporta además un soporte inicial; Sculptra trabaja de forma más gradual. La valoración define cuál te conviene." },
      { q: "¿Se puede combinar?", a: "Sí, con hilos tensores, INDIBA facial o tratamientos de calidad de piel. El orden y los tiempos los definimos contigo." },
      { q: "¿Quién no puede aplicárselo?", a: "No se aplica en embarazo, lactancia, infección activa en la zona ni enfermedades autoinmunes no controladas." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Tensado facial con hidroxiapatita (Radiesse / Facetem)",
  },

  // ── Rejuvenecimiento de manos, cuello y pecho ─────────────────────────────
  {
    slug: "rejuvenecimiento-manos-cuello-pecho",
    categoria: "faciales",
    grupo: "Bioestimuladores",
    nombre: "Rejuvenecimiento de manos, cuello y pecho",
    resultados: [],
    relacionados: ["hidroxiapatita-de-calcio", "sculptra", "plasma-rico-en-plaquetas-facial"],
    hero: {
      eyebrow: "Hidroxiapatita · Manos, cuello y pecho",
      titulo: "Manos, cuello y escote",
      tituloEm: "a la altura de tu rostro",
      sub: "Mejoramos la firmeza y la calidad de la piel de manos, cuello y pecho con hidroxiapatita de calcio, para una apariencia más rejuvenecida y natural, siempre con indicación médica.",
    },
    seo: {
      title: "Rejuvenecer manos y cuello en Medellín | Clínica Quantum",
      description:
        "Rejuvenecimiento de manos, cuello y pecho con hidroxiapatita en El Poblado, Medellín: más firmeza y mejor calidad de piel con un resultado natural.",
      keywords: [
        "rejuvenecimiento de manos medellín",
        "rejuvenecimiento de cuello medellín",
        "rejuvenecimiento de escote",
        "hidroxiapatita manos",
        "arrugas en el cuello tratamiento",
      ],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "Habitualmente 1 sesión por zona",
      recuperacion: "Rutina normal con cuidados leves",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Sientes que tus manos se ven mayores que tu rostro",
        "Tu cuello muestra líneas o piel menos firme",
        "El escote se ve con piel fina o arrugada",
        "Ya cuidas tu rostro y quieres un resultado armónico",
      ],
      noIdeal: [
        "Buscas eliminar manchas: para eso hay tratamientos despigmentantes",
        "Estás en embarazo o lactancia",
        "Tienes una infección, heridas o lesiones activas en la zona",
        "Tienes enfermedades autoinmunes no controladas",
      ],
    },
    problema: {
      titulo: "Las zonas que delatan la edad",
      parrafos: [
        "Cuidas tu rostro, pero las manos, el cuello y el escote cuentan otra historia. La piel ahí es más delgada, recibe mucho sol y pierde firmeza antes de lo que imaginas.",
        "Son zonas que se ven todos los días, al saludar, con un escote o en una foto. Mejorarlas hace que todo tu aspecto se vea coherente y cuidado.",
      ],
    },
    queEs: {
      titulo: "Cómo rejuvenecemos manos, cuello y pecho",
      desc: "Aplicamos hidroxiapatita de calcio, un bioestimulador que da soporte a la piel y estimula la producción de colágeno y elastina. En estas zonas se usa con una dilución y una técnica específicas para mejorar la firmeza, la densidad y la calidad de la piel sin crear volumen artificial.",
    },
    beneficios: ["Piel más firme", "Mejor calidad y densidad", "Resultado natural", "Estimula colágeno"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "▭", label: "Dorso de las manos", desc: "Suaviza la marca de venas y tendones por piel fina." },
      { icon: "∪", label: "Cuello", desc: "Mejora la firmeza y la calidad de la piel." },
      { icon: "▽", label: "Pecho y escote", desc: "Piel más densa, con menos aspecto arrugado." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración de la piel",
        desc: "Revisamos el grosor, la firmeza y el estado de la piel de cada zona para definir si la hidroxiapatita es lo indicado.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Aplicación con técnica específica",
        desc: "Aplicamos el producto diluido con cánula en la zona, distribuyéndolo de forma uniforme bajo la piel.",
        detail: "30 a 45 min",
      },
      {
        num: "03",
        title: "Resultados y control",
        desc: "La piel gana firmeza de forma progresiva en las semanas siguientes. Revisamos tu evolución en el control.",
        detail: "Resultado progresivo",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Técnica adaptada a piel fina",
        desc: "Manos, cuello y pecho tienen piel delgada: usamos la dilución y el plano adecuados para cada una.",
      },
      {
        num: "02",
        title: "Uso de cánula",
        desc: "Nos permite distribuir el producto con menos puntos de entrada y menor riesgo de morados.",
      },
      {
        num: "03",
        title: "Objetivos realistas",
        desc: "Te explicamos qué mejora la hidroxiapatita y qué requiere otro tratamiento, como las manchas.",
      },
      {
        num: "04",
        title: "Seguimiento médico",
        desc: "Control posterior bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "No tomes sol en la zona la semana previa",
        "Retira anillos y pulseras si tratamos las manos",
        "Cuéntanos tus antecedentes médicos y alergias",
      ],
      despues: [
        "Evita cargar peso con las manos y el ejercicio intenso por 24 a 48 horas",
        "Usa protector solar en manos, cuello y escote a diario",
        "Es normal sentir inflamación, sensibilidad o morados leves unos días",
        "Evita sauna y vapor los primeros días",
        "Asiste a tu control",
      ],
    },
    precio: {
      desde: 2500000,
      opciones: [{ label: "Hidroxiapatita de calcio", valor: 2500000 }],
      incluye: [
        "Valoración médica previa",
        "Aplicación de hidroxiapatita de calcio",
        "Indicaciones de cuidado",
        "Control posterior",
      ],
      nota: "Las zonas y la cantidad de producto las define la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "El rejuvenecimiento con hidroxiapatita de calcio tiene un valor desde $2.500.000. En la valoración definimos las zonas a tratar." },
      { q: "¿Cuándo veo el cambio?", a: "La mejora es progresiva: la piel gana firmeza y calidad en las semanas siguientes a la aplicación." },
      { q: "¿Cuánto dura el resultado?", a: "Habitualmente alrededor de un año o más. El sol acelera el envejecimiento de estas zonas, por eso el protector solar es clave." },
      { q: "¿Duele?", a: "Se siente presión y molestia leve. Usamos anestesia local en los puntos de entrada cuando hace falta." },
      { q: "¿Tiene efectos secundarios?", a: "Es habitual algo de inflamación, sensibilidad o morados leves unos días. En las manos puede sentirse cierta rigidez temporal." },
      { q: "¿Quita las manchas?", a: "No. Mejora la firmeza y la calidad de la piel. Para manchas tenemos tratamientos específicos que pueden combinarse." },
      { q: "¿Se puede combinar?", a: "Sí, con plasma rico en plaquetas o con tratamiento facial para un resultado armónico. Lo planeamos en la valoración." },
      { q: "¿Quién no debería hacérselo?", a: "No se realiza en embarazo, lactancia, infección activa en la zona ni enfermedades autoinmunes no controladas." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Rejuvenecimiento de manos, cuello y pecho",
  },

  // ── NCTF mesoterapia ──────────────────────────────────────────────────────
  {
    slug: "nctf-mesoterapia",
    categoria: "faciales",
    grupo: "Bioestimuladores",
    nombre: "NCTF mesoterapia",
    resultados: [],
    relacionados: ["skinbooster", "mesoterapia-facial", "long-lasting"],
    hero: {
      eyebrow: "Mesoterapia · NCTF",
      titulo: "Piel revitalizada y luminosa,",
      tituloEm: "desde adentro",
      sub: "NCTF es una fórmula con ácido hialurónico y un complejo de activos que revitaliza y mejora la apariencia de la piel del rostro y el cuello. Un tratamiento de calidad de piel indicado con criterio médico.",
    },
    seo: {
      title: "NCTF mesoterapia en Medellín | Clínica Quantum",
      description:
        "NCTF mesoterapia en El Poblado, Medellín: ácido hialurónico y 54 activos que revitalizan la piel del rostro y cuello para un aspecto más luminoso.",
      keywords: [
        "nctf medellín",
        "mesoterapia facial medellín",
        "nctf precio medellín",
        "revitalización facial medellín",
        "mesoterapia cuello",
      ],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "Habitualmente 3 a 5 sesiones",
      recuperacion: "Pequeñas marcas por 24 a 48 h",
      resultados: "Progresivos, sesión a sesión",
    },
    paraQuien: {
      ideal: [
        "Tu piel se ve apagada, deshidratada o sin vitalidad",
        "Tienes líneas finas y textura irregular",
        "Quieres mejorar la calidad de la piel sin cambiar tus facciones",
        "Buscas preparar o mantener otros tratamientos de rejuvenecimiento",
      ],
      noIdeal: [
        "Buscas volumen o un efecto tensor marcado",
        "Estás en embarazo o lactancia",
        "Tienes acné activo inflamado, herpes o una infección en la zona",
        "Tienes alergia a alguno de los componentes",
      ],
    },
    problema: {
      titulo: "Cuando la piel pierde vitalidad",
      parrafos: [
        "El estrés, el sol y el paso del tiempo dejan la piel opaca, con líneas finas y una textura que el maquillaje ya no disimula. Las cremas ayudan, pero no llegan donde la piel lo necesita.",
        "No se trata de cambiar tu rostro, sino de que tu piel vuelva a verse sana, hidratada y con luz propia.",
      ],
    },
    queEs: {
      titulo: "Qué es NCTF mesoterapia",
      desc: "Es una técnica de mesoterapia que deposita, mediante microinyecciones superficiales, una fórmula de ácido hialurónico con 54 activos, entre vitaminas, aminoácidos y minerales. Estos nutrientes ayudan a hidratar y revitalizar la piel del rostro y del cuello, que se ve más luminosa y uniforme con las sesiones.",
    },
    beneficios: ["Ácido hialurónico + 54 activos", "Hidratación profunda", "Piel más luminosa", "Rostro y cuello"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "○", label: "Luminosidad", desc: "Piel con un aspecto más sano y descansado." },
      { icon: "◇", label: "Hidratación", desc: "Mejor hidratación y elasticidad de la piel." },
      { icon: "✦", label: "Líneas finas", desc: "Suaviza las líneas superficiales." },
      { icon: "∪", label: "Cuello", desc: "Revitaliza la piel del cuello." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración con analizador facial",
        desc: "Analizamos la hidratación, la textura y las líneas finas de tu piel para confirmar la indicación y definir el número de sesiones.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Sesión de NCTF",
        desc: "Limpiamos la piel, aplicamos crema anestésica y hacemos microinyecciones superficiales de la fórmula en rostro y cuello.",
        detail: "30 a 45 min",
      },
      {
        num: "03",
        title: "Resultados y siguientes sesiones",
        desc: "La piel se ve más luminosa sesión a sesión. Programamos las siguientes aplicaciones y revisamos tu evolución.",
        detail: "Progresivo por sesiones",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Indicación según tu piel",
        desc: "Si tu piel necesita volumen o tensado y no revitalización, te orientamos hacia el tratamiento adecuado.",
      },
      {
        num: "02",
        title: "Asepsia en cada microinyección",
        desc: "Desinfección rigurosa de la piel y material estéril de un solo uso.",
      },
      {
        num: "03",
        title: "Profundidad superficial controlada",
        desc: "La fórmula se deposita en la capa superficial de la piel, donde actúa, con técnica cuidadosa.",
      },
      {
        num: "04",
        title: "Seguimiento entre sesiones",
        desc: "Revisamos cómo responde tu piel antes de cada aplicación, bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "Suspende exfoliantes y retinoides dos o tres días antes",
        "Llega con la piel limpia, sin maquillaje",
        "Avísanos si tienes herpes activo o antecedentes frecuentes",
      ],
      despues: [
        "No te maquilles durante las primeras 12 a 24 horas",
        "Evita sol directo, sauna, vapor y piscina por 48 horas",
        "Es normal ver pequeñas elevaciones, enrojecimiento o puntos de morado leves",
        "Usa protector solar a diario",
        "Asiste a tus sesiones programadas",
      ],
    },
    precio: {
      desde: 700000,
      opciones: [{ label: "Rejuvenecimiento facial y de cuello", detalle: "Ácido hialurónico + 54 activos", valor: 700000 }],
      incluye: [
        "Valoración médica previa con analizador facial",
        "Aplicación de NCTF en rostro y cuello",
        "Anestesia tópica",
        "Indicaciones de cuidado",
      ],
      nota: "El número de sesiones recomendado lo definimos en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta NCTF mesoterapia?", a: "El rejuvenecimiento facial y de cuello con NCTF tiene un valor desde $700.000. En la valoración te indicamos cuántas sesiones recomendamos para tu piel." },
      { q: "¿Cuántas sesiones necesito?", a: "Habitualmente se hacen entre 3 y 5 sesiones espaciadas unas semanas, y luego mantenimiento. Lo define tu valoración." },
      { q: "¿Duele?", a: "Aplicamos crema anestésica antes. Se sienten pinchazos pequeños, tolerables para la mayoría de pacientes." },
      { q: "¿Deja marcas?", a: "Es normal ver pequeñas elevaciones y enrojecimiento que suelen desaparecer en 24 a 48 horas. Puede aparecer algún morado leve." },
      { q: "¿Cuándo se ven los resultados?", a: "Es habitual notar la piel más luminosa después de la primera sesión, y la mejora se acumula con las siguientes." },
      { q: "¿Es igual que un skinbooster?", a: "Ambos mejoran la calidad de la piel. NCTF combina ácido hialurónico con 54 activos; el skinbooster se centra en hidratación con ácido hialurónico. La valoración define cuál te conviene." },
      { q: "¿Quién no puede hacérselo?", a: "No se realiza en embarazo, lactancia, infección o herpes activo en la zona, ni con alergia a sus componentes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para NCTF mesoterapia",
  },

  // ── Hilos tensores ────────────────────────────────────────────────────────
  {
    slug: "hilos-tensores",
    categoria: "faciales",
    grupo: "Hilos",
    nombre: "Hilos tensores",
    resultados: [],
    relacionados: ["hilos-de-colageno", "hidroxiapatita-de-calcio", "sculptra"],
    hero: {
      eyebrow: "Hilos · Efecto tensor",
      titulo: "Levanta y da soporte a tu rostro,",
      tituloEm: "sin cirugía",
      sub: "Los hilos tensores aportan un efecto tensor y ayudan a reposicionar y dar soporte a los tejidos del rostro y el cuello. Definimos con criterio médico cuántos hilos y en qué vectores necesitas.",
    },
    seo: {
      title: "Hilos tensores en Medellín | Clínica Quantum",
      description:
        "Hilos tensores en El Poblado, Medellín: efecto tensor que reposiciona y da soporte a los tejidos del rostro y cuello, sin cirugía. Agenda tu valoración.",
      keywords: [
        "hilos tensores medellín",
        "hilos tensores precio medellín",
        "lifting sin cirugía medellín",
        "hilos tensores cuello",
        "flacidez facial medellín",
      ],
    },
    ficha: {
      duracion: "45 a 60 min",
      sesiones: "1 sesión",
      recuperacion: "Cuidados especiales por 1 a 2 semanas",
      resultados: "Tensor visible, mejora en meses",
    },
    paraQuien: {
      ideal: [
        "Notas descenso leve a moderado de mejillas o del óvalo facial",
        "Tu cuello o la línea mandibular han perdido definición",
        "Buscas un efecto de levantamiento sin cirugía",
        "Quieres complementar un plan de bioestimulación",
      ],
      noIdeal: [
        "Tienes flacidez severa o exceso de piel que requiere una valoración quirúrgica",
        "Estás en embarazo o lactancia",
        "Tienes una infección activa en la zona o trastornos de la coagulación",
        "Tienes enfermedades autoinmunes no controladas",
      ],
    },
    problema: {
      titulo: "Cuando el rostro empieza a descender",
      parrafos: [
        "Las mejillas bajan, el surco se marca más y la mandíbula pierde su línea. Te ves más seria o cansada, aunque no lo estés, y ningún producto tópico devuelve esa posición.",
        "No quieres pasar por un quirófano ni cambiar tu cara. Quieres recuperar soporte, con un resultado que se vea como tú en tu mejor momento.",
      ],
    },
    queEs: {
      titulo: "Qué son los hilos tensores",
      desc: "Son hilos médicos reabsorbibles, con pequeñas espículas o conos, que se colocan bajo la piel con una cánula fina. Al fijarse en el tejido permiten reposicionarlo y dar soporte, con un efecto tensor que se aprecia desde el inicio. Mientras se reabsorben, estimulan la formación de colágeno alrededor, lo que ayuda a mantener el resultado.",
    },
    beneficios: ["Efecto tensor desde el inicio", "Sin cirugía", "Anestesia local", "Estimula colágeno"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◠", label: "Mejillas", desc: "Reposiciona el tercio medio del rostro." },
      { icon: "◡", label: "Línea mandibular", desc: "Define el óvalo facial." },
      { icon: "∪", label: "Cuello", desc: "Soporte y tensión de la piel del cuello." },
      { icon: "▽", label: "Cejas", desc: "Levantamiento sutil de la cola de la ceja, según valoración." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración y diseño de vectores",
        desc: "Analizamos tu rostro con analizador facial, el grado de descenso y la calidad de la piel. Diseñamos los vectores y el número de hilos.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Colocación de los hilos",
        desc: "Marcamos el rostro, aplicamos anestesia local e introducimos los hilos con cánula fina, ajustando la tensión en cada vector.",
        detail: "45 a 60 min",
      },
      {
        num: "03",
        title: "Recuperación y control",
        desc: "El efecto tensor se ve desde el inicio y se afina cuando baja la inflamación. Te acompañamos en el control de los días siguientes.",
        detail: "Control posterior",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Indicación honesta",
        desc: "Los hilos no reemplazan una cirugía. Si tu flacidez es severa, te lo decimos en la valoración.",
      },
      {
        num: "02",
        title: "Diseño anatómico",
        desc: "Planeamos los vectores respetando nervios, vasos y la dirección natural de los tejidos del rostro.",
      },
      {
        num: "03",
        title: "Procedimiento en condiciones de asepsia",
        desc: "Material estéril de un solo uso, desinfección rigurosa y anestesia local.",
      },
      {
        num: "04",
        title: "Seguimiento cercano",
        desc: "Control posterior y canal abierto para dudas, bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios, omega 3 y alcohol una semana antes, si tu médico lo permite",
        "No te hagas otros procedimientos faciales las semanas previas",
        "Llega con la piel limpia, sin maquillaje",
        "Cuéntanos tus antecedentes médicos, medicamentos y alergias",
      ],
      despues: [
        "Duerme boca arriba y evita presionar el rostro los primeros días",
        "Evita gesticular en exceso, masticar alimentos duros y abrir mucho la boca por una o dos semanas",
        "No hagas masajes faciales, ejercicio intenso, sauna ni vapor durante el tiempo indicado",
        "Es normal sentir inflamación, tirantez, morados leves o pequeñas irregularidades que se acomodan",
        "Asiste a tu control",
      ],
    },
    precio: {
      desde: null,
      opciones: [{ label: "Facial / cuello", detalle: "6 hilos", valor: null }],
      incluye: [
        "Valoración médica previa con analizador facial",
        "Diseño de vectores según tu rostro",
        "Colocación de hilos con anestesia local",
        "Indicaciones de cuidado y control posterior",
      ],
      nota: "El valor se cotiza en la valoración según el número de hilos y la zona a tratar.",
    },
    faq: [
      { q: "¿Cuánto cuestan los hilos tensores?", a: "El precio se cotiza en la valoración, porque depende del número de hilos y de la zona. Como referencia, el plan facial o de cuello contempla 6 hilos." },
      { q: "¿Duele el procedimiento?", a: "Usamos anestesia local, así que durante la colocación se siente sobre todo presión. Los días siguientes puede haber molestia y tirantez tolerables." },
      { q: "¿Cuánto dura el efecto?", a: "El tensado se aprecia desde el inicio y el colágeno que se forma ayuda a sostenerlo. Habitualmente dura alrededor de un año o más, según tu piel y tu edad." },
      { q: "¿Cuánto tiempo de recuperación necesito?", a: "Puedes retomar actividades tranquilas en pocos días, pero hay cuidados especiales durante una o dos semanas. La inflamación y los morados suelen ceder en ese tiempo." },
      { q: "¿Qué efectos secundarios puede tener?", a: "Inflamación, morados, tirantez, sensibilidad o pequeñas irregularidades en la piel que habitualmente se acomodan. Te explicamos qué es normal y cuándo consultarnos." },
      { q: "¿Se ven o se sienten los hilos?", a: "Bien colocados no se ven. Al inicio puedes palparlos en algunas zonas; esa sensación disminuye a medida que el tejido se adapta." },
      { q: "¿Se pueden combinar con otros tratamientos?", a: "Sí. Suelen complementarse con hidroxiapatita o Sculptra para mejorar la calidad de la piel. El orden lo definimos en la valoración." },
      { q: "¿Quién no puede hacérselos?", a: "No se colocan en embarazo, lactancia, infección activa en la zona, trastornos de la coagulación ni enfermedades autoinmunes no controladas." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Hilos tensores",
  },

  // ── Hilos de colágeno ─────────────────────────────────────────────────────
  {
    slug: "hilos-de-colageno",
    categoria: "faciales",
    grupo: "Hilos",
    nombre: "Hilos de colágeno",
    resultados: [],
    relacionados: ["hilos-bioestimulacion", "hilos-tensores", "sculptra"],
    hero: {
      eyebrow: "Hilos lisos · Colágeno",
      titulo: "Despierta tu colágeno,",
      tituloEm: "piel más firme y densa",
      sub: "Los hilos de colágeno estimulan la producción de colágeno y ayudan a mejorar la firmeza y la calidad de la piel. Los colocamos con criterio médico en las zonas que más lo necesitan.",
    },
    seo: {
      title: "Hilos de colágeno en Medellín | Clínica Quantum",
      description:
        "Hilos de colágeno en El Poblado, Medellín: hilos lisos que estimulan tu colágeno para mejorar la firmeza y la calidad de la piel. Agenda tu valoración.",
      keywords: [
        "hilos de colágeno medellín",
        "hilos lisos medellín",
        "hilos de colágeno precio",
        "firmeza facial medellín",
      ],
    },
    ficha: {
      duracion: "30 a 45 min",
      sesiones: "Habitualmente 1 sesión",
      recuperacion: "Pocos días con cuidados",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Notas la piel más delgada o con menos firmeza",
        "Tienes flacidez leve y quieres mejorar la calidad de la piel",
        "Te preocupan líneas finas en mejillas o cuello",
        "Buscas un cambio progresivo, sin volumen añadido",
      ],
      noIdeal: [
        "Buscas levantar tejidos descendidos: para eso están los hilos tensores",
        "Estás en embarazo o lactancia",
        "Tienes una infección activa en la zona o trastornos de la coagulación",
        "Tienes enfermedades autoinmunes no controladas",
      ],
    },
    problema: {
      titulo: "Piel que pierde densidad y firmeza",
      parrafos: [
        "Con el tiempo la piel se vuelve más fina, aparecen líneas finas y la textura cambia. No es que el rostro haya bajado, es que la piel ya no tiene el mismo soporte.",
        "Lo que necesitas no es tensar, sino que tu piel vuelva a producir colágeno y recupere cuerpo de forma natural.",
      ],
    },
    queEs: {
      titulo: "Qué son los hilos de colágeno",
      desc: "Son hilos lisos, finos y reabsorbibles que se colocan en la piel con agujas muy delgadas, formando una especie de malla. No levantan el tejido: su función es estimular la formación de colágeno a su alrededor mientras se reabsorben, lo que mejora la firmeza, la densidad y la calidad de la piel de forma progresiva.",
    },
    beneficios: ["Estimula tu colágeno", "Mejora la firmeza", "Piel más densa", "Resultado natural"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◠", label: "Mejillas", desc: "Firmeza y calidad de la piel del tercio medio." },
      { icon: "◡", label: "Contorno facial", desc: "Soporte de la piel en el óvalo." },
      { icon: "∪", label: "Cuello", desc: "Mejora la textura y la firmeza." },
      { icon: "✦", label: "Líneas finas", desc: "Suaviza líneas superficiales en zonas definidas." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración con analizador facial",
        desc: "Revisamos la calidad y la firmeza de tu piel para confirmar que los hilos lisos son lo indicado y definir las zonas.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Colocación de los hilos lisos",
        desc: "Aplicamos anestesia tópica o local y colocamos los hilos en malla con agujas finas en la zona definida.",
        detail: "30 a 45 min",
      },
      {
        num: "03",
        title: "Resultados y seguimiento",
        desc: "El colágeno se forma en las semanas siguientes y la piel gana firmeza de a poco. Revisamos tu evolución en control.",
        detail: "Resultado progresivo",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Hilo correcto para tu objetivo",
        desc: "Diferenciamos si necesitas estimular colágeno con hilos lisos o dar soporte con hilos tensores.",
      },
      {
        num: "02",
        title: "Material estéril y reabsorbible",
        desc: "Cada hilo viene en su aguja estéril de un solo uso y el cuerpo lo reabsorbe con el tiempo.",
      },
      {
        num: "03",
        title: "Distribución planificada",
        desc: "Marcamos la zona y distribuimos los hilos de forma uniforme para un resultado armónico.",
      },
      {
        num: "04",
        title: "Seguimiento médico",
        desc: "Control posterior bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "No te hagas otros procedimientos en la zona las semanas previas",
        "Llega con la piel limpia, sin maquillaje",
        "Cuéntanos tus antecedentes médicos y alergias",
      ],
      despues: [
        "Evita masajes faciales y presionar la zona por una semana",
        "No hagas ejercicio intenso, sauna ni vapor por unos días",
        "Es normal sentir inflamación, sensibilidad o ver morados leves",
        "Usa protector solar a diario",
        "Asiste a tu control",
      ],
    },
    precio: {
      desde: null,
      opciones: [{ label: "50 hilos lisos", valor: null }],
      incluye: [
        "Valoración médica previa con analizador facial",
        "Colocación de hilos lisos en la zona definida",
        "Anestesia tópica o local",
        "Indicaciones de cuidado y control posterior",
      ],
      nota: "El valor se cotiza en la valoración según el número de hilos y la zona a tratar.",
    },
    faq: [
      { q: "¿Cuánto cuestan los hilos de colágeno?", a: "El precio se cotiza en la valoración según el número de hilos y la zona. Como referencia, trabajamos planes de 50 hilos lisos." },
      { q: "¿Levantan el rostro?", a: "No. Los hilos lisos estimulan colágeno y mejoran la firmeza y la calidad de la piel. Para reposicionar tejidos están los hilos tensores." },
      { q: "¿Duele?", a: "Aplicamos anestesia tópica o local. Se sienten pinchazos y presión, tolerables para la mayoría de pacientes." },
      { q: "¿Cuándo se ven los resultados?", a: "La mejora es progresiva y se aprecia en las semanas siguientes, a medida que tu piel forma colágeno nuevo." },
      { q: "¿Qué efectos secundarios tiene?", a: "Lo habitual es inflamación leve, sensibilidad y algunos morados pequeños que desaparecen en pocos días." },
      { q: "¿Se pueden combinar?", a: "Sí, con hilos tensores, Sculptra u otros tratamientos de calidad de piel. El plan lo definimos en la valoración." },
      { q: "¿Quién no puede hacérselos?", a: "No se colocan en embarazo, lactancia, infección activa en la zona, trastornos de la coagulación ni enfermedades autoinmunes no controladas." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Hilos de colágeno",
  },

  // ── Hilos de bioestimulación ──────────────────────────────────────────────
  {
    slug: "hilos-bioestimulacion",
    categoria: "faciales",
    grupo: "Hilos",
    nombre: "Hilos de bioestimulación",
    resultados: [],
    relacionados: ["hilos-de-colageno", "hilos-tensores", "long-lasting"],
    hero: {
      eyebrow: "Hilos · Bioestimulación",
      titulo: "Estimula tu piel donde lo necesitas,",
      tituloEm: "en la medida justa",
      sub: "Los hilos de bioestimulación son hilos lisos reabsorbibles que ayudan a tu piel a producir colágeno. Los trabajamos en planes de 10, 20 o 30 hilos para ajustar la cantidad a tu zona, con criterio médico.",
    },
    seo: {
      title: "Hilos de bioestimulación en Medellín | Clínica Quantum",
      description:
        "Hilos de bioestimulación en El Poblado, Medellín: hilos lisos PDO que estimulan colágeno para mejorar la firmeza de la piel. Planes de 10, 20 o 30 hilos.",
      keywords: [
        "hilos de bioestimulación medellín",
        "hilos pdo medellín",
        "hilos lisos precio",
        "bioestimulación facial medellín",
      ],
    },
    ficha: {
      duracion: "20 a 45 min según hilos",
      sesiones: "Habitualmente 1 sesión",
      recuperacion: "Pocos días con cuidados",
      resultados: "Progresivos, en semanas",
    },
    paraQuien: {
      ideal: [
        "Quieres mejorar la firmeza de una zona puntual",
        "Tienes flacidez leve o piel con poca densidad",
        "Buscas un tratamiento ajustado a una zona pequeña o mediana",
        "Quieres complementar otros tratamientos de rejuvenecimiento",
      ],
      noIdeal: [
        "Buscas levantar tejidos descendidos: para eso están los hilos tensores",
        "Estás en embarazo o lactancia",
        "Tienes una infección activa en la zona o trastornos de la coagulación",
        "Tienes enfermedades autoinmunes no controladas",
      ],
    },
    problema: {
      titulo: "No toda la piel necesita lo mismo",
      parrafos: [
        "A veces la falta de firmeza está en una zona concreta: el cuello, el contorno o las mejillas. Tratar todo el rostro no siempre tiene sentido.",
        "Con los hilos de bioestimulación ajustamos la cantidad a lo que tu piel necesita, para mejorar su calidad sin excesos.",
      ],
    },
    queEs: {
      titulo: "Qué son los hilos de bioestimulación",
      desc: "Son hilos lisos de polidioxanona (PDO), un material médico reabsorbible usado desde hace tiempo en suturas. Se colocan en la piel con agujas finas y, mientras el cuerpo los reabsorbe en los meses siguientes, estimulan la formación de colágeno a su alrededor. No tienen función tensora: mejoran la firmeza y la calidad de la piel de forma gradual.",
    },
    beneficios: ["Planes de 10, 20 o 30 hilos", "Estimula colágeno", "Material reabsorbible", "Sin cirugía"],
    zonasTitulo: "Dónde los usamos",
    zonas: [
      { icon: "◠", label: "Mejillas", desc: "Mejora la firmeza del tercio medio." },
      { icon: "∪", label: "Cuello", desc: "Calidad y densidad de la piel del cuello." },
      { icon: "◡", label: "Papada y contorno", desc: "Firmeza en la piel bajo la mandíbula." },
      { icon: "◇", label: "Zonas puntuales", desc: "Áreas pequeñas con flacidez leve, según valoración." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración con analizador facial",
        desc: "Revisamos la zona y la calidad de tu piel para definir si los hilos de bioestimulación son lo indicado y cuántos necesitas.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Colocación de los hilos",
        desc: "Aplicamos anestesia tópica o local y colocamos los hilos lisos con agujas finas, distribuidos en la zona definida.",
        detail: "20 a 45 min",
      },
      {
        num: "03",
        title: "Resultados y seguimiento",
        desc: "La piel gana firmeza de a poco mientras se forma colágeno nuevo. Revisamos tu evolución en el control.",
        detail: "Resultado progresivo",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Cantidad según tu necesidad",
        desc: "Te recomendamos el plan de 10, 20 o 30 hilos que realmente necesitas, no el más grande.",
      },
      {
        num: "02",
        title: "Material reabsorbible y estéril",
        desc: "Hilos de un solo uso, en aguja estéril, que el cuerpo reabsorbe con el tiempo.",
      },
      {
        num: "03",
        title: "Expectativas claras",
        desc: "Te explicamos que estos hilos mejoran la calidad de la piel y no levantan tejidos.",
      },
      {
        num: "04",
        title: "Seguimiento médico",
        desc: "Control posterior bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita aspirina, antiinflamatorios y alcohol unos días antes, si tu médico lo permite",
        "No te hagas otros procedimientos en la zona las semanas previas",
        "Llega con la piel limpia, sin maquillaje",
        "Cuéntanos tus antecedentes médicos y alergias",
      ],
      despues: [
        "Evita masajes y presionar la zona por una semana",
        "No hagas ejercicio intenso, sauna ni vapor por unos días",
        "Es normal sentir inflamación, sensibilidad o ver morados leves",
        "Usa protector solar a diario",
        "Asiste a tu control",
      ],
    },
    precio: {
      desde: null,
      opciones: [{ label: "x10 / x20 / x30", valor: null }],
      incluye: [
        "Valoración médica previa con analizador facial",
        "Plan de 10, 20 o 30 hilos según tu zona",
        "Anestesia tópica o local",
        "Indicaciones de cuidado y control posterior",
      ],
      nota: "El valor se cotiza en la valoración según el número de hilos y la zona a tratar.",
    },
    faq: [
      { q: "¿Cuánto cuestan los hilos de bioestimulación?", a: "El precio se cotiza en la valoración según el número de hilos, 10, 20 o 30, y la zona a tratar." },
      { q: "¿Cuál es la diferencia con los hilos tensores?", a: "Los hilos tensores tienen espículas que dan soporte y reposicionan. Los de bioestimulación son lisos: estimulan colágeno y mejoran la firmeza, sin levantar." },
      { q: "¿Duele?", a: "Aplicamos anestesia tópica o local. Se sienten pinchazos y presión, tolerables para la mayoría de pacientes." },
      { q: "¿Cuándo veo resultados?", a: "La mejora es gradual: se aprecia en las semanas siguientes y sigue avanzando mientras el hilo se reabsorbe." },
      { q: "¿Qué efectos secundarios puede haber?", a: "Lo habitual es inflamación leve, sensibilidad y pequeños morados que ceden en pocos días." },
      { q: "¿Se pueden combinar?", a: "Sí, con hilos tensores, Long Lasting u otros tratamientos de calidad de piel. Lo planeamos en la valoración." },
      { q: "¿Quién no puede hacérselos?", a: "No se colocan en embarazo, lactancia, infección activa en la zona, trastornos de la coagulación ni enfermedades autoinmunes no controladas." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Hilos de bioestimulación",
  },

  // ── INDIBA facial ─────────────────────────────────────────────────────────
  {
    slug: "indiba-facial",
    categoria: "faciales",
    grupo: "Aparatología INDIBA",
    nombre: "INDIBA facial",
    resultados: [],
    relacionados: ["hidroxiapatita-de-calcio", "hilos-tensores", "skinbooster"],
    hero: {
      eyebrow: "INDIBA · Radiofrecuencia facial",
      titulo: "Piel más firme y descansada,",
      tituloEm: "reactivada con calor",
      sub: "INDIBA es radiofrecuencia médica. En el rostro la usamos como tratamiento dermatológico, como complemento de inyectables o para potenciar un efecto lifting, en un plan de 12 sesiones con criterio médico.",
    },
    seo: {
      title: "INDIBA facial en Medellín | Clínica Quantum",
      description:
        "INDIBA facial en El Poblado, Medellín: radiofrecuencia médica para mejorar la firmeza y la calidad de la piel. Paquete de 12 sesiones, sin incapacidad.",
      keywords: [
        "indiba facial medellín",
        "radiofrecuencia facial medellín",
        "indiba precio medellín",
        "flacidez facial sin agujas",
      ],
    },
    ficha: {
      duracion: "30 a 45 min por sesión",
      sesiones: "Paquete de 12 sesiones",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Progresivos a lo largo del plan",
    },
    paraQuien: {
      ideal: [
        "Buscas mejorar la firmeza y el tono de tu piel sin agujas",
        "Te hiciste inyectables o hilos y quieres complementarlos",
        "Tu piel se ve apagada, inflamada o cansada",
        "Prefieres un tratamiento sin incapacidad",
      ],
      noIdeal: [
        "Tienes marcapasos u otro dispositivo electrónico implantado",
        "Estás en embarazo",
        "Tienes cáncer activo, fiebre o una infección en la zona",
        "Tienes implantes metálicos en la zona a tratar: lo revisamos antes",
      ],
    },
    problema: {
      titulo: "Cuando la piel necesita reactivarse",
      parrafos: [
        "La piel pierde tono, se ve cansada y los resultados de otros tratamientos parecen apagarse antes de tiempo. No siempre hace falta otra aguja para mejorarla.",
        "A veces lo que tu piel necesita es un estímulo constante y cómodo, que mejore su calidad y acompañe lo que ya te has hecho.",
      ],
    },
    queEs: {
      titulo: "Qué es INDIBA facial",
      desc: "INDIBA es un equipo de radiofrecuencia médica. Transmite energía que genera calor controlado en los tejidos y activa sus procesos naturales, lo que ayuda a mejorar la firmeza, el tono y la calidad de la piel. En el rostro lo usamos como tratamiento dermatológico, como complemento de inyectables o como apoyo a un efecto lifting. La sensación es de calor agradable.",
    },
    beneficios: ["Radiofrecuencia médica", "Sin agujas ni incapacidad", "Paquete de 12 sesiones", "Complementa inyectables"],
    zonasTitulo: "Para qué lo usamos",
    zonas: [
      { icon: "○", label: "Dermatológico", desc: "Mejora la calidad y el aspecto de la piel." },
      { icon: "◇", label: "Complemento de inyectables", desc: "Acompaña bioestimuladores y rellenos en tu plan." },
      { icon: "◠", label: "Efecto lifting", desc: "Apoya la firmeza y el tono del rostro." },
      { icon: "∪", label: "Contorno y cuello", desc: "Trabaja la firmeza de la piel en óvalo y cuello." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración con analizador facial",
        desc: "Revisamos tu piel, tus tratamientos previos y tus antecedentes para definir el enfoque del plan: dermatológico, complemento o lifting.",
        detail: "Valoración médica previa",
      },
      {
        num: "02",
        title: "Sesión de INDIBA",
        desc: "Aplicamos un medio conductor y deslizamos el cabezal por el rostro. Sientes calor progresivo y agradable durante la sesión.",
        detail: "30 a 45 min",
      },
      {
        num: "03",
        title: "Plan de 12 sesiones y seguimiento",
        desc: "Los cambios se van sumando sesión a sesión. Revisamos tu evolución durante el plan para ajustar lo necesario.",
        detail: "12 sesiones",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Revisión de contraindicaciones",
        desc: "Antes de iniciar confirmamos que no tengas marcapasos, embarazo ni otras condiciones que impidan la radiofrecuencia.",
      },
      {
        num: "02",
        title: "Temperatura controlada",
        desc: "Ajustamos la intensidad según lo que sientes durante la sesión, para trabajar con calor efectivo y cómodo.",
      },
      {
        num: "03",
        title: "Plan coordinado con tus inyectables",
        desc: "Si te hiciste otros tratamientos, programamos las sesiones en los tiempos adecuados.",
      },
      {
        num: "04",
        title: "Seguimiento del plan",
        desc: "Evaluamos tu progreso bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Llega con la piel limpia, sin maquillaje",
        "Retira aretes, cadenas y otros objetos metálicos",
        "Cuéntanos si tienes marcapasos, implantes metálicos o estás en embarazo",
        "Avísanos si te hiciste inyectables recientemente",
      ],
      despues: [
        "Puedes retomar tu rutina el mismo día",
        "Es normal un enrojecimiento leve que desaparece en poco tiempo",
        "Mantente bien hidratada",
        "Usa protector solar a diario",
        "Asiste a tus sesiones con la frecuencia indicada",
      ],
    },
    precio: {
      desde: 2100000,
      opciones: [
        { label: "Paquete facial", detalle: "12 sesiones (dermatológico, complemento de inyectables o lifting)", valor: 2100000 },
      ],
      incluye: [
        "Valoración médica previa",
        "12 sesiones de INDIBA facial",
        "Plan enfocado en tu objetivo",
        "Seguimiento durante el paquete",
      ],
      nota: "La frecuencia de las sesiones la definimos en la valoración.",
    },
    faq: [
      { q: "¿Cuánto cuesta INDIBA facial?", a: "El paquete facial de 12 sesiones tiene un valor desde $2.100.000. Puede enfocarse como tratamiento dermatológico, complemento de inyectables o lifting." },
      { q: "¿Duele?", a: "No es un tratamiento invasivo. Se siente calor progresivo que la mayoría describe como agradable, y ajustamos la intensidad según tu tolerancia." },
      { q: "¿Tiene incapacidad?", a: "No. Puedes volver a tu rutina el mismo día. Como mucho, un enrojecimiento leve que pasa rápido." },
      { q: "¿Cuándo se notan los resultados?", a: "Es habitual ver la piel más luminosa desde las primeras sesiones. La mejora en firmeza es progresiva a lo largo del plan." },
      { q: "¿Se puede combinar con inyectables?", a: "Sí, es uno de sus usos principales. Coordinamos los tiempos entre sesiones y aplicaciones en la valoración." },
      { q: "¿Quién no puede hacérselo?", a: "No se realiza con marcapasos o dispositivos electrónicos implantados, embarazo, cáncer activo, fiebre o infección en la zona. Los implantes metálicos se valoran antes." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para INDIBA facial",
  },

  // ── Hydrafacial ───────────────────────────────────────────────────────────
  {
    slug: "hydrafacial",
    categoria: "faciales",
    grupo: "Cosmetología",
    nombre: "Hydrafacial",
    resultados: [],
    relacionados: ["limpieza-facial", "alta-hidratacion", "porcelanizacion-facial"],
    hero: {
      eyebrow: "Cosmetología · Hydrafacial",
      titulo: "Piel limpia, hidratada y luminosa",
      tituloEm: "desde la primera sesión",
      sub: "Hydrafacial es una limpieza profunda con infusión de nutrientes. Limpia, extrae impurezas e hidrata en una misma sesión, con un protocolo adaptado a tu tipo de piel.",
    },
    seo: {
      title: "Hydrafacial en Medellín | Clínica Quantum",
      description:
        "Hydrafacial en El Poblado, Medellín: limpieza facial profunda con infusión de nutrientes para una piel hidratada y luminosa desde la primera sesión.",
      keywords: [
        "hydrafacial medellín",
        "hydrafacial precio medellín",
        "limpieza facial profunda medellín",
        "hidratación facial el poblado",
      ],
    },
    ficha: {
      duracion: "45 a 60 min",
      sesiones: "1 sesión, repetible cada mes",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Visibles desde la primera sesión",
    },
    paraQuien: {
      ideal: [
        "Tu piel se ve opaca, congestionada o deshidratada",
        "Tienes poros visibles y puntos negros",
        "Quieres lucir tu piel fresca antes de un evento",
        "Buscas un cuidado profesional periódico",
        "Quieres preparar tu piel para otros tratamientos",
      ],
      noIdeal: [
        "Tienes acné activo muy inflamado o una infección en la piel: primero lo valoramos",
        "Tienes quemadura solar o una lesión abierta en el rostro",
        "Te hiciste un peeling o láser muy recientemente",
        "Usas medicamentos que sensibilizan la piel y no lo has consultado",
      ],
    },
    problema: {
      titulo: "Cuando tu piel se ve cansada",
      parrafos: [
        "Contaminación, maquillaje, sol y estrés se acumulan en los poros. La piel pierde brillo, se siente áspera y se ve cansada aunque sigas tu rutina en casa con juicio y uses buenos productos.",
        "A veces no necesitas un procedimiento invasivo, sino una limpieza a fondo y una buena hidratación para volver a verte con la piel fresca, sentirte cómoda sin maquillaje y llegar a ese evento con la piel lista.",
      ],
    },
    queEs: {
      titulo: "Qué es Hydrafacial",
      desc: "Es un tratamiento facial con tecnología Hydrafacial que combina en una sola sesión limpieza, exfoliación suave, extracción de impurezas por succión e infusión de sueros con nutrientes e hidratantes. Una punta recorre el rostro limpiando y aplicando una succión suave que despeja los poros, y a la vez deposita los sueros sobre la piel recién limpia, cuando mejor los recibe. Es cómodo, no requiere recuperación y deja la piel hidratada y luminosa desde el primer día.",
    },
    beneficios: ["Luminosidad inmediata", "Limpieza profunda", "Infusión de nutrientes", "Sin recuperación"],
    zonasTitulo: "Qué hace por tu piel",
    zonas: [
      { icon: "○", label: "Limpia", desc: "Retira impurezas y células muertas." },
      { icon: "◇", label: "Extrae", desc: "Descongestiona poros y puntos negros por succión suave." },
      { icon: "✦", label: "Nutre", desc: "Infunde sueros con nutrientes e hidratantes." },
      { icon: "◠", label: "Ilumina", desc: "Piel más luminosa y suave al terminar." },
    ],
    pasos: [
      {
        num: "01",
        title: "Diagnóstico de tu piel",
        desc: "Revisamos tu tipo de piel y cómo está hoy, con analizador facial cuando aplica, para elegir el protocolo y los sueros adecuados, o decirte si conviene otro tratamiento.",
        detail: "Antes de la sesión",
      },
      {
        num: "02",
        title: "Sesión de Hydrafacial",
        desc: "Limpiamos, exfoliamos con suavidad, extraemos impurezas por succión y aplicamos la infusión de nutrientes. Es una experiencia cómoda y relajante, sin agujas.",
        detail: "45 a 60 min",
      },
      {
        num: "03",
        title: "Resultado y rutina",
        desc: "Sales con la piel hidratada y luminosa, lista para seguir tu día. Te damos recomendaciones de cuidado en casa y la frecuencia ideal para mantener el resultado.",
        detail: "Visible de inmediato",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Protocolo según tu tipo de piel",
        desc: "Ajustamos cada fase del Hydrafacial a si tu piel es grasa, seca, mixta o sensible.",
      },
      {
        num: "02",
        title: "Productos adecuados para ti",
        desc: "Elegimos los sueros y activos según lo que tu piel necesita y tus sensibilidades.",
      },
      {
        num: "03",
        title: "Higiene en cada sesión",
        desc: "Puntas y material de un solo uso o desinfectados según protocolo.",
      },
      {
        num: "04",
        title: "Respaldo médico",
        desc: "Si detectamos algo que requiere otro tratamiento, te orientamos bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita exfoliantes y retinoides dos o tres días antes",
        "No tomes sol intenso los días previos",
        "Puedes llegar maquillada: la limpieza es parte del protocolo",
        "Cuéntanos si usas medicamentos para el acné o tienes piel sensible",
      ],
      despues: [
        "Evita maquillarte durante las primeras horas",
        "Usa protector solar",
        "Evita sauna, vapor y exfoliantes por 24 a 48 horas",
        "No manipules los poros ni toques la piel con las manos sin lavar",
        "Mantén tu piel hidratada en casa",
      ],
    },
    precio: {
      desde: 220000,
      opciones: [{ label: "Sesión", detalle: "Limpieza facial profunda con multinutrientes", valor: 220000 }],
      incluye: [
        "Diagnóstico de tu tipo de piel",
        "Limpieza facial profunda con multinutrientes",
        "Protocolo adaptado a tu piel",
        "Recomendaciones de cuidado en casa",
      ],
    },
    faq: [
      { q: "¿Cuánto cuesta un Hydrafacial?", a: "La sesión de Hydrafacial, una limpieza facial profunda con multinutrientes, tiene un valor desde $220.000 COP. Incluye el diagnóstico de tu tipo de piel, el protocolo adaptado a ella y recomendaciones de cuidado en casa." },
      { q: "¿Duele?", a: "No suele doler. Es un tratamiento cómodo que muchas personas encuentran relajante; en la fase de extracción puedes sentir una succión suave y, en pieles sensibles, un leve cosquilleo que ajustamos si te molesta." },
      { q: "¿Cuándo se ven los resultados y cuánto duran?", a: "Desde la primera sesión la piel queda más limpia, hidratada y luminosa. Ese efecto se mantiene habitualmente algunos días o semanas, según tu piel y tus cuidados; por eso se recomienda repetirlo de forma periódica." },
      { q: "¿Cada cuánto me lo puedo hacer?", a: "Habitualmente una vez al mes, según tu piel y tus objetivos. Para un evento puedes hacer una sesión puntual unos días antes; si buscas mantener la piel en buen estado, te recomendamos un plan periódico en la sesión." },
      { q: "¿Deja la piel roja? ¿Tiene recuperación?", a: "Puede quedar un enrojecimiento leve que desaparece en pocas horas y no requiere recuperación: vuelves a tu rutina el mismo día. Durante las primeras horas evita maquillarte y usa protector solar." },
      { q: "¿Qué diferencia tiene con una limpieza facial?", a: "Ambas limpian a fondo. La limpieza facial profunda es un protocolo manual por fases, mientras que Hydrafacial usa su tecnología para extraer por succión e infundir sueros con nutrientes en la misma sesión. Te orientamos según tu piel." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Puede alternarse con la alta hidratación o la porcelanización facial y es una buena preparación para tratamientos médicos de la piel. Si tienes programado un peeling o láser, te indicamos los tiempos para no sensibilizarla." },
      { q: "¿Quién no debe hacérselo?", a: "No está indicado con acné muy inflamado, infección, quemadura solar o heridas abiertas en el rostro, ni justo después de un peeling o láser. Si usas medicamentos que sensibilizan la piel, cuéntanos para valorar si es el momento." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Hydrafacial",
  },

  // ── Limpieza facial profunda ──────────────────────────────────────────────
  {
    slug: "limpieza-facial",
    categoria: "faciales",
    grupo: "Cosmetología",
    nombre: "Limpieza facial profunda",
    resultados: [],
    relacionados: ["hydrafacial", "porcelanizacion-facial", "alta-hidratacion"],
    hero: {
      eyebrow: "Cosmetología · Limpieza profunda",
      titulo: "Poros despejados y piel fresca,",
      tituloEm: "en equilibrio",
      sub: "Nuestra limpieza facial profunda destapa los poros, descongestiona y deja la piel fresca y equilibrada. Un protocolo adaptado a tu tipo de piel, la base de cualquier cuidado.",
    },
    seo: {
      title: "Limpieza facial profunda en Medellín | Clínica Quantum",
      description:
        "Limpieza facial profunda en El Poblado, Medellín: destapa poros, descongestiona y deja la piel fresca y equilibrada con un protocolo según tu tipo de piel.",
      keywords: [
        "limpieza facial medellín",
        "limpieza facial profunda medellín",
        "limpieza facial el poblado",
        "limpieza facial precio medellín",
        "puntos negros tratamiento",
      ],
    },
    ficha: {
      duracion: "60 a 90 min",
      sesiones: "1 sesión, cada 4 a 8 semanas",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Piel fresca desde el primer día",
    },
    paraQuien: {
      ideal: [
        "Tienes poros congestionados o puntos negros",
        "Tu piel se ve grasa, opaca o con textura irregular",
        "Quieres sentir la piel fresca y ligera otra vez",
        "Quieres un cuidado profesional periódico",
        "Vas a iniciar otros tratamientos y quieres preparar la piel",
      ],
      noIdeal: [
        "Tienes acné muy inflamado: primero lo valoramos para un tratamiento médico",
        "Tienes quemadura solar, heridas o una infección en la piel",
        "Te hiciste un peeling o láser muy recientemente",
        "Usas medicamentos que sensibilizan la piel y no lo has consultado",
      ],
    },
    problema: {
      titulo: "Productos van y vienen, la base es la limpieza",
      parrafos: [
        "Poros tapados, puntos negros, brillo o textura áspera: muchas veces es acumulación de grasa, células muertas y residuos que el lavado diario no logra retirar del todo, por más que cambies de producto.",
        "Una limpieza profunda bien hecha le devuelve a tu piel su equilibrio, la deja respirar y hace que tus productos y tratamientos funcionen mejor. Es la base sobre la que se construye cualquier cuidado.",
      ],
    },
    queEs: {
      titulo: "Qué incluye la limpieza facial profunda",
      desc: "Es un protocolo por fases: revisión de tu piel, limpieza, exfoliación, preparación de los poros, extracción cuidadosa de comedones, mascarilla según tu tipo de piel, hidratación y protección. Los comedones se forman cuando la grasa y las células muertas llenan el poro, y se ven como puntos negros o blancos. Preparar la piel antes de extraer permite retirarlos con menos trauma, y la mascarilla y la hidratación final ayudan a calmarla. Se adapta a cada piel, ya sea grasa, seca, mixta o sensible.",
    },
    beneficios: ["Poros descongestionados", "Piel fresca y equilibrada", "Según tu tipo de piel", "Sin recuperación"],
    zonasTitulo: "Para qué tipo de piel",
    zonas: [
      { icon: "○", label: "Piel grasa", desc: "Controla el brillo y descongestiona los poros." },
      { icon: "◇", label: "Piel mixta", desc: "Equilibra cada zona según lo que necesita." },
      { icon: "◠", label: "Piel seca", desc: "Limpia sin agredir y aporta hidratación." },
      { icon: "✦", label: "Piel apagada", desc: "Devuelve frescura y una textura más suave." },
    ],
    pasos: [
      {
        num: "01",
        title: "Diagnóstico de tu piel",
        desc: "Evaluamos tu tipo de piel, su sensibilidad y las zonas más congestionadas, con analizador facial cuando aplica, para armar un protocolo a tu medida.",
        detail: "Antes de la sesión",
      },
      {
        num: "02",
        title: "Limpieza por fases",
        desc: "Hacemos limpieza, exfoliación, preparación de poros, extracción cuidadosa, mascarilla e hidratación, con productos elegidos para tu tipo de piel.",
        detail: "60 a 90 min",
      },
      {
        num: "03",
        title: "Rutina y frecuencia",
        desc: "Te dejamos recomendaciones de cuidado en casa y la frecuencia ideal, habitualmente cada 4 a 8 semanas, para que tu piel se mantenga equilibrada.",
        detail: "Piel fresca de inmediato",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Protocolo según tu piel",
        desc: "No aplicamos una plantilla: cada fase se ajusta a tu tipo de piel y su sensibilidad.",
      },
      {
        num: "02",
        title: "Extracción con técnica cuidadosa",
        desc: "Preparamos los poros y extraemos con cuidado para no lastimar la piel.",
      },
      {
        num: "03",
        title: "Productos adecuados para ti",
        desc: "Elegimos limpiadores, mascarillas e hidratantes según lo que tu piel necesita.",
      },
      {
        num: "04",
        title: "Respaldo médico",
        desc: "Si vemos acné, manchas u otra condición que requiere tratamiento médico, te orientamos bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita exfoliantes y retinoides dos o tres días antes",
        "No tomes sol intenso los días previos",
        "Evita depilar o rasurar el rostro el día anterior",
        "Cuéntanos si usas medicamentos para el acné o tienes piel sensible",
      ],
      despues: [
        "Evita maquillarte el resto del día",
        "Usa protector solar",
        "No manipules ni toques los poros",
        "Evita sauna, vapor y exfoliantes por 48 horas",
        "Es normal un enrojecimiento leve por algunas horas",
      ],
    },
    precio: {
      desde: 150000,
      opciones: [{ label: "Sesión", valor: 150000 }],
      incluye: [
        "Diagnóstico de tu tipo de piel",
        "Limpieza facial profunda por fases",
        "Mascarilla e hidratación según tu piel",
        "Recomendaciones de cuidado en casa",
      ],
    },
    faq: [
      { q: "¿Cuánto cuesta la limpieza facial profunda?", a: "La sesión de limpieza facial profunda tiene un valor desde $150.000 COP. Incluye el diagnóstico de tu tipo de piel, la limpieza por fases con extracción, mascarilla e hidratación según tu piel y recomendaciones de cuidado en casa." },
      { q: "¿Duele la extracción?", a: "Puede generar una molestia leve en algunas zonas, sobre todo nariz y mentón, donde suele haber más comedones. Preparamos los poros antes para que la extracción sea lo más cómoda posible y ajustamos si te molesta." },
      { q: "¿Cuándo se nota y cuánto dura?", a: "Desde el mismo día sientes la piel más limpia, fresca y suave. Como la piel sigue produciendo grasa y células muertas, el efecto se mantiene unas semanas; tu rutina en casa ayuda a que dure más." },
      { q: "¿Queda la piel roja? ¿Tiene recuperación?", a: "Es normal un enrojecimiento leve por algunas horas, sobre todo en las zonas de extracción. No requiere recuperación y retomas tu rutina el mismo día; solo evita maquillarte ese día y usa protector solar." },
      { q: "¿Cada cuánto debo hacérmela?", a: "Habitualmente cada 4 a 8 semanas, según tu tipo de piel. Las pieles grasas o congestionadas suelen necesitarla más seguido que las secas. Te recomendamos la frecuencia en la sesión." },
      { q: "¿Qué diferencia hay con Hydrafacial?", a: "La limpieza profunda es un protocolo manual por fases. Hydrafacial usa tecnología para extraer por succión e infundir nutrientes. Te orientamos según tu piel." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Puede alternarse con Hydrafacial, la alta hidratación o la porcelanización facial, y es una buena preparación antes de tratamientos médicos. Si tienes acné, puede acompañar el tratamiento de acné que se indique en la valoración." },
      { q: "¿Sirve si tengo acné? ¿Quién no debe hacérsela?", a: "En acné leve puede ayudar a descongestionar. Si el acné es inflamado, primero lo valoramos para indicarte un tratamiento médico. Tampoco se indica con quemadura solar, heridas, infección en la piel ni justo después de un peeling o láser." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Limpieza facial profunda",
  },

  // ── Porcelanización facial ────────────────────────────────────────────────
  {
    slug: "porcelanizacion-facial",
    categoria: "faciales",
    grupo: "Cosmetología",
    nombre: "Porcelanización facial",
    resultados: [],
    relacionados: ["hydrafacial", "limpieza-facial", "cosmelan"],
    hero: {
      eyebrow: "Cosmetología · Porcelanización",
      titulo: "Un tono uniforme y luminoso,",
      tituloEm: "acabado tipo porcelana",
      sub: "La porcelanización facial combina limpieza profunda y mascarilla aclarante para lograr un acabado uniforme y luminoso. Ideal cuando quieres que tu piel se vea pareja y descansada.",
    },
    seo: {
      title: "Porcelanización facial en Medellín | Clínica Quantum",
      description:
        "Porcelanización facial en El Poblado, Medellín: limpieza profunda y mascarilla aclarante para una piel de tono uniforme y acabado luminoso tipo porcelana.",
      keywords: [
        "porcelanización facial medellín",
        "porcelanización facial precio",
        "piel luminosa tratamiento medellín",
        "mascarilla aclarante facial",
      ],
    },
    ficha: {
      duracion: "60 a 90 min",
      sesiones: "1 sesión, repetible",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Luminosidad desde el primer día",
    },
    paraQuien: {
      ideal: [
        "Tu piel se ve opaca o con tono disparejo",
        "Quieres un acabado luminoso antes de un evento",
        "Quieres que tu maquillaje se vea más uniforme o usar menos",
        "Buscas un cuidado periódico que unifique el tono",
        "Tienes poros congestionados y quieres una piel más pareja",
      ],
      noIdeal: [
        "Tienes manchas profundas o melasma: para eso hay tratamientos médicos despigmentantes",
        "Tienes quemadura solar, heridas o una infección en la piel",
        "Te hiciste un peeling o láser muy recientemente",
        "Tienes piel muy sensible o reactiva sin valorar antes",
      ],
    },
    problema: {
      titulo: "Cuando el tono de tu piel no se ve parejo",
      parrafos: [
        "La piel apagada, con zonas más oscuras o un tono irregular, hace que te veas cansada aunque te maquilles. Y el maquillaje no siempre logra disimularlo, sobre todo con luz natural o en fotos.",
        "Una piel limpia y con tono uniforme refleja mejor la luz y se ve descansada. Ese acabado liso y luminoso, tipo porcelana, es lo que buscamos con la porcelanización, respetando siempre la naturalidad de tu piel.",
      ],
    },
    queEs: {
      titulo: "Qué es la porcelanización facial",
      desc: "Es un protocolo de cosmetología que empieza con una limpieza profunda y termina con una mascarilla aclarante. Cuando las células muertas se acumulan en la superficie, la piel refleja peor la luz y el tono se ve más apagado y disparejo; al retirarlas y aplicar activos aclarantes sobre una piel limpia, el acabado se ve más liso y uniforme. No es un tratamiento para manchas profundas: para esos casos te orientamos a opciones médicas.",
    },
    beneficios: ["Tono más uniforme", "Acabado luminoso", "Limpieza profunda incluida", "Sin recuperación"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "○", label: "Luminosidad", desc: "Piel con brillo saludable, no graso." },
      { icon: "◇", label: "Tono", desc: "Aspecto más parejo y uniforme." },
      { icon: "✦", label: "Textura", desc: "Piel más suave y lisa al tacto." },
      { icon: "◠", label: "Poros", desc: "Poros más limpios y menos visibles." },
    ],
    pasos: [
      {
        num: "01",
        title: "Diagnóstico de tu piel",
        desc: "Revisamos tu tipo de piel y su tono, con analizador facial cuando aplica, para confirmar que la porcelanización es lo indicado.",
        detail: "Antes de la sesión",
      },
      {
        num: "02",
        title: "Limpieza y mascarilla aclarante",
        desc: "Hacemos una limpieza profunda con extracción de impurezas y luego aplicamos la mascarilla aclarante, con productos adecuados a tu tipo de piel y su sensibilidad.",
        detail: "60 a 90 min",
      },
      {
        num: "03",
        title: "Resultado y cuidados",
        desc: "Sales con la piel luminosa y un tono más parejo. Te damos indicaciones de protección solar y cuidado en casa para mantener el acabado por más tiempo.",
        detail: "Luminosidad inmediata",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Protocolo según tu tipo de piel",
        desc: "Ajustamos la limpieza y la mascarilla a la sensibilidad de tu piel.",
      },
      {
        num: "02",
        title: "Productos adecuados para ti",
        desc: "Elegimos los activos aclarantes según tu tipo de piel y tus sensibilidades.",
      },
      {
        num: "03",
        title: "Expectativas claras",
        desc: "Te explicamos qué puede lograr la porcelanización y cuándo una mancha necesita tratamiento médico.",
      },
      {
        num: "04",
        title: "Respaldo médico",
        desc: "Si tu piel necesita algo más, te orientamos bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita exfoliantes y retinoides dos o tres días antes",
        "No tomes sol intenso ni te broncees los días previos",
        "Evita depilar o rasurar el rostro el día anterior",
        "Cuéntanos si tienes piel sensible o alergias a productos",
      ],
      despues: [
        "Usa protector solar todos los días y reaplícalo",
        "Evita el sol directo los días siguientes",
        "No te maquilles el resto del día",
        "Evita sauna, vapor y exfoliantes por 48 horas",
        "Hidrata tu piel con los productos que te recomendemos",
      ],
    },
    precio: {
      desde: 180000,
      opciones: [{ label: "Sesión", detalle: "Limpieza profunda + mascarilla aclarante", valor: 180000 }],
      incluye: [
        "Diagnóstico de tu tipo de piel",
        "Limpieza facial profunda",
        "Mascarilla aclarante",
        "Recomendaciones de cuidado en casa",
      ],
    },
    faq: [
      { q: "¿Cuánto cuesta la porcelanización facial?", a: "La sesión tiene un valor desde $180.000 COP e incluye limpieza facial profunda y mascarilla aclarante, además del diagnóstico de tu tipo de piel y recomendaciones de cuidado en casa para mantener el acabado." },
      { q: "¿Quita las manchas?", a: "Ayuda a que el tono se vea más uniforme y luminoso, pero no trata manchas profundas ni melasma. Para eso tenemos tratamientos médicos como Cosmelan." },
      { q: "¿Duele?", a: "No suele doler. Durante la extracción puede haber una molestia leve en algunas zonas y la mascarilla puede generar un cosquilleo o calor pasajero. Si tu piel es sensible, ajustamos los productos para que estés cómoda." },
      { q: "¿Cuándo se ve el resultado y cuánto dura?", a: "Desde el mismo día notas la piel más luminosa, suave y pareja. El acabado se mantiene habitualmente algunas semanas y dura más si usas protector solar a diario y cuidas tu piel en casa." },
      { q: "¿Cada cuánto me la puedo hacer?", a: "Depende de tu piel y de lo que buscas. Habitualmente se dejan varias semanas entre una sesión y otra; puede hacerse de forma puntual antes de un evento o como parte de un cuidado periódico que te recomendamos en la sesión." },
      { q: "¿Tiene efectos secundarios? ¿Puedo tomar sol después?", a: "No requiere recuperación, aunque puede quedar un enrojecimiento leve por algunas horas. Es mejor evitar el sol directo los días siguientes y usar protector solar a diario, porque la piel recién tratada es más sensible." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Puede alternarse con Hydrafacial o la limpieza facial profunda. Si tienes manchas profundas o melasma, en la valoración te orientamos hacia Cosmelan y definimos los tiempos para no sensibilizar la piel." },
      { q: "¿Quién no debe hacérsela?", a: "No se indica con quemadura solar, heridas, infección en la piel ni justo después de un peeling o láser. Si tu piel es muy sensible o reactiva, o tienes alergia a productos, lo revisamos antes de la sesión." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Porcelanización facial",
  },

  // ── Alta hidratación facial ───────────────────────────────────────────────
  {
    slug: "alta-hidratacion",
    categoria: "faciales",
    grupo: "Cosmetología",
    nombre: "Alta hidratación facial",
    resultados: [],
    relacionados: ["hydrafacial", "skinbooster", "limpieza-facial"],
    hero: {
      eyebrow: "Cosmetología · Hidratación profunda",
      titulo: "Tu piel vuelve a sentirse suave,",
      tituloEm: "hidratada y con luz",
      sub: "La alta hidratación facial es una limpieza profunda con mascarilla hidratante para piel apagada o reseca. Un alivio inmediato para la piel que se siente tirante.",
    },
    seo: {
      title: "Alta hidratación facial en Medellín | Clínica Quantum",
      description:
        "Alta hidratación facial en El Poblado, Medellín: limpieza profunda y mascarilla hidratante para piel apagada o reseca. Piel suave y luminosa de inmediato.",
      keywords: [
        "hidratación facial medellín",
        "tratamiento piel seca medellín",
        "hidratación facial profunda",
        "facial hidratante el poblado",
      ],
    },
    ficha: {
      duracion: "60 a 90 min",
      sesiones: "1 sesión, repetible",
      recuperacion: "Retomas tu rutina el mismo día",
      resultados: "Piel suave desde el primer día",
    },
    paraQuien: {
      ideal: [
        "Tu piel se siente tirante, reseca o áspera",
        "Se ve apagada o con líneas de deshidratación",
        "Pasas mucho tiempo en aire acondicionado, sol o viajes",
        "Quieres que tu maquillaje luzca mejor",
        "Buscas un facial relajante que alivie la piel de inmediato",
      ],
      noIdeal: [
        "Buscas tratar arrugas o flacidez: para eso hay tratamientos médicos",
        "Tienes quemadura solar, heridas o una infección en la piel",
        "Te hiciste un peeling o láser muy recientemente",
        "Tienes una dermatitis activa sin valorar antes",
      ],
    },
    problema: {
      titulo: "Cuando tu piel tiene sed",
      parrafos: [
        "La piel reseca se siente tirante, se ve apagada y marca líneas finas que antes no notabas. El maquillaje se cuartea, las cremas parecen no alcanzar y la piel se irrita con facilidad.",
        "Devolverle a tu piel la hidratación que perdió cambia cómo se ve y cómo se siente desde la primera sesión: más suave, más cómoda y con esa luz que la resequedad le había quitado.",
      ],
    },
    queEs: {
      titulo: "Qué es la alta hidratación facial",
      desc: "Es un protocolo de cosmetología que combina una limpieza profunda con una mascarilla hidratante. La capa más externa de la piel funciona como una barrera que retiene el agua; cuando se altera por el sol, el aire acondicionado, el frío o productos agresivos, la piel pierde agua y se siente tirante. Primero retiramos impurezas y células muertas para que la piel reciba mejor los activos, y luego aplicamos la hidratación. El resultado es una piel más suave, flexible y luminosa.",
    },
    beneficios: ["Hidratación profunda", "Alivia la tirantez", "Piel suave y luminosa", "Sin recuperación"],
    zonasTitulo: "Qué mejora",
    zonas: [
      { icon: "◇", label: "Hidratación", desc: "Piel más flexible y cómoda." },
      { icon: "○", label: "Luminosidad", desc: "Adiós al aspecto apagado." },
      { icon: "✦", label: "Líneas de deshidratación", desc: "Se suavizan al recuperar agua." },
      { icon: "◠", label: "Textura", desc: "Piel suave al tacto." },
    ],
    pasos: [
      {
        num: "01",
        title: "Diagnóstico de tu piel",
        desc: "Revisamos tu nivel de hidratación, la sensibilidad y la textura de tu piel, con analizador facial cuando aplica, para elegir los productos adecuados.",
        detail: "Antes de la sesión",
      },
      {
        num: "02",
        title: "Limpieza y mascarilla hidratante",
        desc: "Hacemos una limpieza profunda suave, que no reseque más la piel, y aplicamos la mascarilla hidratante adecuada a tu tipo de piel mientras descansas.",
        detail: "60 a 90 min",
      },
      {
        num: "03",
        title: "Resultado y rutina",
        desc: "Sales con la piel suave, cómoda y luminosa. Te recomendamos cómo mantener la hidratación en casa y cada cuánto conviene repetir la sesión.",
        detail: "Resultado inmediato",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Protocolo según tu tipo de piel",
        desc: "Ajustamos la limpieza para no resecar más una piel que ya está deshidratada.",
      },
      {
        num: "02",
        title: "Productos adecuados para ti",
        desc: "Elegimos la mascarilla y los hidratantes según tu piel y tus sensibilidades.",
      },
      {
        num: "03",
        title: "Rutina que sí puedes seguir",
        desc: "Te damos recomendaciones sencillas para que la hidratación dure más allá de la sesión.",
      },
      {
        num: "04",
        title: "Respaldo médico",
        desc: "Si la resequedad se debe a una condición de la piel, te orientamos bajo la dirección médica de la Dra. Daniela Díez.",
      },
    ],
    cuidados: {
      antes: [
        "Evita exfoliantes y retinoides dos o tres días antes",
        "No tomes sol intenso los días previos",
        "Evita depilar o rasurar el rostro el día anterior",
        "Cuéntanos si tienes piel sensible o alergias a productos",
      ],
      despues: [
        "Mantén una crema hidratante adecuada a tu piel",
        "Usa protector solar a diario",
        "Evita duchas muy calientes en el rostro",
        "Evita exfoliantes fuertes por 48 horas",
        "Toma suficiente agua durante el día",
      ],
    },
    precio: {
      desde: 150000,
      opciones: [{ label: "Sesión", detalle: "Limpieza profunda + mascarilla hidratante", valor: 150000 }],
      incluye: [
        "Diagnóstico de tu tipo de piel",
        "Limpieza facial profunda",
        "Mascarilla hidratante",
        "Recomendaciones de cuidado en casa",
      ],
    },
    faq: [
      { q: "¿Cuánto cuesta la alta hidratación facial?", a: "La sesión tiene un valor desde $150.000 COP e incluye limpieza facial profunda y mascarilla hidratante, además del diagnóstico de tu tipo de piel y recomendaciones para mantener la hidratación en casa." },
      { q: "¿Duele?", a: "No suele doler. Es un tratamiento cómodo y relajante; en la extracción puede haber una molestia leve en algunas zonas. Como la piel reseca suele ser sensible, cuidamos que cada paso sea suave." },
      { q: "¿Cuándo se nota y cuánto dura?", a: "Desde la misma sesión la piel se siente suave, cómoda y se ve más luminosa. El efecto se mantiene habitualmente algunos días o semanas, y dura más si usas una crema hidratante adecuada y protector solar a diario." },
      { q: "¿Cada cuánto me la puedo hacer?", a: "Depende de qué tan reseca esté tu piel y de tu entorno, por ejemplo si pasas mucho tiempo con aire acondicionado o sol. Puede hacerse de forma puntual o periódica, y te recomendamos una frecuencia en la sesión." },
      { q: "¿Sirve para las arrugas?", a: "Suaviza las líneas de deshidratación, pero no trata arrugas profundas ni flacidez. Para eso te orientamos a tratamientos médicos como el skinbooster." },
      { q: "¿Tiene efectos secundarios?", a: "No requiere recuperación: retomas tu rutina el mismo día. Puede quedar un enrojecimiento leve por algunas horas en las zonas de extracción. Si tienes alergia a algún producto, cuéntanos antes para elegir otros." },
      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Puede alternarse con Hydrafacial o la limpieza facial profunda según tu piel. Si además buscas hidratación desde el interior de la piel, en la valoración te contamos si el skinbooster es una opción para ti." },
      { q: "¿Quién no debe hacérsela?", a: "No se indica con quemadura solar, heridas, infección en la piel ni justo después de un peeling o láser. Si tienes una dermatitis activa o una piel muy reactiva, primero la valoramos para indicarte el manejo adecuado." },
    ],
    waMensaje: "Hola, quiero agendar una valoración para Alta hidratación facial",
  },
];
