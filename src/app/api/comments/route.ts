import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { rateLimit, getIP } from "@/lib/rate-limit";

const SLUG_RE = /^[a-z0-9-]{1,100}$/;

/**
 * Strip HTML tags before DB insertion — defence-in-depth.
 * React escapes on render, but clean data in storage is an extra layer.
 */
function stripTags(str: string): string {
  return str.replace(/<[^>]*>/g, "").replace(/[<>]/g, "");
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug || !SLUG_RE.test(slug))
    return NextResponse.json({ error: "slug inválido" }, { status: 400 });

  const { data, error } = await supabase
    .from("blog_comments")
    .select("id, name, initials, text, rating, created_at")
    .eq("slug", slug)
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) return NextResponse.json({ error: "Error interno" }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  // 5 comentarios por IP cada hora
  const ip = getIP(req);
  if (!(await rateLimit(`comment:${ip}`, 5, 60 * 60 * 1000)))
    return NextResponse.json({ error: "Demasiadas solicitudes. Intenta más tarde." }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { slug, name, text, rating } = body as Record<string, unknown>;

  if (
    typeof slug !== "string" ||
    typeof name !== "string" ||
    typeof text !== "string" ||
    typeof rating !== "number"
  ) {
    return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
  }

  if (!SLUG_RE.test(slug))
    return NextResponse.json({ error: "slug inválido" }, { status: 400 });

  const cleanName = stripTags(name.trim());
  const cleanText = stripTags(text.trim());

  if (cleanName.length < 2 || cleanName.length > 80)
    return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
  if (cleanText.length < 3 || cleanText.length > 1000)
    return NextResponse.json({ error: "Comentario inválido" }, { status: 400 });
  if (!Number.isInteger(rating) || rating < 1 || rating > 5)
    return NextResponse.json({ error: "Valoración inválida" }, { status: 400 });

  const initials = cleanName
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const { data, error } = await supabase
    .from("blog_comments")
    .insert({ slug, name: cleanName, initials, text: cleanText, rating })
    .select()
    .single();

  if (error) return NextResponse.json({ error: "Error interno" }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
