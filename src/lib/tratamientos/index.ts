import type { Tratamiento } from "./types";
import { inyectables } from "./lotes/inyectables";
import { rejuvenecimiento } from "./lotes/rejuvenecimiento";
import { piel } from "./lotes/piel";
import { capilarYOtros } from "./lotes/capilar-y-otros";
import { corporales } from "./lotes/corporales";

export type { Tratamiento } from "./types";

/** Registro completo. Fuente de datos: docs/servicios-manifest.json. */
export const tratamientos: Tratamiento[] = [
  ...inyectables,
  ...rejuvenecimiento,
  ...piel,
  ...capilarYOtros,
  ...corporales,
];

export function getTratamiento(slug: string): Tratamiento | undefined {
  return tratamientos.find((t) => t.slug === slug);
}

export function getAllSlugs(): string[] {
  return tratamientos.map((t) => t.slug);
}
