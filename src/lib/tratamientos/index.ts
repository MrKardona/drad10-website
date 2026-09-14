import type { Tratamiento } from "./types";
import { faciales } from "./faciales";
import { corporales } from "./corporales";
import { capilares } from "./capilares";
import { inyectables } from "./lotes/inyectables";
import { rejuvenecimiento } from "./lotes/rejuvenecimiento";
import { piel } from "./lotes/piel";
import { capilarYOtros } from "./lotes/capilar-y-otros";
import { corporales as corporalesLote } from "./lotes/corporales";

export type { Tratamiento } from "./types";

// Los lotes nuevos (docs/servicios-manifest.json) reemplazan a las entradas
// antiguas con el mismo slug. Cuando todos estén migrados se retiran los
// archivos faciales/corporales/capilares.
const lotes: Tratamiento[] = [
  ...inyectables,
  ...rejuvenecimiento,
  ...piel,
  ...capilarYOtros,
  ...corporalesLote,
];
const migrados = new Set(lotes.map((t) => t.slug));

/** Registro completo */
export const tratamientos: Tratamiento[] = [
  ...lotes,
  ...[...faciales, ...corporales, ...capilares].filter((t) => !migrados.has(t.slug)),
];

export function getTratamiento(slug: string): Tratamiento | undefined {
  return tratamientos.find((t) => t.slug === slug);
}

export function getAllSlugs(): string[] {
  return tratamientos.map((t) => t.slug);
}
