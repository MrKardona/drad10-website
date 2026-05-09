import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Reembolso | DRA.D10 — Medicina Estética Medellín",
  description:
    "Conoce nuestra política de reembolso y cancelación de citas en DRA.D10, clínica de medicina estética en El Poblado, Medellín.",
};

const sections = [
  {
    number: "01",
    title: "Naturaleza de los Servicios",
    content: [
      "En DRA.D10 ofrecemos servicios de medicina estética y procedimientos de bienestar de naturaleza personalizada. Cada tratamiento es diseñado exclusivamente para el paciente según su valoración clínica individual.",
      "Por tratarse de servicios médicos y estéticos de carácter personalizado e intransferible, los resultados pueden variar según las condiciones particulares de cada paciente, por lo cual es importante leer con atención la presente política antes de agendar cualquier procedimiento.",
    ],
  },
  {
    number: "02",
    title: "Política de Cancelación de Citas",
    content: [
      "El paciente puede cancelar o reprogramar su cita sin ningún costo adicional con un mínimo de 24 horas de anticipación a la hora agendada.",
      "Las cancelaciones realizadas con menos de 24 horas de anticipación o la no asistencia sin aviso previo (no-show) podrán generar el cobro de hasta el 50% del valor del servicio agendado, a discreción del equipo administrativo.",
      "En casos de fuerza mayor debidamente justificados (emergencia médica, calamidad doméstica), se estudiará cada caso de manera individual y se buscará una solución equitativa para el paciente.",
    ],
  },
  {
    number: "03",
    title: "Reembolsos por Servicios No Prestados",
    content: [
      "Si por alguna razón atribuible a DRA.D10 no fue posible prestar el servicio en la fecha y hora acordadas, el paciente tendrá derecho a la reprogramación sin costo o al reembolso total del valor pagado.",
      "Los reembolsos aprobados se procesarán dentro de los 5 a 10 días hábiles siguientes a la aprobación, por el mismo medio de pago utilizado en la transacción original.",
    ],
  },
  {
    number: "04",
    title: "Servicios Prestados — No Reembolsables",
    content: [
      "Una vez iniciado o completado un procedimiento, no aplica reembolso, dado que los recursos humanos, materiales clínicos y tiempo profesional ya han sido destinados de manera exclusiva para el paciente.",
      "Los paquetes o planes de sesiones múltiples: las sesiones ya realizadas no son reembolsables. En caso de solicitar cancelación del plan restante, se reembolsará proporcional al número de sesiones no ejecutadas, descontando una tarifa administrativa del 15%.",
    ],
  },
  {
    number: "05",
    title: "Productos y Kits Estéticos",
    content: [
      "Los productos cosméticos y kits de cuidado domiciliario vendidos en clínica solo admiten cambio o reembolso si presentan defecto de fábrica comprobado, dentro de los 15 días calendario siguientes a la compra y con factura de compra.",
      "No se aceptan devoluciones de productos que hayan sido abiertos, usados o manipulados, por razones de seguridad e higiene.",
    ],
  },
  {
    number: "06",
    title: "Reacciones Adversas",
    content: [
      "La satisfacción y seguridad de nuestros pacientes es nuestra prioridad. Si presenta una reacción adversa directamente relacionada con alguno de nuestros procedimientos, le pedimos comunicarse de inmediato con nuestro equipo médico.",
      "Cada caso será evaluado de forma individual por la Dra. Daniela Díez y su equipo. De confirmarse una responsabilidad clínica, se ofrecerán las correcciones, tratamientos complementarios o compensaciones que correspondan, en cumplimiento de la normativa colombiana vigente en salud.",
    ],
  },
  {
    number: "07",
    title: "Proceso de Solicitud de Reembolso",
    content: [
      "Para iniciar una solicitud de reembolso, el paciente debe comunicarse por escrito a través de nuestros canales oficiales (WhatsApp: 300 244 0656 o correo electrónico), indicando: nombre completo, fecha del servicio, descripción del motivo y soporte de pago.",
      "DRA.D10 responderá la solicitud dentro de los 3 días hábiles siguientes a su recepción, con la decisión y el proceso a seguir.",
    ],
  },
  {
    number: "08",
    title: "Marco Legal",
    content: [
      "La presente política se rige por la legislación colombiana, en especial la Ley 1480 de 2011 (Estatuto del Consumidor) y las normas del Ministerio de Salud y Protección Social aplicables a servicios de medicina estética.",
      "Para cualquier inconformidad no resuelta, el paciente puede acudir a la Superintendencia de Industria y Comercio (SIC) o a los mecanismos de protección al consumidor establecidos por la ley colombiana.",
    ],
  },
];

export default function PoliticaReembolso() {
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
            <em style={{ color: "#b89a6a" }}>Reembolso</em>
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
              DRA.D10 — Clínica Estética · El Poblado, Medellín
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
              En DRA.D10 nos comprometemos con la transparencia y la satisfacción de cada paciente.
              Te invitamos a leer detenidamente esta política antes de agendar cualquier servicio.
              Si tienes dudas, nuestro equipo está disponible para orientarte antes, durante y después
              de tu tratamiento.
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
              ¿Tienes alguna duda?
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
              Nuestro equipo está listo para ayudarte
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/573002440656"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.65rem" }}
              >
                WhatsApp
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
