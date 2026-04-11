import { Header, Footer, Section, Container, Split } from "@/components/layout";
import {
  Heading,
  Display,
  Text,
  Quote,
  Label,
  Button,
  FeatureCard,
  StatsCard,
} from "@/components/ui";
import {
  HeroSplit,
  TreatmentGrid,
  TestimonialCarousel,
} from "@/components/blocks";
import Link from "next/link";
import Image from "next/image";

const treatments = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=750&fit=crop",
    title: "Korean Glass Skin",
    subtitle: "Multi-step hydration ritual",
    price: "From $350",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=750&fit=crop",
    title: "Rejuvenation Therapy",
    subtitle: "Advanced skin renewal",
    price: "From $500",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=750&fit=crop",
    title: "Luxe Signature Facial",
    subtitle: "Our most popular treatment",
    price: "From $275",
  },
];

const testimonials = [
  {
    id: "1",
    quote: "The most transformative skincare experience I've ever had. My skin has never looked better, and the journey to Seoul was unforgettable.",
    name: "Sarah Chen",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    quote: "Luxe Beauty Trip exceeded every expectation. The attention to detail, the expertise of the practitioners—pure excellence.",
    name: "Michelle Park",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    quote: "Worth every penny. I returned home with glowing skin and a newfound appreciation for Korean beauty rituals.",
    name: "Jennifer Liu",
    location: "Vancouver, BC",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroSplit
        label="Seoul's Premier Beauty Destination"
        title="Where Beauty Meets Luxury"
        subtitle="Experience the pinnacle of Korean skincare in Seoul's most exclusive treatment destinations. Curated journeys for the discerning beauty connoisseur."
        primaryCta={{ text: "Book Your Journey", href: "/contact" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
        image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=1000&fit=crop"
      />

      {/* Stats */}
      <Section bg="blank" size="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatsCard value="500+" label="Clients Served" />
          <StatsCard value="15" label="Years Experience" />
          <StatsCard value="12" label="Partner Clinics" />
          <StatsCard value="98%" label="Satisfaction Rate" />
        </div>
      </Section>

      {/* Treatments */}
      <TreatmentGrid
        label="Our Treatments"
        title="Signature Experiences"
        subtitle="Each treatment is carefully curated to deliver visible results while honoring traditional Korean beauty wisdom."
        treatments={treatments}
        columns={3}
      />

      {/* Why Korea Section */}
      <Section bg="silk-rose">
        <Split reverse gap="xl">
          <div>
            <Label className="mb-4 block">Why Seoul</Label>
            <Heading level={2} className="mb-6">
              The Global Capital of Skincare Innovation
            </Heading>
            <Text muted className="mb-6 text-lg">
              South Korea invests more in skincare R&D than any other nation. The result? Treatments and technologies that are years ahead of the West.
            </Text>
            <Text muted className="mb-8">
              From the legendary 10-step routine to cutting-edge laser therapies, Korean beauty combines ancient wisdom with relentless innovation. Our partner clinics represent the absolute pinnacle of this tradition.
            </Text>
            <Link href="/about">
              <Button variant="ghost">
                Learn Our Story
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&h=600&fit=crop"
              alt="Seoul cityscape"
              fill
              className="object-cover"
            />
          </div>
        </Split>
      </Section>

      {/* How It Works Preview */}
      <Section bg="blank" id="experience">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label className="mb-4 block">The Luxe Difference</Label>
          <Heading level={2}>Your Journey, Perfected</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            }
            title="1. Consultation"
            description="Share your skincare goals with our beauty concierge. We'll design a personalized treatment plan tailored to your needs."
          />
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="2. Travel"
            description="We handle everything—flights, 5-star accommodations, private transfers, and a curated itinerary beyond your treatments."
          />
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
            title="3. Transform"
            description="Experience world-class treatments with Seoul's top practitioners. Return home with radiant skin and lasting results."
          />
        </div>
        <div className="text-center mt-12">
          <Link href="/how-it-works">
            <Button variant="secondary">
              See Full Process
            </Button>
          </Link>
        </div>
      </Section>

      {/* Quote */}
      <Section bg="silk-rose">
        <Container size="md">
          <div className="text-center">
            <Quote
              attribution="— Dr. Min-Ji Kim, Lead Dermatologist"
              className="max-w-3xl mx-auto border-l-0 pl-0 text-center"
            >
              True beauty is a journey, not a destination. We&apos;re honored to guide our clients through transformative experiences that celebrate both inner and outer radiance.
            </Quote>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialCarousel
        label="Client Stories"
        title="Transformative Experiences"
        testimonials={testimonials}
      />

      {/* Final CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Begin Your Journey</Label>
          <Display className="text-white mb-6">Ready to Transform?</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Schedule a complimentary consultation with our beauty concierge to design your personalized Korean beauty journey.
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Book Consultation
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-midnight"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
