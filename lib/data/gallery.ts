export interface GalleryResult {
  id: string;
  clientName: string;
  location: string;
  age: string;
  treatment: string;
  treatmentSlug: string;
  concern: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
  stayDuration: string;
  treatments: string[];
}

export const galleryResults: GalleryResult[] = [
  {
    id: "result-1",
    clientName: "Jennifer M.",
    location: "Los Angeles, CA",
    age: "42",
    treatment: "Anti-Aging Combination",
    treatmentSlug: "anti-aging-combination",
    concern: "Fine Lines & Wrinkles",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=600&fit=crop&facepad=2",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&facepad=2",
    quote: "I look like myself, just ten years younger. The results were so natural that my friends thought I just came back well-rested from vacation.",
    stayDuration: "7 days",
    treatments: ["Thread Lift", "Rejuran Healer", "Skin Boosters"],
  },
  {
    id: "result-2",
    clientName: "Sarah K.",
    location: "New York, NY",
    age: "35",
    treatment: "Korean Glass Skin Facial",
    treatmentSlug: "korean-glass-skin-facial",
    concern: "Dull Skin",
    beforeImage: "https://images.unsplash.com/photo-1546961342-ea7f8b449974?w=500&h=600&fit=crop&facepad=2",
    afterImage: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=500&h=600&fit=crop&facepad=2",
    quote: "The glass skin glow is real! I finally understand what Korean skincare is all about. My skin has never looked this radiant.",
    stayDuration: "5 days",
    treatments: ["Glass Skin Facial", "Skin Boosters"],
  },
  {
    id: "result-3",
    clientName: "Michelle T.",
    location: "Vancouver, BC",
    age: "38",
    treatment: "Rejuran Healer",
    treatmentSlug: "rejuran-healer",
    concern: "Acne Scars",
    beforeImage: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=500&h=600&fit=crop&facepad=2",
    afterImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=500&h=600&fit=crop&facepad=2",
    quote: "After years of trying every treatment at home, my acne scars finally improved. The Rejuran made such a difference to my skin texture.",
    stayDuration: "7 days",
    treatments: ["Rejuran Healer", "Laser Toning", "Skin Boosters"],
  },
  {
    id: "result-4",
    clientName: "Lisa W.",
    location: "Toronto, ON",
    age: "48",
    treatment: "Thread Lift",
    treatmentSlug: "thread-lift",
    concern: "Sagging Skin",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=600&fit=crop&facepad=2",
    afterImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=600&fit=crop&facepad=2",
    quote: "The thread lift gave me my jawline back. I was nervous about the procedure but the clinic made me feel so comfortable. Zero regrets.",
    stayDuration: "10 days",
    treatments: ["Thread Lift", "Anti-Aging Combination"],
  },
  {
    id: "result-5",
    clientName: "Amanda P.",
    location: "San Francisco, CA",
    age: "33",
    treatment: "Laser Toning",
    treatmentSlug: "laser-toning",
    concern: "Hyperpigmentation",
    beforeImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop&facepad=2",
    afterImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop&facepad=2",
    quote: "My melasma had gotten so bad after pregnancy. After five sessions of laser toning, my skin is finally even-toned again.",
    stayDuration: "7 days",
    treatments: ["Laser Toning", "Glass Skin Facial"],
  },
  {
    id: "result-6",
    clientName: "Diana R.",
    location: "Miami, FL",
    age: "45",
    treatment: "Skin Booster Therapy",
    treatmentSlug: "skin-booster-therapy",
    concern: "Large Pores",
    beforeImage: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&h=600&fit=crop&facepad=2",
    afterImage: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&h=600&fit=crop&facepad=2",
    quote: "My pores are visibly smaller and my skin texture is so much smoother. The skin boosters gave me that 'filter effect' in real life.",
    stayDuration: "5 days",
    treatments: ["Skin Booster Therapy", "Laser Toning"],
  },
  {
    id: "result-7",
    clientName: "Rachel H.",
    location: "Seattle, WA",
    age: "40",
    treatment: "Anti-Aging Combination",
    treatmentSlug: "anti-aging-combination",
    concern: "Fine Lines & Wrinkles",
    beforeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&facepad=2",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop&facepad=2",
    quote: "The combination approach made so much sense. Addressing everything at once gave me results I never thought possible without surgery.",
    stayDuration: "10 days",
    treatments: ["Rejuran Healer", "Skin Boosters", "Laser Toning", "Thread Lift"],
  },
  {
    id: "result-8",
    clientName: "Christina L.",
    location: "Chicago, IL",
    age: "36",
    treatment: "Korean Glass Skin Facial",
    treatmentSlug: "korean-glass-skin-facial",
    concern: "Dull Skin",
    beforeImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&h=600&fit=crop&facepad=2",
    afterImage: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&h=600&fit=crop&facepad=2",
    quote: "Everyone at work asked if I was in love! My skin just looks so healthy and glowing now. The Korean skincare routine changed my life.",
    stayDuration: "5 days",
    treatments: ["Glass Skin Facial", "Skin Boosters"],
  },
];

export const treatmentFilters = [
  { label: "All Results", value: "all" },
  { label: "Glass Skin Facial", value: "korean-glass-skin-facial" },
  { label: "Skin Boosters", value: "skin-booster-therapy" },
  { label: "Rejuran Healer", value: "rejuran-healer" },
  { label: "Laser Toning", value: "laser-toning" },
  { label: "Thread Lift", value: "thread-lift" },
  { label: "Anti-Aging Combination", value: "anti-aging-combination" },
];

export function getResultsByTreatment(treatmentSlug: string): GalleryResult[] {
  if (treatmentSlug === "all") return galleryResults;
  return galleryResults.filter((r) => r.treatmentSlug === treatmentSlug);
}
