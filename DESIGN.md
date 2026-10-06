---
name: Giorgia Boccadifuoco
description: Sito di Giorgia Boccadifuoco: bianco puro e grafite, oro e vino rosato, tinte pastello, titoli Bodoni, fasce staccate dai bordi.
colors:
  oro: "#C9A15C"
  oro-inchiostro: "#8A6526"
  oro-su-scuro: "#E2C68E"
  vino-rosato: "#8E4258"
  vino-scuro: "#3E1F29"
  bianco: "#FFFFFF"
  avorio: "#FAF7F2"
  tinta-oro: "#F6ECD3"
  tinta-cipria: "#F4E3E6"
  grafite: "#2E2F33"
  grafite-morbida: "#5D5F66"
  su-vino: "#FBF8F3"
  su-vino-morbido: "#EBD9DE"
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
    fontSize: "clamp(3.4rem, 1rem + 3.9vw, 5.6rem)"
    fontWeight: 650
    lineHeight: 1
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
    fontWeight: 550
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
  banda-margine: "clamp(0.75rem, 0.4rem + 1.2vw, 1.5rem)"
  contenitore: "1180px"
  misura: "64ch"
components:
  button-primary:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 3.4rem 0.65rem 1.4rem"
    height: "3.1rem"
  button-primary-hover:
    backgroundColor: "{colors.tinta-oro}"
    textColor: "{colors.grafite}"
  button-secondary:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 3.4rem 0.65rem 1.4rem"
    height: "3.1rem"
  button-secondary-hover:
    backgroundColor: "{colors.tinta-cipria}"
    textColor: "{colors.grafite}"
  button-chiaro:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.bianco}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 3.4rem 0.65rem 1.4rem"
    height: "3.1rem"
  button-chiaro-hover:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
  servizio-oro:
    backgroundColor: "{colors.tinta-oro}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
  servizio-cipria:
    backgroundColor: "{colors.tinta-cipria}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
  servizio-hover:
    backgroundColor: "{colors.vino-rosato}"
    textColor: "{colors.bianco}"
  tema:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.15rem"
  faq-riga:
    backgroundColor: "{colors.avorio}"
    textColor: "{colors.grafite}"
    rounded: "26px"
    padding: "0.8rem 4rem 0.8rem 1.5rem"
    height: "3.5rem"
  faq-riga-aperta:
    backgroundColor: "{colors.vino-rosato}"
    textColor: "{colors.bianco}"
  faq-risposta:
    backgroundColor: "{colors.tinta-oro}"
    textColor: "{colors.grafite}"
    padding: "1rem 1.5rem 1.4rem"
  disclaimer:
    backgroundColor: "{colors.avorio}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.pannello}"
    padding: "1.4rem 1.6rem"
  porta:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.pannello}"
    padding: "clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)"
  campo-mail:
    backgroundColor: "{colors.avorio}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.pill}"
    padding: "0.35rem"
  piede:
    backgroundColor: "{colors.vino-scuro}"
    textColor: "{colors.su-vino}"
    rounded: "{rounded.banda}"
---

# Design System: Giorgia Boccadifuoco

## Overview

**Creative North Star: "Il servizio di rivista, alla luce del giorno"**

Il sito è il ritratto editoriale di una persona: titoli Bodoni grandi, Giorgia in abito bianco scontornata al centro della scena, foto che respirano. Tommaso ha scelto la tavolozza "oro e vino rosato" su "bianco puro e grafite": pagina bianca, sezioni avorio alterne, testo grafite, oro per i filetti e i corsivi, un vino rosato preso dallo scialle delle foto per dare contrasto, tinte pastello d'oro e di cipria per card, pillole e fasce. Il riferimento per spaziatura, impaginazione, card che reagiscono al passaggio, fasce arrotondate staccate dai bordi e fondi sfumati è il sito Mantality (21st.app).

La densità resta bassa: sezioni ariose, una frase grande per idea, poche cose per schermata. I bottoni sono leggeri e sereni: si vedono, ma non pesano mai. Il gesto che si ripete è un cerchio che si allarga: nei bottoni si allarga in una tinta chiara, nelle card di servizio in vino rosato. Tutte le foto passano per la stessa resa calda. Il sito non pubblica prezzi.

Rifiuti confermati: la griglia di card uguali con icona, i bottoni urlati o pesanti, il tono "troppo marketing, troppo template".

