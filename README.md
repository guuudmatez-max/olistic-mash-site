# Sito di Giorgia Boccadifuoco

Sito statico multipagina: Vite + Tailwind 3 + PostCSS. Nessun CMS: si modifica con un commit.

## In locale

Serve Node 20.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/
npm run preview    # serve dist/ per controllare il build
```

## Pubblicazione

Il progetto Netlify `giorgia-unity-connection` pubblica da questo repository
(`npm run build`, cartella `dist`, vedi `netlify.toml`).

Questo repository è una copia (fork) di `fpglanza/olistic-mash-site`, il sito di Filo:
`origin` è la copia di Tommaso, `upstream` quella di Filo.

- Push su `redesign-2026-09` → pubblicazione su Netlify.
- Push su un altro branch o pull request → anteprima Netlify (deploy preview).

`node_modules/` e `dist/` non si committano: li genera Netlify a ogni build.
