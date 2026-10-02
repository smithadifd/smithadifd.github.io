# Project guide

This is the tool-neutral, self-contained guide to this repository. `CLAUDE.md` imports it; keep repository facts here.

## Site and stack

This repository builds a static software portfolio for GitHub Pages. It uses Astro 5, TypeScript, Tailwind CSS 4, Node 22, and npm. There is no application server or database in this repository.

## Commands

```sh
npm ci           # Install the locked dependencies.
npm run dev      # Start the local Astro server.
npm run build    # Build the site into dist/; this is the CI check.
npm run preview  # Preview a local build.
```

The pull request and deployment workflows both run `npm ci` and `npm run build` with Node 22.

## Source map

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Portfolio home page. |
| `src/pages/history.astro` | Experience page. |
| `src/pages/projects/[slug].astro` | Static project pages generated from project data. |
| `src/data/projects.ts` | Project content and slugs. |
| `src/data/experience.ts` | Experience and education content. |
| `src/layouts/Layout.astro` | Shared document, navigation, and footer. |
| `src/styles/global.css` | Site-wide styles. |
| `public/` | Static assets copied into the build. |

The pages import their content from `src/data/`; `getStaticPaths` generates a page for each project slug. Keep project details in that data file and use the shared layout for page structure.

## Conventions

- Use conventional commits such as `docs:`, `fix:`, and `feat:`.
- Land changes through a pull request after the CI build passes.
- Keep generated `dist/` output out of commits.

Backup posture: the site is rebuilt from versioned source; no separate application data is stored here.
