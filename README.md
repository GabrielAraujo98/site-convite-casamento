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
  data/wedding.js     # language-neutral data (names, ISO dates, venues, links, PIX key)
  locales/pt-BR/      # translation.json: every text guests read (Brazilian Portuguese, default)
  i18n.js             # i18next setup and registered languages
  hooks/useCountdown  # countdown to the wedding date
  components/         # Header, Footer, Section
  sections/           # Hero, Story, Event, Gallery, Rsvp, Gifts
  styles/index.css    # color/font tokens and global styles
```

To change site text, edit `src/locales/pt-BR/translation.json`. To change names, dates and venues, edit `src/data/wedding.js`.

## Translations

The site uses [react-i18next](https://react.i18next.com/). Brazilian Portuguese (`pt-BR`) is the default and only language for now.

- Components never hardcode text: they call `t('section.key')`.
- Dates use ICU-style formats inside the translation file (`dates.long`, `dates.time`) and are shown in the venue time zone (`wedding.timeZone`).
- Plurals use `_one` / `_other` keys (e.g. `hero.countdown.days_one`).
- To add a language, copy `src/locales/pt-BR/translation.json` to `src/locales/<code>/translation.json`, translate the values (keep the keys), and register it in `src/i18n.js`.

The RSVP form sends a JSON POST to `wedding.rsvp.endpoint`
(e.g. Formspree or Google Apps Script). With no endpoint set, it only logs to the console.

## Conventions

Code, comments, docs and commit messages are written in English. Text shown to guests is Brazilian Portuguese and lives only in `src/locales/`. See `.claude/skills/english-standard/SKILL.md`.
