import type { Place } from "../../../domain/models/location";

// Existing locations retain their current IDs.
// IDs for upcoming locations are reserved here as their planned names.
const locationOrder: readonly string[] = [
  // 1. Bowen Stables
  "bowen-stables",

  // 2. Town Gates
  "GatesEast",
  "NorthGate",
  "WesternGate",

  // 3. Town Square
  "Townsquare",

  // 4. Moonlit Street
  "MoonlitStreet",

  // 5. Auran Toth's Herbologist
  "auran-toths-herbologist",

  // 6. The Cracked Anvil
  "cracked-anvil",

  // 7. The Straight Arrow
  "straight-arrow",

  // 8. The Endless Delight Clothiers
  "endless-delight-clothiers",

  // 9. Jablonski and Sons
  "jablonski-and-sons",

  // 10. The Apostles Legs
  "apostles-legs",

  // 11. Vermillion Brigade
  "vermillion-brigade",

  // 12. Blue Water Inn
  "blue-water-inn",

  // 13. St. Andral's Church
  "st-andral",

  // 14. Wachterhaus
  "wachterhaus",

  // 15. Blinsky's Toys
  "BlinskysToys",

  // 16. St. Andral's Orphanage
  "StAndralsOrphanage",

  // 17. Burgomaster's Mansion
  "BurgoMaster",

  // 18. Coffin Maker's Shop
  "Coffin",

  // 19. Arasek Stockyard
  "Arasek",

  // 20. Library of Vallaki
  "Library",

  // 21. The Reformation Center
  "Reformation",

  // 22. Katya's Kavern
  "KatyasKavern",

  // 23. Vasili Von Holtz House
  "Vasili-Von-Holtz",

  // 24. Lake Zarovich
  "LakeZarovich",

  // 25. The Vistani Camp
  "vistani-camp",
];

const rankById = new Map(
  locationOrder.map((id, index) => [id, index])
);

export function sortVallakiLocations(
  locations: readonly Place[]
): Place[] {
  const sortedVallakiLocations = locations
    .filter((location) => location.areaId === "vallaki")
    .sort((left, right) => {
      const leftRank =
        rankById.get(left.id) ?? Number.MAX_SAFE_INTEGER;

      const rightRank =
        rankById.get(right.id) ?? Number.MAX_SAFE_INTEGER;

      return leftRank - rightRank;
    });

  let nextIndex = 0;

  return locations.map((location) => {
    if (location.areaId !== "vallaki") {
      return location;
    }

    return sortedVallakiLocations[nextIndex++];
  });
}