import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

const outputFiles = new Map();
const places = [];
const maps = [];
const npcById = new Map();

function slug(value) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const npcAliases = {
  "Bowen-Tackstovich": "bowen-tackstovich",
  baronVallakovich: "BurgomasterVargas",
  izekStrazni: "IzekStrazni",
  ladyWachter: "lady-wachter",
  nikolaiWachter: "nikolai-wachter",
  karlWachter: "karl-wachter",
  fatherLucian: "Father-Lucian-Petrovich",
  urwinMartikov: "urwin-martikov",
  danikaMartikov: "danika-martikov",
};

function npcId(id) {
  return npcAliases[id] ?? id;
}

function locationId(id) {
  return id === "Bowens" ? "bowen-stables" : id;
}

function description(value, summary = "") {
  const source = Array.isArray(value)
    ? value
    : value
      ? [value]
      : [];

  const blocks = source.flatMap((block) => {
    if (typeof block === "string") {
      return [{ kind: "markdown", markdown: block.trim() }];
    }

    if (block.type === "text") {
      return [{
        kind: "markdown",
        markdown: String(block.text ?? "").trim(),
      }];
    }

    if (block.type === "redacted") {
      // Hidden text is not copied into the new public content.
      return [{
        kind: "redacted",
        markdown: block.revealed ? String(block.text ?? "") : "",
        revealed: Boolean(block.revealed),
      }];
    }

    throw new Error(`Unknown description block: ${JSON.stringify(block)}`);
  });

  return {
    summary,
    blocks,
  };
}

function addNPC(source, links = []) {
  const id = npcId(source.id);

  // Bowen already has a manually maintained TypeScript file.
  if (id === "bowen-tackstovich") return;

  const incoming = description(
    source.description ?? source.longDescription ?? ""
  );

  const existing = npcById.get(id);

  if (existing) {
    for (const link of links) {
      if (!existing.locationLinks.some(
        (candidate) => candidate.locationId === link.locationId
      )) {
        existing.locationLinks.push(link);
      }
    }

    // Preserve additional text from the older world-map entries.
    for (const block of incoming.blocks) {
      if (!existing.description.blocks.some(
        (candidate) => JSON.stringify(candidate) === JSON.stringify(block)
      )) {
        existing.description.blocks.push(block);
      }
    }

    return;
  }

  npcById.set(id, {
    id,
    name: source.name,
    description: incoming,
    locationLinks: links,
  });
}

function markerIcon(type) {
  const aliases = {
    inn: "tavern",
    noteworthy: "misc",
    residence: "misc",
    settlement: "town",
    village: "town",
  };

  const result = aliases[type] ?? type ?? "misc";

  return ["town", "shop", "tavern", "church", "quest", "misc"].includes(result)
    ? result
    : "misc";
}

function siteCategory(type) {
  return ["tavern", "church", "residence", "wilderness"].includes(type)
    ? type
    : "landmark";
}

async function readLegacyMap(folder) {
  const file = path.join(
    root,
    "public",
    "local-maps",
    folder,
    "data.js"
  );

  const source = await fs.readFile(file, "utf8");
  const context = { window: {} };

  // This evaluates only our existing, local map configuration.
  vm.runInNewContext(source, context, {
    filename: file,
    timeout: 1000,
  });

  const config = context.window.LOCAL_MAP_CONFIG;

  if (!config || !Array.isArray(config.locations)) {
    throw new Error(`Invalid local map configuration: ${file}`);
  }

  return config;
}

const sourceMaps = [
  {
    folder: "vallaki",
    id: "vallaki",
    image: "maps/vallaki-map.jpg",
  },
  {
    folder: "village-of-barovia",
    id: "baroviaVillage",
    image: "maps/barovia-village.jpg",
  },
];

for (const sourceMap of sourceMaps) {
  const config = await readLegacyMap(sourceMap.folder);

  if (sourceMap.id !== "vallaki") {
    places.push({
      id: sourceMap.id,
      name: "Village of Barovia",
      kind: "town",
      description: description(config.description ?? ""),
    });
  }

  for (const source of config.locations) {
    const id = locationId(source.id);

    // Use the existing typed Bowen Stables instead of creating a duplicate.
    if (id === "bowen-stables") continue;

    const common = {
      id,
      name: source.name,
      areaId: sourceMap.id,
      description: description(
        source.longDescription ??
          source.description ??
          source.shortDescription ??
          "",
        source.shortDescription ?? ""
      ),
    };

    places.push(
      source.type === "shop"
        ? { ...common, kind: "shop", inventory: [] }
        : {
            ...common,
            kind: "site",
            category: siteCategory(source.type),
          }
    );
  }

  for (const source of config.npcs ?? []) {
    const links = config.locations
      .filter((place) =>
        (place.npcs ?? []).some((id) => npcId(id) === npcId(source.id))
      )
      .map((place) => ({
        locationId: locationId(place.id),
        role: "associated",
      }));

    addNPC(source, links);
  }

  maps.push({
    id: sourceMap.id,
    title: config.title,
    image: sourceMap.image,
    imageWidth: config.imageWidth,
    imageHeight: config.imageHeight,
    minZoom: config.minZoom ?? -2,
    maxZoom: config.maxZoom ?? 3,
    markers: config.locations
      .filter((place) => place.x != null && place.y != null)
      .map((place) => ({
        locationId: locationId(place.id),
        x: place.x,
        y: place.y,
        icon: markerIcon(place.type),
      })),
  });
}

