"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COLLECTION } from "@/lib/config";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-white flex flex-col" data-testid="mobile-menu">
      {/* Close button */}
      <div className="flex justify-end px-4 sm:px-6 py-5">
        <button
          onClick={onClose}
          className="p-2 text-foreground"
          aria-label="Close menu"
          data-testid="mobile-menu-close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col items-center justify-center flex-1 gap-10">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`text-3xl font-extrabold tracking-tighter transition-colors duration-200 ${
              pathname === link.href ? "text-foreground" : "text-muted"
            }`}
            data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href={COLLECTION.manifoldUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-4 bg-foreground text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity duration-200"
          data-testid="mobile-menu-mint-button"
        >
          Mint
        </Link>
      </div>
    </div>
  );
}
