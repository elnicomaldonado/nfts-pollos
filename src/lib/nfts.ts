// ============================================================
// NFT DATA — Kikirikrew collection, 50 hand-drawn roosters
// ============================================================

export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export interface NFT {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  rarity: Rarity;
  attributes: {
    mood: string;
    theme: string;
    vibe: string;
  };
}

export const nfts: NFT[] = [
  { id: 1,  name: "Kikirikrew #1",  subtitle: "OG",             image: "/images/nfts/01_og.png",              rarity: "Uncommon",  attributes: { mood: "Chill",       theme: "Original",  vibe: "Bold"        } },
  { id: 2,  name: "Kikirikrew #2",  subtitle: "Melted",          image: "/images/nfts/02_melted.png",           rarity: "Rare",      attributes: { mood: "Dreamy",      theme: "Surreal",   vibe: "Psychedelic" } },
  { id: 3,  name: "Kikirikrew #3",  subtitle: "Stars",           image: "/images/nfts/03_stars.png",            rarity: "Uncommon",  attributes: { mood: "Dreamy",      theme: "Cosmic",    vibe: "Bright"      } },
  { id: 4,  name: "Kikirikrew #4",  subtitle: "Alien",           image: "/images/nfts/04_alien.png",            rarity: "Rare",      attributes: { mood: "Mysterious",  theme: "Sci-Fi",    vibe: "Electric"    } },
  { id: 5,  name: "Kikirikrew #5",  subtitle: "Cowrooster",      image: "/images/nfts/05_cowrooste.png",        rarity: "Common",    attributes: { mood: "Playful",     theme: "Country",   vibe: "Cozy"        } },
  { id: 6,  name: "Kikirikrew #6",  subtitle: "Gummy",           image: "/images/nfts/06_gummy.png",            rarity: "Common",    attributes: { mood: "Sweet",       theme: "Candy",     vibe: "Soft"        } },
  { id: 7,  name: "Kikirikrew #7",  subtitle: "Clown",           image: "/images/nfts/07_clown.png",            rarity: "Common",    attributes: { mood: "Wild",        theme: "Circus",    vibe: "Bright"      } },
  { id: 8,  name: "Kikirikrew #8",  subtitle: "Mime",            image: "/images/nfts/08_mime.png",             rarity: "Uncommon",  attributes: { mood: "Mysterious",  theme: "Circus",    vibe: "Minimal"     } },
  { id: 9,  name: "Kikirikrew #9",  subtitle: "Flower",          image: "/images/nfts/09_flower.png",           rarity: "Common",    attributes: { mood: "Sweet",       theme: "Nature",    vibe: "Soft"        } },
  { id: 10, name: "Kikirikrew #10", subtitle: "GRWM",            image: "/images/nfts/10_grwm.png",             rarity: "Uncommon",  attributes: { mood: "Confident",   theme: "Lifestyle", vibe: "Glam"        } },
  { id: 11, name: "Kikirikrew #11", subtitle: "Diver",           image: "/images/nfts/11_diver.png",            rarity: "Uncommon",  attributes: { mood: "Adventurous", theme: "Ocean",     vibe: "Bold"        } },
  { id: 12, name: "Kikirikrew #12", subtitle: "Brain",           image: "/images/nfts/12_brain_.png",           rarity: "Rare",      attributes: { mood: "Wild",        theme: "Surreal",   vibe: "Dark"        } },
  { id: 13, name: "Kikirikrew #13", subtitle: "Zombie",          image: "/images/nfts/13_zombie.png",           rarity: "Rare",      attributes: { mood: "Fierce",      theme: "Spooky",    vibe: "Dark"        } },
  { id: 14, name: "Kikirikrew #14", subtitle: "Granny",          image: "/images/nfts/14_granny.png",           rarity: "Common",    attributes: { mood: "Chill",       theme: "Classic",   vibe: "Cozy"        } },
  { id: 15, name: "Kikirikrew #15", subtitle: "Skeleton",        image: "/images/nfts/15_skeleton_.png",        rarity: "Rare",      attributes: { mood: "Fierce",      theme: "Spooky",    vibe: "Dark"        } },
  { id: 16, name: "Kikirikrew #16", subtitle: "Bonnet",          image: "/images/nfts/16_bonnet.png",           rarity: "Common",    attributes: { mood: "Sweet",       theme: "Classic",   vibe: "Soft"        } },
  { id: 17, name: "Kikirikrew #17", subtitle: "Tomato",          image: "/images/nfts/17_tomato.png",           rarity: "Common",    attributes: { mood: "Playful",     theme: "Food",      vibe: "Bright"      } },
  { id: 18, name: "Kikirikrew #18", subtitle: "Rapper",          image: "/images/nfts/18_rapper.png",           rarity: "Uncommon",  attributes: { mood: "Confident",   theme: "Street",    vibe: "Bold"        } },
  { id: 19, name: "Kikirikrew #19", subtitle: "Brows",           image: "/images/nfts/19_brows.png",            rarity: "Common",    attributes: { mood: "Grumpy",      theme: "Surreal",   vibe: "Raw"         } },
  { id: 20, name: "Kikirikrew #20", subtitle: "Thief",           image: "/images/nfts/20_thief.png",            rarity: "Uncommon",  attributes: { mood: "Mysterious",  theme: "Street",    vibe: "Dark"        } },
  { id: 21, name: "Kikirikrew #21", subtitle: "Mommy",           image: "/images/nfts/21_mommy.png",            rarity: "Common",    attributes: { mood: "Sweet",       theme: "Classic",   vibe: "Cozy"        } },
  { id: 22, name: "Kikirikrew #22", subtitle: "Acupuncture",     image: "/images/nfts/22_acupunture.png",       rarity: "Uncommon",  attributes: { mood: "Chill",       theme: "Wellness",  vibe: "Zen"         } },
  { id: 23, name: "Kikirikrew #23", subtitle: "Pirate",          image: "/images/nfts/23_pirate.png",           rarity: "Uncommon",  attributes: { mood: "Fierce",      theme: "Adventure", vibe: "Bold"        } },
  { id: 24, name: "Kikirikrew #24", subtitle: "Disco",           image: "/images/nfts/24_disco.png",            rarity: "Rare",      attributes: { mood: "Confident",   theme: "Retro",     vibe: "Glam"        } },
  { id: 25, name: "Kikirikrew #25", subtitle: "Dots",            image: "/images/nfts/25_dots.png",             rarity: "Common",    attributes: { mood: "Playful",     theme: "Pattern",   vibe: "Bright"      } },
  { id: 26, name: "Kikirikrew #26", subtitle: "Fire",            image: "/images/nfts/26_fire.png",             rarity: "Rare",      attributes: { mood: "Fierce",      theme: "Elemental", vibe: "Electric"    } },
  { id: 27, name: "Kikirikrew #27", subtitle: "Banana",          image: "/images/nfts/27_banana.png",           rarity: "Common",    attributes: { mood: "Playful",     theme: "Food",      vibe: "Bright"      } },
  { id: 28, name: "Kikirikrew #28", subtitle: "Heatmap",         image: "/images/nfts/28_heatmap.png",          rarity: "Rare",      attributes: { mood: "Mysterious",  theme: "Tech",      vibe: "Electric"    } },
  { id: 29, name: "Kikirikrew #29", subtitle: "Holes",           image: "/images/nfts/29_holes.png",            rarity: "Uncommon",  attributes: { mood: "Wild",        theme: "Surreal",   vibe: "Raw"         } },
  { id: 30, name: "Kikirikrew #30", subtitle: "Ice",             image: "/images/nfts/30_ice.png",              rarity: "Rare",      attributes: { mood: "Chill",       theme: "Elemental", vibe: "Soft"        } },
  { id: 31, name: "Kikirikrew #31", subtitle: "Cold",            image: "/images/nfts/31_cold.png",             rarity: "Uncommon",  attributes: { mood: "Sleepy",      theme: "Elemental", vibe: "Soft"        } },
  { id: 32, name: "Kikirikrew #32", subtitle: "Zebra",           image: "/images/nfts/32_zebra.png",            rarity: "Uncommon",  attributes: { mood: "Wild",        theme: "Animal",    vibe: "Bold"        } },
  { id: 33, name: "Kikirikrew #33", subtitle: "Santa",           image: "/images/nfts/33_santa.png",            rarity: "Common",    attributes: { mood: "Playful",     theme: "Holiday",   vibe: "Cozy"        } },
  { id: 34, name: "Kikirikrew #34", subtitle: "Smooches",        image: "/images/nfts/34_smooches.png",         rarity: "Common",    attributes: { mood: "Sweet",       theme: "Love",      vibe: "Glam"        } },
  { id: 35, name: "Kikirikrew #35", subtitle: "Black & White",   image: "/images/nfts/35_blacknwhite.png",      rarity: "Rare",      attributes: { mood: "Chill",       theme: "Minimal",   vibe: "Raw"         } },
  { id: 36, name: "Kikirikrew #36", subtitle: "Chess",           image: "/images/nfts/36_chess.png",            rarity: "Uncommon",  attributes: { mood: "Mysterious",  theme: "Strategy",  vibe: "Minimal"     } },
  { id: 37, name: "Kikirikrew #37", subtitle: "Nerd",            image: "/images/nfts/37_nerd.png",             rarity: "Common",    attributes: { mood: "Chill",       theme: "Geek",      vibe: "Bright"      } },
  { id: 38, name: "Kikirikrew #38", subtitle: "Cactus",          image: "/images/nfts/38_cactus.png",           rarity: "Uncommon",  attributes: { mood: "Fierce",      theme: "Nature",    vibe: "Raw"         } },
  { id: 39, name: "Kikirikrew #39", subtitle: "Ginger",          image: "/images/nfts/39_ginger.png",           rarity: "Common",    attributes: { mood: "Sweet",       theme: "Food",      vibe: "Cozy"        } },
  { id: 40, name: "Kikirikrew #40", subtitle: "Tennis",          image: "/images/nfts/40_teniss.png",           rarity: "Common",    attributes: { mood: "Confident",   theme: "Sport",     vibe: "Bold"        } },
  { id: 41, name: "Kikirikrew #41", subtitle: "Flapper",         image: "/images/nfts/41_flapper.png",          rarity: "Rare",      attributes: { mood: "Confident",   theme: "Retro",     vibe: "Glam"        } },
  { id: 42, name: "Kikirikrew #42", subtitle: "Quino",           image: "/images/nfts/42_quino.png",            rarity: "Epic",      attributes: { mood: "Dreamy",      theme: "Cultural",  vibe: "Soft"        } },
  { id: 43, name: "Kikirikrew #43", subtitle: "Taita Cotopaxi",  image: "/images/nfts/43_taitacoptopaxi.png",   rarity: "Epic",      attributes: { mood: "Fierce",      theme: "Cultural",  vibe: "Bold"        } },
  { id: 44, name: "Kikirikrew #44", subtitle: "Walkman",         image: "/images/nfts/44_walkman.png",          rarity: "Uncommon",  attributes: { mood: "Chill",       theme: "Retro",     vibe: "Electric"    } },
  { id: 45, name: "Kikirikrew #45", subtitle: "Chef",            image: "/images/nfts/45_chef.png",             rarity: "Common",    attributes: { mood: "Confident",   theme: "Food",      vibe: "Bold"        } },
  { id: 46, name: "Kikirikrew #46", subtitle: "Lucha Libre",     image: "/images/nfts/46_luchalibre.png",       rarity: "Epic",      attributes: { mood: "Fierce",      theme: "Cultural",  vibe: "Bold"        } },
  { id: 47, name: "Kikirikrew #47", subtitle: "Cora",            image: "/images/nfts/47_cora.png",             rarity: "Uncommon",  attributes: { mood: "Sweet",       theme: "Love",      vibe: "Soft"        } },
  { id: 48, name: "Kikirikrew #48", subtitle: "Astronaut",       image: "/images/nfts/48_astronaut.png",        rarity: "Legendary", attributes: { mood: "Adventurous", theme: "Cosmic",    vibe: "Electric"    } },
  { id: 49, name: "Kikirikrew #49", subtitle: "Birthday",        image: "/images/nfts/49_birthday.png",         rarity: "Uncommon",  attributes: { mood: "Playful",     theme: "Party",     vibe: "Bright"      } },
  { id: 50, name: "Kikirikrew #50", subtitle: "Trophy",          image: "/images/nfts/50_trophy.png",           rarity: "Legendary", attributes: { mood: "Confident",   theme: "Champion",  vibe: "Glam"        } },
];

/** Featured NFTs for the preview gallery on the home page */
export const featuredNfts = nfts.slice(0, 6);
