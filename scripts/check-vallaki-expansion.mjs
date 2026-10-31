import assert from "node:assert/strict";
import path from "node:path";
import { registerHooks } from "node:module";

registerHooks({
  resolve(specifier, context, nextResolve) {
    return nextResolve(
      specifier.startsWith(".") && !path.extname(specifier)
        ? `${specifier}.ts`
        : specifier,
      context
    );
  },
});

const { locations, npcs, items, maps } = await import("../src/content/index.ts");
const { createStockEntry } = await import("../src/domain/shops/createStockEntry.ts");
const { getShopInventory } = await import("../src/domain/queries/shops.ts");
const find = (id) => locations.find((place) => place.id === id);
const offer = (placeId, itemId) => find(placeId).inventory.find((entry) => entry.itemId === itemId);

assert.equal(locations.length, 33);
assert.equal(npcs.length, 34);
assert.equal(items.length, 114);
assert.equal(createStockEntry("example", 5).stock.quantity, 1);
assert.equal(offer("auran-toths-herbologist", "potion-of-healing").stock.quantity, 6);
assert.equal(offer("auran-toths-herbologist", "deadmans-draught").stock.quantity, 2);
assert.equal(offer("auran-toths-herbologist", "potion-of-water-breathing").stock.quantity, 3);
assert.deepEqual(offer("straight-arrow", "sling").price, { amount: 4, currency: "sp" });
assert.deepEqual(offer("jablonski-and-sons", "javelin").price, { amount: 50, currency: "sp" });
assert.equal(find("blue-water-inn").kind, "site");
assert.equal(find("blue-water-inn").category, "tavern");
assert.equal(getShopInventory(find("blue-water-inn"), items).length, 16);
assert.ok(find("apostles-legs").services.some((entry) => entry.id === "letter-delivery"));
assert.ok(!find("apostles-legs").inventory.some((entry) => entry.itemId === "letter-delivery"));
assert.ok(find("cracked-anvil").services.find((entry) => entry.id === "horse-armor").priceNote);
assert.equal(npcs.filter((npc) => npc.locationLinks.some((link) => link.locationId === "straight-arrow")).length, 3);
assert.ok(npcs.find((npc) => npc.id === "francesca-toth").locationLinks.some((link) => link.locationId === "auran-toths-herbologist"));

const previousMarkers = {"vallaki": [{"locationId": "blue-water-inn", "x": 1164, "y": 605, "icon": "tavern"}, {"locationId": "wachterhaus", "x": 1309, "y": 690, "icon": "misc"}, {"locationId": "st-andral", "x": 783, "y": 565, "icon": "quest"}, {"locationId": "Vasili-Von-Holtz", "x": 833, "y": 462, "icon": "misc"}, {"locationId": "Arasek", "x": 1665, "y": 432, "icon": "shop"}, {"locationId": "Coffin", "x": 1539, "y": 404, "icon": "shop"}, {"locationId": "BlinskysToys", "x": 1203, "y": 514, "icon": "shop"}, {"locationId": "bowen-stables", "x": 1819, "y": 380, "icon": "shop"}, {"locationId": "GatesEast", "x": 1807, "y": 421, "icon": "misc"}, {"locationId": "NorthGate", "x": 1227, "y": 990, "icon": "misc"}, {"locationId": "WesternGate", "x": 550, "y": 560, "icon": "misc"}, {"locationId": "Townsquare", "x": 1341, "y": 455, "icon": "misc"}, {"locationId": "MoonlitStreet", "x": 1649, "y": 522, "icon": "misc"}, {"locationId": "BurgoMaster", "x": 1120, "y": 423, "icon": "quest"}, {"locationId": "StAndralsOrphanage", "x": 1202, "y": 770, "icon": "misc"}, {"locationId": "Reformation", "x": 1257, "y": 337, "icon": "misc"}, {"locationId": "Library", "x": 1508, "y": 667, "icon": "quest"}, {"locationId": "KatyasKavern", "x": 1518, "y": 574, "icon": "tavern"}], "baroviaVillage": [{"locationId": "blood-on-the-vine", "x": 900, "y": 1200, "icon": "tavern"}, {"locationId": "bildraths-mercantile", "x": 1100, "y": 1280, "icon": "shop"}, {"locationId": "burgomasters-mansion", "x": 1300, "y": 980, "icon": "misc"}]};
for (const map of maps) {
  assert.deepEqual(map.markers, previousMarkers[map.id]);
}
const previousLocationIds = ["vallaki", "bowen-stables", "GatesEast", "NorthGate", "WesternGate", "Townsquare", "MoonlitStreet", "blue-water-inn", "st-andral", "wachterhaus", "BlinskysToys", "StAndralsOrphanage", "BurgoMaster", "Coffin", "Arasek", "Library", "Reformation", "KatyasKavern", "Vasili-Von-Holtz", "jennys-hut", "baroviaVillage", "blood-on-the-vine", "bildraths-mercantile", "burgomasters-mansion"];
for (const id of previousLocationIds) assert.ok(find(id), `Lost existing location: ${id}`);
console.log("Vallaki expansion: content, prices, stock, NPC links and existing markers verified.");
