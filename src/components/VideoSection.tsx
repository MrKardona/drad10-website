export function VideoSection() {
  return (
    <section className="w-full bg-black py-4 flex flex-col items-start justify-center min-h-[400px] px-12">
      <h2 className="text-white text-xl font-bold mb-1">D10 - SCANNER FACIAL</h2>
      <p className="text-gray-400 text-sm mb-6">Clinica Quantum</p>
      <div className="w-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
        </div>
      </div>
    </section>
  );
}
