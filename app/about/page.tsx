import { Header, Footer, Section, Container, Split } from "@/components/layout";
import {
  Heading,
  Display,
  Text,
  Quote,
  Label,
  Button,
  StatsCard,
} from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";
import Link from "next/link";
import Image from "next/image";

const team = [
  {
    name: "Dr. Min-Ji Kim",
    role: "Founder & Lead Dermatologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
    bio: "20+ years pioneering Korean skincare techniques. Former head of dermatology at Samsung Medical Center.",
  },
  {
    name: "Sarah Mitchell",
    role: "Beauty Concierge Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    bio: "Former luxury travel curator at Aman Resorts. Expert in crafting bespoke wellness journeys.",
  },
  {
    name: "Dr. Jae-Won Park",
    role: "Clinical Director, Seoul",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
    bio: "Pioneer in non-invasive rejuvenation. Trained over 500 dermatologists across Asia.",
  },
];

const values = [
  {
    title: "Excellence Without Compromise",
    description: "We partner only with Seoul's top 1% of practitioners. Every treatment meets our exacting standards.",
  },
  {
    title: "Personalized Journeys",
    description: "No two skin types are alike. We craft bespoke treatment plans that address your unique concerns.",
  },
  {
    title: "Cultural Immersion",
    description: "Beauty is just the beginning. We curate experiences that let you discover Seoul's rich culture.",
  },
  {
    title: "Lasting Relationships",
    description: "Your journey doesn't end when you return home. We provide ongoing support and follow-up care.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Our Story"
        title="Where Passion Meets Purpose"
        subtitle="Founded by a Korean-American dermatologist who believed the world deserved access to Seoul's skincare secrets."
        align="center"
      />

      {/* Origin Story */}
      <Section bg="blank">
        <Split gap="xl">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop"
              alt="Dr. Min-Ji Kim"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Label className="mb-4 block">The Beginning</Label>
            <Heading level={2} className="mb-6">
              A Bridge Between Two Worlds
            </Heading>
            <Text muted className="mb-6 text-lg">
              Growing up between Los Angeles and Seoul, Dr. Min-Ji Kim witnessed a stark contrast in skincare culture. In Korea, skincare was a ritual—a daily practice of self-care passed down through generations.
            </Text>
            <Text muted className="mb-6">
              After two decades as a dermatologist, she noticed her American patients traveling to Seoul for treatments unavailable at home. The experience was often overwhelming—language barriers, unfamiliar clinics, and no guidance on aftercare.
            </Text>
            <Text muted>
              In 2019, she founded Luxe Beauty Trip to bridge this gap: bringing the world&apos;s most discerning clients to Seoul&apos;s finest practitioners, with every detail handled seamlessly.
            </Text>
          </div>
        </Split>
      </Section>

      {/* Stats */}
      <Section bg="silk-rose" size="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatsCard value="500+" label="Transformations" />
          <StatsCard value="12" label="Partner Clinics" />
          <StatsCard value="15" label="Years Experience" />
          <StatsCard value="98%" label="Return Clients" />
        </div>
      </Section>

      {/* Values */}
      <Section bg="blank">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label className="mb-4 block">What We Believe</Label>
          <Heading level={2}>Our Guiding Principles</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-silk-rose rounded-2xl p-8">
              <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-serif text-xl mb-4">
                {index + 1}
              </div>
              <Heading level={3} className="mb-3 text-xl">
                {value.title}
              </Heading>
              <Text muted>{value.description}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label className="mb-4 block">The Team</Label>
          <Heading level={2}>Meet Your Guides</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-soft">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <Heading level={3} className="text-xl mb-1">
                {member.name}
              </Heading>
              <Text className="text-gold font-medium mb-3">{member.role}</Text>
              <Text size="small" muted>
                {member.bio}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Quote */}
      <Section bg="blank">
        <Container size="md">
          <div className="text-center">
            <Quote
              attribution="— Dr. Min-Ji Kim, Founder"
              className="max-w-3xl mx-auto border-l-0 pl-0 text-center"
            >
              I wanted to create the experience I wished existed—where world-class skincare meets effortless luxury travel. Where every client feels like our only client.
            </Quote>
          </div>
        </Container>
      </Section>

      {/* Partners */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Our Network</Label>
          <Heading level={2} className="mb-4">
            Seoul&apos;s Finest Clinics
          </Heading>
          <Text muted className="text-lg">
            We partner exclusively with clinics that meet our rigorous standards—the same clinics trusted by K-pop stars, actresses, and Seoul&apos;s elite.
          </Text>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-midnight/10 rounded-lg flex items-center justify-center">
              <Text muted className="font-medium">Partner Clinic {i}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Join Us</Label>
          <Display className="text-white mb-6">Ready to Begin?</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Let us introduce you to the transformative power of Korean beauty. Your journey starts with a single conversation.
          </Text>
          <Link href="/contact">
            <Button variant="gold" size="lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
