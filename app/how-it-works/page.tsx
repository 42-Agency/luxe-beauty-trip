import { Header, Footer, Section, Split } from "@/components/layout";
import {
  Heading,
  Display,
  Text,
  Label,
  Button,
  FeatureCard,
} from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Discovery Consultation",
    duration: "30-minute video call",
    description: "We begin with an in-depth conversation about your skincare goals, concerns, and lifestyle. Our beauty concierge will assess your skin type, discuss your medical history, and understand what transformation means to you.",
    details: [
      "Personalized skin analysis",
      "Discussion of treatment options",
      "Travel preferences & dates",
      "Budget alignment",
    ],
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=600&h=400&fit=crop",
  },
  {
    number: "02",
    title: "Custom Treatment Plan",
    duration: "Within 48 hours",
    description: "Based on our consultation, we design a bespoke treatment itinerary tailored to your unique needs. You'll receive a detailed proposal including recommended procedures, clinic options, and a complete travel itinerary.",
    details: [
      "Curated treatment recommendations",
      "Clinic and practitioner matching",
      "5-star accommodation options",
      "Cultural experience suggestions",
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
  {
    number: "03",
    title: "Seamless Travel",
    duration: "We handle everything",
    description: "Once you approve your plan, we coordinate every detail of your journey. From business class flights to private airport transfers, luxury hotel accommodations to restaurant reservations—you simply show up.",
    details: [
      "Flight booking assistance",
      "Luxury hotel reservations",
      "Private car transfers",
      "Personal translator/guide",
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
  },
  {
    number: "04",
    title: "Treatment Experience",
    duration: "Your Seoul journey",
    description: "Arrive in Seoul and experience world-class care. Your personal guide accompanies you to each appointment, ensuring clear communication with practitioners. Between treatments, explore curated cultural experiences.",
    details: [
      "Accompanied clinic visits",
      "Real-time translation",
      "Post-treatment care guidance",
      "Curated Seoul experiences",
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
  },
  {
    number: "05",
    title: "Ongoing Support",
    duration: "Long after you return",
    description: "Your transformation doesn't end when you land home. We provide comprehensive aftercare guidance, connect you with local specialists if needed, and check in regularly to monitor your results.",
    details: [
      "Detailed aftercare instructions",
      "Follow-up consultations",
      "Product recommendations",
      "Future treatment planning",
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
];

const inclusions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Luxury Accommodations",
    description: "5-star hotels in Gangnam, Seoul's premier district. Walking distance to top clinics.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Private Transfers",
    description: "Airport pickup, clinic transfers, and city transportation in luxury vehicles.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: "Personal Translator",
    description: "Bilingual guide accompanies you to all appointments for seamless communication.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: "Cultural Experiences",
    description: "Curated dining, spa days, temple visits, and shopping excursions between treatments.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Comprehensive Insurance",
    description: "Travel medical insurance covering your entire journey, including procedure-related care.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Concierge",
    description: "Round-the-clock support throughout your journey. We're always just a message away.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Your Journey"
        title="From Consultation to Transformation"
        subtitle="We've refined every step to ensure your Korean beauty journey is seamless, luxurious, and transformative."
        align="center"
      />

      {/* Process Steps */}
      <Section bg="blank">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <Split key={step.number} reverse={index % 2 === 1} gap="xl">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-5xl text-gold">{step.number}</span>
                  <div className="h-px flex-1 bg-gold/30" />
                </div>
                <Heading level={2} className="mb-2">
                  {step.title}
                </Heading>
                <Text className="text-gold font-medium mb-4">{step.duration}</Text>
                <Text muted className="mb-6 text-lg">
                  {step.description}
                </Text>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <Text size="small">{detail}</Text>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lift">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Split>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label className="mb-4 block">All-Inclusive</Label>
          <Heading level={2} className="mb-4">
            What&apos;s Included
          </Heading>
          <Text muted className="text-lg">
            Every Luxe Beauty Trip package includes these premium services, so you can focus entirely on your transformation.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="blank">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label className="mb-4 block">Sample Itinerary</Label>
          <Heading level={2}>A Week in Seoul</Heading>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-gold/30 pl-8 space-y-12">
            {[
              { day: "Day 1", title: "Arrival & Settling In", desc: "Private airport transfer to your Gangnam hotel. Rest and acclimate. Welcome dinner at a Michelin-starred Korean restaurant." },
              { day: "Day 2", title: "Initial Consultation", desc: "Morning skin analysis at our partner clinic. Afternoon free for exploring Gangnam or spa relaxation." },
              { day: "Day 3", title: "Primary Treatments", desc: "Your main treatment sessions begin. Personal guide accompanies you throughout. Evening recovery at the hotel." },
              { day: "Day 4", title: "Cultural Immersion", desc: "Light treatment day. Explore Bukchon Hanok Village, traditional tea ceremony, and Korean skincare shopping." },
              { day: "Day 5", title: "Follow-up Treatments", desc: "Secondary treatment sessions. Afternoon Korean cooking class or temple visit." },
              { day: "Day 6", title: "Final Touches", desc: "Final treatment session and results assessment. Celebratory dinner and K-beauty shopping guide." },
              { day: "Day 7", title: "Departure", desc: "Leisurely morning. Private transfer to airport. Aftercare package and product recommendations provided." },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.65rem] w-5 h-5 rounded-full bg-gold" />
                <Text className="text-gold font-medium mb-1">{item.day}</Text>
                <Heading level={3} className="text-xl mb-2">{item.title}</Heading>
                <Text muted>{item.desc}</Text>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Questions?</Label>
          <Heading level={2} className="mb-4">
            Common Questions
          </Heading>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "How far in advance should I book?", a: "We recommend booking 4-6 weeks in advance to ensure availability at your preferred clinics and accommodations. However, we can accommodate shorter timelines when needed." },
            { q: "What if I need to reschedule?", a: "Life happens. We offer flexible rescheduling up to 14 days before your trip. Cancellations are subject to our standard policy, which we'll review during your consultation." },
            { q: "Do I need to speak Korean?", a: "Not at all. Your personal guide and translator accompanies you to all appointments. Our partner clinics also have English-speaking staff." },
            { q: "What about recovery time?", a: "We factor recovery into your itinerary. Most non-invasive treatments require minimal downtime. For more intensive procedures, we build in appropriate rest days." },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
              <Heading level={4} className="mb-2 text-lg normal-case tracking-normal">
                {faq.q}
              </Heading>
              <Text muted>{faq.a}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Start Your Journey</Label>
          <Display className="text-white mb-6">Ready to Experience Seoul?</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book your complimentary consultation and let us design your perfect Korean beauty journey.
          </Text>
          <Link href="/contact">
            <Button variant="gold" size="lg">
              Book Consultation
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
