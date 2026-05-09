export function TopBar() {
  return (
    <div className="w-full text-white text-sm py-2 px-4 flex items-center justify-center gap-6" style={{ backgroundColor: '#1a1f2e' }}>
      <a
        href="https://maps.app.goo.gl/dtwj4zv9ayygTz8NA"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit", opacity: 0.9 }}
      >
        📍 Clínica Medellín sede del Poblado, Cl. 7 #39 - 290 Consultorio 516
      </a>
      <a href="tel:+573002440656" style={{ textDecoration: "none", color: "inherit" }}>
        Citas: <strong>300 244 0656</strong>
      </a>
    </div>
  );
}
