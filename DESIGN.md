---
name: Giorgia Boccadifuoco
description: Sito di Giorgia Boccadifuoco: bianco puro e grafite, oro e vino rosato, sfumati di colore morbidi, titoli Bodoni, fasce staccate dai bordi.
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
    fontSize: "1.5rem"
    fontWeight: 550
    lineHeight: 1.25
    fontVariation: "\"opsz\" 11"
  lead:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "clamp(1.03rem, 0.98rem + 0.25vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.003em"
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 550
    lineHeight: 1.2
  small:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  label:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
rounded:
  finestra-menu: "16px"
  pannello: "18px"
  card: "20px"
  card-testimonianza: "22px"
  finestra: "24px"
  foto: "1.5rem"
  foto-interna: "14px"
  banda: "clamp(18px, 1rem + 1vw, 28px)"
  pill: "999px"
spacing:
  sezione-y: "clamp(5rem, 3.5rem + 6vw, 9.5rem)"
  gutter: "clamp(1.25rem, 0.8rem + 2vw, 2.5rem)"
  banda-margine: "clamp(0.4rem, 0.2rem + 0.6vw, 0.75rem)"
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
  button-accento:
    backgroundColor: "{colors.vino-rosato}"
    textColor: "{colors.bianco}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 3.4rem 0.65rem 1.4rem"
    height: "3.1rem"
  button-accento-hover:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.grafite}"
  button-fine:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.bianco}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 3.4rem 0.65rem 1.4rem"
    height: "3.1rem"
  button-fine-hover:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
  button-chiaro:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.bianco}"
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
    padding: "0.65rem 1.15rem 0.65rem 0.85rem"
  card-testimonianza:
    textColor: "{colors.grafite}"
    typography: "{typography.quote-card}"
    rounded: "{rounded.card-testimonianza}"
    padding: "1.6rem 1.6rem 1.3rem"
    width: "20.5rem"
    height: "24rem"
  faq-cerca:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.pill}"
    padding: "0 1.1rem"
    height: "3rem"
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
    padding: "1.25rem 1.75rem 1.75rem"
  disclaimer:
    backgroundColor: "{colors.avorio}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.pannello}"
    padding: "1.4rem 1.6rem"
  porta-principale:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)"
  porta-leggera:
    backgroundColor: "transparent"
    textColor: "{colors.grafite}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)"
  campo-mail:
    backgroundColor: "{colors.avorio}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.pill}"
    padding: "0.35rem"
  grazie:
    backgroundColor: "{colors.tinta-oro}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.pannello}"
    padding: "0.9rem 1.1rem"
  invito-guida:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.finestra}"
    padding: "2.25rem 2rem 1.75rem"
    width: "min(calc(100vw - 2rem), 30rem)"
  menu-servizi:
    backgroundColor: "{colors.bianco}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.finestra-menu}"
    padding: "0.5rem"
  piede:
    backgroundColor: "{colors.vino-scuro}"
    textColor: "{colors.su-vino}"
    padding: "clamp(4rem, 3rem + 4vw, 7.5rem) clamp(1.25rem, 0.8rem + 2vw, 2.5rem) 0"
---

# Design System: Giorgia Boccadifuoco

## Overview

**Creative North Star: "Il servizio di rivista, alla luce del giorno"**

Il sito è il ritratto editoriale di una persona: titoli Bodoni grandi, Giorgia in abito bianco scontornata al centro della scena, foto che respirano. Tommaso ha scelto la tavolozza "oro e vino rosato" su "bianco puro e grafite": pagina bianca, sezioni avorio alterne, testo grafite, oro per i filetti e i corsivi, un vino rosato preso dallo scialle delle foto per dare contrasto, tinte pastello per card, pillole e fondi. Il riferimento per spaziatura, impaginazione, card che reagiscono al passaggio, fasce arrotondate staccate dai bordi e fondi sfumati è il sito Mantality (21st.app).

