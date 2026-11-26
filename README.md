# Tineesha Logeeth – Portfolio

A static portfolio prepared from the supplied HTML and Markdown. The original black/red design, animations, thirteen design works, brand logos and TIYO guide are retained. The embedded bitmap images are now forty separate files. No installation, API keys, database or paid hosting are needed.

Repository: https://github.com/Sashiranka-LIVE/Logeeth-Portfolio

Expected Pages address after deployment: https://sashiranka-live.github.io/Logeeth-Portfolio/

## GitHub Pages setup

1. Upload the contents of this folder into the repository root. `index.html`, `assets/`, `scripts/` and `.github/` must be at the top level, with no extra containing folder.
2. Open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow** if the initial push ran before Pages was configured.
4. Wait for the workflow to succeed, then open the deployment URL shown in the workflow or Pages settings.

The included workflow validates the files and publishes only the website files in `_site/`. Subsequent pushes to `main` deploy automatically. Use Git, GitHub Desktop or an upload method that preserves the `.github/` folder.

Alternative: this is also compatible with **Deploy from a branch → main → /(root)**. The `.nojekyll` file enables plain static hosting. Choose one publishing method.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

- `index.html`: portfolio markup, text and contact form.
- `assets/css/styles.css`: original styling and small accessibility additions.
- `assets/js/main.js`: galleries, animations, navigation, skills and email draft handling.
- `assets/js/tiyo.js`: browser-local keyword guide. It does not use an AI API.
- `assets/images/`: thirteen artworks, thirteen hero thumbnails, six client logos and eight software icons.
- `assets/favicon.svg`: favicon derived from the supplied logo.
- `404.html`, `robots.txt`, `.nojekyll`: static hosting support.
- `doc/cv.pdf`: resume downloaded from the original portfolio link and verified as a PDF.
- `.github/workflows/deploy-pages.yml`: validation and deployment workflow.
- `scripts/`: dependency-free Node.js validation, staging and local preview utilities.

## Local preview and validation

With Node.js 22 or newer installed, open this folder in a terminal:

```sh
npm run check
npm start
```

Open `http://127.0.0.1:4173/Logeeth-Portfolio/`. Stop with Ctrl+C. There are no npm dependencies, so `npm install` is unnecessary. `npm run build` validates and copies public files into `_site/` for deployment.

## Current content and integrations

- **Contact:** the form checks the first name and email, then opens a prefilled draft in the visitor’s configured email app. The visitor sends the message from that app. The site does not send or store messages itself. Email and WhatsApp links are available as alternatives.
- **Video Editing:** the supplied page contains four placeholders. Replace these with real video links or embeds when supplied; no videos were invented.
- **Resume:** downloaded from the supplied portfolio’s original URL `https://tineesha-logeeth.github.io/doc/cv.pdf` on 26 November 2026 (HTTP 200; PDF signature verified). The page and TIYO now link to the local `./doc/cv.pdf`, so the resume is hosted with this portfolio. Replace this file when the resume changes.
- **Fonts:** Google Fonts remains an external dependency; local system fonts are fallbacks.
- **Drive/social links:** original links are retained. The Drive collection must allow the intended visitors to view it.

Relative asset URLs support both this repository’s `/Logeeth-Portfolio/` path and a domain root. Update the 404 return link and this README if the repository is renamed or a custom domain is added. No `CNAME`, sitemap or canonical URL is guessed for a different host.

## Updating the site

Edit text in `index.html`. For design gallery entries, search for `var G=` in `assets/js/main.js`; each item has image path `s`, title `t`, caption `g`, width `w` and height `h`. Hero images use `var P=`. TIYO has its own text in `assets/js/tiyo.js`, so update it when portfolio details change. Commit and push to `main` to publish updates.
