# Videos para páginas de servicio — plan y prompts

## ⚠️ Antes de gastar: la matemática

| | Costo | Con ~800 créditos |
|---|---|---|
| Imagen 2k | 0.12 | ~6.600 |
| Video 4s · 720p · sin audio | **26** | ~30 |
| Video 5s · 720p | 32.5 | ~24 |
| Video 5s · 1080p | 45 | ~18 |

**Un video cuesta lo mismo que 216 imágenes.** Las 54 imágenes de todo el
sitio costaron 7 créditos; un solo video cuesta casi 4 veces eso.

---

## 🎯 La técnica correcta: image-to-video

No generar los videos desde cero. `seedance_2_5` acepta una imagen como
`start_image`, así que **cada video arranca de una imagen que ya está en la
página**. Dos ventajas:

1. **Continuidad visual** — el video es literalmente la foto cobrando vida,
   no una escena distinta que rompe la coherencia
2. **Menos azar** — la composición, la luz y el encuadre ya están resueltos;
   el modelo solo añade movimiento

---

## 🎬 Los 5 prompts

Todos parten de `medias: [{ role: "start_image", value: <media_id> }]` y
describen **solo el movimiento**, nunca la escena, que ya viene de la imagen.

### 1 · Implante Capilar FUE
**Base:** `servicios/implante-capilar-fue/paso-2.webp` (hairline día 0)

```
Extremely slow macro push-in toward the implanted hairline. The individual
hair grafts catch the light and shift almost imperceptibly as the camera
creeps closer. A gloved fingertip enters frame from the lower right, moves
once with great care across the scalp, and withdraws. Focus breathes very
slightly. Nothing else moves. Steady, clinical, hypnotic.
```

### 2 · Ácido Hialurónico
**Base:** `servicios/acido-hialuronico/paso-2.webp` (inyección en pómulo)

```
The needle advances a few millimetres and the plunger depresses slowly and
smoothly in one continuous motion. The patient's eyelids blink once, calmly.
The practitioner's gloved hand holds absolutely steady. Camera locked off,
no movement. The only motion is the plunger and that single blink.
```

### 3 · Limpieza Facial
**Base:** `servicios/limpieza-facial/paso-2.webp` (espátula ultrasónica)

```
The stainless steel spatula glides slowly along the cheek in one smooth
unbroken pass, lifting a fine sheen of moisture that catches the light. Her
chest rises and falls once with a calm breath. The camera drifts a few
centimetres to the left in a slow lateral move. Serene and unhurried.
```

### 4 · Descenso de Peso
**Base:** `servicios/descenso-de-peso/hero.webp` (paciente en consulta)

```
She holds the camera's gaze, then her expression softens very slightly into
the beginning of a calm smile. She breathes once. A loose strand of hair
settles. The camera pushes in almost imperceptibly. Warm light steady on her
face. Dignified and human, no performance.
```

### 5 · Botox
**Base:** `servicios/botox/paso-3.webp` (rostro riendo)

```
Her laugh unfolds in slow motion: the eyes crinkle first, then the smile
widens, then it settles back into a warm resting expression. Hair moves
naturally with the motion of her head. Camera locked off. The whole point is
that the face moves freely — every expression line alive and legible.
```

---

## 📐 Ajustes recomendados

```
model: seedance_2_5
mode: omni_reference
duration: 4
resolution: 720p
aspect_ratio: 16:9   (9:16 solo si además se reutiliza en Reels)
generate_audio: false
```

**720p basta** porque en la página se muestran dentro de una tarjeta de
~400px de ancho. 1080p es pagar un 73% más por píxeles que nadie ve.

**Sin audio.** Un video que suena solo en una página de clínica es intrusivo,
y el `autoplay` sin `muted` lo bloquean todos los navegadores igual.

---

## 🧩 Cómo montarlos sin romper el rendimiento

Un `<video autoplay loop muted playsinline>` con `preload="none"` y `poster`
apuntando a la imagen original. Así:

- La página carga con la imagen, exactamente como ahora
- El video solo se descarga cuando entra en viewport
- Si falla o el usuario tiene datos limitados, queda la imagen

Nunca un video de fondo a pantalla completa en el hero: destroza el LCP en
móvil, que es por donde entra la mayoría del tráfico de una clínica.
