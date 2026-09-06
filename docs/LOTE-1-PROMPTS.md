# LOTE 1 — Home · 9 imágenes

## ⚙️ Configuración Higgsfield

**Modelo:** Soul / Higgsfield Soul (fotorrealismo editorial)
**Character reference:** subir fotos de la Dra. Daniela en los prompts marcados `[DRA]`
**Upscale:** 2x al final de cada generación

---

## 🎨 PREFIJO COMÚN — pégalo al inicio de TODOS los prompts

```
Editorial medical aesthetics photography for a luxury clinic in Medellín, Colombia.
Warm natural window light from camera left, soft directional shadows.
Color palette: deep charcoal, warm cream, muted antique gold accents.
Shot on Canon R5, 85mm lens, f/2.0, shallow depth of field.
Latin American subject, natural realistic skin texture with visible pores and fine
lines — NOT airbrushed. Calm, confident, understated expression. No text, no logos.
```

## 🚫 NEGATIVE PROMPT — el mismo para todos

```
stock photo aesthetic, forced smile, teeth showing wide, cold blue clinical lighting,
white lab coat cliché, plastic over-retouched skin, wax figure, spa towel on head,
cucumber slices, orchid flowers, generic beauty salon, watermark, text, logo,
extra fingers, deformed hands, blurry, oversaturated
```

---

# A · TRATAMIENTOS DESTACADOS (5)

---

## A1 — Botox `[DRA]`
**Ratio 16:9** → `/images/tratamientos/botox.webp` · 1400×800

```
Close-up of a woman in her late 30s receiving a precise botulinum toxin injection
in the glabella area between the eyebrows. A gloved practitioner's hand holds a fine
ultra-thin syringe at the frame edge, steady and controlled. The patient's eyes are
calm and open, no tension in her face. Her skin is bare, no makeup, natural texture.
Background is a softly blurred warm charcoal treatment room. The composition places
the face on the right third, leaving clean negative space on the left.
Intimate, clinical yet warm. Focus razor sharp on the injection point.
```

---

## A2 — Implante Capilar FUE
**Ratio 16:9** → `/images/tratamientos/implante-capilar.webp` · 1000×600

```
Overhead macro detail of a hair transplant FUE procedure in progress on a man's
frontal scalp. Individual follicular units being placed in precise rows along a
freshly drawn hairline. Gloved hands with fine forceps, surgical precision.
The scalp shows realistic detail — small implantation points, natural skin tone.
Sterile blue-grey surgical drape frames the edges, warm overhead surgical light.
Extremely sharp macro focus, technical and trustworthy, not gory.
Clean composition, top-down angle.
```

---

## A3 — Limpiezas Faciales
**Ratio 16:9** → `/images/tratamientos/limpieza-facial.webp` · 1000×600

```
A woman in her early 30s lying back during a deep facial cleansing treatment,
eyes gently closed, completely relaxed. A practitioner's gloved hands work a
professional ultrasonic skin scrubber along her cheekbone. Her skin is damp and
luminous, natural texture visible, no makeup. Dark charcoal towel beneath her head.
Warm cream and gold tones, soft light wrapping her face. Shot from a low three-quarter
angle. Serene, premium, editorial. Sharp on the skin surface, background dissolved.
```

---

## A4 — Recuperación Capilar
**Ratio 16:9** → `/images/tratamientos/recuperacion-capilar.webp` · 1000×600

```
Detail shot of a mesotherapy scalp treatment. A practitioner's gloved hands part
a woman's dark hair to reveal the scalp while applying micro-injections with a fine
needle along the part line. Healthy dense dark hair, realistic scalp texture.
Warm low-key lighting, deep charcoal background, subtle gold rim light on the hair.
Shot from behind and slightly above at an intimate distance.
Sharp focus on the scalp, hair strands catching the light. Technical and reassuring.
```

---

## A5 — Descenso de Peso
**Ratio 16:9** → `/images/tratamientos/descenso-peso.webp` · 1000×600

```
A woman in her 40s in profile, seated in a consultation room, being measured with
a body composition analyzer. Her posture is upright and confident, wearing simple
fitted athletic wear in charcoal. She looks slightly off-camera with quiet resolve.
A medical practitioner is partially visible at the frame edge, out of focus.
Warm window light from the left, cream walls, gold accent detail in the background.
Medium shot, subject on the left third. Empowering and dignified — this is medicine,
not a diet ad. NOT a before/after body comparison, NOT a scale, NOT exposed midriff.
```

---

