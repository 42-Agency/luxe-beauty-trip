export interface City {
  slug: string;
  name: string;
  state: string;
  country: string;
  tagline: string;
  description: string;
  flightInfo: {
    duration: string;
    directFlights: boolean;
    airlines: string[];
    airports: string[];
  };
  localContext: string;
  testimonial?: {
    quote: string;
    name: string;
    treatment: string;
  };
  image: string;
  seoulDistance: string;
}

export const cities: City[] = [
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    tagline: "From Hollywood to Hallyu",
    description:
      "Los Angeles has long been a beauty capital, but discerning Angelenos are discovering what Korean skincare offers that Hollywood can't. Direct flights to Seoul make the journey seamless.",
    flightInfo: {
      duration: "12-13 hours",
      directFlights: true,
      airlines: ["Korean Air", "Asiana", "United", "Delta"],
      airports: ["LAX"],
    },
    localContext:
      "LA's beauty scene is saturated, but Korean dermatology offers treatments not yet FDA-approved in the US. From K-town to Beverly Hills, Angelenos are flying to the source for PDRN therapy, advanced lasers, and the authentic glass skin experience.",
    testimonial: {
      quote:
        "I've tried every medspa in LA. One trip to Seoul gave me results I'd been chasing for years.",
      name: "Jessica K.",
      treatment: "Rejuran + Laser Toning",
    },
    image:
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=600&fit=crop",
    seoulDistance: "5,959 miles",
  },
  {
    slug: "new-york",
    name: "New York",
    state: "NY",
    country: "USA",
    tagline: "Manhattan to Myeongdong",
    description:
      "New Yorkers demand the best, and Korean skincare delivers. Direct flights from JFK make Seoul closer than you think—and the results are worth every mile.",
    flightInfo: {
      duration: "14-15 hours",
      directFlights: true,
      airlines: ["Korean Air", "Asiana", "Delta"],
      airports: ["JFK"],
    },
    localContext:
      "New York's fast pace takes a toll on skin. Korean clinics offer not just treatments but a reset—a chance to slow down, focus on self-care, and return with the glow that turns heads in any room.",
    testimonial: {
      quote:
        "As a New Yorker, I'm skeptical of everything. Seoul converted me. The expertise there is unmatched.",
      name: "Amanda L.",
      treatment: "Glass Skin Facial + Skin Boosters",
    },
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
    seoulDistance: "6,870 miles",
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    state: "CA",
    country: "USA",
    tagline: "Bay Area to Beauty Capital",
    description:
      "Tech-forward San Franciscans appreciate innovation, and Korean skincare is years ahead. Direct flights make a Seoul beauty trip a feasible long weekend escape.",
    flightInfo: {
      duration: "11-12 hours",
      directFlights: true,
      airlines: ["Korean Air", "Asiana", "United"],
      airports: ["SFO"],
    },
    localContext:
      "The Bay Area's tech scene values optimization and cutting-edge solutions. Korean skincare fits perfectly—data-driven approaches, innovative ingredients, and measurable results.",
    testimonial: {
      quote:
        "I approached it like optimizing anything else. The ROI on my Seoul trip was incredible.",
      name: "Sarah M.",
      treatment: "Anti-Aging Combination Protocol",
    },
    image:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=600&fit=crop",
    seoulDistance: "5,584 miles",
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "WA",
    country: "USA",
    tagline: "Pacific Northwest to Asia's Beauty Hub",
    description:
      "Seattle's position on the Pacific Rim makes Seoul an easy hop across the ocean. The Emerald City's beauty-conscious residents are discovering what awaits.",
    flightInfo: {
      duration: "10-11 hours",
      directFlights: true,
      airlines: ["Korean Air", "Asiana", "Delta"],
      airports: ["SEA"],
    },
    localContext:
      "Seattle's gray skies can leave skin dull and vitamin D-deprived. Korean treatments restore radiance, and the shorter flight (under 11 hours) makes it one of the easiest US cities for a Seoul trip.",
    testimonial: {
      quote:
        "Living in Seattle, my skin needed serious help. Seoul gave me back my glow.",
      name: "Emily R.",
      treatment: "Glass Skin Facial + Laser Toning",
    },
    image:
      "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=800&h=600&fit=crop",
    seoulDistance: "5,210 miles",
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    state: "BC",
    country: "Canada",
    tagline: "Canada's Gateway to Korean Beauty",
    description:
      "Vancouver's strong Asian cultural ties make Korean beauty already familiar. Direct flights and Canada's closest proximity to Seoul make the journey effortless.",
    flightInfo: {
      duration: "10-11 hours",
      directFlights: true,
      airlines: ["Korean Air", "Air Canada"],
      airports: ["YVR"],
    },
    localContext:
      "Vancouver's large Korean community means residents already appreciate K-beauty. But there's no substitute for treatments at the source, with practitioners who've trained thousands.",
    testimonial: {
      quote:
        "Vancouver has good Korean skincare shops, but the clinic experience in Seoul is next level.",
      name: "Michelle K.",
      treatment: "Rejuran Healer",
    },
    image:
      "https://images.unsplash.com/photo-1559511260-66a68e7d93eb?w=800&h=600&fit=crop",
    seoulDistance: "5,035 miles",
  },
  {
    slug: "toronto",
    name: "Toronto",
    state: "ON",
    country: "Canada",
    tagline: "Canada's Largest City to Seoul",
    description:
      "Toronto's diverse population appreciates global beauty traditions. Korean skincare offers solutions for all skin types, with treatments perfected for diverse complexions.",
    flightInfo: {
      duration: "13-14 hours",
      directFlights: true,
      airlines: ["Korean Air", "Air Canada"],
      airports: ["YYZ"],
    },
    localContext:
      "Toronto's multicultural makeup means diverse skincare needs. Korean clinics excel at treating all skin types, with techniques developed for Asian skin that benefit everyone.",
    testimonial: {
      quote:
        "Finding treatments that work for my skin tone isn't easy. Korean clinics understood immediately.",
      name: "Priya S.",
      treatment: "Laser Toning + Skin Boosters",
    },
    image:
      "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=800&h=600&fit=crop",
    seoulDistance: "6,552 miles",
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "IL",
    country: "USA",
    tagline: "Midwest Meets K-Beauty",
    description:
      "Chicago's harsh winters wreak havoc on skin. Korean hydration treatments offer the deep moisture Midwesterners need, delivered with world-class expertise.",
    flightInfo: {
      duration: "13-14 hours",
      directFlights: true,
      airlines: ["Korean Air", "United"],
      airports: ["ORD"],
    },
    localContext:
      "Chicago winters are brutal on skin. Korean treatments focusing on barrier repair and deep hydration are especially beneficial for those facing extreme seasonal changes.",
    testimonial: {
      quote:
        "Chicago winters destroyed my skin. Korean glass skin treatments finally fixed it.",
      name: "Lauren B.",
      treatment: "Skin Boosters + Glass Skin Facial",
    },
    image:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&h=600&fit=crop",
    seoulDistance: "6,541 miles",
  },
  {
    slug: "miami",
    name: "Miami",
    state: "FL",
    country: "USA",
    tagline: "Sun-Kissed to Seoul-Blessed",
    description:
      "Miami's sun and humidity create unique skincare challenges. Korean treatments address sun damage while maintaining the dewy look that works in tropical climates.",
    flightInfo: {
      duration: "17-18 hours",
      directFlights: false,
      airlines: ["Korean Air (via LAX)", "Delta (via ATL)"],
      airports: ["MIA"],
    },
    localContext:
      "Miami's relentless sun means serious pigmentation concerns. Korean laser toning protocols, designed for hyperpigmentation-prone skin, offer solutions that aggressive Western lasers can't.",
    testimonial: {
      quote:
        "Years of Miami sun left my skin spotted. Korean lasers did what nothing else could.",
      name: "Sofia R.",
      treatment: "Laser Toning Package",
    },
    image:
      "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&h=600&fit=crop",
    seoulDistance: "8,504 miles",
  },
  {
    slug: "dallas",
    name: "Dallas",
    state: "TX",
    country: "USA",
    tagline: "Texas-Sized Transformation",
    description:
      "Dallas knows luxury, and Korean beauty delivers. From the sun-drenched suburbs to Seoul's elite clinics, Texas women are discovering transformative skincare.",
    flightInfo: {
      duration: "14-15 hours",
      directFlights: true,
      airlines: ["Korean Air"],
      airports: ["DFW"],
    },
    localContext:
      "Texas sun and AC create a challenging skin environment—dry yet damaged. Korean protocols that combine deep hydration with pigmentation treatment address both concerns.",
    testimonial: {
      quote:
        "In Texas, we like things big—including our glow-ups. Seoul delivered.",
      name: "Taylor M.",
      treatment: "Anti-Aging Combination Protocol",
    },
    image:
      "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=800&h=600&fit=crop",
    seoulDistance: "6,848 miles",
  },
  {
    slug: "boston",
    name: "Boston",
    state: "MA",
    country: "USA",
    tagline: "From Academic to Aesthetic Excellence",
    description:
      "Boston's medical heritage makes residents discerning about treatments. Korean dermatology's evidence-based, innovative approach appeals to the educated consumer.",
    flightInfo: {
      duration: "14-15 hours",
      directFlights: false,
      airlines: ["Korean Air (via JFK)", "Delta (via ATL)"],
      airports: ["BOS"],
    },
    localContext:
      "Home to world-class medical institutions, Bostonians research before they commit. Korean skincare's scientific foundation and proven results satisfy even the most analytical minds.",
    testimonial: {
      quote:
        "I'm a researcher. I looked into Korean dermatology deeply before going. The science is real.",
      name: "Dr. Jennifer P.",
      treatment: "Rejuran Healer + Skin Boosters",
    },
    image:
      "https://images.unsplash.com/photo-1501979376754-2ff867a4f659?w=800&h=600&fit=crop",
    seoulDistance: "6,902 miles",
  },
  {
    slug: "honolulu",
    name: "Honolulu",
    state: "HI",
    country: "USA",
    tagline: "Paradise to Paradise",
    description:
      "Hawaii's unique position makes Seoul closer than the mainland US. Island sun requires serious skincare—Korean treatments deliver protection and repair.",
    flightInfo: {
      duration: "8-9 hours",
      directFlights: true,
      airlines: ["Korean Air", "Hawaiian Airlines"],
      airports: ["HNL"],
    },
    localContext:
      "Hawaii's intense UV exposure demands serious skin protection and repair. Korean clinics specialize in treating sun damage with protocols safe for Pacific Islander and Asian skin types.",
    testimonial: {
      quote:
        "Living in Hawaii, sun damage is constant. Seoul treatments reversed years of damage.",
      name: "Kiana L.",
      treatment: "Laser Toning + Glass Skin Facial",
    },
    image:
      "https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800&h=600&fit=crop",
    seoulDistance: "4,662 miles",
  },
  {
    slug: "denver",
    name: "Denver",
    state: "CO",
    country: "USA",
    tagline: "Mile High to Korean Sky",
    description:
      "Denver's high altitude means increased UV exposure and dry air. Korean hydration treatments are the antidote to mountain skin challenges.",
    flightInfo: {
      duration: "13-14 hours",
      directFlights: false,
      airlines: ["Korean Air (via LAX/SFO)", "United (via SFO)"],
      airports: ["DEN"],
    },
    localContext:
      "At 5,280 feet, Denver skin faces unique challenges: intense UV at altitude and very dry air. Korean treatments focusing on barrier repair and deep hydration are especially effective.",
    testimonial: {
      quote:
        "Colorado altitude destroyed my moisture barrier. Korean treatments rebuilt it completely.",
      name: "Ashley N.",
      treatment: "Skin Boosters + Glass Skin Facial",
    },
    image:
      "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=800&h=600&fit=crop",
    seoulDistance: "6,028 miles",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
