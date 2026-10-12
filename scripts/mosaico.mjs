// Uso: node scripts/mosaico.mjs salida.jpg /images/a.webp /images/b.webp ...
// Arma una hoja de contacto (4 columnas, 300 px) para revisar imágenes de referencia.
import sharp from "sharp";

const [salida, ...rutas] = process.argv.slice(2);
const lado = 300;
const tiles = [];
for (const r of rutas) tiles.push(await sharp(`public${r}`).resize(lado, lado, { fit: "cover" }).toBuffer());
const cols = 4;
const filas = Math.ceil(tiles.length / cols);
await sharp({ create: { width: cols * lado, height: filas * lado, channels: 3, background: "#ffffff" } })
  .composite(tiles.map((input, i) => ({ input, left: (i % cols) * lado, top: Math.floor(i / cols) * lado })))
  .jpeg({ quality: 70 })
  .toFile(salida);
