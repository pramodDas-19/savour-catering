export interface MenuItem {
  id: string;
  name: string;
  category: "STARTERS" | "MAIN COURSE" | "LIVE COUNTERS" | "DESSERTS" | "BEVERAGES";
  cuisine: "Indian" | "Continental" | "Asian" | "Italian" | "North Indian" | "South Indian";
  description: string;
  isVeg: boolean;
  isJainFriendly?: boolean;
  image: string;
  tag?: string;
}

export interface ShowcaseCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "indian",
    name: "INDIAN",
    description: "Centuries of royal heritage, slow-cooked spices, and refined culinary grace.",
    items: [
      {
        id: "ind-1",
        name: "Awadhi Dum Gosht Biryani",
        category: "MAIN COURSE",
        cuisine: "Indian",
        description: "Fragrant long-grain aged basmati layered with tender slow-braised cuts, saffron milk, and rose water puff seal.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
        tag: "Signature",
      },
      {
        id: "ind-2",
        name: "Charcoal Truffle Paneer Tikka",
        category: "STARTERS",
        cuisine: "North Indian",
        description: "Malai cottage cheese infused with black summer truffle oil, Kashmiri deghi mirch, and wood-fired in clay tandoor.",
        isVeg: true,
        isJainFriendly: true,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
        tag: "Chef's Special",
      },
      {
        id: "ind-3",
        name: "Slow-Simmered Dal Bukhara",
        category: "MAIN COURSE",
        cuisine: "Indian",
        description: "Black lentils gently stewed overnight on embers with ripe vine tomatoes, hand-churned white butter, and fenugreek.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
        tag: "Classic",
      },
      {
        id: "ind-4",
        name: "Kakori Galouti on Sheermal",
        category: "STARTERS",
        cuisine: "Indian",
        description: "Melt-in-mouth spiced kebabs rested on saffron-infused mini sheermal with pomegranate mint gel.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        tag: "Royal Heritage",
      },
    ],
  },
  {
    id: "continental",
    name: "CONTINENTAL",
    description: "Sleek European plating, pristine sauces, and precision gastronomy.",
    items: [
      {
        id: "cont-1",
        name: "Black Truffle & Porcini Tagliatelle",
        category: "MAIN COURSE",
        cuisine: "Italian",
        description: "Hand-rolled ribbon pasta tossed in cultured butter, wild Umbrian porcini, aged Parmigiano Reggiano, and shaved truffle.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        tag: "Handmade",
      },
      {
        id: "cont-2",
        name: "Pan-Seared Sea Bass with Fennel Velouté",
        category: "MAIN COURSE",
        cuisine: "Continental",
        description: "Crispy skin Atlantic sea bass atop braised fennel, saffron emulsion, and micro sea herbs.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80",
        tag: "Gourmet",
      },
      {
        id: "cont-3",
        name: "Heirloom Burrata with Roasted Fig",
        category: "STARTERS",
        cuisine: "Continental",
        description: "Creamy Puglia burrata, balsamic caviar, honey-caramelized mission figs, and toasted pine kernel brittle.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        tag: "Fresh Artisan",
      },
      {
        id: "cont-4",
        name: "Duck Breast with Cherry Reduction",
        category: "MAIN COURSE",
        cuisine: "Continental",
        description: "Sous-vide duck breast seared pink, served alongside parsnip purée and amarena cherry jus.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "asian",
    name: "ASIAN",
    description: "Vibrant aromatics, fiery wok-craft, and delicate handcrafted dim sums.",
    items: [
      {
        id: "asia-1",
        name: "Edamame & Truffle Crystal Dumpling",
        category: "STARTERS",
        cuisine: "Asian",
        description: "Translucent steamed parcels filled with young edamame puree, water chestnuts, and aroma of black winter truffle.",
        isVeg: true,
        isJainFriendly: true,
        image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
        tag: "Artisanal",
      },
      {
        id: "asia-2",
        name: "Smoked Peking Duck Crêpes",
        category: "STARTERS",
        cuisine: "Asian",
        description: "Crispy skin roasted duck, cucumber ribbons, scallions, and 12-spice hoisin wrapped in steamed lotus crêpes.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "asia-3",
        name: "Wok-Tossed Chilean Sea Bass & Bok Choy",
        category: "MAIN COURSE",
        cuisine: "Asian",
        description: "Seared over high flaming wok with ginger scallion glaze, Shaoxing wine, and tender Shanghai greens.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "asia-4",
        name: "Lotus Root & Wild Forest Mushroom Stir Fry",
        category: "MAIN COURSE",
        cuisine: "Asian",
        description: "Crisp water chestnut and lotus root tossed with Morel and Shiitake mushrooms in light superior soy.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "live-counters",
    name: "LIVE COUNTERS",
    description: "Theatrical culinary theater prepared fresh in front of your enthralled guests.",
    items: [
      {
        id: "live-1",
        name: "Flaming 24-Month Parmigiano Pasta Wheel",
        category: "LIVE COUNTERS",
        cuisine: "Italian",
        description: "Fresh gnocchi or fettuccine flamed with Cognac inside a gigantic imported wheel of aged Parmigiano Reggiano.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
        tag: "Interactive",
      },
      {
        id: "live-2",
        name: "Benares Royal Chaat Theater",
        category: "LIVE COUNTERS",
        cuisine: "Indian",
        description: "Pani puri with 5 aromatic mountain waters, Palak patta crisps with sweet curd drops, and smoked Matar kulcha.",
        isVeg: true,
        isJainFriendly: true,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        tag: "Street Luxury",
      },
      {
        id: "live-3",
        name: "Charcoal Sigri & Tandoor Showcase",
        category: "LIVE COUNTERS",
        cuisine: "North Indian",
        description: "Master tandoori chefs skewering marinated meats and farm-fresh vegetables over live glowing coconut charcoals.",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "live-4",
        name: "Liquid Nitrogen Nitro Gelato & Mousse Bar",
        category: "LIVE COUNTERS",
        cuisine: "Continental",
        description: "Flash-frozen custom desserts prepared with misty visual clouds, pistachios, edible gold foil, and warm chocolate drizzle.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "desserts",
    name: "DESSERTS",
    description: "A decadent crescendo of artisanal patisserie, golden leaf, and nostalgic sweets.",
    items: [
      {
        id: "des-1",
        name: "Valrhona Dark Chocolate Ganache Tart",
        category: "DESSERTS",
        cuisine: "Continental",
        description: "70% Guanaja chocolate mousse, salted Brittany caramel, hazelnut praline crisp, and hand-applied 24K gold leaf.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        tag: "Patisserie",
      },
      {
        id: "des-2",
        name: "Saffron Angoori Rasmalai Sphere",
        category: "DESSERTS",
        cuisine: "Indian",
        description: "Delicate chenna dumplings soaked in condensed saffron rabdi, toasted Iranian pistachio slivers, and dried rose petals.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        tag: "Heritage",
      },
      {
        id: "des-3",
        name: "Wild Berry Pavlova with Passionfruit Curd",
        category: "DESSERTS",
        cuisine: "Continental",
        description: "Crispy meringue shell with marshmallow center, Madagascar vanilla chantilly cream, and vibrant seasonal berries.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "beverages",
    name: "BEVERAGES",
    description: "Handcrafted botanicals, cold-pressed elixirs, and bespoke celebratory refreshments.",
    items: [
      {
        id: "bev-1",
        name: "Rosemary & Smoked Grapefruit Sparkler",
        category: "BEVERAGES",
        cuisine: "Continental",
        description: "Cold-pressed ruby grapefruit, torched rosemary sprig, elderflower tonic, and pink Himalayan salt rim.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
        tag: "Signature Elixir",
      },
      {
        id: "bev-2",
        name: "Saffron Cardamom Kahwa & Cold Brew Station",
        category: "BEVERAGES",
        cuisine: "Indian",
        description: "Kashmiri green tea infused with whole cinnamon, green cardamom, almond slivers, alongside single-origin cold brews.",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export interface CustomizerDish {
  id: string;
  name: string;
  category: "STARTERS" | "MAIN COURSE" | "LIVE COUNTERS" | "DESSERTS" | "BEVERAGES";
  description: string;
  isVeg: boolean;
  cuisine: string;
  image: string;
}

export const CUSTOMIZER_DISHES: CustomizerDish[] = [
  // STARTERS
  {
    id: "c-start-1",
    name: "Charcoal Paneer Tikka",
    category: "STARTERS",
    description: "Smoked malai paneer with hung curd, aromatic spices, and mint emulsion.",
    isVeg: true,
    cuisine: "North Indian",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-start-2",
    name: "Truffle & Edamame Dumplings",
    category: "STARTERS",
    description: "Translucent crystal wraps stuffed with crushed edamame and black truffle.",
    isVeg: true,
    cuisine: "Asian",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-start-3",
    name: "Heirloom Burrata Crostini",
    category: "STARTERS",
    description: "Sourdough toast, creamy burrata, mission figs, and aged balsamic glaze.",
    isVeg: true,
    cuisine: "Continental",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-start-4",
    name: "Tandoori Bhatti Chicken",
    category: "STARTERS",
    description: "Tender boneless chicken morsels spiced with roasted cloves and mustard oil.",
    isVeg: false,
    cuisine: "North Indian",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-start-5",
    name: "Crispy Golden Corn Tartlets",
    category: "STARTERS",
    description: "Sweet corn kernel medley tossed with scallions and kaffir lime in filo pastry.",
    isVeg: true,
    cuisine: "Asian",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-start-6",
    name: "Smoked Stuffed Portobello",
    category: "STARTERS",
    description: "Wood-fired portobello caps stuffed with goat cheese and sundried tomatoes.",
    isVeg: true,
    cuisine: "Continental",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },

  // MAIN COURSE
  {
    id: "c-main-1",
    name: "Signature Dum Biryani (Lamb or Veg)",
    category: "MAIN COURSE",
    description: "Handi cooked basmati sealed with dough, saffron milk, and fried onions.",
    isVeg: false,
    cuisine: "Indian",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-main-2",
    name: "Slow-Simmered Dal Bukhara",
    category: "MAIN COURSE",
    description: "24-hour slow braised black urad dal with churned butter and mild spices.",
    isVeg: true,
    cuisine: "Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-main-3",
    name: "Paneer Lababdar",
    category: "MAIN COURSE",
    description: "Cottage cheese cubes folded in spiced tomato gravy with crushed coriander seeds.",
    isVeg: true,
    cuisine: "North Indian",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-main-4",
    name: "Murgh Makhani Royale",
    category: "MAIN COURSE",
    description: "Roasted tandoori chicken simmered in satin smooth velvet makhani sauce.",
    isVeg: false,
    cuisine: "North Indian",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-main-5",
    name: "Handmade Truffle Tagliatelle",
    category: "MAIN COURSE",
    description: "Silky pasta ribbons with French butter, shaved winter truffles, and parmesan.",
    isVeg: true,
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-main-6",
    name: "Pan-Seared Sea Bass with Asparagus",
    category: "MAIN COURSE",
    description: "Crisp fillet on celery root puree, charred asparagus, and lemon butter sauce.",
    isVeg: false,
    cuisine: "Continental",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80",
  },

  // LIVE COUNTERS
  {
    id: "c-live-1",
    name: "Flaming Parmigiano Pasta Wheel",
    category: "LIVE COUNTERS",
    description: "Artisanal pasta tossed inside an authentic giant wheel of imported Parmigiano.",
    isVeg: true,
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-live-2",
    name: "Benares Royal Chaat Counter",
    category: "LIVE COUNTERS",
    description: "Interactive station serving 5 artisanal pani puri waters, sev puri, and papdi chaat.",
    isVeg: true,
    cuisine: "Indian",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-live-3",
    name: "Live Charcoal Tandoor Station",
    category: "LIVE COUNTERS",
    description: "Hot artisan naans, kulchas, and succulent kebabs prepared straight off the coals.",
    isVeg: false,
    cuisine: "North Indian",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-live-4",
    name: "Teppanyaki & Robata Grill",
    category: "LIVE COUNTERS",
    description: "Chef performance grill featuring glazed skewers, wok noodles, and flash sear.",
    isVeg: false,
    cuisine: "Asian",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
  },

  // DESSERTS
  {
    id: "c-des-1",
    name: "Saffron Angoori Rasmalai",
    category: "DESSERTS",
    description: "Cottage cheese pearls steeped in thickened cardamom milk with gold leaf.",
    isVeg: true,
    cuisine: "Indian",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-des-2",
    name: "Valrhona 70% Dark Chocolate Tart",
    category: "DESSERTS",
    description: "French cocoa ganache with sea salt crystals and crushed hazelnut crumble.",
    isVeg: true,
    cuisine: "Continental",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-des-3",
    name: "Pistachio Kulfi & Falooda Gelato",
    category: "DESSERTS",
    description: "Dense churned milk frozen with roasted pistachios, basil seeds, and rose drizzle.",
    isVeg: true,
    cuisine: "Indian",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-des-4",
    name: "Artisan Macaron Tower & Petit Fours",
    category: "DESSERTS",
    description: "Assortment of salted caramel, raspberry rose, matcha, and espresso macarons.",
    isVeg: true,
    cuisine: "Continental",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },

  // BEVERAGES
  {
    id: "c-bev-1",
    name: "Botanical Mocktail Bar",
    category: "BEVERAGES",
    description: "Infusions of wild rosemary, smoked grapefruit, cucumber mint, and hibiscus elixir.",
    isVeg: true,
    cuisine: "Continental",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-bev-2",
    name: "Cold-Pressed Fresh Juices & Smoothies",
    category: "BEVERAGES",
    description: "Pure Valencia orange, pomegranate ginger, and green antioxidant coolers.",
    isVeg: true,
    cuisine: "Continental",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c-bev-3",
    name: "Artisan Coffee Bar & Kashmiri Kahwa",
    category: "BEVERAGES",
    description: "Single-origin espresso bar with oat/almond milk options and saffron spiced kahwa.",
    isVeg: true,
    cuisine: "Indian",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80",
  },
];

export const OCCASIONS = [
  {
    id: "wedding",
    title: "WEDDING",
    tagline: "Unforgettable multi-course banquets & opulent culinary theater.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "corporate",
    title: "CORPORATE",
    tagline: "Executive dinners, gala evenings, and high-impact boardroom buffets.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "private-party",
    title: "PRIVATE PARTY",
    tagline: "Intimate chef tastings, milestone anniversaries, and garden gatherings.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "reception",
    title: "RECEPTION",
    tagline: "Passed hors d'oeuvres, live carving stations, and champagne pairings.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "festival",
    title: "FESTIVAL",
    tagline: "Grand multi-station culinary celebrations celebrating rich culture.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "other",
    title: "OTHER",
    tagline: "Bespoke culinary concepts custom engineered to your exact vision.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
];

export const GUEST_PRESETS = [50, 100, 150, 250, "500+"];

export const CUISINES_LIST = [
  { id: "Indian", name: "Indian", desc: "Awadhi, Mughlai & regional slow-cooked royal traditions" },
  { id: "Continental", name: "Continental", desc: "Modern French, Mediterranean & fine European plated arts" },
  { id: "Asian", name: "Asian", desc: "Dim sum, Robata skewers & vibrant Cantonese wok flavors" },
  { id: "Italian", name: "Italian", desc: "Handcrafted pasta, wood-fired focaccia & truffle sauces" },
  { id: "North Indian", name: "North Indian", desc: "Clay tandoori specialties, rich gravies & layered rotis" },
  { id: "South Indian", name: "South Indian", desc: "Chettinad spices, coastal coconut curries & fragrant rice" },
  { id: "Desserts", name: "Desserts", desc: "Bespoke patisserie, gold-foil rabdi & liquid nitrogen gelato" },
  { id: "Beverages", name: "Beverages", desc: "Botanical mocktails, craft coffee & cold-pressed elixirs" },
];

export const DIETARY_PREFERENCES = [
  "Vegetarian",
  "Non-Vegetarian",
  "Vegan",
  "Jain",
  "Gluten-conscious",
  "Custom requirements",
];

export const TESTIMONIALS_DATA = [
  {
    quote: "The food was beautifully presented and every dish felt thoughtfully prepared. Our guests are still raving about the Awadhi Biryani and the live truffle pasta wheel three months later.",
    author: "Riya & Karan",
    role: "Wedding Celebration, South Goa",
    initials: "RK",
  },
  {
    quote: "The menu customization made planning our corporate gala incredibly easy. SAVOUR delivered impeccable pacing, refined gastronomy, and flawless discreet service.",
    author: "Private Event Client",
    role: "Executive Annual Gala, Mumbai & Goa",
    initials: "PC",
  },
  {
    quote: "Elegant presentation, excellent variety and a wonderful experience for our guests. Their attention to dietary preferences and the chaat theater was extraordinary.",
    author: "Event Organizer",
    role: "Luxury Event Director, Global Summit",
    initials: "EO",
  },
];
