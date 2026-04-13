# UI/UX Minimalist Standards Extension

**Type**: Always-Enforced Extension (no opt-in file — always active)
**Purpose**: Hard constraints for all visual and layout decisions in this project.

---

## Rule 1: Color Palette

- **Background**: Pure white `#FFFFFF` — no off-whites, no grays as backgrounds.
- **Primary text**: Near-black `#111111` or `#0A0A0A`.
- **Secondary text**: `#6B7280` (Tailwind `gray-500`).
- **Accent**: One single accent color defined per project (not multiple competing colors).
- **Borders**: Ultra-light `#F3F4F6` (Tailwind `gray-100`) or `#E5E7EB` (`gray-200`).
- **NEVER** use heavy shadows — use `shadow-sm` at most, or no shadow.

---

## Rule 2: Negative Space

- **ALWAYS** use generous padding: minimum `py-16` / `py-24` for sections.
- **NEVER** crowd elements — each section should breathe.
- Grid gaps minimum `gap-6`, preferred `gap-8` or `gap-10`.
- Section separators: whitespace only (no `<hr>` lines unless deliberately minimal).

---

## Rule 3: Typography

- **Font**: Inter (Google Fonts) as primary.
  - Fallback chain: `Inter, system-ui, -apple-system, sans-serif`.
- **NEVER** use decorative or serif fonts for UI text.
- **Scale** (Tailwind):
  - Hero headline: `text-4xl` / `text-5xl` / `text-6xl`, `font-bold` or `font-semibold`
  - Section titles: `text-2xl` / `text-3xl`, `font-semibold`
  - Body: `text-base` (`16px`), `leading-relaxed`
  - Captions / labels: `text-sm`, `text-gray-500`
- **Letter spacing**: `tracking-tight` for large headings only.

---

## Rule 4: NFT Image Display

- NFT artwork is the **hero of every layout** — give it maximum visual weight.
- Gallery grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` or `lg:grid-cols-4`.
- Image cards: simple, no heavy borders — use `rounded-lg` or `rounded-xl` only.
- **NEVER** add drop shadows, glow effects, or decorative frames to artwork.
- Images must use `aspect-square` to maintain consistency.
- Use `object-cover` on all NFT images.
- Hover state: subtle `scale-[1.02]` with `transition-transform duration-200` only.

---

## Rule 5: Responsive / Mobile-First

- **ALWAYS** design mobile-first with Tailwind's unprefixed classes first.
- Breakpoint progression: base (mobile) → `sm:` → `md:` → `lg:` → `xl:`
- Touch targets minimum `44px` height for interactive elements.
- Test at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1280px (desktop).
- Navigation: hamburger menu on mobile, horizontal on `md:` and above.

---

## Rule 6: Buttons & CTAs

- Primary CTA:
  - Background: accent color or `#111111`
  - Text: white, `font-semibold`
  - Padding: `px-8 py-3` minimum
  - Border radius: `rounded-full` or `rounded-lg` — pick one and stay consistent
  - **NEVER** use multiple different button shapes on the same page
- Hover: subtle `opacity-90` — no animation overkill.
- Disabled state: `opacity-50 cursor-not-allowed`.

---

## Rule 7: Layout Constraints

- Max content width: `max-w-6xl mx-auto` for page sections.
- Gallery max width: `max-w-7xl mx-auto` allowed.
- Always use container with horizontal padding `px-4 sm:px-6 lg:px-8`.

---

## Rule 8: Animation

- **MINIMAL animation only**.
- Allowed: `transition-*` for hover states, `duration-200` or `duration-300`.
- **NEVER** use: auto-playing carousels, parallax, scroll-triggered animations, or looping effects.
- Countdown timer: update every second with no visual bounce/flash.
