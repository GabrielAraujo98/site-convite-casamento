// Central place for every piece of invitation content.
// Edit the values here; the sections read from this object.
export const wedding = {
  couple: {
    partnerOne: 'Groom',
    partnerTwo: 'Bride',
  },
  date: '2027-06-12T16:00:00-03:00',
  dateLabel: 'June 12, 2027',
  hashtag: '#OurWedding',

  story: {
    title: 'Our story',
    paragraphs: [
      'Write here how you met.',
      'Share a bit of the journey to the big day.',
    ],
  },

  events: [
    {
      id: 'ceremony',
      title: 'Ceremony',
      time: '4:00 PM',
      place: 'Church or venue name',
      address: '123 Example St, City',
      mapUrl: 'https://maps.google.com',
    },
    {
      id: 'reception',
      title: 'Reception',
      time: '6:00 PM',
      place: 'Reception venue name',
      address: '456 Example Ave, City',
      mapUrl: 'https://maps.google.com',
    },
  ],

  dressCode: 'Formal attire',

  gallery: [
    // Add image paths from /public, e.g. '/photos/01.jpg'
  ],

  rsvp: {
    deadlineLabel: 'May 12, 2027',
    // Set a form endpoint (Formspree, Google Apps Script, etc.) to send replies.
    endpoint: '',
  },

  gifts: {
    message: 'Your presence is our greatest gift. If you would like to give us something, here are a few options.',
    pixKey: 'pix-key@example.com',
    listUrl: '',
  },
}
