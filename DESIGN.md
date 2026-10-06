---
name: Giorgia Boccadifuoco
description: Sito di Giorgia Boccadifuoco, un servizio fotografico di rivista su una persona: carta calda, oro, titoli Bodoni.
colors:
  oro: "#C9A15C"
  oro-chiaro: "#F4E2BF"
  oro-inchiostro: "#8A6526"
  carta: "#F7F3EB"
  carta-scura: "#F2E8DA"
  carta-luce: "#FFF8F1"
  bianco-card: "#FFFFFF"
  terra: "#2F2417"
  terra-morbida: "#6B5A45"
  terra-spenta: "#7D6B57"
  terra-velata: "#D8C8B0"
  filo-sabbia: "#E3D7C3"
typography:
  display:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.3rem, 1.6rem + 3.5vw, 4.1rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.02em"
    fontVariation: "\"opsz\" 11"
  headline:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2rem, 1.45rem + 2.4vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 11"
  title:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(1.35rem, 1.2rem + 0.6vw, 1.7rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 11"
  quote:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.9vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: "-0.01em"
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
  body-strong:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  card: "1.5rem"
  pill: "999px"
spacing:
  sezione-y: "clamp(5rem, 3.5rem + 6vw, 9.5rem)"
  gutter: "clamp(1.25rem, 0.8rem + 2vw, 2.5rem)"
  contenitore: "1180px"
  misura: "64ch"
  colonna-editoriale: "52rem"
components:
  button-primary:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.terra}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.75rem"
    height: "3.25rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.terra}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.75rem"
    height: "3.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.terra}"
    textColor: "{colors.carta}"
  button-chiaro:
    backgroundColor: "{colors.carta}"
    textColor: "{colors.terra}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.75rem"
    height: "3.25rem"
  button-chiaro-hover:
    backgroundColor: "{colors.bianco-card}"
  card:
    backgroundColor: "{colors.bianco-card}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem)"
  disclaimer:
    backgroundColor: "{colors.carta-luce}"
    textColor: "{colors.terra}"
    rounded: "{rounded.card}"
    padding: "1.5rem 1.75rem"
  input-su-terra:
    textColor: "{colors.carta}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "3.25rem"
---

# Design System: Giorgia Boccadifuoco

## Overview

**Creative North Star: "Il servizio di rivista"**

Il sito è impaginato come un servizio fotografico di una rivista italiana dedicato a una persona, non come la landing di una coach. Le foto sono grandi e respirano, i titoli sono in Bodoni, ogni schermata porta pochi elementi. La pagina alterna due carte calde, l'oro è il solo colore che agisce, e una sola fascia di terra scura segna il punto in cui si sceglie.

La densità è bassa per scelta: sezioni con molta aria verticale, testo tenuto entro una misura di lettura, un'azione principale per schermata. Le foto seguono tre filoni: professionale (studio, giacca, parco) in apertura e dove si decide; sacerdotessa (abito bianco, tramonto, lago) in profondità e negli stacchi a tutta larghezza; la presentazione del libro (lettura al microfono, sala piena, il pubblico) come prova di fiducia. Anche il gruppo si mostra con una foto vera di un'armonizzazione.

Rifiuti confermati dalla direzione: la griglia di card uguali con icona e i bottoni urlati; il tono "troppo marketing, troppo template".

**Key Characteristics:**
- Carta calda alternata a carta scura, sezione per sezione; bianco solo per le card.
- Oro come superficie del bottone principale (testo terra) e oro scuro come inchiostro per il testo.
- Bodoni Moda con ottica «testo» fissa nei titoli, nei prezzi e nelle citazioni; Inter per tutto ciò che si legge di seguito.
- Angoli morbidi (24px) su card e foto, bottoni a pillola, ombre basse e diffuse.
- Filetti sottili dorati come unico ornamento.
- Stacchi fotografici a tutta larghezza che si aprono dal centro.

## Colors

Una tavolozza calda e ristretta: due carte, una terra, un oro in tre intensità.

