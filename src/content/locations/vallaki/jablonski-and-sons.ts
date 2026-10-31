import type { Place } from "../../../domain/models/location";
import { inventory } from "../../inventories/jablonski-and-sons";

const location: Place = {
  "id": "jablonski-and-sons",
  "name": "Jablonski and Sons",
  "kind": "shop",
  "areaId": "vallaki",
  parentLocationId: "MoonlitStreet",
  "description": {
    "summary": "A smithy selling weapons and armor.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "As you step closer, you hear the constant sound of iron on iron, as a hammer lifts up and smashes into an anvil, the cracking of ember sparks splashes all over the place. You notice now a full cobble stone house with no windows and a wooden door, the roof is made out of different forms of hay and other vegetations."
      },
      {
        "kind": "markdown",
        "markdown": "Inside you spot a man in the corner smashing about on an anvil creating a short sword. You notice all kinds of weaponery, armors other metallic bits and pieces lifted to the brink of this building."
      }
    ]
  },
  inventory,
};

export default location;
