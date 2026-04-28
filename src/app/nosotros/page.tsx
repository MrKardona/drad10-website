import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const filosofia = [
  {
    icon: "✦",
    title: "Calidad y excelencia con propósito",
    desc: "Nos esforzamos por ofrecer servicios que realmente marquen la diferencia. Cada decisión, cada proceso y cada detalle están pensados para generar bienestar, confianza y resultados reales en quienes nos eligen.",
  },
  {
    icon: "⚡",
    title: "Tecnología al servicio de las personas",
    desc: "Creemos en la tecnología como una herramienta, no como un fin. Por eso utilizamos métodos y recursos actuales que nos permiten brindar soluciones seguras, eficientes y acordes a las necesidades de cada paciente.",
  },
  {
    icon: "◎",
    title: "Cercanía que genera confianza",
    desc: "Escuchamos, acompañamos y cuidamos. Construimos relaciones basadas en la honestidad, el respeto y el compromiso, entendiendo que detrás de cada consulta hay una historia, una expectativa y una persona que merece atención personalizada.",
  },
  {
    icon: "↗",
    title: "Innovación con sentido humano",
    desc: "Evolucionamos constantemente, incorporando nuevas técnicas y mejoras que aporten valor real a la experiencia de nuestros pacientes, siempre priorizando la seguridad, la naturalidad y el bienestar integral.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <TopBar />
      <Header />

      {/* Hero — Dra. Daniela Díez */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Especialista fundadora</p>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Conoce a la Dra<br />
              <span style={{ color: '#c9a84c' }}>Daniela Díez</span>
            </h1>
            <p className="text-lg text-gray-500 mb-2 font-medium">
              Especialista en Medicina Estética y Microimplante Capilar 🇨🇴 🇦🇷
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              ¡Hola! Soy Daniela Díez, una médica formada en diversos niveles de complejidad, con una sólida vocación humana basada en valores éticos y morales y un enfoque proactivo y analítico. Me destaco por mi liderazgo, fácil adaptación a situaciones nuevas y compromiso responsable.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-full font-medium">
                💉 Microimplante Capilar Expert
              </span>
              <span className="flex items-center gap-2 border border-black text-black text-sm px-4 py-2 rounded-full font-medium">
                ⚡️ INDIBA
              </span>
            </div>
            <a
              href="#agenda"
              className="inline-block bg-black text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors"
            >
              Agenda ya
            </a>
          </div>

          {/* Image placeholder */}
          <div className="order-1 lg:order-2 relative">
            <div
              className="w-full aspect-[3/4] rounded-3xl flex items-end justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #f5f0eb 0%, #e8e0d8 100%)' }}
            >
              <div className="text-center pb-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-3"
                  style={{ backgroundColor: '#c9a84c' }}
                >
                  DD
                </div>
                <p className="text-sm font-bold text-gray-700">Dra. Daniela Díez</p>
                <p className="text-xs text-gray-500">Medicina Estética</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl -z-10"
              style={{ backgroundColor: '#c9a84c', opacity: 0.15 }}
            />
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full -z-10"
              style={{ backgroundColor: '#1a1f2e', opacity: 0.08 }}
            />
          </div>
        </div>
      </section>

      {/* Nuestro compromiso */}
      <section className="py-24" style={{ backgroundColor: '#f7f4f1' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images mosaic */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl aspect-square bg-gray-200 col-span-1" style={{ background: 'linear-gradient(135deg, #e8e0d8, #d5ccc3)' }} />
            <div className="rounded-2xl aspect-[3/4] bg-gray-300 col-span-1 -mt-8" style={{ background: 'linear-gradient(135deg, #d5ccc3, #c2b8ae)' }} />
            <div className="rounded-2xl aspect-[4/3] bg-gray-200 col-span-2" style={{ background: 'linear-gradient(135deg, #ece6df, #ddd5cc)' }} />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#c9a84c' }}>Nuestra misión</p>
            <h2 className="text-4xl font-black mb-6 leading-tight">Nuestro compromiso</h2>
            <div className="w-12 h-0.5 bg-black mb-8" />
            <p className="text-gray-600 leading-relaxed mb-6">
              DRAD10 nació con la visión de transformar la experiencia en salud y bienestar, integrando atención médica especializada con soluciones innovadoras, seguras y centradas en la persona. Con un enfoque en innovación, excelencia y servicio, hemos consolidado un proyecto sólido que combina experiencia clínica, profesionalismo y una profunda vocación por el cuidado integral de cada paciente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Creemos que lo que nos diferencia no es solo lo que hacemos, sino cómo lo hacemos: con responsabilidad, ética médica, dedicación y un compromiso constante por superar expectativas. Nuestro objetivo es brindar confianza, resultados de calidad y una experiencia humana, cercana y personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestro equipo */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Profesionales</p>
              <h2 className="text-5xl font-black mb-6 leading-tight">Nuestro<br />equipo</h2>
              <div className="w-12 h-0.5 bg-black mb-8" />
              <p className="text-gray-600 leading-relaxed mb-6">
                En DRAD10 contamos con un equipo multidisciplinario de profesionales en salud, comprometido con la calidad y la excelencia médica. Nuestro equipo está formado por especialistas en pediatría, medicina estética e implantes capilares, ofreciendo atención integral, confiable y con las mejores prácticas clínicas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada integrante de DRAD10 aporta experiencia y enfoque en el paciente, garantizando soluciones personalizadas y resultados de alta calidad. Trabajamos como un solo equipo, centrados en la atención personalizada y mejora continua.
              </p>
            </div>
            {/* Team photo */}
            <div
              className="rounded-3xl aspect-[4/3] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #f0ebe4 0%, #e0d8ce 100%)' }}
            >
              <div className="text-center">
                <p className="text-4xl mb-3">👩‍⚕️👩‍⚕️👨‍⚕️</p>
                <p className="text-sm text-gray-500 font-medium">Equipo DRAD10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra filosofía */}
      <section className="py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#c9a84c' }}>Valores</p>
            <h2 className="text-4xl font-black text-white mb-4">Nuestra filosofía</h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: '#c9a84c' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {filosofia.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border transition-all hover:border-yellow-600/40 group"
                style={{ backgroundColor: '#232840', borderColor: 'rgba(201,168,76,0.15)' }}
              >
                <span className="text-2xl mb-5 block" style={{ color: '#c9a84c' }}>{item.icon}</span>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#agenda"
              className="inline-block text-black px-10 py-4 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#c9a84c' }}
            >
              Agenda ya
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
