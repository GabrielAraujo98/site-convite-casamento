// Language-neutral invitation data: names, dates, links and keys.
// Every text guests read lives in src/locales/pt-BR/translation.json.
export const wedding = {
  couple: {
    partnerOne: 'Lici',
    partnerTwo: 'Biel',
  },

  // ISO 8601 with the venue's UTC offset.
  date: '2027-07-03T16:00:00-03:00',
  // Dates and times are shown in the venue's time zone for every guest.
  timeZone: 'America/Sao_Paulo',

  // Shown in the "what you need to know" section.
  venue: 'Associação do Ministério Público (granja dos promotores)',

  dressCode: {
    pinterestUrl: 'https://pin.it/2UTgcKaTC',
  },

  rsvp: {
    // Value written in the spreadsheet for each answer.
    sheetAnswers: {
      yes: 'sim',
      flu: 'não',
    },
    // Set a form endpoint (Formspree, Google Apps Script, etc.) to receive replies.
    // While empty, replies are only logged in the browser console.
    endpoint: 'https://script.google.com/macros/s/AKfycbzjE7zt7goalkL6y8fuZYi4xp-5zBk7XeWP0ODRrMnSBCShjbkqEYZCUfV986_T3Acx7A/exec',
  },

  gifts: {
    // Placeholder: replace with the real PIX key.
    pixKey: 'pix-key@example.com',
  },
}
