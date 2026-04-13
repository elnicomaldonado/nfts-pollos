"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What is an NFT? / ¿Qué es un NFT?",
    answer:
      "A non-fungible token (NFT) is a unique digital identifier recorded on a blockchain that certifies authenticity and ownership of a digital asset. / Un token no fungible es un identificador digital único registrado en blockchain que certifica la autenticidad y propiedad de un activo digital.",
  },
  {
    question: "How do I buy? / ¿Cómo compro?",
    answer:
      "You'll need an Ethereum wallet (like MetaMask) with ETH. Click the 'Mint' button to go to our Manifold claim page and follow the instructions. / Necesitas una wallet de Ethereum (como MetaMask) con ETH. Haz clic en 'Mint' para ir a la página de Manifold y sigue las instrucciones.",
  },
  {
    question: "How many pieces? / ¿Cuántas piezas hay?",
    answer:
      "The POLLOS collection consists of 50 unique, hand-illustrated 1/1 pieces. Each one is a completely unique character. / La colección POLLOS consta de 50 piezas únicas ilustradas a mano. Cada una es un personaje completamente único.",
  },
  {
    question: "What's the price? / ¿Cuál es el precio?",
    answer:
      "The price per piece will be announced closer to launch date. Follow us on social media for updates. / El precio por pieza se anunciará más cerca de la fecha de lanzamiento. Síguenos en redes sociales para actualizaciones.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold tracking-tighter mb-14 text-center">
        Common Questions
      </h2>

      <div className="space-y-0">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className="py-6 border-b border-border"
          >
            <button
              className="w-full flex justify-between items-center text-left group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              data-testid={`faq-toggle-${i}`}
            >
              <span className="text-lg md:text-xl font-bold tracking-tight pr-4">
                {item.question}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`shrink-0 text-muted group-hover:text-foreground transition-transform duration-200 ${
                  openIndex === i ? "rotate-45" : ""
                }`}
              >
                <path d="M10 4v12M4 10h12" />
              </svg>
            </button>

            {openIndex === i && (
              <p className="mt-4 text-muted leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
