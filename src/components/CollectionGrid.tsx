"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { nfts, type Rarity } from "@/lib/nfts";
import { COLLECTION } from "@/lib/config";

const rarityColor: Record<Rarity, string> = {
  Common:    "text-zinc-400",
  Uncommon:  "text-green-400",
  Rare:      "text-blue-400",
  Epic:      "text-purple-400",
  Legendary: "text-yellow-400",
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: (i % 4) * 0.06 },
  }),
};

export default function CollectionGrid() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
      {nfts.map((nft, i) => (
        <motion.div
          key={nft.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={cardVariants}
          className="group cursor-pointer"
        >
          <div className="aspect-square rounded-xl bg-surface overflow-hidden">
            <Image
              src={nft.image}
              alt={`${nft.name} — ${nft.subtitle}`}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs uppercase tracking-widest text-muted font-bold">
                {String(nft.id).padStart(2, "0")}/{COLLECTION.totalPieces}
              </span>
              <span className={`text-xs font-bold uppercase tracking-wider ${rarityColor[nft.rarity]}`}>
                {nft.rarity}
              </span>
            </div>
            <h3 className="text-base font-extrabold tracking-tight">
              {nft.subtitle}
            </h3>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
