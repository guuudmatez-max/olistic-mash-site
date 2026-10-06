---
name: Giorgia Boccadifuoco
description: Sito di Giorgia Boccadifuoco, un servizio fotografico di rivista su una persona: carta calda, terra, titoli Bodoni, oro come filo.
colors:
  oro: "#C9A15C"
  oro-chiaro: "#F4E2BF"
  oro-inchiostro: "#8A6526"
  carta: "#F7F3EB"
  carta-scura: "#F2E8DA"
  bianco-card: "#FFFFFF"
  terra: "#2F2417"
  terra-hover: "#4A3824"
  terra-morbida: "#6B5A45"
  terra-velata: "#D8C8B0"
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
  headline:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2rem, 1.45rem + 2.4vw, 3.4rem)"
    fontWeight: 600
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
  pannello: "18px"
  foto: "1.5rem"
  pill: "999px"
spacing:
  sezione-y: "clamp(5rem, 3.5rem + 6vw, 9.5rem)"
  gutter: "clamp(1.25rem, 0.8rem + 2vw, 2.5rem)"
  contenitore: "1180px"
  misura: "64ch"
  colonna-editoriale: "52rem"
components:
  button-primary:
    backgroundColor: "{colors.terra}"
    textColor: "{colors.carta}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.terra-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.terra}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  button-chiaro:
    backgroundColor: "{colors.carta}"
    textColor: "{colors.terra}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  button-chiaro-hover:
    backgroundColor: "{colors.bianco-card}"
  card:
    backgroundColor: "{colors.bianco-card}"
    rounded: "{rounded.pannello}"
    padding: "clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem)"
  disclaimer:
    backgroundColor: "{colors.carta-scura}"
    textColor: "{colors.terra}"
    rounded: "{rounded.pannello}"
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

Il sito è impaginato come un servizio fotografico di una rivista italiana dedicato a una persona, non come la landing di una coach. Si apre con Giorgia scontornata, in piedi davanti a un titolo Bodoni grandissimo, senza riquadri. Poi foto grandi che respirano, titoli Bodoni pieni, pochi elementi per schermata. La pagina alterna due carte calde; la terra scura dà corpo ai bottoni e a rare fasce scure fotografiche; l'oro è un filo (filetti, corsivi, un bagliore), non una superficie.

La densità è bassa per scelta: sezioni con molta aria verticale, testo tenuto entro una misura di lettura, bordi leggeri o assenti, un'azione principale per schermata. Le foto seguono due filoni con una sola resa cromatica: professionale (studio, giacca, parco) in apertura e dove si decide; sacerdotessa (abito bianco, tramonto, lago) in profondità e negli stacchi. Il gruppo si mostra con una foto vera di un'armonizzazione.

Rifiuti confermati: la griglia di card uguali con icona, i bottoni urlati (sfumature, riflessi, ombre), il tono "troppo marketing, troppo template". Il sito non pubblica prezzi.

**Key Characteristics:**
- Carta calda alternata a carta scura, sezione per sezione; bianco solo per le card.
- Bottoni piatti in terra a pillola, con una freccia sottile che avanza di 4px.
- Bodoni Moda pieno (600, display 650) con ottica «testo» fissa; Inter per tutto ciò che si legge di seguito.
- Bordi leggeri o assenti: pannelli da 18px, foto da 24px, una sola ombra molto morbida per le card.
- Oro come filo: filetti sopra i titoli, corsivo nei titoli, bagliore dietro l'apertura.
- Una sola resa per tutte le foto (`--grado-foto`), e stacchi a tutta larghezza che si aprono dal centro.

## Colors

Una tavolozza calda e ristretta: due carte, una terra in tre toni, un oro che fa da filo.

### Primary
- **Terra** (`--color-text`, `--color-earth`): il colore che agisce. Riempie il bottone principale, scrive titoli e testo forte, è la base delle fasce scure. Hover del bottone in **Terra Accesa** (`terra-hover`).

### Secondary
- **Oro Inchiostro** (`--color-gold-ink`): l'oro leggibile su fondo chiaro (4.8:1 su carta). Corsivo dentro i titoli, link, firme delle testimonianze, icona del disclaimer, contorno del focus, cursore.
- **Oro Giorgia** (`--color-primary`): filetti sopra i titoli, corsivo dei titoli sulle fasce scure, bagliore radiale dell'apertura (al 22%), casella di consenso spuntata, barra di scorrimento. Mai testo su fondo chiaro.
- **Oro Velo** (`--color-primary-light`): sfondo della selezione del testo.

