---
name: site-teardown
description: Reverse-engineer a visual effect, animation, hover, scroll interaction or design detail from a live website by measuring it in a real browser instead of guessing. Extracts libraries in use (GSAP, ScrollTrigger, Lenis, Framer Motion, Swiper, Lottie...), design tokens, @keyframes, transitions, running animations with exact duration/easing/keyframes, GSAP tweens and ScrollTriggers, hover diffs and scroll-step screenshots. Use whenever the user shares a site URL as an example ("fai come questo sito", "com'è fatto questo effetto", "voglio questa animazione", "replica questa sezione") or asks how a site achieves something.
---

# site-teardown

Misura, non stimare. Ogni valore che proponi (durata, easing, distanza, colore, font) deve venire dal report. Se un valore non è nel report, dillo e spiega come lo misureresti.

## 1. Chiarisci cosa misurare

Serve l'URL e l'elemento. Se l'utente non indica l'elemento, fai una prima passata senza selettore, guarda `w1440-load.png` e chiedi quale parte vuole, oppure scegli tu quella che corrisponde alla descrizione.

## 2. Lancia lo script

```bash
node <percorso-skill>/scripts/teardown.mjs <url> --selector "<css>" --out <scratchpad>/teardown-<nome>
```

Opzioni:
- `--selector` elemento da analizzare: stili calcolati, hover, valori durante lo scroll. Trovalo da HTML/screenshot del primo giro.
- `--widths 1440,390` larghezze viewport (default desktop + telefono).
- `--scroll-steps 6` passi di scroll con screenshot. Alza a 12-20 per effetti legati allo scroll (pin, scrub, parallax).
- `--wait 1500` attesa dopo il caricamento in ms. Alza per intro lunghe.
- `--no-hover` salta l'hover.

Richiede Playwright con Chromium. Se manca: `npm i -g playwright && npx playwright install chromium`. Con un Chromium già installato altrove: `TEARDOWN_CHROMIUM=/percorso/chrome`.

Se il sito blocca il browser headless o la rete dell'ambiente rifiuta il dominio, riportalo all'utente. Non sostituire le misure con stime senza dirlo.

## 3. Leggi il report

Apri `summary.md`, poi gli screenshot rilevanti con Read. `report.json` ha tutti i dati se il riassunto taglia.

Come leggerlo:
- **Librerie**: decide lo strumento. GSAP/ScrollTrigger → ricostruisci con GSAP. Nessuna libreria → CSS o Web Animations. `framerMotion`/`animateCalls` → valori da Element.animate.
- **Tween GSAP creati**: valori esatti passati a `gsap.to/from/fromTo` e `tl.to/...`, con ease e stagger. `ƒ` = valore calcolato da una funzione, quindi deducilo dagli stati misurati.
- **ScrollTrigger attivi**: start/end/scrub/pin e i tween collegati.
- **CSS di movimento**: `@keyframes` e regole `transition/animation` trovate nei fogli di stile.
- **Animazioni al caricamento / all'hover / per passo di scroll**: `document.getAnimations()` con durata, delay, easing e keyframe misurati.
- **Hover su ... cambia**: proprietà che cambiano all'hover, con valori prima e dopo.
- **Scroll**: opacity/transform/filter/clip-path del selettore a ogni passo. Con scrub, i valori tra i passi sono interpolati: aumenta i passi per vedere la curva.
- **Token**: font, scale tipografiche, colori, raggi, ombre e variabili CSS ricorrenti.

Limiti noti: animazioni su canvas/WebGL (three, ogl, pixi) non sono leggibili come proprietà, descrivile dagli screenshot. Effetti guidati da `requestAnimationFrame` senza GSAP compaiono solo come cambi negli stili del selettore.

## 4. Ricostruisci

1. Scrivi all'utente cosa hai misurato, con i valori. Separa misurato da dedotto.
2. Implementa nel progetto con gli stessi valori. Adatta i token al design del progetto (colori, font) solo se l'utente non ha chiesto una copia fedele.
3. Verifica: lancia lo script sulla tua versione in locale (es. `npm run dev` o `vite preview`) con lo stesso selettore e confronta durate, easing e stati. Correggi le differenze.

Non copiare testi, immagini, loghi o codice proprietario del sito: si ricostruisce il comportamento, non si duplica il contenuto.
