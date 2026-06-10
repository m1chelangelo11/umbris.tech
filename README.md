# Umbris — website

Company website for [umbris.tech](https://umbris.tech) — C-UAS (counter-drone)
systems for critical infrastructure, industry, and institutions.

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) + [Lenis](https://lenis.darkroom.engineering) (animations, smooth scroll)
- [lucide-react](https://lucide.dev) (icons)

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Structure

- `src/data/content.js` — all page copy (PL)
- `src/components/sections/` — homepage sections (Hero, Chapters, CaseStudies, ...)
- `src/components/layout/` — Header, Footer, LenisProvider
- `src/components/core/` — scroll animation primitives (`ScrollSection`, `ScrollText`)
- `src/components/ui/` — small reusable UI elements

## Deploy

The site is built and deployed automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push
to `master`. The `umbris.tech` domain is added to the build as `dist/CNAME`
during that workflow.

## Known TODOs

- The contact form (`SubscribeSection`) is disabled until a form backend
  (e.g. Web3Forms/Formspree) is wired up.
- The backgrounds in the Hero section and solution modules (`Chapters`) are
  temporary placeholders — swap for real video/photos when available.
