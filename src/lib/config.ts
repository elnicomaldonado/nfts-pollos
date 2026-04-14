// ============================================================
// PROJECT CONFIG — Replace [PLACEHOLDER] values before launch
// ============================================================

export const SITE = {
  /** Brand / artist name shown in header, hero, footer */
  brandName: "KIKIRIKREW",
  /** Collection name */
  collectionName: "Kikirikrew",
  /** Artist display name */
  artistName: "Puttuno",
  /** Artist role / title */
  artistRole: "Artista digital",
  /** Copyright year */
  year: 2026,
} as const;

export const COLLECTION = {
  /** Total pieces in collection */
  totalPieces: 50,
  /** Blockchain */
  blockchain: "Ethereum",
  /** Price per piece */
  price: "0.005",
  /** Token standard */
  standard: "ERC-721",
  /** Manifold claim page URL */
  manifoldUrl: "#", // [PLACEHOLDER] — replace with actual Manifold URL
  /** OpenSea collection URL */
  openseaUrl: "https://opensea.io/collection/kikirikrew",
} as const;

export const SOCIAL = {
  instagram: "#", // [PLACEHOLDER]
  twitter: "#", // [PLACEHOLDER]
  opensea: COLLECTION.openseaUrl,
} as const;

export const LAUNCH = {
  /** Launch date — 14 April 2026, midnight UTC */
  date: new Date("2026-04-14T00:00:00Z"),
  /** Formatted display string */
  display: "14 de abril de 2026",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/coleccion", label: "Colección" },
  { href: "/crea-tu-pollo", label: "Crea tu Pollo" },
] as const;
