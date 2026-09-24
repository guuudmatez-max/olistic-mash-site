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

- Push su `main` → pubblicazione in produzione.
- Push su un altro branch o pull request → anteprima Netlify (deploy preview).

`node_modules/` e `dist/` non si committano: li genera Netlify a ogni build.
