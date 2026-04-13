# Performance Test Instructions

## Requirements (from RNF-01)
- Lighthouse Performance score >= 90
- Lighthouse Accessibility score >= 90
- Time to First Contentful Paint < 2s on 4G
- Images optimized with `next/image` (webp, lazy loading)

## Run Lighthouse Audit

### Option A: Chrome DevTools
1. Open site in Chrome
2. DevTools → Lighthouse tab
3. Categories: Performance, Accessibility, Best Practices, SEO
4. Device: Mobile
5. Run audit

### Option B: Lighthouse CLI
```bash
npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html --chrome-flags="--headless"
npx lighthouse http://localhost:3000/coleccion --output=html --output-path=./lighthouse-coleccion.html --chrome-flags="--headless"
npx lighthouse http://localhost:3000/crea-tu-pollo --output=html --output-path=./lighthouse-crea.html --chrome-flags="--headless"
```

## Performance Considerations

### Already Optimized
- **Static Generation**: All pages prerendered at build time (no server-side rendering)
- **next/image**: Automatic webp conversion, lazy loading, responsive srcset
- **Inter font**: Loaded via `next/font/google` (self-hosted, no layout shift)
- **Minimal JS**: Only 2 client components (CountdownTimer, FAQSection, MobileMenu)
- **No external scripts**: No analytics, no tracking, no third-party SDKs

### Before Launch Optimization
- Replace SVG placeholders with optimized PNGs (2000x2000px originals → auto-resized by Next.js)
- Consider adding `priority` prop to above-the-fold images on each page
- Verify og:image is a real PNG/JPG (not SVG) for social sharing

## Responsive Layout Verification

### Test Viewports
| Device | Width | Verified |
|--------|-------|----------|
| iPhone SE | 375px | PASS |
| iPhone 14 | 390px | Check manually |
| iPad | 768px | PASS (tablet screenshot) |
| Desktop | 1280px | PASS |

## Status
- **Lighthouse**: Run manually before launch (dev mode scores are lower than production)
- **Responsive**: PASS at 375px, 768px, 1280px
- **Performance Architecture**: Optimized (static, self-hosted font, next/image)
