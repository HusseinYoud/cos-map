window.LOCAL_MAP_CONFIG = {
  title: "Village of Barovia",
  description: "This is the zoomed-in local map for the Village of Barovia.",
  image: "./barovia-village.jpg",
  imageWidth: 1950,
  imageHeight: 2475,
  minZoom: -2,
  maxZoom: 3,

  iconLegend: [
    { type: "tavern", label: "Tavern / Inn" },
    { type: "shop", label: "Shop / Merchant" },
    { type: "noteworthy", label: "Noteworthy location or miscellaneous location" },
    { type: "quest", label: "Quest-related location" }
  ],

  locations: [
    {
      id: "blood-on-the-vine",
      name: "Blood on the Vine Tavern",
      type: "tavern",
      x: 900,
      y: 1200,
      shortDescription: "A dark tavern where wine, whispers, and uneasy silence mix.",
      longDescription: "A dark tavern where wine, whispers, and uneasy silence mix beneath heavy shadows.",
      npcs: []
    },
    {
      id: "bildraths-mercantile",
      name: "Bildrath's Mercantile",
      type: "shop",
      x: 1100,
      y: 1280,
      shortDescription: "A cramped and overpriced shop.",
      longDescription: "A cramped and overpriced store where necessity outweighs fairness.",
      npcs: []
    },
    {
      id: "burgomasters-mansion",
      name: "Burgomaster's Mansion",
      type: "noteworthy",
      x: 1300,
      y: 980,
      shortDescription: "The old mansion of the burgomaster.",
      longDescription: "The old mansion of the burgomaster stands as a weary symbol of the village’s fading leadership.",
      npcs: ["ismark", "ireena"]
    }
  ],

  npcs: [
    {
      id: "ismark",
      name: "Ismark Kolyanovich",
      description: "The son of the late burgomaster. Burdened by duty, fear, and the weight of protecting his sister."
    },
    {
      id: "ireena",
      name: "Ireena Kolyana",
      description: "A strong-willed young woman marked by Strahd’s attention and central to Barovia’s tragedy."
    }
  ]
};