export interface PressFeature {
  id: string;
  publication: string;
  logo: string;
  title: string;
  excerpt: string;
  date: string;
  url?: string;
}

export interface PressQuote {
  quote: string;
  publication: string;
  author?: string;
}

export const pressFeatures: PressFeature[] = [
  {
    id: "press-1",
    publication: "Condé Nast Traveler",
    logo: "/press/conde-nast.svg",
    title: "The New Frontier of Beauty Tourism: Why Seoul Is the Ultimate Destination",
    excerpt:
      "Luxe Beauty Trip is leading a new wave of beauty tourism, combining the expertise of Seoul's top dermatologists with the luxury of a five-star vacation experience.",
    date: "March 2024",
  },
  {
    id: "press-2",
    publication: "Vogue",
    logo: "/press/vogue.svg",
    title: "Korean Glass Skin: How to Get the Look Without Living in Seoul",
    excerpt:
      "For those serious about achieving the coveted 'glass skin' look, services like Luxe Beauty Trip offer an immersive approach that goes beyond what any product can deliver.",
    date: "February 2024",
  },
  {
    id: "press-3",
    publication: "Harper's Bazaar",
    logo: "/press/harpers-bazaar.svg",
    title: "The Rise of Medical Tourism: Beauty Edition",
    excerpt:
      "Luxe Beauty Trip has carved out a niche in the luxury medical tourism space, offering bespoke Korean skincare journeys for discerning clients.",
    date: "January 2024",
  },
  {
    id: "press-4",
    publication: "Forbes Travel",
    logo: "/press/forbes.svg",
    title: "Wellness Tourism Trends to Watch in 2024",
    excerpt:
      "Korean beauty tourism is having a moment, and concierge services like Luxe Beauty Trip are making it accessible to American travelers.",
    date: "December 2023",
  },
  {
    id: "press-5",
    publication: "Allure",
    logo: "/press/allure.svg",
    title: "We Tried Korean Skin Treatments You Can't Get in America",
    excerpt:
      "From Rejuran to advanced laser toning, the treatments available in Seoul are years ahead of what's FDA-approved in the US. Luxe Beauty Trip helped us navigate the options.",
    date: "November 2023",
  },
  {
    id: "press-6",
    publication: "Travel + Leisure",
    logo: "/press/travel-leisure.svg",
    title: "The Best Beauty Destinations Around the World",
    excerpt:
      "Seoul tops our list for skincare enthusiasts, and services like Luxe Beauty Trip are making the journey seamless for first-time visitors.",
    date: "October 2023",
  },
];

export const pressQuotes: PressQuote[] = [
  {
    quote:
      "The gold standard for Korean beauty tourism. Luxe Beauty Trip has perfected the art of combining world-class skincare with an unforgettable travel experience.",
    publication: "Condé Nast Traveler",
  },
  {
    quote:
      "If you're serious about Korean skincare, this is the way to experience it. The attention to detail is remarkable.",
    publication: "Vogue",
  },
  {
    quote:
      "A game-changer for anyone who's ever wanted to experience Korean dermatology firsthand.",
    publication: "Allure",
  },
  {
    quote:
      "The future of beauty tourism is here, and it speaks Korean.",
    publication: "Harper's Bazaar",
  },
];

export const publicationLogos = [
  { name: "Condé Nast Traveler", logo: "/press/conde-nast.svg" },
  { name: "Vogue", logo: "/press/vogue.svg" },
  { name: "Harper's Bazaar", logo: "/press/harpers-bazaar.svg" },
  { name: "Forbes", logo: "/press/forbes.svg" },
  { name: "Allure", logo: "/press/allure.svg" },
  { name: "Travel + Leisure", logo: "/press/travel-leisure.svg" },
  { name: "Elle", logo: "/press/elle.svg" },
  { name: "Goop", logo: "/press/goop.svg" },
];

export const mediaContact = {
  name: "Media Inquiries",
  email: "press@luxebeautytrip.com",
  phone: "+1 (310) 555-0192",
  pressKitUrl: "/press-kit.pdf",
};
