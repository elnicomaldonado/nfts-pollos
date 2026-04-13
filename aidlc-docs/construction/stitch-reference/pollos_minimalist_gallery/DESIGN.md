# Design System Document: The Curated Gallery

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Curator"**

This design system is built on the philosophy of the high-end physical art gallery. In a world of digital clutter, this system acts as a silent, sophisticated vessel for the art it contains. It rejects the "app-like" density of traditional marketplaces in favor of an editorial, spacious, and deliberate layout.

By utilizing **Maximum Whitespace** and **Intentional Asymmetry**, we move away from "boxed-in" templates. The goal is to make the interface feel less like software and more like a limited-edition art book. We achieve "premium" status not through complexity, but through the extreme precision of our typography and the rhythmic use of empty space.

---

## 2. Colors: Tonal Architecture
The palette is rooted in high-contrast "Pure Neutrals" to ensure the NFT artwork remains the undisputed protagonist.

### The Palette
- **Background (`surface`):** `#FFFFFF` – Our primary canvas.
- **Primary Text (`on-surface`):** `#111111` – Near-black for authoritative readability.
- **Secondary Text (`on-surface-variant`):** `#6B7280` – For metadata and labels.
- **Accent/Action (`tertiary`):** `#FF5733` – A vibrant coral used sparingly for urgency and high-value interaction.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. To separate content, designers must use **Tonal Transitions** or **Whitespace Anchoring**. 
*   Instead of drawing a line between a header and a list, use a shift from `surface` (#FFFFFF) to `surface-container-low` (#F3F3F4).
*   Structure is defined by the proximity of elements, not the cages we put them in.

### Surface Hierarchy & Nesting
To create depth without shadows, we use a "stacked paper" approach:
1.  **Base Layer:** `surface` (#FFFFFF)
2.  **Content Areas:** `surface-container-low` (#F3F3F4) for subtle grouping.
3.  **Interaction States:** `surface-container-high` (#E8E8E8) for hover states on non-button elements.

---

## 3. Typography: Editorial Authority
We use **Inter** exclusively. The weight is our primary tool for hierarchy; we use bold, high-contrast headings against light, airy body copy.

*   **Display (Large Scale):** Use `display-lg` (3.5rem) with `font-weight: 800` for collection titles. Tracking should be set to `-0.02em` to create a tight, custom-logotype feel.
*   **Headlines:** `headline-md` (1.75rem) serves as the anchor for section headers. These should always be `on-surface` (#111111).
*   **Body Copy:** `body-lg` (1rem) is for descriptions. Use a generous line-height (1.6) to maintain "breathing room."
*   **Labels:** `label-md` (0.75rem) in `secondary-text` (#6B7280) for technical NFT metadata (Token ID, Contract Address).

---

## 4. Elevation & Depth: Tonal Layering
This system rejects traditional "drop shadows." We achieve elevation through a "Flat-Depth" model.

*   **The Layering Principle:** Place `surface-container-lowest` (pure white) cards on a `surface-container-low` (#F3F3F4) background. This creates a "soft lift" that feels organic and light.
*   **The "Ghost Border":** If a UI element (like a search input) risks disappearing into the background, use a 1px border using `outline-variant` (#E4BEB6) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** For mobile navigation or sticky headers, use a `surface` (#FFFFFF) background at 80% opacity with a `backdrop-blur` of 20px. This allows the vibrant NFT art to bleed through the UI as the user scrolls.

---

## 5. Components: Minimalist Primitives

### Buttons
*   **Primary:** `rounded-full`, Background: `#111111`, Text: `#FFFFFF`. No shadows. High-padding (1.25rem horizontal).
*   **Tertiary (Accent):** `rounded-full`, Background: `#FF5733`, Text: `#FFFFFF`. Reserved for "Buy Now" or "Mint" actions only.
*   **Ghost:** Text only in `on-surface`, bold, with a `surface-container-high` background only on hover.

### NFT Cards
*   **Image Container:** `rounded-xl` (3rem/48px). No borders, no shadows.
*   **Layout:** The image should take 100% of the card width. Text metadata sits below with a minimum 2rem top-margin to prevent visual "choking."
*   **No Dividers:** Never use lines between list items. Use 4rem (64px) of vertical space between items instead.

### Chips & Tags
*   **Style:** `rounded-full`, `surface-container-low` (#F3F3F4) background. Text is `body-sm` in `secondary-text`. Used for "Properties" or "Rarity" traits.

### Input Fields
*   **Style:** `rounded-md` (1.5rem), background `surface-container-low`, zero border. On focus, transition background to `surface-container-high`.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace extreme margins. If you think there is enough space, double it.
*   **Do** use asymmetrical grids. A 2-column layout where one column is 30% width and the other 70% feels more "curated" than a standard 50/50 split.
*   **Do** let the NFT artwork break the grid. Overlap a `rounded-xl` image slightly over a text section to create a sense of three-dimensional layering.

### Don't:
*   **Don't** use black-to-white gradients. Use solid tonal shifts.
*   **Don't** use icons unless absolutely necessary. Prefer clean, bold text labels.
*   **Don't** use standard 4px or 8px corners. Only use `rounded-xl` (48px) for containers or `rounded-full` (9999px) for buttons/pills. Intermediate rounding feels "generic."
*   **Don't** use "Card Shadows." If an element needs to stand out, change the background color of the page behind it.