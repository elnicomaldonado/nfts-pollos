# Code Generation Plan
# NFT Collection Landing Site — "Pollos"

**Unit**: site (única — todo el sitio)
**Generated**: 2026-04-12
**Status**: Awaiting approval

---

## Unit Context

- **Project type**: Greenfield, Next.js 15 + Tailwind CSS v4 + TypeScript
- **Deploy target**: Vercel
- **Pages**: 3 (Landing, Colección, Crea-tu-Pollo)
- **Blockchain interaction**: None — links externos a Manifold y OpenSea
- **Content**: Bilingüe ES/EN, imágenes placeholder
- **Extensions enforced**: ui-ux-minimalist-standards (fondo blanco, Inter, arte protagonista, mobile-first)

## Dependencies

- None — greenfield, single unit, no external services

---

## Execution Steps

### Step 1: Project Scaffold
- [x] Initialize Next.js 15 project with App Router and TypeScript
- [x] Install dependencies: tailwindcss, @tailwindcss/postcss, postcss
- [x] Configure `next.config.ts` (images: remotePatterns si se necesita)
- [x] Configure `globals.css` with Tailwind v4 import + Inter font from Google Fonts
- [x] Create base `src/app/layout.tsx` with Inter font, metadata, and html lang="es"
- [x] Verify project builds with `npm run build`

**Files created**:
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.mjs`
- `src/app/globals.css`
- `src/app/layout.tsx`

### Step 2: Data Layer
- [x] Create `src/lib/nfts.ts` — array de 50 NFTs con datos placeholder (id, name, image, traits)
- [x] Create `src/lib/config.ts` — constantes del proyecto (nombre marca, colección, links, fecha launch, precio)
- [x] All placeholder values clearly marked with `[PLACEHOLDER]` comments

**Files created**:
- `src/lib/nfts.ts`
- `src/lib/config.ts`

### Step 3: Shared Components — Header & Footer
- [x] Create `src/components/Header.tsx` — logo/nombre + nav links (3 páginas) + CTA mint + hamburger mobile
- [x] Create `src/components/Footer.tsx` — links redes sociales (Instagram, X, OpenSea) + copyright
- [x] Create `src/components/MobileMenu.tsx` — menú desplegable para mobile
- [x] Integrate Header + Footer in `layout.tsx`
- [x] Responsive: hamburger en mobile, horizontal en `md:`+
- [x] `data-testid` attributes on interactive elements

**Files created**:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/MobileMenu.tsx`

**Files modified**:
- `src/app/layout.tsx`

### Step 4: Landing Page — Hero + Preview Gallery
- [x] Create `src/components/HeroSection.tsx` — nombre colección + tagline bilingüe + imagen estrella
- [x] Create `src/components/PreviewGallery.tsx` — grid 5-8 piezas destacadas con `next/image`
- [x] Wire into `src/app/page.tsx`
- [x] Compliance: `aspect-square`, `object-cover`, `rounded-xl`, hover `scale-[1.02]`, `gap-8`

**Files created**:
- `src/components/HeroSection.tsx`
- `src/components/PreviewGallery.tsx`
- `src/app/page.tsx` (landing content)

### Step 5: Landing Page — Manifiesto + Artista
- [x] Create `src/components/ManifestoSection.tsx` — descripción colección bilingüe, número piezas, historia
- [x] Create `src/components/ArtistSection.tsx` — foto artista (placeholder) + bio bilingüe
- [x] Add to `src/app/page.tsx`
- [x] Sections with generous padding `py-16`/`py-24`

**Files created**:
- `src/components/ManifestoSection.tsx`
- `src/components/ArtistSection.tsx`

**Files modified**:
- `src/app/page.tsx`

### Step 6: Landing Page — Mint CTA + Countdown + FAQ
- [x] Create `src/components/MintSection.tsx` — botón CTA a Manifold (href placeholder) + precio placeholder
- [x] Create `src/components/CountdownTimer.tsx` — cuenta regresiva al 16 de Abril, client component, update cada segundo, sin bounce/flash
- [x] Create `src/components/FAQSection.tsx` — accordion con preguntas (¿Qué es NFT? ¿Cómo compro? ¿Cuántas piezas? ¿Precio?)
- [x] Add to `src/app/page.tsx`
- [x] CTA: `rounded-full` o `rounded-lg` consistente, `px-8 py-3`, `font-semibold`

