import Image from "next/image";
import { SITE } from "@/lib/config";

export default function HeroSection() {
  return (
    <header className="px-4 sm:px-6 lg:px-8 pt-16 pb-24 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center gap-10">
        <div className="space-y-4">
          <h1 className="text-7xl md:text-[8rem] font-extrabold tracking-tighter leading-none">
            {SITE.brandName}
          </h1>
          <p className="text-lg md:text-xl text-muted tracking-widest uppercase font-medium">
            50 Unique Characters / 50 Personajes Únicos
          </p>
        </div>

        <div className="w-full max-w-2xl aspect-square bg-surface rounded-xl overflow-hidden">
          {/* [PLACEHOLDER] — replace with hero artwork */}
          <Image
            src="/images/placeholder-hero.svg"
            alt="POLLOS Collection hero artwork"
            width={800}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}
