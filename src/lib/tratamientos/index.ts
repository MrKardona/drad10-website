import type { Tratamiento } from "./types";
import { faciales } from "./faciales";
import { corporales } from "./corporales";
import { capilares } from "./capilares";

export type { Tratamiento } from "./types";

/** Registro completo — agregar aquí cada nueva categoría/lote */
export const tratamientos: Tratamiento[] = [
  ...faciales,
  ...corporales,
  ...capilares,
];

export function getTratamiento(slug: string): Tratamiento | undefined {
  return tratamientos.find((t) => t.slug === slug);
}

export function getAllSlugs(): string[] {
  return tratamientos.map((t) => t.slug);
}
