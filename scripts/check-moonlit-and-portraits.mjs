import assert from "node:assert/strict";
import path from "node:path";
import { registerHooks } from "node:module";

registerHooks({ resolve(s, c, next) {
  return next(s.startsWith(".") && !path.extname(s) ? `${s}.ts` : s, c);
}});

const content = await import("../src/content/index.ts");
const { getChildLocations } = await import("../src/domain/queries/locations.ts");
const { validateContent } = await import("../src/domain/validateContent.ts");
const { getInitials } = await import("../src/shared/utils/initials.js");

const children = getChildLocations(content.locations, "MoonlitStreet");
assert.deepEqual(children.map((location) => location.id), ["auran-toths-herbologist", "cracked-anvil", "straight-arrow", "endless-delight-clothiers", "jablonski-and-sons", "apostles-legs", "vermillion-brigade"]);
assert.ok(children.every((location) => location.areaId === "vallaki"));
assert.equal(content.maps.length, 2);
assert.equal(content.maps.find((map) => map.id === "vallaki").markers.length, 18);

function withParent(id, parentLocationId) {
  return {
    ...content,
    locations: content.locations.map((location) => location.id === id
      ? { ...location, parentLocationId }
      : location),
  };
}

assert.throws(() => validateContent(withParent("MoonlitStreet", "unknown-place")), /unknown parent/);
assert.throws(() => validateContent(withParent("MoonlitStreet", "MoonlitStreet")), /cycle/);
assert.throws(() => validateContent(withParent("MoonlitStreet", "auran-toths-herbologist")), /cycle/);
assert.throws(() => validateContent(withParent("auran-toths-herbologist", "blood-on-the-vine")), /another area/);
validateContent(content);

const portraitContent = {
  ...content,
  npcs: content.npcs.map((npc, index) => index === 0
    ? { ...npc, portrait: { src: "portraits/npcs/example.jpg" } }
    : npc),
};
validateContent(portraitContent);
portraitContent.npcs[0].portrait.src = "../private.jpg";
assert.throws(() => validateContent(portraitContent), /public-relative/);
assert.equal(getInitials("Jenny Greenteeth"), "JG");
assert.equal(getInitials("  Bowen   Tackstovich  "), "BT");
assert.equal(getInitials(""), "?");
console.log("Moonlit Street: seven children, valid parents, cycle protection and portrait data verified.");
