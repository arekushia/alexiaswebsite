# arekushias-site-vue

One-page portfolio built with Vue 3 + Vite, based on a Figma mockup ("Alexia's website mockups").

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

## CSS

- `<style scoped>` in every component, no global CSS outside `src/style.css` (reset), `src/styles/tokens.css` (design tokens) and `src/styles/utilities.css` (generic utility classes).
- **Breakpoints**: use the named custom media from `tokens.css` (`postcss-custom-media` + `@csstools/postcss-global-data` — the latter is required so a component's own `<style>` block, processed as a separate file, can see the `@custom-media` declared in `tokens.css`; see `postcss.config.js`) — `--mobile` (600px), `--tablet` (960px), `--desktop` (1200px), `--wide` (1440px, unused for now).
- **Nest the breakpoint inside the class it changes** (native CSS nesting — no plugin needed, modern browsers support it directly), instead of a separate `@media` block grouping several classes together at the bottom of the file. A rule and its responsive override stay next to each other, so there's nothing to scroll for and match up by hand:

  ```css
  .HeroSection-character {
    height: 34rem;

    @media (--mobile) {
      height: 17.5rem;
    }
  }
  ```

  This applies to breakpoint queries (`--mobile`/`--tablet`/`--desktop`/`--wide`). `prefers-reduced-motion` and other one-off accessibility queries can stay as their own block next to the rule they guard — same idea, just not a named breakpoint.
  All desktop-first: styles are written for desktop by default and scaled down under a breakpoint.
- **Mobile sizes are set per class, not via a shared mobile token block.** `tokens.css` only holds one (desktop) value per token — no fluid `clamp()` either. Each component nests its own `@media (--mobile)` override with the real value from the Figma mobile frame (never a guessed scaled-down number):
  - Section title (`h2`, e.g. "I do..."): **40px** (`2.5rem`).
  - Body copy: **16px** (`1rem`).
  - Sub-headings inside a section (e.g. "Product Design"): **20px** (`1.25rem`).
  - Section vertical padding (`padding-block`): **62px** (`3.875rem`).
  - Horizontal padding: **34px** (`2.125rem`). Sections wrap content in `Container`, whose padding comes from `--container-padding-inline` — override that custom property locally in the section's own `@media (--mobile)` (e.g. on the element carrying the `Container` fallthrough class) rather than changing the global token, so it only affects that section.
  - Gap between stacked paragraph/text blocks inside a section: **24px** (`1.5rem`) — tighter than the desktop gap, kept for readability.
  - Gap between an image/illustration and the text block it's stacked with (e.g. `column-reverse` layouts): **52px** (`3.25rem`).
- **Inline text styling: never use `<strong>`, `<u>` (or similar) inside copy.** Wrap the words in a `<span>` with a generic utility class from `src/styles/utilities.css`, named Vuetify-style (lowercase, kebab-case), instead of a per-component class:
  - `font-weight-bold` — bold text.
  - `text-decoration-underline` — classic underline.
  - `text-decoration-funky` — dotted underline with a thicker stroke.
  - Add a new utility there (same naming style) when a new inline style is needed; don't recreate it in a component.

  ```vue
  <p>Work in <span class="font-weight-bold">Vue</span> and <span class="text-decoration-funky">fun</span>.</p>
  ```
- Always use tokens (`var(--color-eel)`, `var(--fs-h2)`, `var(--fw-bold)`, etc.) instead of hardcoded values for colors and typography.
- **Units: `rem` by default, 16px base** (`1rem = 16px`, `html`/`body` never redefines `font-size`). `px` is only allowed for values ≤ 3px (e.g. `border: 1px solid`, a `1px`/`2px` offset). From 4px up, convert to `rem` (e.g. `4px` → `0.25rem`). Cap `rem` values at 3 decimal places — round if the conversion goes further (e.g. `29px` → `1.8125rem` rounds to `1.813rem`). Context-relative units (`%`, `vw`, `em`, `ch`) stay allowed when they make sense (e.g. a word's own text gap in `em`).
- **Class naming convention (simplified BEM, based on the component name):**
  - The component name is the "block": `ComponentName`.
  - An element inside it: `ComponentName-element` (single dash).
  - A variant/modifier: `ComponentName-element--variant` (double dash).
  - Keep it as simple and short as possible: `HeroSection-titleSm`, not `HeroSection-titleOnlyUsedOnMobile`.

  ```vue
  <template>
    <section class="HeroSection">
      <h1 class="HeroSection-title">Hi! I'm Alexia</h1>
      <p class="HeroSection-tag HeroSection-tag--purple">Product Designer</p>
    </section>
  </template>

  <style scoped>
  .HeroSection { ... }
  .HeroSection-title { ... }
  .HeroSection-tag { ... }
  .HeroSection-tag--purple { ... }
  </style>
  ```

## Accessibility (WCAG 2.1 AA minimum)

- **Semantic HTML5, maximized**: reach for native elements over generic `<div>`/`<span>` everywhere it fits — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<ul>`/`<ol>`/`<li>` for lists, `<figure>`/`<figcaption>` for illustrated content, etc. A `<div>` is the fallback once no semantic element matches, not the default. (Exception: inline text styling uses `<span>` + utility classes, see the CSS section.) A single `<h1>` per page, no skipped heading levels (h1 → h2 → h3, never h1 → h3).
- **Native interactive elements**: a link/button is a real `<a>`/`<button>`, never a `<div>` or `<span>` with a `@click`. Clickable areas are at least 44×44px.
- **Keyboard focus**: never set `outline: none` without providing a visible `:focus-visible` style in its place. Tab order must follow visual order.
- **Images**:
  - Decorative (backgrounds, waves, shapes from `src/assets/illustrations/`): `alt=""` (or implemented as a CSS `background-image` when purely decorative), never read out by a screen reader.
  - Meaningful (profile photo, illustrations that support a point): descriptive `alt`.
  - Icons (`src/assets/icons/`) used alone as a link (e.g. GitHub, LinkedIn): the accessible name comes from the parent link (`aria-label` or visible text), not from the icon itself.
- **Color contrast**: target 4.5:1 minimum for normal text, 3:1 for large text (≥18.66px bold or ≥24px). Checked against our tokens:
  - `--color-dark` on `--color-white`/`--color-grey-bg`: very comfortable margin, OK.
  - `--color-sunset-purple` as background with `--color-white` text: ~7.4:1, OK.
  - `--color-darker-eel` on a light background: ~6.4:1, OK for normal text.
  - ⚠️ `--color-eel` (#6C63FF) on a light background: ~4.3:1, **not enough for normal text** (below the required 4.5:1). Only use it as text for large/bold headings (≥18.66px bold), or prefer `--color-darker-eel` for regular-sized text. `--color-eel` is still fine for borders, backgrounds, and decorative icons.
- **Motion**: any animation/transition (including Swiper autoplay) must respect `prefers-reduced-motion: reduce` (disable or reduce the animation).
- **Swiper sliders**: keep the keyboard navigation module active, pagination bullets must be buttons with an `aria-label` (e.g. "Go to slide 2").
- **Forms** (if we add one, e.g. contact): every `<input>` has an associated `<label>` (not just a placeholder), error messages are linked via `aria-describedby`.
- **Language**: the site content is in English, so `lang="en"` is set on `<html>` in `index.html` — keep this consistent with each section's actual content (wrap any French text in `lang="fr"` if we ever add some).

## Assets

- `src/assets/illustrations/` — illustrations and decorative shapes exported from Figma, imported directly into components.
- `src/assets/icons/` — icons (Figma, GitHub, LinkedIn...) exported from Figma.
- `public/files/images/` and `public/files/cv.pdf` — personal files that can be swapped without a rebuild (photo, CV), referenced directly via `/files/...`.

## Language

- The project content (copy, alt text, aria-labels) is in English. Code comments, `CLAUDE.md`, and any other project documentation are also written in English, even though we may talk in French in chat.

## Backend (contact form)

- `server/index.js` — small Express app: serves the built site from `dist/` and exposes `POST /api/contact` (validation, honeypot field `website`, rate limit of 5 requests / 15 min per IP, e-mail sent with Nodemailer over SMTP).
- Configuration comes from environment variables only (see `.env.example`): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO`, plus `PORT` locally. Never commit `.env`.
- Local development runs two processes: `npm run dev` (Vite, proxies `/api` to port 3000) and `npm run server` (the API, reads `.env`).
- Production: the hosting (Gandi Simple Hosting, Node.js) runs `npm start` and provides `PORT`; the site must be built (`npm run build`) so `dist/` exists.
- Frontend code calls the API through `src/services/contact.js`; the form UI lives in `src/components/ui/ContactForm.vue`.

## Lint & format

- `npm run lint` — checks the code with ESLint.
- `npm run lint:fix` — automatically fixes what it can.
- `npm run format` — formats with Prettier (no semicolons, single quotes).
