---
name: Giorgia Boccadifuoco
description: Sito di Giorgia Boccadifuoco: bianco puro e oro, accento bordeaux, tinte pastello, titoli Bodoni, fasce staccate dai bordi.
colors:
  oro: "#C9A15C"
  oro-inchiostro: "#8A6526"
  bordeaux: "#6E1F33"
  vino: "#5A1828"
  bianco: "#FFFFFF"
  avorio: "#FAF7F2"
  tinta-oro: "#F6ECD3"
  tinta-cipria: "#F4E3E1"
  testo: "#2A2220"
  testo-morbido: "#5E5450"
  su-vino: "#FBF8F3"
  su-vino-morbido: "#E9D6D8"
typography:
  display:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.3rem, 1.6rem + 3.5vw, 4.1rem)"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "\"opsz\" 11"
  display-apertura:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(4.25rem, 1rem + 5.6vw, 7.5rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "\"opsz\" 11"
  firma:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.8rem, 0.4rem + 8.2vw, 9.6rem)"
    fontWeight: 650
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "\"opsz\" 11"
  headline:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2rem, 1.45rem + 2.4vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 11"
  title-card:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(1.6rem, 1.3rem + 1vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 11"
  title:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(1.35rem, 1.2rem + 0.6vw, 1.7rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 11"
  quote-card:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 550
    lineHeight: 1.28
    fontVariation: "\"opsz\" 11"
  lead:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.975rem"
    fontWeight: 600
    lineHeight: 1.2
  small-strong:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  label:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
rounded:
  pannello: "18px"
  card: "20px"
  foto: "1.5rem"
  foto-interna: "14px"
  banda: "clamp(18px, 1rem + 1vw, 28px)"
  pill: "999px"
spacing:
  sezione-y: "clamp(5rem, 3.5rem + 6vw, 9.5rem)"
  gutter: "clamp(1.25rem, 0.8rem + 2vw, 2.5rem)"
  banda-margine: "clamp(0.5rem, 0.2rem + 1vw, 1.25rem)"
  contenitore: "1180px"
  misura: "64ch"
components:
  button-primary:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.testo}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 3.8rem 0.75rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.bianco}"
  button-secondary:
    backgroundColor: "{colors.tinta-oro}"
    textColor: "{colors.testo}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 3.8rem 0.75rem 1.5rem"
    height: "3.25rem"
  button-chiaro:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.testo}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 3.8rem 0.75rem 1.5rem"
    height: "3.25rem"
  servizio-oro:
    backgroundColor: "{colors.tinta-oro}"
    textColor: "{colors.testo}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
  servizio-cipria:
    backgroundColor: "{colors.tinta-cipria}"
    textColor: "{colors.testo}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
  servizio-hover:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.bianco}"
  tema:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.testo}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.15rem"
  faq-riga:
    backgroundColor: "{colors.avorio}"
    textColor: "{colors.testo}"
    rounded: "26px"
    padding: "0.8rem 4rem 0.8rem 1.5rem"
    height: "3.5rem"
  faq-riga-aperta:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.bianco}"
  faq-risposta:
    backgroundColor: "{colors.tinta-oro}"
    textColor: "{colors.testo}"
    padding: "1rem 1.5rem 1.4rem"
  disclaimer:
    backgroundColor: "{colors.avorio}"
    textColor: "{colors.testo}"
    rounded: "{rounded.pannello}"
    padding: "1.4rem 1.6rem"
  porta:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.testo}"
    rounded: "{rounded.pannello}"
    padding: "clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)"
  campo-mail:
    backgroundColor: "{colors.avorio}"
    textColor: "{colors.testo}"
    rounded: "{rounded.pill}"
    padding: "0.35rem"
  piede:
    backgroundColor: "{colors.vino}"
    textColor: "{colors.su-vino}"
    rounded: "{rounded.banda}"
---

# Design System: Giorgia Boccadifuoco

## Overview

**Creative North Star: "Il servizio di rivista, alla luce del giorno"**

Il sito è il ritratto editoriale di una persona: titoli Bodoni grandi, Giorgia scontornata al centro della scena, foto che respirano. Su questa base Tommaso ha scelto una luce piena: pagina bianca, sezioni avorio alterne, oro per agire e per i filetti, un bordeaux preso dallo scialle delle foto per dare contrasto, tinte pastello d'oro e di cipria per card, pillole e fasce. Il riferimento per spaziatura, impaginazione, card che reagiscono al passaggio, fasce arrotondate staccate dai bordi e fondi sfumati è il sito Mantality (21st.app).

