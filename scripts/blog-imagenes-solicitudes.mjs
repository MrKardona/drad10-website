// Arma las solicitudes de generación (Higgsfield, gpt_image_2_5) a partir de docs/blog/imagenes/*.json.
// Uso: node scripts/blog-imagenes-solicitudes.mjs <lote 0-3>  → imprime JSON para generate_image_batch.
import { readFileSync, readdirSync } from "node:fs";

// Ruta pública de la referencia → media_id importado en Higgsfield.
const MEDIA = {
  "/images/dra-daniela.jpg": "66106d5b-afcf-49e6-8eb3-be222a288e98",
  "/images/dra/retrato-sillon.webp": "73b28623-78d5-4c31-a60b-5f11efdba6bc",
  "/images/dra/analizador.webp": "4e222c1e-0dfa-47d1-a7d0-568fd1338b72",
  "/images/dra/analizador-bata.webp": "bc417bda-45b9-4ff5-86aa-bdd36a770db4",
  "/images/dra/scrubs.webp": "4dbd110a-3ec2-43d1-aa03-0ddc7e237bab",
  "/images/dra/sofa.webp": "26bc9ab4-40eb-4543-9ab3-d1ab271cb88a",
  "/images/dra/uniforme-rosa.webp": "a0d2db1c-6727-4370-aec1-46db54e8360a",
  "/images/equipo.jpg": "66c22e48-855a-45bb-b8f1-5a294641daf1",
  "/images/hero-bg.jpg": "e908b3fb-d06d-49e8-b32f-f3ae50b1917f",
  "/images/clinica/indiba.webp": "ae48a254-198e-41c4-ad6e-92a74bd2a5e5",
  "/images/tecnologia/indiba-facial.webp": "04a3d6ec-68bd-4942-8b3b-9f6052354973",
  "/images/tecnologia/indiba-regeneracion.webp": "28073a58-c452-4094-b292-6a36687dd98b",
  "/images/servicios/descenso-de-peso/hero.webp": "d253fffe-c6db-4b9d-9a54-4da7e542494a",
  "/images/servicios/descenso-de-peso/paso-1.webp": "31d5e383-d435-4754-b92f-89857cc363ed",
  "/images/servicios/descenso-de-peso/paso-2.webp": "85afa417-962f-4e9c-bf57-a32dab2b4bad",
  "/images/servicios/descenso-de-peso/paso-3.webp": "993bf740-18df-4b5f-b69c-b2e4e037c469",
  "/images/servicios/descenso-de-peso/resultado.webp": "cbfcaf96-4de8-4507-95dd-7edaebff6e44",
  "/images/servicios/moldeamiento-corporal/hero.webp": "de720e54-aa3c-4afa-aa21-2651328eb36c",
  "/images/servicios/implante-capilar-fue/hero.webp": "48876d35-0775-4d29-b272-56cddf48559d",
  "/images/servicios/implante-capilar-fue/paso-1.webp": "dec68e94-1b94-47bb-9737-1620fa96e8b3",
  "/images/servicios/implante-capilar-fue/paso-2.webp": "75b38ca2-613b-45b3-9f8f-c0017543862a",
  "/images/servicios/implante-capilar-fue/paso-3.webp": "78dcb53d-4066-4bc4-925c-362547590c62",
  "/images/servicios/implante-capilar-fue/cierre.webp": "63f2eef9-52ae-4546-b6b5-ee6499604e12",
  "/images/servicios/implante-capilar-fue/resultado.webp": "3d4e328c-be63-4053-8131-c430058dbdf3",
  "/images/servicios/prp-capilar/hero.webp": "af08587f-c1be-4d52-a10c-7f3143f90cb4",
  "/images/servicios/mesoterapia-capilar/hero.webp": "dc8eea6b-c730-4763-8f76-ad2dfe3aae72",
  "/images/servicios/indiba-facial/hero.webp": "7234dfb6-b226-4a40-8730-962ea46769e1",
  "/images/servicios/indiba-facial/paso-1.webp": "a70fe6b2-a693-4e33-be7a-c50ddc08e9d1",
  "/images/servicios/indiba-facial/paso-2.webp": "49949ef4-38f4-491d-ba82-ed23a77970b6",
  "/images/servicios/indiba-facial/resultado.webp": "0284ddfa-b718-4443-b39b-7934c73065ec",
  "/images/servicios/acido-hialuronico/hero.webp": "d0319e23-89d3-4230-b197-9743cc1f95d2",
  "/images/servicios/acido-hialuronico/paso-1.webp": "ed9c7dea-e9b8-43ae-aeb8-bf15639731d4",
  "/images/servicios/acido-hialuronico/paso-2.webp": "c003f1a3-8fe3-4fa3-9516-aaeee4164679",
  "/images/servicios/acido-hialuronico/resultado.webp": "67117b4a-8e44-4b39-a4a7-ae9b1b2e3a5d",
  "/images/servicios/alta-hidratacion/hero.webp": "f0ba5226-d797-444b-acba-e5792a05ed37",
  "/images/servicios/botox/hero.webp": "1e5a9363-a3c6-414b-af17-1c2c73f07ee3",
  "/images/servicios/botox/paso-1.webp": "d0319803-f179-48eb-875d-8013bf3c5d72",
  "/images/servicios/botox/paso-2.webp": "d662c54e-8f90-4957-95ca-2a542c36ec91",
  "/images/servicios/botox/paso-3.webp": "b84e1bba-d48f-49fb-89ec-570d5b40c983",
  "/images/servicios/botox/resultado.webp": "0e41f6a3-210a-4ba9-a7c2-2551734f10ab",
  "/images/servicios/hilos-bioestimulacion/resultado.webp": "50a9e0b0-db2f-4b0a-b26f-5e9f41778052",
  "/images/servicios/limpieza-facial/hero.webp": "ea906703-be03-4faa-a968-3b6ad40b8bb4",
  "/images/servicios/manchas-mesoterapeutico/hero.webp": "b72d4f15-ce28-4ec5-9ad7-78487dc4db2e",
  "/images/servicios/manchas-mesoterapeutico/paso-1.webp": "0c1b4083-46d7-4702-8262-2ba35ee0a496",
  "/images/servicios/mesoterapia-facial/hero.webp": "09c06178-9638-4576-bec1-d5bb6fdaf11a",
  "/images/servicios/rejuvenecimiento-manos-cuello-pecho/hero.webp": "b16e826f-e89a-4c0d-a3a4-6e8d8d044eee",
  "/images/servicios/relleno-de-labios/hero.webp": "107f98bc-057e-40fc-a389-aae611023cad",
  "/images/servicios/relleno-de-labios/paso-1.webp": "131871a7-f174-49c5-a2b3-d35d4040cb46",
  "/images/servicios/relleno-de-labios/paso-2.webp": "8fbedb6e-c0c9-4e62-9306-df884f8e37f9",
  "/images/servicios/relleno-de-labios/paso-3.webp": "108770e4-4cf8-4254-90a1-dcf2b5315b17",
  "/images/servicios/relleno-de-labios/resultado.webp": "08ce4f45-67e2-42ef-8a64-0f23d7400ddb",
  "/images/servicios/sculptra/hero.webp": "a661997f-dbb7-4cac-8924-8b7e4af6ec0e",
  "/images/servicios/skinbooster/hero.webp": "9ec999e8-bc86-4f66-97ba-6274cec9ba60",
  "/images/servicios/surcos-nasogenianos/hero.webp": "a4558889-f6ca-4ab7-b602-ca1f071f80df",
  "/images/servicios/toxina-bruxismo/hero.webp": "981b2a50-7a84-435b-982f-e88915641506",
};

const dir = "docs/blog/imagenes";
const todas = [];
for (const f of readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
  const slug = f.replace(/\.json$/, "");
  for (const b of JSON.parse(readFileSync(`${dir}/${f}`, "utf8"))) todas.push({ slug, ...b });
}

const lote = Number(process.argv[2] ?? 0);
const requests = todas.slice(lote * 12, lote * 12 + 12).map((b, i) => ({
  index: lote * 12 + i,
  params: {
    model: "gpt_image_2_5",
    quality: "high",
    resolution: "2k",
    aspect_ratio: b.aspect,
    prompt: `${b.prompt.trim()} No text, no logos, no product brand names.`,
    medias: b.referencias.slice(0, 5).map((r) => {
      if (!MEDIA[r]) throw new Error(`Sin media_id: ${r}`);
      return { role: "image_references", value: MEDIA[r] };
    }),
  },
}));

if (process.argv[3] === "--mapa") console.log(JSON.stringify(todas.map((b, i) => ({ i, slug: b.slug, archivo: b.archivo }))));
else console.log(JSON.stringify(requests));