### Neutral
- **Carta** (`--color-bg`, `--color-on-earth`): sfondo della pagina; testo, bottone chiaro e velo dei pannelli sulle fasce scure.
- **Carta Scura** (`--color-surface-soft`): sezioni alterne, fondo dell'apertura, pannello del disclaimer, attesa delle foto.
- **Bianco Card** (`--color-surface`): solo le card.
- **Terra Morbida** (`--color-text-soft`): testo corrente, lead, risposte delle FAQ, testo delle strade.
- **Terra Velata** (`--color-on-earth-soft`): testo secondario ed etichette sulle fasce scure.

Le righe e i bordi non hanno un colore proprio: sono terra in trasparenza (righe FAQ al 10%, bordo del bottone a contorno al 55%).

### Named Rules
**The Fasce Scure Rule.** Le fasce scure sono rare e hanno uno scopo: una frase che pesa (`.sezione-scura`) o la scelta finale (le due porte). Ognuna porta una foto scurita sotto un velo di terra; non stanno mai una accanto all'altra e non diventano il ritmo della pagina.

**The Oro È Un Filo Rule.** L'oro non riempie superfici: segna (filetti, corsivi, focus) e scalda (il bagliore dell'apertura). Su fondo chiaro, quando deve essere letto, diventa oro inchiostro.

**The Bianco Per Le Card Rule.** Il bianco puro compare solo nelle card. Le sezioni vivono di carta e carta scura alternate.

## Typography

**Display Font:** Bodoni Moda Variable con corsivo, ottica fissata a 11 (fallback Bodoni 72, Didot, Georgia)
**Body Font:** Inter Variable (fallback system-ui)

**Character:** Un Bodoni da rivista pieno e deciso, tenuto sull'ottica «testo» perché i filetti restino robusti a schermo; Inter pulito e tranquillo per tutto ciò che si legge. Entrambi self-hosted via @fontsource-variable. La scelta del Bodoni è in attesa dell'approvazione della cliente: se cambia, cambia `--font-heading` e nient'altro.

### Hierarchy
- **Display** (650, 2.3–4.1rem fluido, 1.04): il titolo d'apertura. Da 900px nell'apertura sale a 4.25–7.5rem, interlinea 0.98, entro 12ch, e passa dietro a Giorgia (`display-apertura`).
- **Headline** (600, 2–3.4rem fluido, 1.08): titoli di sezione (`.titolo-sezione`), con `text-wrap: balance`; sulle fasce scure entro 18ch.
- **Title** (600, 1.35–1.7rem fluido, 1.2): titoli dei pezzi, testate di strade e porte.
- **Corsivo nei titoli** (550, oro inchiostro; oro pieno sulle fasce scure): la chiusa del titolo.
- **Quote** (Bodoni corsivo 400, 1.75–2.9rem fluido, 1.22): la citazione grande; lo stesso corsivo serve la frase sugli stacchi (1.5–2.6rem).
- **Lead** (Inter 400, 1.125–1.3rem, 1.6): la frase che segue il titolo, entro 64ch (46ch sulle fasce scure).
- **Body** (Inter 400, 1.0625rem, 1.65): testo corrente e testimonianze nelle card, entro 64ch, `text-wrap: pretty`.
- **Body Strong** (Inter 600, 1.0625rem, 1.4): domande delle FAQ.
- **Label** (Inter 600, 0.8125rem, +0.04em, minuscolo): firme, etichette dei campi, consenso. Mai maiuscolo spaziato.

### Named Rules
**The Ottica Testo Rule.** Ogni uso del Bodoni fissa l'ottica a 11 (`font-optical-sizing: none; font-variation-settings: "opsz" 11`), anche nei titoli grandi. Mai l'ottica automatica: a grandi misure i filetti diventano capelli e il titolo si sbiadisce.

**The Bodoni Non Si Legge A Lungo Rule.** Bodoni per titoli e le poche frasi da ricordare; Inter per ciò che si legge di seguito, anche quando è breve: testimonianze nelle card, domande delle FAQ, note. Il corsivo Bodoni vive solo nella chiusa dei titoli, nella citazione grande e nella frase dello stacco.

**The Corsivo Oro Rule.** Un titolo può portare una sola chiusa in corsivo (`<em>`), peso 550, color oro inchiostro (oro pieno sulle fasce scure). È la voce che scioglie la frase: al massimo una per titolo, non in ogni titolo.

## Layout

Mobile prima. Ogni sezione (`.sezione`) ha un respiro verticale fluido di 5–9.5rem e un margine laterale fluido di 1.25–2.5rem; il contenuto sta in un contenitore di 1180px centrato. Il testo non supera 64ch; citazione e FAQ non superano 52rem.

