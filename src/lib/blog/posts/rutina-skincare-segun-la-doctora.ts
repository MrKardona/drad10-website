import type { BlogPost } from "../tipos";

export const post: BlogPost = {
  slug: "rutina-skincare-segun-la-doctora",
  title: "Mi rutina de cuidado de la piel, paso a paso",
  excerpt:
    "La rutina que recomiendo en consulta: pocos pasos, bien elegidos y constantes. Cómo es en la mañana y en la noche, cómo adaptarla a piel grasa, seca o sensible y los errores que más veo.",
  category: "Cuidado de la piel",
  date: "2 de octubre, 2026",
  dateISO: "2026-10-02",
  readTime: "8 min",
  coverImage: "/images/blog/rutina-skincare-segun-la-doctora/portada.webp",
  coverAlt:
    "La Dra. Daniela Díez en su consultorio, junto a un lavamanos con frascos de cuidado facial sin etiqueta",
  relacionados: ["protector-solar-en-medellin", "envejecer-bien-filosofia", "acido-hialuronico"],
  content: [
    {
      type: "paragraph",
      text: "Casi todas las semanas llega a mi consulta alguien con el celular lleno de fotos de productos. «Doctora, uso diez cosas y mi piel está peor que nunca». Y casi siempre la respuesta es la misma: no te faltan productos, te sobran. La piel no necesita una lista larga; necesita los pasos correctos, en el orden correcto, todos los días.",
    },
    {
      type: "paragraph",
      text: "Por eso quiero contarte cómo es la rutina que yo recomiendo y la lógica detrás de cada paso. No es una receta: es una base que después ajustamos a tu piel, a tu edad, a tu clima y a tu vida. Si la entiendes, vas a saber qué comprar y, sobre todo, qué dejar de comprar.",
    },
    {
      type: "heading",
      text: "¿Cuántos pasos necesita de verdad una rutina?",
    },
    {
      type: "paragraph",
      text: "En la mayoría de los casos, cuatro: limpiar, tratar, hidratar y proteger. Todo lo demás es opcional. Una rutina sencilla tiene una ventaja enorme: la cumples. Y en cuidado de la piel, la constancia pesa mucho más que cualquier producto aislado.",
    },
    {
      type: "list",
      items: [
        "Limpiar: retirar sudor, grasa, contaminación y maquillaje sin dejar la piel tirante.",
        "Tratar: el paso con activos (antioxidantes, retinoides, despigmentantes) según lo que tu piel necesita.",
        "Hidratar: reforzar la barrera de la piel para que tolere mejor los activos y pierda menos agua.",
        "Proteger: el protector solar en la mañana. Sin este paso, los demás rinden mucho menos.",
      ],
    },
    {
      type: "image",
      src: "/images/blog/rutina-skincare-segun-la-doctora/01.webp",
      alt: "Cuatro frascos de cuidado facial sin etiqueta ordenados sobre una superficie de mármol crema con luz natural",
      caption: "Cuatro pasos bien elegidos valen más que diez frascos en el baño.",
    },
    {
      type: "heading",
      text: "Mi rutina de la mañana: limpiar, proteger y salir",
    },
    {
      type: "paragraph",
      text: "En la mañana el objetivo es preparar la piel para el día: el sol, la contaminación, el calor de la ciudad. No hace falta una limpieza agresiva, porque en la noche ya limpiaste bien.",
    },
    {
      type: "list",
      items: [
        "1. Limpieza suave: agua tibia o un limpiador suave si tu piel es grasa. Nada de agua muy caliente.",
        "2. Antioxidante: unas gotas de un sérum con vitamina C o niacinamida, sobre la piel seca.",
        "3. Hidratante: una textura acorde a tu piel. Si eres de piel grasa, puede ser un gel ligero.",
        "4. Protector solar de amplio espectro: generoso, en rostro, cuello, orejas y escote. Siempre es el último paso del cuidado y va antes del maquillaje.",
      ],
    },
    {
      type: "tip",
      text: "Si tienes poco tiempo en la mañana, no sacrifiques el protector solar. Prefiero mil veces una piel que solo se lava y se protege a una piel con cinco sérums y sin protector. Déjalo al lado del cepillo de dientes: lo que se ve, se usa.",
    },
    {
      type: "heading",
      text: "Mi rutina de la noche: el momento de reparar",
    },
    {
      type: "paragraph",
      text: "En la noche la piel no tiene que defenderse del sol, así que es el mejor momento para los activos que trabajan a largo plazo. Pero antes de cualquier activo, la limpieza tiene que ser completa.",
    },
    {
      type: "list",
      items: [
        "1. Desmaquillar: si usas maquillaje o protector resistente al agua, primero un desmaquillante o un aceite limpiador.",
        "2. Limpiar: un limpiador suave según tu tipo de piel. Masajea un minuto y enjuaga bien.",
        "3. Tratar: aquí entra el retinoide o el activo que hayamos definido para ti. No todos los días al comienzo.",
        "4. Hidratar: una crema que repare la barrera. Si la piel está irritada, esa noche solo hidratación.",
        "5. Contorno de ojos y labios: un hidratante suave, sin activos fuertes en zonas tan delgadas.",
      ],
    },
    {
      type: "tip",
      text: "Con los retinoides, ve despacio. Empieza dos noches por semana, con una cantidad del tamaño de una arveja para todo el rostro, y sube la frecuencia solo si tu piel lo tolera. Es normal un poco de descamación al principio; lo que no es normal es ardor intenso o enrojecimiento que no cede. Si estás embarazada, buscando embarazo o lactando, no uses retinoides y cuéntamelo en consulta.",
    },
    {
      type: "heading",
      text: "Cómo adaptarla a tu tipo de piel",
    },
    {
      type: "paragraph",
      text: "La estructura es la misma para todos; lo que cambia son las texturas y los activos. Y ojo: tu tipo de piel no es fijo. Cambia con la edad, las hormonas, el clima y hasta con los tratamientos que te haces.",
    },
    {
      type: "list",
      items: [
        "Piel grasa o con tendencia al acné: limpiador en gel, hidratante ligero libre de aceites y protector de acabado seco. El ácido salicílico o la niacinamida suelen ayudar. Hidratar también es para ti: una piel deshidratada puede producir más grasa.",
        "Piel seca: limpiador cremoso, sin espuma fuerte. Hidratantes más densos con ceramidas o ácido hialurónico. Evita exfoliar en exceso.",
        "Piel sensible o con rosácea: pocos productos, sin fragancia, e introduce uno nuevo a la vez. Haz una prueba en una zona pequeña antes de usarlo en toda la cara.",
        "Piel mixta: puedes usar texturas distintas por zonas, más ligeras en la zona T y más nutritivas en las mejillas.",
      ],
    },
    {
      type: "image",
      src: "/images/blog/rutina-skincare-segun-la-doctora/02.webp",
      alt: "Primer plano de una mano aplicando unas gotas de sérum sobre la mejilla, con textura real de piel",
      caption: "Unas gotas bastan. Más producto no significa mejor resultado.",
    },
    {
      type: "ingredientes",
      ingredientes: [
        {
          nombre: "Vitamina C",
          para: "Antioxidante que ayuda a proteger la piel del daño ambiental y a mejorar la luminosidad y el tono.",
          como: "En la mañana, después de limpiar y antes del protector. Guárdala lejos de la luz y el calor; si cambia mucho de color, probablemente ya perdió eficacia.",
        },
        {
          nombre: "Niacinamida",
          para: "Ayuda a regular la grasa, mejora el aspecto de los poros y apoya la barrera de la piel. Suele ser bien tolerada.",
          como: "Mañana o noche. Combina bien con casi todo, por eso es buena puerta de entrada para pieles que empiezan.",
        },
        {
          nombre: "Retinoides",
          para: "Estimulan la renovación celular y el colágeno; mejoran textura, líneas finas y algunas manchas.",
          como: "Solo en la noche, con introducción gradual y protector solar al día siguiente. No en embarazo ni lactancia.",
        },
        {
          nombre: "Ceramidas",
          para: "Son parte de la barrera natural de la piel. Ayudan a que retenga agua y tolere mejor los activos.",
          como: "En la crema hidratante, mañana y noche. Especialmente útiles si tu piel es seca, sensible o está usando retinoides.",
        },
        {
          nombre: "Protector solar de amplio espectro",
          para: "Protege de la radiación UVA y UVB, que envejece la piel y empeora las manchas.",
          como: "Todas las mañanas, en cantidad generosa, y reaplicado si estás expuesta al sol. Pregúntame en valoración qué textura va con tu piel.",
        },
      ],
    },
    {
      type: "heading",
      text: "Los errores que más veo en consulta",
    },
    {
      type: "list",
      items: [
        "Mezclar demasiados activos a la vez: ácidos, retinoides y vitamina C el mismo día, sin saber si la piel los tolera.",
        "Exfoliar todos los días. La piel necesita tiempo para renovarse; exfoliar de más la irrita y la vuelve más sensible.",
        "Cambiar de producto cada semana. Muchos activos necesitan semanas de uso constante para que veas un cambio.",
        "Dormir con maquillaje o protector sin retirar bien.",
        "Usar el protector solo cuando vas a la piscina o a la playa.",
        "Copiar la rutina de otra persona. Lo que le funciona a tu amiga no necesariamente le sirve a tu piel.",
      ],
    },
    {
      type: "quote",
      text: "Una buena rutina no es la que más productos tiene, sino la que tu piel tolera y tú puedes cumplir todos los días. — Dra. Daniela Díez",
    },
    {
      type: "image",
      src: "/images/blog/rutina-skincare-segun-la-doctora/03.webp",
      alt: "La Dra. Daniela Díez revisa la piel de una paciente de espaldas a la cámara en su consultorio con luz natural",
      caption: "Antes de recomendarte un producto, necesito ver tu piel.",
    },
    {
      type: "faq",
      preguntas: [
        {
          q: "¿En cuánto tiempo voy a ver resultados con mi rutina?",
          a: "Depende del activo y de cada piel. La hidratación se nota en pocos días; los cambios en textura, tono o manchas suelen tomar varias semanas de uso constante. Por eso no conviene cambiar de producto antes de tiempo.",
        },
        {
          q: "¿Necesito tónico, esencia y mascarillas?",
          a: "No son indispensables. Si te gustan y tu piel los tolera, puedes usarlos, pero la base sigue siendo limpiar, tratar, hidratar y proteger.",
        },
        {
          q: "¿Los hombres necesitan una rutina distinta?",
          a: "La lógica es la misma. Muchas veces la piel masculina es más grasa y se irrita con la afeitada, así que ajustamos texturas y activos, pero los cuatro pasos aplican igual.",
        },
        {
          q: "¿Puedo hacer mi rutina si me voy a hacer un tratamiento en consulta?",
          a: "Sí, pero algunos activos, como retinoides o ácidos, se suspenden unos días antes y después de ciertos procedimientos. Te lo indico en la valoración según el tratamiento.",
        },
        {
          q: "Me salió irritación con un producto nuevo, ¿qué hago?",
          a: "Suspéndelo, deja solo limpieza suave, hidratante y protector, y espera a que la piel se calme. Si hay ardor intenso, ampollas o hinchazón, consulta con un médico.",
        },
      ],
    },
    {
      type: "heading",
      text: "Tu rutina empieza en la valoración",
    },
    {
      type: "paragraph",
      text: "Todo lo que te conté es una guía general. Para armar tu rutina de verdad necesito verte: cómo está tu barrera, si hay manchas, acné, sensibilidad o signos que requieran otro enfoque, qué usas hoy y qué has probado. En la valoración revisamos tu piel con calma, te explico qué conservar y qué suspender, y definimos los activos y las concentraciones que tienen sentido para ti.",
    },
    {
      type: "paragraph",
      text: "Y si en algún momento un tratamiento en consulta puede complementar lo que haces en casa, te lo voy a decir con honestidad, igual que te voy a decir cuándo no lo necesitas. La rutina diaria es la base; lo demás, cuando hace falta, se construye encima.",
    },
  ],
};
