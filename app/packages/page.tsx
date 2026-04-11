import { Header, Footer, Section } from "@/components/layout";
import {
  Heading,
  Display,
  Text,
  Label,
  Button,
  FeatureCard,
} from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";
import { packages, addOns, inclusions } from "@/lib/data/packages";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  consultation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  concierge: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  translation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  ),
  aftercare: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  products: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  emergency: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Pricing & Packages"
        title="Investment in Your Transformation"
        subtitle="Transparent pricing for an extraordinary experience. Every package is fully customizable to your unique needs and goals."
        align="center"
      />

      {/* Package Cards */}
      <Section bg="blank">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-400 ${
                pkg.popular
                  ? "ring-2 ring-gold shadow-lift lg:scale-105 z-10"
                  : "shadow-soft hover:shadow-lift hover:-translate-y-1"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gold text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? "pt-14" : ""}`}>
                {/* Header */}
                <div className="text-center mb-8 pb-8 border-b border-silk-rose">
                  <Label className="mb-2 block">{pkg.tier}</Label>
                  <Heading level={2} className="mb-2">
                    {pkg.name}
                  </Heading>
                  <Text muted className="mb-4">
                    {pkg.tagline}
                  </Text>
                  <div className="font-serif text-3xl text-gold mb-1">
                    {pkg.priceRange}
                  </div>
                  <Text size="small" muted>
                    {pkg.priceNote}
                  </Text>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-center gap-2 mb-6 text-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <Text className="font-medium text-gold">{pkg.duration}</Text>
                </div>

                {/* Description */}
                <Text muted className="mb-8 text-center">
                  {pkg.description}
                </Text>

                {/* Highlights */}
                <div className="mb-8">
                  <Text className="font-medium mb-4">Package Highlights:</Text>
                  <ul className="space-y-3">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <Text size="small">{highlight}</Text>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link href="/contact" className="block">
                  <Button
                    variant={pkg.popular ? "gold" : "secondary"}
                    className="w-full"
                  >
                    Start Consultation
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package Note */}
        <div className="mt-12 text-center">
          <Text muted>
            Need something different? Every package can be customized.{" "}
            <Link href="/contact" className="text-gold font-medium hover:underline">
              Let&apos;s design your perfect journey.
            </Link>
          </Text>
        </div>
      </Section>

      {/* Package Comparison */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Compare Packages</Label>
          <Heading level={2}>What&apos;s Included</Heading>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-soft">
            <thead>
              <tr className="border-b border-silk-rose">
                <th className="text-left p-6 font-sans font-medium">Feature</th>
                <th className="p-6 text-center font-serif text-xl">Essential</th>
                <th className="p-6 text-center font-serif text-xl bg-gold/5">Signature</th>
                <th className="p-6 text-center font-serif text-xl">Luxe</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Duration</td>
                <td className="p-6 text-center text-foreground-muted">5 Days</td>
                <td className="p-6 text-center bg-gold/5">7 Days</td>
                <td className="p-6 text-center text-foreground-muted">10-14 Days</td>
              </tr>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Treatments Included</td>
                <td className="p-6 text-center text-foreground-muted">2-3</td>
                <td className="p-6 text-center bg-gold/5">4-6</td>
                <td className="p-6 text-center text-foreground-muted">Unlimited</td>
              </tr>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Accommodation</td>
                <td className="p-6 text-center text-foreground-muted">4-Star Boutique</td>
                <td className="p-6 text-center bg-gold/5">5-Star Luxury</td>
                <td className="p-6 text-center text-foreground-muted">Premium Suite</td>
              </tr>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Airport Transfers</td>
                <td className="p-6 text-center">
                  <CheckIcon />
                </td>
                <td className="p-6 text-center bg-gold/5">
                  <CheckIcon />
                </td>
                <td className="p-6 text-center">
                  <CheckIcon />
                </td>
              </tr>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Personal Guide</td>
                <td className="p-6 text-center text-foreground-muted">Clinic visits only</td>
                <td className="p-6 text-center bg-gold/5">Full-time</td>
                <td className="p-6 text-center text-foreground-muted">24/7 Dedicated</td>
              </tr>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Private Vehicle</td>
                <td className="p-6 text-center">
                  <XIcon />
                </td>
                <td className="p-6 text-center bg-gold/5">
                  <CheckIcon />
                </td>
                <td className="p-6 text-center">
                  <CheckIcon />
                </td>
              </tr>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Cultural Experiences</td>
                <td className="p-6 text-center">
                  <XIcon />
                </td>
                <td className="p-6 text-center bg-gold/5">
                  <CheckIcon />
                </td>
                <td className="p-6 text-center">
                  <CheckIcon />
                </td>
              </tr>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Welcome Dinner</td>
                <td className="p-6 text-center">
                  <CheckIcon />
                </td>
                <td className="p-6 text-center bg-gold/5">Michelin-starred</td>
                <td className="p-6 text-center text-foreground-muted">Private Chef Option</td>
              </tr>
              <tr className="border-b border-silk-rose/50">
                <td className="p-6 font-medium">Travel Insurance</td>
                <td className="p-6 text-center">
                  <XIcon />
                </td>
                <td className="p-6 text-center bg-gold/5">
                  <CheckIcon />
                </td>
                <td className="p-6 text-center">
                  <CheckIcon />
                </td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Follow-up Plan</td>
                <td className="p-6 text-center text-foreground-muted">3 months</td>
                <td className="p-6 text-center bg-gold/5">6 months</td>
                <td className="p-6 text-center text-foreground-muted">12 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Add-Ons */}
      <Section bg="blank">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Enhance Your Experience</Label>
          <Heading level={2} className="mb-4">
            Optional Add-Ons
          </Heading>
          <Text muted>
            Customize your package with additional treatments, travel upgrades, or unique experiences.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Treatment Add-Ons */}
          <div>
            <Heading level={3} className="text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              Treatments
            </Heading>
            <div className="space-y-4">
              {addOns
                .filter((a) => a.category === "treatment")
                .map((addon) => (
                  <div key={addon.name} className="bg-silk-rose rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Text className="font-medium">{addon.name}</Text>
                      <Text className="text-gold font-medium text-sm">{addon.price}</Text>
                    </div>
                    <Text size="small" muted>
                      {addon.description}
                    </Text>
                  </div>
                ))}
            </div>
          </div>

          {/* Travel Add-Ons */}
          <div>
            <Heading level={3} className="text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Travel
            </Heading>
            <div className="space-y-4">
              {addOns
                .filter((a) => a.category === "travel")
                .map((addon) => (
                  <div key={addon.name} className="bg-silk-rose rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Text className="font-medium">{addon.name}</Text>
                      <Text className="text-gold font-medium text-sm">{addon.price}</Text>
                    </div>
                    <Text size="small" muted>
                      {addon.description}
                    </Text>
                  </div>
                ))}
            </div>
          </div>

          {/* Experience Add-Ons */}
          <div>
            <Heading level={3} className="text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              Experiences
            </Heading>
            <div className="space-y-4">
              {addOns
                .filter((a) => a.category === "experience")
                .map((addon) => (
                  <div key={addon.name} className="bg-silk-rose rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Text className="font-medium">{addon.name}</Text>
                      <Text className="text-gold font-medium text-sm">{addon.price}</Text>
                    </div>
                    <Text size="small" muted>
                      {addon.description}
                    </Text>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Every Package Includes */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Standard With Every Package</Label>
          <Heading level={2}>Every Journey Includes</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item) => (
            <FeatureCard
              key={item.title}
              icon={iconMap[item.icon]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Start Your Journey</Label>
          <Display className="text-white mb-6">Ready to Transform?</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a complimentary consultation to discuss your goals and we&apos;ll design the perfect package for you.
          </Text>
          <Link href="/contact">
            <Button variant="gold" size="lg">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-foreground-muted/40 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