La densità resta bassa: sezioni ariose, una frase grande per idea, poche cose per schermata. Il colore arriva per macchie morbide e sfocate (oro, pesca, rosa, lilla) che sfumano nel bianco, senza righe nette tra le sezioni. I bottoni sono leggeri e sereni; solo l'azione che conta è piena. Il gesto che si ripete è un cerchio che si allarga fino a riempire. Tutte le foto passano per la stessa resa calda e, dove si può, Giorgia guarda verso destra, verso ciò che viene dopo. Il sito non pubblica prezzi.

Rifiuti confermati: la griglia di card uguali con icona, i bottoni urlati o pesanti, il tono "troppo marketing, troppo template".

**Key Characteristics:**
- Bianco puro alternato ad avorio, testo grafite; sfumati di colore morbidi che entrano ed escono dal bianco.
- Oro per filetti, corsivi e il tocco dei bottoni; vino rosato per ciò che risponde e per l'azione principale; vino scuro per le rare fasce scure.
- Bodoni Moda pieno (600, display 650) con ottica «testo» fissa; Inter compatto (1rem) per il resto.
- Bottoni a pillola con un piccolo cerchio e la freccia che, al passaggio, si allarga fino a riempire.
- Fasce staccate dai bordi di pochi pixel (0.4–0.75rem), con angoli fino a 28px.
- Una sola resa per tutte le foto (`--grado-foto`).

## Colors

Luminosa e calda su base neutra: bianco, avorio e tinte pastello come fondo, grafite per il testo, oro e vino rosato come le sole voci che agiscono.

### Primary
- **Oro Giorgia** (`--color-primary`): filetti, riempimento dorato del bottone accento al passaggio, anello del campo mail a fuoco, casella di consenso spuntata, barra di scorrimento. Mai testo.
- **Oro Inchiostro** (`--color-gold-ink`): corsivo dei titoli su fondo chiaro, freccia e filo (al 45%) del bottone principale, virgolette disegnate delle testimonianze, icona del grazie, etichetta "Servizi" nel menu mobile, bordo della casella di consenso.
- **Oro Su Scuro** (`--oro-su-scuro`): l'oro sulle fasce scure: corsivo dei titoli, etichette, link e icone social in hover nel piede, cognome della firma, virgolette sulla card vino.

### Secondary
- **Vino Rosato** (`--color-bordeaux`): il contrasto. Fondo del bottone accento, link (600), riempimento delle card di servizio al passaggio, riga FAQ aperta e pulsante tondo della FAQ, anello della ricerca FAQ a fuoco, card vino delle testimonianze, freccia del bottone secondario, fine e chiaro, icona del disclaimer, contorno del focus, cursore.
- **Vino Scuro** (`--color-bordeaux-scuro`, `--color-earth`): fondo della sezione scura e del piede, attesa del video.

### Tertiary
- **Tinta Oro** (`--tinta-oro`): card di servizio, riempimento del bottone principale, risposta FAQ aperta, messaggio di grazie, selezione del testo.
- **Tinta Cipria** (`--tinta-cipria`): card di servizio, riempimento del bottone secondario.

Le pillole dei temi e le card delle testimonianze usano tinte proprie, più sature, dentro il componente (vedi Components): non sono colori del sistema da riusare altrove. Le variabili `--tinta-salvia` e `--tinta-lilla` esistono ma il codice non le usa.

### Neutral
- **Bianco** (`--color-bg`, `--color-surface`): la pagina, il fondo dei bottoni, la porta principale, la finestra della guida, il menu a tendina, la ricerca FAQ.
- **Avorio** (`--color-bg-soft`): sezioni alterne, fondo dell'apertura, righe FAQ chiuse, disclaimer, campo mail, pulsante di chiusura della finestra.
- **Grafite** (`--color-text`): titoli, testo forte, testo dei bottoni chiari.
- **Grafite Morbida** (`--color-text-soft`): testo corrente, lead, testo delle card.
- **Su Vino** e **Su Vino Morbido** (`--color-on-earth`, `--color-on-earth-soft`): testo forte e secondario sulle fasce scure.