**Key Characteristics:**
- Bianco puro alternato ad avorio, testo grafite; tinte pastello oro e cipria per card, pillole e fasce chiare.
- Oro per filetti, corsivi e il tocco dei bottoni; vino rosato come contrasto che risponde; vino scuro per le rare fasce scure.
- Bodoni Moda pieno (600, display 650) con ottica «testo» fissa; Inter per il resto.
- Bottoni chiari: pillola bianca, filo sottile, piccolo cerchio di tinta con la freccia che si allarga al passaggio.
- Fasce staccate dai bordi della finestra (0.75–1.5rem), con angoli fino a 28px, apertura compresa.
- Una sola resa per tutte le foto (`--grado-foto`).

## Colors

Luminosa e calda su base neutra: bianco, avorio e due tinte pastello come fondo, grafite per il testo, oro e vino rosato come le sole voci che agiscono.

### Primary
- **Oro Giorgia** (`--color-primary`): filetti, anello del campo mail a fuoco, casella di consenso spuntata, barra di scorrimento. Mai testo su fondo chiaro.
- **Oro Inchiostro** (`--color-gold-ink`): corsivo dei titoli su fondo chiaro, freccia e filo (al 45%) del bottone principale, sottotitolo fine, segno « delle testimonianze, bordo della casella di consenso.
- **Oro Su Scuro** (`--oro-su-scuro`): l'oro sulle fasce scure: corsivo dei titoli, etichette e link in hover del piede, cognome della firma, « sulla card vino del ventaglio.

### Secondary
- **Vino Rosato** (`--color-bordeaux`): il contrasto. Link (600), riempimento delle card di servizio al passaggio, riga FAQ aperta e pulsante tondo della FAQ, card centrale del ventaglio, freccia e filo (al 40%) del bottone secondario e del bottone chiaro, icona del disclaimer, contorno del focus, cursore.
- **Vino Scuro** (`--color-bordeaux-scuro`, `--color-earth`): fondo delle fasce scure (sezione scura e piede) e attesa del video.

### Tertiary
- **Tinta Oro** (`--tinta-oro`): card di servizio, riempimento del bottone principale, risposta FAQ aperta, fascia delle due porte, pillole e card del ventaglio, selezione del testo.
- **Tinta Cipria** (`--tinta-cipria`): card di servizio, riempimento del bottone secondario, pillole e card del ventaglio in alternanza con la tinta oro.

### Neutral
- **Bianco** (`--color-bg`, `--color-surface`): la pagina, il fondo dei bottoni, le porte, le pillole neutre, la scritta sul vino.
- **Avorio** (`--color-bg-soft`): sezioni alterne (`.sezione--avorio`), fondo dell'apertura, righe FAQ chiuse, disclaimer, campo mail, attesa delle foto.
- **Grafite** (`--color-text`): titoli, testo forte, testo dei bottoni.
- **Grafite Morbida** (`--color-text-soft`): testo corrente, lead, testo delle card.
- **Su Vino** e **Su Vino Morbido** (`--color-on-earth`, `--color-on-earth-soft`): testo forte e secondario sulle fasce scure.

Le tinte salvia e lilla esistono tra le variabili ma non sono in uso. Le pagine `palette.html` e `accostamenti.html` sono servite a scegliere e non fanno parte del sistema.

### Named Rules
**The Due Voci Rule.** Solo oro e vino rosato agiscono. L'oro invita con discrezione (filo, freccia, tinta del bottone principale); il vino rosato risponde (link, card di servizio al passaggio, FAQ aperta). Avorio e tinte pastello fanno da fondo e non agiscono mai da sole.

**The Fasce Scure Rule.** Il vino scuro è raro: la sezione scura di un solo concetto e il piede. Non stanno mai una accanto all'altra; per questo la fascia delle due porte, subito sopra il piede, è chiara (tinta oro).

**The Oro Leggibile Rule.** Su fondo chiaro l'oro che si legge è oro inchiostro; su fondo scuro è oro su scuro. L'oro pieno è solo linea o dettaglio.

## Typography

**Display Font:** Bodoni Moda Variable con corsivo, ottica fissata a 11 (fallback Bodoni 72, Didot, Georgia)
**Body Font:** Inter Variable (fallback system-ui)

**Character:** Un Bodoni da rivista pieno, tenuto sull'ottica «testo» perché i filetti restino robusti a schermo; Inter pulito per tutto ciò che si legge di seguito. Entrambi self-hosted via @fontsource-variable. La scelta del Bodoni è in attesa dell'approvazione della cliente: se cambia, cambia `--font-heading` e nient'altro.

