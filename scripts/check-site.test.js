import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { checkSite } from "./check-site.js";

const WA = "393495463549";
const header = `<header class="site-header"><a href="/">Home</a></header>`;
const footer = `<footer class="site-footer"><a href="https://wa.me/${WA}?text=Ciao">WhatsApp</a></footer>`;
const page = (body = "") => `<html><body>${header}${body}${footer}</body></html>`;

function site(files) {
  const dir = mkdtempSync(join(tmpdir(), "site-"));
  for (const [name, html] of Object.entries(files)) writeFileSync(join(dir, name), html);
  return dir;
}

const opts = { pages: ["index.html", "chi-sono.html"], whatsapp: WA };

test("un sito corretto non ha errori", () => {
  const dir = site({ "index.html": page(`<a href="chi-sono.html#storia">x</a>`), "chi-sono.html": page() });
  assert.deepEqual(checkSite(dir, opts), []);
});

test("segnala una pagina prevista che manca", () => {
  const dir = site({ "index.html": page() });
  assert.deepEqual(checkSite(dir, opts), ["chi-sono.html: pagina mancante"]);
});

test("segnala un link interno verso una pagina che non esiste", () => {
  const dir = site({ "index.html": page(`<a href="/percorsi.html">x</a><a href="/">x</a>`), "chi-sono.html": page() });
  assert.deepEqual(checkSite(dir, opts), ["index.html: link interno rotto /percorsi.html"]);
});

test("un link a una cartella senza pagina è rotto", () => {
  const dir = site({ "index.html": page(`<a href="/blog/">x</a>`), "chi-sono.html": page() });
  mkdirSync(join(dir, "blog"));
  assert.deepEqual(checkSite(dir, opts), ["index.html: link interno rotto /blog/"]);
});

test("segnala header o footer assenti dall'HTML", () => {
  const dir = site({ "index.html": `<html><body>${footer}</body></html>`, "chi-sono.html": `<html><body>${header}</body></html>` });
  assert.deepEqual(checkSite(dir, opts), [
    "index.html: header assente dall'HTML",
    "chi-sono.html: footer assente dall'HTML",
  ]);
});

test("segnala un numero WhatsApp diverso da quello del file di dati", () => {
  const dir = site({ "index.html": page(`<a href="https://wa.me/393494157836?text=x">x</a>`), "chi-sono.html": page() });
  assert.deepEqual(checkSite(dir, opts), ["index.html: numero WhatsApp sbagliato 393494157836"]);
});
