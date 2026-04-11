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
import { cities } from "@/lib/data/cities";

export const metadata: Metadata = {
  title: "Korean Beauty Trip from Your City | Luxe Beauty Trip",
  description:
    "We serve clients across North America. Find flight times, direct routes, and local testimonials from your city to Seoul.",
};

export default function CitiesPage() {
  // Group cities by direct vs connecting flights
  const directFlightCities = cities.filter((c) => c.flightInfo.directFlights);
  const connectingCities = cities.filter((c) => !c.flightInfo.directFlights);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Locations"
        title="Your City to Seoul"
        subtitle="We serve clients across North America. Find your city and discover how easy it is to experience Korean beauty."
        align="center"
      />

      {/* Direct Flight Cities */}
      <Section bg="blank">
        <div className="text-center mb-12">
          <Label className="mb-4 block">Easiest Access</Label>
          <Heading level={2}>Cities with Direct Flights to Seoul</Heading>
          <Text muted className="mt-4 max-w-2xl mx-auto">
            These cities offer non-stop flights to Seoul, making your beauty trip as seamless as possible.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directFlightCities.map((city) => (
            <Link
              key={city.slug}
              href={`/from/${city.slug}`}
              className="group"
            >
              <div className="bg-silk-rose rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lift hover:-translate-y-1">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Heading level={3} className="text-lg text-white">
                      {city.name}, {city.state}
                    </Heading>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <Text size="small" muted>
                      Flight time
                    </Text>
                    <Text size="small" className="font-medium">
                      {city.flightInfo.duration}
                    </Text>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <Text size="small" muted>
                      From
                    </Text>
                    <Text size="small" className="font-medium">
                      {city.flightInfo.airports.join(", ")}
                    </Text>
                  </div>
                  <Text size="small" className="text-gold font-medium">
                    {city.tagline}
                  </Text>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Connecting Flight Cities */}
      <Section bg="silk-rose">
        <div className="text-center mb-12">
          <Label className="mb-4 block">One Stop Away</Label>
          <Heading level={2}>Cities with Connecting Flights</Heading>
          <Text muted className="mt-4 max-w-2xl mx-auto">
            One connection and you&apos;re on your way to transformation. We coordinate everything.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectingCities.map((city) => (
            <Link
              key={city.slug}
              href={`/from/${city.slug}`}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lift hover:-translate-y-1 shadow-soft">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Heading level={3} className="text-lg text-white">
                      {city.name}, {city.state}
                    </Heading>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <Text size="small" muted>
                      Flight time
                    </Text>
                    <Text size="small" className="font-medium">
                      {city.flightInfo.duration}
                    </Text>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <Text size="small" muted>
                      Via
                    </Text>
                    <Text size="small" className="font-medium">
                      {city.flightInfo.airlines[0].split("via")[1]?.trim() || "Major hub"}
                    </Text>
                  </div>
                  <Text size="small" className="text-gold font-medium">
                    {city.tagline}
                  </Text>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Don't See Your City */}
      <Section bg="blank">
        <Container size="md">
          <div className="text-center">
            <Label className="mb-4 block">Not Listed?</Label>
            <Heading level={2} className="mb-4">
              We Serve All of North America
            </Heading>
            <Text muted className="text-lg mb-8">
              Don&apos;t see your city? No problem. We work with clients from all over
              North America and can coordinate travel from anywhere.
            </Text>
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Ready to Begin?</Label>
          <Display className="text-white mb-6">
            Your Seoul Journey Starts Here
          </Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a complimentary consultation. We&apos;ll handle all the logistics—
            you just focus on your transformation.
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
