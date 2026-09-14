// Genera src/lib/tratamientos/menu.ts: índice ligero (slug, nombre, grupo,
// categoría, precio desde) para el menú y el catálogo, sin arrastrar al
// navegador el contenido completo de cada tratamiento.
// Uso: npx tsx scripts/generar-menu-servicios.ts
import fs from "node:fs";
import { tratamientos } from "../src/lib/tratamientos";

const items = [
  ...tratamientos.map((t) => ({
    slug: t.slug,
    nombre: t.nombre,
    categoria: t.categoria,
    grupo: t.grupo ?? "Otros",
    desde: t.precio.desde,
  })),
];

const salida = `// Archivo generado por scripts/generar-menu-servicios.ts. No editar a mano.
import type { CategoriaTratamiento } from "./types";

export interface ItemMenu {
  slug: string;
  nombre: string;
  categoria: CategoriaTratamiento;
  grupo: string;
  desde: number | null;
}

export const menuServicios: ItemMenu[] = ${JSON.stringify(items, null, 2)};
`;
fs.writeFileSync("src/lib/tratamientos/menu.ts", salida);
console.log(`menu.ts: ${items.length} servicios`);
