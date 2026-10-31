import type { Place } from "../../../domain/models/location";

const location: Place = {
  "id": "wachterhaus",
  "name": "Wachterhaus",
  "areaId": "vallaki",
  "description": {
    "summary": "Home of Lady Wachter.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "Wachterhaus is the center of Lady Wachterâ€™s influence. Behind its respectable face lies ambition, secret loyalties, and dangerous political intent."
      },
      {
        "kind": "redacted",
        "markdown": "",
        "revealed": false
      },
      {
        "kind": "markdown",
        "markdown": "A thick garden, filled with herbs and vines stands beside this wide, red-roofed manor. A slouching roof hangs heavy over furrowed gables, and moss-covered walls sag and bulge under the weight of the vegetation. A handsome, red-painted door stands at the house's entrance, its upper half set with frosted glass."
      }
    ]
  },
  "kind": "site",
  "category": "landmark"
};

export default location;