### Named Rules
**The Due Voci Rule.** Solo oro e vino rosato agiscono. L'oro invita con discrezione (filo, freccia, tinta del bottone principale); il vino rosato risponde (link, card di servizio, FAQ aperta) e riempie l'unico bottone pieno, quello dell'azione che conta. Avorio e tinte fanno da fondo.

**The Fasce Scure Rule.** Il vino scuro è raro: la sezione scura di un solo concetto e il piede. Non stanno mai una accanto all'altra; per questo le porte, subito sopra il piede, stanno su un fondo chiaro.

**The Oro Leggibile Rule.** Su fondo chiaro l'oro che si legge è oro inchiostro; su fondo scuro è oro su scuro. L'oro pieno è solo linea, dettaglio o riempimento.

**The Niente Righe Tra Le Sezioni Rule.** I fondi colorati (`.sfumato`, `.fondo-finale`) entrano ed escono dal bianco con una maschera sfumata: tra una sezione e l'altra non si vede mai una riga netta.

## Typography

**Display Font:** Bodoni Moda Variable con corsivo, ottica fissata a 11 (fallback Bodoni 72, Didot, Georgia)
**Body Font:** Inter Variable (fallback system-ui)

**Character:** Un Bodoni da rivista pieno, tenuto sull'ottica «testo» perché i filetti restino robusti a schermo; un Inter compatto e quieto per tutto ciò che si legge di seguito, che lascia la scena ai titoli. Entrambi self-hosted via @fontsource-variable. La scelta del Bodoni è in attesa dell'approvazione della cliente: se cambia, cambia `--font-heading` e nient'altro.

### Hierarchy
- **Display** (650, 2.3–4.1rem, 1.04): il titolo d'apertura; da 900px 3.4–5.6rem, interlinea 1, nella colonna di sinistra.
- **Firma** (650, 2.8–9.6rem, 0.9, -0.03em): "Giorgia *Boccadifuoco*" in fondo al piede, cognome in corsivo 550 oro su scuro, su una riga da 700px.
- **Headline** (600, 2–3.4rem, 1.06): titoli di sezione, `text-wrap: balance`; nella figura centrale entro 16ch su due righe, sulla sezione scura entro 18ch.
- **Title Card** (600, 1.6–2.1rem, 1.1): titoli delle card di servizio; la porta principale 1.7–2.2rem, il titolo della finestra della guida 1.8rem.
- **Title** (600, 1.35–1.7rem, 1.2): titoli dei pezzi; il titolo del piede è 1.4–1.9rem.
- **Corsivo nei titoli** (550, oro inchiostro; oro su scuro sulle fasce scure).
- **Quote Card** (Bodoni 550, 1.5rem, 1.25, a sinistra): le testimonianze. Il corsivo Bodoni resta per la frase sugli stacchi (1.5–2.6rem).
- **Lead** (Inter 400, 1.03–1.15rem, 1.6): entro 64ch (34ch a destra del titolo, 46ch sul vino).
- **Body** (Inter 400, 1rem, 1.6): testo corrente, `text-wrap: pretty`; le risposte FAQ a 1.7 per i testi lunghi.
- **Button** (Inter 550, 0.9375rem): bottoni; domande FAQ Inter 600 a 1rem.
- **Small** (Inter, 0.875rem): piede delle card, nomi, riga di fiducia, piede del sito.
- **Label** (Inter 600, 0.75rem): etichetta del luogo, conteggio della ricerca, consenso, dati legali.

### Named Rules
**The Ottica Testo Rule.** Ogni uso del Bodoni fissa l'ottica a 11 (`font-optical-sizing: none; font-variation-settings: "opsz" 11`), dai titoli giganti alle testimonianze. Mai l'ottica automatica.

**The Bodoni Per Frasi Brevi Rule.** Bodoni per titoli, la firma e frasi brevi da ricordare (testimonianze, frase dello stacco), mai sotto 1.35rem. Testo corrente, domande, note e bottoni sono Inter.

