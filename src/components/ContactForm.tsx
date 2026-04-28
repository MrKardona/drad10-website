"use client";
import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    nombre: "", telefono: "", correo: "", tratamiento: "", comentarios: "",
  });

  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <a
            href="#agenda"
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-bold mb-6"
          >
            Agendar una cita en DRAD10
          </a>
          <h2 className="text-2xl font-bold mb-3">Contáctanos</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Queremos conocerte y entender tus necesidades. Déjanos tus datos y uno de nuestros asesores te contactará para agendar tu cita de valoración, en un espacio pensado para tu bienestar y tranquilidad.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm font-medium mb-1 block">Nombre Completo*</label>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full rounded-full bg-gray-100 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="Tu nombre completo"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Numero de telefono*</label>
            <input
              type="tel"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className="w-full rounded-full bg-gray-100 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="Tu número de teléfono"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Correo Electrónico*</label>
            <input
              type="email"
              value={form.correo}
              onChange={(e) => setForm({ ...form, correo: e.target.value })}
              className="w-full rounded-full bg-gray-100 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="tu@correo.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Tratamiento de interés</label>
            <input
              type="text"
              value={form.tratamiento}
              onChange={(e) => setForm({ ...form, tratamiento: e.target.value })}
              className="w-full rounded-full bg-gray-100 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="¿Qué tratamiento te interesa?"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Comentarios*</label>
            <textarea
              value={form.comentarios}
              onChange={(e) => setForm({ ...form, comentarios: e.target.value })}
              rows={4}
              className="w-full rounded-2xl bg-gray-100 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-black resize-none"
              placeholder="Ejemplo: Describe que buscas obtener en este tratamiento."
            />
          </div>
          <button
            type="submit"
            className="self-center bg-black text-white px-12 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
