"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SITE } from "@/lib/config";

export default function HeroSection() {
  return (
    <header className="px-4 sm:px-6 lg:px-8 pt-16 pb-24 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center gap-10">
        <div className="space-y-4 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-7xl md:text-[8rem] font-extrabold tracking-tighter leading-none"
          >
            {SITE.brandName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl text-muted tracking-widest uppercase font-medium"
          >
            50 personajes únicos
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="w-full max-w-2xl aspect-square bg-surface rounded-xl overflow-hidden"
        >
          <Image
            src="/images/nfts/01_og.png"
            alt="Arte principal de la colección Kikirikrew"
            width={800}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </header>
  );
}
