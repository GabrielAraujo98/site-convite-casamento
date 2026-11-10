---
name: english-standard
description: Use whenever creating or editing anything in this repository, such as code, components, functions, variables, comments, UI text, file names, docs or commit messages. Enforces that project content is written in English, while text guests read on the site is Brazilian Portuguese in the translation files.
---

# English standard

Goal: everything developers read is written in English. Everything guests read on the site is Brazilian Portuguese (`pt-BR`, the default language) and lives only in the translation files under `src/locales/`.

## Rules

1. Write all of these in English:
   - Commit messages, branch names and pull request titles and descriptions.
   - Function, method, component, hook, variable, constant, parameter, prop and type names.
   - CSS class names, custom properties and IDs.
   - File and folder names.
   - Code comments and TODOs.
   - Documentation: `README.md`, files in `docs/` and skill files.
   - Translation keys (`rsvp.nameLabel`), which describe the text's role.
2. Use descriptive names. Avoid one-letter or cryptic names such as `e`, `i`, `v`, `err` and `res`; prefer `event`, `index`, `isOpen`, `error` and `response`.
3. Follow the usual naming conventions:
   - `camelCase` for variables, functions and hooks (hooks start with `use`).
   - `PascalCase` for React components and their files.
   - `UPPER_SNAKE_CASE` for module-level constants that never change.
   - `kebab-case` (BEM style: `block__element--modifier`) for CSS classes.
4. User-facing text on the site (headings, labels, buttons, placeholders, alt text, aria labels, error and success messages, page title and description) is Brazilian Portuguese and never hardcoded in components:
   - Put it in `src/locales/pt-BR/translation.json` and read it with `t('key')` from `react-i18next`.
   - Format dates and times with `useDateFormat` (venue time zone) and plurals with i18next `_one` / `_other` keys.
   - `src/data/wedding.js` holds only language-neutral data: names, ISO dates, places, addresses, links, keys.
   - `<html lang="pt-BR">`.
   - When adding a language, create `src/locales/<code>/translation.json` with the same keys and register it in `src/i18n.js`.
5. Proper nouns that have no English equivalent, such as `PIX` or the couple's real names, stay as they are.
6. Before finishing a task, scan the files you changed (except `src/locales/` and place or address values in `src/data/`) for Portuguese words or accented characters (`á é í ó ú â ê ô ã õ ç`) and translate any project content you find. Also check that no component has hardcoded user-facing text.
7. If the user gives content in Portuguese to put on the site, keep it in Portuguese in the translation file. If they give it in another language, translate it into Brazilian Portuguese and tell them.

## Language

8. Replies to the user in the chat stay in Portuguese.
