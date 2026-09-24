# Sito di Giorgia Boccadifuoco

Sito statico multipagina: Vite + Tailwind 3 + PostCSS. Nessun CMS: si modifica con un commit.

## In locale

Serve Node 22.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/
npm run check      # controlla il sito in dist/: pagine, link, WhatsApp, parole vietate
npm test           # verifica che il controllo funzioni
npm run preview    # serve dist/ per controllare il build
```

## Dove si cambiano i dati

Nomi dei prodotti, prezzi, durate, WhatsApp, mail, zona, link al libro e date delle
Armonizzazioni stanno tutti in `src/data/site.js`. Nelle pagine si scrive
`{{ percorso.prezzo }}` e al build diventa il valore del file. Header, footer e date
sono generati al build da `src/build/layout.js`: nelle pagine basta
`<header data-site-header></header>` e `<footer data-site-footer></footer>`.

## Parole vietate e segnaposto

L'elenco delle parole e formule che non possono comparire sul sito sta in
`src/data/parole-vietate.txt`: una per riga, con il motivo. Si aggiorna lì.
«costellazioni familiari» è ammesso solo dentro le risposte della FAQ di Armonizzazioni
(elementi con `data-faq-risposta`), mai in title, meta description, titoli o indirizzi.

I dati che aspettano una conferma sono scritti `[IN SOSPESO: …]`. `npm run check` li
elenca come avvisi; `npm run check -- --pubblicazione` li tratta come errori.

## Pubblicazione

Il progetto Netlify `giorgia-unity-connection` pubblica da questo repository
(vedi `netlify.toml`). Se il controllo trova errori, la pubblicazione si ferma.

Questo repository è una copia (fork) di `fpglanza/olistic-mash-site`, il sito di Filo:
`origin` è la copia di Tommaso, `upstream` quella di Filo.

- Push su `redesign-2026-09` → pubblicazione su Netlify.
- Push su un altro branch o pull request → anteprima Netlify (deploy preview).

`node_modules/` e `dist/` non si committano: li genera Netlify a ogni build.
