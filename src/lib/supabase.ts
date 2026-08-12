import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Lazy singleton: no crear el cliente al evaluar el módulo.
// Si se crea en el scope del módulo, `next build` revienta cuando las env
// vars no existen en ese entorno (p. ej. previews) aunque las rutas API
// nunca se ejecuten durante el build.
let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) {
      throw new Error(
        "Faltan NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY",
      );
    }
    client = createClient(url, anonKey);
  }
  return client;
}
