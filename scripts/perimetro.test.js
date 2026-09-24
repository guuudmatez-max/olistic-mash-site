import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { leggiRegole, checkPerimetro, trovaInSospeso } from "./perimetro.js";

const regole = leggiRegole(readFileSync(new URL("../src/data/parole-vietate.txt", import.meta.url), "utf8"));
const ARMONIZZAZIONI = "eventi-gruppi.html";

function site(files) {
  const dir = mkdtempSync(join(tmpdir(), "perimetro-"));
  for (const [name, html] of Object.entries(files)) writeFileSync(join(dir, name), html);
  return dir;
}
const page = (body, head = "<title>Pagina</title>") => `<html><head>${head}</head><body>${body}</body></html>`;
const errori = (body, head) =>
  checkPerimetro(site({ "index.html": page(body, head) }), { pages: ["index.html"], regole, armonizzazioni: ARMONIZZAZIONI });

test("il file delle regole si legge: una regola per riga, motivo dopo #, commenti ignorati", () => {
  const r = leggiRegole("# commento\n\ntarocchi # fonte interna\n");
  assert.equal(r.length, 1);
  assert.equal(r[0].motivo, "fonte interna");
  assert.ok(r[0].re.test("I Tarocchi"));
});

test("un testo pulito non ha errori", () => {
  assert.deepEqual(errori("<p>Un incontro per capire cosa si ripete nelle tue relazioni.</p>"), []);
});

for (const vietato of [
  "Hamer",
  "le cinque leggi biologiche",
  "le 5 leggi",
  "la Nuova Medicina Germanica",
  "tarocchi",
  "numerologia",
  "il simbolo di Unity Connection",
  "il rituale di Unity Connection",
  "l'iniziazione a Unity Connection",
  "più veloce di un percorso",
  "a differenza della terapia",
  "prima di andare dallo psicologo",
  "Siamo guariti dal cancro",
  "il libro di Sergio Signori",
  "incontro Conoscitiva",
  "una pausa — poi",
  "“così”",
  '"così"',
  "nel 90% dei casi",
]) {
  test(`segnala: ${vietato}`, () => {
    const e = errori(`<p>${vietato}</p>`);
    assert.equal(e.length, 1, e.join("\n"));
    assert.match(e[0], /^index\.html: /);
  });
}

test("non scambia parole simili per vietate", () => {
  assert.deepEqual(errori("<p>Hamerson, l'apostrofo, 90 minuti, a differenza delle costellazioni…</p>"), []);
});

test("controlla anche title e meta description", () => {
  assert.equal(errori("<p>ok</p>", '<title>Tarocchi</title><meta name="description" content="numerologia">').length, 2);
});

test("ignora script e attributi, dove non c'è testo per il visitatore", () => {
  assert.deepEqual(errori('<script>const a = "x";</script><a href="/" class="x">ok</a>'), []);
});

test("costellazioni familiari: ammesse solo nel corpo della FAQ di Armonizzazioni", () => {
  const ok = page('<h1>Armonizzazioni</h1><div data-faq-risposta><p>Non sono costellazioni familiari.</p></div>');
  const noFaq = page("<p>Come le costellazioni familiari.</p>");
  const titolo = page('<h2>Costellazioni familiari</h2><div data-faq-risposta><h3>costellazioni familiari?</h3></div>');
  const meta = page("<p>ok</p>", '<title>Costellazioni familiari</title><meta name="description" content="costellazioni familiari">');
  const altraPagina = page('<div data-faq-risposta>costellazioni familiari</div>');
  const dir = site({ [ARMONIZZAZIONI]: ok, "a.html": noFaq, "b.html": titolo, "c.html": meta, "d.html": altraPagina });
  const e = checkPerimetro(dir, { pages: [ARMONIZZAZIONI, "a.html", "b.html", "c.html", "d.html"], regole, armonizzazioni: ARMONIZZAZIONI });
  assert.deepEqual(e.map((x) => x.split(":")[0]), ["a.html", "b.html", "c.html", "c.html", "d.html"]);
});

test("costellazioni familiari mai nell'indirizzo di una pagina", () => {
  const dir = site({ "index.html": page('<a href="/costellazioni-familiari.html">x</a>') });
  assert.equal(checkPerimetro(dir, { pages: ["index.html"], regole, armonizzazioni: ARMONIZZAZIONI }).length, 1);
});

test("trova i segnaposto IN SOSPESO nel testo e nei link WhatsApp", () => {
  const dir = site({
    "index.html": page('<p>Incontro di mappatura [IN SOSPESO: nome]</p><a href="https://wa.me/39?text=%5BIN%20SOSPESO%3A%207.5%5D">x</a>'),
  });
  assert.deepEqual(trovaInSospeso(dir, ["index.html"]), ["index.html: [IN SOSPESO: nome]", "index.html: [IN SOSPESO: 7.5]"]);
});
