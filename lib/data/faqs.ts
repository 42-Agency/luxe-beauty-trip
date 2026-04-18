export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    slug: "travel",
    title: "Travel & Logistics",
    description: "Planning your journey to Seoul",
    icon: "airplane",
    faqs: [
      {
        question: "How far in advance should I book my trip?",
        answer:
          "We recommend booking 4-6 weeks in advance to ensure availability at your preferred clinics and accommodations. For popular travel seasons (spring cherry blossom, autumn foliage), 8-12 weeks is ideal. However, we can accommodate shorter timelines when needed.",
      },
      {
        question: "Do I need a visa to visit South Korea?",
        answer:
          "US and Canadian citizens can visit South Korea visa-free for up to 90 days. Citizens of most Western countries have similar arrangements. We'll confirm visa requirements during your consultation based on your nationality.",
      },
      {
        question: "What's the best time of year to visit Seoul?",
        answer:
          "Seoul is beautiful year-round. Spring (April-May) offers cherry blossoms, autumn (September-November) has stunning foliage. Summer can be hot and humid, while winter is cold but festive. For treatment recovery, milder seasons are ideal as you'll want to avoid extreme sun.",
      },
      {
        question: "Do you book flights?",
        answer:
          "We provide flight coordination and recommendations, but flights are typically not included in our packages. We can arrange business class bookings through our travel partners if desired. This gives you flexibility on timing and airline preferences.",
      },
      {
        question: "What about jet lag?",
        answer:
          "Seoul is 13-16 hours ahead of North America. We build recovery time into your first day—no treatments are scheduled for arrival day. Most clients adjust within 2-3 days. We'll provide jet lag management tips before your trip.",
      },
      {
        question: "Is Seoul safe for solo female travelers?",
        answer:
          "Absolutely. South Korea is consistently ranked as one of the safest countries in the world. Seoul has excellent public transportation, low crime rates, and is very welcoming to tourists. Plus, you'll have our 24/7 support throughout your stay.",
      },
    ],
  },
  {
    slug: "treatments",
    title: "Treatments & Procedures",
    description: "Understanding your treatment options",
    icon: "sparkles",
    faqs: [
      {
        question: "Are Korean treatments safe?",
        answer:
          "Yes. South Korea has strict medical regulations and our partner clinics are among the most reputable in Seoul. They use FDA-approved or Korean-MFDS-approved products and follow rigorous safety protocols. Many Korean treatments are simply newer or more advanced than what's available in North America.",
      },
      {
        question: "Why aren't these treatments available in the US?",
        answer:
          "FDA approval is a lengthy and expensive process. Many treatments (like Rejuran/PDRN) are widely used and approved in Asia and Europe but haven't gone through US approval yet. Others use techniques that are simply more advanced due to Korea's leadership in dermatology.",
      },
      {
        question: "How do I know which treatments are right for me?",
        answer:
          "During your complimentary consultation, we'll discuss your concerns, skin type, medical history, and goals. We then collaborate with our Seoul partners to create a customized treatment plan. You'll never be pushed toward unnecessary procedures.",
      },
      {
        question: "What if I have allergies or sensitivities?",
        answer:
          "Please disclose all allergies and sensitivities during consultation. Our partner clinics always perform patch tests when appropriate. If you have specific product allergies, we'll ensure alternatives are used.",
      },
      {
        question: "Can I combine multiple treatments?",
        answer:
          "Yes, combination protocols are actually a Korean specialty. Layering complementary treatments often produces better results than single procedures. Your treatment plan will be sequenced for optimal results and safety.",
      },
      {
        question: "What about Botox and fillers?",
        answer:
          "Korean clinics are renowned for natural-looking injectables. If you're interested in Botox or fillers, they can be incorporated into your treatment plan. Korean technique emphasizes subtle enhancement over dramatic change.",
      },
    ],
  },
  {
    slug: "booking",
    title: "Booking & Payments",
    description: "How to secure your journey",
    icon: "calendar",
    faqs: [
      {
        question: "What's the booking process?",
        answer:
          "1) Book a free consultation call. 2) We design your custom treatment and travel plan. 3) You review and approve the plan. 4) Pay the deposit to secure dates. 5) We coordinate everything. 6) You arrive and enjoy your transformation.",
      },
      {
        question: "What's the deposit and payment schedule?",
        answer:
          "A 30% deposit secures your booking. The remaining 70% is due 14 days before departure. We accept major credit cards, wire transfers, and can arrange payment plans for larger packages.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Life happens. We offer free rescheduling up to 30 days before your trip. Between 14-30 days, a small rebooking fee applies. Within 14 days, we'll work with you on a case-by-case basis, though clinic deposits may be non-refundable.",
      },
      {
        question: "What's your cancellation policy?",
        answer:
          "Cancellations 30+ days before departure receive a full refund minus a modest admin fee. 14-30 days: 50% refund. Within 14 days: credit toward a future trip. Travel insurance (included in Signature and Luxe packages) covers emergency cancellations.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No. Your quoted package price includes everything listed. We're transparent about what's included and what's not. Optional add-ons and personal expenses (shopping, additional meals) are clearly communicated as separate.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, for larger packages we offer payment plans with 3-4 installments. This must be arranged at least 60 days before departure so all payments are complete before your trip.",
      },
    ],
  },
  {
    slug: "safety",
    title: "Safety & Medical",
    description: "Your wellbeing is our priority",
    icon: "shield",
    faqs: [
      {
        question: "What credentials do the clinics have?",
        answer:
          "Our partner clinics are licensed by Korea's Ministry of Health and Welfare. Lead practitioners are board-certified dermatologists or plastic surgeons with extensive experience. We personally vet every clinic and regularly visit to ensure standards.",
      },
      {
        question: "What if something goes wrong during treatment?",
        answer:
          "Complications are rare with our reputable partners, but we're prepared. Your guide stays with you during treatments. Our 24/7 emergency line connects you to medical support. Travel insurance (included in most packages) covers medical emergencies.",
      },
      {
        question: "Can I see the clinics beforehand?",
        answer:
          "Absolutely. We provide photos, virtual tours, and detailed information about each recommended clinic. Some clients even schedule video calls with practitioners before committing to specific treatments.",
      },
      {
        question: "What about COVID-19 protocols?",
        answer:
          "Korean clinics maintain high hygiene standards. Current entry requirements to South Korea can be checked on official government sites. We'll provide up-to-date guidance before your trip.",
      },
      {
        question: "I have a medical condition. Can I still travel?",
        answer:
          "Possibly, depending on the condition. Please disclose all medical conditions during consultation. We'll coordinate with your home physician and Seoul practitioners to determine what's safe and appropriate.",
      },
      {
        question: "Is there a language barrier with medical staff?",
        answer:
          "Our partner clinics have English-speaking staff, and your personal guide/translator accompanies you to all appointments. You'll always understand what's happening and be able to communicate your preferences clearly.",
      },
    ],
  },
  {
    slug: "aftercare",
    title: "Aftercare & Results",
    description: "Maintaining your transformation",
    icon: "heart",
    faqs: [
      {
        question: "How long until I see results?",
        answer:
          "It depends on the treatment. Glass Skin Facials show immediate glow. Skin boosters and laser toning improve over 2-4 weeks. Rejuran and thread lifts show progressive improvement over 2-3 months as collagen builds.",
      },
      {
        question: "What aftercare will I need?",
        answer:
          "We provide detailed aftercare instructions for every procedure. Generally, you'll need gentle skincare, strict sun protection, and sometimes specific products. We'll recommend Korean products you can purchase during your trip or ship to you at home.",
      },
      {
        question: "Can I wear makeup after treatments?",
        answer:
          "Depends on the treatment. Facials often allow mineral makeup after 24 hours. Injections may require 24-48 hours without makeup. Thread lifts need 3-5 days. Your practitioner will give specific guidance.",
      },
      {
        question: "What if I have questions after returning home?",
        answer:
          "We provide follow-up support for all clients. Essential packages include 3 months of follow-up; Signature includes 6 months; Luxe includes 12 months. You can reach us via email, WhatsApp, or scheduled video calls.",
      },
      {
        question: "How long do results last?",
        answer:
          "Glass Skin Facial: 2-4 weeks. Skin Boosters: 6-12 months. Rejuran: 6-12 months. Laser Toning: several months with maintenance. Thread Lift: 1-2 years. Results vary based on skin type and lifestyle factors.",
      },
      {
        question: "Will I need follow-up treatments?",
        answer:
          "Many clients return annually for maintenance or new treatments. Some treatments (like laser toning for melasma) benefit from periodic touch-ups. We'll discuss long-term planning during your initial treatment.",
      },
    ],
  },
];

export function getFAQCategoryBySlug(slug: string): FAQCategory | undefined {
  return faqCategories.find((c) => c.slug === slug);
}

export function getAllFAQs(): FAQ[] {
  return faqCategories.flatMap((c) => c.faqs);
}
