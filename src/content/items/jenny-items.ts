import type { Item } from "../../domain/models/item";

const definitions: Array<[string, string]> = [
  [
    "amulet-proof-detection-location",
    "Amulet of Proof Against Detection and Location",
  ],
  ["bag-of-holding", "Bag of Holding"],
  ["eyes-of-the-eagle", "Eyes of the Eagle"],
  ["silver-raven-figurine", "Figurine of Wondrous Power, Silver Raven"],
  ["lantern-of-revealing", "Lantern of Revealing"],
  ["rope-of-climbing", "Rope of Climbing"],
  ["staff-of-birdcalls", "Staff of Birdcalls"],
  ["wand-of-entangle", "Wand of Entangle"],
  ["wand-of-web", "Wand of Web"],
  ["gray-bag-of-tricks", "Bag of Tricks, Gray"],
  ["bottled-breath", "Bottled Breath"],
  ["cap-of-water-breathing", "Cap of Water Breathing"],
  ["dust-of-sneezing-and-choking", "Dust of Sneezing and Choking"],
  ["ring-of-jumping", "Ring of Jumping"],
  ["ring-of-water-walking", "Ring of Water Walking"],
  ["sending-stones", "Sending Stones"],
  ["staff-of-flowers", "Staff of Flowers"],
  ["wand-of-smiles", "Wand of Smiles"],
  ["broom-of-flying", "Broom of Flying"],
];

export const jennyItems: Item[] = definitions.map(([id, name]) => ({
  id,
  name,
  category: "misc",
  description: {
    summary: "",
    blocks: [],
  },
}));