**Files created**:
- `src/components/MintSection.tsx`
- `src/components/CountdownTimer.tsx`
- `src/components/FAQSection.tsx`

**Files modified**:
- `src/app/page.tsx`

### Step 7: Página `/coleccion`
- [x] Create `src/app/coleccion/page.tsx` — galería completa de las 50 piezas
- [x] Reutilizar GalleryGrid component o crear uno dedicado
- [x] Create `src/components/CollectionGrid.tsx` — grid responsivo `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`
- [x] Cada pieza: imagen + nombre + número
- [x] CTA a claim page de Manifold al final
- [x] `data-testid` en elementos interactivos

**Files created**:
- `src/app/coleccion/page.tsx`
- `src/components/CollectionGrid.tsx`

### Step 8: Página `/crea-tu-pollo`
- [x] Create `src/app/crea-tu-pollo/page.tsx` — placeholder "Próximamente / Coming Soon"
- [x] Título de la feature + descripción breve
- [x] Imagen de vista previa (una pieza de la colección)
- [x] Link a formulario externo (Google Forms / Typeform placeholder) para notificación por email

**Files created**:
- `src/app/crea-tu-pollo/page.tsx`

### Step 9: SEO + Metadata
- [x] Update `src/app/layout.tsx` — metadata global: title, description, og:image, og:title, og:description
- [x] Add per-page metadata exports en cada `page.tsx`
- [x] Create placeholder favicon en `src/app/favicon.ico` (o usar emoji como fallback)

**Files modified**:
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/coleccion/page.tsx`
- `src/app/crea-tu-pollo/page.tsx`

### Step 10: Placeholder Images
- [x] Create `public/images/nfts/` directory
- [x] Generate colored placeholder SVGs para simular las 50 piezas (cuadrados con número y color único)
- [x] Hero image placeholder
- [x] Artist photo placeholder
- [x] OG image placeholder

**Files created**:
- `public/images/placeholder-hero.svg`
- `public/images/placeholder-artist.svg`
- `public/images/placeholder-og.svg`
- `public/images/nfts/` (placeholder references in data layer)

### Step 11: Build Verification
- [x] Run `npm run build` — zero errors
- [x] Run `npm run dev` — verify all 3 pages load
- [x] Verify mobile layout (375px) and desktop layout (1280px)
- [x] Verify Countdown Timer updates correctly
- [x] Verify all navigation links work
- [x] Verify extension compliance (white bg, Inter, generous spacing, art-first)

---

## Extension Compliance Checklist

### ui-ux-minimalist-standards
- [x] Rule 1 (Color): bg white `#FFFFFF`, text `#111`, secondary `#6B7280`, borders `gray-100`/`gray-200`, `shadow-sm` max
- [x] Rule 2 (Space): sections `py-16`+, grid `gap-6`+, no crowding
- [x] Rule 3 (Typography): Inter font, correct scale, `tracking-tight` headings only
- [x] Rule 4 (NFT Images): `aspect-square`, `object-cover`, `rounded-xl`, hover `scale-[1.02]`, no shadows/glows
- [x] Rule 5 (Mobile-first): mobile-first classes, 44px touch targets, hamburger mobile
- [x] Rule 6 (Buttons): consistent shape, `px-8 py-3`, `font-semibold`, hover `opacity-90`
- [x] Rule 7 (Layout): `max-w-6xl mx-auto`, `px-4 sm:px-6 lg:px-8`
- [x] Rule 8 (Animation): `transition-*` + `duration-200`/`300` only, no carousels/parallax

---

## Total Files to Create

| Category | Count |
|----------|-------|
| Config / scaffold | 5 |
| App pages | 4 (`layout`, landing, coleccion, crea-tu-pollo) |
| Components | 11 |
| Data / lib | 2 |
| Assets / placeholders | ~4 |
| **Total** | **~26 files** |

---

## Story Traceability

| Requirement | Steps |
|-------------|-------|
| RF-01 Landing + Manifiesto | Steps 4, 5, 6 |
| RF-02 La Colección | Step 7 |
| RF-03 Crea tu Pollo | Step 8 |
| RF-04 Navegación | Step 3 |
| RF-05 Bilingüe + Assets | Steps 2, 9, 10 |
| RNF-01 Performance | Steps 1, 4, 11 |
| RNF-02 Responsividad | Steps 3-8, 11 |
| RNF-03 Estética | All steps (extension enforced) |
| RNF-04 Despliegue | Step 1, 11 |
| RNF-05 SEO | Step 9 |