### Hierarchy
- **Display** (650, 2.3–4.1rem, 1.04): il titolo d'apertura; da 900px 3.4–5.6rem, interlinea 1, nella colonna di sinistra.
- **Firma** (650, 2.8–9.6rem, 0.9, -0.03em): "Giorgia *Boccadifuoco*" in fondo al piede, cognome in corsivo 550 oro su scuro, su una riga da 700px.
- **Headline** (600, 2–3.4rem, 1.06): titoli di sezione, `text-wrap: balance`; sulla sezione scura entro 18ch.
- **Title Card** (600, 1.6–2.1rem, 1.1): titoli delle card di servizio.
- **Title** (600, 1.35–1.7rem, 1.2): titoli dei pezzi e delle porte; il titolo del piede è 1.4–1.9rem.
- **Corsivo nei titoli** (550, oro inchiostro; oro su scuro sulle fasce scure).
- **Quote Card** (Bodoni 550, 1.45rem, 1.28, allineato a sinistra): testimonianze del ventaglio, aperte da un « Bodoni da 3.6rem. Il corsivo Bodoni resta per la frase sugli stacchi (1.5–2.6rem).
- **Lead** (Inter 400, 1.125–1.3rem, 1.6): entro 64ch (34ch a destra del titolo, 46ch sul vino).
- **Sottotitolo fine** (Inter 600, 0.8125rem, +0.08em, oro inchiostro, in tondo, senza maiuscoletto): una riga breve sotto un titolo centrato.
- **Body** (Inter 400, 1.0625rem, 1.65): testo corrente, `text-wrap: pretty`.
- **Button** (Inter 550, 0.975rem): bottoni; le domande FAQ sono Inter 600 a 1rem.
- **Small Strong** (Inter 600, 0.9375rem): piede delle card di servizio, nomi nel ventaglio.
- **Label** (Inter 600, 0.8125rem): etichette e segnaposto.

### Named Rules
**The Ottica Testo Rule.** Ogni uso del Bodoni fissa l'ottica a 11 (`font-optical-sizing: none; font-variation-settings: "opsz" 11`), dai titoli giganti alle citazioni. Mai l'ottica automatica.

**The Bodoni Per Frasi Brevi Rule.** Bodoni per titoli, la firma e frasi brevi da ricordare (testimonianze del ventaglio, frase dello stacco), mai sotto 1.35rem. Testo corrente, domande, note e bottoni sono Inter.

**The Corsivo Oro Rule.** Un titolo può portare una sola chiusa in corsivo (`<em>`), peso 550, oro inchiostro (oro su scuro sul vino). Al massimo una per titolo.

**The Sotto, Mai Sopra Rule.** Le righe piccole e spaziate stanno sotto il titolo, mai sopra: niente etichette in maiuscolo sopra i titoli.

## Layout

Mobile prima. Le sezioni (`.sezione`) hanno un respiro verticale di 5–9.5rem e un margine laterale di 1.25–2.5rem; il contenuto sta in 1180px. Testo entro 64ch.

**Intestazione di sezione** (`.intesta`): da 900px titolo a sinistra (1.3fr) e lead breve a destra (1fr, entro 34ch), allineati in basso. La FAQ usa lo stesso passo: titolo a sinistra, righe a destra (1fr / 1.4fr). Le sezioni centrate (`.al-centro`) servono la figura centrale e il video.

**Fasce staccate** (`.banda`): apertura, stacco, sezione scura, porte e piede rientrano di 0.75–1.5rem per lato con angoli di 18–28px. Il resto della pagina è a tutta larghezza, bianco o avorio.

**Apertura.** Una fascia avorio con il fondo sfumato. Da 900px due colonne (1fr / 0.85fr): titolo e, sotto, bottone, link e lead (entro 30rem) a sinistra; Giorgia in abito bianco scontornata a destra, intera, in piedi sul bordo basso della fascia (altezza fino a 52rem). Testo e figura non si sovrappongono a nessuna larghezza. Su mobile: titolo, bottone, link, lead, poi Giorgia (al massimo 21rem).

**Figura centrale.** Titolo centrato con sotto il sottotitolo fine, Giorgia scontornata con le mani visibili (24rem da 900px) che sfuma verso il basso, quattro pillole di temi che le galleggiano intorno, due per lato; sotto, al massimo tre righe di testo (40rem). Su mobile le pillole vanno a capo sotto di lei.

Le griglie si aprono a 760px (servizi), 860px (porte, piede) e 900px (intestazioni, FAQ, apertura, ventaglio a ventaglio).

**The Stacco Rule.** Uno stacco fotografico (altezza 22–44rem, in fascia arrotondata) può interrompere il ritmo tra due sezioni; mai due di fila.

## Elevation & Depth

