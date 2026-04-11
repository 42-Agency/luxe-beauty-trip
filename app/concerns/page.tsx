import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer, Section, Container } from "@/components/layout";
import {
  Heading,
  Display,
  Text,
  Label,
  Button,
} from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";
import { concerns } from "@/lib/data/concerns";

export const metadata: Metadata = {
  title: "Skin Concerns | Korean Treatments | Luxe Beauty Trip",
  description:
    "Find the right Korean treatment for your skin concern. Expert solutions for acne scars, hyperpigmentation, aging, dull skin, and more.",
};

export default function ConcernsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Skin Concerns"
        title="What Would You Like to Address?"
        subtitle="Korean clinics offer specialized solutions for every skin concern. Find your path to transformation."
        align="center"
      />

      {/* Concerns Grid */}
      <Section bg="blank">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerns.map((concern) => (
            <Link
              key={concern.slug}
              href={`/concerns/${concern.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft mb-4">
                <Image
                  src={concern.image}
                  alt={concern.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Heading level={3} className="text-xl text-white mb-1">
                    {concern.title}
                  </Heading>
                  <Text size="small" className="text-white/80">
                    {concern.subtitle}
                  </Text>
                </div>
              </div>
              <Text muted className="line-clamp-2 mb-2">
                {concern.description}
              </Text>
              <div className="flex items-center gap-2 text-gold font-medium text-sm group-hover:underline">
                Explore solutions
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* How We Help */}
      <Section bg="silk-rose">
        <Container size="md">
          <div className="text-center mb-12">
            <Label className="mb-4 block">Our Approach</Label>
            <Heading level={2}>How Korean Clinics Differ</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <Heading level={3} className="text-lg mb-2">
                Advanced Treatments
              </Heading>
              <Text muted size="small">
                Access therapies like PDRN, skin boosters, and combination protocols not yet available in the US.
              </Text>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <Heading level={3} className="text-lg mb-2">
                Diverse Skin Expertise
              </Heading>
              <Text muted size="small">
                Techniques developed for Asian skin benefit all skin types, especially those prone to hyperpigmentation.
              </Text>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <Heading level={3} className="text-lg mb-2">
                Combination Protocols
              </Heading>
              <Text muted size="small">
                Korean clinics layer multiple treatments synergistically, addressing concerns from multiple angles.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Get Personalized Advice</Label>
          <Display className="text-white mb-6">
            Let&apos;s Discuss Your Concerns
          </Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a complimentary consultation. We&apos;ll analyze your specific concerns
            and recommend the most effective Korean treatments.
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
