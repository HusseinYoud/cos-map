import path from "node:path";
import { registerHooks } from "node:module";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith(".") && !path.extname(specifier)) {
      return nextResolve(`${specifier}.ts`, context);
    }

    return nextResolve(specifier, context);
  },
});

const { locations, npcs, items, maps } = await import(
  new URL("../src/content/index.ts", import.meta.url).href
);

const expectedMarkerCounts = {
  vallaki: 18,
  baroviaVillage: 3,
};

for (const [id, expected] of Object.entries(expectedMarkerCounts)) {
  const map = maps.find((candidate) => candidate.id === id);

  if (!map || map.markers.length !== expected) {
    throw new Error(
      `${id}: expected ${expected} markers, found ${map?.markers.length ?? 0}.`
    );
  }
}

console.log("Content references and migration marker counts are valid.");
console.log(
  `${locations.length} locations, ` +
  `${npcs.length} NPCs, ` +
  `${items.length} items, ` +
  `${maps.length} maps.`
);