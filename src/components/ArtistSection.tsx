import Image from "next/image";
import { SITE } from "@/lib/config";

export default function ArtistSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-6 border-white mx-auto shadow-sm">
            {/* [PLACEHOLDER] — replace with artist photo */}
            <Image
              src="/images/placeholder-artist.svg"
              alt={SITE.artistName}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tighter mb-2">
          {SITE.artistName}
        </h2>
        <p className="text-accent font-bold uppercase tracking-widest text-xs mb-8">
          {SITE.artistRole}
        </p>

        <div className="text-muted space-y-4 max-w-2xl mx-auto leading-relaxed">
          {/* [PLACEHOLDER] — replace with real artist bio */}
          <p>
            Artist bio in English goes here. Replace this placeholder with the
            real biography before launch.
          </p>
          <p>
            Bio de la artista en español va aquí. Reemplazar este placeholder
            con la biografía real antes del lanzamiento.
          </p>
        </div>
      </div>
    </section>
  );
}