### Primary
- **Oro Giorgia** (`--color-primary`): base del bottone principale (che lo porta in sfumatura, vedi Components), filetti e righe del listino, barra sui prezzi di riferimento, bordo del disclaimer, corsivo dei titoli sulla fascia terra, casella di consenso spuntata. Mai come colore del testo su fondo chiaro: lì non è leggibile.
- **Oro Inchiostro** (`--color-gold-ink`): l'oro per il testo su fondo chiaro (4.8:1 su carta). Corsivo dentro i titoli, link, bordo del bottone a contorno, riga del risparmio nel listino, firme delle testimonianze, frase di consiglio, freccia delle FAQ, contorno del focus, cursore.
- **Oro Velo** (`--color-primary-light`): sfondo della selezione del testo.

### Neutral
- **Carta** (`--color-bg`, `--color-on-earth`): sfondo della pagina; anche il testo e il bottone chiaro sulla fascia terra.
- **Carta Scura** (`--color-surface-soft`): sezioni alterne (`.sezione--carta-scura`) e sfondo d'attesa delle foto.
- **Carta Luce** (`--color-bg-soft`): solo dentro il disclaimer.
- **Bianco Card** (`--color-surface`): solo le card.
- **Terra** (`--color-text`, `--color-earth`): titoli e testo forte; la fascia piena delle due porte; testo sui bottoni oro.
- **Terra Morbida** (`--color-text-soft`): testo corrente, lead, risposte delle FAQ, testo delle strade.
- **Terra Spenta** (`--color-muted`, 4.6:1 su carta): ciò che si guarda di lato: prezzo di riferimento barrato, didascalie delle foto.
- **Terra Velata** (`--color-on-earth-soft`): testo secondario e etichette sulla fascia terra.
- **Filo Sabbia** (`--color-border-soft`): righe divisorie delle FAQ, bordo degli screenshot.

### Named Rules
**The Una Sola Terra Rule.** La terra scura piena copre una sola fascia per pagina: quella delle due porte, dove si sceglie. Altrove la terra è solo inchiostro.

**The Due Ori Rule.** L'oro pieno è una superficie o una linea; quando deve essere letto come testo su fondo chiaro diventa oro inchiostro. Sulla fascia terra vale il contrario: l'oro pieno è leggibile e si usa quello.

**The Bianco Per Le Card Rule.** Il bianco puro compare solo nelle card. Le sezioni vivono di carta e carta scura alternate.

## Typography

**Display Font:** Bodoni Moda Variable con corsivo, ottica fissata a 11 (fallback Bodoni 72, Didot, Georgia)
**Body Font:** Inter Variable (fallback system-ui)

**Character:** Un Bodoni da rivista che parla nei titoli, nei prezzi e nelle citazioni, tenuto sull'ottica «testo» perché i filetti restino robusti a schermo; Inter pulito e tranquillo per tutto ciò che si legge. Entrambi self-hosted via @fontsource-variable. La scelta del Bodoni è in attesa dell'approvazione della cliente: se cambia, cambia `--font-heading` e nient'altro.

### Hierarchy
- **Display** (500, 2.3–4.1rem fluido, 1.06): il solo titolo d'apertura della pagina (`.titolo-display`).
- **Headline** (500, 2–3.4rem fluido, 1.08): titoli di sezione (`.titolo-sezione`), con `text-wrap: balance`.
- **Title** (600, 1.35–1.7rem fluido, 1.2): titoli dei pezzi (`.titolo-pezzo`) e voci del listino. Le testate di porte e strade usano la stessa misura a 500.
- **Cifra** (Bodoni, 2.2–3.4rem fluido, 1, numeri allineati): i prezzi del listino; il prezzo di riferimento barrato scende a 1.1–1.45rem in terra spenta.
- **Quote** (Bodoni corsivo 400, 1.75–2.9rem fluido, 1.22): la citazione grande. Lo stesso corsivo serve la frase sugli stacchi (1.5–2.6rem) e la frase di consiglio del listino (1.2rem).
- **Lead** (Inter 400, 1.125–1.3rem, 1.6): la frase che segue il titolo di sezione, entro 64ch.
- **Body** (Inter 400, 1.0625rem, 1.65): testo corrente e testo delle card testimonianza, entro 64ch, `text-wrap: pretty`.
- **Body Strong** (Inter 600, 1.0625rem, 1.4): domande delle FAQ; a 0.9375rem in oro inchiostro per la riga del risparmio.
- **Label** (Inter 600, 0.8125rem, +0.04em, minuscolo): firme, etichette dei campi, consenso. Le didascalie usano la stessa misura a 400 in terra spenta. Mai maiuscolo spaziato.

