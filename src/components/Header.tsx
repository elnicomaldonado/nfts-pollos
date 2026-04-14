"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE, NAV_LINKS, COLLECTION } from "@/lib/config";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5 max-w-6xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tighter"
            data-testid="header-logo"
          >
            {SITE.brandName}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-bold tracking-tight transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-foreground border-b-2 border-accent pb-1"
                    : "text-muted hover:text-foreground"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Mint CTA */}
            <Link
              href={COLLECTION.openseaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-white px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity duration-200"
              data-testid="header-mint-button"
            >
              Comprar
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              data-testid="header-menu-toggle"
            >
              <span className="block w-6 h-0.5 bg-foreground" />
              <span className="block w-6 h-0.5 bg-foreground" />
              <span className="block w-4 h-0.5 bg-foreground" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
