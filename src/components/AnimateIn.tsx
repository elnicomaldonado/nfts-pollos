"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/**
 * Fade-up on viewport entry. Fires once.
 * Wrap any section or element to animate it in on scroll.
 */
export default function AnimateIn({
  children,
  className,
  delay = 0,
  y = 24,
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
