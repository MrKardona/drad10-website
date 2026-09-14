export function Footer() {
  return (
    <footer className="text-white py-12 px-4" style={{ backgroundColor: '#1a2030' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <div className="mb-4">
            <span className="text-2xl font-black tracking-normal block" style={{ letterSpacing: '0.15em' }}>DRA.D10</span>
            <span className="text-xs tracking-normal text-gray-400">Medicina estética</span>
          </div>
          <p className="text-gray-400 text-xs mt-4 leading-relaxed">
            Clínica Estética y de Rejuvenecimiento en Medellín-Colombia
          </p>
          <p className="text-gray-500 text-xs mt-6">Clínica estética DraD10 © 2026. Todos los derechos reservados</p>
        </div>

        {/* De interés */}
        <div>
          <h3 className="text-sm font-bold tracking-normal mb-4">De interés</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de reembolso</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Síguenos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contáctanos</a></li>
          </ul>
        </div>

        {/* Horario */}
        <div>
          <h3 className="text-sm font-bold tracking-normal mb-4">Horario de atención</h3>
          <div className="text-sm text-gray-400 flex flex-col gap-2">
            <p>9:00 am - 7:00 pm <span className="text-gray-500">Lunes - Viernes</span></p>
            <p>9:00 am - 2:00 pm <span className="text-gray-500">Sábado</span></p>
            <div className="border-t border-gray-700 my-3" />
            <p className="text-xs text-gray-500">Cl. 7 #39 - 290 Consultorio 516</p>
            <p className="text-xs text-gray-500">Medellín, Colombia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
