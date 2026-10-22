# Itzfizz — Motion in Motion

An original scroll-driven landing page concept built with React, Vite, GSAP ScrollTrigger and Tailwind CSS. The visual direction is intentionally different from the reference: warm paper background, lime and orange accents, editorial typography, custom SVG vehicle artwork, a pinned scroll sequence, metric cards, and a follow-up story section.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production-ready site is generated in `dist/`.

## Deploy to GitHub Pages
1. Create a new GitHub repository and push this project.
2. In `vite.config.js`, keep `base: './'` for relative asset paths.
3. Run `npm run build` and `npm run deploy` after adding your GitHub remote. The `deploy` script publishes `dist/` with `gh-pages`.
4. In the repository's **Settings → Pages**, select the `gh-pages` branch if it is not selected automatically.

For a straightforward alternative, import the repository into Vercel and deploy the Vite app with build command `npm run build` and output directory `dist`.

## Main files
- `src/App.jsx` — page sections and GSAP scroll timeline
- `src/index.css` — layout, typography, colour system and responsive styles
- `src/components/CarIllustration.jsx` — custom vector car illustration
- `src/components/MetricCard.jsx` — reusable metric card


## Scroll interaction notes
- The hero headline and supporting line introduce the page on load.
- The four metric cards start hidden and appear one by one at separate scroll milestones.
- The custom SVG car faces right and travels from the left side toward and beyond the right edge as scroll progress advances.
- GSAP ScrollTrigger pins the hero during the sequence; all major motion uses transforms and opacity.