La densità resta bassa: sezioni ariose, una frase grande per idea, poche cose per schermata. Il carattere viene dalle superfici morbide (tinte, sfumati, angoli tondi) e da un unico gesto che si ripete: un cerchio bordeaux che, al passaggio, si allarga fino a riempire il bottone o la card. Tutte le foto passano per la stessa resa calda. Il sito non pubblica prezzi.

Rifiuti confermati: la griglia di card uguali con icona, i bottoni urlati, il tono "troppo marketing, troppo template".

**Key Characteristics:**
- Bianco puro alternato ad avorio; tinte pastello oro e cipria per card, pillole e fasce chiare.
- Oro come superficie del bottone e come filo; bordeaux come contrasto che agisce; vino per le rare fasce scure.
- Bodoni Moda pieno (600, display 650) con ottica «testo» fissa; Inter per il resto.
- Il cerchio bordeaux che si allarga: bottoni e card di servizio rispondono tutti allo stesso modo.
- Fasce staccate dai bordi della finestra, con angoli fino a 28px.
- Una sola resa per tutte le foto (`--grado-foto`).

## Colors

Luminosa e calda: bianco, avorio e due tinte pastello come fondo; oro e bordeaux come le sole voci che agiscono.

### Primary
- **Oro Giorgia** (`--color-primary`): fondo del bottone principale, filetti, corsivo dei titoli e della firma sulle fasce vino, etichette delle colonne del piede, anello del campo mail a fuoco, casella di consenso spuntata. Mai testo su fondo chiaro.
- **Oro Inchiostro** (`--color-gold-ink`): il corsivo dei titoli su fondo chiaro (4.8:1 sul bianco) e il bordo della casella di consenso.

### Secondary
- **Bordeaux Scialle** (`--color-bordeaux`): il contrasto. Cerchio con freccia di bottoni e card di servizio e il riempimento al passaggio; riga FAQ aperta e pulsante tondo della FAQ; link (600); la card centrale del ventaglio; icona del disclaimer; contorno del focus; cursore.
- **Vino** (`--color-bordeaux-scuro`, `--color-earth`): fondo delle fasce scure (sezione scura e piede) e attesa del video.

### Tertiary
- **Tinta Oro** (`--tinta-oro`): card di servizio, bottone secondario, risposta FAQ aperta, fascia delle due porte, pillole e card del ventaglio, selezione del testo.
- **Tinta Cipria** (`--tinta-cipria`): card di servizio e pillole e card del ventaglio in alternanza con la tinta oro.

### Neutral
- **Bianco** (`--color-bg`, `--color-surface`): la pagina, le porte, il bottone chiaro, le pillole dei temi neutre, la scritta sul bordeaux.
- **Avorio** (`--color-bg-soft`): sezioni alterne (`.sezione--avorio`), righe FAQ chiuse, disclaimer, campo mail, attesa delle foto.
- **Testo** (`--color-text`): titoli e testo forte; testo sui bottoni.
- **Testo Morbido** (`--color-text-soft`): testo corrente, lead, testo delle card.
- **Su Vino** e **Su Vino Morbido** (`--color-on-earth`, `--color-on-earth-soft`): testo forte e testo secondario sulle fasce vino.

Le tinte salvia e lilla esistono tra le variabili ma non sono in uso: non fanno parte del sistema finché una pagina non le usa.

### Named Rules
**The Due Voci Rule.** Solo oro e bordeaux agiscono. L'oro invita (il fondo del bottone), il bordeaux risponde (il cerchio, il riempimento al passaggio, la FAQ aperta, i link). Le tinte pastello e l'avorio non agiscono mai: fanno da fondo.

**The Fasce Scure Rule.** Il vino è raro: la sezione scura di un solo concetto e il piede. Non stanno mai una accanto all'altra; per questo la fascia delle due porte, subito sopra il piede, è chiara (tinta oro).

**The Oro Leggibile Rule.** Su fondo chiaro l'oro che si legge è oro inchiostro; l'oro pieno è superficie o linea. Sulle fasce vino l'oro pieno è leggibile e si usa quello.

## Typography

