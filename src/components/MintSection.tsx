import Link from "next/link";
import { COLLECTION, LAUNCH } from "@/lib/config";

export default function MintSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-foreground text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
          Get Your Pollo
        </h2>

        <div className="flex flex-col items-center gap-5">
          <p className="text-2xl font-medium tracking-wide">
            {COLLECTION.price} ETH
          </p>

          <Link
            href={COLLECTION.manifoldUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-14 py-5 rounded-full text-xl font-extrabold hover:opacity-90 transition-opacity duration-200"
            data-testid="mint-section-cta"
          >
            Mint on Manifold
          </Link>

          <p className="text-muted uppercase tracking-[0.3em] text-xs font-bold pt-4">
            Launching {LAUNCH.display}
          </p>
        </div>
      </div>
    </section>
  );
}