**The Corsivo Oro Rule.** Un titolo può portare una sola chiusa in corsivo (`<em>`), peso 550, oro inchiostro (oro su scuro sul vino). Al massimo una per titolo.

**The Occhiello Rule.** Sopra un titolo di sezione è ammessa una riga breve in maiuscolo spaziato (`.occhiello`: Inter 600, 0.75rem, +0.14em, grafite morbido), come nel riferimento. Decisione di Tommaso (2026-10-06). Con parsimonia: al massimo una per sezione e non in tutte le sezioni, mai insieme a un filetto sopra lo stesso titolo.

## Layout

Mobile prima. Le sezioni (`.sezione`) hanno un respiro verticale di 5–9.5rem e un margine laterale di 1.25–2.5rem; il contenuto sta in 1180px. Testo entro 64ch.

**Intestazione di sezione** (`.intesta`): da 900px titolo a sinistra (1.3fr) e lead breve a destra (1fr, entro 34ch), allineati in basso. Le sezioni centrate (`.al-centro`) servono la figura centrale, le testimonianze e il video.

**Fasce staccate** (`.banda`): apertura, stacco e sezione scura rientrano di 0.4–0.75rem per lato con angoli di 18–28px. Il piede rientra allo stesso modo ma arriva al fondo della pagina: solo gli angoli alti sono arrotondati.

**Apertura.** Una fascia avorio. Da 900px due colonne (1fr / 0.85fr): titolo e, sotto, bottone accento, link e lead (entro 30rem) a sinistra; Giorgia in abito bianco scontornata a destra, intera, in piedi sul bordo basso della fascia (fino a 52rem). Testo e figura non si sovrappongono a nessuna larghezza. Su mobile: titolo, bottone, link, lead, poi Giorgia (al massimo 21rem).

**Figura centrale.** Titolo centrato su due righe, Giorgia scontornata (24rem) con le mani visibili e un alone radiale rosa-oro dietro, che sfuma verso il basso; quattro pillole di temi che le galleggiano intorno, due per lato; sotto, due righe di testo (46rem). Su mobile le pillole vanno a capo sotto di lei.

**Testimonianze.** Da 900px un mazzo stretto (46rem) di sei card, distribuite in modo uniforme, ognuna sopra la precedente; su mobile scorrimento orizzontale con aggancio al centro. Sotto, una riga di fiducia.

**FAQ.** Da 900px due colonne (1fr / 1.5fr): a sinistra titolo e ricerca, fermi mentre si scorre (sticky a 7rem); a destra fino a una dozzina di righe.

**Porte.** Da 900px due colonne (1.15fr / 1fr) allineate in basso: la porta WhatsApp, più grande, e la porta della guida.

**Piede.** Da 860px quattro colonne (1.4fr / 1fr / 1fr / 1.2fr) con spazi larghi (3.5rem; 2.5–5rem tra le colonne).

Le griglie si aprono a 760px (servizi), 860px (piede) e 900px (intestazioni, apertura, figura centrale, testimonianze, FAQ, porte).

**The Stacco Rule.** Uno stacco fotografico (altezza 22–44rem, in fascia arrotondata) può interrompere il ritmo tra due sezioni; mai due di fila.

## Elevation & Depth

Morbida: la profondità viene dal tono, dagli sfumati e dal movimento. Le ombre sono tinte di grafite, basse e con spread negativo, e spettano solo a ciò che sta sopra la scena: pillole dei temi, card delle testimonianze, la porta principale, il menu a tendina, la finestra della guida. Bottoni, card di servizio e pannelli sono piatti; i bottoni chiari hanno solo un filo interno da 1px.

