import { NavBar } from "@/components/NavBar";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad y tratamiento de datos | DRA.D10",
  description:
    "Cómo DRA.D10 y Clínica Quantum recolectan, usan y protegen tus datos personales y de salud, conforme a la Ley 1581 de 2012 de Colombia.",
};

const sections = [
  {
    number: "01",
    title: "Responsable del tratamiento",
    content: [
      "Clínica Quantum, que opera bajo la marca DRA.D10 con la dirección médica de la Dra. Daniela Díez, es responsable del tratamiento de los datos personales que recolecta a través de este sitio web, sus canales de atención y la prestación de sus servicios.",
      "Sede principal: Cl. 7 #39-290, Consultorio 516, El Poblado, Medellín, Colombia. Sede Argentina: Av. Gaona 1237, Depto 11-2, Buenos Aires. Canal de atención de datos personales: WhatsApp 304 375 1975 o por escrito en la sede principal.",
      "Esta política aplica a pacientes, personas interesadas en nuestros servicios, visitantes del sitio web, proveedores, contratistas, colaboradores y candidatos, respecto de todas las bases de datos físicas y digitales que administramos.",
    ],
  },
  {
    number: "02",
    title: "Marco legal",
    content: [
      "Tratamos los datos personales conforme al artículo 15 de la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013, el Decreto 1074 de 2015 y las demás normas que los modifiquen o complementen. La información de salud se maneja además según la normativa colombiana sobre historia clínica y secreto profesional médico.",
      "Para la atención prestada en Argentina aplican también la Ley 25.326 de Protección de los Datos Personales y la Ley 26.529 de Derechos del Paciente.",
    ],
  },
  {
    number: "03",
    title: "Definiciones",
    content: [
      "Titular: la persona natural cuyos datos se tratan. Dato personal: cualquier información vinculada a una persona natural determinada o determinable. Dato sensible: el que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación, como los datos de salud, la vida sexual, los datos biométricos y las fotografías clínicas.",
      "Tratamiento: cualquier operación sobre datos personales, como recolección, almacenamiento, uso, circulación o supresión. Autorización: consentimiento previo, expreso e informado del titular. Responsable: quien decide sobre la base de datos y su tratamiento. Encargado: quien trata datos por cuenta del responsable, como un proveedor tecnológico.",
      "Transmisión: comunicación de datos a un encargado, dentro o fuera de Colombia, para que los trate por cuenta del responsable. Transferencia: envío de datos a otro responsable, dentro o fuera del país.",
    ],
  },
  {
    number: "04",
    title: "Datos que recolectamos",
    content: [
      "Datos de identificación y contacto: nombre, documento de identidad, fecha de nacimiento, teléfono, correo electrónico, ciudad y país de residencia.",
      "Datos de salud (sensibles): antecedentes médicos, alergias, medicamentos, diagnóstico, evolución, consentimientos informados y demás información que integra la historia clínica. También fotografías y videos clínicos de las zonas tratadas, tomados para documentar tu valoración y tu evolución.",
      "Datos de navegación: dirección IP aproximada, tipo de dispositivo y navegador, páginas visitadas y tiempo de permanencia, obtenidos mediante herramientas de medición del sitio. Datos de pago: comprobantes y datos de facturación. No almacenamos datos completos de tarjetas en este sitio web.",
    ],
  },
  {
    number: "05",
    title: "Finalidades del tratamiento",
    content: [
      "Atención médica: realizar tu valoración, prestar los procedimientos, elaborar y custodiar la historia clínica, hacer controles y seguimiento, y atender urgencias relacionadas con tu tratamiento.",
      "Gestión de citas y comunicación: agendar, confirmar y recordar citas, y responder tus consultas por WhatsApp, llamada, correo electrónico o mensajería, en Colombia o en Argentina según la sede que elijas.",
      "Comunicaciones comerciales: enviarte información sobre servicios, novedades y promociones, solo si lo autorizas. Puedes retirar esta autorización en cualquier momento sin que afecte tu atención médica.",
      "Gestión administrativa y legal: facturación, cobro, contabilidad, obligaciones tributarias, atención de peticiones, quejas y reclamos, requerimientos de autoridades y defensa ante reclamaciones.",
      "Mejora del servicio: medir el uso del sitio web y la calidad de la atención con datos estadísticos o anonimizados. Proveedores, contratistas y colaboradores: gestionar la relación contractual o laboral y cumplir las obligaciones legales que de ella se derivan.",
    ],
  },
  {
    number: "06",
    title: "Datos sensibles y fotografías clínicas",
    content: [
      "No estás obligado a entregar datos sensibles. Sin embargo, algunos datos de salud son indispensables para prestarte una atención segura, y sin ellos podríamos no realizar el procedimiento.",
      "La historia clínica es reservada. Solo la consulta el personal de salud que interviene en tu atención y solo se entrega a terceros en los casos que la ley permite, como por solicitud tuya, de tu representante o de una autoridad competente.",
      "Las fotografías y videos clínicos se usan para tu historia clínica y seguimiento. Solo se publican en el sitio web o en redes sociales, como resultados de antes y después, con tu autorización expresa, separada y por escrito, procurando no identificarte salvo que lo aceptes. Puedes retirar esa autorización en cualquier momento y retiraremos el material de nuestros canales.",
    ],
  },
  {
    number: "07",
    title: "Menores de edad",
    content: [
      "Solo tratamos datos de niñas, niños y adolescentes cuando es necesario para su atención, con autorización de su representante legal y respetando su interés superior y sus derechos fundamentales.",
    ],
  },
  {
    number: "08",
    title: "Autorización",
    content: [
      "Solicitamos tu autorización de forma previa, expresa e informada: por escrito, por medios digitales como formularios o mensajes, de forma verbal o mediante conductas inequívocas, como enviarnos tus datos para agendar una cita. Conservamos prueba de esa autorización.",
      "Conforme a la ley, no se requiere autorización cuando se trate de datos de naturaleza pública, casos de urgencia médica o sanitaria, información requerida por una autoridad en ejercicio de sus funciones, tratamientos autorizados por la ley con fines históricos, estadísticos o científicos, o datos del registro civil.",
    ],
  },
  {
    number: "09",
    title: "Con quién compartimos tus datos",
    content: [
      "No vendemos ni alquilamos tus datos personales.",
      "Podemos transmitirlos a encargados que nos prestan servicios, como alojamiento del sitio web y bases de datos, mensajería, agendamiento, facturación, laboratorios o profesionales de apoyo, bajo acuerdos que limitan su uso a las finalidades de esta política y exigen confidencialidad y seguridad.",
      "Algunos de estos proveedores tienen servidores fuera de Colombia, por ejemplo en Estados Unidos. Además, si te atiendes en la sede de Argentina, la información necesaria para tu atención puede circular entre ambas sedes. En estos casos exigimos niveles adecuados de protección y, cuando la ley lo requiere, tu autorización.",
      "También entregaremos información a autoridades judiciales, sanitarias o administrativas cuando lo exija la ley o una orden competente.",
    ],
  },
  {
    number: "10",
    title: "Tus derechos",
    content: [
      "Como titular puedes: conocer, actualizar y rectificar tus datos; solicitar prueba de la autorización otorgada; ser informado sobre el uso que les hemos dado; revocar la autorización o pedir la supresión de tus datos cuando no se respeten los principios, derechos y garantías legales; acceder gratuitamente a tus datos; y presentar quejas ante la Superintendencia de Industria y Comercio, una vez agotado el trámite de consulta o reclamo con nosotros.",
      "La supresión y la revocatoria no proceden cuando exista un deber legal o contractual de conservar los datos. En particular, la historia clínica debe conservarse durante los plazos que fija la normativa de salud, aunque sí puedes pedir que dejemos de usar tus datos para fines comerciales o de publicación.",
    ],
  },
  {
    number: "11",
    title: "Cómo ejercer tus derechos",
    content: [
      "Puedes enviar tu solicitud por WhatsApp al 304 375 1975 o por escrito en nuestra sede principal. Incluye tu nombre completo, documento de identidad, datos de contacto, una descripción clara de lo que solicitas y los documentos que la soporten. Si actúas en nombre de otra persona, adjunta el documento que acredite tu representación.",
      "Consultas: las respondemos en máximo diez (10) días hábiles desde su recibo. Si no es posible, te informaremos el motivo y la nueva fecha, que no superará cinco (5) días hábiles adicionales.",
      "Reclamos (corrección, actualización, supresión, revocatoria o incumplimiento): los atendemos en máximo quince (15) días hábiles desde el día siguiente a su recibo, prorrogables hasta ocho (8) días hábiles más con aviso previo. Si el reclamo está incompleto, te pediremos completarlo dentro de los cinco (5) días siguientes; si pasan dos (2) meses sin que lo completes, se entenderá que desististe.",
    ],
  },
  {
    number: "12",
    title: "Nuestros deberes y seguridad de la información",
    content: [
      "Nos comprometemos a garantizar el ejercicio del derecho de hábeas data, conservar prueba de las autorizaciones, informarte la finalidad del tratamiento, mantener la información veraz y actualizada, rectificarla cuando sea incorrecta, tramitar consultas y reclamos en los plazos legales e informar a la autoridad cuando se presenten riesgos en la administración de la información.",
      "Aplicamos medidas técnicas, humanas y administrativas razonables: accesos restringidos con usuario y contraseña, cifrado de las comunicaciones del sitio web, custodia física de documentos y acuerdos de confidencialidad con el personal. Ningún sistema es infalible; si ocurre un incidente que afecte tus datos, lo informaremos a la autoridad y a los titulares afectados según la ley.",
    ],
  },
  {
    number: "13",
    title: "Conservación de los datos",
    content: [
      "Conservamos los datos mientras sean necesarios para las finalidades descritas y durante los plazos que exigen las normas de salud, contables y tributarias. Cumplidos esos plazos, los eliminamos de forma segura o los anonimizamos.",
    ],
  },
  {
    number: "14",
    title: "Cookies y medición del sitio",
    content: [
      "Este sitio usa herramientas de analítica y rendimiento que recopilan información estadística sobre la navegación, sin identificarte directamente. Puedes configurar tu navegador para bloquear o eliminar cookies; algunas funciones del sitio podrían verse afectadas.",
      "Cuando nos escribes por WhatsApp o nos sigues en Instagram, esos servicios también tratan tus datos según sus propias políticas de privacidad.",
    ],
  },
  {
    number: "15",
    title: "Vigencia y cambios",
    content: [
      "Esta política rige desde su publicación en este sitio web. Podemos actualizarla para ajustarla a cambios legales o de nuestros servicios. Publicaremos la versión vigente con su fecha de actualización y, si un cambio afecta las finalidades autorizadas, te lo informaremos y pediremos una nueva autorización cuando corresponda.",
      "Las bases de datos permanecerán vigentes mientras se mantengan las finalidades para las que fueron recolectadas y los plazos legales de conservación.",
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
            <em style={{ color: "#b89a6a" }}>Privacidad</em>{" "}y tratamiento de datos
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
              Última actualización: septiembre 2026
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
              Tu información de salud es tan delicada como tu tratamiento. Aquí explicamos qué
              datos recolectamos, para qué los usamos, con quién los compartimos y cómo puedes
              conocerlos, corregirlos o pedir que los eliminemos.
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
              Ejerce tus derechos
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
              Conocer · Actualizar · Rectificar · Suprimir
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/573043751975?text=Hola%2C%20quiero%20hacer%20una%20solicitud%20sobre%20mis%20datos%20personales"
                data-wa-fijo
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.65rem" }}
              >
                Contactar por WhatsApp
              </a>
              <a
                href="tel:+573043751975"
                className="btn-outline-cream"
                style={{ fontSize: "0.65rem" }}
              >
                304 375 1975
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