**Apertura.** A tutto schermo, senza card: fondo carta scura con un bagliore d'oro radiale in basso a destra. Da 900px il titolo grandissimo occupa la parte alta, Giorgia scontornata sta in piedi in basso a destra, appoggiata al bordo inferiore, davanti al titolo; bottone, link e lead stanno in basso a sinistra (entro 26rem). Su mobile l'ordine è titolo, bottone, link, lead, poi Giorgia centrata (al massimo 22rem di larghezza) in fondo.

Le composizioni testo+foto seguono un passo asimmetrico (5/6 in "chi sono", con una foto piccola sfalsata a destra sotto il testo). Le griglie a più colonne si aprono a 760px (testimonianze), 860px (porte e strade) e 900px (composizioni, apertura). Le foto in serie stanno su 3 colonne anche su mobile, in formato 3:4.

**The Stacco Rule.** Tra le sezioni si può interrompere il ritmo con uno stacco fotografico a tutta larghezza (altezza 22–44rem), con eventuale frase in Bodoni corsivo su una sfumatura di terra dal basso. Al massimo uno stacco tra due sezioni, mai due di fila.

## Elevation & Depth

Quasi piatta: la profondità viene dal tono (carta, carta scura, terra) e dalle foto, non dalle ombre. L'unica ombra è quella, molto morbida, delle card bianche. Bottoni, pannelli, disclaimer e porte sono piatti.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgba(47,36,23,0.04), 0 12px 32px -20px rgba(47,36,23,0.18)`): appoggia le card bianche sulla carta, appena.
- **Frase sullo stacco** (`text-shadow: 0 1px 12px rgba(47,36,23,0.45)` più sfumatura terra 0.78→0): solo per la leggibilità del testo sulla foto.

### Named Rules
**The Piatto Per Default Rule.** Nessuna ombra su bottoni e pannelli; l'ombra delle card è tinta di terra, con spread negativo, e si vede solo sotto. Niente ombre dure, sfalsate o aloni colorati.

## Shapes

Tre forme: pannelli da 18px (card, disclaimer, porte), foto da 24px (`--radius-card`, foto e stacchi), pillola (999px) per bottoni e campi. I bordi sono leggeri o assenti: le card non hanno bordo, il disclaimer è solo un pannello di carta scura, le porte sono un velo di carta al 6%; le righe delle FAQ sono terra al 10%. Il filetto (`.filetto`) è una riga oro di 3.5rem × 1px sopra il titolo di sezione: ornamento, non etichetta, e non porta mai testo. Lo stacco si apre da un ritaglio arrotondato al 12% per lato fino al bordo pieno.

## Components

### Buttons
Pieni, piatti, sobri: un colore, una freccia.
- **Shape:** pillola (999px), altezza minima 3.25rem, padding 0.85rem 1.6rem, Inter 600 a 1rem, +0.01em.
- **Freccia:** ogni bottone porta a destra una freccia sottile (maschera CSS, 0.95rem × 0.6rem, colore corrente) che in hover avanza di 4px (320ms, `cubic-bezier(0.16, 1, 0.3, 1)`). `.btn--senza-freccia` la toglie quando il bottone ha già un'icona (WhatsApp).
- **Primary:** terra piena, testo carta; hover terra accesa. Uno per schermata.
- **Secondary:** trasparente, testo terra, bordo terra al 55%; in hover bordo pieno e fondo terra al 5%.
- **Chiaro:** sulle fasce scure, carta piena con testo terra; in hover bianco. È il bottone principale delle porte.
- **Focus / Disabled:** contorno oro inchiostro 2px a 3px; disabilitato opacità 0.45. Transizioni di colore 240ms; con movimento ridotto tutto fermo.
- **Accanto al bottone:** l'alternativa è un link sottolineato in oro inchiostro (sottolineatura 1px a 0.25em, che sparisce in hover).

### Cards / Containers
- **Corner Style:** 18px.
- **Background:** bianco, unico uso del bianco.
- **Shadow Strategy:** ombra Card (vedi Elevation), molto morbida.
- **Border:** nessuno.
- **Internal Padding:** fluido 1.5–2.25rem.
- Le card servono contenuti di altezza diversa (testimonianze) e si allineano in alto; non sono una griglia di card uguali con icona.

### Apertura (firma)
Giorgia scontornata (PNG/WebP trasparente) davanti al titolo display grandissimo, su carta scura con bagliore d'oro; nessun riquadro intorno. Il titolo sta sotto (z-index 1), la figura in mezzo (2), il testo con i bottoni sopra (3).

### Sezione scura
Una fascia a tutta larghezza per un concetto: foto di sfondo con la resa comune e luminosità a 0.62, velo di terra da sinistra (88% → 25%), una frase grande in Bodoni con chiusa in oro pieno e una lead in terra velata. Nessun bottone, nessun filetto.

