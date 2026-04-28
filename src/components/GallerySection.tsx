const treatments = [
  { label: "Tratamiento Facial", bg: "#f0ebe6" },
  { label: "Medicina Estética", bg: "#ede8e3" },
  { label: "Microagujas", bg: "#e8e3de" },
  { label: "Corporales", bg: "#f0ebe6" },
  { label: "Capilares", bg: "#ede8e3" },
  { label: "Inyectables", bg: "#e8e3de" },
];

export function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">Galería</h2>
        <p className="text-center text-gray-500 text-sm mb-10">Imágenes reales de tratamientos y resultados en drad10</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {treatments.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center"
              style={{ backgroundColor: item.bg }}
            >
              <span className="text-gray-400 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
