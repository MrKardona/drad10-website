// Codemod de una sola vez: pasa el sitio a la dirección tipográfica B.
// Uso: node scripts/_tipografia-b.cjs [--dry]
const fs = require("fs");
const path = require("path");

const DRY = process.argv.includes("--dry");
const RAIZ = path.join(__dirname, "..", "src");

// Siglas y nombres propios que deben conservar su forma al pasar de MAYÚSCULAS a tipo oración.
const PROPIOS = [
  "DRA.D10", "INDIBA", "FUE", "PRP", "CO2", "NCTF", "COP", "SIC", "IPL", "ARG", "COL", "FAQ",
  "WhatsApp", "Instagram", "Google", "Facebook", "YouTube", "Medellín", "Colombia", "Argentina",
  "Buenos Aires", "El Poblado", "Antioquia", "Clínica Quantum", "Quantum", "Dra.", "Daniela", "Díez",
  "Hydrafacial", "Sculptra", "Cosmelan", "Cryonic", "Radiesse", "Facetem", "Liposonic", "Botox",
  "Nanopore", "Long Lasting", "Lun", "Sáb",
];

function tipoOracion(txt) {
  let s = txt.toLocaleLowerCase("es");
  // Mayúscula al inicio y después de separadores de frase.
  s = s.replace(/(^|[·.!?¿¡|—–-]\s*|\n\s*)([a-záéíóúñü])/g, (m, pre, l) => pre + l.toLocaleUpperCase("es"));
  for (const p of PROPIOS) {
    const re = new RegExp(`(?<![\\p{L}])${p.toLocaleLowerCase("es").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\p{L}])`, "giu");
    s = s.replace(re, p);
  }
  return s;
}

// Un texto "en mayúsculas" que vale convertir: al menos 2 palabras de letras y ninguna minúscula.
const esMayus = (t) => /\p{Lu}{2,}.*\s.*\p{Lu}{2,}/u.test(t) && !/\p{Ll}/u.test(t.replace(/DRA\.D10/g, ""));

function remToPx(v) {
  const m = String(v).match(/^([\d.]+)(rem|px)$/);
  if (!m) return null;
  return m[2] === "rem" ? parseFloat(m[1]) * 16 : parseFloat(m[1]);
}

// Transforma el contenido de un objeto style={{ ... }}.
function transformarEstilo(obj, { esEm }) {
  let o = obj;
  const mayus = /textTransform:\s*"uppercase"(\s+as\s+const)?\s*,?/.test(o);
  const display = /font-display/.test(o);

  // Cursivas fuera.
  o = o.replace(/\s*fontStyle:\s*"italic"(\s+as\s+const)?\s*,?/g, "");
  if (esEm) o = o.replace(/color:\s*(GOLD|"#b89a6a"|'#b89a6a')/g, 'color: "inherit"');

  if (mayus) {
    o = o.replace(/\s*textTransform:\s*"uppercase"(\s+as\s+const)?\s*,?/g, "");
    o = o.replace(/letterSpacing:\s*"[^"]*"/g, 'letterSpacing: "0.01em"');
    o = o.replace(/fontSize:\s*"([^"]+)"/g, (m, v) => {
      const px = remToPx(v);
      return px !== null && px < 13 ? 'fontSize: "0.8125rem"' : m;
    });
  }

  if (display) {
    o = o.replace(/fontWeight:\s*(300|400|"300"|"400")/g, "fontWeight: 600");
    if (!/fontWeight/.test(o)) o = o.replace(/(fontFamily:[^,\n]+,)/, "$1 fontWeight: 600,");
    o = o.replace(/letterSpacing:\s*"[^"]*"/g, 'letterSpacing: "-0.03em"');
  }
  return o;
}

// Recorre los style={{ ... }} con llaves balanceadas.
function recorrerEstilos(src) {
  let out = "";
  let i = 0;
  while (true) {
    const j = src.indexOf("style={{", i);
    if (j < 0) { out += src.slice(i); break; }
    let k = j + "style={{".length, prof = 2;
    while (k < src.length && prof > 0) {
      if (src[k] === "{") prof++;
      else if (src[k] === "}") prof--;
      k++;
    }
    const cuerpo = src.slice(j + 8, k - 2);
    const previo = src.slice(Math.max(0, j - 40), j);
    const esEm = /<em\s+[^<>]*$/.test(previo);
    out += src.slice(i, j) + "style={{" + transformarEstilo(cuerpo, { esEm }) + "}}";
    i = k;
  }
  return out;
}

function transformarClases(src) {
  return src.replace(/className=(["'`])([^"'`]*)\1/g, (m, q, cls) => {
    if (!/\b(uppercase|italic)\b/.test(cls)) return m;
    let c = cls;
    const mayus = /\buppercase\b/.test(c);
    c = c.replace(/(^|\s)italic(?=\s|$)/g, "$1");
    if (mayus) {
      c = c.replace(/(^|\s)uppercase(?=\s|$)/g, "$1");
      c = c.replace(/(^|\s)((?:\w+:)?)tracking-(\[[^\]]+\]|widest|wider|wide)(?=\s|$)/g, "$1$2tracking-normal");
      c = c.replace(/(^|\s)((?:\w+:)?)text-\[(9|10|11|12)px\](?=\s|$)/g, "$1$2text-[13px]");
      c = c.replace(/(^|\s)((?:\w+:)?)text-xs(?=\s|$)/g, "$1$2text-[13px]");
    }
    c = c.replace(/\s{2,}/g, " ").trim();
    return `className=${q}${c}${q}`;
  });
}

function transformarTextos(src) {
  // Nodos de texto JSX: >TEXTO<
  src = src.replace(/>([^<>{}]*?)</g, (m, t) => (t.trim() && esMayus(t) ? `>${tipoOracion(t)}<` : m));
  // Literales de cadena en datos: "TEXTO EN MAYÚSCULAS"
  src = src.replace(/"([^"\n]{4,120})"/g, (m, t) => {
    if (!esMayus(t) || /https?:|\/|^[A-Z0-9_]+$/.test(t)) return m;
    return `"${tipoOracion(t)}"`;
  });
  return src;
}

function quitarAdornos(src) {
  // Separadores ✦ sueltos.
  src = src.replace(/\s*<span[^>]*>\s*✦\s*<\/span>/g, "");
  src = src.replace(/\s*✦\s*/g, " ");
  // Líneas cortas con degradado dorado que se desvanece.
  src = src.replace(/\s*<div\s+style=\{\{\s*width:\s*"\d+px",\s*height:\s*"1px",\s*background:\s*"linear-gradient\(to right, #b89a6a, transparent\)",[^}]*\}\}\s*\/>/g, "");
  return src;
}

const archivos = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx|ts)$/.test(e.name)) archivos.push(p);
  }
})(RAIZ);

let cambiados = 0;
for (const f of archivos) {
  const orig = fs.readFileSync(f, "utf8");
  const crlf = orig.includes("\r\n");
  let s = orig.replace(/\r\n/g, "\n");
  const esTsx = f.endsWith(".tsx");
  if (esTsx) {
    s = recorrerEstilos(s);
    s = transformarClases(s);
    s = quitarAdornos(s);
  }
  s = transformarTextos(s);
  if (crlf) s = s.replace(/\n/g, "\r\n");
  if (s !== orig) {
    cambiados++;
    if (!DRY) fs.writeFileSync(f, s);
    console.log("·", path.relative(RAIZ, f));
  }
}
console.log(`${cambiados} archivos ${DRY ? "(simulación)" : "modificados"}`);
