import type { Metadata } from "next";
import Link from "next/link";
import CollectionGrid from "@/components/CollectionGrid";
import { COLLECTION } from "@/lib/config";

export const metadata: Metadata = {
  title: "La colección — Kikirikrew",
  description:
    "Explora los 50 personajes únicos ilustrados a mano de la colección Kikirikrew.",
};

export default function ColeccionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
      {/* Header */}
      <header className="mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-3">
          La colección
        </h1>
        <p className="text-lg text-muted font-medium tracking-tight">
          {COLLECTION.totalPieces} personajes únicos ilustrados a mano.
        </p>
      </header>

      {/* Grid */}
      <CollectionGrid />

      {/* CTA */}
      <section className="mt-24 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
          ¿Listo para el tuyo?
        </h2>
        <p className="text-muted mb-10 max-w-lg text-lg">
          Cada pieza es única y verificada en cadena. Únete a la colección en
          OpenSea.
        </p>
        <Link
          href={COLLECTION.openseaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-white px-10 py-4 rounded-full font-extrabold text-lg hover:opacity-90 transition-opacity duration-200"
          data-testid="collection-mint-cta"
        >
          Mint en OpenSea
        </Link>
      </section>
    </div>
  );
}
