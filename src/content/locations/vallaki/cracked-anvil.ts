import type { Place } from "../../../domain/models/location";
import { inventory } from "../../inventories/cracked-anvil";
import { services } from "../../services/cracked-anvil";

const location: Place = {
  "id": "cracked-anvil",
  "name": "The Cracked Anvil",
  "kind": "shop",
  "areaId": "vallaki",
  "description": {
    "summary": "A smithy offering riding equipment, traps and metalworking services.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "As you come closer to here you hear the constant banging of metal on metal only silence every once in a while by the sizzling of heat in cold water. On a sign hanging on the last chain you see a cracked sign of an anvil, with disgusting glossy white paint written “The Cracked Anvil” The building itself is an open space with metal bars differentiating the outside and inside of the shop. On the inside of the bars you see a small man, rather well trained man with no glow in his eyes, and in his hand a red hot horse shoe which he is holding with his hand. You also notice the molten iron flowing openly in the forge and it is to the point where the pure heat generated is hitting you face and drying your eyes."
      },
      {
        "kind": "markdown",
        "markdown": "Open ended shop, where you can step inside but all business is handled outside."
      }
    ]
  },
  inventory,
  services,
};

export default location;
