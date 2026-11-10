# Wedding invitation site

React + Vite single-page app for the wedding invitation.

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build locally
npm run lint     # oxlint
```

## Structure

```
src/
  data/wedding.js     # all invitation content (names, date, venues, PIX key...)
  hooks/useCountdown  # countdown to the wedding date
  components/         # Header, Footer, Section
  sections/           # Hero, Story, Event, Gallery, Rsvp, Gifts
  styles/index.css    # color/font tokens and global styles
```

To change text, dates and venues, edit only `src/data/wedding.js`.

The RSVP form sends a JSON POST to `wedding.rsvp.endpoint`
(e.g. Formspree or Google Apps Script). With no endpoint set, it only logs to the console.

## Conventions

Everything in this repository is written in English. See `.claude/skills/english-standard/SKILL.md`.