**Display Font:** Bodoni Moda Variable con corsivo, ottica fissata a 11 (fallback Bodoni 72, Didot, Georgia)
**Body Font:** Inter Variable (fallback system-ui)

**Character:** Un Bodoni da rivista pieno, tenuto sull'ottica «testo» perché i filetti restino robusti a schermo; Inter pulito per tutto ciò che si legge di seguito. Entrambi self-hosted via @fontsource-variable. La scelta del Bodoni è in attesa dell'approvazione della cliente (Tommaso lo trova leggibile così): se cambia, cambia `--font-heading` e nient'altro.

### Hierarchy
- **Display** (650, 2.3–4.1rem, 1.04): il titolo d'apertura; da 900px sale a 4.25–7.5rem, interlinea 0.98, entro 12ch, e passa dietro a Giorgia.
- **Firma** (650, 2.8–9.6rem, 0.9, -0.03em): il nome "Giorgia *Boccadifuoco*" in fondo al piede, cognome in corsivo 550 oro, su una riga da 700px.
- **Headline** (600, 2–3.4rem, 1.06): titoli di sezione, `text-wrap: balance`; sulla sezione scura entro 18ch.
- **Title Card** (600, 1.6–2.1rem, 1.1): titoli delle card di servizio.
- **Title** (600, 1.35–1.7rem, 1.2): titoli dei pezzi e delle porte; il titolo del piede è 1.4–1.9rem.
- **Corsivo nei titoli** (550, oro inchiostro; oro pieno sul vino).
- **Quote Card** (Bodoni 550, 1.45rem, 1.28): le testimonianze brevi del ventaglio. Il corsivo Bodoni resta per la frase sugli stacchi (1.5–2.6rem).
- **Lead** (Inter 400, 1.125–1.3rem, 1.6): la frase che segue il titolo, entro 64ch (34ch quando sta a destra del titolo, 46ch sul vino).
- **Body** (Inter 400, 1.0625rem, 1.65): testo corrente, `text-wrap: pretty`.
- **Button** (Inter 600, 0.975rem): bottoni; le domande FAQ sono Inter 600 a 1rem.
- **Small Strong** (Inter 600, 0.9375rem): piede delle card di servizio, nomi nel ventaglio.
- **Label** (Inter 600, 0.8125rem): etichette e segnaposto. Mai maiuscolo spaziato.

### Named Rules
**The Ottica Testo Rule.** Ogni uso del Bodoni fissa l'ottica a 11 (`font-optical-sizing: none; font-variation-settings: "opsz" 11`), dai titoli giganti alle citazioni. Mai l'ottica automatica.

**The Bodoni Per Frasi Brevi Rule.** Bodoni per titoli, la firma e frasi brevi da ricordare (testimonianze del ventaglio, frase dello stacco), mai sotto 1.35rem. Testo corrente, domande, note e bottoni sono Inter.

**The Corsivo Oro Rule.** Un titolo può portare una sola chiusa in corsivo (`<em>`), peso 550, oro inchiostro (oro pieno sul vino). Al massimo una per titolo.

## Layout

Mobile prima. Le sezioni (`.sezione`) hanno un respiro verticale di 5–9.5rem e un margine laterale di 1.25–2.5rem; il contenuto sta in 1180px. Testo entro 64ch.

**Intestazione di sezione** (`.intesta`): da 900px titolo a sinistra (1.3fr) e lead breve a destra (1fr, entro 34ch), allineati in basso. La FAQ usa lo stesso passo: titolo a sinistra, righe a destra (1fr / 1.4fr). Le sezioni centrate (`.al-centro`) servono la figura centrale e il video.

**Fasce staccate** (`.banda`): stacco, sezione scura, porte e piede non arrivano ai bordi: rientrano di 0.5–1.25rem per lato con angoli di 18–28px. Il resto della pagina è a tutta larghezza, bianco o avorio.

**Apertura.** A tutto schermo su fondo sfumato: titolo gigante in alto, Giorgia scontornata in basso a destra appoggiata al bordo, davanti al titolo; bottone, link e lead in basso a sinistra entro 26rem. Su mobile: titolo, bottone, link, lead, poi Giorgia.

**Figura centrale.** Titolo centrato, Giorgia scontornata al centro (24rem da 900px) che sfuma verso il basso, quattro pillole di temi che le galleggiano intorno, due per lato; su mobile le pillole vanno a capo sotto di lei.

