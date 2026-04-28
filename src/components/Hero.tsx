export function Hero() {
  return (
    <section
      className="w-full h-[70vh] min-h-[500px] relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-black tracking-widest mb-2" style={{ letterSpacing: '0.15em' }}>DRA.D10</h1>
        <p className="text-lg tracking-[0.3em] font-light">MEDICINA ESTÉTICA</p>
        <a
          href="#agenda"
          className="mt-8 inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Agenda tu Cita
        </a>
      </div>
    </section>
  );
}
