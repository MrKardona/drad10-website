# Plan — Landing pages de tratamientos DRA.D10

**Meta:** 37 tratamientos del menú → cada uno con su landing page enfocada en **vender seguridad y confianza**. Hoy solo existe /servicios/botox; todo lo demás apunta a anclas de la home.

## Principio rector (CRO)

Cada visitante que no agenda tiene una objeción concreta. En medicina estética las "Big 5" son:

| Objeción | Pregunta del paciente | Contra-objeción a montar |
|---|---|---|
| **Miedo/Seguridad** | "¿Es seguro? ¿Duele? ¿Y si queda mal?" | Médica titulada ARG+COL, productos originales, protocolo por escrito, valoración previa obligatoria |
| **Confianza** | "¿Por qué creerles?" | 4.9★ · 266 reseñas Google, +20.000 pacientes, credenciales verificables |
| **Resultado antinatural** | "No quiero verme operada" | Filosofía de naturalidad, antes/después reales, "menos es más" |
| **Precio** | "¿Vale lo que cuesta?" | Precio "desde" transparente + qué incluye + valoración sin costo |
| **Encaje** | "¿Funcionará en MÍ?" | Valoración gratuita personalizada + Scanner D10 diagnóstico |

Regla: cada contra-objeción va **en el punto de fricción**, no escondida en el FAQ.

## Arquitectura técnica

Un **template maestro** + un archivo de datos por tratamiento (no 37 páginas artesanales):

```
src/app/servicios/[slug]/page.tsx      ← template único (generateStaticParams → 100% estático)
src/lib/tratamientos/
  faciales.ts  corporales.ts  capilares.ts  zona-intima.ts   ← datos por tratamiento
src/components/servicios/               ← secciones reutilizables
```

La página actual de Botox (1.600 líneas, buen diseño) se usa como referencia visual y se migra al template.

## Anatomía de cada landing (orden probado)

1. **Hero** — titular de resultado (6-12 palabras) + sub + CTA "Agenda tu valoración GRATIS" + strip de prueba (4.9★ Google · +20.000 pacientes)
2. **Barra de confianza** — credenciales Dra. Daniela, certificaciones del tratamiento
3. **El problema** — el dolor específico en lenguaje del paciente
4. **Qué es y cómo funciona** — 3 pasos: Valoración → Procedimiento → Seguimiento
5. **★ Sección Seguridad** (el corazón) — protocolo, productos con registro INVIMA, quién aplica, qué pasa si algo sale mal
6. **Resultados** — antes/después reales (pendiente fotos con consentimiento)
7. **Reseñas** — componente Google ya construido
8. **Precio** — "desde $X" + qué incluye (pendiente decisión)
9. **FAQ** — 5-7 objeciones específicas del tratamiento
10. **CTA final** — WhatsApp con mensaje prellenado por tratamiento

Extras por página: metadata SEO local ("botox medellín"), schema.org MedicalProcedure, OG image.

## Fases

| Fase | Qué | Entregable |
|---|---|---|
| **0. Template** | Template maestro + modelo de datos + migrar Botox | /servicios/[slug] funcionando |
| **1. Lote prioritario (6)** | Los de mayor demanda comercial | 6 landings en vivo |
| **2. Lotes restantes** | Resto por lotes de 6-8 | ~37 landings |
| **3. Cierre** | Nav apuntando a páginas reales, sitemap, deploy | Todo enlazado |

**Lote 1 propuesto** (por demanda + lo que ya promocionan en Instagram): Relleno de Labios (promo activa), Implante Capilar FUE (ticket alto), Ácido Hialurónico, Moldeamiento Corporal/INDIBA, Descenso de Peso, Limpieza Facial (puerta de entrada).

## Lo que necesito de la clínica

1. **Precios "desde"** por tratamiento (o decisión de no mostrar precios)
2. **Duración, sesiones y tiempo de recuperación** por tratamiento (lo que sepan; el resto lo redacto conservador y lo validan)
3. **Fotos reales** (carpeta `2-tratamientos-y-clinica` del Escritorio)
4. **Confirmar certificaciones** listadas en /nosotros