# B · RESULTADOS TEASER (4)
**Todas ratio 4:5 vertical** → `/images/resultados/teaser-0X.webp` · 1200×1500

---

## B1 — Faciales · Toxina Botulínica
```
Portrait of a woman in her 40s, three-quarter turn toward camera, looking directly
into the lens with quiet self-assurance. Smooth relaxed forehead but fully expressive
eyes — the result of well-done botulinum treatment, natural not frozen.
Minimal makeup, luminous bare skin with real texture. Dark hair pulled back simply.
Deep charcoal background, single soft key light from camera left creating gentle
falloff on the right side of her face. Vertical editorial portrait, headroom above.
Elegant restraint. Sharp on the eyes.
```

---

## B2 — Inyectables · Ácido Hialurónico
```
Tight vertical portrait focused on the lower third of a woman's face — softly
defined lips with natural volume and a hydrated sheen, subtle cupid's bow,
no overfilled duck-lip shape. Skin shows real pores and fine texture.
Her chin and jawline are visible, head tilted very slightly.
Warm cream background with a soft gold gradient. Directional light from above
creating a delicate shadow under the lower lip. Extremely sharp macro detail
on the lip texture. Understated luxury, tasteful, never sexualized.
```

---

## B3 — Corporales · INDIBA Activ
```
A woman lying on a treatment bed receiving INDIBA radiofrequency therapy on her
abdomen. A practitioner's hands guide the smooth metallic treatment head across
her skin in a slow circular motion. She is covered by a charcoal draping cloth,
only the treatment area exposed, entirely modest and clinical.
Warm amber light, dark treatment room, the device emitting a subtle warm glow.
Shot from a high side angle. Focus on the device head meeting the skin.
Professional medical context, calm and premium. Fully non-sexualized.
```

---

## B4 — Capilares · Implante Capilar
```
Vertical portrait of a man in his late 30s photographed from a three-quarter rear
angle, showing a restored dense hairline at the temples and crown.
He is turning slightly toward camera, a hint of a confident half-smile.
Thick natural dark hair with realistic individual strands and healthy scalp.
Deep charcoal background, gold rim light tracing the edge of his hair and shoulder.
Strong directional key light from the front left. Sharp on the hairline.
Dignified and aspirational, not an infomercial.
```

---

## ✅ Al terminar

Guarda cada imagen con **el nombre exacto** de la ruta indicada y déjalas en:
- `public/images/tratamientos/`
- `public/images/resultados/`

Avísame y hago el swap en el código en un solo commit.

---

# 📌 APRENDIZAJES (aplicar en Lotes 2, 3 y 4)

## 1 · Nunca escribir prohibiciones en el prompt
`soul_2` lee los sustantivos e **ignora el "no"**. Escribir
*"no orchid, no cucumber, no towel"* produjo exactamente una orquídea,
pepinos y un turbante. **Describir solo lo que se quiere ver.**

## 2 · Especificaciones técnicas — Implante Capilar
Fuentes: ISHRS · ForHair · Hair Doctor NYC

| Parámetro | Valor real |
|---|---|
| Punch FUE | 0.8–1.0 mm (0.9 mm estándar en cuero cabelludo) |
| Incisión hairline | 0.8 mm (1 pelo) · 1.0 mm (2 pelos) · 1.2 mm (3 pelos) |
| Densidad estándar | 30–40 UF/cm² |
| Densidad hairline | 40–50 UF/cm² |
| Dense packing | 50–70 UF/cm² |
| Separación resultante | **~1–1.5 mm entre injertos** |

**Cómo se ve realmente la zona receptora:**
- **Cientos** de puntos diminutos, no docenas
- Cada injerto = pelo **muy fino de 1–2 mm** de largo
- Piel entre injertos **rosada uniforme** por las microincisiones
- Borde del hairline **suave e irregular** — pelos sueltos individuales al frente,
  densificando progresivamente hacia atrás
- **Nunca en filas rectas** — el patrón natural es irregular

**Frase que funciona:**
> `densely packed with hundreds of minute implantation points spaced barely one
> millimeter apart, each holding a very fine short dark hair stub only one to two
> millimeters long, forming a uniform dense field. The skin between the points is
> evenly light pink. The hairline edge is soft and irregular, single fine hairs at
> the very front becoming progressively denser behind.`

## 3 · Assets capilares disponibles
| Archivo | Contenido | Uso |
|---|---|---|
| `tratamientos/implante-capilar.webp` | Implanter pen colocando injerto, densidad real | Card home |
| `tratamientos/implante-capilar-detalle.webp` | Hairline recién implantado día 0 | Blog · galería |
