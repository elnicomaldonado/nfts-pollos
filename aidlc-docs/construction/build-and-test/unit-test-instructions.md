# Unit Test Execution

## Scope Assessment

This project is a **static informational landing page** with:
- No business logic (no calculations, no data processing)
- No API endpoints
- No database
- No user authentication
- No form submissions (email signup links to external form)
- One client-side component with logic: `CountdownTimer.tsx`

## Unit Tests — Not Required

Given the scope, formal unit tests are not justified:
- **Components are presentational only** — they render static content from `config.ts` and `nfts.ts`
- **No transformations** — data flows directly from constants to JSX
- **The countdown timer** is the only component with logic (date math), and it uses standard `Date` APIs

## Manual Verification (Replaces Unit Tests)

### Countdown Timer
1. Open `http://localhost:3000`
2. Verify countdown shows correct days/hours/minutes/seconds to April 16, 2026
3. Verify it updates every second without visual flicker
4. Verify it shows `--` placeholders before client hydration (no hydration mismatch)

### Data Layer
1. Open `/coleccion` — verify all 50 NFTs render with correct numbering (#01 through #50)
2. Verify each piece has a name and subtitle
3. Verify images load (placeholder SVGs)

### Navigation
1. Click each nav link — verify correct page loads
2. Verify active state (accent underline) matches current page
3. On mobile (375px): verify hamburger menu opens/closes

## Status
- **Unit Tests**: N/A (no testable business logic)
- **Manual Verification**: PASS (verified via headless browser)
