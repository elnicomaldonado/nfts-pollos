// ============================================================
// NFT DATA — Replace placeholder images with real PNGs
// ============================================================

export interface NFT {
  id: number;
  name: string;
  subtitle: string;
  image: string;
}

// Names inspired by the Stitch reference — bilingual personality names
const NAMES: [string, string][] = [
  ["El Valiente", "The Brave"],
  ["El Elegante", "The Elegant"],
  ["El Soñador", "The Dreamer"],
  ["El Rayo", "The Lightning"],
  ["El Explorador", "The Explorer"],
  ["El Maestro", "The Master"],
  ["El Cibernético", "The Cybernetic"],
  ["El Monarca", "The Monarch"],
  ["El Rebelde", "The Rebel"],
  ["El Sabio", "The Wise"],
  ["El Veloz", "The Swift"],
  ["El Misterioso", "The Mysterious"],
  ["El Guardián", "The Guardian"],
  ["El Artista", "The Artist"],
  ["El Viajero", "The Traveler"],
  ["El Nocturno", "The Nocturnal"],
  ["El Dorado", "The Golden"],
  ["El Silencioso", "The Silent"],
  ["El Feroz", "The Fierce"],
  ["El Poeta", "The Poet"],
  ["El Alquimista", "The Alchemist"],
  ["El Cósmico", "The Cosmic"],
  ["El Pirata", "The Pirate"],
  ["El Samurái", "The Samurai"],
  ["El Nómada", "The Nomad"],
  ["El Inventor", "The Inventor"],
  ["El Fantasma", "The Ghost"],
  ["El Gladiador", "The Gladiator"],
  ["El Marinero", "The Sailor"],
  ["El Detective", "The Detective"],
  ["El Volcánico", "The Volcanic"],
  ["El Ángel", "The Angel"],
  ["El Druida", "The Druid"],
  ["El Titán", "The Titan"],
  ["El Navegante", "The Navigator"],
  ["El Visionario", "The Visionary"],
  ["El Centinela", "The Sentinel"],
  ["El Hechicero", "The Sorcerer"],
  ["El Vagabundo", "The Wanderer"],
  ["El Arquitecto", "The Architect"],
  ["El Fugaz", "The Fleeting"],
  ["El Oráculo", "The Oracle"],
  ["El Cazador", "The Hunter"],
  ["El Ermitaño", "The Hermit"],
  ["El Cometa", "The Comet"],
  ["El Relojero", "The Watchmaker"],
  ["El Forjador", "The Forger"],
  ["El Espejismo", "The Mirage"],
  ["El Último", "The Last"],
  ["El Primero", "The First"],
];

/** Generate all 50 NFTs with placeholder data */
export const nfts: NFT[] = Array.from({ length: 50 }, (_, i) => {
  const [es, en] = NAMES[i];
  return {
    id: i + 1,
    name: `Pollo #${String(i + 1).padStart(2, "0")}`,
    subtitle: `${es} / ${en}`,
    // [PLACEHOLDER] — replace with real images at /images/nfts/{id}.png
    image: `/images/nfts/${i + 1}.svg`,
  };
});

/** Featured NFTs for the preview gallery on the home page */
export const featuredNfts = nfts.slice(0, 6);
