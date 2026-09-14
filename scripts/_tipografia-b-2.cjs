// Segunda pasada de la dirección B: objetos de estilo fuera de style={{}},
// tamaños mínimos legibles, tracking y etiquetas de una sola palabra en mayúsculas.
const fs = require("fs");
const path = require("path");
const RAIZ = path.join(__dirname, "..", "src");

const rem = (v) => {
  const m = String(v).match(/^([\d.]+)(rem|px)$/);
  return m ? (m[2] === "rem" ? parseFloat(m[1]) * 16 : parseFloat(m[1])) : null;
};

// Aplica reglas a cualquier bloque { ... } que tenga propiedades tipográficas.
function objeto(o) {
  if (!/fontSize|letterSpacing|textTransform|font-display|fontStyle/.test(o)) return o;
  const display = /font-display/.test(o);
  const parrafo = /lineHeight:\s*"?(1\.[5-9]|[2-9])/.test(o);
  o = o.replace(/\s*textTransform:\s*"uppercase"(\s+as\s+const)?\s*,?/g, "");
  o = o.replace(/\s*fontStyle:\s*"italic"(\s+as\s+const)?\s*,?/g, "");
  o = o.replace(/fontFamily:\s*"var\(--font-display\), Georgia, serif"/g, 'fontFamily: "var(--font-display)"');
  if (display) {
    o = o.replace(/fontWeight:\s*(300|400|"300"|"400")/g, "fontWeight: 600");
    o = o.replace(/letterSpacing:\s*"[^"]*"/g, 'letterSpacing: "-0.03em"');
  } else {
    o = o.replace(/letterSpacing:\s*"(0?\.\d+)em"/g, (m, v) => (parseFloat(v) > 0.03 ? 'letterSpacing: "0.01em"' : m));
    o = o.replace(/fontSize:\s*"([^"]+)"/g, (m, v) => {
      const px = rem(v);
      if (px === null) return m;
      if (parrafo && px < 15) return 'fontSize: "0.9375rem"';
      if (px < 13) return 'fontSize: "0.8125rem"';
      return m;
    });
  }
  return o;
}

function bloques(src) {
  let out = "", i = 0;
  const re = /(?:CSSProperties\s*=\s*\{|=>\s*\(\{|style=\{\{|:\s*\{(?=\s*\n\s*fontFamily))/g;
  let m;
  while ((m = re.exec(src))) {
    const inicio = m.index + m[0].length;
    let k = inicio, prof = 1;
    while (k < src.length && prof > 0) { if (src[k] === "{") prof++; else if (src[k] === "}") prof--; k++; }
    out += src.slice(i, inicio) + objeto(src.slice(inicio, k - 1));
    i = k - 1;
    re.lastIndex = k;
  }
  return out + src.slice(i);
}

function clases(src) {
  return src.replace(/(className=(?:"|'|\{`))([^"'`]*)/g, (m, pre, c) => {
    let n = c
      .replace(/(^|\s)((?:[\w-]+:)*)tracking-\[0?\.(\d+)em\](?=\s|$)/g, (mm, a, v, d) => (parseFloat("0." + d) > 0.03 ? `${a}${v}tracking-normal` : mm))
      .replace(/(^|\s)((?:[\w-]+:)*)tracking-(widest|wider|wide)(?=\s|$)/g, "$1$2tracking-normal")
      .replace(/(^|\s)((?:[\w-]+:)*)text-\[(8|9|10|11|12)px\](?=\s|$)/g, "$1$2text-[13px]")
      .replace(/(^|\s)((?:[\w-]+:)*)uppercase(?=\s|$)/g, "$1")
      .replace(/(^|\s)((?:[\w-]+:)*)italic(?=\s|$)/g, "$1");
    return pre + n.replace(/ {2,}/g, " ");
  });
}

const SIGLAS = new Set(["DRA.D10", "INDIBA", "FUE", "PRP", "CO2", "NCTF", "COP", "SIC", "FAQ", "AR", "CO", "IPL"]);
const capital = (w) => (SIGLAS.has(w) ? w : w.charAt(0) + w.slice(1).toLocaleLowerCase("es"));

function palabras(src) {
  src = src.replace(/((?:label|title|tag|badge|categoria|cat|eyebrow|chip):\s*")([A-ZÁÉÍÓÚÑ]{3,})(")/g, (m, a, w, b) => a + capital(w) + b);
  src = src.replace(/>(\s*)([A-ZÁÉÍÓÚÑ]{4,})(\s*)</g, (m, a, w, b) => `>${a}${capital(w)}${b}<`);
  return src;
}

const archivos = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".tsx")) archivos.push(p);
  }
})(RAIZ);

let n = 0;
for (const f of archivos) {
  const orig = fs.readFileSync(f, "utf8");
  const crlf = orig.includes("\r\n");
  let s = orig.replace(/\r\n/g, "\n");
  s = palabras(clases(bloques(s)));
  if (crlf) s = s.replace(/\n/g, "\r\n");
  if (s !== orig) { fs.writeFileSync(f, s); n++; }
}
console.log(n, "archivos");
