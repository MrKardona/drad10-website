import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | DRA.D10 — Medicina Estética Medellín",
  description:
    "Conoce cómo DRA.D10 recopila, usa y protege tus datos personales. Política de privacidad conforme a la Ley 1581 de 2012 de Colombia.",
};

const sections = [
  {
    number: "01",
    title: "Responsable del Tratamiento",
    content: [
      "DRA.D10 – Clínica Quantum Medellín, con domicilio en Cl. 7 #39-290 Consultorio 516, El Poblado, Medellín, Colombia, es la entidad responsable del tratamiento de los datos personales recopilados a través de este sitio web y durante la prestación de nuestros servicios.",
      "Para cualquier consulta relacionada con el manejo de tus datos personales puedes contactarnos a través del WhatsApp 300 244 0656 o mediante los canales disponibles en nuestra sección de contacto.",
    ],
  },
  {
    number: "02",
    title: "Datos que Recopilamos",
    content: [
      "Recopilamos los datos que tú mismo nos proporcionas de forma voluntaria al agendar una cita, completar formularios de contacto, comunicarte con nosotros o utilizar nuestros servicios. Estos pueden incluir: nombre completo, número de teléfono, correo electrónico, fecha de nacimiento, e información de salud relevante para la prestación del servicio médico-estético.",
      "También recopilamos de forma automática datos técnicos de navegación como dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia en el sitio, con fines estadísticos y de mejora continua.",
      "No recopilamos datos de tarjetas de crédito ni información financiera sensible directamente en nuestra plataforma.",
    ],
  },
  {
    number: "03",
    title: "Finalidad del Tratamiento",
    content: [
      "Tus datos personales son utilizados exclusivamente para las siguientes finalidades: (a) agendar y gestionar citas médicas; (b) prestación del servicio de medicina estética y seguimiento post-tratamiento; (c) envío de recordatorios de citas e información relevante sobre tus tratamientos; (d) comunicaciones comerciales y promocionales, solo si nos has dado tu consentimiento expreso; (e) cumplimiento de obligaciones legales y regulatorias.",
      "Tus datos de salud son considerados datos sensibles y reciben un nivel de protección especial. Únicamente serán consultados por el personal médico autorizado y con estricta confidencialidad clínica.",
    ],
  },
  {
    number: "04",
    title: "Consentimiento",
    content: [
      "Al proporcionarnos tus datos personales, ya sea mediante formularios en línea, comunicación directa o al momento de recibir nuestros servicios, manifiestas tu consentimiento libre, previo, expreso e informado para el tratamiento de dichos datos conforme a esta política.",
      "Tienes el derecho de revocar tu consentimiento en cualquier momento, sin que ello afecte la licitud del tratamiento efectuado con anterioridad a dicha revocación.",
    ],
  },
  {
    number: "05",
    title: "Compartición de Datos",
    content: [
      "DRA.D10 no vende, alquila ni cede tus datos personales a terceros con fines comerciales.",
      "Podremos compartir tus datos únicamente en los siguientes casos: (a) con proveedores de servicios tecnológicos que operan bajo estrictos acuerdos de confidencialidad y solo para los fines establecidos; (b) con autoridades sanitarias o judiciales cuando así lo exija la ley colombiana; (c) con otros profesionales de la salud involucrados en tu tratamiento, siempre con tu conocimiento previo.",
    ],
  },
  {
    number: "06",
    title: "Conservación de los Datos",
    content: [
      "Conservamos tus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en esta política y con las obligaciones legales aplicables. Los datos clínicos se conservan conforme a los plazos establecidos por la normativa colombiana en materia de historia clínica.",
      "Una vez cumplidos los plazos legales y finalizada la relación con el paciente, los datos serán eliminados de forma segura o anonimizados.",
    ],
  },
  {
    number: "07",
    title: "Seguridad de la Información",
    content: [
      "Implementamos medidas técnicas, administrativas y físicas para proteger tus datos personales contra acceso no autorizado, pérdida, alteración o divulgación indebida. Nuestro sitio web utiliza protocolos de seguridad SSL/TLS para el cifrado de las comunicaciones.",
      "A pesar de nuestros esfuerzos, ningún sistema de seguridad es infalible. En caso de una brecha de seguridad que afecte tus datos, te notificaremos conforme a los procedimientos establecidos por la Superintendencia de Industria y Comercio.",
    ],
  },
  {
    number: "08",
    title: "Tus Derechos (ARCO)",
    content: [
      "Conforme a la Ley 1581 de 2012 y sus decretos reglamentarios, tienes los siguientes derechos sobre tus datos personales:",
      "• Acceso: conocer los datos que tenemos sobre ti y cómo los tratamos. • Rectificación: solicitar la corrección de datos inexactos o incompletos. • Cancelación (supresión): pedir la eliminación de tus datos cuando ya no sean necesarios o hayas retirado tu consentimiento. • Oposición: oponerte al tratamiento de tus datos para fines específicos, en particular los comerciales.",
      "Para ejercer cualquiera de estos derechos, envía tu solicitud a través de WhatsApp 300 244 0656. Responderemos en un plazo máximo de 10 días hábiles.",
    ],
  },
  {
    number: "09",
    title: "Cookies y Tecnologías de Seguimiento",
    content: [
      "Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el tráfico y personalizar el contenido. Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envíe una cookie.",
      "El rechazo de cookies puede afectar el funcionamiento de algunas funciones del sitio web.",
    ],
  },
  {
    number: "10",
    title: "Marco Legal Aplicable",
    content: [
      "Esta política se rige por la Ley Estatutaria 1581 de 2012 (Protección de Datos Personales), el Decreto 1377 de 2013 y las demás normas complementarias expedidas por la Superintendencia de Industria y Comercio de Colombia.",
      "Para cualquier reclamación no resuelta, puedes acudir a la Superintendencia de Industria y Comercio (SIC) a través de su sitio web www.sic.gov.co.",
    ],
  },
  {
    number: "11",
    title: "Modificaciones a esta Política",
    content: [
      "DRA.D10 se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Las modificaciones entrarán en vigencia a partir de su publicación en este sitio web. Te recomendamos revisar periódicamente esta página para mantenerte informado.",
      "El uso continuado de nuestros servicios tras la publicación de cambios constituye tu aceptación de los mismos.",
    ],
  },
];

