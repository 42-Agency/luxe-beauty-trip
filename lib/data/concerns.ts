export interface Concern {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  causes: string[];
  recommendedTreatments: {
    slug: string;
    name: string;
    why: string;
  }[];
  homecareTips: string[];
  image: string;
  beforeAfterImages?: { before: string; after: string }[];
  faqs: { question: string; answer: string }[];
}

export const concerns: Concern[] = [
  {
    slug: "acne-scars",
    title: "Acne Scars",
    subtitle: "Smooth, refined skin is possible",
    description:
      "Korean clinics offer advanced treatments for acne scarring that go beyond what's available in the West. From PDRN therapy to fractional lasers, we'll create a protocol tailored to your scar type.",
    longDescription:
      "Acne scars are among the most stubborn skin concerns—and among the most emotionally impactful. Whether you have ice pick scars, boxcar scars, rolling scars, or post-inflammatory hyperpigmentation (PIH), Korean dermatology offers solutions that can dramatically improve your skin's texture and appearance.\n\nKorean clinics excel at treating acne scars because they've developed combination protocols that address scars from multiple angles simultaneously. Rather than relying on a single treatment, they layer therapies: fractional lasers to resurface and stimulate collagen, subcision to release tethered scars, PDRN (Rejuran) to regenerate tissue, and skin boosters to improve overall skin quality.\n\nMany of these treatments and techniques aren't widely available in North America, or require multiple providers. In Seoul, you can access comprehensive scar treatment in a single clinic, with practitioners who have treated thousands of cases.",
    causes: [
      "Inflammatory acne (cysts, nodules)",
      "Picking or squeezing pimples",
      "Delayed acne treatment",
      "Genetic predisposition",
      "Darker skin types (higher PIH risk)",
    ],
    recommendedTreatments: [
      {
        slug: "rejuran-healer",
        name: "Rejuran Healer (PDRN)",
        why: "Regenerates skin at cellular level, improves scar texture",
      },
      {
        slug: "laser-toning",
        name: "Fractional Laser",
        why: "Resurfaces skin, stimulates collagen in scar tissue",
      },
      {
        slug: "skin-booster-therapy",
        name: "Skin Boosters",
        why: "Hydrates and plumps skin, softening scar appearance",
      },
    ],
    homecareTips: [
      "Use retinoids to promote cell turnover",
      "Vitamin C serum for PIH",
      "Strict SPF 50+ to prevent darkening",
      "Avoid picking at any breakouts",
      "Consider Korean 'cica' (centella) products for healing",
    ],
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop",
    faqs: [
      {
        question: "Can acne scars be completely removed?",
        answer:
          "While complete removal is rare, significant improvement (50-80%+) is achievable with the right protocol. Many clients see their scars become barely noticeable.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "Typically 3-6 sessions over multiple visits or an intensive protocol during a week-long stay. Your consultation will clarify the best approach.",
      },
      {
        question: "I still have active acne. Can I treat scars?",
        answer:
          "Ideally, active acne should be controlled first. Korean clinics can address both—treating active acne while beginning scar treatment with appropriate modalities.",
      },
    ],
  },
  {
    slug: "hyperpigmentation",
    title: "Hyperpigmentation & Dark Spots",
    subtitle: "Even-toned, luminous skin",
    description:
      "From sun damage to melasma, Korean clinics specialize in treating stubborn pigmentation with protocols developed specifically for diverse skin types.",
    longDescription:
      "Hyperpigmentation—whether from sun damage, hormones (melasma), or post-inflammatory marks—can be incredibly frustrating to treat. Aggressive approaches often backfire, causing more pigmentation. Korean dermatology has pioneered gentle, effective protocols that treat pigmentation safely across all skin types.\n\nThe key is understanding that not all pigmentation is the same. Sun spots respond differently than melasma; PIH requires different approaches than general uneven tone. Korean clinics assess your specific pigmentation type and create targeted protocols combining laser toning, topical treatments, and sometimes oral supplements.\n\nLaser toning, in particular, was developed in Korea specifically because standard laser settings caused problems in Asian skin. These refined techniques benefit everyone, especially those who've experienced worsening from previous treatments.",
    causes: [
      "Sun exposure (UV damage)",
      "Hormonal changes (pregnancy, birth control)",
      "Post-inflammatory hyperpigmentation (PIH)",
      "Aging and cumulative sun damage",
      "Certain medications",
    ],
    recommendedTreatments: [
      {
        slug: "laser-toning",
        name: "Laser Toning",
        why: "Gold standard for pigmentation, safe for all skin types",
      },
      {
        slug: "korean-glass-skin-facial",
        name: "Glass Skin Facial",
        why: "Brightening ingredients and hydration improve overall tone",
      },
      {
        slug: "rejuran-healer",
        name: "Rejuran Healer",
        why: "Improves skin quality and healing response",
      },
    ],
    homecareTips: [
      "SPF 50+ is non-negotiable, reapply every 2 hours",
      "Vitamin C serum in the morning",
      "Niacinamide for brightening",
      "Avoid harsh exfoliants that cause inflammation",
      "Consider tranexamic acid products for melasma",
    ],
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=1000&fit=crop",
    faqs: [
      {
        question: "Will my melasma ever fully go away?",
        answer:
          "Melasma is chronic and hormone-influenced, so 'cure' is the wrong framing. However, it can be controlled and significantly improved. Many clients achieve clear skin with maintenance treatments.",
      },
      {
        question: "I've tried lasers before and got worse. Why?",
        answer:
          "Aggressive laser settings can trigger more pigmentation in susceptible skin. Korean laser toning uses lower energy and more passes—a gentler approach that's safer for reactive skin.",
      },
      {
        question: "How important is sun protection really?",
        answer:
          "Critical. Even the best treatments will fail without strict sun protection. We're not exaggerating when we say SPF is 50% of the treatment.",
      },
    ],
  },
  {
    slug: "fine-lines-wrinkles",
    title: "Fine Lines & Wrinkles",
    subtitle: "Age gracefully, look refreshed",
    description:
      "Korean anti-aging approaches focus on skin quality over volume. The goal isn't erasing age—it's having the healthiest, most radiant version of your skin at any age.",
    longDescription:
      "The Korean approach to aging is fundamentally different from Western aesthetics. Rather than chasing frozen foreheads or exaggerated volume, Korean dermatology focuses on skin quality: hydration, elasticity, luminosity, and overall health. The result is aging gracefully while looking naturally refreshed.\n\nThis philosophy shapes treatment selection. Instead of heavy filler, Korean clinics favor skin boosters that improve hydration from within. Instead of aggressive resurfacing, they use gentle lasers with less downtime. PDRN treatments like Rejuran regenerate skin at the cellular level. Thread lifts provide lift without surgery.\n\nThe combination approach is key. No single treatment addresses all aspects of aging. Korean protocols layer treatments synergistically—addressing texture, hydration, pigmentation, and laxity together for comprehensive rejuvenation.",
    causes: [
      "Natural aging and collagen loss",
      "Sun damage (photoaging)",
      "Repetitive facial movements",
      "Smoking and environmental factors",
      "Dehydration and lifestyle factors",
    ],
    recommendedTreatments: [
      {
        slug: "anti-aging-combination",
        name: "Anti-Aging Combination Protocol",
        why: "Addresses aging from multiple angles for comprehensive results",
      },
      {
        slug: "skin-booster-therapy",
        name: "Skin Boosters",
        why: "Deep hydration plumps fine lines from within",
      },
      {
        slug: "thread-lift",
        name: "Thread Lift",
        why: "Lifts sagging without surgery, stimulates collagen",
      },
    ],
    homecareTips: [
      "Retinoids are the gold standard for anti-aging",
      "Hydration inside and out (drink water, use humectants)",
      "SPF prevents further photoaging",
      "Peptides support collagen production",
      "Korean essence layering for deep hydration",
    ],
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop",
    faqs: [
      {
        question: "At what age should I start anti-aging treatments?",
        answer:
          "Prevention is easier than correction. Many start skin boosters and gentle treatments in their late 20s-30s. There's no 'too early' for good skincare.",
      },
      {
        question: "Will I look 'done' or unnatural?",
        answer:
          "The Korean aesthetic prioritizes natural results. Our partner clinics specialize in subtle enhancement—you'll look refreshed, not worked on.",
      },
      {
        question: "How often do I need maintenance?",
        answer:
          "Depends on treatments. Skin boosters every 6-12 months, thread lifts every 1-2 years. Your practitioner will create a long-term plan.",
      },
    ],
  },
  {
    slug: "dull-skin",
    title: "Dull, Tired Skin",
    subtitle: "Reclaim your natural radiance",
    description:
      "If your skin looks flat, tired, or lackluster, Korean treatments can restore the bouncy, glowing complexion known as 'chok-chok' or 'mul-gwang.'",
    longDescription:
      "Dull skin is one of the most common complaints—and one of the most satisfying to treat. That flat, tired, lackluster appearance usually signals dehydration, sluggish cell turnover, and accumulated environmental damage. The good news? It responds beautifully to Korean beauty treatments.\n\nThe Korean ideal of 'chok-chok' (bouncy, hydrated) and 'mul-gwang' (water glow) is the opposite of dull skin. Achieving it requires addressing multiple factors: deep hydration, gentle exfoliation, improved circulation, and protection from further damage.\n\nThe Glass Skin Facial was essentially designed for this concern—layering hydration and brightening ingredients to create immediate luminosity. Combined with skin boosters for lasting hydration and gentle lasers to improve texture, dull skin can transform dramatically.",
    causes: [
      "Dehydration (internal and external)",
      "Slow cell turnover",
      "Environmental pollution",
      "Lack of sleep and stress",
      "Poor skincare routine",
    ],
    recommendedTreatments: [
      {
        slug: "korean-glass-skin-facial",
        name: "Glass Skin Facial",
        why: "Immediate luminosity and deep hydration",
      },
      {
        slug: "skin-booster-therapy",
        name: "Skin Boosters",
        why: "Long-lasting hydration from within",
      },
      {
        slug: "laser-toning",
        name: "Laser Toning",
        why: "Improves texture and promotes cellular renewal",
      },
    ],
    homecareTips: [
      "Double cleansing to remove pollution and buildup",
      "Exfoliate 1-2x weekly (gentle acids)",
      "Layer hydrating essences (7-skin method)",
      "Vitamin C for brightening",
      "Sleeping masks for overnight hydration",
    ],
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=1000&fit=crop",
    faqs: [
      {
        question: "How quickly will I see results?",
        answer:
          "The Glass Skin Facial delivers immediate glow. For lasting radiance, a series of treatments over 2-4 weeks creates cumulative improvement.",
      },
      {
        question: "Can dull skin be fixed with products alone?",
        answer:
          "Products help maintain results, but professional treatments provide deeper exfoliation, hydration, and stimulation that products can't match.",
      },
      {
        question: "I drink plenty of water. Why is my skin still dull?",
        answer:
          "Internal hydration is important, but skin hydration also requires proper products and treatments that strengthen the skin barrier and deliver hydration directly.",
      },
    ],
  },
  {
    slug: "large-pores",
    title: "Large Pores",
    subtitle: "Refined, smooth texture",
    description:
      "While you can't eliminate pores, Korean treatments can dramatically minimize their appearance, creating the smooth, refined texture you see in K-beauty ads.",
    longDescription:
      "Large pores are one of the most requested concerns at Korean clinics. While pore size is largely genetic and can't be permanently changed, their appearance can be dramatically minimized through professional treatments that tighten skin, control oil, and improve overall texture.\n\nKorean clinics use a multi-pronged approach: laser treatments to tighten the skin around pores and reduce sebum production, skin boosters to improve hydration (paradoxically, hydrated skin has less visible pores), and specialized facials that deep-clean and refine. Some clinics offer 'pore tightening' protocols that combine multiple modalities in a single session.\n\nThe glass skin trend has driven significant innovation in pore treatment—after all, glass-like skin requires an even, refined surface. Korean practitioners have refined techniques specifically for this concern.",
    causes: [
      "Genetics (biggest factor)",
      "Excess sebum production",
      "Loss of elasticity with age",
      "Sun damage",
      "Clogged pores stretching over time",
    ],
    recommendedTreatments: [
      {
        slug: "laser-toning",
        name: "Laser Toning",
        why: "Tightens skin, reduces sebum, refines texture",
      },
      {
        slug: "korean-glass-skin-facial",
        name: "Glass Skin Facial",
        why: "Deep cleansing and hydration minimize pore appearance",
      },
      {
        slug: "skin-booster-therapy",
        name: "Skin Boosters",
        why: "Hydrated skin has plumper texture, less visible pores",
      },
    ],
    homecareTips: [
      "Niacinamide regulates sebum and refines pores",
      "BHA (salicylic acid) keeps pores clear",
      "Retinoids improve cell turnover and tighten skin",
      "Always remove makeup thoroughly",
      "Clay masks 1-2x weekly for deep cleaning",
    ],
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=1000&fit=crop",
    faqs: [
      {
        question: "Can pores be permanently shrunk?",
        answer:
          "Pore size is genetic and can't be permanently changed. However, treatments can minimize their appearance by tightening surrounding skin and keeping them clear.",
      },
      {
        question: "Why do my pores look bigger with age?",
        answer:
          "As skin loses collagen and elasticity, pores appear larger. Sun damage accelerates this. Anti-aging treatments that boost collagen also help minimize pores.",
      },
      {
        question: "Will this help with blackheads too?",
        answer:
          "Yes. Deep cleansing facials clear congestion, and laser treatments reduce sebum production, both of which help prevent blackheads.",
      },
    ],
  },
  {
    slug: "sagging-skin",
    title: "Sagging & Loss of Firmness",
    subtitle: "Lifted, defined contours",
    description:
      "Korean non-surgical lifting techniques—especially thread lifts—offer dramatic improvement in sagging without the downtime, risks, or 'done' look of surgery.",
    longDescription:
      "Sagging skin, jowls, and loss of jawline definition are among the most visible signs of aging. While surgery remains an option, Korean clinics have pioneered non-surgical alternatives that deliver impressive lifting results with minimal downtime.\n\nThread lifts are the star of non-surgical lifting in Korea. Using dissolvable PDO or PCL threads, practitioners can physically reposition sagging tissue while stimulating collagen for continued tightening. Korean technique is considered among the world's best, with natural-looking results that avoid the 'pulled' appearance.\n\nBeyond threads, combination protocols using HIFU (High-Intensity Focused Ultrasound), radiofrequency, and skin boosters can address laxity from multiple angles. For those not ready for threads, these gentler options provide noticeable improvement.",
    causes: [
      "Natural collagen and elastin loss",
      "Gravity over time",
      "Fat pad migration",
      "Bone resorption",
      "Weight fluctuations",
    ],
    recommendedTreatments: [
      {
        slug: "thread-lift",
        name: "Thread Lift",
        why: "Physical lifting with collagen stimulation, no surgery",
      },
      {
        slug: "anti-aging-combination",
        name: "Anti-Aging Combination",
        why: "Layer multiple modalities for comprehensive lifting",
      },
      {
        slug: "skin-booster-therapy",
        name: "Skin Boosters",
        why: "Improves skin quality and subtle plumping",
      },
    ],
    homecareTips: [
      "Retinoids support collagen production",
      "Peptides and growth factors in serums",
      "Facial massage and gua sha (gently)",
      "Maintain stable weight",
      "Sleep on your back if possible",
    ],
    image:
      "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&h=1000&fit=crop",
    faqs: [
      {
        question: "Am I too young/old for a thread lift?",
        answer:
          "Thread lifts work best for mild to moderate sagging, typically ages 35-60. Severe sagging may require surgery for best results. Consultation determines candidacy.",
      },
      {
        question: "How long does a thread lift last?",
        answer:
          "Threads dissolve in 6-12 months, but collagen stimulation continues. Results typically last 1-2 years. Some clients do maintenance threads annually.",
      },
      {
        question: "Can I see what I'll look like before committing?",
        answer:
          "Korean clinics often do a 'preview' by manually lifting your skin during consultation. You can see the potential result before deciding.",
      },
    ],
  },
];

export function getConcernBySlug(slug: string): Concern | undefined {
  return concerns.find((c) => c.slug === slug);
}

export function getAllConcernSlugs(): string[] {
  return concerns.map((c) => c.slug);
}
