"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  bestMatchingNft,
  getTraitOptions,
  gradientForRecipe,
  randomRecipe,
  type PolloRecipe,
} from "@/lib/pollo-generator"
import { downloadPolloPng } from "@/lib/pollo-export"
import { COLLECTION } from "@/lib/config"

export default function CreaTuPolloExperience() {
  const [recipe, setRecipe] = useState<PolloRecipe | null>(null)
  const [spinning, setSpinning] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [burst, setBurst] = useState(0)
  const spinIntervalRef = useRef<number | null>(null)

  useEffect(() => {
    setRecipe(randomRecipe())
  }, [])

  useEffect(() => {
    return () => {
      if (spinIntervalRef.current != null) {
        window.clearInterval(spinIntervalRef.current)
      }
    }
  }, [])

  const inspiration = useMemo(() => {
    if (!recipe) return null
    return bestMatchingNft(recipe.mood, recipe.theme, recipe.vibe)
  }, [recipe])

  const runSpin = useCallback((finalRecipe: PolloRecipe) => {
    if (spinIntervalRef.current != null) {
      window.clearInterval(spinIntervalRef.current)
    }
    setSpinning(true)
    let tick = 0
    const total = 22
    spinIntervalRef.current = window.setInterval(() => {
      tick++
      if (tick < total) {
        setRecipe(randomRecipe())
      } else {
        if (spinIntervalRef.current != null) {
          window.clearInterval(spinIntervalRef.current)
          spinIntervalRef.current = null
        }
        setRecipe(finalRecipe)
        setSpinning(false)
        setBurst((b) => b + 1)
      }
    }, 55)
  }, [])

  const onSurprise = () => {
    if (spinning) return
    runSpin(randomRecipe())
  }

  const cycle = (key: keyof PolloRecipe, dir: 1 | -1) => {
    if (!recipe || spinning) return
    const { moods, themes, vibes } = getTraitOptions()
    const list = key === "mood" ? moods : key === "theme" ? themes : vibes
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

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
          Sin wallet · solo diversión
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
          Crea tu pollo
        </h1>
        <p className="text-muted text-lg max-w-lg mx-auto leading-relaxed">
          Mezcla ánimo, tema y vibra. Te mostramos un pollo de la colección que
          mejor encaja. Descarga tu tarjeta con firma{" "}
          <span className="text-foreground font-semibold">@kikirikrew</span> para
          compartir.
        </p>
      </motion.div>

      {/* Trait controls */}
      <div className="grid gap-4 mb-8">
        {(
          [
            { key: "mood" as const, label: "Ánimo" },
            { key: "theme" as const, label: "Tema" },
            { key: "vibe" as const, label: "Vibra" },
          ] as const
        ).map(({ key, label }) => (
          <div
            key={key}
            className="flex items-stretch gap-2 rounded-2xl border border-border bg-white/60 p-2 shadow-sm"
          >
            <button
              type="button"
              onClick={() => cycle(key, -1)}
              disabled={spinning}
              className="shrink-0 rounded-xl bg-surface px-4 py-3 font-bold text-muted hover:text-foreground disabled:opacity-40"
              aria-label={`Anterior ${label}`}
            >
              ‹
            </button>
            <div className="flex-1 flex flex-col justify-center min-h-[3.5rem] text-center px-2">
              <span className="text-[10px] uppercase tracking-widest text-muted font-bold">
                {label}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${key}-${recipe[key]}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="text-lg font-extrabold tracking-tight"
                >
                  {recipe[key]}
                </motion.span>
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={() => cycle(key, 1)}
              disabled={spinning}
              className="shrink-0 rounded-xl bg-surface px-4 py-3 font-bold text-muted hover:text-foreground disabled:opacity-40"
              aria-label={`Siguiente ${label}`}
            >
              ›
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onSurprise}
          disabled={spinning}
          className="bg-accent text-white px-8 py-4 rounded-full font-extrabold text-base shadow-lg disabled:opacity-50"
        >
          {spinning ? "Mezclando…" : "¡Sorpréndeme!"}
        </motion.button>
        <button
          type="button"
          onClick={onDownload}
          disabled={spinning || downloading}
          className="bg-foreground text-white px-8 py-4 rounded-full font-extrabold text-base hover:opacity-90 disabled:opacity-50"
        >
          {downloading ? "Generando PNG…" : "Descargar mi pollo"}
        </button>
      </div>

      {/* Preview card */}
      <motion.div
        key={burst}
        initial={{ scale: 0.94, rotate: -1.5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20"
        style={{ background: bg }}
      >
        <div className="p-6 md:p-10">
          <p className="text-center text-white/90 text-xs uppercase tracking-[0.25em] font-bold mb-2">
            Inspirado en la manada
          </p>
          <p className="text-center text-white font-extrabold text-2xl md:text-3xl tracking-tighter mb-6 drop-shadow-sm">
            {inspiration.subtitle} · #{String(inspiration.id).padStart(2, "0")}
          </p>
          <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden ring-4 ring-white/30 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={inspiration.id}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center bg-black/10"
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
          </div>
          <p className="text-center text-white/80 text-sm mt-6 font-medium">
            Tu mezcla: {recipe.mood} · {recipe.theme} · {recipe.vibe}
          </p>
        </div>
        <div className="bg-black/35 backdrop-blur-sm px-6 py-5 text-center">
          <p className="text-white font-extrabold tracking-tight text-lg">
            KIKIRIKREW
          </p>
          <p className="text-accent font-bold">@kikirikrew</p>
        </div>
      </motion.div>

      <p className="text-center text-muted text-sm mt-8 max-w-md mx-auto">
        El NFT oficial es otro proceso (OpenSea / equipo). Esto es para jugar y
        compartir con marca.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Link
          href={COLLECTION.openseaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-accent border-b-2 border-accent pb-0.5"
        >
          Ver colección en OpenSea
        </Link>
        <a
          href="#"
          className="text-sm font-bold text-muted border-b-2 border-border pb-0.5"
          data-testid="crea-tu-pollo-notify"
        >
          Avísame novedades
        </a>
      </div>
    </div>
  )
}
