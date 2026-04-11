export interface Package {
  tier: "essential" | "signature" | "luxe";
  name: string;
  tagline: string;
  priceRange: string;
  priceNote: string;
  description: string;
  duration: string;
  highlights: string[];
  treatments: string[];
  travel: string[];
  notIncluded?: string[];
  popular?: boolean;
}

export const packages: Package[] = [
  {
    tier: "essential",
    name: "Essential",
    tagline: "Your introduction to K-beauty",
    priceRange: "$5,000 - $8,000",
    priceNote: "Treatments + Travel Package",
    description:
      "Perfect for first-time visitors seeking signature Korean treatments with premium travel comfort. Experience the best of Seoul's skincare in a curated 5-day journey.",
    duration: "5 Days / 4 Nights",
    highlights: [
      "2-3 signature treatments",
      "4-star boutique hotel in Gangnam",
      "Personal beauty concierge",
      "Airport transfers included",
    ],
    treatments: [
      "Glass Skin Facial",
      "Skin Booster Therapy OR Laser Toning",
      "Korean skincare consultation",
      "Customized product recommendations",
    ],
    travel: [
      "4-star boutique hotel accommodation",
      "Private airport transfers",
      "Welcome amenity package",
      "Local SIM card & pocket WiFi",
      "Clinic transportation",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals (except welcome dinner)",
    ],
  },
  {
    tier: "signature",
    name: "Signature",
    tagline: "The complete transformation",
    priceRange: "$10,000 - $15,000",
    priceNote: "Treatments + Travel Package",
    description:
      "Our most popular package combines comprehensive treatments with luxury accommodations and cultural immersion. A week of transformation, relaxation, and discovery.",
    duration: "7 Days / 6 Nights",
    highlights: [
      "4-6 treatments across multiple modalities",
      "5-star luxury hotel in Gangnam",
      "Dedicated bilingual guide",
      "Cultural experiences included",
    ],
    treatments: [
      "Glass Skin Facial (2 sessions)",
      "Rejuran Healer (PDRN therapy)",
      "Skin Booster Therapy",
      "Laser Toning (2-3 sessions)",
      "Customized combination protocol",
      "Take-home skincare regimen",
    ],
    travel: [
      "5-star luxury hotel accommodation",
      "Private airport transfers",
      "Dedicated bilingual guide",
      "Michelin-starred welcome dinner",
      "Traditional Korean spa day",
      "K-beauty shopping tour with expert",
      "All clinic transportation",
      "Travel insurance included",
    ],
    popular: true,
  },
  {
    tier: "luxe",
    name: "Luxe",
    tagline: "The ultimate Seoul experience",
    priceRange: "$18,000 - $25,000+",
    priceNote: "Treatments + Travel Package",
    description:
      "An exclusive, fully customized journey for those seeking the most comprehensive transformation. Every detail tailored to your desires, from treatments to dining to exploration.",
    duration: "10-14 Days",
    highlights: [
      "Unlimited treatments & procedures",
      "Premium suite accommodations",
      "Private luxury vehicle & driver",
      "Fully customized itinerary",
    ],
    treatments: [
      "Comprehensive skin analysis & multi-visit protocol",
      "Thread Lift or Anti-Aging Combination",
      "Full Rejuran series (3-4 sessions)",
      "Skin Boosters & Laser Toning",
      "Glass Skin maintenance sessions",
      "Any additional treatments desired",
      "VIP practitioner access",
      "1-year follow-up consultation plan",
    ],
    travel: [
      "Premium suite at Park Hyatt or Four Seasons",
      "Private luxury vehicle with dedicated driver",
      "24/7 personal concierge",
      "Business class flight coordination",
      "Exclusive dining experiences",
      "Private cultural tours (temple, palace, DMZ)",
      "Personal shopping assistant",
      "Comprehensive travel insurance",
      "Post-trip skincare shipped to your home",
    ],
  },
];

export interface AddOn {
  name: string;
  description: string;
  price: string;
  category: "treatment" | "travel" | "experience";
}

export const addOns: AddOn[] = [
  {
    name: "Thread Lift",
    description: "Non-surgical face lifting with PDO threads",
    price: "$1,500 - $4,000",
    category: "treatment",
  },
  {
    name: "Additional Rejuran Session",
    description: "Extra PDRN regeneration treatment",
    price: "$500 - $800",
    category: "treatment",
  },
  {
    name: "Body Skin Boosters",
    description: "Extend skin booster benefits to neck, décolletage, or hands",
    price: "$400 - $600",
    category: "treatment",
  },
  {
    name: "Flight Upgrade",
    description: "Business class flight arrangement assistance",
    price: "From $2,500",
    category: "travel",
  },
  {
    name: "Suite Upgrade",
    description: "Upgrade to premium hotel suite",
    price: "$300 - $600/night",
    category: "travel",
  },
  {
    name: "Extended Stay",
    description: "Additional nights at your hotel",
    price: "$250 - $500/night",
    category: "travel",
  },
  {
    name: "Korean Cooking Class",
    description: "Private traditional Korean cooking experience",
    price: "$250",
    category: "experience",
  },
  {
    name: "DMZ Tour",
    description: "Private tour to the Demilitarized Zone",
    price: "$350",
    category: "experience",
  },
  {
    name: "K-Pop Experience",
    description: "Dance class or studio visit",
    price: "$200 - $400",
    category: "experience",
  },
];

export interface Inclusion {
  icon: string;
  title: string;
  description: string;
}

export const inclusions: Inclusion[] = [
  {
    icon: "consultation",
    title: "Pre-Trip Consultation",
    description:
      "Complimentary video consultation to assess your needs and design your treatment plan.",
  },
  {
    icon: "concierge",
    title: "Personal Concierge",
    description:
      "Dedicated beauty concierge from first inquiry through post-trip follow-up.",
  },
  {
    icon: "translation",
    title: "Translation Services",
    description:
      "Bilingual support at all appointments ensuring clear communication with practitioners.",
  },
  {
    icon: "aftercare",
    title: "Aftercare Support",
    description:
      "Detailed aftercare instructions and follow-up consultations after you return home.",
  },
  {
    icon: "products",
    title: "Product Guidance",
    description:
      "Expert recommendations for Korean skincare products to maintain your results.",
  },
  {
    icon: "emergency",
    title: "24/7 Emergency Support",
    description:
      "Round-the-clock support line throughout your journey for any concerns.",
  },
];

export function getPackageByTier(tier: string): Package | undefined {
  return packages.find((p) => p.tier === tier);
}
