import Image from "next/image";
import Link from "next/link";
import { featuredNfts } from "@/lib/nfts";

export default function PreviewGallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
          The Collection / La Colección
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredNfts.map((nft) => (
          <div key={nft.id} className="group cursor-pointer">
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
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/coleccion"
          className="inline-block border-b-2 border-foreground pb-1 font-extrabold uppercase tracking-widest text-sm hover:text-accent hover:border-accent transition-colors duration-200"
          data-testid="preview-gallery-view-all"
        >
          View Full Collection
        </Link>
      </div>
    </section>
  );
}