Morbida: la profondità viene dal tono (bianco, avorio, tinte, vino) e dal movimento. Le ombre sono tinte di grafite, basse e con spread negativo, e spettano solo a ciò che galleggia (pillole dei temi, card del ventaglio). Bottoni, card di servizio, porte e pannelli sono piatti; i bottoni hanno solo un filo interno da 1px.

### Shadow Vocabulary
- **Pillola tema** (`box-shadow: 0 1px 2px rgba(46,47,51,0.06), 0 12px 26px -14px rgba(46,47,51,0.4)`).
- **Card ventaglio** (`box-shadow: 0 1px 2px rgba(46,47,51,0.05), 0 24px 40px -26px rgba(46,47,51,0.4)`); al passaggio `0 2px 4px rgba(46,47,51,0.06), 0 36px 60px -28px rgba(46,47,51,0.5)`.
- **Frase sullo stacco** (`text-shadow: 0 1px 12px rgba(46,47,51,0.45)` più sfumatura grafite dal basso 0.7→0): solo leggibilità.

### Named Rules
**The Galleggia Solo Ciò Che Si Muove Rule.** L'ombra spetta a ciò che sta sospeso sopra la scena (pillole, ventaglio). Tutto il resto è piatto e si stacca con il colore.

## Shapes

Tutto è tondo. Pillole (999px) per bottoni, campo mail e temi; righe FAQ a 26px; card di servizio e del ventaglio a 20px, con foto interne a 14px; pannelli a 18px (porte, disclaimer); foto a 24px; fasce a 18–28px. Nessun bordo intorno a card e pannelli: le superfici si distinguono per tinta. Le sole linee sono il filo interno dei bottoni, l'anello sottile del campo mail, la riga sopra il nome nel ventaglio e il filetto oro (3.5rem × 1px), ornamento facoltativo sopra un titolo, mai con parole. Il cerchio (2.15rem nei bottoni, 2.6rem nelle card) è la forma firma: si allarga con `clip-path: circle()` fino a riempire. Il fondo `.sfumato` è fatto di due macchie radiali morbide, oro chiaro a sinistra e cipria a destra, su bianco (avorio nell'apertura). Gli avatar del ventaglio sono cerchi da 2.1rem.

## Components

