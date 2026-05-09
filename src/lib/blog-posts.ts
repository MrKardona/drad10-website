export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "heading" | "paragraph" | "image" | "quote" | "list";
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "acido-hialuronico",
    title: "Ácido Hialurónico: Todo lo que necesitas saber antes de tu tratamiento",
    excerpt:
      "Descubre qué es el ácido hialurónico, cómo actúa en tu piel, qué tipos existen y qué esperar antes y después de un tratamiento en clínica.",
    category: "Tratamientos Faciales",
    date: "15 de enero, 2025",
    readTime: "8 min",
    coverImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "El ácido hialurónico es hoy uno de los tratamientos más solicitados en medicina estética — y con razón. Es seguro, versátil, con resultados inmediatos y prácticamente sin tiempo de recuperación. Pero antes de agendarte una cita, queremos que lo conozcas a fondo.",
      },
      {
        type: "heading",
        text: "¿Qué es exactamente el ácido hialurónico?",
      },
      {
        type: "paragraph",
        text: "El ácido hialurónico (AH) es una molécula que existe naturalmente en tu cuerpo — en la piel, los ojos y las articulaciones. Su función principal es retener agua: una sola molécula puede atraer hasta 1.000 veces su peso en agua. Esa es la razón por la que nuestra piel joven luce tan hidratada y tersa.",
      },
      {
        type: "paragraph",
        text: "A partir de los 25 años, la producción natural de ácido hialurónico empieza a disminuir. Con los años, la piel pierde volumen, aparecen líneas de expresión y los tejidos comienzan a ceder. El relleno con AH de uso clínico —que se produce de forma biotecnológica y es biocompatible— devuelve ese volumen y estimula la hidratación profunda.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=85&fit=crop",
        alt: "Tratamiento de ácido hialurónico en clínica estética",
        caption: "El ácido hialurónico se aplica mediante microinyecciones de precisión.",
      },
      {
        type: "heading",
        text: "¿Para qué sirve el ácido hialurónico en medicina estética?",
      },
      {
        type: "list",
        items: [
          "Relleno de labios — definición del contorno y aumento de volumen natural",
          "Rinomodelación sin cirugía — corrección de imperfecciones del perfil nasal",
          "Relleno de surcos nasogenianos (las líneas que van de la nariz a la comisura)",
          "Proyección de pómulos y definición del óvalo facial",
          "Hidratación profunda con mesoterapia o bioestimulación",
          "Tratamiento de ojeras con relleno de surco lagrimal",
          "Rejuvenecimiento del dorso de las manos",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900&q=85&fit=crop",
        alt: "Resultado natural de relleno de labios con ácido hialurónico",
        caption: "Resultados naturales y proporcionales — sin el aspecto exagerado de antaño.",
      },
      {
        type: "heading",
        text: "Tipos de ácido hialurónico: no todos son iguales",
      },
      {
        type: "paragraph",
        text: "Existe una gran diferencia entre los productos disponibles en el mercado. En DRA.D10 trabajamos exclusivamente con marcas de alta gama validadas por la FDA y el INVIMA. Los fillers difieren en:",
      },
      {
        type: "list",
        items: [
          "Densidad (reticulación): determina si el filler es suave (labios, ojeras) o más firme (pómulos, mentón)",
          "Duración: entre 6 y 18 meses según la zona y el metabolismo de cada paciente",
          "Marca: Juvederm, Restylane, Teosyal, Belotero — cada una con indicaciones específicas",
        ],
      },
      {
        type: "quote",
        text: "No existe un filler universal. La selección del producto correcto para cada zona y cada paciente es lo que marca la diferencia entre un resultado natural y uno artificial.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=85&fit=crop",
        alt: "Consulta médica en clínica estética de lujo",
        caption: "Una valoración personalizada es siempre el primer paso.",
      },
      {
        type: "heading",
        text: "¿Cómo es el procedimiento paso a paso?",
      },
      {
        type: "paragraph",
        text: "El procedimiento de relleno con ácido hialurónico es ambulatorio y no requiere hospitalización. En DRA.D10 seguimos un protocolo de 4 pasos:",
      },
      {
        type: "list",
        items: [
          "1. Valoración facial — la Dra. Daniela analiza tu anatomía, escucha tus objetivos y diseña un plan personalizado",
          "2. Preparación — limpieza de la zona y aplicación de anestesia tópica (crema) durante 20-30 minutos",
          "3. Aplicación — microinyecciones precisas con aguja o cánula según la zona; el procedimiento toma entre 20 y 45 minutos",
          "4. Modelado — masaje suave para distribuir uniformemente el producto y afinar el resultado",
        ],
      },
      {
        type: "heading",
        text: "¿Duele? ¿Hay tiempo de recuperación?",
      },
      {
        type: "paragraph",
        text: "Con la anestesia tópica, la mayoría de pacientes describe el procedimiento como tolerable — una leve presión o calor en la zona. Algunos fillers también contienen lidocaína integrada para mayor comodidad durante la aplicación.",
      },
      {
        type: "paragraph",
        text: "Después del tratamiento puedes notar enrojecimiento leve, pequeños hematomas o inflamación localizada que generalmente desaparece en 24 a 72 horas. La mayoría de nuestras pacientes retoman sus actividades cotidianas el mismo día.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=85&fit=crop",
        alt: "Mujer con piel luminosa después de tratamiento estético",
        caption: "Piel más luminosa, hidratada y con volumen natural desde las primeras horas.",
      },
      {
        type: "heading",
        text: "Cuidados posteriores",
      },
      {
        type: "list",
        items: [
          "Evita presionar o masajear la zona tratada las primeras 24 horas",
          "No realices ejercicio intenso ni expongas la zona a calor excesivo (sauna, baño de vapor) el día del procedimiento",
          "Aplica frío suave si hay inflamación — nunca hielo directo",
          "Evita el sol directo y usa protector solar SPF 50 en zonas faciales",
          "Hidratación abundante — el agua potencia el efecto del ácido hialurónico",
          "Asiste a tu cita de revisión a las 2 semanas si la Dra. lo considera necesario",
        ],
      },
      {
        type: "heading",
        text: "¿Es reversible?",
      },
      {
        type: "paragraph",
        text: "Una de las grandes ventajas del ácido hialurónico es que es 100% reversible. Si no quedas satisfecha con el resultado, existe una enzima llamada hialuronidasa que disuelve el filler de forma segura. En DRA.D10 este procedimiento de corrección está disponible para nuestras pacientes.",
      },
      {
        type: "quote",
        text: "El ácido hialurónico bien aplicado no se ve — se siente. El objetivo siempre es realzar lo que ya tienes, nunca transformarte en otra persona.",
      },
    ],
  },

  // ─── Artículo 2: Botox ───────────────────────────────────────────────────
  {
    slug: "botox-que-esperar",
    title: "Botox: qué esperar antes, durante y después del tratamiento",
    excerpt:
      "Resuelve todas tus dudas sobre la toxina botulínica — cómo funciona, cuánto dura, si duele y por qué los resultados naturales dependen del médico que lo aplica.",
    category: "Tratamientos Faciales",
    date: "3 de febrero, 2025",
    readTime: "7 min",
    coverImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=85&fit=crop&crop=face",
    content: [
      {
        type: "paragraph",
        text: "El botox es el tratamiento estético más aplicado en el mundo, y también uno de los más malinterpretados. Cuando se realiza bien, nadie debería notar que te lo hiciste — solo verán que luces más descansada, más fresca. Cuando se hace mal, los resultados son los que todos conocemos: el rostro inmóvil, la mirada extraña. La diferencia está en quién lo aplica.",
      },
      {
        type: "heading",
        text: "¿Qué es la toxina botulínica y cómo funciona?",
      },
      {
        type: "paragraph",
        text: "La toxina botulínica (Botox es el nombre comercial más conocido) es una proteína purificada que bloquea temporalmente la señal nerviosa que causa la contracción muscular. Aplicada en pequeñas cantidades en puntos estratégicos del rostro, relaja los músculos responsables de las líneas de expresión — frente, entrecejo, patas de gallo — sin afectar la expresividad natural.",
      },
      {
        type: "heading",
        text: "¿Para quién está indicado?",
      },
      {
        type: "list",
        items: [
          "Personas con líneas de expresión dinámicas (se forman al gesticular) en frente, entrecejo y contorno de ojos.",
          "Quienes quieren prevenir la aparición de arrugas permanentes desde los 25-30 años.",
          "Pacientes con bruxismo — el botox en los maseteros reduce la tensión mandibular.",
          "Personas con sudoración excesiva en axilas o manos (hiperhidrosis).",
          "Quienes buscan un efecto lifting suave del arco de la ceja.",
        ],
      },
      {
        type: "heading",
        text: "¿Cómo es el procedimiento en la clínica?",
      },
      {
        type: "paragraph",
        text: "La cita dura entre 20 y 30 minutos. Primero hacemos una valoración facial detallada — analizamos tu anatomía, tus gestos habituales y lo que quieres lograr. Luego aplicamos el producto con agujas muy finas; la mayoría de personas describe la sensación como pequeños pinchazos casi imperceptibles. No requiere anestesia, aunque podemos aplicar crema tópica si lo prefieres.",
      },
      {
        type: "quote",
        text: "El botox natural no 'congela' — simplemente relaja. Un médico entrenado sabe exactamente qué músculo tratar y en qué dosis para preservar tu expresión.",
      },
      {
        type: "heading",
        text: "¿Cuándo se ven los resultados y cuánto duran?",
      },
      {
        type: "paragraph",
        text: "Los primeros efectos aparecen a los 2-3 días. El resultado completo se ve entre los días 7 y 14. La duración varía según cada persona, pero generalmente oscila entre 4 y 6 meses. Con tratamientos regulares, los músculos se reeducan y los resultados suelen durar más con el tiempo.",
      },
      {
        type: "heading",
        text: "Cuidados después del tratamiento",
      },
      {
        type: "list",
        items: [
          "No recostarse las primeras 4 horas después de la aplicación.",
          "Evitar actividad física intensa el día del procedimiento.",
          "No frotar ni masajear la zona tratada durante 24 horas.",
          "Evitar sauna, vapor y exposición directa al sol por 48 horas.",
          "Puedes maquillarte el mismo día con cuidado.",
        ],
      },
    ],
  },

  // ─── Artículo 3: Scanner D10 / INDIBA ───────────────────────────────────
  {
    slug: "scanner-d10-indiba",
    title: "Scanner D10 INDIBA: el tratamiento de radiofrecuencia que transforma desde adentro",
    excerpt:
      "Conoce la tecnología insignia de DRA.D10 — cómo la radiofrecuencia profunda INDIBA regenera el colágeno, afirma la piel y remodela el cuerpo sin cirugía.",
    category: "Tecnología",
    date: "20 de febrero, 2025",
    readTime: "9 min",
    coverImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=85&fit=crop&crop=center",
    content: [
      {
        type: "paragraph",
        text: "En DRA.D10 tenemos un tratamiento que marca la diferencia: el Scanner D10 con tecnología INDIBA. No es un aparato más — es el resultado de décadas de investigación científica en radiofrecuencia profunda. Hoy es el protocolo más solicitado en nuestra clínica, y los resultados hablan por sí solos.",
      },
      {
        type: "heading",
        text: "¿Qué es INDIBA y por qué es diferente?",
      },
      {
        type: "paragraph",
        text: "INDIBA es una tecnología española de radiofrecuencia que opera a una frecuencia única de 448 kHz. Esta frecuencia particular permite penetrar profundamente en los tejidos sin generar calor superficial excesivo, estimulando directamente las células desde el interior. El resultado: reactivación del metabolismo celular, producción de colágeno y elastina, y mejora visible de la textura, firmeza y contorno.",
      },
      {
        type: "heading",
        text: "¿Para qué sirve el Scanner D10?",
      },
      {
        type: "list",
        items: [
          "Lifting facial y corporal sin cirugía ni inyecciones.",
          "Reducción de flacidez en rostro, cuello, abdomen, brazos y muslos.",
          "Remodelación corporal y reducción de grasa localizada.",
          "Tratamiento de celulitis — mejora el aspecto de la piel de naranja.",
          "Cicatrización y regeneración de tejidos (postoperatorios, estrías).",
          "Rejuvenecimiento capilar y estimulación del folículo piloso.",
        ],
      },
      {
        type: "heading",
        text: "¿Cómo se siente durante la sesión?",
      },
      {
        type: "paragraph",
        text: "Es uno de los tratamientos más cómodos que ofrecemos. La sensación es de calor suave y profundo — muchas pacientes lo describen como un masaje caliente muy relajante. No hay dolor, no hay agujas, no hay tiempo de recuperación. Puedes ir directamente de la sesión a tus actividades del día.",
      },
      {
        type: "quote",
        text: "La diferencia entre INDIBA y otros equipos de radiofrecuencia es que trabaja a nivel celular real — no solo calienta la superficie. Por eso los resultados se mantienen y mejoran con el tiempo.",
      },
      {
        type: "heading",
        text: "¿Cuántas sesiones se necesitan?",
      },
      {
        type: "paragraph",
        text: "El protocolo estándar es de 6 a 10 sesiones, generalmente una o dos veces por semana. Sin embargo, muchas pacientes notan mejoras desde la primera sesión. La frecuencia y el número exacto dependen del área a tratar y tus objetivos — lo definimos juntos en la valoración inicial.",
      },
    ],
  },

  // ─── Artículo 4: Implante Capilar ────────────────────────────────────────
  {
    slug: "implante-capilar-fue",
    title: "Implante Capilar FUE: todo lo que debes saber antes de decidirte",
    excerpt:
      "La pérdida de cabello tiene solución definitiva. Te explicamos cómo funciona la técnica FUE, quiénes son candidatos ideales y qué resultados puedes esperar.",
    category: "Capilares",
    date: "10 de marzo, 2025",
    readTime: "10 min",
    coverImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85&fit=crop&crop=top",
    content: [
      {
        type: "paragraph",
        text: "La caída del cabello afecta la autoestima de millones de personas — hombres y mujeres. Durante años, las únicas opciones eran aprender a convivir con ella o recurrir a tratamientos temporales. Hoy, el implante capilar con técnica FUE ofrece una solución permanente con resultados completamente naturales.",
      },
      {
        type: "heading",
        text: "¿Qué es la técnica FUE?",
      },
      {
        type: "paragraph",
        text: "FUE (Follicular Unit Extraction) es la técnica más avanzada de trasplante capilar. Consiste en extraer folículos pilosos individuales de una zona donante — generalmente la nuca, donde el cabello es resistente a la alopecia — e implantarlos con precisión milimétrica en las zonas con pérdida. No deja cicatriz lineal, la recuperación es mucho más rápida que las técnicas antiguas y los resultados son indistinguibles del cabello natural.",
      },
      {
        type: "heading",
        text: "¿Quiénes son candidatos ideales?",
      },
      {
        type: "list",
        items: [
          "Hombres con alopecia androgénica (entradas, coronilla) con zona donante suficiente.",
          "Mujeres con pérdida difusa o zonas específicas sin densidad.",
          "Personas que quieren recuperar la línea de nacimiento del cabello.",
          "Candidatos al implante de barba o cejas.",
          "Personas con cicatrices en el cuero cabelludo que afectan el crecimiento.",
        ],
      },
      {
        type: "heading",
        text: "¿Cómo es el proceso en DRA.D10?",
      },
      {
        type: "paragraph",
        text: "Todo empieza con una valoración capilar exhaustiva. Analizamos el grado de alopecia, la densidad de la zona donante, la calidad del folículo y tus expectativas. Si eres candidato, diseñamos el mapa de implantación — la nueva línea de nacimiento y la distribución de los injertos — de forma personalizada. El procedimiento se realiza con anestesia local y dura entre 6 y 8 horas según la cantidad de injertos.",
      },
      {
        type: "quote",
        text: "El implante capilar bien hecho es el único tratamiento capaz de devolverte el cabello de forma permanente. La clave está en la planificación — una línea de nacimiento mal diseñada puede verse artificial décadas después.",
      },
      {
        type: "heading",
        text: "Recuperación y resultados",
      },
      {
        type: "paragraph",
        text: "Los primeros días hay algo de enrojecimiento y costras pequeñas en las zonas tratadas — es completamente normal. Entre la semana 2 y el mes 2, el cabello trasplantado cae (también normal — el folículo sobrevive). A partir del mes 3-4 empieza el crecimiento nuevo, y el resultado final se aprecia completamente entre los 10 y 12 meses. Es permanente: los folículos implantados son genéticamente resistentes a la alopecia.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
