import type { Place } from "../../../domain/models/location";
import { inventory } from "../../inventories/auran-toths-herbologist";

const location: Place = {
  "id": "auran-toths-herbologist",
  "name": "Auran Toth's Herbologist",
  "kind": "shop",
  "areaId": "vallaki",
  "description": {
    "summary": "An herbologist selling plants, potions and ingredients.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "Before entering you see the sign “Auran Toths Herbologist” written in sweet salty caramel brown oak wood that seems to have been cut freshly, danglying off a metal chain attached to a almost perfect square of a stone house with a hole where you suspect the window is supposed to be on the other side of the hole you see that it is barred and candle light is slithering out of the cracks."
      },
      {
        "kind": "markdown",
        "markdown": "The instant smell of fresh dewy wood and plant hits your chest as you get closer and as you open the door you enter a warm and amazingly lit room with plants stretching from wall to wall all different kinds. Each of which has a tag with a price tag on it. When walking you struggle to find actual floor due to the amount of plants that just inhabit the place, in a far corner you see a glass display with potions in it."
      },
      {
        "kind": "markdown",
        "markdown": "Behind a counter in the far backside of the room you can see a obsidian colored young woman with a freckled face a messy curly hair that blooms like the spring flowers. She is wearing an apron that is green and in it is stitched a young snow colored man with a blonde beard with the name “Auran Toth” stitched in a hideous red color."
      }
    ]
  },
  inventory,
};

export default location;
