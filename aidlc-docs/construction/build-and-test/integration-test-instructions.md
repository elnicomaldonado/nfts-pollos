# Integration Test Instructions

## Scope Assessment

This is a **single-unit static site** with no external service integrations:
- No API calls to backend services
- No database connections
- No third-party SDK integrations (Manifold/OpenSea are external links only)
- No authentication flows

## Integration Tests — Not Required

There are no service boundaries to test. All "integrations" are simple HTML links:
- Mint button → external Manifold URL
- OpenSea link → external OpenSea URL
- Social links → external Instagram/X URLs

## Link Verification (Replaces Integration Tests)

### External Links to Verify Before Launch
| Link | Location | Current Value | Status |
|------|----------|---------------|--------|
| Manifold claim page | Mint buttons (header, home, coleccion) | `#` [PLACEHOLDER] | Pending URL |
| OpenSea collection | Footer, coleccion page | `#` [PLACEHOLDER] | Pending URL |
| Instagram | Footer | `#` [PLACEHOLDER] | Pending URL |
| X / Twitter | Footer | `#` [PLACEHOLDER] | Pending URL |
| Email signup form | /crea-tu-pollo | `#` [PLACEHOLDER] | Pending URL |

### Internal Navigation
| Route | Link Source | Status |
|-------|-----------|--------|
| `/` | Header "Inicio", Logo | PASS |
| `/coleccion` | Header "Colección", "View Full Collection" | PASS |
| `/crea-tu-pollo` | Header "Crea tu Pollo" | PASS |

## Status
- **Integration Tests**: N/A (no service integrations)
- **Link Verification**: Internal links PASS, external links pending real URLs
