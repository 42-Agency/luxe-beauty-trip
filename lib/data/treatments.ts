export interface Treatment {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  procedure: {
    duration: string;
    downtime: string;
    sessions: string;
    results: string;
  };
  idealFor: string[];
  price: {
    range: string;
    note: string;
  };
  image: string;
  galleryImages: string[];
  faqs: { question: string; answer: string }[];
}

export const treatments: Treatment[] = [
  {
    slug: "korean-glass-skin-facial",
    title: "Korean Glass Skin Facial",
    subtitle: "The signature K-beauty glow",
    description:
      "Achieve the coveted 'glass skin' look—luminous, dewy, and impossibly smooth. This multi-step hydration ritual combines traditional Korean techniques with cutting-edge ingredients.",
    longDescription:
      "The Korean Glass Skin Facial is the treatment that put K-beauty on the global map. 'Glass skin' (or 'mul-gwang' in Korean) refers to skin so hydrated and refined that it appears transparent and reflective, like glass. This isn't just a facial—it's a complete skin transformation protocol developed over decades in Seoul's top dermatology clinics.\n\nThe treatment begins with a thorough double cleanse using oil-based and water-based cleansers to remove every trace of impurity. Next, a gentle exfoliation reveals fresh skin cells. The heart of the treatment involves layering multiple hydrating essences, serums, and ampoules—each penetrating deeper than the last. LED therapy and oxygen infusion accelerate absorption. The session concludes with a custom sheet mask and intensive moisturizer lock-in.",
    benefits: [
      "Intense, multi-layer hydration",
      "Refined pores and smoother texture",
      "Luminous, dewy finish",
      "Improved skin elasticity",
      "Reduced fine lines from dehydration",
      "Long-lasting glow (2-4 weeks)",
    ],
    procedure: {
      duration: "90-120 minutes",
      downtime: "None",
      sessions: "Single session or series of 3-6",
      results: "Immediate glow, cumulative improvement",
    },
    idealFor: [
      "Dehydrated or dull skin",
      "First-time K-beauty experience",
      "Pre-event glow",
      "All skin types",
    ],
    price: {
      range: "$350 - $500",
      note: "Per session. Package pricing available.",
    },
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&h=400&fit=crop",
    ],
    faqs: [
      {
        question: "How long does the glass skin effect last?",
        answer:
          "The immediate dewy glow lasts 1-2 weeks. With a series of treatments and proper home care, you can maintain the glass skin look long-term.",
      },
      {
        question: "Is this suitable for oily skin?",
        answer:
          "Absolutely. Glass skin isn't about adding oil—it's about deep hydration. Properly hydrated oily skin actually produces less excess sebum.",
      },
      {
        question: "Can I wear makeup after?",
        answer:
          "We recommend letting your skin breathe for 24 hours, but if needed, mineral makeup can be applied after 4-6 hours.",
      },
    ],
  },
  {
    slug: "skin-booster-therapy",
    title: "Skin Booster Therapy",
    subtitle: "Deep hydration from within",
    description:
      "Micro-injections of hyaluronic acid deliver intense hydration directly into the skin, improving texture, elasticity, and natural radiance from the inside out.",
    longDescription:
      "Skin Booster Therapy represents the next evolution in hydration treatments. Unlike topical products that sit on the surface, skin boosters deliver pharmaceutical-grade hyaluronic acid directly into the dermis through precise micro-injections. This technique, perfected in Korean clinics, creates a reservoir of hydration that plumps the skin from within.\n\nThe treatment uses ultra-fine needles or advanced injection devices to deposit small droplets of HA throughout the treatment area. Popular formulations include Rejuran (PDRN-based), Profhilo, and Juvederm Volite. The result is skin that looks naturally hydrated, bouncy, and youthful—without the 'done' look of traditional fillers.\n\nKorean practitioners are renowned for their injection technique, using grid patterns that ensure even distribution and natural results. Many of these formulations and techniques aren't yet available in the US, making Seoul a destination for those seeking the most advanced options.",
    benefits: [
      "Deep dermal hydration",
      "Improved skin texture and tone",
      "Reduced fine lines",
      "Enhanced skin elasticity",
      "Natural, undetectable results",
      "Stimulates collagen production",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "1-3 days (minor bumps)",
      sessions: "3 sessions, 4 weeks apart",
      results: "Visible at 2 weeks, optimal at 3 months",
    },
    idealFor: [
      "Dehydrated, crepey skin",
      "Early signs of aging",
      "Smokers or frequent travelers",
      "Those wanting subtle enhancement",
    ],
    price: {
      range: "$400 - $800",
      note: "Per session. Series of 3 recommended.",
    },
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop",
    ],
    faqs: [
      {
        question: "Does it hurt?",
        answer:
          "Topical numbing cream is applied beforehand. Most clients describe the sensation as tiny pinpricks—very tolerable.",
      },
      {
        question: "How is this different from filler?",
        answer:
          "Fillers add volume to specific areas. Skin boosters improve overall skin quality without adding volume or changing facial structure.",
      },
      {
        question: "When will I see results?",
        answer:
          "Initial hydration is visible within days. Full results develop over 2-4 weeks as collagen stimulation kicks in.",
      },
    ],
  },
  {
    slug: "rejuran-healer",
    title: "Rejuran Healer (PDRN Therapy)",
    subtitle: "Salmon DNA skin regeneration",
    description:
      "Korea's cult-favorite treatment uses polynucleotides derived from salmon DNA to regenerate skin at the cellular level. Healing, firming, and rejuvenating in one.",
    longDescription:
      "Rejuran Healer is arguably Korea's most famous skin treatment—and for good reason. This innovative therapy uses PDRN (polydeoxyribonucleotide) extracted from salmon DNA to trigger your skin's natural healing and regeneration processes. The treatment has achieved cult status in Asia and is now sought after by beauty enthusiasts worldwide.\n\nPDRN works by activating adenosine A2A receptors, which stimulate fibroblast activity and collagen synthesis. In simpler terms: it tells your skin cells to behave younger. The result is improved elasticity, reduced scarring, better texture, and an overall healthier skin appearance.\n\nKorean clinics offer various Rejuran formulations: Rejuran Healer for general rejuvenation, Rejuran S for scars, Rejuran I for fine lines around eyes, and Rejuran HB for intense hydration. Your practitioner will customize the treatment based on your specific concerns.",
    benefits: [
      "Cellular-level skin regeneration",
      "Improved acne scar appearance",
      "Enhanced skin thickness and elasticity",
      "Reduced fine lines and wrinkles",
      "Better overall skin health",
      "Long-lasting results (6-12 months)",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "2-5 days (small bumps)",
      sessions: "3-4 sessions, 2-4 weeks apart",
      results: "Progressive improvement over 3-6 months",
    },
    idealFor: [
      "Acne scarring",
      "Aging skin",
      "Thin or fragile skin",
      "Post-procedure healing",
    ],
    price: {
      range: "$500 - $900",
      note: "Per session. Full course recommended.",
    },
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop",
    ],
    faqs: [
      {
        question: "Is salmon DNA safe?",
        answer:
          "Yes. PDRN is highly purified and biocompatible. It's been used safely in medicine for wound healing for decades. Allergic reactions are extremely rare.",
      },
      {
        question: "Why isn't this available in the US?",
        answer:
          "Rejuran is approved in Korea and many Asian countries but hasn't completed FDA approval in the US. This is one reason Seoul is a destination for this treatment.",
      },
      {
        question: "Can I combine this with other treatments?",
        answer:
          "Absolutely. Rejuran pairs well with laser treatments, and many Korean protocols combine them for enhanced results.",
      },
    ],
  },
  {
    slug: "laser-toning",
    title: "Laser Toning",
    subtitle: "Precision pigment correction",
    description:
      "Low-fluence laser treatments target pigmentation, melasma, and uneven skin tone with minimal downtime. Korean clinics have perfected this technique for Asian and diverse skin types.",
    longDescription:
      "Laser Toning (often called 'Laser Genesis' or 'Hollywood Laser' in Korea) is a gentle yet effective approach to treating pigmentation concerns. Unlike aggressive laser treatments that require significant downtime, laser toning uses low-energy settings delivered in multiple passes to gradually break up melanin and stimulate collagen.\n\nKorean dermatologists pioneered this approach specifically because aggressive lasers often cause post-inflammatory hyperpigmentation (PIH) in Asian skin. The same careful protocols benefit all skin types, especially those with melasma or stubborn pigmentation that hasn't responded to other treatments.\n\nThe treatment is often performed with Q-switched Nd:YAG lasers, which target melanin without damaging surrounding tissue. Sessions are quick and comfortable—many clients describe it as a warm, tingling sensation. Results are cumulative, with most seeing significant improvement after 5-10 sessions.",
    benefits: [
      "Reduced hyperpigmentation",
      "Melasma improvement",
      "Even skin tone",
      "Minimized pores",
      "Brighter complexion",
      "Safe for darker skin tones",
    ],
    procedure: {
      duration: "20-30 minutes",
      downtime: "None to minimal redness",
      sessions: "5-10 sessions, 1-2 weeks apart",
      results: "Gradual improvement over course",
    },
    idealFor: [
      "Melasma",
      "Sun damage",
      "Post-acne marks",
      "Uneven skin tone",
      "Asian and diverse skin types",
    ],
    price: {
      range: "$200 - $400",
      note: "Per session. Packages of 5-10 common.",
    },
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
    ],
    faqs: [
      {
        question: "Will my melasma come back?",
        answer:
          "Melasma is a chronic condition often triggered by hormones and sun. Laser toning can significantly improve it, but maintenance sessions and strict sun protection are key to lasting results.",
      },
      {
        question: "Is this safe for dark skin?",
        answer:
          "Yes. Korean laser toning protocols were developed with pigmentation safety in mind. Our partner clinics regularly treat Fitzpatrick skin types IV-VI.",
      },
      {
        question: "Can I go in the sun after?",
        answer:
          "Sun protection is critical during your treatment course. We recommend SPF 50+ daily and avoiding direct sun exposure.",
      },
    ],
  },
  {
    slug: "thread-lift",
    title: "Thread Lift",
    subtitle: "Non-surgical face lift",
    description:
      "Dissolvable PDO threads lift and tighten sagging skin, stimulating collagen for natural-looking rejuvenation. Korean clinics lead the world in thread lift techniques.",
    longDescription:
      "The Thread Lift is Korea's answer to the surgical facelift—without the surgery. Using dissolvable PDO (polydioxanone) or PCL (polycaprolactone) threads, practitioners can physically lift sagging tissue while simultaneously stimulating collagen production for long-term tightening.\n\nKorean clinicians have developed sophisticated thread patterns and insertion techniques that create natural-looking lifts without the 'pulled' appearance sometimes seen with surgery. Different thread types serve different purposes: barbed threads for lifting, smooth threads for collagen stimulation, and mesh threads for volume.\n\nThe procedure is performed under local anesthesia and takes 30-60 minutes depending on the treatment area. Threads dissolve over 6-12 months, but the collagen stimulation continues, with results lasting 1-2 years. Common treatment areas include the jawline, cheeks, neck, and brow.",
    benefits: [
      "Immediate lifting effect",
      "Continued collagen stimulation",
      "Non-surgical, minimal downtime",
      "Natural-looking results",
      "Treats jowls and sagging",
      "Results last 1-2 years",
    ],
    procedure: {
      duration: "30-60 minutes",
      downtime: "3-7 days (swelling, bruising)",
      sessions: "Single session",
      results: "Immediate lift, improves over 3 months",
    },
    idealFor: [
      "Mild to moderate sagging",
      "Jowls and jawline definition",
      "Those not ready for surgery",
      "Ages 35-55 typically",
    ],
    price: {
      range: "$1,500 - $4,000",
      note: "Depends on areas and thread count.",
    },
    image:
      "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
    ],
    faqs: [
      {
        question: "How painful is it?",
        answer:
          "Local anesthesia numbs the treatment area. You may feel pressure and tugging but not pain. Post-procedure discomfort is manageable with over-the-counter pain relievers.",
      },
      {
        question: "Can others tell I had it done?",
        answer:
          "Initial swelling subsides in a week. After that, results look natural—you'll simply appear refreshed and lifted, not 'worked on.'",
      },
      {
        question: "What if I don't like the results?",
        answer:
          "Threads dissolve naturally over time. If you're unhappy, the effect will gradually diminish. That said, proper consultation ensures realistic expectations.",
      },
    ],
  },
  {
    slug: "anti-aging-combination",
    title: "Anti-Aging Combination Protocol",
    subtitle: "The complete rejuvenation",
    description:
      "Korean clinics excel at combining multiple modalities—lasers, injectables, and facials—into customized protocols that address aging from every angle.",
    longDescription:
      "Korean dermatology's secret weapon isn't any single treatment—it's the art of combination. While Western aesthetics often focuses on one 'hero' procedure, Korean clinics layer multiple treatments synergistically for comprehensive rejuvenation that looks natural and lasts longer.\n\nA typical anti-aging combination protocol might include: laser toning for pigmentation and texture, skin boosters for deep hydration, Rejuran for cellular regeneration, and a thread lift for structural support. Treatments are sequenced strategically—some in a single session, others spaced for optimal healing and results.\n\nThis approach requires practitioners who understand how treatments interact and can customize protocols for individual needs. Our partner clinics have refined these combinations over thousands of patients, creating signature protocols that deliver results exceeding any single treatment alone.",
    benefits: [
      "Addresses multiple aging concerns",
      "Synergistic treatment effects",
      "Customized to your needs",
      "More natural-looking results",
      "Long-lasting improvement",
      "Efficient use of treatment time",
    ],
    procedure: {
      duration: "2-4 hours (multiple treatments)",
      downtime: "Varies by protocol (3-7 days typical)",
      sessions: "Custom plan over your stay",
      results: "Progressive over 3-6 months",
    },
    idealFor: [
      "Multiple aging concerns",
      "Those wanting comprehensive improvement",
      "Making the most of Seoul trip",
      "Ages 40+",
    ],
    price: {
      range: "$3,000 - $8,000",
      note: "Full protocol. Customized to your plan.",
    },
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
    ],
    faqs: [
      {
        question: "How do you decide which treatments to combine?",
        answer:
          "During your consultation, we assess your concerns, skin condition, timeline, and goals. Your custom protocol is designed by our clinical team in consultation with our Seoul partners.",
      },
      {
        question: "Is it safe to do multiple treatments?",
        answer:
          "Yes, when properly sequenced by experienced practitioners. Korean clinics have extensive experience with combination protocols and understand optimal treatment spacing.",
      },
      {
        question: "How long do I need to stay in Seoul?",
        answer:
          "Most combination protocols require 5-7 days. Some treatments are done on the same day; others need spacing for optimal results.",
      },
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs(): string[] {
  return treatments.map((t) => t.slug);
}
