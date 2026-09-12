/**
 * Recorta los bordes de una imagen generada con el Soul de la doctora.
 *
 * El Soul se entrenó con capturas de Instagram, así que arrastra la interfaz:
 * flechas de carrusel en los laterales y puntos de paginación abajo. Siempre
 * caen en los bordes, así que un recorte porcentual los elimina de forma
 * determinista. No sirve cuando el artefacto es interior (texto sobre la foto).
 *
 * Uso: node scripts/crop-ui-artifacts.mjs <entrada> <salida> [pct]
 */
import sharp from "sharp";

const [input, output, pctArg] = process.argv.slice(2);
if (!input || !output) {
  console.error("uso: crop-ui-artifacts.mjs <entrada> <salida> [pct]");
  process.exit(1);
}
const pct = Number(pctArg ?? 5) / 100;

const img = sharp(input);
const { width, height } = await img.metadata();
if (!width || !height) throw new Error(`sin dimensiones: ${input}`);

const dx = Math.round(width * pct);
const dy = Math.round(height * pct);

const info = await img
  .extract({ left: dx, top: dy, width: width - dx * 2, height: height - dy * 2 })
  .webp({ quality: 84 })
  .toFile(output);

console.log(`${output}  ${width}×${height} → ${info.width}×${info.height}`);
