import { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { HeroSplit } from "@/components/blocks";
import {
  treatments,
  getTreatmentBySlug,
  getAllTreatmentSlugs,
} from "@/lib/data/treatments";

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return { title: "Treatment Not Found" };
  }

  return {
    title: `${treatment.title} in Seoul | Luxe Beauty Trip`,
    description: treatment.description,
    openGraph: {
      title: `${treatment.title} | Korean Beauty Treatment`,
      description: treatment.description,
      images: [treatment.image],
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  // Get related treatments (exclude current)
  const relatedTreatments = treatments
    .filter((t) => t.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroSplit
        label="Treatment"
        title={treatment.title}
        subtitle={treatment.description}
        primaryCta={{ text: "Book Consultation", href: "/contact" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
        image={treatment.image}
      />

      {/* Overview */}
      <Section bg="blank">
        <div className="max-w-3xl mx-auto">
          <Label className="mb-4 block">About This Treatment</Label>
          <div className="prose prose-lg">
            {treatment.longDescription.split("\n\n").map((paragraph, i) => (
              <Text key={i} muted className="mb-6 text-lg leading-relaxed">
                {paragraph}
              </Text>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits & Procedure */}
      <Section bg="silk-rose">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Benefits */}
          <div>
            <Label className="mb-4 block">Benefits</Label>
            <Heading level={2} className="mb-8">
              What You&apos;ll Experience
            </Heading>
            <ul className="space-y-4">
              {treatment.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center flex-shrink-0 font-serif">
                    {i + 1}
                  </div>
                  <Text className="pt-1">{benefit}</Text>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedure Details */}
          <div>
            <Label className="mb-4 block">The Procedure</Label>
            <Heading level={2} className="mb-8">
              What to Expect
            </Heading>
            <div className="bg-white rounded-2xl p-8 shadow-soft space-y-6">
              <div className="flex justify-between border-b border-midnight/10 pb-4">
                <Text muted>Duration</Text>
                <Text className="font-medium">{treatment.procedure.duration}</Text>
              </div>
              <div className="flex justify-between border-b border-midnight/10 pb-4">
                <Text muted>Downtime</Text>
                <Text className="font-medium">{treatment.procedure.downtime}</Text>
              </div>
              <div className="flex justify-between border-b border-midnight/10 pb-4">
                <Text muted>Sessions</Text>
                <Text className="font-medium">{treatment.procedure.sessions}</Text>
              </div>
              <div className="flex justify-between">
                <Text muted>Results</Text>
                <Text className="font-medium">{treatment.procedure.results}</Text>
              </div>
            </div>

            {/* Price */}
            <div className="mt-8 bg-midnight rounded-2xl p-8 text-white">
              <Label className="mb-2 block text-gold">Investment</Label>
              <Display className="text-white text-3xl mb-2">
                {treatment.price.range}
              </Display>
              <Text size="small" className="text-white/70">
                {treatment.price.note}
              </Text>
            </div>
          </div>
        </div>
      </Section>

      {/* Ideal For */}
      <Section bg="blank">
        <Container size="md">
          <div className="text-center mb-12">
            <Label className="mb-4 block">Is This Right For You?</Label>
            <Heading level={2}>Ideal Candidates</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {treatment.idealFor.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-silk-rose rounded-xl p-4"
              >
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0"
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
                <Text>{item}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      {treatment.galleryImages.length > 0 && (
        <Section bg="silk-rose" size="sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {treatment.galleryImages.map((image, i) => (
              <div
                key={i}
                className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-soft"
              >
                <Image
                  src={image}
                  alt={`${treatment.title} treatment ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section bg="blank">
        <Container size="md">
          <div className="text-center mb-12">
            <Label className="mb-4 block">Questions</Label>
            <Heading level={2}>Frequently Asked</Heading>
          </div>
          <div className="space-y-6">
            {treatment.faqs.map((faq, i) => (
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

      {/* Related Treatments */}
      <Section bg="silk-rose">
        <div className="text-center mb-12">
          <Label className="mb-4 block">Explore More</Label>
          <Heading level={2}>Related Treatments</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedTreatments.map((t) => (
            <Link key={t.slug} href={`/treatments/${t.slug}`} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft mb-4">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <Heading level={3} className="text-xl mb-1 group-hover:text-gold transition-colors">
                {t.title}
              </Heading>
              <Text size="small" muted>
                {t.subtitle}
              </Text>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Ready to Begin?</Label>
          <Display className="text-white mb-6">
            Experience {treatment.title}
          </Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a complimentary consultation to discuss if this treatment is
            right for your skin goals.
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
