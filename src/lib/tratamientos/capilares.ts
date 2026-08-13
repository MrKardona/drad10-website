import type { Tratamiento } from "./types";

export const capilares: Tratamiento[] = [
  // ── Implante Capilar FUE ─────────────────────────────────────────────────
  {
    slug: "implante-capilar-fue",
    categoria: "capilares",
    nombre: "Implante Capilar FUE",
    hero: {
      eyebrow: "MICROIMPLANTE CAPILAR · TÉCNICA FUE",
      titulo: "Recupera tu cabello,",
      tituloEm: "folículo a folículo",
      sub: "Microimplante capilar con técnica FUE realizado por médica certificada: sin cicatriz lineal, con diseño de línea frontal natural y acompañamiento durante todo el año de crecimiento.",
    },
    seo: {
      title: "Implante Capilar FUE en Medellín | DRA.D10 — Sin Cicatriz",
      description:
        "Microimplante capilar técnica FUE en El Poblado, Medellín. Médica certificada, sin cicatriz lineal, resultados naturales. Valoración capilar gratuita.",
      keywords: [
        "implante capilar medellín",
        "injerto capilar medellín",
        "implante de cabello fue",
        "trasplante capilar el poblado",
        "microimplante capilar medellín",
      ],
    },
    problema: {
      titulo: "La calvicie avanza — y las soluciones mágicas no funcionan",
      parrafos: [
        "Entradas que crecen, coronilla que clarea, el espejo y las fotos que lo confirman. Lociones milagrosas y shampoos 'anticaída' no reponen folículos que ya murieron.",
        "El implante FUE es la única solución definitiva para zonas despobladas — pero su resultado depende 100% de quién lo hace: el diseño de la línea frontal, el ángulo de cada folículo y el manejo médico marcan la diferencia entre un resultado natural y uno de 'muñeco'.",
      ],
    },
    queEs: {
      titulo: "Qué es la técnica FUE",
      desc: "FUE (Follicular Unit Extraction) consiste en extraer unidades foliculares una a una de tu zona donante (nuca) e implantarlas en las zonas despobladas, controlando ángulo, dirección y densidad. Sin bisturí, sin cicatriz lineal visible, con anestesia local. El cabello implantado es tuyo y crece de forma permanente.",
    },
    beneficios: ["Sin cicatriz lineal", "Anestesia local", "Un solo día de procedimiento", "Resultado permanente", "Acompañamiento 12 meses"],
    zonasTitulo: "Qué podemos recuperar",
    zonas: [
      { icon: "◠", label: "Entradas", desc: "Rediseño de línea frontal con distribución natural." },
      { icon: "◎", label: "Coronilla", desc: "Densidad en la zona de remolino." },
      { icon: "▤", label: "Densidad general", desc: "Refuerzo en zonas que clarean." },
      { icon: "∿", label: "Barba", desc: "Diseño y densificación de barba." },
      { icon: "―", label: "Cejas", desc: "Reconstrucción de cejas despobladas." },
      { icon: "✚", label: "Cicatrices", desc: "Camuflaje de cicatrices con cabello." },
    ],
    pasos: [
      {
        num: "01",
        title: "Valoración capilar",
        desc: "Evaluamos tu zona donante, el grado de avance y diseñamos la línea frontal contigo. Te decimos con franqueza cuántos folículos necesitas y qué resultado es alcanzable.",
        detail: "~45 min · Gratuita",
      },
      {
        num: "02",
        title: "Procedimiento FUE",
        desc: "Un solo día, con anestesia local. Extracción e implantación folículo a folículo controlando ángulo y dirección. Descansos y comida incluidos.",
        detail: "6–8 horas · Anestesia local",
      },
      {
        num: "03",
        title: "Crecimiento acompañado",
        desc: "Costras caen en 10–14 días. El cabello nuevo empieza a crecer desde el mes 3–4 y el resultado final se ve entre el mes 9 y 12. Controles incluidos durante el proceso.",
        detail: "Resultado final: 9–12 meses",
      },
    ],
    seguridad: [
      {
        num: "01",
        title: "Realizado por médica certificada",
        desc: "La Dra. Daniela Díez está certificada en microimplante capilar FUE. No somos una 'fábrica de implantes' con personal técnico rotativo — tu procedimiento lo hace y supervisa la médica.",
      },
      {
        num: "02",
        title: "Diseño natural, no en línea recta",
        desc: "Una línea frontal creíble tiene irregularidad natural, densidad progresiva y ángulos correctos. Ese criterio estético-médico es lo que evita el efecto 'pelo de muñeco'.",
      },
      {
        num: "03",
        title: "Cuidado de tu zona donante",
        desc: "Extraemos de forma distribuida para no despoblar la nuca. Tu zona donante es finita — la manejamos pensando también en el futuro.",
      },
      {
        num: "04",
        title: "Acompañamiento de 12 meses",
        desc: "El implante no termina el día del procedimiento: incluye controles durante el año de crecimiento y protocolo de cuidado postoperatorio por escrito.",
      },
    ],
    precio: {
      desde: null,
      incluye: [
        "Valoración y diseño de línea frontal",
        "Procedimiento completo con anestesia local",
        "Kit de cuidado postoperatorio",
        "Controles durante los 12 meses de crecimiento",
      ],
      nota: "El valor depende del número de folículos — se define en la valoración.",
    },
    faq: [
      {
        q: "¿El resultado se ve natural?",
        a: "Si el diseño y los ángulos son correctos, nadie nota que es implantado. Por eso importa que lo haga una médica con criterio estético y no un proceso en serie.",
      },
      {
        q: "¿Duele el procedimiento?",
        a: "Se realiza con anestesia local: la aplicación inicial molesta unos segundos y de ahí en adelante el procedimiento es prácticamente indoloro. Muchos pacientes ven películas o duermen.",
      },
      {
        q: "¿Cuándo puedo volver a trabajar?",
        a: "Trabajo de oficina: 2–3 días si no te incomoda que se noten las microcostras (caen solas en 10–14 días). Ejercicio fuerte: desde la semana 2–3 según indicación.",
      },
      {
        q: "¿El cabello implantado se cae?",
        a: "El cabello implantado pasa por una caída temporal normal (shock loss) y vuelve a crecer de forma definitiva: proviene de una zona genéticamente resistente a la calvicie.",
      },
      {
        q: "¿Cuántos folículos necesito?",
        a: "Se calcula en la valoración según tus zonas y tu donante. Desconfía de cifras dadas por WhatsApp sin haberte examinado.",
      },
      {
        q: "¿Y si mi caída aún está activa?",
        a: "Lo evaluamos primero: a veces conviene estabilizar la caída con tratamiento médico (PRP, mesoterapia, medicación) antes o junto al implante. Te proponemos el plan honesto, no el más caro.",
      },
    ],
    waMensaje: "Hola, me interesa una valoración capilar gratuita para Implante FUE",
  },
];
