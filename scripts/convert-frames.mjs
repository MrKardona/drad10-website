// One-off: converts the original 224 ezgif JPG frames into the optimized
// WebP sets consumed by ScrollVideoSection (112 frames, desktop + mobile).
// Usage: node scripts/convert-frames.mjs  (requires the original JPGs in public/frames)
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC_DIR = "public/frames";
const OUT_DESKTOP = "public/frames/d";
const OUT_MOBILE = "public/frames/m";

await mkdir(OUT_DESKTOP, { recursive: true });
await mkdir(OUT_MOBILE, { recursive: true });

let totalD = 0;
let totalM = 0;

// Keep every 2nd frame: 1, 3, 5 … 223  →  112 frames
for (let out = 1; out <= 112; out++) {
  const srcIdx = out * 2 - 1;
  const src = path.join(SRC_DIR, `ezgif-frame-${String(srcIdx).padStart(3, "0")}.jpg`);
  const name = `frame-${String(out).padStart(3, "0")}.webp`;

  const d = await sharp(src).webp({ quality: 65 }).toFile(path.join(OUT_DESKTOP, name));
  const m = await sharp(src).resize({ width: 640 }).webp({ quality: 60 }).toFile(path.join(OUT_MOBILE, name));
  totalD += d.size;
  totalM += m.size;
}

console.log(`desktop: 112 frames, ${(totalD / 1024 / 1024).toFixed(2)} MB total`);
console.log(`mobile : 112 frames, ${(totalM / 1024 / 1024).toFixed(2)} MB total`);
