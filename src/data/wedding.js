// Language-neutral invitation data: names, dates, places, links and keys.
// Every text guests read lives in src/locales/<language>/translation.json.
export const wedding = {
  couple: {
    partnerOne: 'Lici',
    partnerTwo: 'Biel',
  },
  // ISO 8601 with the venue's UTC offset. Formatted per language by i18n.
  date: '2027-07-03T10:00:00-03:00',
  // Dates and times are shown in the venue's time zone for every guest.
  timeZone: 'America/Sao_Paulo',
  hashtag: '#LiciEBiel',

  events: [
    {
      // `type` picks the title in translation.json (event.types.<type>).
      id: 'ceremony',
      type: 'ceremony',
      startsAt: '2027-07-03T10:00:00-03:00',
      place: 'Nome do local da cerimônia',
      address: 'Rua Exemplo, 123 - Cidade',
      mapUrl: 'https://maps.google.com',
    },
    {
      id: 'reception',
      type: 'reception',
      // Placeholder time: update with the real start of the party.
      startsAt: '2027-07-03T12:00:00-03:00',
      place: 'Nome do local da festa',
      address: 'Avenida Exemplo, 456 - Cidade',
      mapUrl: 'https://maps.google.com',
    },
  ],

  gallery: [
    // Add image paths from /public, e.g. '/photos/01.jpg'
  ],

  rsvp: {
    // Placeholder deadline: update with the real one.
    deadline: '2027-06-03T23:59:00-03:00',
    // Set a form endpoint (Formspree, Google Apps Script, etc.) to send replies.
    endpoint: '',
  },

  gifts: {
    pixKey: 'pix-key@example.com',
    listUrl: '',
  },
}
