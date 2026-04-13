// ============================================================
// PROJECT CONFIG — Replace [PLACEHOLDER] values before launch
// ============================================================

export const SITE = {
  /** Brand / artist name shown in header, hero, footer */
  brandName: "POLLOS", // [PLACEHOLDER] — update if brand name changes
  /** Collection name */
  collectionName: "[NOMBRE DE COLECCIÓN]", // [PLACEHOLDER]
  /** Artist display name */
  artistName: "[NOMBRE ARTISTA]", // [PLACEHOLDER]
  /** Artist role / title */
  artistRole: "Digital Artist", // [PLACEHOLDER]
  /** Copyright year */
  year: 2026,
} as const;

export const COLLECTION = {
  /** Total pieces in collection */
  totalPieces: 50,
  /** Blockchain */
  blockchain: "Ethereum",
  /** Price per piece */
  price: "[PRICE TBD]", // [PLACEHOLDER]
  /** Token standard */
  standard: "ERC-721",
  /** Manifold claim page URL */
  manifoldUrl: "#", // [PLACEHOLDER] — replace with actual Manifold URL
  /** OpenSea collection URL */
  openseaUrl: "#", // [PLACEHOLDER] — replace with actual OpenSea URL
} as const;

export const SOCIAL = {
  instagram: "#", // [PLACEHOLDER]
  twitter: "#", // [PLACEHOLDER]
  opensea: COLLECTION.openseaUrl,
} as const;

export const LAUNCH = {
  /** Launch date — April 16, 2026, midnight UTC */
  date: new Date("2026-04-16T00:00:00Z"),
  /** Formatted display string */
  display: "April 16, 2026",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/coleccion", label: "Colección" },
  { href: "/crea-tu-pollo", label: "Crea tu Pollo" },
] as const;
