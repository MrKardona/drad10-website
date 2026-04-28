const doctors = [
  {
    name: "DRA. DANIELA DIEZ",
    specialty: "Especialista en Medicina Estética\nMicroimplante Capilar",
    initials: "DD",
  },
  {
    name: "DRA. DANIELA DIEZ",
    specialty: "Especialista en Medicina Estética\nMicroimplante Capilar",
    initials: "DD",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text card */}
        <div className="bg-gray-500/80 text-white rounded-2xl p-10 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">En DRD10 combinamos experiencia médica, atención personalizada y tecnología de vanguardia para ofrecerte una experiencia estética exclusiva.</h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Nuestro compromiso es brindarte tratamientos seguros, efectivos y personalizados, acompañándote en cada paso de tu proceso para que alcances los resultados armónicos que deseas.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-xl p-6 mt-2">
            <h3 className="text-lg font-bold mb-2">Profesionales Certificados</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Nuestro equipo está conformado por médicos certificados en Medicina Estética y Nutrición, comprometidos con la excelencia, la ética profesional y el cuidado integral de cada paciente.
            </p>
          </div>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {doctors.map((doc, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-200 h-56 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Foto del médico</span>
              </div>
              <div className="p-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: '#c9a84c' }}
                >
                  {doc.initials}
                </div>
                <div>
                  <p className="font-bold text-sm">{doc.name}</p>
                  <p className="text-xs text-gray-500 whitespace-pre-line">{doc.specialty}</p>
                  <a href="#" className="text-xs font-medium mt-1 inline-block" style={{ color: '#c9a84c' }}>
                    Conocer más →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
