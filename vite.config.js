// vite.config.js
import { defineConfig } from "vite";
import { renderPage } from "./src/build/layout.js";

export default defineConfig({
  root: ".", // root del progetto (dove sta index.html)

  // Header, footer, date e dati del sito scritti nell'HTML al build (src/build/layout.js)
  plugins: [{ name: "site-layout", transformIndexHtml: { order: "pre", handler: renderPage } }],

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        chiSono: "chi-sono.html",
        consulenzeUnity: "consulenze-unity.html",
        eventiGruppi: "eventi-gruppi.html",
        percorsiReiki: "percorsi-reiki.html",
        contatti: "contatti.html",
      },
    },
  },
});
