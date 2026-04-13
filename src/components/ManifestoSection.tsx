"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ManifestoSection() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 md:pr-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight">
            The Story / La Historia
          </h2>
          <div className="space-y-5 text-lg text-muted leading-relaxed">
            {/* [PLACEHOLDER] — replace with real manifesto copy */}
            <p>
              Pollos represents a convergence of traditional illustration and
              modern digital expressionism. Each character is meticulously
              crafted to evoke a specific emotional resonance, blending vibrant
              palettes with sharp, calculated personality.
            </p>
            <p>
              En el corazón de esta colección yace la idea de que lo cotidiano
              puede elevarse a lo extraordinario. No son solo imágenes; son
              fragmentos de una narrativa visual que desafía la percepción de lo
              que el arte digital puede representar.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="aspect-[4/5] bg-surface rounded-xl overflow-hidden"
        >
          {/* [PLACEHOLDER] — replace with manifesto artwork */}
          <Image
            src="/images/placeholder-hero.svg"
            alt="Artwork from the POLLOS collection"
            width={600}
            height={750}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
