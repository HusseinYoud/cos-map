import type { MapDefinition } from "../../domain/models/map";

export const importedMaps: MapDefinition[] = [
  {
    "id": "vallaki",
    "title": "Vallaki",
    "image": "maps/vallaki-map.jpg",
    "imageWidth": 1950,
    "imageHeight": 1200,
    "minZoom": -2,
    "maxZoom": 3,
    "markers": [
      {
        "locationId": "blue-water-inn",
        "x": 1164,
        "y": 605,
        "icon": "tavern"
      },
      {
        "locationId": "wachterhaus",
        "x": 1309,
        "y": 690,
        "icon": "misc"
      },
      {
        "locationId": "st-andral",
        "x": 783,
        "y": 565,
        "icon": "quest"
      },
      {
        "locationId": "Vasili-Von-Holtz",
        "x": 833,
        "y": 462,
        "icon": "misc"
      },
      {
        "locationId": "Arasek",
        "x": 1665,
        "y": 432,
        "icon": "shop"
      },
      {
        "locationId": "Coffin",
        "x": 1539,
        "y": 404,
        "icon": "shop"
      },
      {
        "locationId": "BlinskysToys",
        "x": 1203,
        "y": 514,
        "icon": "shop"
      },
      {
        "locationId": "bowen-stables",
        "x": 1819,
        "y": 380,
        "icon": "shop"
      },
      {
        "locationId": "GatesEast",
        "x": 1807,
        "y": 421,
        "icon": "misc"
      },
      {
        "locationId": "NorthGate",
        "x": 1227,
        "y": 990,
        "icon": "misc"
      },
      {
        "locationId": "WesternGate",
        "x": 550,
        "y": 560,
        "icon": "misc"
      },
      {
        "locationId": "Townsquare",
        "x": 1341,
        "y": 455,
        "icon": "misc"
      },
      {
        "locationId": "MoonlitStreet",
        "x": 1649,
        "y": 522,
        "icon": "misc"
      },
      {
        "locationId": "BurgoMaster",
        "x": 1120,
        "y": 423,
        "icon": "quest"
      },
      {
        "locationId": "StAndralsOrphanage",
        "x": 1202,
        "y": 770,
        "icon": "misc"
      },
      {
        "locationId": "Reformation",
        "x": 1257,
        "y": 337,
        "icon": "misc"
      },
      {
        "locationId": "Library",
        "x": 1508,
        "y": 667,
        "icon": "quest"
      },
      {
        "locationId": "KatyasKavern",
        "x": 1518,
        "y": 574,
        "icon": "tavern"
      }
    ]
  },
  {
    "id": "baroviaVillage",
    "title": "Village of Barovia",
    "image": "maps/barovia-village.jpg",
    "imageWidth": 1950,
    "imageHeight": 2475,
    "minZoom": -2,
    "maxZoom": 3,
    "markers": [
      {
        "locationId": "blood-on-the-vine",
        "x": 900,
        "y": 1200,
        "icon": "tavern"
      },
      {
        "locationId": "bildraths-mercantile",
        "x": 1100,
        "y": 1280,
        "icon": "shop"
      },
      {
        "locationId": "burgomasters-mansion",
        "x": 1300,
        "y": 980,
        "icon": "misc"
      }
    ]
  }
];
