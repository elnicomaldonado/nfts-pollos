"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SITE } from "@/lib/config";

export default function ArtistSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white mx-auto shadow-lg ring-2 ring-black/5">
            <Image
              src="/images/puttuno-artist.png"
              alt={`${SITE.artistName} — ${SITE.artistRole}`}
              width={400}
              height={400}
              className="w-full h-full object-cover object-[center_25%]"
              sizes="(max-width: 640px) 176px, 192px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tighter mb-2">
            {SITE.artistName}
          </h2>
          <p className="text-accent font-bold uppercase tracking-widest text-xs mb-8">
            {SITE.artistRole}
          </p>

          <div className="text-muted space-y-4 max-w-2xl mx-auto leading-relaxed">
            {/* [PLACEHOLDER] — replace with real artist bio */}
            <p>
              Biografía del artista: reemplaza este texto con la historia real
              de Puttuno antes del lanzamiento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
