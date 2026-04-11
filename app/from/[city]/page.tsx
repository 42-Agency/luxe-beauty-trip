import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
import { HeroFull, TreatmentGrid } from "@/components/blocks";
import {
  cities,
  getCityBySlug,
  getAllCitySlugs,
} from "@/lib/data/cities";
import { treatments } from "@/lib/data/treatments";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return { title: "City Not Found" };
  }

  return {
    title: `Korean Beauty Trip from ${city.name} | Luxe Beauty Trip`,
    description: `${city.description} Direct flights from ${city.name} to Seoul. Premium skincare treatments and luxury travel packages.`,
    openGraph: {
      title: `Korean Beauty Trip from ${city.name}, ${city.state}`,
      description: city.description,
      images: [city.image],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  // Get top treatments for display
  const topTreatments = treatments.slice(0, 3).map((t) => ({
    id: t.slug,
    image: t.image,
    title: t.title,
    subtitle: t.subtitle,
    price: t.price.range,
  }));

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroFull
        label={`From ${city.name}`}
        title={city.tagline}
        subtitle={`Your Korean beauty journey starts in ${city.name}. ${city.flightInfo.duration} to transformation.`}
        cta={{ text: "Book Consultation", href: "/contact" }}
        image={city.image}
      />

      {/* Flight Info Bar */}
      <Section bg="midnight" size="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Text className="text-gold font-medium mb-1">Flight Time</Text>
            <Text className="text-white text-xl font-serif">
              {city.flightInfo.duration}
            </Text>
          </div>
          <div>
            <Text className="text-gold font-medium mb-1">Direct Flights</Text>
            <Text className="text-white text-xl font-serif">
              {city.flightInfo.directFlights ? "Yes" : "1 Stop"}
            </Text>
          </div>
          <div>
            <Text className="text-gold font-medium mb-1">Distance</Text>
            <Text className="text-white text-xl font-serif">
              {city.seoulDistance}
            </Text>
          </div>
          <div>
            <Text className="text-gold font-medium mb-1">From</Text>
            <Text className="text-white text-xl font-serif">
              {city.flightInfo.airports.join(", ")}
            </Text>
          </div>
        </div>
      </Section>

      {/* Local Context */}
      <Section bg="blank">
        <Split gap="xl">
          <div className="flex flex-col justify-center">
            <Label className="mb-4 block">Why {city.name} Residents Choose Seoul</Label>
            <Heading level={2} className="mb-6">
              {city.description}
            </Heading>
            <Text muted className="text-lg mb-8">
              {city.localContext}
            </Text>
            <div className="flex flex-wrap gap-2">
              {city.flightInfo.airlines.map((airline) => (
                <span
                  key={airline}
                  className="px-4 py-2 bg-silk-rose rounded-full text-sm font-medium"
                >
                  {airline}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&h=800&fit=crop"
              alt="Seoul cityscape"
              fill
              className="object-cover"
            />
          </div>
        </Split>
      </Section>

      {/* Testimonial */}
      {city.testimonial && (
        <Section bg="silk-rose">
          <Container size="md">
            <div className="text-center">
              <Quote
                attribution={`— ${city.testimonial.name}, ${city.name}`}
                className="max-w-3xl mx-auto border-l-0 pl-0 text-center"
              >
                {city.testimonial.quote}
              </Quote>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium">
                  Treatment: {city.testimonial.treatment}
                </span>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Popular Treatments */}
      <TreatmentGrid
        label={`Popular with ${city.name} Clients`}
        title="Most Requested Treatments"
        subtitle="These treatments are favorites among our clients traveling from your area."
        treatments={topTreatments}
        columns={3}
      />

      {/* Journey Overview */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Your {city.name} → Seoul Journey</Label>
          <Heading level={2}>How It Works</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-6 font-serif text-2xl">
              1
            </div>
            <Heading level={3} className="text-xl mb-3">
              Consultation
            </Heading>
            <Text muted>
              Video consultation from {city.name}. We assess your goals and design your custom treatment plan.
            </Text>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-6 font-serif text-2xl">
              2
            </div>
            <Heading level={3} className="text-xl mb-3">
              Travel
            </Heading>
            <Text muted>
              {city.flightInfo.duration} from {city.flightInfo.airports[0]} to Seoul.
              We coordinate flights, hotels, and transfers.
            </Text>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-6 font-serif text-2xl">
              3
            </div>
            <Heading level={3} className="text-xl mb-3">
              Transform
            </Heading>
            <Text muted>
              Experience world-class treatments. Return to {city.name} with radiant skin and lasting results.
            </Text>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/how-it-works">
            <Button variant="secondary">See Full Process</Button>
          </Link>
        </div>
      </Section>

      {/* Stats */}
      <Section bg="blank" size="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatsCard value="500+" label="Transformations" />
          <StatsCard value="12" label="Partner Clinics" />
          <StatsCard value="98%" label="Satisfaction" />
          <StatsCard value="15" label="Years Experience" />
        </div>
      </Section>

      {/* Other Cities */}
      <Section bg="silk-rose">
        <div className="text-center mb-12">
          <Label className="mb-4 block">Not in {city.name}?</Label>
          <Heading level={2}>We Serve Clients Across North America</Heading>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {cities
            .filter((c) => c.slug !== citySlug)
            .slice(0, 8)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/from/${c.slug}`}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-gold hover:text-white transition-colors shadow-soft"
              >
                {c.name}, {c.state}
              </Link>
            ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Start in {city.name}</Label>
          <Display className="text-white mb-6">
            Your Seoul Journey Awaits
          </Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a complimentary consultation from {city.name}. We&apos;ll design your
            perfect Korean beauty trip, handling every detail from {city.flightInfo.airports[0]} to Seoul.
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
