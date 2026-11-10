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

The page copies the invitation in `base-convite-casamento.pdf`, section by section, using the "Lici e Biel" design system.

```
public/images/
  ornaments/          # orange branches, ivy, doily, lace trim (from the PDF)
  photos/             # couple photo and the two call-to-action photos
  gifts/              # one photo per gift
src/
  App.jsx             # list of sections, in page order
  data/wedding.js     # names, date, Pinterest link, RSVP endpoint, PIX key
  data/gifts.js       # gift list: id, image file and price
  locales/pt-BR/      # translation.json: every text guests read
  styles/index.css    # Tailwind setup + design system theme (colors, fonts, text sizes, spacing)
  components/         # reusable pieces: Container, Button, BrushHeading, DisplayHeading, Ornament, GiftCard
  sections/           # one file per section: Hero, Story, DressCode, ActionPhotos, Rsvp, Gifts, Closing
```

Styling uses [Tailwind CSS](https://tailwindcss.com/) v4: classes go straight in the JSX (`className="bg-tangerine rounded-button"`). The design system tokens live in `@theme` inside `src/styles/index.css` and become classes:

| Token in `index.css` | Class examples |
| --- | --- |
| `--color-tangerine` | `bg-tangerine`, `text-tangerine`, `border-tangerine` |
| `--font-brush` | `font-brush` |
| `--text-display-lg` | `text-display-lg` (size, line height, letter spacing) |
| `--radius-button` | `rounded-button` |
| `--spacing-page` | `px-page`, `mt-page` |

Classes are mobile first: no prefix = phones, `md:` = 768px and up, `lg:` = 1024px and up (desktop, like the PDF).

### Common changes

| I want to change... | Edit |
| --- | --- |
| Any text on the page | `src/locales/pt-BR/translation.json` |
| Names or date | `src/data/wedding.js` |
| Pinterest link, PIX key, RSVP endpoint | `src/data/wedding.js` |
| Add, remove or reprice a gift | `src/data/gifts.js` (image in `public/images/gifts/`, text in `translation.json` under `gifts.items`) |
| A color, font or text size for the whole site | `src/styles/index.css` (`@theme`) |
| Position, size or angle of an ornament | the `className` of its `<Ornament>` in the section (e.g. `src/sections/Hero.jsx`) |
| Button colors or sizes | `VARIANTS` / `SIZES` in `src/components/Button.jsx` |
| Section order | `src/App.jsx` |

Clicking a gift's price copies the PIX key.

## Translations

The site uses [react-i18next](https://react.i18next.com/). Brazilian Portuguese (`pt-BR`) is the default and only language for now.

- Components never hardcode text: they call `t('section.key')`.
- Dates use Intl formats inside the translation file (`hero.dateLine`) and are shown in the venue time zone (`wedding.timeZone`).
- Prices use `{{price, currency(BRL)}}`.
- To add a language, copy `src/locales/pt-BR/translation.json` to `src/locales/<code>/translation.json`, translate the values (keep the keys), and register it in `src/i18n.js`.

The RSVP form sends a JSON POST to `wedding.rsvp.endpoint`
(e.g. Formspree or Google Apps Script). With no endpoint set, it only logs to the console.

## Conventions

Code, comments, docs and commit messages are written in English. Text shown to guests is Brazilian Portuguese and lives only in `src/locales/`. See `.claude/skills/english-standard/SKILL.md`.