// Import NPC objects that exist only in the world-map data.
for (const filename of ["vallaki.js", "villageofBarovia.js"]) {
  const moduleUrl = pathToFileURL(
    path.join(root, "src", "data", filename)
  ).href;

  const module = await import(moduleUrl);

  for (const entry of Object.values(module.entries)) {
    if (entry.type !== "npc") continue;

    addNPC(entry, entry.parent
      ? [{ locationId: entry.parent, role: "associated" }]
      : []
    );
  }
}

// Add the links that were present in map data but whose NPC objects
// existed only in the older world-map files.
for (const sourceMap of sourceMaps) {
  const config = await readLegacyMap(sourceMap.folder);

  for (const place of config.locations) {
    for (const oldId of place.npcs ?? []) {
      const id = npcId(oldId);

      if (id === "bowen-tackstovich") continue;

      const npc = npcById.get(id);

      if (!npc) {
        throw new Error(
          `Location "${place.id}" references missing NPC "${oldId}".`
        );
      }

      const targetId = locationId(place.id);

      if (!npc.locationLinks.some((link) => link.locationId === targetId)) {
        npc.locationLinks.push({
          locationId: targetId,
          role: "associated",
        });
      }
    }
  }
}

function queueFile(relativePath, content) {
  if (outputFiles.has(relativePath)) {
    throw new Error(`Duplicate output filename: ${relativePath}`);
  }

  outputFiles.set(relativePath, content);
}

queueFile(
  "src/content/imported/places.ts",
  `import type { Place } from "../../domain/models/location";\n\n` +
  `export const importedPlaces: Place[] = ${JSON.stringify(places, null, 2)};\n`
);

queueFile(
  "src/content/imported/maps.ts",
  `import type { MapDefinition } from "../../domain/models/map";\n\n` +
  `export const importedMaps: MapDefinition[] = ${JSON.stringify(maps, null, 2)};\n`
);

const imports = [];
const exports = [];

for (const [index, npc] of [...npcById.values()].entries()) {
  const filename = slug(npc.id);
  const variable = `npc${index}`;

  queueFile(
    `src/content/npcs/imported/${filename}.ts`,
    `import type { NPC } from "../../../domain/models/npc";\n\n` +
    `const npc: NPC = ${JSON.stringify(npc, null, 2)};\n\n` +
    `export default npc;\n`
  );

  imports.push(
    `import ${variable} from "../npcs/imported/${filename}";`
  );

  exports.push(variable);
}

queueFile(
  "src/content/imported/npcs.ts",
  `import type { NPC } from "../../domain/models/npc";\n` +
  imports.join("\n") +
  `\n\nexport const importedNPCs: NPC[] = [${exports.join(", ")}];\n`
);

// First batch from COS Prep. These are deliberately NOT registered
// in the public content index. No secret descriptions are copied.
const draftNames = [
  "Francesca Toth",
  "Auran Toth",
  "Jablonski Huer",
  "Bray Martikov",
  "Brom Martikov",
  "Davian Martikov",
  "Yeska",
  "Szoldar Szoldarovich",
  "Yevengeni Krushkin",
  "Gunther Arasek",
  "Yelena Arasek",
  "Majesto",
  "Udo Lukovich",
  "Ernst Larnak",
  "Patrina Velikovna",
  "Kasimir Velikov",
  "Arabelle",
  "Luvash",
  "Arrigal",
  "Alexei",
  "Lars Kjurls",
  "Rudolph van Richten",
];

for (const name of draftNames) {
  const id = slug(name);

  const draft = {
    id,
    name,
    description: {
      summary: "",
      blocks: [],
    },
    locationLinks: [],
  };

  queueFile(
    `src/content/npcs/drafts/${id}.ts`,
    `import type { NPC } from "../../../domain/models/npc";\n\n` +
    `// Draft from COS Prep. Review identity, description and links\n` +
    `// before adding this NPC to the public content index.\n` +
    `const npc: NPC = ${JSON.stringify(draft, null, 2)};\n\n` +
    `export default npc;\n`
  );
}

// Stop before writing anything if a generated file already exists.
for (const relativePath of outputFiles.keys()) {
  const absolutePath = path.join(root, relativePath);

  try {
    await fs.access(absolutePath);
  } catch (error) {
    if (error.code === "ENOENT") continue;
    throw error;
  }

  throw new Error(
    `Refusing to overwrite "${relativePath}". ` +
    `This migration should only be run once.`
  );
}

for (const [relativePath, content] of outputFiles) {
  const absolutePath = path.join(root, relativePath);

  await fs.mkdir(path.dirname(absolutePath), { recursive: true });
  await fs.writeFile(absolutePath, content, {
    encoding: "utf8",
    flag: "wx",
  });
}

console.log(`Created ${outputFiles.size} files.`);
console.log(`Imported ${places.length} locations, excluding existing Bowen and Vallaki.`);
console.log(`Imported ${npcById.size} NPCs.`);
console.log(`Created ${draftNames.length} unregistered NPC drafts.`);

for (const map of maps) {
  console.log(`${map.title}: ${map.markers.length} markers.`);
}