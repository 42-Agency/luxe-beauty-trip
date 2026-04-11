export interface Practitioner {
  name: string;
  title: string;
  specialty: string;
  credentials: string[];
  image: string;
}

export interface Clinic {
  id: string;
  name: string;
  nameKorean: string;
  location: string;
  district: string;
  description: string;
  specialty: string[];
  established: string;
  image: string;
  interiorImages: string[];
  practitioners: Practitioner[];
  certifications: string[];
  highlights: string[];
}

export const clinics: Clinic[] = [
  {
    id: "clinic-1",
    name: "Cheongdam Aesthetic",
    nameKorean: "청담에스테틱",
    location: "Cheongdam-dong, Gangnam-gu",
    district: "Gangnam",
    description:
      "Located in Seoul's most prestigious beauty district, Cheongdam Aesthetic is renowned for its subtle, natural-looking rejuvenation treatments. Their signature approach combines traditional Korean skincare philosophy with cutting-edge technology.",
    specialty: ["Rejuran Healer", "Skin Boosters", "Anti-Aging Protocols"],
    established: "2008",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    ],
    practitioners: [
      {
        name: "Dr. Kim Soo-yeon",
        title: "Medical Director",
        specialty: "Regenerative Dermatology",
        credentials: [
          "Seoul National University Medical School",
          "Board Certified Dermatologist",
          "15+ years experience",
        ],
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&facepad=2",
      },
    ],
    certifications: [
      "Korea Ministry of Health & Welfare Licensed",
      "JCI International Accreditation",
      "Korean Dermatological Association Member",
    ],
    highlights: [
      "VIP private treatment suites",
      "English-speaking staff",
      "Post-treatment recovery lounge",
      "Premium Korean skincare amenities",
    ],
  },
  {
    id: "clinic-2",
    name: "Apgujeong Skin Lab",
    nameKorean: "압구정스킨랩",
    location: "Apgujeong-dong, Gangnam-gu",
    district: "Gangnam",
    description:
      "A leader in laser treatments and skin technology, Apgujeong Skin Lab pioneered many of the laser toning protocols now used throughout Korea. Their evidence-based approach and commitment to research sets them apart.",
    specialty: ["Laser Toning", "Pigmentation Treatment", "Glass Skin Facials"],
    established: "2005",
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=800&h=600&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    ],
    practitioners: [
      {
        name: "Dr. Park Ji-won",
        title: "Founder & Lead Dermatologist",
        specialty: "Laser & Light Therapies",
        credentials: [
          "Yonsei University College of Medicine",
          "Board Certified Dermatologist",
          "Published researcher in laser dermatology",
        ],
        image:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&facepad=2",
      },
    ],
    certifications: [
      "Korea Ministry of Health & Welfare Licensed",
      "Korean Laser Medicine Society Member",
      "ISO 9001 Quality Management Certified",
    ],
    highlights: [
      "State-of-the-art laser technology",
      "Clinical research partnerships",
      "Custom treatment protocols",
      "Same-day consultation available",
    ],
  },
  {
    id: "clinic-3",
    name: "Myeongdong Beauty Clinic",
    nameKorean: "명동뷰티클리닉",
    location: "Myeongdong, Jung-gu",
    district: "Myeongdong",
    description:
      "Situated in the heart of Seoul's shopping district, Myeongdong Beauty Clinic specializes in combination treatments that deliver visible results in shorter timeframes—perfect for international visitors with limited time.",
    specialty: ["Express Protocols", "Skin Boosters", "Hydration Treatments"],
    established: "2012",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=400&h=300&fit=crop",
    ],
    practitioners: [
      {
        name: "Dr. Lee Hye-jin",
        title: "Clinical Director",
        specialty: "Injectable Treatments",
        credentials: [
          "Korea University Medical School",
          "Board Certified Dermatologist",
          "International speaker on Korean aesthetics",
        ],
        image:
          "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&facepad=2",
      },
    ],
    certifications: [
      "Korea Ministry of Health & Welfare Licensed",
      "Korean Medical Tourism Association Partner",
      "Multilingual Certified Facility",
    ],
    highlights: [
      "Central Seoul location",
      "Japanese & Chinese interpreters",
      "Accelerated treatment packages",
      "Convenient for shopping trips",
    ],
  },
  {
    id: "clinic-4",
    name: "Sinsa-dong Dermatology",
    nameKorean: "신사동피부과",
    location: "Sinsa-dong, Gangnam-gu",
    district: "Garosugil",
    description:
      "Tucked away on trendy Garosugil, this boutique clinic is known for its holistic approach, combining advanced treatments with Korean wellness traditions. Their thread lift expertise is particularly renowned.",
    specialty: ["Thread Lifts", "Anti-Aging", "Holistic Protocols"],
    established: "2010",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    ],
    practitioners: [
      {
        name: "Dr. Choi Min-jung",
        title: "Lead Practitioner",
        specialty: "Thread Lifting & Contouring",
        credentials: [
          "Sungkyunkwan University School of Medicine",
          "Board Certified Dermatologist",
          "Thread lift master trainer",
        ],
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&facepad=2",
      },
    ],
    certifications: [
      "Korea Ministry of Health & Welfare Licensed",
      "Korean Society of Aesthetic Surgery Member",
      "Thread Lift Center of Excellence",
    ],
    highlights: [
      "Boutique intimate setting",
      "Garosugil neighborhood charm",
      "Extended recovery support",
      "Personalized aftercare kits",
    ],
  },
];

export const selectionCriteria = [
  {
    title: "Credentials & Licensing",
    description:
      "Every partner clinic is licensed by Korea's Ministry of Health & Welfare with board-certified dermatologists or plastic surgeons.",
    icon: "shield",
  },
  {
    title: "Track Record",
    description:
      "Minimum 10 years of operation with demonstrated expertise in their specialty areas and positive patient outcomes.",
    icon: "clock",
  },
  {
    title: "International Experience",
    description:
      "Proven experience with international patients, English-speaking staff, and cultural sensitivity training.",
    icon: "globe",
  },
  {
    title: "Facility Standards",
    description:
      "Modern, hygienic facilities with premium equipment and comfortable recovery spaces for our clients.",
    icon: "building",
  },
  {
    title: "Safety Protocols",
    description:
      "Rigorous safety and hygiene standards exceeding Korean regulatory requirements, with emergency protocols in place.",
    icon: "heart",
  },
  {
    title: "Ongoing Partnership",
    description:
      "We maintain close relationships with each clinic, conducting regular visits and gathering continuous client feedback.",
    icon: "handshake",
  },
];

export function getClinicById(id: string): Clinic | undefined {
  return clinics.find((c) => c.id === id);
}

export function getClinicsByDistrict(district: string): Clinic[] {
  return clinics.filter((c) => c.district === district);
}
