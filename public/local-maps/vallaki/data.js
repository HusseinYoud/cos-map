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
    },
    {
      id: "Vasili-Von-Holtz",
      name: "Vasili Von Holtz's Manor",
      type: "noteworthy",
      x: 833,
      y: 462,
      shortDescription: "The Manor of Vasili Von Holtz.",
      longDescription: [
        {type: "redacted",
          text: "The house of Vasili Von Holtz, an unknown noble who has been part of the town for many years. "
        },
        {type: "redacted",
          text: "Vasili Von Holtz is Strahd"
        }
      ],
      npcs: ["Vasili-Von-Holtz"]
    },
    {
      id: "Arasek",
      name: "Arasek Stockyard",
      type: "shop",
      x: 1665,
      y: 432,
      shortDescription: "Arasek Stockyard, the general goods store of Vallaki.",
      longDescription: [
        {type: "text",
          text: "Araseks stockyard is the general goods store in Vallaki"
        }
      ],
      npcs: ["Arasek"]
    },
    {
      id: "Coffin",
      name: "Coffin Makers Shop",
      type: "shop",
      x: 1539,
      y: 404,
      shortDescription: "The Coffin Maker's shop.",
      longDescription: [
        {type: "text",
          text: "The Coffin Makers Shop is where the finest coffins in Vallaki are crafted."
        }
      ],
      npcs: ["Henrik-Van-Der-Voort"]
    },
    {
      id: "BlinskysToys",
      name: "Blinskys Toys",
      type: "shop",
      x: 1203,
      y: 514,
      shortDescription: "A shop selling toys and games.",
      longDescription: [
        {type: "text",
          text: "Blinskys Toys is a small shop that sells dolls and other toys"
        },
        {type: "text",
          text: "Blinsky has started selling a collection of dolls that look like Ireena Kolyana."
        },
        {type: "redacted",
          text: "Blinsky is evil"
        }
      ],
      npcs: ["Blinsky"]
    },
    {
      id: "Bowens",
      name: "Bowen Staples",
      type: "shop",
      x: 1819,
      y: 380,
      shortDescription: "Bowen Staples, a merchant who deals with horses and carriages.",
      longDescription: [
        {type: "text",
          text: "Off in a little corner a bit off the main road you see a little stable with a few horses being brushed by a old brown haired man who has a little grass straw in his mouth. Not too far away from him you see a little house made of straw and wood with a candle lit in the window. Sur-rounding the estate is a wooden fence with spikes made of thin branches. "
        }
      ],
      npcs: ["Bowen-Tackstovich"]
    },
    {
      id: "GatesEast",
      name: "Morning Gates",
      type: "noteworthy",
      x: 1807,
      y: 421,
      shortDescription: "The eastern most gate of Vallaki.",
      longDescription:["The Eastern Gates of vallaki. Also refered to as the Mourning Gates"],
      npcs: []
    },
    {
      id: "NorthGate",
      name: "Zarovich Gates",
      type: "noteworthy",
      x: 1227,
      y: 990,
      shortDescription: "The northern gate of Vallaki.",
      longDescription:["The nothern gates of Vallaki, sometimes refered to as the Gate to the Lake."],
      npcs: []
    },
    {
      id: "WesternGate",
      name: "Sunset Gates",
      type: "noteworthy",
      x: 550,
      y: 560,
      shortDescription: "The western gate of Vallaki.",
      longDescription:[ "The Sunset gate of Vallaki is the westernmost gate. "],
      npcs: []
    },
    {
      id: "Townsquare",
      name: "Town Square",
      type: "noteworthy",
      x: 1341,
      y: 455,
      shortDescription: "The town square of Vallaki.",
      longDescription: [
        {type: "text",
          text: "The town square of Vallaki is the center of the town's festivals and public gatherings."
        },
        {type: "text",
          text: "The first time the party arrived here: The shops and homes that enclose the town square are decorated with limp, tattered garlands and painted wooden boxes filled with tiny, dead flowers. At the north end of the square stands a row of stocks, locked in which are several men, women, and children wearing crude, plaster donkey heads. "
        }
      ],
      npcs: []
    },
    {
      id: "MoonlitStreet",
      name: "Moonlit Street",
      type: "noteworthy",
      x: 1649,
      y: 522,
      shortDescription: "A street in Vallakis west ward known for the way the moonlight hits it.",
      longDescription:[
        {type: "text",
          text: "As enter the street you notice how many people are travesing the street, it stretches for quite a while and ends by a rather huge building. You hear the sound of people fletching, you smell the smell of iron getting put into place and the general feeling of people living here is nostalgic to say the least."
        },
        {type: "text",
          text: "If entered by night the street is bathed in a soft silvery aura from the way the rocks reflect moonlight"
        },
        {type: "text",
          text: "Here the players can find shops such as "
        },
      ],
      npcs: []
    },
    {
      id: "BurgoMaster",
      name: "Burgomaster's Mansion",
      type: "quest",
      x: 1120,
      y: 423,
      shortDescription: "The mansion of the burgomaster of Vallaki.",
      longDescription:["The mansion of the burgomaster of Vallaki, Baron Vargas Vallakovich. His family as well as his servants. A servant such as Izek Strazni who is the Baron's enforcer and a dangerous wielder of a firey magical arm."],
      npcs: ["BurgomasterVargas", "IzekStrazni","VictorVallakovich"]
    },
    {
      id: "StAndralsOrphanage",
      name: "St. Andral's Orphanage",
      type: "noteworthy",
      x: 1202,
      y: 770,
      shortDescription: "A place for orphaned children in Vallaki.",
      longDescription:["St. Andral's Orphanage is a long cobblestone building where orphaned children are cared for by a rather strict matron."],
      npcs: []
    },
    {
      id: "Reformation",
      name: "The Reformation center",
      type: "noteworthy",
      x: 1257,
      y: 337,
      shortDescription: "The general prison of Vallaki.",
      longDescription:["The Reformation center is a grim, stone building where the town's criminals are held. It is believed that all criminals are sent in here and all turn out to be happy afterwards."],
      npcs: []
    },
    {
      id: "Library",
      name: "Library of Vallaki",
      type: "quest",
      x: 1508,
      y: 667,
      shortDescription: "Vallakis Library",
      longDescription:["Vallakis library is a tall cobblestone and wood building, being held together by donations from Fiona Watcher. If it were the will of the Burgomaster this library wouldn't exist. The librarian is a strange young woman whom the party know to be a priest of Osybus"],
      npcs: []
    },
    {
      id: "KatyasKavern",
      name: "Katyas Kavern",
      type: "tavern",
      x: 1518,
      y: 574,
      shortDescription: "Katyas Kavern a small dingy tavern in the western ward of Vallaki",
      longDescription:["Katyas Kavern is a small tavern in the west ward of Vallaki. Known for it's hostess Katya, who has a bit more to offer than meets the eye"],
      npcs: ["KatyaFelraya"]
    }
  ],




  npcs: [
    {
      id: "urwin-martikov",
      name: "Urwin Martikov",
      description: "Innkeeper of the Blue Water Inn"
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
    },
    {
      id: "Vasili-Von-Holtz",
      name: "Vasili Von Holtz",
      description: [{type: "redacted",
        text: "Strahds Alter ego"
      }]
    },
    {
      id: "Arasek",
      name: "Arasek",
      description: "The owner of Arasek Stockyard, the general goods store in Vallaki."
    },
    {
      id: "Henrik-Van-Der-Voort",
      name: "Henrik Van Der Voort",
      description: "The coffin maker of Vallaki, known for his craftsmanship."
    },
    {
      id: "Blinsky",
      name: "Blinsky",
      description: "The owner of Blinsky's Toys"
    },
    {
      id: "Bowen-Tackstovich",
      name: "Bowen Tackstovich",
      description:[ {type: "text",
        text: "The owner of Bowen Staples. Bowen Tackstovich is an old barovian sun touched male in his late 30’s"
    }]},
    {
      id: "BurgomasterVargas",
      name: "Baron Vargas Vallakovich",
      description: "The burgomaster of Vallaki, believes that happiness is the key to safety and will punish anyone who threatens the town's happiness."
    },
    {
      id: "IzekStrazni",
      name: "Izek Strazni",
      description: "The Baron's enforcer and a dangerous wielder of a firey magical arm."
    },
    {      
      id: "VictorVallakovich",
      name: "Victor Vallakovich",
      description: "The Baron's son, who is sickly and kept hidden away in the mansion. Has access to a teleportation circle and for some reason has magical powers."
    },
    {
      id: "KatyaFelraya",
      name: "Katya Felraya",
      description: "The owner of Katyas Kavern"
    }
  ]
};


    // {
    //   id: "",
    //   name: "",
    //   type: "",
    //   x: 0,
    //   y: 0,
    //   shortDescription: "",
    //   longDescription:[  ""],
    //   npcs: []
    // }