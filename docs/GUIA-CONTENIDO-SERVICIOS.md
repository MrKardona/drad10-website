# Guía de contenido: páginas de servicio

Cada servicio es una entrada `Tratamiento` (ver `src/lib/tratamientos/types.ts`)
que la plantilla `src/app/servicios/[slug]/page.tsx` convierte en una página de
venta. La fuente de verdad de la clínica es `docs/servicios-manifest.json`.

## 1. Veracidad (no negociable)

Es una clínica médica real. Un dato inventado es un problema legal y de
reputación.

**Solo del manifiesto** (nunca inventar ni ampliar):
- Precios, qué incluye cada paquete, número de sesiones o jeringas de un paquete.
- Nombres de equipos y marcas: Cryonic, INDIBA, Hydrafacial, Radiesse/Facetem,
  Sculptra, NCTF, Cosmelan, Liposonic, analizador facial y capilar.
- Datos de la clínica: Clínica Quantum, dirección médica de la Dra. Daniela Díez,
  Cl. 7 #39-290 Consultorio 516, El Poblado, Medellín. Lunes a sábado.
  4.9 en Google con 266 reseñas.

**Prohibido escribir**:
- Cifras de pacientes, años de experiencia, certificaciones, premios,
  porcentajes de éxito o de satisfacción.
- "Valoración gratuita", "gratis", "sin costo". Di "agenda tu valoración".
- Garantías ("resultados garantizados", "100 % seguro", "sin dolor", "sin riesgos").
- Que la Dra. Daniela realiza personalmente el procedimiento. Di "personal médico"
  o "bajo la dirección médica de la Dra. Daniela Díez".
- Marcas, productos o técnicas que no estén en el manifiesto.
- Comparaciones con otras clínicas.

**Información médica general** (duración, sesiones, recuperación, efectos
secundarios, contraindicaciones): permitida si es conocimiento médico
ampliamente aceptado, prudente y en rangos. Usa "habitualmente", "según tu caso",
"lo define la valoración". Menciona efectos secundarios comunes con honestidad
(enrojecimiento, inflamación, morado leve, sensibilidad). Contraindicaciones
genéricas cuando apliquen: embarazo, lactancia, infección activa en la zona,
enfermedades autoinmunes no controladas, alergia a componentes.

Si el manifiesto trae `_errata`, no uses el valor dudoso.

## 2. Marketing y conversión

- Habla de **resultados y emociones**, no de características. Tuteo, español de
  Colombia, tono cálido, experto y sereno. Nada de exclamaciones ni hype.
- `hero.titulo` + `hero.tituloEm`: la transformación en 6 a 10 palabras.
  Ej.: "Labios que se ven tuyos," + "más definidos, nunca inflados".
- `hero.sub`: 1 o 2 frases. Qué es, para quién y el diferencial (criterio médico).
- `problema`: nombra el dolor del paciente con empatía (2 párrafos cortos).
- `paraQuien`: 4 a 5 `ideal` y 3 a 4 `noIdeal`. Filtra expectativas; genera confianza.
- `beneficios`: 4 a 5 chips de 2 a 5 palabras.
- `zonas`: 3 a 6 zonas o mejoras concretas, cada una con `icon` (un solo carácter
  tipográfico sobrio: ◠ ◡ ▭ ◇ ○ ✦ ∪ ▽), `label` y `desc` de una línea.
- `pasos`: **exactamente 3**, en este orden (las imágenes se generan así):
  1. `01` Valoración o diagnóstico (con analizador facial o capilar cuando aplique).
  2. `02` El procedimiento en sí.
  3. `03` Resultados y seguimiento.
  `detail`: dato corto en mayúsculas visuales, p. ej. "20 a 30 min".
- `seguridad`: 3 a 4 puntos (criterio médico, protocolo, expectativas claras,
  seguimiento). Específicos del procedimiento, no genéricos.
- `cuidados`: 3 a 4 `antes` y 4 a 5 `despues`, accionables.
- `faq`: 6 a 8 preguntas reales de pacientes: precio, dolor, duración del
  resultado, recuperación, efectos secundarios, cuándo se ve, combinación con
  otros, quién no puede.
- `waMensaje`: "Hola, quiero agendar una valoración para <nombre del servicio>".

## 3. Formato y SEO

- `seo.title`: "<Servicio> en Medellín | Clínica Quantum" (máx. 60 caracteres).
- `seo.description`: 140 a 155 caracteres, incluye "El Poblado" o "Medellín" y un
  beneficio.
- `seo.keywords`: 4 a 6 búsquedas reales en minúscula.
- **Sin rayas largas (—)** en los textos. Usa comas, dos puntos o punto.
- `precio.desde`: el menor `valor` no nulo del manifiesto; `null` si todos son nulos.
- `precio.opciones`: copia exacta de `precios` del manifiesto (label, detalle, valor).
- `precio.incluye`: 3 a 5 puntos (valoración médica previa, lo que trae el
  paquete según manifiesto, indicaciones de cuidado, control si aplica).