### Named Rules
**The Ottica Testo Rule.** Ogni uso del Bodoni fissa l'ottica a 11 (`font-optical-sizing: none; font-variation-settings: "opsz" 11`), anche nei titoli grandi. Mai l'ottica automatica: a grandi misure i filetti diventano capelli e il titolo si sbiadisce.

**The Bodoni Non Si Legge A Lungo Rule.** Bodoni per titoli, prezzi e le poche frasi da ricordare; Inter per ciò che si legge di seguito, anche quando è breve: testimonianze nelle card, domande delle FAQ, note. Il corsivo Bodoni vive solo nella chiusa dei titoli, nella citazione grande, nella frase dello stacco e nel consiglio del listino.

**The Corsivo Oro Rule.** Un titolo può portare una sola chiusa in corsivo (`<em>`), peso 400, color oro inchiostro (oro pieno sulla fascia terra). È la voce che scioglie la frase: al massimo una per titolo, non in ogni titolo.

## Layout

Mobile prima. Ogni sezione (`.sezione`) ha un respiro verticale fluido di 5–9.5rem e un margine laterale fluido di 1.25–2.5rem; il contenuto sta in un contenitore di 1180px centrato. Il testo non supera 64ch; listino, citazione e FAQ non superano 52rem, così restano una colonna editoriale anche su schermi larghi.

Apertura: su mobile la foto professionale viene prima (4:5, al massimo il 44% dello schermo), poi titolo e subito il bottone oro, poi il testo; tutto il necessario entra nel primo schermo. Da 900px in su la griglia diventa 5/7: titolo, testo e bottone a sinistra, foto a destra. Le composizioni testo+foto seguono lo stesso passo asimmetrico (5/6 in "chi sono", con una foto piccola con didascalia sfalsata a destra sotto il testo).

Le griglie a più colonne si aprono a 760px (testimonianze, 2 colonne), 860px (porte e strade, 2 colonne) e 900px (composizioni). Le foto in serie stanno su 3 colonne anche su mobile, in formato 3:4.

**The Stacco Rule.** Tra le sezioni si può interrompere il ritmo con uno stacco fotografico a tutta larghezza (altezza 22–44rem), con eventuale frase in Bodoni corsivo su una sfumatura di terra dal basso. Al massimo uno stacco tra due sezioni, mai due di fila.

## Elevation & Depth

