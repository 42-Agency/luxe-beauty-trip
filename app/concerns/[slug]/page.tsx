import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer, Section, Container, Split } from "@/components/layout";
import {
  Heading,
  Display,
  Text,
  Label,
  Button,
} from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";
import {
  concerns,
  getConcernBySlug,
  getAllConcernSlugs,
} from "@/lib/data/concerns";
import { getTreatmentBySlug } from "@/lib/data/treatments";

interface ConcernPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllConcernSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ConcernPageProps): Promise<Metadata> {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    return { title: "Concern Not Found" };
  }

  return {
    title: `Korean Treatment for ${concern.title} | Luxe Beauty Trip`,
    description: concern.description,
    openGraph: {
      title: `Best Korean Treatment for ${concern.title}`,
      description: concern.description,
      images: [concern.image],
    },
  };
}

export default async function ConcernPage({ params }: ConcernPageProps) {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    notFound();
  }

  // Get related concerns (exclude current)
  const relatedConcerns = concerns
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Skin Concern"
        title={concern.title}
        subtitle={concern.subtitle}
        align="center"
      />

      {/* Overview */}
      <Section bg="blank">
        <Split gap="xl">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lift">
            <Image
              src={concern.image}
              alt={concern.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Label className="mb-4 block">Understanding {concern.title}</Label>
            <Heading level={2} className="mb-6">
              {concern.subtitle}
            </Heading>
            <div className="space-y-4">
              {concern.longDescription.split("\n\n").map((paragraph, i) => (
                <Text key={i} muted className="text-lg leading-relaxed">
                  {paragraph}
                </Text>
              ))}
            </div>
          </div>
        </Split>
      </Section>

      {/* Causes */}
      <Section bg="silk-rose">
        <Container size="md">
          <div className="text-center mb-12">
            <Label className="mb-4 block">Root Causes</Label>
            <Heading level={2}>What Causes {concern.title}?</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {concern.causes.map((cause, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-soft"
              >
                <div className="w-8 h-8 rounded-full bg-trufflet/20 text-trufflet flex items-center justify-center flex-shrink-0 font-medium">
                  {i + 1}
                </div>
                <Text>{cause}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Recommended Treatments */}
      <Section bg="blank">
        <div className="text-center mb-12">
          <Label className="mb-4 block">Our Approach</Label>
          <Heading level={2}>Recommended Treatments</Heading>
          <Text muted className="mt-4 max-w-2xl mx-auto text-lg">
            Korean clinics offer advanced solutions for {concern.title.toLowerCase()}.
            Here are the treatments we recommend.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concern.recommendedTreatments.map((rec) => {
            const treatment = getTreatmentBySlug(rec.slug);
            return (
              <Link
                key={rec.slug}
                href={`/treatments/${rec.slug}`}
                className="group"
              >
                <div className="bg-silk-rose rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lift hover:-translate-y-1">
                  {treatment && (
                    <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-6">
                      <Image
                        src={treatment.image}
                        alt={rec.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <Heading level={3} className="text-xl mb-2 group-hover:text-gold transition-colors">
                    {rec.name}
                  </Heading>
                  <Text muted>{rec.why}</Text>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Homecare Tips */}
      <Section bg="silk-rose">
        <Container size="md">
          <div className="text-center mb-12">
            <Label className="mb-4 block">Between Treatments</Label>
            <Heading level={2}>Homecare Tips</Heading>
            <Text muted className="mt-4 text-lg">
              Professional treatments work best with proper at-home care.
            </Text>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <ul className="space-y-4">
              {concern.homecareTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <Text>{tip}</Text>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bg="blank">
        <Container size="md">
          <div className="text-center mb-12">
            <Label className="mb-4 block">Common Questions</Label>
            <Heading level={2}>FAQs About {concern.title}</Heading>
          </div>
          <div className="space-y-6">
            {concern.faqs.map((faq, i) => (
              <div key={i} className="bg-silk-rose rounded-2xl p-6">
                <Heading level={4} className="mb-3 text-lg normal-case tracking-normal">
                  {faq.question}
                </Heading>
                <Text muted>{faq.answer}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Concerns */}
      <Section bg="silk-rose">
        <div className="text-center mb-12">
          <Label className="mb-4 block">Related Concerns</Label>
          <Heading level={2}>You May Also Be Interested In</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedConcerns.map((c) => (
            <Link key={c.slug} href={`/concerns/${c.slug}`} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft mb-4">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Heading level={3} className="text-xl text-white">
                    {c.title}
                  </Heading>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Start Your Journey</Label>
          <Display className="text-white mb-6">
            Ready to Address Your {concern.title}?
          </Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a complimentary consultation to discuss the best Korean
            treatments for your specific concerns.
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
