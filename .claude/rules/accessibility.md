## Accessibility (WCAG 2.1 AA minimum)

- **Semantic HTML5, maximized**: reach for native elements over generic `<div>`/`<span>` everywhere it fits — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<ul>`/`<ol>`/`<li>` for lists, `<figure>`/`<figcaption>` for illustrated content, etc. A `<div>` is the fallback once no semantic element matches, not the default. (Exception: inline text styling uses `<span>` + utility classes, see the CSS rules.) A single `<h1>` per page, no skipped heading levels (h1 → h2 → h3, never h1 → h3).
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
