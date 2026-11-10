---
name: english-standard
description: Use whenever creating or editing anything in this repository, such as code, components, functions, variables, comments, UI text, file names, docs or commit messages. Enforces that all project content is written in English.
---

# English standard

Goal: every piece of project content is written in English, with no exceptions.

## Rules

1. Write all of these in English:
   - Commit messages, branch names and pull request titles and descriptions.
   - Function, method, component, hook, variable, constant, parameter, prop and type names.
   - CSS class names, custom properties and IDs.
   - File and folder names.
   - Code comments and TODOs.
   - User-facing text on the site: headings, labels, buttons, placeholders, alt text, aria labels, error and success messages, and page metadata (`<title>`, `<meta>`, `lang="en"`).
   - Documentation: `README.md`, files in `docs/` and skill files.
   - Sample and placeholder content in `src/data/`.
2. Use descriptive names. Avoid one-letter or cryptic names such as `e`, `i`, `v`, `err` and `res`; prefer `event`, `index`, `isOpen`, `error` and `response`.
3. Follow the usual naming conventions:
   - `camelCase` for variables, functions and hooks (hooks start with `use`).
   - `PascalCase` for React components and their files.
   - `UPPER_SNAKE_CASE` for module-level constants that never change.
   - `kebab-case` (BEM style: `block__element--modifier`) for CSS classes.
4. Proper nouns that have no English equivalent, such as `PIX` or the couple's real names, stay as they are.
5. Before finishing a task, scan the files you changed for Portuguese words or accented characters (`á é í ó ú â ê ô ã õ ç`) and translate any project content you find.
6. If the user gives content in Portuguese to put on the site, translate it into English and tell the user in the reply.

## Language

7. Replies to the user in the chat stay in Portuguese.
