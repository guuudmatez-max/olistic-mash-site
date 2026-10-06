// Parti comuni generate al build (header, footer, date delle Armonizzazioni, link
// WhatsApp, valori del file di dati): finiscono già scritte nell'HTML, senza JavaScript.
import { site } from "../data/site.js";
import * as icone from "simple-icons";

// Le pagine principali (piede, mappa del sito)
const MENU = [
  { label: "Home", href: "/" },
  { label: "Chi sono", href: "/chi-sono.html" },
  { label: "Consulenze Individuali", href: "/consulenze-unity.html" },
  { label: "Armonizzazioni di Gruppo", href: "/eventi-gruppi.html" },
];

// Il menu in alto: quattro voci, «Servizi» apre le due pagine dei servizi
const SERVIZI = MENU.slice(2);
const voceServizi = `<li class="nav__gruppo">
  <button class="nav__link nav__apri" type="button" aria-expanded="false" aria-haspopup="true">Servizi</button>
  <ul class="nav__sotto">${SERVIZI.map((l) => `<li><a class="nav__link" href="${l.href}">${l.label}</a></li>`).join("")}</ul>
</li>`;

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
    <div class="nav__mobile md:hidden">
      <a href="/" class="nav__logo"><img src="/assets/img/gold.png" alt="${escapeHtml(site.nome)}" class="nav__logo-img" /></a>
      <button class="nav__toggle" type="button" aria-label="Apri il menu" aria-expanded="false">
        <span class="nav__toggle-lines">
          <span class="nav__toggle-line"></span><span class="nav__toggle-line"></span><span class="nav__toggle-line"></span>
        </span>
      </button>
    </div>
    <nav class="nav__desktop" aria-label="Menu principale">
      <ul class="nav__desktop-left">${menuLinks(MENU.slice(0, 2))}</ul>
      <a href="/" class="nav__logo mx-12"><img src="/assets/img/gold.png" alt="${escapeHtml(site.nome)}" class="nav__logo-img" /></a>
      <ul class="nav__desktop-right">${voceServizi}${menuLinks([{ label: "Contatti", href: "/contatti.html" }])}</ul>
    </nav>
    <ul class="nav__links md:hidden">${menuLinks(MENU.slice(0, 2))}<li class="nav__etichetta-mobile">Servizi</li>${menuLinks(SERVIZI)}${menuLinks([{ label: "Contatti", href: "/contatti.html" }])}</ul>
  </div>
</header>`;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  const esterno = 'target="_blank" rel="noopener noreferrer"';
  return `<footer class="site-footer piede">
  <div class="piede__banda">
    <div class="piede__griglia">
      <div class="piede__invito">
        <p class="piede__titolo">Un messaggio basta, per iniziare.</p>
        <a class="btn btn-chiaro" href="${whatsappUrl("generico")}" ${esterno}>Scrivimi su WhatsApp</a>
        <div class="piede__icone">
          ${site.social
            .map((p) => {
              const i = icone[p.icona];
              if (!i) throw new Error(`Icona sconosciuta: ${p.icona} (vedi simple-icons)`);
              return `<a href="${p.url}" ${esterno} aria-label="${escapeHtml(p.nome)}" title="${escapeHtml(p.nome)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${i.path}"/></svg></a>`;
            })
            .join("")}
        </div>
      </div>
      <nav class="piede__colonna" aria-label="Pagine">
        <p class="piede__etichetta">Il sito</p>
        ${MENU.map((l) => `<a href="${l.href}">${l.label}</a>`).join("")}
        <a href="/contatti.html">Contatti</a>
      </nav>
      <div class="piede__colonna">
        <p class="piede__etichetta">Altro</p>
        <a href="${site.libroAmazon.url}" ${esterno}>Il libro «${escapeHtml(site.libroAmazon.titolo)}»</a>
        <a href="${site.privacy}" ${esterno}>Privacy</a>
        <a href="${site.cookie}" ${esterno}>Cookie</a>
      </div>
      <div class="piede__dati">
        <p class="piede__etichetta">Dati</p>
        <p>${escapeHtml(site.nome)} · P.IVA ${site.piva}</p>
        ${site.sedeLegale ? `<p>${escapeHtml(site.sedeLegale)}</p>` : ""}
        <p>© ${year}</p>
        <p class="piede__disclaimer">${escapeHtml(site.disclaimer)}</p>
      </div>
    </div>
    <p class="piede__firma" aria-hidden="true">Giorgia <em>Boccadifuoco</em></p>
  </div>
</footer>`;
}

export function renderEvents(eventi = site.armonizzazioni.date) {
  if (!eventi.length) {
    return `<p class="col-span-full text-center text-sm text-[var(--color-text-muted)]">
  Le prossime date sono in arrivo. <a href="${whatsappUrl("armonizzazioni")}" target="_blank" rel="noopener noreferrer">Scrivimi su WhatsApp</a> per sapere quando.
</p>`;
  }
  const { orario, prezzo, posti } = site.armonizzazioni;
  return eventi
    .map((ev) => {
      const [y, m, d] = ev.data.split("-");
      const label = `${Number(d)} ${MESI[Number(m) - 1]} ${y}`;
      return `<article class="rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-6 shadow-sm">
  <h3 class="text-base font-semibold"><time datetime="${ev.data}">${label}</time> · ${escapeHtml(ev.luogo)}</h3>
  <p class="mt-2 text-sm text-[var(--color-text-muted)]">${escapeHtml(`${orario} · ${prezzo} · ${posti}`)}</p>
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
    .replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, path) => lookup(path))
    .replace(/<header data-site-header><\/header>/, renderHeader)
    .replace(/<footer data-site-footer><\/footer>/, renderFooter)
    .replace(/(<div id="events-list"[^>]*>)(<\/div>)/, (_, open, close) => open + renderEvents() + close)
    .replace(/<a\b([^>]*?)\sdata-wa-key="([^"]+)"([^>]*)>/g, (_, before, key, after) => {
      const attrs = (before + after).replace(/\s(href|target|rel)="[^"]*"/g, "");
      const extra = attrs.match(/\sdata-wa-text="([^"]*)"/)?.[1] ?? "";
      const rest = attrs.replace(/\sdata-wa-text="[^"]*"/, "");
      return `<a${rest} href="${whatsappUrl(key, extra)}" target="_blank" rel="noopener noreferrer">`;
    });
}
