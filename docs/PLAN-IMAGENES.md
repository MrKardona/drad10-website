# DRA.D10 — Plan de Imágenes Propias (Higgsfield)

## Estado actual

| Tipo | Cantidad | Detalle |
|---|---|---|
| ✅ Propias | 3 | `dra-daniela.jpg`, `equipo.jpg`, `hero-bg.jpg` |
| ⚠️ Instagram | 6 | `.webp` locales pero de stock genérico |
| ❌ Genéricas Unsplash | 19 únicas / 31 usos | Repartidas en 5 archivos activos |
| 💀 Código muerto | 8 | `Hero.tsx`, `HeroParticle.tsx`, `TecnologiaShowcase.tsx` — no se usan |

---

## LOTE 1 — CRÍTICO (Home, lo primero que ve el paciente)

### 1.1 · Tratamientos Destacados — 5 imágenes
`src/components/TratamientosDestacados.tsx`

| # | Slot | Destino | Formato |
|---|---|---|---|
| 1 | Scanner D10 / INDIBA | `/images/tratamientos/scanner-d10.webp` | 800×600 |
| 2 | Botox | `/images/tratamientos/botox.webp` | 700×400 |
| 3 | Implante Capilar | `/images/tratamientos/implante-capilar.webp` | 500×300 |
| 4 | Limpiezas Faciales | `/images/tratamientos/limpieza-facial.webp` | 500×300 |
| 5 | Recuperación Capilar | `/images/tratamientos/recuperacion-capilar.webp` | 500×300 |
| 6 | Descenso de Peso | `/images/tratamientos/descenso-peso.webp` | 500×300 |

### 1.2 · Resultados Teaser — 4 imágenes
`src/components/ResultadosTeaser.tsx` → `/images/resultados/teaser-0{1..4}.webp` · 600×750

---

## LOTE 2 — GALERÍA DE RESULTADOS (8 casos)
`src/lib/gallery-data.ts` → `/images/galeria/{id}.webp` · 700×900 (900×1100 el featured)

| id | Tratamiento | Zona |
|---|---|---|
| `indiba-corporal` ⭐ | INDIBA Activ | Abdomen y flancos |
| `acido-hialuronico-labios` | Ácido Hialurónico | Labios |
| `botox-frente` | Toxina Botulínica | Frente y entrecejo |
| `rejuvenecimiento-facial` | Radiofrecuencia Facial | Rostro completo |
| `hilos-tensores` | Hilos Tensores | Óvalo facial |
| `microimplante-capilar` | Microimplante FUE | Frontal y coronilla |
| `mesoterapia-capilar` | Mesoterapia Capilar | Cuero cabelludo |
| `reduccion-corporal` | Moldeamiento | Muslos y glúteos |

---

## LOTE 3 — EQUIPO (/nosotros)
3 de 4 tarjetas están en "Próximamente" sin foto.
→ `/images/equipo/{nombre}.webp` · 600×800 vertical
**Necesito:** nombres reales + cargo + foto de referencia de cada una.

---

## LOTE 4 — INSTAGRAM (6) + BLOG (12) + BOTOX (2)
- `/images/instagram/post-0{1..6}.webp` · 1080×1080 — reemplazar stock
- `src/lib/blog-posts.ts` — 7 portadas + 5 inline · 1200×630
- `src/app/servicios/botox/page.tsx` — 2 imágenes

---

## Dirección de arte (aplicar a TODOS los prompts)

```
ESTILO BASE:
Editorial medical aesthetics photography, luxury clinic in Medellín Colombia.
Warm natural window light, soft shadows. Color palette: deep charcoal #1c1c1c,
warm cream #faf8f5, muted gold #b89a6a accents. Shallow depth of field f/2.0.
Shot on Canon R5, 85mm. Clean minimal composition, generous negative space.
Latin American / Colombian subjects, natural realistic skin texture with visible
pores — NOT airbrushed, NOT plastic. Professional but warm and approachable.
No text, no logos, no watermarks.

EVITAR: stock photo feel, exaggerated smiles, cold blue clinical lighting,
white lab coat clichés, over-retouched plastic skin, generic beauty spa vibes.
```

---

## Lo que necesito de ti

1. **Dra. Daniela** — 3–5 fotos de referencia: frontal, perfil, cuerpo entero, con bata y sin bata. Higgsfield necesita esto para mantener el personaje consistente en todas las imágenes.
2. **Equipo** — nombres reales, cargos y 1–2 fotos de cada integrante.
3. **La clínica** — 5–10 fotos del espacio real (recepción, cabinas, equipos, Scanner D10, INDIBA) para que el entorno generado coincida con el real.
4. **Pacientes** — ¿usamos modelos genéricos o tienes consentimiento de pacientes reales?
