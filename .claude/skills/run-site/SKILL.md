---
name: run-site
description: Use when the user asks to run, start, open or preview the site, such as "roda o site", "sobe o site", "quero ver o site" or "abre o site". Starts the Vite dev server in the background and opens it in the browser.
---

# Run site

Goal: get the site running and open in the browser with no questions and minimal text.

## Steps

1. Check if the dev server is already up: `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/`.
   - If it returns `200`, skip to step 4.
2. If `node_modules/` does not exist, or `package.json` is newer than `node_modules/.package-lock.json`, run `npm install`.
3. Start the server with the Bash tool using `run_in_background: true`:
   `npm run dev -- --port 5173 --strictPort`
   Then wait until it answers, polling at most 15 seconds:
   `for attempt in $(seq 1 15); do curl -s -o /dev/null http://localhost:5173/ && break; sleep 1; done`
   - If it still does not answer, read the background output, show the error and stop.
   - If port 5173 is taken by another app, tell the user which process uses it (`lsof -i :5173`) and stop. Never kill processes you did not start.
4. Open the site in the default browser: `open http://localhost:5173`.
5. Reply in Portuguese, in at most 3 lines: the URL, that the page reloads on save, and that asking to stop the server ("para o site") ends it.

## Stopping

When the user asks to stop the site, stop only the background task you started (TaskStop). If you did not start it this session, find it with `lsof -ti :5173` and confirm with the user before killing it.

## Production preview

If the user asks to see the final or production version, run `npm run build`, then start `npm run preview -- --port 4173 --strictPort` the same way (background, poll, open http://localhost:4173).
