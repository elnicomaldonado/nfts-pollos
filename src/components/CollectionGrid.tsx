import Image from "next/image";
import { nfts } from "@/lib/nfts";
import { COLLECTION } from "@/lib/config";

export default function CollectionGrid() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
      {nfts.map((nft) => (
        <div key={nft.id} className="group cursor-pointer">
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
            <span className="text-xs uppercase tracking-widest text-muted font-bold block mb-1">
              Edition {String(nft.id).padStart(2, "0")}/{COLLECTION.totalPieces}
            </span>
            <h3 className="text-base font-extrabold tracking-tight">
              {nft.name} — {nft.subtitle.split(" / ")[0]}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
}
