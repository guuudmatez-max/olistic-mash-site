---
version: 1
slug: "stile-html"
primary_target: "stile.html"
related_targets: []
---

## Scope

Pagina di prova del sistema di design (`stile.html`), fuori menu e non indicizzata. Mostra ogni pezzo ricorrente del sito v1 nel mondo visivo deciso. Modo: Persuade (i pezzi servono pagine che vendono), letta da Tommaso per approvare.

## Vincoli dal brief

Mondo fissato da `decisions/direzione-visiva-skin.md`: neutri caldi, oro #C9A15C, card arrotondate, ombre morbide, serif editoriale nei titoli, foto ambientate a tutta larghezza come stacchi, layout arioso che genera rispetto. Mobile prima (80% del traffico). Da evitare (Tommaso): troppo marketing, troppo template. Logo `gold.png` approvato. Due filoni di foto convivono: professionale (studio, giacca) e sacerdotessa (abito bianco, tramonto). Percorso di build: code-led, nessuna generazione di immagini disponibile.

## Direction contract

THESIS: Il sito come un servizio fotografico di rivista italiana su una persona, non una landing da coach: foto grandi che respirano, titoli Bodoni, pochi elementi per schermata. Rifiuta la griglia di card uguali con icona e i bottoni urlati.
OWN-WORLD: Carta calda #F7F3EB alternata a carta scura #F2E8DA per le sezioni, bianco solo per le card, terra scura #2F2417 per una sola fascia piena (le due porte); prezzi come listino da rivista con filetti oro, oro #C9A15C come superficie dei bottoni con testo terra, oro scuro per il testo. Bodoni Moda in display (ottica variabile), Inter per il testo. Angoli 24px, bottoni a pillola, ombre basse e morbide. Linee sottili dorate come unico ornamento.
STORY: Chi legge vede prima una persona seria e calda, poi capisce cosa offre e quanto costa, legge chi c'è già passato, scioglie i dubbi, sceglie una delle due porte.
FIRST VIEWPORT: Mobile: ritratto professionale in alto (circa metà dello schermo), sotto titolo Bodoni e subito il solo bottone oro, tutto dentro i primi 844px; il testo di accompagnamento viene dopo il bottone. Desktop: titolo a sinistra su 5 colonne con testo e bottone, foto a destra su 7.
FORM: Sistema editoriale da rivista con stacchi fotografici. Mondo fissato da decisions/direzione-visiva-skin.md: il tiro dei concept è saltato per quel vincolo, quindi nessuna chiave di seed.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Interazione firma: lo stacco fotografico a tutta larghezza si apre dal centro (clip-path) quando entra nello schermo, una volta sola; visibile da subito senza JavaScript e con movimento ridotto.
