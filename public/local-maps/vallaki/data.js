window.LOCAL_MAP_CONFIG = {
  title: "Vallaki",
  description: "This is the zoomed-in local map for Vallaki.",
  image: "./vallaki-map.jpg",
  imageWidth: 1950,
  imageHeight: 1200,
  minZoom: -2,
  maxZoom: 3,

  iconLegend: [
    { type: "tavern", label: "Tavern / Inn" },
    { type: "shop", label: "Shop / Merchant" },
    { type: "noteworthy", label: "Noteworthy location or Miscellaneous location" },
    { type: "quest", label: "Quest-related location" },
  ],

  locations: [
    {
      id: "blue-water-inn",
      name: "Blue Water Inn",
      type: "tavern",
      x: 1164,
      y: 605,
      shortDescription: "A central inn and meeting place in Vallaki.",
      longDescription: "The Blue Water Inn is one of the safest and most useful gathering places in Vallaki.",
      npcs: ["urwin-martikov", "danika-martikov"]
    },
    {
      id: "wachterhaus",
      name: "Wachterhaus",
      type: "noteworthy",
      x: 1309,
      y: 690,
      shortDescription: "Home of Lady Wachter.",
      longDescription: [      
      {type: "text",
        text: "Wachterhaus is the center of Lady Wachter’s influence. Behind its respectable face lies ambition, secret loyalties, and dangerous political intent."
      },
      {type: "redacted",
        text:"Fiona Watcher is a strahd worshipper",
      }],
      npcs: ["lady-wachter", "nikolai-wachter", "karl-wachter"]
    },
    {
      id: "st-andral",
      name: "St. Andral's Church",
      type: "quest",
      x: 783,
      y: 565,
      shortDescription: "Church of St. Andral.",
      longDescription: "The Church is one of the few safe places in all of Vallaki. The players were tasked with delivering Ireena to the church for protection.",
      npcs: ["Father-Lucian-Petrovich","Milivoj"]
    }
  ],




  npcs: [
    {
      id: "urwin-martikov",
      name: "Urwin Martikov",
      description: "Innkeeper of the Blue Water Inn and an important ally."
    },
    {
      id: "danika-martikov",
      name: "Danika Martikov",
      description: "Co-owner of the Blue Water Inn."
    },
    {
      id: "lady-wachter",
      name: "Lady Wachter",
      description: "A dangerous political rival to the Baron."
    },
    {
      id: "Father-Lucian-Petrovich",
      name: "Father Lucian Petrovich",
      description: "The priest of St. Andral's Church."
    },
    {
      id: "Milivoj",
      name: "Milivoj",
      description: "A gravedigger at St. Andral's Church."
    }
  ]
};