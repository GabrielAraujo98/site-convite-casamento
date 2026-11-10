---
name: commit-and-push
description: Use when the user asks to commit, push, or save the current changes to Git, such as "commit the current changes" or "push what changed". Creates a commit with the project's message standard and pushes it.
---

# Commit and push

Goal: run the commit and push flow with as little reading and text as possible.

## Rules

1. Run `git status --short` and `git branch --show-current`.
2. If it is not a Git repository, stop and ask for the repository URL.
3. If the current branch is `main`, do not commit on it. Switch to the `dev` branch first, with `git checkout dev` if it exists, or `git checkout -b dev` if it does not.
4. Check that a web `.gitignore` exists. If it does not, create it with:
   ```
   node_modules/
   dist/
   build/
   .cache/
   .vercel/
   .netlify/
   .env
   .env.*
   *.log
   .vscode/
   .idea/
   .DS_Store
   ```
5. Never add `node_modules/`, `dist/`, `.env` files or files larger than 50 MB. If any of these show up in `git status`, stop and warn the user.
6. Use `git add` only on the files listed in `git status`, never a blind `git add .`. Show the file list before committing.
7. Write the commit message in the format:
   `<Type> - <Area> : <short imperative summary>`
   - Types: Feat, Fix, Refactor, Style, Content, Assets, Chore, Docs.
   - Areas: Layout, Hero, Story, Event, Gallery, RSVP, Gifts, Styles, Project, Docs.
   - At most 72 characters on the first line, in English, imperative verb, no trailing period.
8. If there are changes from different areas, make one commit per area.
9. End every message with this line:
   ```
   Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
   ```
10. Show the final message and wait for the user's confirmation before committing, unless they wrote "commite sem confirmar" or something equivalent.
11. After the commit, run `git push -u origin dev` (or the current branch name, if it is not `main`).
12. Never merge and never force push, under any circumstances.
13. Reply in at most 4 lines: commit hash, branch, message and push status.

## Language

14. All project content must be in English: commit messages, code, comments, names, UI text on the site and documents. Follow the `english-standard` skill. If a file about to be committed has Portuguese project content, warn the user before committing.
15. Replies to the user in the chat stay in Portuguese.
