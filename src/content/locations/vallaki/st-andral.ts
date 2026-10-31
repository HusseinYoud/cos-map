import type { Place } from "../../../domain/models/location";

const location: Place = {
  "id": "st-andral",
  "name": "St. Andral's Church",
  "areaId": "vallaki",
  "description": {
    "summary": "Church of St. Andral.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The Church is one of the few safe places in all of Vallaki. The players were tasked with delivering Ireena to the church for protection."
      },
      {
        "kind": "markdown",
        "markdown": "This slouching, centuries-old stone church has a bulging steeple in the back and walls lined with cracked, stained glass windows depicting pious saints. A fence of wrought iron encloses a garden of gravestones next to the church. A thin mist creeps among the graves."
      },
      {
        "kind": "markdown",
        "markdown": "Double doors open onto a long nave that stretches away to a raised platform with a stone altar. A vaulted ceiling is held aloft by pillars, once intricately carved, now worn smooth with the ravages of time. Stained glass windows tell the story of a man in priestly robes with a golden halo. In the final scenes, he is tortured and murdered by men with the faces of animals. Wind whistles through the broken window panes and swirls around the drafty church, causing the votive candles to flicker."
      }
    ]
  },
  "kind": "site",
  "category": "church"
};

export default location;
