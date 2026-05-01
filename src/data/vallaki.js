export const vallaki = {
  id: "vallaki",
  name: "Vallaki",
  x: 2006,
  y: 2144,
  type: "town",
  discovered: true,
  description: "A tense town held together by fear, festivals, and fragile politics.",
  longDescription: `
    Big town`,
  noteworthyLocations: [

  ],
  noteworthyNpcs: [

  ],
  detailPage: "local-maps/vallaki/index.html"
};

export const entries = {
  blueWaterInn: {
    id: "blueWaterInn",
    name: "Blue Water Inn",
    type: "location",
    description: `
      The Blue Water Inn is the social heart of Vallaki.
      It is one of the safest places in town to gather rumors, meet allies, and get a sense of the town’s mood.
    `,
    parent: "vallaki"
  },

  baronsMansion: {
    id: "baronsMansion",
    name: "Baron's Mansion",
    type: "location",
    description: `
      The Baron rules Vallaki from this mansion, enforcing order through festivals, fear, and a constant performance of optimism.
    `,
    parent: "vallaki"
  },

  wachterhaus: {
    id: "wachterhaus",
    name: "Wachterhaus",
    type: "location",
    description: `
      Wachterhaus is the center of Lady Wachter’s influence.
      Behind its respectable face lies ambition, secret loyalties, and dangerous political intent.
    `,
    parent: "vallaki"
  },

  churchOfStAndral: {
    id: "churchOfStAndral",
    name: "Church of St. Andral",
    type: "location",
    description: `
      The church is one of the few places in Vallaki associated with faith, protection, and fragile hope.
    `,
    parent: "vallaki"
  },

  coffinMakersShop: {
    id: "coffinMakersShop",
    name: "Coffin Maker's Shop",
    type: "location",
    description: `
      A grim workshop tied to one of Vallaki’s darkest secrets.
      What seems at first like an ordinary business can quickly become a place of horror.
    `,
    parent: "vallaki"
  },

  stockyard: {
    id: "stockyard",
    name: "Stockyard",
    type: "location",
    description: `
      A practical working area of Vallaki, connected to supplies, labor, and the everyday machinery of the town.
    `,
    parent: "vallaki"
  },

  baronVallakovich: {
    id: "baronVallakovich",
    name: "Baron Vallakovich",
    type: "npc",
    description: `
      The unstable ruler of Vallaki, convinced that forced happiness and relentless festivals can keep darkness at bay.
    `,
    parent: "vallaki"
  },

  lydiaVallakovich: {
    id: "lydiaVallakovich",
    name: "Lydia Vallakovich",
    type: "npc",
    description: `
      The Baron’s wife, caught in the strange social order of Vallaki and overshadowed by her husband’s instability.
    `,
    parent: "vallaki"
  },

  izekStrazni: {
    id: "izekStrazni",
    name: "Izek Strazni",
    type: "npc",
    description: `
      The Baron’s feared enforcer, brutal and unsettling, whose presence alone keeps many townsfolk silent.
    `,
    parent: "vallaki"
  },

  ladyWachter: {
    id: "ladyWachter",
    name: "Lady Wachter",
    type: "npc",
    description: `
      A calm, intelligent, and deeply dangerous political rival to the Baron, representing a darker future for Vallaki.
    `,
    parent: "vallaki"
  },

  nikolaiWachter: {
    id: "nikolaiWachter",
    name: "Nikolai Wachter",
    type: "npc",
    description: `
      One of Lady Wachter’s sons, more useful as a sign of the family’s rot than as a source of wisdom.
    `,
    parent: "vallaki"
  },

  karlWachter: {
    id: "karlWachter",
    name: "Karl Wachter",
    type: "npc",
    description: `
      One of Lady Wachter’s sons, reckless, indulgent, and emblematic of Vallaki’s decaying nobility.
    `,
    parent: "vallaki"
  },

  fatherLucian: {
    id: "fatherLucian",
    name: "Father Lucian",
    type: "npc",
    description: `
      A weary priest trying to preserve what little sanctuary and decency remains in Vallaki.
    `,
    parent: "vallaki"
  },

  rictavio: {
    id: "rictavio",
    name: "Rictavio",
    type: "npc",
    description: `
      A flamboyant traveler and storyteller whose cheerful persona conceals a far more serious purpose.
    `,
    parent: "vallaki"
  },

  urwinMartikov: {
    id: "urwinMartikov",
    name: "Urwin Martikov",
    type: "npc",
    description: `
      The innkeeper of the Blue Water Inn, practical and observant, with ties that make him more important than he first appears.
    `,
    parent: "vallaki"
  },

  danikaMartikov: {
    id: "danikaMartikov",
    name: "Danika Martikov",
    type: "npc",
    description: `
      Co-owner of the Blue Water Inn and a steady presence in one of Vallaki’s few relatively welcoming spaces.
    `,
    parent: "vallaki"
  }
};