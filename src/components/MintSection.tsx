"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { COLLECTION, LAUNCH } from "@/lib/config";

export default function MintSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-foreground text-white overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter"
        >
          Consigue tu pollo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-extrabold tracking-tight">
              {COLLECTION.price} ETH
            </p>
            <span className="text-white/50 text-lg font-medium">≈ $12 USD</span>
          </div>

          <Link
            href={COLLECTION.openseaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-white px-14 py-5 rounded-full text-xl font-extrabold hover:opacity-90 transition-opacity duration-200"
            data-testid="mint-section-cta"
          >
            <svg width="24" height="24" viewBox="0 0 90 90" fill="currentColor" aria-hidden="true">
              <path d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.326 19.08 52.137 19.314 52.137H32.373C32.634 52.137 32.823 52.371 32.805 52.632C32.706 53.505 32.868 54.396 33.273 55.188C34.047 56.745 35.631 57.726 37.359 57.726H43.866V52.65H37.431C37.098 52.65 36.9 52.281 37.089 52.02C37.161 51.885 37.251 51.75 37.35 51.606C38.124 50.484 39.249 48.726 40.365 46.71C41.1 45.393 41.826 43.983 42.399 42.579C42.516 42.3 42.615 42.012 42.714 41.733C42.876 41.247 43.047 40.788 43.155 40.329C43.263 39.933 43.353 39.519 43.434 39.123C43.677 37.845 43.776 36.495 43.776 35.1C43.776 34.56 43.749 33.993 43.695 33.453C43.623 32.85 43.515 32.247 43.407 31.644C43.308 31.095 43.164 30.555 43.029 30.015C42.867 29.376 42.669 28.746 42.471 28.125L42.39 27.847C42.219 27.306 42.039 26.775 41.823 26.253C41.094 24.3 40.239 22.392 39.348 20.565C39.042 19.935 38.718 19.323 38.385 18.729C37.971 17.991 37.557 17.289 37.098 16.605C36.864 16.218 36.567 15.858 36.333 15.471C36.063 15.039 35.784 14.607 35.478 14.202C35.262 13.896 35.019 13.608 34.839 13.302L34.164 12.231C34.029 12.006 34.191 11.718 34.452 11.745L38.799 11.745H38.817C39.6 11.745 40.356 12.168 40.797 12.843L47.664 23.313C47.916 23.7 48.159 24.096 48.375 24.501C49.077 25.68 49.77 26.994 50.382 28.368C50.625 28.908 50.868 29.466 51.102 30.015C51.48 30.924 51.804 31.86 52.065 32.787C52.218 33.291 52.353 33.813 52.47 34.326C52.704 35.289 52.839 36.288 52.884 37.26C52.902 37.566 52.911 37.881 52.911 38.187C52.911 39.258 52.776 40.32 52.515 41.355C52.272 42.39 51.903 43.371 51.444 44.307C51.003 45.27 50.472 46.188 49.869 47.07C49.671 47.358 49.455 47.628 49.239 47.898C49.005 48.195 48.762 48.483 48.519 48.762C48.276 49.05 48.033 49.329 47.772 49.599C47.52 49.869 47.268 50.13 46.998 50.382C46.449 50.913 45.828 51.381 45.108 51.732H43.866V52.605H50.022C50.418 52.605 50.796 52.479 51.12 52.263C51.984 51.669 53.847 50.247 54.909 47.88H54.9V52.605H62.316C62.595 52.605 62.856 52.38 62.874 52.101C62.928 51.462 63.144 49.878 63.9 48.537C64.08 48.231 64.485 48.573 64.341 48.87C63.684 50.265 63.297 51.462 63.144 52.101H74.07C74.268 52.101 74.376 52.605 74.376 52.812Z" />
            </svg>
            Comprar en OpenSea
          </Link>

          <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold pt-4">
            Lanzamiento el {LAUNCH.display}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
