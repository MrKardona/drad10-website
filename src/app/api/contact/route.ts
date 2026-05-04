import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { rateLimit, getIP } from "@/lib/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s\-()+]{7,20}$/;

/**
 * Strip HTML tags before DB insertion — defence-in-depth.
 * React escapes on render, but clean data in storage is an extra layer.
 */
function stripTags(str: string): string {
  return str.replace(/<[^>]*>/g, "").replace(/[<>]/g, "");
}

export async function POST(req: NextRequest) {
  // 3 envíos por IP por hora
  const ip = getIP(req);
  if (!(await rateLimit(`contact:${ip}`, 3, 60 * 60 * 1000)))
    return NextResponse.json({ error: "Demasiadas solicitudes. Intenta más tarde." }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { nombre, telefono, correo, tratamiento, comentarios } =
    body as Record<string, unknown>;

  if (typeof nombre !== "string" || nombre.trim().length < 2 || nombre.trim().length > 120)
    return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });

  if (typeof telefono !== "string" || !PHONE_RE.test(telefono.trim()))
    return NextResponse.json({ error: "Teléfono inválido" }, { status: 400 });

  if (typeof correo !== "string" || !EMAIL_RE.test(correo.trim()))
    return NextResponse.json({ error: "Correo inválido" }, { status: 400 });

  if (typeof comentarios !== "string" || comentarios.trim().length < 5 || comentarios.trim().length > 2000)
    return NextResponse.json({ error: "Comentarios inválidos" }, { status: 400 });

  const cleanNombre = stripTags(nombre.trim());
  const cleanComentarios = stripTags(comentarios.trim());
  const cleanTratamiento =
    typeof tratamiento === "string" ? stripTags(tratamiento.trim()) : null;

  const { error } = await supabase.from("contact_submissions").insert({
    nombre: cleanNombre,
    telefono: telefono.trim(),
    correo: correo.trim().toLowerCase(),
    tratamiento: cleanTratamiento,
    comentarios: cleanComentarios,
  });

  if (error) return NextResponse.json({ error: "Error interno" }, { status: 500 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
