export const villageOfBarovia ={
    id: 'baroviaVillage',
    name: 'Village of Barovia',
    x: 3964,
    y: 1210,
    type: 'village',
    discovered: true,
    description: 'A gloomy settlement crushed beneath Strahd’s shadow.',
    longDescription: `
      The Village of Barovia is one of the oldest settlements in the valley.
      Its people live in fear, its streets are quiet, and sorrow hangs over every home.
      Many travelers first encounter the grim truth of Barovia here.
    `,
    noteworthyLocations: [
      { id: 'burgomastersMansion', name: "Burgomaster's Mansion" },
      { id: 'bloodOnTheVine', name: 'Blood on the Vine Tavern' },
      { id: 'bildrathsMercantile', name: "Bildrath's Mercantile" }
    ],
    noteworthyNpcs: [
      { id: 'ismark', name: 'Ismark Kolyanovich' },
      { id: 'ireena', name: 'Ireena Kolyana' }
    ],
    detailPage: 'barovia-village.html'
  };

export const entries = {
  burgomastersMansion: {
    id: 'burgomastersMansion',
    name: "Burgomaster's Mansion",
    type: 'location',
    description: `
      The old mansion of the burgomaster stands as a weary symbol of the village’s fading leadership.
      Its walls are worn, and grief has settled deep into its halls.
    `,
    parent: 'baroviaVillage'
  },

  bloodOnTheVine: {
    id: 'bloodOnTheVine',
    name: 'Blood on the Vine Tavern',
    type: 'location',
    description: `
      A dark tavern where wine, whispers, and uneasy silence mix beneath heavy shadows.
    `,
    parent: 'baroviaVillage'
  },

  bildrathsMercantile: {
    id: 'bildrathsMercantile',
    name: "Bildrath's Mercantile",
    type: 'location',
    description: `
      A cramped and overpriced store where necessity outweighs fairness.
    `,
    parent: 'baroviaVillage'
  },

  ismark: {
    id: 'ismark',
    name: 'Ismark Kolyanovich',
    type: 'npc',
    description: `
      The son of the late burgomaster. Burdened by duty, fear, and the weight of protecting his sister.
    `,
    parent: 'baroviaVillage'
  },

  ireena: {
    id: 'ireena',
    name: 'Ireena Kolyana',
    type: 'npc',
    description: `
      A strong-willed young woman marked by Strahd’s attention and central to Barovia’s tragedy.
    `,
    parent: 'baroviaVillage'
  }
};