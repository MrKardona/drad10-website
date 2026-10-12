import type { BlogPost } from "../tipos";

export const post: BlogPost = {
  slug: "como-elegir-medico-estetico",
  title: "Cómo elegir a tu médico estético: lo que yo verificaría antes de dejar que alguien toque mi cara",
  excerpt:
    "Título, habilitación, productos originales con registro INVIMA y señales de alerta. Una guía práctica para elegir con seguridad a quien te va a tratar.",
  category: "Filosofía de la Dra.",
  date: "10 de octubre, 2026",
  dateISO: "2026-10-10",
  readTime: "8 min",
  coverImage: "/images/blog/como-elegir-medico-estetico/portada.webp",
  coverAlt:
    "La Dra. Daniela Díez en su consultorio revisando una historia clínica, con su chaqueta clínica negra y luz natural",
  relacionados: ["envejecer-bien-filosofia", "mitos-botox", "acido-hialuronico"],
  content: [
    {
      type: "paragraph",
      text: "Una de las consultas más difíciles para mí no es la de un tratamiento complejo. Es la de alguien que llega a corregir algo que le hicieron en otro lugar: un relleno aplicado en una casa, una sustancia que nadie supo decirle qué era, un procedimiento hecho sin valoración. Casi siempre la historia empieza igual: «Era muy barato» o «Me lo recomendó una amiga».",
    },
    {
      type: "paragraph",
      text: "No te escribo esto para asustarte, sino porque creo que tienes derecho a saber qué preguntar. La medicina estética es medicina. Cuando se hace bien es segura en la mayoría de los casos; cuando se hace mal, las consecuencias pueden ser serias. La buena noticia es que verificar a quién eliges está en tus manos.",
    },
    {
      type: "heading",
      text: "Primero: ¿quién te va a atender es médico?",
    },
    {
      type: "paragraph",
      text: "Parece obvio, pero no lo es. Los procedimientos inyectables, como la toxina botulínica, los rellenos o los bioestimuladores, son actos médicos. Los debe indicar y realizar un médico, o hacerse bajo su supervisión directa. No una persona que hizo un curso de fin de semana, no la esteticista del salón, no alguien que «aprendió viendo».",
    },
    {
      type: "paragraph",
      text: "En Colombia puedes comprobar si un profesional de la salud está autorizado para ejercer consultando el ReTHUS, el Registro Único Nacional del Talento Humano en Salud, con su nombre o documento. Pregunta también por su formación en medicina estética: dónde estudió y desde cuándo ejerce. En mi caso, soy médica con habilitación en Argentina y en Colombia, con diplomaturas en medicina estética y en ciencias estéticas, y mi formación está publicada en el sitio para que la puedas revisar.",
    },
    {
      type: "tip",
      text: "Un profesional serio no se molesta cuando le preguntas por su título o su formación. Al contrario: lo valora. Si alguien evade la pregunta, se ofende o te responde con fotos de «antes y después» en lugar de datos, ya tienes una respuesta.",
    },
    {
      type: "heading",
      text: "El lugar también importa: un consultorio habilitado",
    },
    {
      type: "paragraph",
      text: "Un procedimiento médico necesita un espacio adecuado: condiciones de higiene, material estéril, manejo correcto de residuos y la capacidad de reaccionar si se presenta una complicación. Por eso los procedimientos se hacen en un consultorio o clínica habilitada, no en la sala de una casa, en una peluquería, en una habitación de hotel ni en una «jornada» en un evento.",
    },
    {
      type: "paragraph",
      text: "En Colombia, los prestadores de servicios de salud se inscriben en el REPS, el Registro Especial de Prestadores de Servicios de Salud, que también se puede consultar. Si te ofrecen aplicarte algo a domicilio, la respuesta es no, por cómodo o económico que parezca.",
    },
    {
      type: "image",
      src: "/images/blog/como-elegir-medico-estetico/01.webp",
      alt: "Consultorio médico estético ordenado y luminoso, con camilla, superficies limpias e instrumental cubierto",
      caption: "Un procedimiento médico necesita un espacio médico. Siempre.",
    },
    {
      type: "heading",
      text: "Productos originales y con registro INVIMA",
    },
    {
      type: "paragraph",
      text: "Lo que se inyecta en tu piel tiene que ser un producto original, con registro sanitario del INVIMA vigente, bien almacenado y dentro de su fecha de vencimiento. Los productos falsificados o de contrabando existen, y el problema no es solo que no funcionen: pueden contener sustancias que no sabes qué son.",
    },
    {
      type: "list",
      items: [
        "Pide ver el producto antes del procedimiento: la caja, el empaque sellado, el lote y la fecha de vencimiento.",
        "Pregunta qué producto te van a aplicar y por qué ese y no otro.",
        "El registro INVIMA se puede verificar en la página de consulta de registros sanitarios del instituto.",
        "Desconfía si el producto viene sin caja, en jeringas sin identificación o ya preparado antes de que llegues.",
        "Nunca aceptes inyecciones de biopolímeros, silicona líquida, aceites u otras sustancias de las que nadie te explica su origen. No existe una forma segura de inyectarlas con fines estéticos.",
      ],
    },
    {
      type: "tip",
      text: "Pide que el producto se abra frente a ti y que te muestren el empaque, el nombre del producto y el lote. Un médico serio lo hace sin problema. Es tu cara y tu salud; tienes todo el derecho de saber qué entra en ella.",
    },
    {
      type: "heading",
      text: "Señales de alerta que no debes ignorar",
    },
    {
      type: "list",
      items: [
        "Precios demasiado bajos. Los productos originales y un procedimiento bien hecho tienen un costo; cuando algo es muchísimo más barato que en todas partes, algo se está sacrificando.",
        "Aplicaciones en casa, a domicilio o en «jornadas» y fiestas.",
        "Nadie te hace una valoración: te aplican el mismo día, sin preguntarte por tu salud, tus medicamentos o tus alergias.",
        "Promesas de resultados garantizados, «sin ningún riesgo» o «permanentes».",
        "Presión para decidir ya: «la promoción se acaba hoy».",
        "No te explican efectos secundarios ni te piden firmar un consentimiento informado.",
        "No hay forma de contactarlos después ni un control programado.",
      ],
    },
    {
      type: "image",
      src: "/images/blog/como-elegir-medico-estetico/02.webp",
      alt: "La Dra. Daniela Díez muestra a una paciente, de espaldas a la cámara, una caja de producto sellada y sin marcas visibles",
      caption: "Mis pacientes ven el producto antes de aplicarlo. Debería ser así en todas partes.",
    },
    {
      type: "heading",
      text: "Preguntas que puedes (y debes) hacer en la primera cita",
    },
    {
      type: "list",
      items: [
        "¿Usted es médico? ¿Dónde se formó en medicina estética?",
        "¿Qué producto me va a aplicar, tiene registro INVIMA y lo puedo ver?",
        "¿Qué resultado es realista en mi caso y cuánto suele durar?",
        "¿Cuáles son los efectos secundarios más frecuentes y qué complicaciones pueden presentarse?",
        "¿Qué pasa si algo no sale como esperamos? ¿Cómo lo manejan?",
        "¿Hay alguna razón por la que este tratamiento no sea para mí?",
      ],
    },
    {
      type: "heading",
      text: "¿Qué pasa si algo sale mal?",
    },
    {
      type: "paragraph",
      text: "Ningún procedimiento médico tiene riesgo cero, y desconfío de quien diga lo contrario. Los efectos más frecuentes, como un poco de inflamación, enrojecimiento o un morado, suelen ser leves y pasajeros. Las complicaciones serias son poco frecuentes cuando el procedimiento lo hace un médico entrenado, pero existen. La diferencia está en que un médico sabe prevenirlas, reconocerlas a tiempo y tratarlas. Por ejemplo, en el caso de los rellenos de ácido hialurónico, existe una enzima que permite disolverlos si hace falta, y saber cuándo y cómo usarla es parte de la formación médica.",
    },
    {
      type: "paragraph",
      text: "Y si ya te hiciste un procedimiento, estos son los productos que yo tendría en el neceser los días siguientes, siempre que tu médico no te haya indicado otra cosa:",
    },
    {
      type: "ingredientes",
      ingredientes: [
        {
          nombre: "Limpiador suave sin fragancia",
          para: "Limpia sin irritar una piel que acaba de recibir un procedimiento.",
          como: "Mañana y noche, con agua tibia y sin frotar la zona tratada.",
        },
        {
          nombre: "Crema reparadora con pantenol o ceramidas",
          para: "Calma y ayuda a recuperar la barrera de la piel.",
          como: "Capa fina en la zona, según la indicación de tu médico. Sin masajear si te aplicaron un relleno.",
        },
        {
          nombre: "Protector solar mineral",
          para: "Protege una piel más sensible de lo habitual y ayuda a prevenir manchas posteriores.",
          como: "Todas las mañanas y reaplicado si sales. Los filtros minerales suelen tolerarse mejor en estos días.",
        },
        {
          nombre: "Compresas frías",
          para: "Ayudan a disminuir la inflamación leve de las primeras horas.",
          como: "Envueltas en una tela limpia, por pocos minutos. Nunca hielo directo sobre la piel.",
        },
      ],
    },
    {
      type: "quote",
      text: "Elegir a tu médico estético es la decisión más importante de todo el tratamiento. El producto y la técnica importan, pero primero importa quién, dónde y con qué criterio. — Dra. Daniela Díez",
    },
    {
      type: "image",
      src: "/images/blog/como-elegir-medico-estetico/03.webp",
      alt: "Escritorio de consultorio con un formulario de consentimiento informado, un bolígrafo y una taza, en tonos crema y dorado",
      caption: "El consentimiento informado no es un trámite: es la conversación por escrito.",
    },
    {
      type: "faq",
      preguntas: [
        {
          q: "¿Cómo verifico si quien me va a atender es médico?",
          a: "En Colombia puedes consultar el ReTHUS con su nombre o documento de identidad. También puedes pedirle directamente su título y su formación en medicina estética.",
        },
        {
          q: "¿Una esteticista puede aplicarme toxina botulínica o rellenos?",
          a: "No. Los inyectables son procedimientos médicos. Las esteticistas hacen un trabajo muy valioso en cuidado de la piel, pero las inyecciones las indica y realiza un médico.",
        },
        {
          q: "¿Las aplicaciones a domicilio son seguras?",
          a: "No las recomiendo nunca. Fuera de un consultorio no hay garantías de esterilidad ni capacidad de responder a una complicación.",
        },
        {
          q: "¿Es grosero pedir ver el producto?",
          a: "Para nada. Es tu derecho. Un buen médico te lo muestra con gusto y te explica qué es.",
        },
        {
          q: "Me hice algo en otro lugar y no estoy conforme. ¿Qué hago?",
          a: "Consulta con un médico para que te valore. Lleva toda la información que tengas sobre lo que te aplicaron. Según el caso, se puede esperar, tratar o corregir.",
        },
      ],
    },
    {
      type: "heading",
      text: "Lo que vas a encontrar en mi valoración",
    },
    {
      type: "paragraph",
      text: "En mi consulta, la valoración es el primer paso de cualquier tratamiento. Conversamos sobre lo que te preocupa y lo que esperas, reviso tu historia médica, tus medicamentos y tus antecedentes, y examino tu rostro o la zona a tratar. Te explico qué opciones tienen sentido, qué producto usaría y por qué, qué resultado es realista y cuáles son los posibles efectos secundarios. Si algo no es para ti, te lo digo.",
    },
    {
      type: "paragraph",
      text: "Cada procedimiento lo realizo o lo superviso yo como médica, en el consultorio, con productos originales que puedes ver antes de empezar. Pregúntame lo que quieras: mi formación, el producto, el plan. Así es como construimos confianza, y así es como debería ser en cualquier lugar que elijas.",
    },
  ],
};
