"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { Rarity } from "@/lib/nfts"
import {
  bestMatchingNft,
  getTraitOptions,
  gradientForRecipe,
  randomRecipe,
  type PolloRecipe,
} from "@/lib/pollo-generator"
import { downloadPolloPng } from "@/lib/pollo-export"
import { COLLECTION } from "@/lib/config"

const TRAIT_META = [
  { key: "mood" as const, label: "Ánimo", icon: "⚡" },
  { key: "theme" as const, label: "Tema", icon: "🎨" },
  { key: "vibe" as const, label: "Vibra", icon: "✨" },
] as const

const RARITY_CFG: Record<
  Rarity,
  {
    label: string
    badge: string
    glowColor: string
    ringColor: string
    starColor: string
    emoji: string
    overlayBg: string
    textColor: string
  }
> = {
  Common: {
    label: "Común",
    badge: "bg-white/15 text-white/80",
    glowColor: "transparent",
    ringColor: "rgba(255,255,255,0.28)",
    starColor: "rgba(255,255,255,0.85)",
    emoji: "⭐",
    overlayBg: "#1e1e1e",
    textColor: "#ffffff",
  },
  Uncommon: {
    label: "Poco común",
    badge: "bg-emerald-400/20 text-emerald-100",
    glowColor: "rgba(52,211,153,0.22)",
    ringColor: "rgba(52,211,153,0.45)",
    starColor: "rgba(52,211,153,0.92)",
    emoji: "💚",
    overlayBg: "#064e3b",
    textColor: "#6ee7b7",
  },
  Rare: {
    label: "Raro",
    badge: "bg-sky-400/25 text-sky-100",
    glowColor: "rgba(56,189,248,0.28)",
    ringColor: "rgba(56,189,248,0.50)",
    starColor: "rgba(56,189,248,0.92)",
    emoji: "💎",
    overlayBg: "#0c4a6e",
    textColor: "#7dd3fc",
  },
  Epic: {
    label: "Épico",
    badge: "bg-purple-500/30 text-purple-100 border border-purple-400/35",
    glowColor: "rgba(168,85,247,0.45)",
    ringColor: "rgba(168,85,247,0.62)",
    starColor: "rgba(192,132,252,0.98)",
    emoji: "🔮",
    overlayBg: "#3b0764",
    textColor: "#c084fc",
  },
  Legendary: {
    label: "Legendario",
    badge: "bg-amber-400/30 text-amber-100 border border-amber-400/45",
    glowColor: "rgba(251,191,36,0.55)",
    ringColor: "rgba(251,191,36,0.72)",
    starColor: "rgba(253,224,71,0.98)",
    emoji: "👑",
    overlayBg: "#451a03",
    textColor: "#fde047",
  },
}

