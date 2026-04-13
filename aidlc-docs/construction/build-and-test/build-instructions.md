# Build Instructions

## Prerequisites
- **Runtime**: Node.js 18+ (recommended: 20 LTS)
- **Package Manager**: npm (included with Node)
- **Build Tool**: Next.js 16.2.3 (Turbopack)

## Build Steps

### 1. Install Dependencies
```bash
cd /Users/brain/Desktop/Projects/nfts-pollos
npm install
```

### 2. Build for Production
```bash
npm run build
```

### 3. Verify Build Success
- **Expected output**: `✓ Compiled successfully`, `✓ Generating static pages (6/6)`
- **Build artifacts**: `.next/` directory with static HTML, CSS, JS bundles
- **Routes generated**:
  - `○ /` (home)
  - `○ /coleccion` (collection gallery)
  - `○ /crea-tu-pollo` (coming soon)
  - `○ /_not-found` (404)
- All routes marked `○ (Static)` — prerendered at build time, no server needed

### 4. Run Development Server (for local testing)
```bash
npm run dev
# Opens at http://localhost:3000
```

### 5. Deploy to Vercel
```bash
# Option A: Vercel CLI
npx vercel --prod

# Option B: Git push (if repo connected to Vercel)
git push origin main
```

## Troubleshooting

### Build fails with TypeScript errors
- Run `npx tsc --noEmit` to see specific errors
- Check imports in `src/components/` match actual file names

### Images not loading
- Verify SVG files exist in `public/images/nfts/` (1.svg through 50.svg)
- Verify `placeholder-hero.svg`, `placeholder-artist.svg`, `placeholder-og.svg` exist in `public/images/`

### metadataBase warning
- Normal in development. In production, update `metadataBase` in `src/app/layout.tsx` with real domain
