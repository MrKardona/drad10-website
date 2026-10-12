import type { BlogPost } from "./tipos";
import { post as acidoHialuronico } from "./posts/acido-hialuronico";
import { post as cuidadoLabiosRelleno } from "./posts/cuidado-labios-relleno";
import { post as botoxQueEsperar } from "./posts/botox-que-esperar";
import { post as mitosBotox } from "./posts/mitos-botox";
import { post as implanteCapilarFue } from "./posts/implante-capilar-fue";
import { post as implanteCapilarMitos } from "./posts/implante-capilar-mitos-realidad";
import { post as indiba } from "./posts/indiba-radiofrecuencia";
import { post as descensoDePeso } from "./posts/descenso-de-peso-rapido";
import { post as rutinaSkincare } from "./posts/rutina-skincare-segun-la-doctora";
import { post as protectorSolar } from "./posts/protector-solar-en-medellin";
import { post as envejecerBien } from "./posts/envejecer-bien-filosofia";
import { post as elegirMedico } from "./posts/como-elegir-medico-estetico";

export * from "./tipos";

// Todos los artículos, del más reciente al más antiguo (el primero es el destacado del índice).
export const blogPosts: BlogPost[] = [
  acidoHialuronico,
  cuidadoLabiosRelleno,
  botoxQueEsperar,
  mitosBotox,
  implanteCapilarFue,
  implanteCapilarMitos,
  indiba,
  descensoDePeso,
  rutinaSkincare,
  protectorSolar,
  envejecerBien,
  elegirMedico,
].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

/** Relacionados declarados en el artículo; si faltan, completa con el mismo pilar. */
export function getRelacionados(post: BlogPost, max = 3): BlogPost[] {
  const elegidos = post.relacionados.map(getBlogPost).filter((p): p is BlogPost => Boolean(p));
  for (const p of blogPosts) {
    if (elegidos.length >= max) break;
    if (p.slug !== post.slug && p.category === post.category && !elegidos.includes(p)) elegidos.push(p);
  }
  return elegidos.slice(0, max);
}
