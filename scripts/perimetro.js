// Controllo del perimetro: parole vietate (src/data/parole-vietate.txt), la regola
// speciale su «costellazioni familiari» e i segnaposto [IN SOSPESO: …].
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "node-html-parser";

const COSTELLAZIONI = /costellazion\w*\s+familiar\w*/iu;
const HEADINGS = "h1,h2,h3,h4,h5,h6";

// Una regola per riga: "espressione # motivo". Uno spazio vale per qualsiasi spazio o a
// capo. Dove la regola inizia o finisce con una parola, deve combaciare con parole intere
// (così "hamer" non trova "Hamerson" e "5 leggi" non trova "15 leggi").
export function leggiRegole(text) {
  return text.split("\n").flatMap((line, i) => {
    line = line.trim();
    if (!line || line.startsWith("#")) return [];
    const [pattern, motivo = "parola vietata"] = line.split(" # ").map((s) => s.trim());
    const start = /^[\p{L}\d(\\]/u.test(pattern) ? "(?<![\\p{L}\\d])" : "";
    const end = /[\p{L})]$/u.test(pattern) ? "(?![\\p{L}\\d])" : "";
    const body = pattern.replace(/ (?![?*+{])/g, "\\s+");
    try {
      return [{ re: new RegExp(`${start}(?:${body})${end}`, "iu"), motivo }];
    } catch (e) {
      throw new Error(`parole-vietate.txt, riga ${i + 1}: regola non valida «${pattern}» (${e.message})`);
    }
  });
}

// Tutti i valori di testo dentro i dati strutturati (JSON-LD), che i motori leggono.
const valoriJson = (v) =>
  typeof v === "string" ? [v] : v && typeof v === "object" ? Object.values(v).flatMap(valoriJson) : [];

function leggiPagina(dir, name) {
  const doc = parse(readFileSync(join(dir, name), "utf8"));
  const jsonLd = doc.querySelectorAll('script[type="application/ld+json"]').flatMap((s) => {
    try {
      return valoriJson(JSON.parse(s.text));
    } catch {
      return [s.text];
    }
  });
  doc.querySelectorAll("script, style, noscript, template").forEach((el) => el.remove());
  const body = doc.querySelector("body") ?? doc;
  return {
    body,
    title: doc.querySelector("title")?.text ?? "",
    meta: doc
      .querySelectorAll('meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]')
      .map((m) => m.getAttribute("content") ?? "")
      .join("\n"),
    attributi: body
      .querySelectorAll("[alt], [aria-label], [title]")
      .flatMap((el) => ["alt", "aria-label", "title"].map((a) => el.getAttribute(a) ?? ""))
      .join("\n"),
    datiStrutturati: jsonLd.join("\n"),
  };
}

export function checkPerimetro(dir, { pages, regole, armonizzazioni }) {
  const errors = [];
  for (const name of pages) {
    const { body, title, meta, attributi, datiStrutturati } = leggiPagina(dir, name);
    const testo = [title, meta, attributi, datiStrutturati, body.structuredText].join("\n");

    for (const { re, motivo } of regole) {
      const m = testo.match(re);
      if (m) errors.push(`${name}: «${m[0].replace(/\s+/g, " ")}» (${motivo})`);
    }

    // «costellazioni familiari»: mai in title, meta, titoli, indirizzi; nel testo solo
    // dentro le risposte della FAQ di Armonizzazioni (e nei suoi dati strutturati FAQ).
    const fuori = (dove) => errors.push(`${name}: «costellazioni familiari» ${dove}`);
    if (COSTELLAZIONI.test(title)) fuori("nel title");
    if (COSTELLAZIONI.test(meta)) fuori("nella meta description");
    if (body.querySelectorAll(HEADINGS).some((h) => COSTELLAZIONI.test(h.text))) fuori("in un titolo");
    const hrefs = body.querySelectorAll("a[href]").map((a) => a.getAttribute("href"));
    if (/costellazion/i.test(name) || hrefs.some((h) => /costellazion/i.test(h))) fuori("in un indirizzo");
    const faq = name === armonizzazioni;
    body.querySelectorAll((faq ? "[data-faq-risposta], " : "") + HEADINGS).forEach((el) => el.remove());
    const resto = [attributi, faq ? "" : datiStrutturati, body.structuredText].join("\n");
    if (COSTELLAZIONI.test(resto)) fuori("fuori dalla FAQ di Armonizzazioni");
  }
  return errors;
}

// Decodifica solo i pezzi codificati (%5B…, + negli indirizzi): un "%" isolato nel CSS
// non deve impedire di leggere il resto della pagina.
const decodifica = (raw) =>
  raw
    .replace(/href="[^"]*"/g, (h) => h.replace(/\+/g, " "))
    .replace(/(%[0-9a-f]{2})+/gi, (s) => {
      try {
        return decodeURIComponent(s);
      } catch {
        return s;
      }
    });

export function trovaInSospeso(dir, pages) {
  return pages.flatMap((name) => {
    const found = new Set(decodifica(readFileSync(join(dir, name), "utf8")).match(/\[IN SOSPESO:[^\]]*\]/g) ?? []);
    return [...found].map((s) => `${name}: ${s}`);
  });
}
