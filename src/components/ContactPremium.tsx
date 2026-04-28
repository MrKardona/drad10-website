"use client";
import { useState } from "react";

export function ContactPremium() {
  const [form, setForm] = useState({ nombre: "", telefono: "", correo: "", tratamiento: "", comentarios: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="agenda" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left info */}
        <div className="lg:sticky lg:top-32">
          <p className="section-label mb-5">Escríbenos</p>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#0f1219',
              letterSpacing: '-0.02em',
            }}
          >
            Agenda tu cita<br />
            <em style={{ color: '#c9a84c' }}>de valoración</em>
          </h2>
          <span className="gold-line" />
          <p className="text-gray-500 text-sm leading-relaxed mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            Queremos conocerte y entender tus necesidades. Uno de nuestros asesores te contactará para agendar tu cita en un espacio pensado para tu bienestar y tranquilidad.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {[
              { label: "WhatsApp", value: "300 244 0656", icon: "📱" },
              { label: "Dirección", value: "Cl. 7 #39-290 Cons. 516, El Poblado", icon: "📍" },
              { label: "Horario", value: "Lun–Vie 9–19h · Sáb 9–14h", icon: "🕘" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="text-lg">{c.icon}</span>
                <div>
                  <p className="text-xs tracking-wider text-gray-400 mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>{c.label}</p>
                  <p className="text-sm font-medium text-gray-800" style={{ fontFamily: 'var(--font-body)' }}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="p-8 lg:p-12" style={{ backgroundColor: '#f7f3ee' }}>
          {sent ? (
            <div className="text-center py-12">
              <span className="text-5xl block mb-4">✦</span>
              <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', color: '#0f1219' }}>¡Mensaje enviado!</h3>
              <p className="text-gray-500 text-sm" style={{ fontFamily: 'var(--font-body)' }}>Te contactaremos muy pronto para confirmar tu cita.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { key: "nombre", label: "Nombre Completo *", type: "text", placeholder: "Tu nombre completo" },
                { key: "telefono", label: "Número de Teléfono *", type: "tel", placeholder: "300 000 0000" },
                { key: "correo", label: "Correo Electrónico *", type: "email", placeholder: "tu@correo.com" },
                { key: "tratamiento", label: "Tratamiento de Interés", type: "text", placeholder: "¿Qué tratamiento te interesa?" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-[10px] tracking-widest uppercase mb-2 text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    className="w-full bg-white border-b-2 border-gray-200 px-0 py-3 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-gray-300"
                    style={{ fontFamily: 'var(--font-body)', borderRadius: 0 }}
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] tracking-widest uppercase mb-2 text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
                  Comentarios *
                </label>
                <textarea
                  value={form.comentarios}
                  onChange={(e) => setForm({ ...form, comentarios: e.target.value })}
                  rows={4}
                  placeholder="Cuéntanos qué buscas obtener con el tratamiento..."
                  className="w-full bg-white border-b-2 border-gray-200 px-0 py-3 text-sm outline-none focus:border-yellow-500 transition-colors resize-none placeholder:text-gray-300"
                  style={{ fontFamily: 'var(--font-body)', borderRadius: 0 }}
                />
              </div>

              <button type="submit" className="btn-gold mt-2 w-full">
                Enviar Solicitud
              </button>

              <p className="text-center text-[10px] text-gray-400 tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
                Tu información es tratada con total confidencialidad.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