Profondità ibrida e bassa: la pagina è piatta e si stratifica per tono (carta, carta scura, terra); le ombre esistono solo su card e bottone principale, sempre basse, morbide e tinte di terra o d'oro, mai nere. Il bottone oro è l'unico oggetto con un volume proprio: sfumatura verticale, luce sul bordo alto e ombra sul bordo basso.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgba(47,36,23,0.05), 0 18px 40px -18px rgba(47,36,23,0.22)`, `--shadow-card`): appoggia le card sulla carta.
- **Bottone oro** (`box-shadow: inset 0 1px 0 rgba(255,244,214,0.65), inset 0 -1px 0 rgba(122,90,32,0.35), 0 1px 2px rgba(47,36,23,0.18), 0 12px 26px -12px rgba(162,124,53,0.85)`): luce interna in alto, alone d'oro sotto. In hover la luce sale a 0.75 e l'alone si allunga a `0 18px 34px -12px` con opacità 0.95.
- **Frase sullo stacco** (`text-shadow: 0 1px 12px rgba(47,36,23,0.45)` più sfumatura terra 0.78→0): solo per la leggibilità del testo sulla foto.

### Named Rules
**The Ombra Calda Rule.** Le ombre sono tinte di terra (47,36,23) o d'oro (162,124,53), con spread negativo: si vedono sotto l'oggetto, non intorno. Niente ombre dure o sfalsate.

## Shapes

Angoli morbidi da 24px (`--radius-card`) per card, foto, porte e disclaimer; pillola (999px) per bottoni e campi. Le righe sono sottili (1px): oro per il listino, il disclaimer e i filetti; sabbia per le FAQ; carta velata al 25% per i bordi delle porte sulla terra. Il filetto (`.filetto`) è una riga oro di 3.5rem × 1px sopra il titolo di sezione: ornamento, non etichetta, e non porta mai testo. Lo stacco si apre da un ritaglio arrotondato al 12% per lato fino al bordo pieno.

## Components

### Buttons
Bottoni pieni e calmi, che invitano senza urlare.
- **Shape:** pillola (999px), altezza minima 3.25rem, Inter a 1rem, interlinea stretta; icona SVG a tratto opzionale (1.15rem) a sinistra.
- **Primary (oro):** sfumatura verticale d'oro (#DDB874 → oro Giorgia al 55% → #B98F48), testo terra, peso 600, luce interna e alone d'oro sotto. Uno per schermata: è l'azione che conta (di solito WhatsApp). In hover sale di 1px; in hover e al focus un riflesso dorato lo attraversa una volta, in diagonale (900ms, `cubic-bezier(0.16, 1, 0.3, 1)`), spento con movimento ridotto.
- **Secondary (contorno):** trasparente, testo terra, bordo oro inchiostro 1px, peso 600; in hover si riempie di terra con testo carta.
- **Chiaro:** su fondo terra, carta piena con testo terra, peso 550; in hover bianco.
- **Hover / Focus / Active:** transizioni di 220ms con `cubic-bezier(0.16, 1, 0.3, 1)`; pressione di 1px verso il basso; focus con contorno oro inchiostro 2px a 3px di distanza. Disabilitato: opacità 0.45.
- **Accanto al bottone:** l'alternativa è un link sottolineato in oro inchiostro (sottolineatura 1px a 0.25em, che sparisce in hover), non un secondo bottone pieno.

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** bianco, unico uso del bianco.
- **Shadow Strategy:** ombra Card (vedi Elevation).
- **Border:** nessuno.
- **Internal Padding:** fluido 1.5–2.25rem.
- Le card servono contenuti di altezza diversa (testimonianze) e si allineano in alto; non sono una griglia di card uguali con icona.

### Listino (firma)
I prezzi come un listino da rivista: righe oro sopra e sotto ogni voce, nome della voce in Bodoni 600 a sinistra e cifra grande in Bodoni a destra sulla stessa linea di base. Quando c'è un prezzo di riferimento, sta barrato accanto alla cifra, più piccolo, in Bodoni terra spenta con barra oro da 1.5px; sotto il nome una riga in Inter 600 oro inchiostro dice il risparmio con un fatto (una percentuale, il costo delle sedute singole). Poi la nota in Inter su tutta la larghezza. La voce consigliata si distingue con una frase in Bodoni corsivo oro inchiostro, non con un riquadro, un badge o un colore di fondo. Sotto, il bottone oro e un link.

### Citazioni e testimonianze
Una citazione grande in Bodoni corsivo, senza virgolette decorative né riquadro; firma in etichetta oro inchiostro. Le testimonianze brevi stanno in card bianche, in Inter a misura di testo, due per riga da 760px. Gli screenshot veri hanno angoli di 14px e bordo sabbia.

### FAQ
`<details>` nativo senza JavaScript: domanda in Inter 600, freccia a squadra in oro inchiostro che ruota (320ms), righe sabbia tra le voci, risposta entro 64ch. Dove il browser lo supporta, l'altezza si apre con una transizione di 380ms.

### Disclaimer
Nota sulla natura del lavoro: fondo carta luce, bordo oro 1px, angoli 24px, icona informativa SVG a tratto in oro inchiostro a sinistra, prima frase in grassetto 600. Al massimo 46rem.

### Le strade
Due strade affiancate da 860px (consulenze individuali e gruppo): per ognuna una foto 4:3 ad angoli 24px, una testata in Bodoni, una riga di testo in terra morbida entro 40ch e un link oro inchiostro. Nessun bottone: la scelta qui è di lettura, l'azione arriva più avanti.

### Foto con didascalia
Una foto con angoli 24px e, sotto a 0.75rem, una didascalia breve in Inter 0.8125rem terra spenta, come in rivista. La didascalia dice cosa si vede, non lo vende.

### Le due porte (fascia terra)
L'unica fascia terra piena. Sotto la terra c'è una foto di bagliori dorati, coperta da un velo di terra all'86–93%: si intuisce come una grana calda, non si legge come immagine. Titolo in carta con corsivo oro pieno, due porte affiancate (da 860px) con bordo carta al 25% e angoli 24px: una con il campo mail e il bottone chiaro, una con il bottone oro. Il campo è a pillola, bordo carta al 45%, fondo carta al 6%, focus oro; la casella di consenso è quadrata (4px), bordo oro, piena d'oro con spunta terra quando selezionata.

### Inputs / Fields
Oggi esistono solo sulla fascia terra (vedi sopra). Su fondo chiaro non c'è ancora un campo nel sistema.

### Stacco fotografico (interazione firma)
Foto a tutta larghezza, `object-fit: cover`. Con JavaScript parte ritagliata al 12% per lato con angoli 24px e si apre al bordo pieno in 1400ms (`cubic-bezier(0.16, 1, 0.3, 1)`) quando entra nello schermo, una volta sola. Senza JavaScript, senza IntersectionObserver o con movimento ridotto è visibile subito e intera.

### Navigation
Header e footer sono generati da `src/build/layout.js`. Su desktop la barra è una griglia a tre colonne (1fr auto 1fr): il logo `gold.png` (44px di altezza) sta esattamente al centro, le voci di menu si dividono a sinistra (allineate verso il logo) e a destra, a 2rem l'una dall'altra. Su mobile il logo (40px) è centrato e il menu si apre da un pulsante sul bordo destro. Lo stile delle singole voci e del pulsante del menu è ancora quello precedente e non fa parte di questo sistema finché non viene rifatto.

## Do's and Don'ts

### Do:
- **Do** alternare carta e carta scura tra le sezioni, e tenere il bianco solo per le card.
- **Do** usare un solo bottone oro per schermata; l'alternativa è un bottone a contorno o un link oro inchiostro.
- **Do** mettere il testo oro su fondo chiaro sempre in oro inchiostro (4.8:1), mai in oro pieno.
- **Do** fissare l'ottica del Bodoni a 11 ovunque compaia.
- **Do** tenere il testo entro 64ch e listino, citazioni e FAQ entro 52rem.
- **Do** aprire le sezioni con un filetto oro sopra il titolo, se serve un segno; il filetto non porta mai parole.
- **Do** mostrare un risparmio con un prezzo di riferimento barrato e una riga che dice il fatto, senza enfasi.
- **Do** usare le foto professionali in apertura e dove si decide, quelle della sacerdotessa in profondità e negli stacchi, quelle della presentazione del libro come prova di fiducia.
- **Do** rispettare il movimento ridotto: stacchi visibili subito, riflesso del bottone e transizioni di bottoni e FAQ spenti.

### Don't:
- **Don't** costruire griglie di card uguali con icona in cima.
- **Don't** mettere un'etichetta in maiuscolo spaziato sopra i titoli: il segno sopra il titolo è solo il filetto.
- **Don't** distinguere un'offerta con badge, riquadri colorati o "consigliato" in maiuscolo: si distingue con una frase in corsivo.
- **Don't** comporre in Bodoni testo da leggere di seguito (testimonianze nelle card, domande, note): quello è Inter.
- **Don't** usare la fascia terra più di una volta per pagina.
- **Don't** dare la sfumatura, la luce interna o il riflesso ad altri bottoni o superfici: sono solo del bottone oro.
- **Don't** usare ombre nere, dure o sfalsate: le ombre sono basse e tinte di terra o d'oro.
- **Don't** usare emoji o caratteri come icone: le icone sono SVG a tratto, color corrente.
