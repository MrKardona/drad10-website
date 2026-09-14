import fs from "node:fs";
import path from "node:path";
import type { ImagenesTratamiento, Tratamiento } from "./types";

// Solo para componentes de servidor: resuelve imágenes y video por convención
// de archivos, así el contenido no tiene que repetir rutas.
//   public/images/servicios/<slug>/{hero,paso-1,paso-2,paso-3,resultado}.webp
//   public/videos/servicios/<slug>.mp4

const PUBLIC = path.join(process.cwd(), "public");
const existe = (ruta: string) => fs.existsSync(path.join(PUBLIC, ruta));

export function mediosDe(t: Pick<Tratamiento, "slug" | "imagenes">): ImagenesTratamiento | undefined {
  const base = `/images/servicios/${t.slug}`;
  const archivo = (nombre: string) => {
    const ruta = `${base}/${nombre}.webp`;
    return existe(ruta) ? ruta : undefined;
  };
  const hero = t.imagenes?.hero ?? archivo("hero");
  if (!hero) return undefined;

  const pasos = t.imagenes?.pasos ?? ["paso-1", "paso-2", "paso-3"].map(archivo).filter((p): p is string => Boolean(p));
  const video = `/videos/servicios/${t.slug}.mp4`;

  return {
    hero,
    pasos: pasos.length === 3 ? pasos : undefined,
    resultado: t.imagenes?.resultado ?? archivo("resultado"),
    cierre: t.imagenes?.cierre ?? archivo("cierre"),
    video: t.imagenes?.video ?? (existe(video) ? video : undefined),
  };
}
