# Requirements Document
# NFT Collection Landing Site — "Pollos" Collection

**Generated**: 2026-04-12
**Depth Level**: Standard
**Request Type**: New Project (Greenfield)
**Scope**: Multiple Pages / Single Site
**Complexity**: Moderate (tiempo limitado — 4 días al lanzamiento)

---

## Intent Analysis

| Atributo | Valor |
|---|---|
| Tipo de request | Nuevo proyecto (greenfield) |
| Scope | Sitio web de 3 páginas |
| Complejidad | Moderada |
| Restricción crítica | Launch deadline: Miércoles 16 de Abril, 2026 |
| Tecnología | Next.js + Tailwind CSS, desplegado en Vercel |

---

## Contexto del Proyecto

Colección de 50 NFTs únicos (1/1) — personajes ilustrados a mano con estilo colorido y vibrante, temática de "pollos" con personalidad. La colección se lanza el **miércoles 16 de Abril** en **Ethereum**. Los NFTs se minan a través de **Manifold Studio** (claim page externa). El sitio web es **solo informativo / marketing** — no hay interacción blockchain en el código del sitio.

- **Artista / Marca**: [PLACEHOLDER — por definir]
- **Nombre de colección**: [PLACEHOLDER — por definir, temática "pollos"]
- **Blockchain**: Ethereum
- **Precio por pieza**: [PLACEHOLDER — por definir]
- **Smart contract**: Manifold Studio (ERC-721, Creator Contract)
- **Marketplace**: OpenSea

---

## Requisitos Funcionales

### RF-01: Página 1 — Landing + Manifiesto (Ruta: `/`)
La página principal combina la presentación de la colección con el manifiesto/historia de la artista.

**Secciones requeridas (en orden vertical):**
- **Hero**: Nombre de marca/colección + tagline bilingüe (ES/EN) + imagen de portada (1 pieza estrella o collage)
- **Preview Gallery**: Grid con 5-8 piezas estrella para generar interés visual
- **Manifiesto / La Colección**: Descripción de la colección (bilingüe), número de piezas (50), historia detrás del arte
- **Sobre la Artista**: Foto de la artista + bio breve (bilingüe)
- **Mint / Colección**: Botón CTA que linkea a la claim page de Manifold (URL externa) + información de precio (placeholder hasta definir)
- **Countdown Timer**: Cuenta regresiva hasta el miércoles 16 de Abril, 00:00
- **FAQ**: Sección con preguntas frecuentes (¿Qué es un NFT? ¿Cómo compro? ¿Cuántas piezas hay? ¿Cuál es el precio?)
- **Footer**: Links a redes sociales (Instagram, Twitter/X) + link a OpenSea

### RF-02: Página 2 — La Colección (Ruta: `/coleccion`)
Página dedicada a mostrar la colección completa o incrustar/linkear OpenSea.

**Opciones de implementación** (las dos son válidas, elegir al construir):
- **Opción A (simple)**: Galería estática de las 50 piezas en grid, con nombre y número de cada pieza
- **Opción B (embed)**: Iframe o widget de OpenSea mostrando la colección en vivo (requiere URL del contrato)

**Contenido requerido:**
- Título de la sección + descripción corta
- Grid de piezas (o embed de OpenSea)
- Filtros opcionales por atributos/traits (si se implementa opción A)
- CTA a la claim page de Manifold

### RF-03: Página 3 — Crea tu Pollo (Ruta: `/crea-tu-pollo`)
Mini-app interactiva donde los visitantes pueden crear su propio personaje "pollo" combinando características de la colección.

**Para el lanzamiento del 16 de Abril**: Esta página mostrará únicamente un **placeholder "Próximamente / Coming Soon"** con:
- Título de la feature
- Descripción breve de lo que viene
- Imagen de vista previa (una de las piezas de la colección)
- Opción de dejar email para notificación (campo simple, sin backend por ahora — puede ser un link a un formulario de Google o Typeform)

**Post-lanzamiento (futura iteración)**: Constructor visual donde el usuario selecciona rasgos (criatura, color de fondo, expresión, accesorios) y genera su versión del pollo.

### RF-04: Navegación
- Header con logo/nombre de marca + links a las 3 páginas
- Menú hamburguesa en mobile
- Navegación horizontal en desktop (`md:` y superior)
- CTA de mint visible en el header (botón pequeño)

### RF-05: Assets y Contenido Bilingüe
- Todo el texto del sitio en español e inglés (toggle de idioma o texto paralelo)
- Imágenes de las piezas: usar placeholders durante el desarrollo, reemplazar cuando la artista exporte PNGs
- Formato de imágenes: PNG, mínimo 2000x2000px, relación 1:1 (cuadradas)

---

## Requisitos No Funcionales

### RNF-01: Performance
- Puntuación Lighthouse ≥ 90 en Performance y Accessibility
- Imágenes optimizadas con `next/image` (webp, lazy loading)
- Time to First Contentful Paint < 2s en conexión 4G

### RNF-02: Responsividad
- Mobile-first (375px base)
- Breakpoints: 375 / 390 / 768 / 1280px
- Verificado en iPhone y Android antes del lanzamiento

### RNF-03: Estética (ver extensión ui-ux-minimalist-standards)
- Fondo blanco puro `#FFFFFF`
- Tipografía Inter
- Las imágenes NFT son las protagonistas — máximo espacio visual
- Sin efectos visuales pesados

### RNF-04: Despliegue
- Plataforma: **Vercel** (free tier)
- Dominio: [PLACEHOLDER — por definir]
- Debe estar online con dominio propio antes del miércoles 16 de Abril

### RNF-05: SEO básico
- Meta tags: título, descripción, og:image (una pieza de la colección)
- og:title y og:description bilingüe (prioridad inglés para alcance global)

---

## Decisiones Pendientes (no bloquean el desarrollo)

| Decisión | Estado | Impacto en el sitio |
|---|---|---|
| Nombre de artista / marca | Pendiente | Placeholder en hero, header, footer |
| Nombre de la colección | Pendiente | Placeholder en hero y meta tags |
| Precio por pieza | Pendiente | Placeholder en sección mint y FAQ |
| Dominio web | Pendiente | Deploy inicial en `.vercel.app` |
| URL contrato Manifold | Pendiente hasta Día 2 del manual | Botón de mint con `href="#"` hasta tenerlo |
| Imágenes finales | Pendiente (artista exportando) | Placeholders durante desarrollo |

---

## Estructura de Archivos del Proyecto

```
nfts-pollos/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing + Manifiesto
│   │   ├── coleccion/
│   │   │   └── page.tsx          # La Colección
│   │   ├── crea-tu-pollo/
│   │   │   └── page.tsx          # Coming Soon placeholder
│   │   └── layout.tsx            # Layout global (header, footer)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── ManifestoSection.tsx
│   │   ├── ArtistSection.tsx
│   │   ├── MintSection.tsx
│   │   └── FAQSection.tsx
│   ├── lib/
│   │   └── nfts.ts               # Data de las piezas (nombre, imagen, traits)
│   └── styles/
│       └── globals.css
├── public/
│   └── images/
│       └── nfts/                 # PNGs de las piezas
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Criterios de Éxito

- [ ] Sitio online en Vercel antes del miércoles 16 de Abril
- [ ] Las 3 páginas cargan en mobile y desktop sin errores
- [ ] Botón de mint linkea a la claim page de Manifold
- [ ] Countdown muestra tiempo correcto hasta el lanzamiento
- [ ] Placeholders reemplazados por contenido real antes del launch
- [ ] Links a redes sociales funcionan