export default function PoliticaPrivacidad() {
  return (
    <>
      <NavBar />

      {/* ── Hero strip ── */}
      <div
        style={{
          backgroundColor: "#1c1c1c",
          paddingTop: "120px",
          paddingBottom: "72px",
          borderBottom: "1px solid rgba(184,154,106,0.15)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(184,154,106,0.7)",
              marginBottom: "1.25rem",
            }}
          >
            Documentos Legales
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 300,
              color: "#faf8f5",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Política de{" "}
            <em style={{ color: "#b89a6a" }}>Privacidad</em>
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                color: "#888580",
              }}
            >
              Última actualización: enero 2025
            </span>
            <span style={{ color: "rgba(184,154,106,0.4)", fontSize: "0.5rem" }}>✦</span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                color: "#888580",
              }}
            >
              Ley 1581 de 2012 · Colombia
            </span>
          </div>
        </div>
      </div>

      {/* ── Intro notice ── */}
      <div style={{ backgroundColor: "#1c1c1c" }}>
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div
            style={{
              borderLeft: "3px solid #b89a6a",
              paddingLeft: "24px",
              backgroundColor: "rgba(184,154,106,0.06)",
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "rgba(250,248,245,0.75)",
                lineHeight: 1.8,
              }}
            >
              En DRA.D10 tu privacidad es una prioridad. Esta política describe cómo recopilamos,
              usamos y protegemos tu información personal, en cumplimiento de la legislación
              colombiana de protección de datos personales.
            </p>
          </div>
        </div>
      </div>

      {/* ── Sections ── */}
      <div style={{ backgroundColor: "#1c1c1c" }}>
        <div className="max-w-4xl mx-auto px-6 pb-24">
          {/* Gold divider */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, #b89a6a 0%, transparent 60%)",
              marginBottom: "3rem",
            }}
          />

          <div className="flex flex-col gap-12">
            {sections.map((s) => (
              <div key={s.number} className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                {/* Number */}
                <div style={{ flexShrink: 0, width: "48px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "2rem",
                      fontWeight: 400,
                      color: "#b89a6a",
                      letterSpacing: "0.05em",
                      lineHeight: 1,
                    }}
                  >
                    {s.number}
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "1.15rem",
                      fontWeight: 400,
                      color: "#faf8f5",
                      marginBottom: "1rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {s.content.map((p, i) => (
                      <p
                        key={i}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.875rem",
                          color: "rgba(250,248,245,0.65)",
                          lineHeight: 1.85,
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA contact block ── */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2.5rem",
              border: "1px solid rgba(184,154,106,0.2)",
              backgroundColor: "rgba(184,154,106,0.05)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#b89a6a",
                marginBottom: "0.75rem",
              }}
            >
              Ejercer tus derechos ARCO
            </p>
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 300,
                color: "#faf8f5",
                marginBottom: "1.5rem",
                lineHeight: 1.4,
              }}
            >
              Acceso · Rectificación · Cancelación · Oposición
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/573002440656"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.65rem" }}
              >
                Contactar por WhatsApp
              </a>
              <a
                href="tel:+573002440656"
                className="btn-outline-cream"
                style={{ fontSize: "0.65rem" }}
              >
                300 244 0656
              </a>
            </div>
          </div>
        </div>
      </div>

      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
