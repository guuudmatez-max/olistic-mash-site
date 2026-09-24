// Dati del sito: l'unico posto dove cambiare nomi, prezzi, contatti e date.
// Le pagine li leggono al build: nelle pagine HTML si scrive {{ percorso.prezzo }}
// e al build diventa "600 €". Non scrivere questi valori a mano nelle pagine.
//
// [IN SOSPESO: ...] segna un dato che aspetta la conferma di Giorgia.

export const site = {
  nome: "Giorgia Boccadifuoco",
  mail: "info@giorgiaboccadifuoco.com",
  piva: "04442120277",
  zona: "Veneto, Riviera del Brenta",

  // Numero con prefisso internazionale, solo cifre.
  whatsapp: "393495463549",

  libroAmazon: {
    titolo: "12 Passi per Amore",
    url: "https://www.amazon.it/12-passi-Amore-trasformare-opportunit%C3%A0/dp/B0FCXZV42R",
  },

  schedaGoogle: "https://share.google/QAlK9P82l5Ha89t4s",

  privacy: "https://www.iubenda.com/privacy-policy/12385559/full-legal",
  cookie: "https://www.iubenda.com/privacy-policy/12385559/cookie-policy",

  disclaimer:
    "Il mio lavoro non è terapia psicologica e non sostituisce percorsi psicologici, psicoterapeutici o cure mediche.",

  // Offerta
  mappatura: {
    nome: "Incontro di mappatura [IN SOSPESO: nome]",
    presenza: { prezzo: "110 €", durata: "90 minuti" },
    online: { prezzo: "70 €", durata: "60 minuti" },
  },
  percorso: {
    nome: "Percorso",
    prezzo: "600 €",
    incontri: "di solito 4-5 incontri",
  },
  sedutaSingola: {
    nome: "Seduta singola",
    prezzo: "140 €",
  },
  armonizzazioni: {
    nome: "Armonizzazioni di Gruppo",
    prezzo: "73 €",
    orario: "dalle 15 alle 20",
    posti: "massimo 12-15 persone",

    // Prossime date, dalla più vicina. Esempio:
    // { data: "2026-11-14", luogo: "Mira (VE)" },
    date: [],
  },

  // Messaggi precompilati di WhatsApp: nelle pagine un link con
  // data-wa-key="consulenze" apre WhatsApp con il messaggio "consulenze".
  messaggiWhatsapp: {
    generico: "Ciao Giorgia, ti scrivo dal sito. Vorrei qualche informazione.",
    consulenze: "Ciao Giorgia, ti scrivo dal sito. Vorrei informazioni sulle consulenze individuali.",
    armonizzazioni: "Ciao Giorgia, ti scrivo dal sito. Vorrei informazioni sulle Armonizzazioni di Gruppo.",
  },
};