### Shadow Vocabulary
- **Pillola tema** (`0 1px 2px rgba(46,47,51,0.06), 0 12px 26px -14px rgba(46,47,51,0.4)`).
- **Card testimonianza** (`0 1px 2px rgba(46,47,51,0.05), 0 26px 44px -28px rgba(46,47,51,0.45)`); al passaggio `0 2px 4px rgba(46,47,51,0.06), 0 34px 60px -26px rgba(46,47,51,0.5)`.
- **Porta principale** (`0 1px 2px rgba(46,47,51,0.05), 0 30px 60px -36px rgba(46,47,51,0.45)`).
- **Menu a tendina** (`0 2px 6px rgba(46,47,51,0.06), 0 24px 48px -24px rgba(46,47,51,0.35)`).
- **Finestra** (`0 2px 6px rgba(46,47,51,0.08), 0 40px 80px -30px rgba(46,47,51,0.5)`), con il fondo dietro velato di grafite al 28% e sfocato di 2px.
- **Frase sullo stacco** (`text-shadow: 0 1px 12px rgba(46,47,51,0.45)` più sfumatura grafite dal basso): solo leggibilità.

### Named Rules
**The Sopra La Scena Rule.** L'ombra spetta solo a ciò che sta sopra il resto (pillole, testimonianze, porta principale, menu, finestra). Tutto il resto è piatto e si stacca con il colore.

## Shapes

Tutto è tondo. Pillole (999px) per bottoni, campo mail, ricerca, temi ed etichette dei luoghi; righe FAQ a 26px; card di servizio e porte a 20px (foto interne 14px); card delle testimonianze a 22px; pannelli e grazie a 18px; menu a tendina 16px; finestra 24px; foto 24px; fasce 18–28px. Nessun bordo intorno a card e pannelli: le superfici si distinguono per tinta. Le linee sono rare e sottili: il filo interno dei bottoni, l'anello del campo mail e della ricerca, il filo dorato al 25% della porta della guida, la riga sopra la firma delle testimonianze, il filetto oro (3.5rem × 1px). Il cerchio (2.15rem nei bottoni, 2.6rem nelle card) è la forma firma: si allarga con `clip-path: circle()` fino a riempire. Gli avatar sono cerchi da 2.1rem (2.6rem nella riga di fiducia, sovrapposti).

## Components

