// Controllo del perimetro: parole vietate (src/data/parole-vietate.txt), la regola
// speciale su «costellazioni familiari» e i segnaposto [IN SOSPESO: …].
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "node-html-parser";

const COSTELLAZIONI = /costellazion\w* familiar\w*/i;
const HEADINGS = "h1,h2,h3,h4,h5,h6";

// Una regola per riga: "espressione # motivo". Dove la regola inizia o finisce con una
// lettera, deve combaciare con una parola intera (così "hamer" non trova "Hamerson").
export function leggiRegole(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [pattern, motivo = "parola vietata"] = line.split(" # ").map((s) => s.trim());
      const start = /^\p{L}/u.test(pattern) ? "(?<!\\p{L})" : "";
      const end = /\p{L}$/u.test(pattern) ? "(?!\\p{L})" : "";
      return { re: new RegExp(`${start}(?:${pattern})${end}`, "iu"), motivo };
    });
}

function leggiPagina(dir, name) {
  const doc = parse(readFileSync(join(dir, name), "utf8"));
  doc.querySelectorAll("script, style, noscript, template").forEach((el) => el.remove());
  return doc;
}

export function checkPerimetro(dir, { pages, regole, armonizzazioni }) {
  const errors = [];
  for (const name of pages) {
    const doc = leggiPagina(dir, name);
    const body = doc.querySelector("body") ?? doc;
    const title = doc.querySelector("title")?.text ?? "";
    const meta = doc.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
    const testo = [title, meta, body.structuredText].join("\n");

    for (const { re, motivo } of regole) {
      const m = testo.match(re);
      if (m) errors.push(`${name}: «${m[0]}» (${motivo})`);
    }

    // «costellazioni familiari»: mai in title, meta, titoli, indirizzi; nel testo solo
    // dentro le risposte della FAQ di Armonizzazioni.
    const fuori = (dove) => errors.push(`${name}: «costellazioni familiari» ${dove}`);
    if (COSTELLAZIONI.test(title)) fuori("nel title");
    if (COSTELLAZIONI.test(meta)) fuori("nella meta description");
    if (body.querySelectorAll(HEADINGS).some((h) => COSTELLAZIONI.test(h.text))) fuori("in un titolo");
    const hrefs = body.querySelectorAll("a[href]").map((a) => a.getAttribute("href"));
    if (/costellazion/i.test(name) || hrefs.some((h) => /costellazion/i.test(h))) fuori("in un indirizzo");
    body.querySelectorAll(HEADINGS).forEach((h) => h.remove());
    if (name === armonizzazioni) body.querySelectorAll("[data-faq-risposta]").forEach((el) => el.remove());
    if (COSTELLAZIONI.test(body.structuredText)) fuori("fuori dalla FAQ di Armonizzazioni");
  }
  return errors;
}

export function trovaInSospeso(dir, pages) {
  return pages.flatMap((name) => {
    const raw = readFileSync(join(dir, name), "utf8");
    let html = raw;
    try {
      html = decodeURIComponent(raw);
    } catch {} // un "%" isolato nella pagina: si cerca nel testo così com'è
    const found = new Set(html.match(/\[IN SOSPESO:[^\]]*\]/g) ?? []);
    return [...found].map((s) => `${name}: ${s}`);
  });
}
