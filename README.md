# Andrew Smith's portfolio

This repository contains an Astro site for Andrew Smith's projects and experience.

## Site structure

- `src/pages/` contains the home page, history page, and project detail routes.
- `src/layouts/Layout.astro` provides the shared page layout.
- `src/styles/global.css` contains the site styles.
- `src/data/projects.ts` and `src/data/experience.ts` provide the content rendered by the pages.
- `public/` contains static assets.

## Build

CI installs dependencies and builds the site with:

```sh
npm ci
npm run build
```

The build writes the static site to `dist/`.
