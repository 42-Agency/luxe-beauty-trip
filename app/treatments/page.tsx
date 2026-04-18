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
import { treatments } from "@/lib/data/treatments";

export const metadata: Metadata = {
  title: "Korean Beauty Treatments | Luxe Beauty Trip",
  description:
    "Explore our curated selection of Korean skincare treatments. From glass skin facials to PDRN therapy, discover treatments years ahead of the West.",
};

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Our Treatments"
        title="Korean Beauty Excellence"
        subtitle="Each treatment is carefully selected from Seoul's top clinics. Experience skincare innovations years ahead of the West."
        align="center"
      />

      {/* Treatment Grid */}
      <Section bg="blank">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className="group"
            >
              <div className="bg-silk-rose rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lift hover:-translate-y-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Heading level={3} className="text-xl text-white mb-2">
                      {treatment.title}
                    </Heading>
                    <Text size="small" className="text-white/80">
                      {treatment.subtitle}
                    </Text>
                  </div>
                </div>
                <div className="p-6">
                  <Text muted className="line-clamp-3">
                    {treatment.description}
                  </Text>
                  <div className="mt-4 flex items-center gap-2 text-gold font-medium text-sm group-hover:underline">
                    Learn more
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Browse by Concern */}
      <Section bg="silk-rose">
        <Container size="md">
          <div className="text-center">
            <Label className="mb-4 block">Not Sure Where to Start?</Label>
            <Heading level={2} className="mb-4">
              Browse by Skin Concern
            </Heading>
            <Text muted className="text-lg mb-8">
              Tell us what you want to address, and we&apos;ll recommend the right treatments.
            </Text>
            <Link href="/concerns/acne-scars">
              <Button variant="secondary" className="mr-3 mb-3">
                Acne Scars
              </Button>
            </Link>
            <Link href="/concerns/hyperpigmentation">
              <Button variant="secondary" className="mr-3 mb-3">
                Hyperpigmentation
              </Button>
            </Link>
            <Link href="/concerns/fine-lines-wrinkles">
              <Button variant="secondary" className="mr-3 mb-3">
                Fine Lines
              </Button>
            </Link>
            <Link href="/concerns/dull-skin">
              <Button variant="secondary" className="mr-3 mb-3">
                Dull Skin
              </Button>
            </Link>
            <Link href="/concerns/large-pores">
              <Button variant="secondary" className="mr-3 mb-3">
                Large Pores
              </Button>
            </Link>
            <Link href="/concerns/sagging-skin">
              <Button variant="secondary" className="mb-3">
                Sagging Skin
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Personalized Recommendations</Label>
          <Display className="text-white mb-6">
            Not Sure Which Treatment?
          </Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a complimentary consultation. We&apos;ll assess your skin and recommend
            the perfect treatment protocol for your goals.
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