### Buttons
Una pillola con un piccolo cerchio a destra e la freccia dentro; al passaggio e al focus il cerchio si allarga fino a riempire (`clip-path`, 420ms, `cubic-bezier(0.65, 0, 0.35, 1)`), il filo sparisce, la freccia avanza di 3px.
- **Shape:** altezza minima 3.1rem, Inter 550 a 0.9375rem allineato a sinistra, cerchio da 2.15rem.
- **Primary (leggero):** pillola bianca, filo oro inchiostro al 45%, cerchio tinta oro, freccia oro inchiostro; si riempie di tinta oro.
- **Secondary (leggero):** pillola bianca, filo vino rosato al 40%, cerchio tinta cipria, freccia vino rosato; si riempie di cipria.
- **Accento:** vino rosato pieno, testo bianco, cerchio bianco con freccia vino rosato; al passaggio il cerchio si allarga in oro e il testo diventa grafite. Per l'azione che conta: "Inizia subito" nell'apertura, WhatsApp nella porta principale.
- **Fine:** sopra le foto, vetro (bianco all'8%, sfocato 6px) con filo bianco al 55%, testo bianco 500; si riempie di bianco con testo grafite.
- **Chiaro:** sulle fasce scure, vetro con filo bianco al 40%; si riempie di bianco con testo grafite.
- **Focus / Disabled:** contorno vino rosato da 2px; disabilitato opacità 0.45; con movimento ridotto il cambio è immediato.
- **Accanto al bottone:** l'alternativa è un link vino rosato 600 sottolineato (1px a 0.25em, sparisce in hover).

### Card di servizio (firma)
Due card affiancate da 760px, in tinta oro e tinta cipria, angoli 20px, almeno 26rem: foto 16:10 ad angoli 14px, titolo Bodoni, una riga entro 40ch, piede in Inter 600 con il cerchio vino rosato e la freccia bianca in basso a destra. Tutta la card è il link. Al passaggio e al focus il cerchio si allarga fino a coprire la card (480ms, curva a S), il testo diventa bianco e la card sale di 6px.

### Figura centrale con i temi
Giorgia scontornata che sfuma negli ultimi 28% in basso, con un alone radiale sfocato rosa e oro dietro. Intorno quattro pillole con un'icona a tratto (1.2rem, tratto 1.5) e un tema, la parola chiave in 650, ognuna su una tinta diversa (lilla #E6E1F0, oro #F6E7C3, salvia #E1EADF, cipria #F2D9E0), con ombra morbida.

### Testimonianze
Card a 22px, 20.5rem × 24rem da 900px. In alto le virgolette disegnate a tratto (oro inchiostro con un'eco al 45%; oro su scuro sulla card vino) e, a destra, la città in una pillola bianca; poi la testimonianza in Bodoni 550 a 1.5rem; in basso, sotto una riga sottile, avatar tondo, nome e numero progressivo (tabellare, al 60%). Sei tinte diverse perché le card si stacchino tra loro: #F6F1E9, #F0DCAA, #EDCDD6, vino rosato con testo bianco, #F8E9C8, #E5D6DD. Da 900px rotazioni alternate (-8°, 5°, -3°, 6°, -8°, 5°), ognuna sopra la precedente; al passaggio la card si raddrizza, sale di 14px e cresce a 1.03, le vicine si spostano di 2.25rem di lato (500ms, `cubic-bezier(0.22, 1, 0.36, 1)`). Sotto, la **riga di fiducia**: volti sovrapposti con bordo bianco su tinte alternate, una linea verticale sottile e una frase breve.

### FAQ
A sinistra titolo e **ricerca**: pillola bianca con anello grafite al 14% (vino rosato a fuoco), lente a tratto, conteggio dei risultati in etichetta e, se non trova nulla, un pannello bianco da 22px con una frase. A destra le righe a pillola (26px) su avorio, Inter 600, con un pulsante tondo vino rosato da 2.5rem e la punta bianca. Aperta: intestazione vino rosato con testo bianco, punta ruotata, risposta su tinta oro con margini larghi (1.25rem 1.75rem 1.75rem) e paragrafi entro 64ch, per testi lunghi. Altezza animata in 380ms dove supportato.

### Disclaimer
Pannello avorio da 18px, senza bordo, icona SVG a tratto vino rosato, prima frase in 600. Al massimo 46rem.

### Sezione scura
Fascia vino scuro arrotondata con la foto (oggi la ragnatela) scurita a 0.6 e una sfumatura vino scuro da sinistra (92% → 30%); una frase grande con chiusa oro su scuro, lead in su-vino-morbido, bottone chiaro.

### Video in movimento
Uno schermo 16:9 arrotondato (18–28px) per un video breve in loop, muto, che parte da solo; sotto, titolo e lead centrati.

### Le due porte
Senza fascia: stanno sul fondo finale sfumato. La **porta principale** (WhatsApp) è bianca, 20px, con ombra, titolo 1.7–2.2rem e il bottone accento; Giorgia scontornata esce dalla card verso l'alto (3.5rem sopra il bordo), a destra; sotto 600px la figura scende sotto il testo. La **porta leggera** (la guida) è trasparente con un filo dorato al 25% e il campo mail. Il **campo mail** è una pillola avorio con anello sottile e il bottone principale dentro; a fuoco l'anello diventa oro da 2px; sotto 520px campo e bottone vanno uno sopra l'altro. Dopo l'invio il modulo si restringe e svanisce (420ms) e al suo posto entra il **grazie**: pannello tinta oro da 18px con un'icona a tratto oro inchiostro.

### Invito alla guida
Una finestra centrale di media misura (fino a 30rem), bianca, 24px, con ombra profonda; entra salendo di 16px e crescendo da 0.98 (420ms). Dietro, il fondo velato e appena sfocato. Si chiude con la X (cerchio avorio da 2.2rem) o toccando fuori; compare una volta per visita, e dopo l'iscrizione si chiude da sola in 1.5s.

### Fondi sfumati
**Sfumato** (`.sfumato`): quattro macchie radiali di colore (oro, pesca, rosa, lilla) sfocate di 40px, che escono di 6rem sopra e sotto la sezione e sfumano nel bianco con una maschera; nell'apertura stanno dentro la fascia avorio, senza maschera. **Fondo finale** (`.fondo-finale`): macchie oro e rosa molto tenui dietro le porte che continuano sotto il piede fino alla fine della pagina (`.site` con `overflow: clip`).

### Piede
Generato da `src/build/layout.js`: fascia vino scuro staccata ai lati che arriva al fondo della pagina, angoli arrotondati solo in alto, molto ariosa. Quattro colonne: invito in Bodoni con il bottone e le icone social (marchi a tinta piena, 1.1rem, senza cerchi, all'85%, oro su scuro in hover; i link vengono da `src/data/site.js`); "Il sito"; "Altro"; e un riquadro dati (bianco al 6%, 16px) con P.IVA, anno e il disclaimer in piccolo. Etichette in oro su scuro. In fondo la firma gigante che tocca il bordo inferiore.

### Navigation
Su desktop griglia a tre colonne (1fr auto 1fr) con il logo `gold.png` (44px) esattamente al centro: a sinistra Home e Chi sono, a destra Servizi e Contatti. "Servizi" apre un menu a tendina bianco (16px, con ombra) con le due pagine dei servizi; la punta ruota all'apertura. Su mobile logo centrato, menu dal bordo destro, con "Servizi" come piccola etichetta oro inchiostro sopra le due voci. Lo stile delle singole voci e del pulsante del menu è ancora quello precedente.

### Foto e stacco
Tutte le foto passano per `--grado-foto` (`saturate(0.86) sepia(0.1) contrast(0.97) brightness(1.02)`). Le figure scontornate sono Giorgia in abito bianco. Lo stacco parte ritagliato al 12% per lato e si apre in 1400ms fino agli angoli della fascia, una volta; può portare in basso, accanto alla frase, un bottone fine. Senza JavaScript o con movimento ridotto è subito aperto.

## Do's and Don'ts

### Do:
- **Do** alternare bianco e avorio e far entrare il colore con sfumati morbidi che svaniscono nel bianco.
- **Do** usare un solo bottone accento per schermata, per l'azione che conta; gli altri bottoni sono leggeri.
- **Do** usare il vino rosato per ciò che risponde (link, card di servizio, FAQ aperta) e l'oro per i dettagli che invitano.
- **Do** staccare dai bordi, con angoli arrotondati, le fasce piene: apertura, stacco, sezione scura, piede.
- **Do** fissare l'ottica del Bodoni a 11 ovunque compaia.
- **Do** far passare ogni foto per `--grado-foto`, e scegliere dove si può foto in cui Giorgia guarda verso destra.
- **Do** rispettare il movimento ridotto: riempimenti, sollevamenti, mazzo, finestra, menu e stacchi senza animazione.

### Don't:
- **Don't** riempire di colore scuro un bottone leggero: solo il bottone accento è pieno, e al passaggio diventa oro, mai più scuro.
- **Don't** costruire griglie di card uguali con icona in cima.
- **Don't** mettere l'occhiello in ogni sezione: è un accento raro, non una formula.
- **Don't** mettere due fasce scure una accanto all'altra.
- **Don't** usare l'oro pieno come colore del testo.
- **Don't** comporre in Bodoni il testo corrente, le domande o i bottoni.
- **Don't** chiudere una sezione colorata con una riga netta: i fondi sfumano nel bianco.
- **Don't** aggiungere bordi intorno a card e pannelli: si separano con la tinta.
- **Don't** usare emoji o caratteri come icone: le icone sono SVG a tratto, marchi SVG o maschere CSS, color corrente.
