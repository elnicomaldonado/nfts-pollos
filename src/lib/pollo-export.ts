// ============================================================
// Export PNG — firma Kikirikrew (solo cliente)
// ============================================================

import type { NFT } from "./nfts"
import type { PolloRecipe } from "./pollo-generator"
import { gradientForRecipe } from "./pollo-generator"

const W = 1080
const H = 1350
const FOOTER_H = 200

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`No se pudo cargar la imagen: ${src}`))
    img.src = src
  })
}

/** Parse "linear-gradient(135deg, hsl(h s% l%) 0%, hsl(h2 s2% l2%) 100%)" → two hsl for canvas */
function parseGradientCss(css: string): { h1: number; s1: number; l1: number; h2: number; s2: number; l2: number } {
  const m = css.match(/hsl\((\d+)\s+(\d+)%\s+(\d+)%\).*hsl\((\d+)\s+(\d+)%\s+(\d+)%\)/)
  if (!m) {
    return { h1: 15, s1: 72, l1: 42, h2: 280, s2: 68, l2: 32 }
  }
  return {
    h1: Number(m[1]),
    s1: Number(m[2]),
    l1: Number(m[3]),
    h2: Number(m[4]),
    s2: Number(m[5]),
    l2: Number(m[6]),
  }
}

export async function downloadPolloPng(
  inspiration: NFT,
  recipe: PolloRecipe,
): Promise<void> {
  const canvas = document.createElement("canvas")
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas no disponible")

  const gradCss = gradientForRecipe(recipe.mood, recipe.theme, recipe.vibe)
  const { h1, s1, l1, h2, s2, l2 } = parseGradientCss(gradCss)
  const g = ctx.createLinearGradient(0, 0, W, H)
  g.addColorStop(0, `hsl(${h1} ${s1}% ${l1}%)`)
  g.addColorStop(1, `hsl(${h2} ${s2}% ${l2}%)`)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, W, H)

  const img = await loadImage(inspiration.image)
  const artH = H - FOOTER_H - 80
  const artY = 60
  const size = Math.min(W - 80, artH)
  const ix = (W - size) / 2
  const iy = artY + (artH - size) / 2

  ctx.save()
  ctx.fillStyle = "rgba(255,255,255,0.12)"
  ctx.fillRect(ix - 12, iy - 12, size + 24, size + 24)
  ctx.restore()

  ctx.save()
  ctx.beginPath()
  ctx.rect(ix, iy, size, size)
  ctx.clip()
  const scale = Math.max(size / img.width, size / img.height)
  const dw = img.width * scale
  const dh = img.height * scale
  ctx.drawImage(img, ix + (size - dw) / 2, iy + (size - dh) / 2, dw, dh)
  ctx.restore()

  ctx.fillStyle = "rgba(0,0,0,0.55)"
  ctx.fillRect(0, H - FOOTER_H, W, FOOTER_H)

  ctx.fillStyle = "#ffffff"
  ctx.font = "bold 52px system-ui, sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("KIKIRIKREW", W / 2, H - FOOTER_H + 58)

  ctx.font = "36px system-ui, sans-serif"
  ctx.fillStyle = "#FF5733"
  ctx.fillText("@kikirikrew", W / 2, H - FOOTER_H + 108)

  ctx.fillStyle = "rgba(255,255,255,0.85)"
  ctx.font = "24px system-ui, sans-serif"
  const line = `${recipe.mood} · ${recipe.theme} · ${recipe.vibe}`
  ctx.fillText(line, W / 2, H - FOOTER_H + 148)

  ctx.fillStyle = "rgba(255,255,255,0.55)"
  ctx.font = "20px system-ui, sans-serif"
  ctx.fillText("Arte de la comunidad — no es un NFT oficial", W / 2, H - FOOTER_H + 182)

  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/png", 0.95))
  if (!blob) throw new Error("Exportación fallida")

  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `kikirikrew-mi-pollo-${inspiration.id}.png`
  a.click()
  URL.revokeObjectURL(url)
}
