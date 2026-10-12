// Descarga resultados de Higgsfield y los guarda como WebP en public/images/blog/<slug>/<archivo>.
// Uso: node scripts/blog-imagenes-descargar.mjs '[{"index":0,"url":"https://..."}]'
//   (o un archivo .json con ese array como único argumento)
import { mkdirSync, readFileSync, existsSync } from "node:fs";
import sharp from "sharp";

const arg = process.argv[2];
const resultados = JSON.parse(existsSync(arg) ? readFileSync(arg, "utf8") : arg);

// Mismo orden que scripts/blog-imagenes-solicitudes.mjs (archivos JSON ordenados, 4 imágenes cada uno).
import { readdirSync } from "node:fs";
const dir = "docs/blog/imagenes";
const mapa = [];
for (const f of readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
  const slug = f.replace(/\.json$/, "");
  for (const b of JSON.parse(readFileSync(`${dir}/${f}`, "utf8"))) mapa.push({ slug, archivo: b.archivo });
}

for (const { index, url } of resultados) {
  const { slug, archivo } = mapa[index];
  const destino = `public/images/blog/${slug}`;
  mkdirSync(destino, { recursive: true });
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${index}: HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  const ancho = archivo === "portada.webp" ? 1920 : 1400;
  const info = await sharp(buf).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 80 }).toFile(`${destino}/${archivo}`);
  console.log(`${index} → ${destino}/${archivo} ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`);
}
