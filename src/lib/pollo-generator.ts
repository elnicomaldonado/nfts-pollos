// ============================================================
// Crea tu pollo — rasgos desde la colección, sin wallet
// ============================================================

import { nfts, type NFT } from "./nfts"

export interface PolloRecipe {
  mood: string
  theme: string
  vibe: string
}

export function getTraitOptions(): {
  moods: string[]
  themes: string[]
  vibes: string[]
} {
  const moods = [...new Set(nfts.map((n) => n.attributes.mood))].sort()
  const themes = [...new Set(nfts.map((n) => n.attributes.theme))].sort()
  const vibes = [...new Set(nfts.map((n) => n.attributes.vibe))].sort()
  return { moods, themes, vibes }
}

export function randomRecipe(): PolloRecipe {
  const { moods, themes, vibes } = getTraitOptions()
  return {
    mood: moods[Math.floor(Math.random() * moods.length)],
    theme: themes[Math.floor(Math.random() * themes.length)],
    vibe: vibes[Math.floor(Math.random() * vibes.length)],
  }
}

/** Mayor puntuación = más atributos coinciden; empates al azar para variedad. */
export function bestMatchingNft(mood: string, theme: string, vibe: string): NFT {
  const scored = nfts.map((n) => ({
    n,
    score:
      (n.attributes.mood === mood ? 1 : 0) +
      (n.attributes.theme === theme ? 1 : 0) +
      (n.attributes.vibe === vibe ? 1 : 0),
  }))
  const max = Math.max(...scored.map((s) => s.score))
  const tops = scored.filter((s) => s.score === max).map((s) => s.n)
  return tops[Math.floor(Math.random() * tops.length)]
}

export function gradientForRecipe(mood: string, theme: string, vibe: string): string {
  const str = `${mood}|${theme}|${vibe}`
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  const h1 = h % 360
  const h2 = (h * 13) % 360
  return `linear-gradient(135deg, hsl(${h1} 72% 42%) 0%, hsl(${h2} 68% 32%) 100%)`
}
