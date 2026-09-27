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