Le griglie si aprono a 760px (servizi), 860px (porte, piede) e 900px (intestazioni, FAQ, composizioni, ventaglio a ventaglio).

**The Stacco Rule.** Uno stacco fotografico (altezza 22–44rem, in fascia arrotondata) può interrompere il ritmo tra due sezioni; mai due di fila.

## Elevation & Depth

Morbida: la profondità viene soprattutto dal tono (bianco, avorio, tinte, vino) e dal movimento. Le ombre sono tinte del colore del testo, basse e con spread negativo; compaiono solo su ciò che galleggia (pillole dei temi, card del ventaglio). Bottoni, card di servizio, porte e pannelli sono piatti; le card di servizio si sollevano di 6px al passaggio senza ombra.

### Shadow Vocabulary
- **Pillola tema** (`box-shadow: 0 1px 2px rgba(42,34,32,0.06), 0 12px 26px -14px rgba(42,34,32,0.4)`): le pillole che galleggiano intorno a Giorgia.
- **Card ventaglio** (`box-shadow: 0 1px 2px rgba(42,34,32,0.05), 0 24px 40px -26px rgba(42,34,32,0.4)`); al passaggio `0 2px 4px rgba(42,34,32,0.06), 0 36px 60px -28px rgba(42,34,32,0.5)`.
- **Frase sullo stacco** (`text-shadow: 0 1px 12px rgba(42,34,32,0.45)` più sfumatura dal basso 0.7→0): solo leggibilità.

### Named Rules
**The Galleggia Solo Ciò Che Si Muove Rule.** L'ombra spetta a ciò che sta sospeso sopra la scena (pillole, ventaglio). Tutto il resto è piatto e si stacca con il colore.

## Shapes

