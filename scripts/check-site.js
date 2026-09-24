// Controllo del sito costruito: si lancia dopo `npm run build` con `npm run check`.
// Guarda le pagine in dist/ come le riceve un visitatore o un motore di ricerca.
// Con `npm run check -- --pubblicazione` i segnaposto [IN SOSPESO: …] diventano errori.
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, posix } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parse } from "node-html-parser";
import { checkPerimetro, leggiRegole, trovaInSospeso } from "./perimetro.js";

export function checkSite(dir, { pages, whatsapp }) {
  const errors = [];
  for (const name of pages) {
    const file = join(dir, name);
    if (!existsSync(file)) {
      errors.push(`${name}: pagina mancante`);
      continue;
    }
    const doc = parse(readFileSync(file, "utf8"));
    if (!doc.querySelector("header.site-header")) errors.push(`${name}: header assente dall'HTML`);
    if (!doc.querySelector("footer.site-footer")) errors.push(`${name}: footer assente dall'HTML`);

    const hrefs = doc.querySelectorAll("a[href]").map((a) => a.getAttribute("href"));
    for (const h of hrefs.filter((h) => h.startsWith("https://wa.me/"))) {
      const number = h.slice("https://wa.me/".length).split("?")[0];
      if (number !== whatsapp) errors.push(`${name}: numero WhatsApp sbagliato ${number}`);
    }

    for (const h of hrefs) {
      if (/^([a-z]+:|\/\/|#)/i.test(h)) continue; // esterni, mailto, tel, ancore
      const path = decodeURIComponent(h.split(/[?#]/)[0]);
      if (!path) continue; // stessa pagina
      const target = posix.join(path.startsWith("/") ? "" : posix.dirname(name), path);
      const resolved = target === "" || target.endsWith("/") ? `${target}index.html` : target;
      const file = join(dir, resolved);
      if (!existsSync(file) || !statSync(file).isFile()) errors.push(`${name}: link interno rotto ${h}`);
    }
  }
  return errors;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const { default: config } = await import(pathToFileURL(join(root, "vite.config.js")).href);
  const { site } = await import(pathToFileURL(join(root, "src/data/site.js")).href);
  const pages = Object.values(config.build.rollupOptions.input);
  const dist = join(root, "dist");
  const regole = leggiRegole(readFileSync(join(root, "src/data/parole-vietate.txt"), "utf8"));
  const inSospeso = trovaInSospeso(dist, pages);
  const pubblicazione = process.argv.includes("--pubblicazione");
  const errors = [
    ...checkSite(dist, { pages, whatsapp: site.whatsapp }),
    ...checkPerimetro(dist, { pages, regole, armonizzazioni: "eventi-gruppi.html" }),
    ...(pubblicazione ? inSospeso : []),
  ];
  if (!pubblicazione) for (const w of inSospeso) console.warn(`⚠ in sospeso: ${w}`);
  for (const e of errors) console.error(`✖ ${e}`);
  console.log(errors.length ? `\n${errors.length} errori.` : `✓ ${pages.length} pagine controllate, nessun errore.`);
  process.exit(errors.length ? 1 : 0);
}