### Buttons
Leggeri e sereni: si vedono, ma il passo non pesa mai.
- **Shape:** pillola bianca, altezza minima 3.1rem, filo interno da 1px colorato, Inter 550 a 0.975rem allineato a sinistra; a destra un piccolo cerchio di tinta (2.15rem) con la freccia.
- **Primary:** filo oro inchiostro al 45%, cerchio tinta oro, freccia oro inchiostro.
- **Secondary:** filo vino rosato al 40%, cerchio tinta cipria, freccia vino rosato.
- **Chiaro (sulle fasce scure):** vetro (bianco all'8%) con filo bianco al 40%, testo bianco, cerchio bianco con freccia vino rosato; al passaggio si riempie di bianco e il testo diventa grafite.
- **Hover / Focus:** la tinta del cerchio si allarga fino a riempire la pillola (`clip-path`, 420ms, `cubic-bezier(0.65, 0, 0.35, 1)`), il filo sparisce, la freccia avanza di 3px. Il riempimento è sempre una tinta chiara, mai un colore scuro. Stesso effetto al focus da tastiera, con il contorno vino rosato da 2px. Disabilitato: opacità 0.45. Con movimento ridotto il cambio è immediato.
- **Accanto al bottone:** l'alternativa è un link vino rosato 600 sottolineato (1px a 0.25em, sparisce in hover).

### Card di servizio (firma)
Due card affiancate da 760px, in tinta oro e tinta cipria, angoli 20px, almeno 26rem di altezza: foto 16:10 ad angoli 14px, titolo Bodoni, una riga di testo entro 40ch, piede in Inter 600 con il cerchio vino rosato e la freccia bianca in basso a destra. Tutta la card è il link. Al passaggio e al focus il cerchio si allarga fino a coprire la card (`clip-path`, 480ms, stessa curva a S dei bottoni), il testo diventa bianco e la card sale di 6px (420ms).

### Figura centrale con i temi
Giorgia scontornata con una maschera che la sfuma negli ultimi 20% in basso, su fondo sfumato. Intorno quattro pillole (bianca, tinta oro, tinta cipria) con un tema ciascuna, la parola chiave in 650, con ombra morbida.

### Ventaglio di testimonianze
Cinque card (avorio, tinta oro, vino rosato al centro con testo bianco, tinta cipria, avorio), angoli 20px, testo allineato a sinistra: in alto un « Bodoni oro inchiostro (oro su scuro sulla card vino), poi la testimonianza in Bodoni 550, poi, sotto una riga sottile, un avatar tondo da 2.1rem accanto al nome. Da 900px si aprono a ventaglio dal centro (±3.5° e ±7°, sfalsate di 13rem); al passaggio la card si raddrizza, sale di 14px e passa davanti (400ms). Su mobile è uno scorrimento orizzontale con aggancio al centro, card all'80% della larghezza.

### FAQ
Due colonne da 900px. Ogni domanda è una riga a pillola (26px) su avorio, in Inter 600, con un pulsante tondo vino rosato da 2.5rem a destra con la punta bianca. Aperta: l'intestazione diventa vino rosato con testo bianco, la punta ruota verso il basso, la risposta sta su tinta oro. Altezza animata in 380ms dove supportato.

### Disclaimer
Pannello avorio da 18px, senza bordo, icona SVG a tratto vino rosato, prima frase in 600. Al massimo 46rem.

### Sezione scura
Fascia vino scuro arrotondata con la foto (oggi la ragnatela) scurita a 0.6 e una sfumatura vino scuro da sinistra (92% → 30%); una frase grande con chiusa oro su scuro, lead in su-vino-morbido, eventuale bottone chiaro.

### Video in movimento
Uno schermo 16:9 arrotondato (18–28px) per un video breve in loop, muto, che parte da solo; sotto, titolo e lead centrati.

### Le due porte
Fascia chiara in tinta oro, arrotondata, con due porte bianche da 18px affiancate da 860px. Il campo mail è una pillola avorio con anello sottile, il bottone principale dentro a destra; a fuoco l'anello diventa oro da 2px; sotto 520px campo e bottone vanno uno sopra l'altro. Consenso con casella quadrata (4px) bordo oro inchiostro, piena d'oro quando spuntata.

### Piede
Generato da `src/build/layout.js`: l'unica fascia scura in fondo alla pagina, vino scuro, arrotondata e staccata dai bordi, ariosa (4–7.5rem sopra, 3.5rem tra le colonne). Invito breve in Bodoni, colonne di link con etichette oro su scuro (2fr / 1fr / 1fr da 860px), disclaimer e riga legale in su-vino-morbido, poi la firma gigante "Giorgia *Boccadifuoco*" che tocca il bordo inferiore.

### Foto e stacco
Tutte le foto passano per `--grado-foto` (`saturate(0.86) sepia(0.1) contrast(0.97) brightness(1.02)`). Le figure scontornate sono Giorgia in abito bianco (`giorgia-bianco-*`). Lo stacco parte ritagliato al 12% per lato e si apre in 1400ms fino agli angoli della fascia, una volta; senza JavaScript o con movimento ridotto è subito aperto.

### Navigation
Su desktop griglia a tre colonne (1fr auto 1fr) con il logo `gold.png` (44px) esattamente al centro; su mobile logo centrato e menu dal bordo destro. Lo stile delle voci e del pulsante del menu è ancora quello precedente e non fa parte del sistema finché non viene rifatto.

## Do's and Don'ts

### Do:
- **Do** alternare bianco e avorio tra le sezioni e usare le tinte oro e cipria per card, pillole e fasce chiare.
- **Do** fare i bottoni come pillole bianche con filo sottile e cerchio di tinta con la freccia, riempite di tinta chiara al passaggio e al focus.
- **Do** usare il vino rosato per ciò che risponde (link, card di servizio, FAQ aperta) e l'oro per i dettagli che invitano.
- **Do** staccare dai bordi, con angoli arrotondati, le fasce piene: apertura, stacco, sezione scura, porte, piede.
- **Do** fissare l'ottica del Bodoni a 11 ovunque compaia.
- **Do** far passare ogni foto per `--grado-foto`.
- **Do** rispettare il movimento ridotto: riempimenti, sollevamenti, ventaglio e stacchi senza animazione.

### Don't:
- **Don't** riempire un bottone di un colore scuro, né a riposo né al passaggio: il passo è leggero.
- **Don't** costruire griglie di card uguali con icona in cima.
- **Don't** mettere un'etichetta in maiuscolo spaziato sopra i titoli.
- **Don't** mettere due fasce scure una accanto all'altra.
- **Don't** usare l'oro pieno come colore del testo, né su chiaro né su scuro.
- **Don't** comporre in Bodoni il testo corrente, le domande o i bottoni.
- **Don't** aggiungere bordi intorno a card e pannelli: si separano con la tinta.
- **Don't** usare emoji o caratteri come icone: le icone sono SVG a tratto o maschere CSS, color corrente.
