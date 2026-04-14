"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { featuredNfts } from "@/lib/nfts";
import AnimateIn from "./AnimateIn";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

export default function PreviewGallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <AnimateIn className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
          La colección
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto" />
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredNfts.map((nft, i) => (
          <motion.div
            key={nft.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            className="group cursor-pointer"
          >
            <div className="aspect-square rounded-xl bg-surface overflow-hidden mb-4">
              <Image
                src={nft.image}
                alt={`${nft.name} — ${nft.subtitle}`}
                width={600}
                height={600}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
              />
            </div>
            <div className="px-1">
              <span className="text-xs font-bold text-muted uppercase tracking-wide">
                {nft.name}
              </span>
              <h3 className="text-base font-bold tracking-tight">
                {nft.subtitle}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimateIn className="text-center">
        <Link
          href="/coleccion"
          className="inline-block border-b-2 border-foreground pb-1 font-extrabold uppercase tracking-widest text-sm hover:text-accent hover:border-accent transition-colors duration-200"
          data-testid="preview-gallery-view-all"
        >
          Ver colección completa
        </Link>
      </AnimateIn>
    </section>
  );
}