- `precio.nota`: aclaración breve si hace falta (p. ej. "El número de jeringas
  lo define la valoración.").
- `ficha`: los cuatro campos, cortos (máx. 40 caracteres cada uno).
- `resultados`: copia `casos` del manifiesto. `relacionados`: copia del manifiesto.
- `grupo` y `categoria`: del manifiesto.
- No escribas `imagenes`: la plantilla las toma por convención de archivos.

## 4. Ejemplo completo

```ts
{
  slug: "criolipolisis",
  categoria: "corporales",
  grupo: "Contorno corporal",
  nombre: "Criolipólisis (Cryonic)",
  resultados: ["criolipolisis-abdomen", "criolipolisis-espalda"],
  relacionados: ["moldeamiento-corporal", "fosfatidilcolina", "paquete-reductor-abdomen"],
  hero: {
    eyebrow: "CRYONIC · CRIOLIPÓLISIS",
    titulo: "Congela la grasa localizada,",
    tituloEm: "afina medidas sin cirugía",
    sub: "Nuestra tecnología estrella para moldear la figura. En una sola sesión por zona congelamos las células de grasa localizada y lo complementamos con INDIBA y drenaje linfático.",
  },
  seo: {
    title: "Criolipólisis en Medellín | Clínica Quantum",
    description: "Criolipólisis Cryonic en El Poblado, Medellín: reduce grasa localizada en abdomen, flancos o espalda sin cirugía. Incluye INDIBA y drenaje.",
    keywords: ["criolipólisis medellín", "cryonic medellín", "reducir abdomen sin cirugía", "criolipólisis precio medellín"],
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
      "Te preocupa el abdomen, los flancos, la espalda o la papada",
    ],
    noIdeal: [
      "Buscas bajar de peso: para eso están los programas de reducción",
      "Estás en embarazo o lactancia",
      "Tienes hernias en la zona o sensibilidad extrema al frío",
    ],
  },
  problema: {
    titulo: "Esa grasa que no se va con dieta ni ejercicio",
    parrafos: [
      "Abdomen, flancos, espalda o papada: hay depósitos de grasa que se quedan aunque cuides tu alimentación y entrenes. No es falta de disciplina, es cómo tu cuerpo almacena grasa en ciertas zonas.",
      "La criolipólisis actúa justo ahí. El frío controlado elimina células de grasa de la zona tratada, sin agujas, sin quirófano y sin detener tu rutina.",
    ],
  },
  queEs: {
    titulo: "Qué es la criolipólisis",
    desc: "Es un tratamiento no invasivo que enfría de forma controlada el tejido graso. Las células de grasa son más sensibles al frío que la piel y el músculo: se dañan y el organismo las elimina de forma natural en las semanas siguientes. No baja de peso: reduce medidas y moldea la zona.",
  },
  beneficios: ["Una sesión por zona", "Sin cirugía ni incapacidad", "Incluye 3 sesiones de INDIBA", "Incluye drenaje linfático"],
  zonasTitulo: "Zonas que tratamos",
  zonas: [
    { icon: "▭", label: "Abdomen", desc: "Grasa localizada en abdomen alto y bajo." },
    { icon: "◠", label: "Flancos", desc: "Los laterales de la cintura que marcan la silueta." },
  ],
  pasos: [
    { num: "01", title: "Valoración y medición", desc: "Revisamos las zonas, medimos el pliegue de grasa y confirmamos que es lo indicado para ti.", detail: "Valoración médica previa" },
    { num: "02", title: "Sesión de criolipólisis", desc: "Colocamos el aplicador Cryonic. Al inicio sientes frío intenso que se vuelve tolerable en pocos minutos.", detail: "Una sesión por zona" },
    { num: "03", title: "INDIBA, drenaje y seguimiento", desc: "Complementamos con 3 sesiones de INDIBA y un drenaje linfático, y te acompañamos mientras se consolida el resultado.", detail: "3 INDIBA + 1 drenaje incluidos" },
  ],
  seguridad: [
    { num: "01", title: "Criterio médico antes que promoción", desc: "Si la criolipólisis no es lo que necesitas, te lo decimos en la valoración." },
  ],
  cuidados: {
    antes: ["Llega con la zona limpia, sin cremas", "Usa ropa cómoda", "Cuéntanos si tienes hernias o problemas circulatorios"],
    despues: ["Puedes retomar tu rutina el mismo día", "Mantente bien hidratada", "Es normal sentir la zona sensible o adormecida unos días", "Asiste a tus sesiones de INDIBA y drenaje"],
  },
  precio: {
    desde: 1600000,
    opciones: [
      { label: "1 aplicador", detalle: "Zona grande o papada · incluye 3 INDIBA + 1 drenaje linfático", valor: 1600000 },
      { label: "2 aplicadores", detalle: "Incluye 3 INDIBA + 1 drenaje linfático", valor: 2400000 },
    ],
    incluye: ["Valoración médica previa", "3 sesiones de INDIBA", "1 drenaje linfático", "Indicaciones de cuidado"],
    nota: "El número de aplicadores lo definimos en la valoración según tus zonas.",
  },
  faq: [
    { q: "¿Sirve para bajar de peso?", a: "No. Reduce medidas y moldea abdomen, flancos, espalda o piernas. Para bajar de peso tenemos programas de reducción con seguimiento médico." },
  ],
  waMensaje: "Hola, quiero agendar una valoración para Criolipólisis (Cryonic)",
}
```
