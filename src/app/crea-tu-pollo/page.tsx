import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Crea Tu Pollo — POLLOS",
  description:
    "Coming soon: mix and match traits to create your own unique POLLOS character.",
};

export default function CreaTuPolloPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 text-center">
      {/* Label */}
      <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
        Coming Soon / Próximamente
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
        Crea Tu Pollo
      </h1>

      {/* Description */}
      <p className="text-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12">
        Soon you&apos;ll be able to mix and match chicken traits to create your own
        unique character. A digital laboratory for the POLLOS ecosystem.
      </p>

      {/* Preview image */}
      <div className="relative mx-auto mb-14 max-w-sm w-full">
        <div className="aspect-square overflow-hidden rounded-xl bg-surface">
          {/* [PLACEHOLDER] — replace with preview artwork */}
          <Image
            src="/images/placeholder-hero.svg"
            alt="Crea Tu Pollo preview"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
            </svg>
            <span className="font-bold tracking-tight text-sm">
              EN DESARROLLO
            </span>
          </div>
        </div>
      </div>

      {/* Email signup — links to external form */}
      <a
        href="#" // [PLACEHOLDER] — replace with Google Form / Typeform URL
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-foreground text-white px-10 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity duration-200"
        data-testid="crea-tu-pollo-notify"
      >
        Notify Me / Notifícame
      </a>
    </div>
  );
}
