import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { rateLimit, getIP } from "@/lib/rate-limit";

const SLUG_RE = /^[a-z0-9-]{1,100}$/;

// Tracks ip:slug pairs that already voted (24h TTL)
const voted = new Map<string, number>();

function hasVoted(ip: string, slug: string): boolean {
  const key = `${ip}:${slug}`;
  const votedAt = voted.get(key);
  if (!votedAt) return false;
  if (Date.now() - votedAt > 24 * 60 * 60 * 1000) {
    voted.delete(key);
    return false;
  }
  return true;
}

function markVoted(ip: string, slug: string): void {
  voted.set(`${ip}:${slug}`, Date.now());
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug || !SLUG_RE.test(slug))
    return NextResponse.json({ error: "slug inválido" }, { status: 400 });

  const { data, error } = await supabase
    .from("blog_ratings")
    .select("rating")
    .eq("slug", slug);

  if (error) return NextResponse.json({ error: "Error interno" }, { status: 500 });

  const count = data.length;
  const total = data.reduce((sum, r) => sum + r.rating, 0);
  const average = count > 0 ? (total / count).toFixed(1) : "0.0";

  return NextResponse.json({ count, average });
}

export async function POST(req: NextRequest) {
  const ip = getIP(req);

  // 10 intentos por IP por hora (límite general)
  if (!rateLimit(`rating:${ip}`, 10, 60 * 60 * 1000))
    return NextResponse.json({ error: "Demasiadas solicitudes. Intenta más tarde." }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { slug, rating } = body as Record<string, unknown>;

  if (typeof slug !== "string" || !SLUG_RE.test(slug))
    return NextResponse.json({ error: "slug inválido" }, { status: 400 });
  if (typeof rating !== "number" || !Number.isInteger(rating) || rating < 1 || rating > 5)
    return NextResponse.json({ error: "Valoración inválida (1-5)" }, { status: 400 });

  // Server-side duplicate vote check (24h por IP + slug)
  if (hasVoted(ip, slug))
    return NextResponse.json({ error: "Ya valoraste este artículo." }, { status: 409 });

  const { error } = await supabase
    .from("blog_ratings")
    .insert({ slug, rating });

  if (error) return NextResponse.json({ error: "Error interno" }, { status: 500 });

  markVoted(ip, slug);
  return NextResponse.json({ ok: true }, { status: 201 });
}