export default function CreaTuPolloExperience() {
  const [recipe, setRecipe] = useState<PolloRecipe | null>(null)
  const [spinning, setSpinning] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [burst, setBurst] = useState(0)
  const [rewardBurst, setRewardBurst] = useState(0)
  const spinTimerRef = useRef<number | null>(null)

  const traitOptions = useMemo(() => getTraitOptions(), [])

  useEffect(() => {
    setRecipe(randomRecipe())
  }, [])

  useEffect(() => {
    return () => {
      if (spinTimerRef.current != null) window.clearTimeout(spinTimerRef.current)
    }
  }, [])

  const inspiration = useMemo(() => {
    if (!recipe) return null
    return bestMatchingNft(recipe.mood, recipe.theme, recipe.vibe)
  }, [recipe])

  const isReward =
    inspiration?.rarity === "Epic" || inspiration?.rarity === "Legendary"

  useEffect(() => {
    if (!isReward || !inspiration) return
    setRewardBurst((b) => b + 1)
  }, [isReward, inspiration?.id])

  // Slot-machine spin: fast start → gradual slowdown for satisfying feel
  const runSpin = useCallback((finalRecipe: PolloRecipe) => {
    if (spinTimerRef.current != null) window.clearTimeout(spinTimerRef.current)
    setSpinning(true)

    const TOTAL = 20 + Math.floor(Math.random() * 7) // 20–26 ticks (randomized)
    let tick = 0

    const schedule = () => {
      // Speed ramp: fast for most ticks, slow down at the end
      const isSlowing = tick >= TOTAL - 6
      const ms = isSlowing ? 65 + (tick - (TOTAL - 6)) * 18 : 38

      spinTimerRef.current = window.setTimeout(() => {
        tick++
        if (tick < TOTAL) {
          setRecipe(randomRecipe())
          schedule()
        } else {
          setRecipe(finalRecipe)
          setSpinning(false)
          setBurst((b) => b + 1)
        }
      }, ms)
    }
    schedule()
  }, [])

  const onSurprise = () => {
    if (spinning) return
    runSpin(randomRecipe())
  }

  const cycle = (key: keyof PolloRecipe, dir: 1 | -1) => {
    if (!recipe || spinning) return
    const list =
      key === "mood"
        ? traitOptions.moods
        : key === "theme"
          ? traitOptions.themes
          : traitOptions.vibes
    const cur = list.indexOf(recipe[key])
    const next = list[(cur + dir + list.length) % list.length]
    setRecipe({ ...recipe, [key]: next })
  }

  const onDownload = async () => {
    if (!recipe || !inspiration || downloading) return
    setDownloading(true)
    try {
      await downloadPolloPng(inspiration, recipe)
    } catch (e) {
      console.error(e)
      alert("No se pudo descargar. Prueba de nuevo.")
    } finally {
      setDownloading(false)
    }
  }

  if (!recipe || !inspiration) {
    return (
      <div className="py-20 text-center text-muted font-medium">
        Cargando laboratorio…
      </div>
    )
  }

  const bg = gradientForRecipe(recipe.mood, recipe.theme, recipe.vibe)
  const cfg = RARITY_CFG[inspiration.rarity]

  return (
    <>
      <FullScreenReward activeKey={rewardBurst} rarity={inspiration.rarity} />

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-9"
        >
          <span className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase text-[11px] mb-4">
            <span className="block w-6 h-px bg-accent/40" />
            Sin wallet · solo diversión
            <span className="block w-6 h-px bg-accent/40" />
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-3">
            Crea tu pollo
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
            Mezcla ánimo, tema y vibra. Descarga tu tarjeta firmada{" "}
            <span className="text-foreground font-semibold">@kikirikrew</span> y
            compártela.
          </p>
        </motion.div>

        {/* ── Trait selectors ── */}
        <div className="space-y-2.5 mb-7">
          {TRAIT_META.map(({ key, label, icon }) => {
            const list =
              key === "mood"
                ? traitOptions.moods
                : key === "theme"
                  ? traitOptions.themes
                  : traitOptions.vibes
            const idx = list.indexOf(recipe[key])

            return (
              <div
                key={key}
                className="flex items-stretch rounded-2xl border border-border bg-surface/90 backdrop-blur-sm shadow-sm overflow-hidden"
              >
                {/* Prev */}
                <button
                  type="button"
                  onClick={() => cycle(key, -1)}
                  disabled={spinning}
                  className="shrink-0 w-12 sm:w-14 flex items-center justify-center text-2xl font-light text-muted hover:text-foreground hover:bg-black/5 active:bg-black/10 transition-colors disabled:opacity-30 border-r border-border"
                  aria-label={`Anterior ${label}`}
                >
                  ‹
                </button>

                {/* Value */}
                <div className="flex-1 py-3 px-3 flex flex-col items-center justify-center gap-1 min-h-[4rem]">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted font-bold">
                    {icon} {label}
                  </span>
                  <div
                    className="relative h-6 flex items-center justify-center w-full"
                    style={{
                      filter: spinning ? "blur(1.5px)" : "blur(0px)",
                      transition: "filter 0.08s",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${key}-${recipe[key]}`}
                        initial={{ opacity: 0, y: spinning ? 10 : 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: spinning ? -10 : -6 }}
                        transition={{ duration: spinning ? 0.04 : 0.14 }}
                        className="absolute text-sm sm:text-base font-extrabold tracking-tight text-center"
                      >
                        {recipe[key]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  {/* Position indicator */}
                  {list.length <= 12 ? (
                    <div className="flex items-center gap-[3px] mt-0.5">
                      {list.map((_, i) => (
                        <span
                          key={i}
                          className="rounded-full transition-all duration-200"
                          style={{
                            width: i === idx ? 8 : 4,
                            height: 4,
                            backgroundColor:
                              i === idx
                                ? "var(--color-accent)"
                                : "rgba(0,0,0,0.15)",
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <span className="text-[9px] text-muted font-bold mt-0.5">
                      {idx + 1} / {list.length}
                    </span>
                  )}
                </div>

                {/* Next */}
                <button
                  type="button"
                  onClick={() => cycle(key, 1)}
                  disabled={spinning}
                  className="shrink-0 w-12 sm:w-14 flex items-center justify-center text-2xl font-light text-muted hover:text-foreground hover:bg-black/5 active:bg-black/10 transition-colors disabled:opacity-30 border-l border-border"
                  aria-label={`Siguiente ${label}`}
                >
                  ›
                </button>
              </div>
            )
          })}
        </div>

        {/* ── Action buttons ── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-9">
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={onSurprise}
            disabled={spinning}
            className="flex-1 bg-accent text-white px-5 py-4 rounded-2xl font-extrabold text-base shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 min-h-[3.25rem]"
          >
            {spinning ? (
              <>
                <SpinDots />
                <span>Mezclando…</span>
              </>
            ) : (
              <>
                <span className="text-lg leading-none">🎰</span>
                <span>¡Sorpréndeme!</span>
              </>
            )}
          </motion.button>

          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={onDownload}
            disabled={spinning || downloading}
            className="flex-1 bg-foreground text-white px-5 py-4 rounded-2xl font-extrabold text-base hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 min-h-[3.25rem]"
          >
            {downloading ? (
              <>
                <SpinDots />
                <span>Generando…</span>
              </>
            ) : (
              <>
                <span className="text-lg leading-none">⬇️</span>
                <span>Descargar mi pollo</span>
              </>
            )}
          </motion.button>
        </div>

        {/* ── Preview card ── */}
        <motion.div
          key={burst}
          initial={{ scale: 0.94, rotate: -1.5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: bg,
            boxShadow: isReward
              ? `0 0 0 2px ${cfg.ringColor}, 0 30px 70px -12px ${cfg.glowColor}, 0 0 60px 15px ${cfg.glowColor}`
              : "0 25px 60px -12px rgba(0,0,0,0.4)",
          }}
        >
          {/* Rarity glow overlay (epic/legendary only) */}
          {isReward && (
            <motion.div
              key={`glow-${inspiration.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.55, 0.3] }}
              transition={{ duration: 1.2 }}
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background: `radial-gradient(ellipse at top, ${cfg.glowColor} 0%, transparent 65%)`,
              }}
            />
          )}

          <div className="relative z-20 p-5 sm:p-7 md:p-9">
            {/* Card header */}
            <p className="text-center text-white/70 text-[9px] sm:text-[10px] uppercase tracking-[0.28em] font-bold mb-1">
              Inspirado en la manada
            </p>
            <p className="text-center text-white font-extrabold text-lg sm:text-xl md:text-2xl tracking-tighter mb-4 drop-shadow">
              {inspiration.subtitle} · #{String(inspiration.id).padStart(2, "0")}
            </p>

            {/* Rarity badge */}
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest ${cfg.badge}`}
              >
                {cfg.emoji} {cfg.label}
              </span>
              {isReward && (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="text-white/90 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest"
                >
                  ✦ Premio
                </motion.span>
              )}
            </div>

            {/* NFT image */}
            <div
              className="relative aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: isReward
                  ? `0 0 0 3px ${cfg.ringColor}, 0 20px 50px -10px ${cfg.glowColor}`
                  : "0 20px 45px -10px rgba(0,0,0,0.5)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={inspiration.id}
                  initial={{ opacity: 0, scale: 1.07 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.22 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={inspiration.image}
                    alt={inspiration.name}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* In-card sparkles */}
              <AnimatePresence>
                {isReward && (
                  <motion.div
                    key={`sparkle-${rewardBurst}-${inspiration.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="pointer-events-none absolute inset-0"
                  >
                    {Array.from({ length: 14 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.2, x: 0, y: 0, rotate: 0 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          scale: [0.2, 1.2, 1, 0.4],
                          x:
                            Math.cos((i / 14) * Math.PI * 2) *
                            145 *
                            (i % 2 ? 1 : 0.75),
                          y:
                            Math.sin((i / 14) * Math.PI * 2) *
                            145 *
                            (i % 2 ? 1 : 0.75),
                          rotate: 200 + i * 26,
                        }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        className="absolute left-1/2 top-1/2"
                        style={{ marginLeft: -9, marginTop: -9 }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 2l2.2 6.7H21l-5.4 3.9 2.1 6.7L12 15.5 6.3 19.3l2.1-6.7L3 8.7h6.8L12 2z"
                            fill={cfg.starColor}
                          />
                        </svg>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Recipe tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {[recipe.mood, recipe.theme, recipe.vibe].map((val) => (
                <span
                  key={val}
                  className="text-white/80 bg-white/10 rounded-full px-3 py-1 text-[11px] sm:text-xs font-bold"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          {/* Card footer */}
          <div className="relative z-20 bg-black/40 backdrop-blur-sm px-6 py-4 text-center">
            <p className="text-white font-extrabold tracking-tight text-sm sm:text-base">
              KIKIRIKREW
            </p>
            <p className="text-accent font-bold text-xs sm:text-sm">@kikirikrew</p>
          </div>
        </motion.div>

        {/* ── Footnote ── */}
        <p className="text-center text-muted text-xs sm:text-sm mt-7">
          Esto no es un NFT.
        </p>

        {/* ── CTA links ── */}
        <div className="flex flex-wrap justify-center gap-6 mt-7">
          <Link
            href={COLLECTION.openseaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
          >
            Ver colección en OpenSea
          </Link>
          <a
            href="#"
            className="text-xs sm:text-sm font-bold text-muted underline underline-offset-4 decoration-muted/30 hover:text-foreground transition-colors"
            data-testid="crea-tu-pollo-notify"
          >
            Avísame novedades
          </a>
        </div>
      </div>
    </>
  )
}

// ── Animated loading dots for buttons ──
function SpinDots() {
  return (
    <span className="inline-flex gap-0.5 items-center">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1 h-1 rounded-full bg-current"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 0.75, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  )
}

// ── Full-screen reward animation (Epic / Legendary) ──
function FullScreenReward({
  activeKey,
  rarity,
}: {
  activeKey: number
  rarity: Rarity
}) {
  const isActive = activeKey > 0 && (rarity === "Epic" || rarity === "Legendary")
  if (!isActive) return null

  const cfg = RARITY_CFG[rarity]
  const isLegendary = rarity === "Legendary"
  const bigLabel = isLegendary ? "¡LEGENDARIO!" : "¡ÉPICO!"

  return (
    <AnimatePresence>
      <motion.div
        key={`fs-${activeKey}-${rarity}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
      >
        {/* Dark tint flash */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0] }}
          transition={{ duration: 1.3 }}
          className="absolute inset-0"
          style={{ backgroundColor: cfg.overlayBg }}
        />

        {/* Radial burst behind text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 2.2, 3] }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div
            className="rounded-full"
            style={{
              width: 380,
              height: 380,
              background: isLegendary
                ? "radial-gradient(circle, rgba(253,224,71,0.65) 0%, transparent 68%)"
                : "radial-gradient(circle, rgba(168,85,247,0.65) 0%, transparent 68%)",
              filter: "blur(24px)",
            }}
          />
        </motion.div>

        {/* ── Big rarity text (center) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4, y: 24 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.4, 1.08, 1.02, 0.95],
            y: [24, 0, 0, -12],
          }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 pointer-events-none"
        >
          <div
            className="font-extrabold tracking-tighter leading-none select-none"
            style={{
              fontSize: "clamp(2.8rem, 11vw, 6.5rem)",
              color: cfg.textColor,
              textShadow: `0 0 40px ${cfg.glowColor}, 0 0 80px ${cfg.glowColor}`,
            }}
          >
            {bigLabel}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, -6] }}
            transition={{ duration: 1.6, delay: 0.15 }}
            className="mt-2 text-white/80 font-bold text-xs sm:text-sm tracking-[0.22em] uppercase"
          >
            Premio activado
          </motion.div>
        </motion.div>

        {/* ── Particle burst ── */}
        {Array.from({ length: 54 }).map((_, i) => {
          const angle = (i / 54) * Math.PI * 2
          const dist = 180 + (i % 8) * 48
          const x = Math.cos(angle) * dist
          const y = Math.sin(angle) * dist
          const size = 11 + (i % 5) * 6
          const delay = (i % 16) * 0.007
          const isCircle = i % 4 === 0
          const isDiamond = i % 4 === 2

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1.3, 1, 0.4],
                x,
                y,
                rotate: 360 * (i % 2 ? 1 : -1),
              }}
              transition={{ duration: 1.35, ease: "easeOut", delay }}
              className="absolute left-1/2 top-1/2 pointer-events-none"
              style={{ marginLeft: -size / 2, marginTop: -size / 2 }}
            >
              {isCircle ? (
                <div
                  className="rounded-full"
                  style={{
                    width: size * 0.6,
                    height: size * 0.6,
                    backgroundColor: cfg.starColor,
                  }}
                />
              ) : isDiamond ? (
                <div
                  style={{
                    width: size * 0.65,
                    height: size * 0.65,
                    backgroundColor: cfg.starColor,
                    transform: "rotate(45deg)",
                    borderRadius: 2,
                  }}
                />
              ) : (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.2 6.7H21l-5.4 3.9 2.1 6.7L12 15.5 6.3 19.3l2.1-6.7L3 8.7h6.8L12 2z"
                    fill={cfg.starColor}
                  />
                </svg>
              )}
            </motion.div>
          )
        })}

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: [0, 1, 1, 0], y: [-28, 0, 0, -10] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-8 md:top-12 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full bg-black/65 px-5 py-2.5 backdrop-blur-md border border-white/12 shadow-2xl">
            <span className="text-base leading-none">{cfg.emoji}</span>
            <span className="text-white font-extrabold tracking-[0.18em] uppercase text-[10px] sm:text-xs">
              {isLegendary ? "Legendario" : "Épico"} desbloqueado
            </span>
            <span className="text-base leading-none">{cfg.emoji}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
