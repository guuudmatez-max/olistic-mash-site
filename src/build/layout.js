// Parti comuni generate al build (header, footer, date delle Armonizzazioni, link
// WhatsApp, valori del file di dati): finiscono già scritte nell'HTML, senza JavaScript.
import { site } from "../data/site.js";

const MENU = [
  { label: "Home", href: "/" },
  { label: "Chi sono", href: "/chi-sono.html" },
  { label: "Consulenze Individuali", href: "/consulenze-unity.html" },
  { label: "Armonizzazioni di Gruppo", href: "/eventi-gruppi.html" },
];

const MESI = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];

const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function whatsappUrl(key, extraText = "") {
  const base = site.messaggiWhatsapp[key];
  if (base === undefined) throw new Error(`Messaggio WhatsApp sconosciuto: "${key}" (vedi src/data/site.js)`);
  const text = `${base} ${extraText}`.trim();
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

const menuLinks = (items) => items.map((l) => `<li><a class="nav__link" href="${l.href}">${l.label}</a></li>`).join("");

export function renderHeader() {
  return `<header class="site-header">
  <div class="nav container">
    <div class="nav__mobile flex items-center justify-center gap-4 w-full md:hidden">
      <a href="/" class="nav__logo"><img src="/assets/img/gold.png" alt="${site.nome}" class="nav__logo-img" /></a>
      <button class="nav__toggle" type="button" aria-label="Apri il menu" aria-expanded="false">
        <span class="nav__toggle-lines">
          <span class="nav__toggle-line"></span><span class="nav__toggle-line"></span><span class="nav__toggle-line"></span>
        </span>
      </button>
    </div>
    <nav class="nav__desktop hidden md:flex items-center justify-center w-full" aria-label="Menu principale">
      <ul class="nav__desktop-left flex items-center gap-6">${menuLinks(MENU.slice(0, 2))}</ul>
      <a href="/" class="nav__logo mx-10"><img src="/assets/img/gold.png" alt="${site.nome}" class="nav__logo-img" /></a>
      <ul class="nav__desktop-right flex items-center gap-6">${menuLinks(MENU.slice(2))}</ul>
    </nav>
    <ul class="nav__links md:hidden">${menuLinks(MENU)}</ul>
  </div>
</header>`;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer py-10">
  <div class="container text-center space-y-3">
    <p>
      <a href="${whatsappUrl("generico")}" target="_blank" rel="noopener noreferrer">Scrivimi su WhatsApp</a>
      · <a href="/contatti.html">Contatti</a>
      · <a href="${site.libroAmazon.url}" target="_blank" rel="noopener noreferrer">Il libro «${site.libroAmazon.titolo}» su Amazon</a>
    </p>
    <p class="small">${escapeHtml(site.disclaimer)}</p>
    <p class="small opacity-80">
      © ${year} ${site.nome} · P.IVA ${site.piva}
      · <a href="${site.privacy}" target="_blank" rel="noopener noreferrer">Privacy</a>
      · <a href="${site.cookie}" target="_blank" rel="noopener noreferrer">Cookie</a>
    </p>
  </div>
</footer>`;
}

export function renderEvents(date = site.armonizzazioni.date) {
  if (!date.length) {
    return `<p class="col-span-full text-center text-sm text-[var(--color-text-muted)]">
  Le prossime date sono in arrivo. <a href="${whatsappUrl("armonizzazioni")}" target="_blank" rel="noopener noreferrer">Scrivimi su WhatsApp</a> per sapere quando.
</p>`;
  }
  const a = site.armonizzazioni;
  return date
    .map((ev) => {
      const [y, m, d] = ev.data.split("-");
      const label = `${Number(d)} ${MESI[Number(m) - 1]} ${y}`;
      return `<article class="rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-6 shadow-sm">
  <h3 class="text-base font-semibold"><time datetime="${ev.data}">${label}</time> · ${escapeHtml(ev.luogo)}</h3>
  <p class="mt-2 text-sm text-[var(--color-text-muted)]">${a.orario} · ${a.prezzo} · ${a.posti}</p>
  <a class="btn mt-4" href="${whatsappUrl("armonizzazioni", `Mi interessa la data del ${label}.`)}" target="_blank" rel="noopener noreferrer">Prenota su WhatsApp</a>
</article>`;
    })
    .join("\n");
}

function lookup(path) {
  const value = path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), site);
  if (value === undefined || typeof value === "object") throw new Error(`Valore sconosciuto nel file di dati: {{ ${path} }}`);
  return escapeHtml(value);
}

// Trasforma una pagina HTML sorgente nella pagina con le parti comuni già scritte.
export function renderPage(html) {
  return html
    .replace(/<header data-site-header><\/header>/, renderHeader)
    .replace(/<footer data-site-footer><\/footer>/, renderFooter)
    .replace(/(<div id="events-list"[^>]*>)(<\/div>)/, (_, open, close) => open + renderEvents() + close)
    .replace(/<a\b([^>]*?)\sdata-wa-key="([^"]+)"([^>]*)>/g, (_, before, key, after) => {
      const attrs = (before + after).replace(/\s(href|target|rel)="[^"]*"/g, "");
      const extra = attrs.match(/\sdata-wa-text="([^"]*)"/)?.[1] ?? "";
      const rest = attrs.replace(/\sdata-wa-text="[^"]*"/, "");
      return `<a${rest} href="${whatsappUrl(key, extra)}" target="_blank" rel="noopener noreferrer">`;
    })
    .replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, path) => lookup(path));
}
