import type { Tratamiento } from "./types";

export const faciales: Tratamiento[] = [
  // ── Relleno de Labios ─────────────────────────────────────────────────────
  {
    slug: "relleno-de-labios",
    categoria: "faciales",
    nombre: "Relleno de Labios",
    hero: {
      eyebrow: "ÁCIDO HIALURÓNICO · LABIOS",
      titulo: "Labios con volumen,",
      tituloEm: "sin perder tu esencia",
      sub: "Perfilamos e hidratamos tus labios con ácido hialurónico premium, aplicado por una médica certificada. Resultado armónico con tu rostro — nunca sobredimensionado.",
    },
    seo: {
      title: "Relleno de Labios en Medellín | DRA.D10 — Aumento Natural",
      description:
        "Aumento y perfilado de labios con ácido hialurónico en El Poblado, Medellín. Aplicación médica, productos originales y resultado natural. Valoración gratuita.",
      keywords: [
        "relleno de labios medellín",
        "aumento de labios medellín",
        "ácido hialurónico labios",
        "labios naturales medellín",
        "perfilado de labios el poblado",
      ],
    },
    problema: {
      titulo: "¿Te da miedo quedar con labios exagerados?",
      parrafos: [
        "Es el temor número uno de quien considera un relleno — y con razón: todas hemos visto resultados artificiales hechos por personal no médico, con productos de dudosa procedencia.",
        "Un relleno bien hecho no se nota como relleno: se ve como unos labios hidratados, definidos y en proporción con tu rostro. Esa es la diferencia entre una aplicación comercial y una aplicación médica.",
      ],
    },
    queEs: {
      titulo: "Qué es el relleno con ácido hialurónico",
      desc: "El ácido hialurónico es una sustancia que tu propio cuerpo produce. En labios, actúa aportando volumen, definición e hidratación de forma gradual y reversible. No es permanente, no migra si se aplica con técnica correcta, y el resultado se diseña contigo antes de tocar una jeringa.",
    },
    beneficios: ["Procedimiento ambulatorio", "Anestesia tópica incluida", "Resultado inmediato", "Reversible con hialuronidasa", "Sin incapacidad"],
    zonasTitulo: "Qué podemos lograr",
    zonas: [
      { icon: "◐", label: "Volumen", desc: "Aumento gradual y proporcionado — decides el nivel en la valoración." },
      { icon: "△", label: "Perfilado", desc: "Definición del arco de cupido y el contorno labial." },
      { icon: "≈", label: "Hidratación", desc: "Labios resecos o con líneas verticales recuperan textura." },
      { icon: "◎", label: "Simetría", desc: "Corrección de asimetrías naturales entre labio superior e inferior." },
      { icon: "↑", label: "Soporte", desc: "Comisuras caídas y pérdida de estructura por edad." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración y diseño",
        desc: "Analizamos tu anatomía labial y facial. Definimos juntas el resultado: cuánto volumen, qué forma, qué es armónico para ti. Sin presión de venta.",
        detail: "~30 min · Gratuita",
      },
      {
        num: "02",
        title: "Aplicación con anestesia",
        desc: "Crema anestésica previa. Aplicación con cánula o aguja según tu caso, con producto original sellado que abres tú misma.",
        detail: "30–45 min · Mismo día",
      },
      {
        num: "03",
        title: "Control incluido",
        desc: "La inflamación inicial baja en 3–5 días. A los 15 días revisamos el resultado y hacemos retoques si son necesarios.",
        detail: "Resultado: 9–12 meses aprox.",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Aplica una médica, no una esteticista",
        desc: "La Dra. Daniela Díez tiene formación médica con certificación en inyectables. Conoce la anatomía vascular del labio — eso es lo que previene complicaciones.",
      },
      {
        num: "02",
        title: "Producto original y sellado",
        desc: "Solo usamos ácido hialurónico de marcas reconocidas con registro INVIMA. El producto se abre sellado frente a ti.",
      },
      {
        num: "03",
        title: "Es reversible",
        desc: "El ácido hialurónico se puede disolver con hialuronidasa si el resultado no te convence. Trabajamos con protocolo de reversión disponible — pocas clínicas lo ofrecen.",
      },
      {
        num: "04",
        title: "Seguimiento real",
        desc: "Control a los 15 días incluido. Si hay una asimetría o un detalle por pulir, se corrige. No desaparecemos después del procedimiento.",
      },
    ],
    precio: {
      desde: null,
      incluye: [
        "Valoración y diseño personalizado",
        "Producto original con registro INVIMA",
        "Anestesia tópica",
        "Control post-tratamiento a los 15 días",
      ],
    },
    faq: [
      {
        q: "¿Duele el procedimiento?",
        a: "Aplicamos crema anestésica antes y muchos productos incluyen lidocaína. La mayoría de pacientes lo describe como molestias leves y tolerables, no dolor.",
      },
      {
        q: "¿Quedaré con labios exagerados?",
        a: "No, salvo que lo pidas. El diseño se define contigo en la valoración y aplicamos de forma gradual. Siempre puedes volver por más volumen; quitar es más difícil — por eso nuestra filosofía es conservadora.",
      },
      {
        q: "¿Cuánto dura el resultado?",
        a: "Entre 9 y 12 meses en promedio, dependiendo de tu metabolismo y del producto. No es permanente: el cuerpo lo reabsorbe de forma natural.",
      },
      {
        q: "¿Qué pasa si no me gusta?",
        a: "El ácido hialurónico es reversible con hialuronidasa. En la práctica casi nunca es necesario porque el diseño se acuerda antes, pero la opción existe y la manejamos en la clínica.",
      },
      {
        q: "¿Puedo hacer vida normal después?",
        a: "Sí. Puede haber inflamación y algún morado leve los primeros días. Evita ejercicio intenso, calor extremo y maquillaje en la zona por 24–48 horas.",
      },
    ],
    waMensaje: "Hola, me interesa una valoración gratuita para Relleno de Labios",
  },

  // ── Ácido Hialurónico ────────────────────────────────────────────────────
  {
    slug: "acido-hialuronico",
    categoria: "faciales",
    nombre: "Ácido Hialurónico",
    hero: {
      eyebrow: "RELLENOS DÉRMICOS FACIALES",
      titulo: "Recupera volumen y armonía,",
      tituloEm: "sin cirugía",
      sub: "Rellenos faciales con ácido hialurónico aplicados con criterio médico: ojeras, pómulos, mentón, mandíbula y surcos. Resultados que se ven frescos, no operados.",
    },
    seo: {
      title: "Ácido Hialurónico en Medellín | DRA.D10 — Rellenos Faciales",
      description:
        "Rellenos faciales con ácido hialurónico en El Poblado, Medellín: ojeras, pómulos, mentón, rinomodelación. Aplicación médica certificada. Valoración gratuita.",
      keywords: [
        "ácido hialurónico medellín",
        "rellenos faciales medellín",
        "relleno de ojeras medellín",
        "rinomodelación medellín",
        "armonización facial el poblado",
      ],
    },
    problema: {
      titulo: "El rostro pierde volumen antes que firmeza",
      parrafos: [
        "Ojeras marcadas aunque duermas bien. Pómulos que se aplanan. Surcos que hacen ver el rostro cansado o triste. No es piel 'mala' — es pérdida natural de volumen y soporte que empieza desde los 25–30 años.",
        "La solución quirúrgica es invasiva y costosa. La alternativa médica es reponer ese volumen exactamente donde se perdió, con una sustancia biocompatible y reversible.",
      ],
    },
    queEs: {
      titulo: "Qué es la armonización con ácido hialurónico",
      desc: "Es la reposición estratégica de volumen con un gel de ácido hialurónico — la misma molécula que produce tu piel. Aplicado en puntos específicos, restaura proporciones, proyecta estructuras y suaviza surcos sin alterar tu expresión. El plan se diseña por rostro, nunca por moda.",
    },
    beneficios: ["Sin cirugía", "Resultado inmediato", "Procedimiento ambulatorio", "Reversible", "Duración 9–18 meses"],
    zonasTitulo: "Zonas que tratamos",
    zonas: [
      { icon: "◡", label: "Ojeras", desc: "Atenúa la sombra del surco lagrimal. Mirada descansada." },
      { icon: "◠", label: "Pómulos", desc: "Reposición de volumen malar. Efecto lifting sin cirugía." },
      { icon: "▽", label: "Mentón", desc: "Proyección y definición del perfil." },
      { icon: "∠", label: "Mandíbula", desc: "Definición del contorno mandibular." },
      { icon: "∿", label: "Surcos", desc: "Nasogenianos y líneas de marioneta suavizados." },
      { icon: "△", label: "Rinomodelación", desc: "Corrección no quirúrgica del perfil nasal." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración facial completa",
        desc: "Analizamos proporciones, puntos de pérdida de volumen y prioridades. Te proponemos un plan por fases — empezando por lo que más impacto tiene.",
        detail: "~30 min · Gratuita",
      },
      {
        num: "02",
        title: "Aplicación por zonas",
        desc: "Anestesia tópica, técnica con cánula (menos trauma, menos morados) o aguja según la zona. Producto original sellado.",
        detail: "30–60 min · Mismo día",
      },
      {
        num: "03",
        title: "Resultado y control",
        desc: "El resultado es inmediato y mejora al asentarse el producto en 2 semanas. Control incluido a los 15 días.",
        detail: "Duración: 9–18 meses según zona",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Conocimiento anatómico real",
        desc: "Inyectar un rostro exige conocer arterias y nervios. La Dra. Díez es médica certificada en inyectables — no delegamos tu cara a personal sin formación médica.",
      },
      {
        num: "02",
        title: "Productos con registro INVIMA",
        desc: "Marcas internacionales de trayectoria, cadena de frío garantizada, producto sellado que se abre frente a ti.",
      },
      {
        num: "03",
        title: "Filosofía de naturalidad",
        desc: "Preferimos quedarnos cortas y agendar una segunda sesión antes que sobrecargar tu rostro. El objetivo es que te veas descansada, no distinta.",
      },
      {
        num: "04",
        title: "Reversible y con protocolo de urgencia",
        desc: "Trabajamos con hialuronidasa disponible en la clínica: el relleno se puede disolver si es necesario. Protocolo de manejo de complicaciones por escrito.",
      },
    ],
    precio: {
      desde: null,
      incluye: [
        "Valoración y plan facial por fases",
        "Producto original con registro INVIMA",
        "Anestesia tópica",
        "Control post-tratamiento a los 15 días",
      ],
    },
    faq: [
      {
        q: "¿El resultado se ve inmediato?",
        a: "Sí, el volumen se ve al momento. El resultado final se aprecia a las 2 semanas, cuando baja la inflamación y el producto se integra.",
      },
      {
        q: "¿Cuánto dura?",
        a: "Depende de la zona y el producto: entre 9 y 18 meses. Zonas de más movimiento (labios, surcos) duran menos que zonas estructurales (mentón, pómulos).",
      },
      {
        q: "¿Voy a quedar con cara inflada?",
        a: "No. Ese resultado viene de sobrecargar el rostro con producto. Nuestro enfoque es reponer lo que se perdió, no agregar lo que nunca estuvo.",
      },
      {
        q: "¿Cuántas jeringas necesito?",
        a: "Se define en la valoración según tus zonas y prioridades. Preferimos un plan por fases que un cambio drástico en una sola sesión.",
      },
      {
        q: "¿Qué cuidados debo tener después?",
        a: "Evitar ejercicio intenso, calor (sauna, sol directo) y masajear la zona por 48 horas. Puede haber inflamación leve o morados pequeños que ceden en días.",
      },
    ],
    waMensaje: "Hola, me interesa una valoración gratuita para Ácido Hialurónico facial",
  },

  // ── Limpieza Facial ──────────────────────────────────────────────────────
  {
    slug: "limpieza-facial",
    categoria: "faciales",
    nombre: "Limpieza Facial Profunda",
    hero: {
      eyebrow: "PROTOCOLO DE PIEL · CLÍNICO",
      titulo: "Piel limpia y luminosa,",
      tituloEm: "con protocolo médico",
      sub: "Limpieza facial profunda con extracción, hidratación y tecnología — adaptada a tu tipo de piel por profesionales clínicas. El punto de partida de cualquier piel sana.",
    },
    seo: {
      title: "Limpieza Facial Profunda en Medellín | DRA.D10",
      description:
        "Limpieza facial profunda con protocolo clínico en El Poblado, Medellín. Extracción, hidratación y tecnología según tu tipo de piel. Agenda tu cita.",
      keywords: [
        "limpieza facial medellín",
        "limpieza facial profunda medellín",
        "limpieza facial el poblado",
        "skincare clínico medellín",
      ],
    },
    problema: {
      titulo: "Productos van y vienen — la base es la limpieza",
      parrafos: [
        "Poros congestionados, puntos negros, textura irregular, brillo graso o resequedad: la mayoría de problemas de piel comunes empiezan por acumulación que ningún producto casero remueve del todo.",
        "Una limpieza clínica hecha con criterio — no un facial de spa — prepara tu piel para que todo lo demás funcione: tus productos, tus tratamientos y tu rutina.",
      ],
    },
    queEs: {
      titulo: "Qué incluye nuestra limpieza profunda",
      desc: "Protocolo por fases: diagnóstico de tu piel, higienización, exfoliación, extracción de comedones con técnica correcta, hidratación profunda y protección. Según tu piel, integramos vapor ozono, alta frecuencia o mascarillas específicas. No es plantilla: es protocolo personalizado.",
    },
    beneficios: ["Sin incapacidad", "Resultados inmediatos", "Para todo tipo de piel", "Protocolo clínico personalizado", "60–90 minutos"],
    zonasTitulo: "Para qué tipo de piel",
    zonas: [
      { icon: "●", label: "Piel grasa", desc: "Control de sebo y descongestión de poros." },
      { icon: "○", label: "Piel seca", desc: "Hidratación profunda sin agredir la barrera." },
      { icon: "◐", label: "Piel mixta", desc: "Balance por zonas con productos diferenciados." },
      { icon: "△", label: "Tendencia acneica", desc: "Extracción técnica sin generar marcas." },
      { icon: "◇", label: "Piel apagada", desc: "Luminosidad inmediata y textura uniforme." },
    ],
    pasos: [
      {
        num: "01",
        title: "Diagnóstico de piel",
        desc: "Evaluamos tu tipo de piel, sensibilidad y necesidades antes de tocar tu rostro. El protocolo se arma según lo que tu piel necesita hoy.",
        detail: "Incluido en la sesión",
      },
      {
        num: "02",
        title: "Protocolo por fases",
        desc: "Higienización, exfoliación, extracción cuidadosa, mascarilla e hidratación. Tecnología de apoyo según el caso.",
        detail: "60–90 min · Sin incapacidad",
      },
      {
        num: "03",
        title: "Rutina y frecuencia",
        desc: "Te dejamos recomendaciones de cuidado en casa y la frecuencia ideal para tu piel — normalmente cada 4 a 8 semanas.",
        detail: "Resultados visibles de inmediato",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Personal clínico entrenado",
        desc: "Nuestra esteticista clínica senior trabaja bajo protocolos médicos de la clínica — técnica de extracción correcta que no deja marcas ni lesiones.",
      },
      {
        num: "02",
        title: "Bioseguridad hospitalaria",
        desc: "Material estéril y desechable donde corresponde, dentro de la Clínica Medellín sede El Poblado.",
      },
      {
        num: "03",
        title: "Sin agredir tu barrera cutánea",
        desc: "No sobre-exfoliamos ni usamos productos agresivos genéricos. Si tu piel está reactiva ese día, el protocolo se adapta.",
      },
      {
        num: "04",
        title: "Puerta de entrada honesta",
        desc: "Si tu piel necesita algo más (manchas, acné activo, poros), te lo decimos con claridad y opciones — sin venderte tratamientos que no necesitas.",
      },
    ],
    precio: {
      desde: null,
      incluye: [
        "Diagnóstico de piel",
        "Protocolo completo por fases",
        "Tecnología de apoyo según tu caso",
        "Guía de cuidado en casa",
      ],
    },
    faq: [
      {
        q: "¿Cada cuánto debo hacerme una limpieza?",
        a: "Depende de tu piel: cada 4 semanas para piel grasa o congestionada, cada 6–8 para piel normal. Lo definimos en tu primera sesión.",
      },
      {
        q: "¿Duele la extracción?",
        a: "Puede haber molestia leve en zonas congestionadas, pero la técnica correcta minimiza el dolor y — más importante — no deja marcas.",
      },
      {
        q: "¿Puedo maquillarme después?",
        a: "Recomendamos dejar la piel libre de maquillaje el resto del día y usar protector solar. Desde el día siguiente, vida normal.",
      },
      {
        q: "¿Sirve si tengo acné?",
        a: "Sí, con protocolo adaptado. Si tu acné está muy activo, la Dra. puede evaluarte primero para combinar la limpieza con tratamiento médico.",
      },
      {
        q: "¿Es lo mismo que un facial de spa?",
        a: "No. Un facial de spa es relajación; una limpieza clínica es tratamiento: diagnóstico, extracción técnica y productos de grado profesional.",
      },
    ],
    waMensaje: "Hola, quiero agendar una Limpieza Facial Profunda",
  },
];