Tutto è tondo. Pillole (999px) per bottoni, campo mail e temi; righe FAQ a 26px; card di servizio e del ventaglio a 20px, con foto interne a 14px; pannelli a 18px (porte, disclaimer); foto a 24px; fasce a 18–28px. Nessun bordo intorno a card e pannelli: le superfici si distinguono per tinta (fanno eccezione l'anello sottile del campo mail e la riga sopra il nome nel ventaglio); l'unica linea è il filetto oro (3.5rem × 1px), ornamento facoltativo sopra un titolo, mai con parole. Il cerchio bordeaux (2.4–2.6rem) è la forma firma: si allarga in pillola o in rettangolo arrotondato. Il fondo `.sfumato` è fatto di due macchie radiali morbide, oro chiaro a sinistra e cipria a destra, che sfumano nel bianco.

## Components

### Buttons
Una pillola con un cerchio bordeaux a destra, dentro la freccia bianca.
- **Shape:** pillola, altezza minima 3.25rem, Inter 600 a 0.975rem, testo allineato a sinistra, spazio a destra per il cerchio da 2.4rem.
- **Primary:** fondo oro, testo scuro.
- **Secondary:** fondo tinta oro.
- **Chiaro:** fondo bianco, per le fasce scure.
- **Hover / Focus:** il cerchio si allarga fino a riempire la pillola e il testo diventa bianco, in 450ms con `cubic-bezier(0.785, 0.135, 0.15, 0.86)`; la freccia avanza di 3px. Stesso effetto al focus da tastiera, con il contorno bordeaux da 2px. Disabilitato: opacità 0.45. Con movimento ridotto il cambio è immediato.
- **Accanto al bottone:** l'alternativa è un link bordeaux 600 sottolineato (1px a 0.25em, sparisce in hover).

### Card di servizio (firma)
Due card affiancate da 760px, in tinta oro e tinta cipria, angoli 20px, almeno 26rem di altezza: foto 16:10 ad angoli 14px, titolo Bodoni, una riga di testo entro 40ch, piede in Inter 600 con il cerchio bordeaux e la freccia in basso a destra. Tutta la card è il link. Al passaggio e al focus il cerchio si allarga fino a coprire la card (550ms, stessa curva dei bottoni), il testo diventa bianco e la card sale di 6px.

### Figura centrale con i temi
Giorgia scontornata con una maschera che la sfuma negli ultimi 20% in basso, su fondo sfumato. Intorno quattro pillole (bianca, tinta oro, tinta cipria) con un tema ciascuna, la parola chiave in 650, con ombra morbida.

### Ventaglio di testimonianze
Cinque card (avorio, tinta oro, bordeaux al centro con testo bianco, tinta cipria, avorio), angoli 20px, testimonianza breve in Bodoni 550 e nome sotto una riga sottile. Da 900px si aprono a ventaglio dal centro (±3.5° e ±7°, sfalsate di 13rem); al passaggio la card si raddrizza, sale di 14px e passa davanti (400ms). Su mobile è uno scorrimento orizzontale con aggancio al centro, card all'80% della larghezza.

### FAQ
Due colonne da 900px. Ogni domanda è una riga a pillola (26px) su avorio, in Inter 600, con un pulsante tondo bordeaux da 2.5rem a destra con la punta bianca. Aperta: l'intestazione diventa bordeaux con testo bianco, la punta ruota verso il basso, la risposta sta su tinta oro. Altezza animata in 380ms dove supportato.

### Disclaimer
Pannello avorio (bianco su sezione avorio) da 18px, senza bordo, icona SVG a tratto bordeaux, prima frase in 600. Al massimo 46rem.

### Sezione scura
Fascia vino arrotondata con la foto (oggi la ragnatela) scurita a 0.6 e una sfumatura vino da sinistra (92% → 30%); una frase grande con chiusa oro, lead in su-vino-morbido, eventuale bottone chiaro.

### Video in movimento
Uno schermo 16:9 in fascia arrotondata (18–28px) per un video breve in loop, muto, che parte da solo; sotto, titolo e lead centrati.

### Le due porte
Fascia chiara in tinta oro, arrotondata, con due porte bianche da 18px affiancate da 860px. Il campo mail è una pillola avorio con anello sottile, il bottone dentro a destra; a fuoco l'anello diventa oro da 2px; sotto 520px campo e bottone vanno uno sopra l'altro. Consenso con casella quadrata (4px) bordo oro inchiostro, piena d'oro quando spuntata.

### Piede
Generato da `src/build/layout.js`: l'unica fascia scura in fondo alla pagina, vino, arrotondata e staccata dai bordi. Invito breve in Bodoni, colonne di link con etichette oro (2fr / 1fr / 1fr da 860px), disclaimer e riga legale in su-vino-morbido, poi la firma gigante "Giorgia *Boccadifuoco*" che tocca il bordo inferiore.

### Foto e stacco
Tutte le foto passano per `--grado-foto` (`saturate(0.86) sepia(0.1) contrast(0.97) brightness(1.02)`). Lo stacco parte ritagliato al 12% per lato e si apre in 1400ms fino agli angoli della fascia, una volta; senza JavaScript o con movimento ridotto è subito aperto.

### Navigation
Su desktop griglia a tre colonne (1fr auto 1fr) con il logo `gold.png` (44px) esattamente al centro; su mobile logo centrato e menu dal bordo destro. Lo stile delle voci e del pulsante del menu è ancora quello precedente e non fa parte del sistema finché non viene rifatto.

## Do's and Don'ts

### Do:
- **Do** alternare bianco e avorio tra le sezioni e usare le tinte oro e cipria per card, pillole e fasce chiare.
- **Do** dare a ogni bottone il cerchio bordeaux con la freccia, e lo stesso riempimento al passaggio e al focus.
- **Do** usare il bordeaux per ciò che risponde (cerchio, link, FAQ aperta) e l'oro per ciò che invita.
- **Do** staccare dai bordi, con angoli arrotondati, le fasce piene: stacco, sezione scura, porte, piede.
- **Do** fissare l'ottica del Bodoni a 11 ovunque compaia.
- **Do** far passare ogni foto per `--grado-foto`.
- **Do** rispettare il movimento ridotto: riempimenti, sollevamenti, ventaglio e stacchi senza animazione.

### Don't:
- **Don't** costruire griglie di card uguali con icona in cima.
- **Don't** mettere un'etichetta in maiuscolo spaziato sopra i titoli.
- **Don't** mettere due fasce vino una accanto all'altra.
- **Don't** usare le tinte pastello o l'avorio per un'azione: fanno solo da fondo.
- **Don't** usare l'oro pieno come colore del testo su fondo chiaro.
- **Don't** comporre in Bodoni il testo corrente, le domande o i bottoni.
- **Don't** aggiungere bordi intorno a card e pannelli: si separano con la tinta.
- **Don't** usare emoji o caratteri come icone: le icone sono SVG a tratto o maschere CSS, color corrente.
