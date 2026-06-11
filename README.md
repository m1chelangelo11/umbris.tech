# Umbris — website

Company website for [umbris.tech](https://umbris.tech) — **DetMesh**, a
distributed sensor-mesh airspace intelligence platform built on the
Meshtastic protocol, for critical infrastructure, industry, and
institutions. Available in Polish and English.

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) + [Lenis](https://lenis.darkroom.engineering) (animations, smooth scroll)

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Structure

- `src/data/content.js` — all page copy, in Polish and English (`translations.pl` / `translations.en`), plus shared data (sectors, stats, solutions, system layers, cases, process steps)
- `src/components/layout/LanguageProvider.jsx` — PL/EN language context (`useLanguage`, `t(key)`), persisted to `localStorage`
- `src/components/sections/` — homepage sections: `Hero`, `Ticker`, `StatsBar`, `About`, `Solutions`, `SystemDiagram`, `Cases`, `Process`, `Contact`
- `src/components/layout/` — `Header`, `Footer`, `LenisProvider`, `LanguageProvider`
- `src/components/core/` — scroll animation primitives (`ScrollSection`, `ScrollText`, `TextEffect`)
- `src/components/ui/` — small reusable UI elements (`SecTag`, `SectionHeader`)

## Deploy

The site is built and deployed automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push
to `master`. The `umbris.tech` domain is added to the build as `dist/CNAME`
during that workflow.
