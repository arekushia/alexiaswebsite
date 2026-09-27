# arekushias-site-vue

One-page portfolio built with Vue 3 + Vite, based on a Figma mockup ("Alexia's website mockups").

This repo is public — keep docs and comments minimal.

## Stack

- Vue 3, Composition API with `<script setup>` only (no Options API).
- Vite as bundler/dev server.
- Swiper for sliders.
- ESLint + Prettier for linting/formatting.

## Component structure

- `src/components/sections/` — one component per page section (e.g. `HeroSection.vue`, `AboutSection.vue`, `TakeawaysSection.vue`), assembled in `App.vue`.
- `src/components/ui/` — reusable sub-components (buttons, cards, tags...) shared across sections.
- File names in PascalCase.
- **Content width**: every section wraps its content in `src/components/ui/Container.vue` (max-width `--container-max-width`, 1200px, centered with side padding via `--container-padding-inline`) so text never runs edge-to-edge. Pass layout classes to it directly (`<Container class="MySection-row">`) rather than adding a second wrapper.

@.claude/rules/css.md

@.claude/rules/accessibility.md

## Assets

- `src/assets/illustrations/` — illustrations and decorative shapes exported from Figma, imported directly into components.
- `src/assets/icons/` — icons (Figma, GitHub, LinkedIn...) exported from Figma.
- `public/files/images/` and `public/files/cv.pdf` — personal files that can be swapped without a rebuild (photo, CV), referenced directly via `/files/...`.

## Language

- The project content (copy, alt text, aria-labels) is in English. Code comments, `CLAUDE.md`, and any other project documentation are also written in English, even though we may talk in French in chat.

@.claude/rules/backend.md

## Lint & format

- `npm run lint` — checks the code with ESLint.
- `npm run lint:fix` — automatically fixes what it can.
- `npm run format` — formats with Prettier (no semicolons, single quotes).
