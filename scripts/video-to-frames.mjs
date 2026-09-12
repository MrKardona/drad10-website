/**
 * Convierte un mp4 en los dos sets WebP que consume ScrollVideoSection.
 *
 * El scroll-scrub se hace con frames y no reproduciendo el <video> porque
 * fijar currentTime a mano va a tirones en Safari móvil; una secuencia de
 * imágenes se dibuja en canvas de forma fiable en todos lados.
 *
 * Uso: node scripts/video-to-frames.mjs <entrada.mp4> <nombre-carpeta> [nFrames]
 * Salida: public/frames/<nombre>/d (1280w) y /m (640w)
 */
import { execFileSync } from "node:child_process";
import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const [input, nombre, nArg] = process.argv.slice(2);
if (!input || !nombre) {
  console.error("uso: video-to-frames.mjs <entrada.mp4> <nombre> [nFrames]");
  process.exit(1);
}
const objetivo = Number(nArg ?? 90);

const tmp = path.join("public", "frames", `.tmp-${nombre}`);
const outD = path.join("public", "frames", nombre, "d");
const outM = path.join("public", "frames", nombre, "m");
for (const d of [tmp, outD, outM]) await mkdir(d, { recursive: true });

// Total de frames del origen, para calcular el muestreo
const probe = execFileSync("ffprobe", [
  "-v", "error", "-select_streams", "v:0",
  "-count_frames", "-show_entries", "stream=nb_read_frames",
  "-of", "default=nw=1:nk=1", input,
]).toString().trim();
const total = parseInt(probe, 10);
const paso = Math.max(1, Math.round(total / objetivo));
console.log(`origen: ${total} frames · se toma 1 de cada ${paso}`);

execFileSync("ffmpeg", [
  "-v", "error", "-i", input,
  "-vf", `select='not(mod(n\,${paso}))'`,
  "-fps_mode", "passthrough",
  path.join(tmp, "f-%04d.png"),
]);

const archivos = (await readdir(tmp)).filter((f) => f.endsWith(".png")).sort();
let pesoD = 0, pesoM = 0;
for (let i = 0; i < archivos.length; i++) {
  const num = String(i + 1).padStart(3, "0");
  const src = path.join(tmp, archivos[i]);
  const d = await sharp(src).resize({ width: 1100 }).webp({ quality: 70 })
    .toFile(path.join(outD, `frame-${num}.webp`));
  const m = await sharp(src).resize({ width: 600 }).webp({ quality: 66 })
    .toFile(path.join(outM, `frame-${num}.webp`));
  pesoD += d.size; pesoM += m.size;
}
await rm(tmp, { recursive: true, force: true });

const mb = (b) => (b / 1024 / 1024).toFixed(2);
console.log(`${archivos.length} frames`);
console.log(`  d/ ${mb(pesoD)} MB   m/ ${mb(pesoM)} MB`);
console.log(`\nFRAME_COUNT = ${archivos.length}`);
