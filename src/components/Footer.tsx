import { SITE, SOCIAL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-white">
      <div className="flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <span className="text-xl font-extrabold tracking-tighter">
          {SITE.brandName}
        </span>

        <div className="flex gap-10">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200"
            data-testid="footer-instagram"
          >
            Instagram
          </a>
          <a
            href={SOCIAL.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200"
            data-testid="footer-twitter"
          >
            X
          </a>
          <a
            href={SOCIAL.opensea}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200"
            data-testid="footer-opensea"
          >
            OpenSea
          </a>
        </div>

        <p className="text-xs uppercase tracking-widest text-muted opacity-80">
          &copy; {SITE.year} {SITE.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