### Citazioni e testimonianze
Una citazione grande in Bodoni corsivo, senza virgolette decorative né riquadro; firma in etichetta oro inchiostro. Le testimonianze brevi stanno in card bianche, in Inter a misura di testo, due per riga da 760px.

### FAQ
`<details>` nativo senza JavaScript: domanda in Inter 600, freccia a squadra sottile in terra che ruota (320ms), righe terra al 10% tra le voci, risposta entro 64ch. Dove il browser lo supporta, l'altezza si apre in 380ms.

### Disclaimer
Nota sulla natura del lavoro: pannello carta scura senza bordo, angoli 18px, icona informativa SVG a tratto in oro inchiostro a sinistra, prima frase in grassetto 600. Al massimo 46rem.

### Le strade
Due strade affiancate da 860px (consulenze individuali e gruppo): per ognuna una foto 4:3 ad angoli 24px, una testata in Bodoni, una riga di testo in terra morbida entro 40ch e un link oro inchiostro. Nessun bottone.

### Le due porte (fascia scura)
La scelta finale. Sotto la terra una foto notturna di un albero, coperta da un velo di terra dal 72% al 90%. Titolo in carta con corsivo oro pieno, due porte affiancate (da 860px): pannelli senza bordo, velo di carta al 6%, angoli 18px. Una porta ha il campo mail e il bottone chiaro, l'altra il bottone chiaro con l'icona WhatsApp. Il campo è a pillola, bordo carta al 45%, fondo carta al 6%, focus oro; la casella di consenso è quadrata (4px), bordo oro, piena d'oro con spunta terra quando selezionata.

### Inputs / Fields
Oggi esistono solo sulla fascia delle porte (vedi sopra). Su fondo chiaro non c'è ancora un campo nel sistema.

### Foto e stacco fotografico
Tutte le foto passano per la stessa resa, `--grado-foto` (`saturate(0.86) sepia(0.1) contrast(0.97) brightness(1.02)`): un filo più calde e meno sature, così i due filoni stanno insieme. Lo stacco è una foto a tutta larghezza: con JavaScript parte ritagliata al 12% per lato con angoli 24px e si apre al bordo pieno in 1400ms quando entra nello schermo, una volta sola. Senza JavaScript, senza IntersectionObserver o con movimento ridotto è visibile subito e intera.

### Navigation
Header e footer sono generati da `src/build/layout.js`. Su desktop la barra è una griglia a tre colonne (1fr auto 1fr): il logo `gold.png` (44px di altezza) sta esattamente al centro, le voci di menu si dividono a sinistra (allineate verso il logo) e a destra, a 2rem l'una dall'altra. Su mobile il logo (40px) è centrato e il menu si apre da un pulsante sul bordo destro. Lo stile delle singole voci e del pulsante del menu è ancora quello precedente e non fa parte di questo sistema finché non viene rifatto.

## Do's and Don'ts

### Do:
- **Do** alternare carta e carta scura tra le sezioni, e tenere il bianco solo per le card.
- **Do** usare un solo bottone pieno per schermata; l'alternativa è un bottone a contorno o un link oro inchiostro.
- **Do** mettere il testo oro su fondo chiaro sempre in oro inchiostro (4.8:1), mai in oro pieno.
- **Do** fissare l'ottica del Bodoni a 11 ovunque compaia.
- **Do** far passare ogni foto per `--grado-foto`.
- **Do** tenere il testo entro 64ch e citazioni e FAQ entro 52rem.
- **Do** aprire le sezioni chiare con un filetto oro sopra il titolo, se serve un segno; il filetto non porta mai parole.
- **Do** usare le foto professionali in apertura e dove si decide, quelle della sacerdotessa in profondità e negli stacchi.
- **Do** rispettare il movimento ridotto: stacchi visibili subito, freccia e transizioni di bottoni e FAQ ferme.

### Don't:
- **Don't** dare ai bottoni sfumature, riflessi, ombre o aloni: sono piatti.
- **Don't** costruire griglie di card uguali con icona in cima.
- **Don't** mettere un'etichetta in maiuscolo spaziato sopra i titoli: il segno sopra il titolo è solo il filetto.
- **Don't** comporre in Bodoni testo da leggere di seguito (testimonianze nelle card, domande, note): quello è Inter.
- **Don't** mettere due fasce scure una accanto all'altra, né usarle come ritmo della pagina.
- **Don't** usare l'oro come fondo di bottoni, pannelli o sezioni: l'oro è un filo.
- **Don't** chiudere l'apertura in una card o in un riquadro: Giorgia sta sulla carta, davanti al titolo.
- **Don't** usare emoji o caratteri come icone: le icone sono SVG a tratto, color corrente.
