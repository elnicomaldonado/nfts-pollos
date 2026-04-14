"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimateIn from "./AnimateIn";

const FAQ_ITEMS = [
  {
    question: "¿Qué es un NFT?",
    answer:
      "Un token no fungible (NFT) es un identificador digital único registrado en blockchain que certifica la autenticidad y la propiedad de un activo digital.",
  },
  {
    question: "¿Cómo compro?",
    answer:
      "Necesitas una wallet de Ethereum (por ejemplo MetaMask) con ETH. Pulsa «Mint» o «Comprar en OpenSea» para ir a la colección en OpenSea y sigue los pasos allí.",
  },
  {
    question: "¿Cuántas piezas hay?",
    answer:
      "La colección Kikirikrew tiene 50 piezas únicas ilustradas a mano (1/1). Cada una es un personaje distinto.",
  },
  {
    question: "¿Cuál es el precio?",
    answer:
      "El precio por pieza está indicado en la sección de compra y en OpenSea. Revisa también nuestras redes para novedades.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <AnimateIn>
        <h2 className="text-4xl font-extrabold tracking-tighter mb-14 text-center">
          Preguntas frecuentes
        </h2>
      </AnimateIn>

      <div className="space-y-0">
        {FAQ_ITEMS.map((item, i) => (
          <AnimateIn key={i} delay={i * 0.06} y={16}>
            <div className="py-6 border-b border-border">
              <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                data-testid={`faq-toggle-${i}`}
              >
                <span className="text-lg md:text-xl font-bold tracking-tight pr-4">
                  {item.question}
                </span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-muted group-hover:text-foreground"
                >
                  <path d="M10 4v12M4 10h12" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden mt-4 text-muted leading-relaxed"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
