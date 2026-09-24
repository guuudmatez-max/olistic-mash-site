// Controllo del sito costruito: si lancia dopo `npm run build` con `npm run check`.
// Guarda le pagine in dist/ come le riceve un visitatore o un motore di ricerca.
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, posix } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node-html-parser";

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
    const wa = hrefs.filter((h) => h.startsWith("https://wa.me/"));
    if (!wa.length) errors.push(`${name}: nessun link WhatsApp`);
    for (const h of wa) {
      const number = h.slice("https://wa.me/".length).split("?")[0];
      if (number !== whatsapp) errors.push(`${name}: numero WhatsApp sbagliato ${number}`);
    }

    for (const h of hrefs) {
      if (/^([a-z]+:|\/\/|#)/i.test(h)) continue; // esterni, mailto, tel, ancore
      const path = h.split(/[?#]/)[0];
      const target = posix.join(path.startsWith("/") ? "" : posix.dirname(name), path);
      const resolved = target === "" || target.endsWith("/") ? `${target}index.html` : target;
      if (!existsSync(join(dir, resolved))) errors.push(`${name}: link interno rotto ${h}`);
    }
  }
  return errors;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const { default: config } = await import(join(root, "vite.config.js"));
  const { site } = await import(join(root, "src/data/site.js"));
  const pages = Object.values(config.build.rollupOptions.input);
  const errors = checkSite(join(root, "dist"), { pages, whatsapp: site.whatsapp });
  for (const e of errors) console.error(`✖ ${e}`);
  console.log(errors.length ? `\n${errors.length} errori.` : `✓ ${pages.length} pagine controllate, nessun errore.`);
  process.exit(errors.length ? 1 : 0);
}
