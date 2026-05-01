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
      x: 1025,
      y: 940,
      shortDescription: "A central inn and meeting place in Vallaki.",
      longDescription: "The Blue Water Inn is one of the safest and most useful gathering places in Vallaki.",
      npcs: ["urwin-martikov", "danika-martikov"]
    },
    {
      id: "wachterhaus",
      name: "Wachterhaus",
      type: "noteworthy",
      x: 840,
      y: 1020,
      shortDescription: "Home of Lady Wachter.",
      longDescription: "Wachterhaus is the center of Lady Wachter’s influence and quiet political ambition.",
      npcs: ["lady-wachter", "nikolai-wachter", "karl-wachter"]
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
    }
  ]
};