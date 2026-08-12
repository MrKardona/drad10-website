"use client";

import { useState } from "react";

type FormState = {
  nombre: string;
  telefono: string;
  correo: string;
  tratamiento: string;
  comentarios: string;
};

const contactItems = [
  {
    label: "WhatsApp",
    value: "300 244 0656",
    href: "https://wa.me/573002440656",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Dirección",
    value: "Cl. 7 #39-290 Cons. 516 El Poblado",
    href: "https://maps.app.goo.gl/dtwj4zv9ayygTz8NA",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Horario",
    value: "Lun–Vie 9–19h · Sáb 9–14h",
    href: null,
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const fieldDefs: {
  key: keyof FormState;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}[] = [
  {
    key: "nombre",
    label: "Nombre Completo",
    type: "text",
    placeholder: "Tu nombre completo",
    required: true,
  },
  {
    key: "telefono",
    label: "Número de Teléfono",
    type: "tel",
    placeholder: "300 000 0000",
    required: true,
  },
  {
    key: "correo",
    label: "Correo Electrónico",
    type: "email",
    placeholder: "tu@correo.com",
    required: true,
  },
  {
    key: "tratamiento",
    label: "Tratamiento de Interés",
    type: "text",
    placeholder: "¿Qué tratamiento te interesa?",
    required: false,
  },
];

export function ContactPremium() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    correo: "",
    tratamiento: "",
    comentarios: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error ?? "Error al enviar. Intenta de nuevo.");
        return;
      }

      setSent(true);
    } catch {
      setSubmitError("Error de conexión. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="agenda"
      className="py-28"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* ── LEFT: Info column ── */}
        <div className="lg:sticky lg:top-32">
          <p className="section-label mb-6">ESCRÍBENOS</p>

          <h2
            className="mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "#1c1c1c",
              letterSpacing: "-0.02em",
            }}
          >
            Agenda tu cita
            <br />
            <em style={{ color: "#b89a6a", fontStyle: "italic" }}>
              de valoración
            </em>
          </h2>

          <span className="gold-line" />

          <p
            className="mt-6 mb-10 leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "#888580",
              maxWidth: "420px",
            }}
          >
            Queremos conocerte y entender tus necesidades. Uno de nuestros
            asesores te contactará para agendar tu cita en un espacio pensado
            para tu bienestar y tranquilidad.
          </p>

          {/* Contact items */}
          <div className="flex flex-col gap-7">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(184,154,106,0.35)",
                    color: "#b89a6a",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <p
                    className="mb-0.5"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#b89a6a",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="transition-opacity hover:opacity-70"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "#1c1c1c",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "#1c1c1c",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form column ── */}
        <div
          className="p-8 lg:p-12"
          style={{ backgroundColor: "#f0e8e2" }}
        >
          {/* Google Calendar booking option */}
<div
  style={{
    borderBottom: "1px solid rgba(28,28,28,0.1)",
    paddingBottom: "1.5rem",
    marginBottom: "1.5rem",
  }}
>
  <p
    style={{
      fontFamily: "var(--font-body)",
      fontSize: "0.58rem",
      letterSpacing: "0.28em",
      textTransform: "uppercase" as const,
      color: "#888580",
      marginBottom: "0.75rem",
    }}
  >
    Reserva directa
  </p>
  <a
    href={process.env.NEXT_PUBLIC_GCAL_BOOKING_URL || "https://wa.me/573002440656?text=Hola%2C%20quiero%20agendar%20una%20cita"}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.85rem 1.25rem",
      border: "1px solid rgba(184,154,106,0.4)",
      backgroundColor: "rgba(184,154,106,0.06)",
      transition: "background-color 0.2s, border-color 0.2s",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(184,154,106,0.12)";
      (e.currentTarget as HTMLElement).style.borderColor = "#b89a6a";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(184,154,106,0.06)";
      (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,154,106,0.4)";
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b89a6a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
    <div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", fontWeight: 500, color: "#1c1c1c" }}>
        Agendar en Google Calendar
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", color: "#888580", marginTop: "1px" }}>
        Selecciona tu horario disponible en tiempo real
      </p>
    </div>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b89a6a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "auto" }}>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </a>
  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", color: "rgba(136,133,128,0.6)", marginTop: "0.5rem", letterSpacing: "0.1em" }}>
    — o completa el formulario abajo —
  </p>
</div>
          {sent ? (
            /* Confirmation state */
            <div className="text-center py-16">
              <span
                className="block mb-6"
                style={{ fontSize: "2.5rem", color: "#b89a6a" }}
              >
                ✦
              </span>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.75rem",
                  fontWeight: 300,
                  color: "#1c1c1c",
                  letterSpacing: "-0.01em",
                }}
              >
                Solicitud enviada
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "#888580",
                  lineHeight: 1.7,
                }}
              >
                Hemos recibido tu mensaje. Uno de nuestros especialistas
                <br className="hidden sm:block" /> se pondrá en contacto
                contigo muy pronto.
              </p>
              <div
                className="mx-auto mt-8"
                style={{
                  width: "40px",
                  height: "1px",
                  backgroundColor: "#b89a6a",
                  opacity: 0.5,
                }}
              />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              noValidate
            >
              {/* Text / email / tel fields */}
              {fieldDefs.map((f) => (
                <div key={f.key}>
                  <label
                    htmlFor={f.key}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: "#888580",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {f.label}
                    {f.required && (
                      <span style={{ color: "#b89a6a", marginLeft: "2px" }}>
                        *
                      </span>
                    )}
                  </label>
                  <input
                    id={f.key}
                    name={f.key}
                    type={f.type}
                    value={form[f.key]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    required={f.required}
                    autoComplete="off"
                    style={{
                      display: "block",
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(28,28,28,0.18)",
                      borderRadius: 0,
                      padding: "0.65rem 0",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "#1c1c1c",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderBottomColor = "#b89a6a";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderBottomColor =
                        "rgba(28,28,28,0.18)";
                    }}
                  />
                </div>
              ))}

              {/* Comentarios textarea */}
              <div>
                <label
                  htmlFor="comentarios"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#888580",
                    marginBottom: "0.5rem",
                  }}
                >
                  Comentarios{" "}
                  <span style={{ color: "#b89a6a", marginLeft: "2px" }}>*</span>
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={form.comentarios}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué buscas obtener con el tratamiento..."
                  rows={4}
                  required
                  style={{
                    display: "block",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(28,28,28,0.18)",
                    borderRadius: 0,
                    padding: "0.65rem 0",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "#1c1c1c",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderBottomColor = "#b89a6a";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderBottomColor =
                      "rgba(28,28,28,0.18)";
                  }}
                />
              </div>

              {/* Error message */}
              {submitError && (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: "#c0392b",
                    textAlign: "center",
                  }}
                >
                  {submitError}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full mt-2"
                style={{ letterSpacing: "0.2em", opacity: submitting ? 0.6 : 1 }}
              >
                {submitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
              </button>

              {/* Confidentiality note */}
              <p
                className="text-center"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.18em",
                  color: "#888580",
                  textTransform: "uppercase",
                  marginTop: "0.25rem",
                }}
              >
                Tu información es tratada con total confidencialidad y no será
                compartida con terceros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
