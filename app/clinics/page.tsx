"use client";

import { useState } from "react";
import { Header, Footer, Section } from "@/components/layout";
import {
  Heading,
  Display,
  Text,
  Label,
  Button,
} from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";
import { clinics, selectionCriteria } from "@/lib/data/clinics";
import Link from "next/link";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  building: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  handshake: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export default function ClinicsPage() {
  const [expandedClinic, setExpandedClinic] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Our Partners"
        title="Seoul's Premier Clinics"
        subtitle="We've personally vetted every partner clinic to ensure world-class care. These are the practitioners we trust with our own skin."
        align="center"
      />

      {/* Featured Clinics */}
      <Section bg="blank">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Featured Partners</Label>
          <Heading level={2}>Meet Our Partner Clinics</Heading>
          <Text muted className="mt-4">
            Each clinic has been selected for their expertise, safety standards, and exceptional care of international patients.
          </Text>
        </div>

        <div className="space-y-8">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-lift transition-all duration-400"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Clinic Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={clinic.image}
                    alt={clinic.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    Est. {clinic.established}
                  </div>
                </div>

                {/* Clinic Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Heading level={3} className="text-2xl mb-1">
                        {clinic.name}
                      </Heading>
                      <Text size="small" muted className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {clinic.location}
                      </Text>
                    </div>
                    <span className="text-gold/60 font-serif text-lg">
                      {clinic.nameKorean}
                    </span>
                  </div>

                  <Text muted className="mb-6">
                    {clinic.description}
                  </Text>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {clinic.specialty.map((spec) => (
                      <span
                        key={spec}
                        className="bg-silk-rose text-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {clinic.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <Text size="small">{highlight}</Text>
                      </div>
                    ))}
                  </div>

                  {/* Expand/Collapse */}
                  <button
                    onClick={() =>
                      setExpandedClinic(
                        expandedClinic === clinic.id ? null : clinic.id
                      )
                    }
                    className="text-gold font-medium text-sm flex items-center gap-2 hover:underline"
                  >
                    {expandedClinic === clinic.id ? "Show Less" : "View Practitioners & Credentials"}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedClinic === clinic.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedClinic === clinic.id ? "max-h-[500px] mt-6" : "max-h-0"
                    }`}
                  >
                    {/* Practitioner */}
                    {clinic.practitioners.map((practitioner) => (
                      <div
                        key={practitioner.name}
                        className="flex gap-4 mb-6 p-4 bg-silk-rose rounded-xl"
                      >
                        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={practitioner.image}
                            alt={practitioner.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Text className="font-medium">{practitioner.name}</Text>
                          <Text size="small" className="text-gold mb-2">
                            {practitioner.title} &bull; {practitioner.specialty}
                          </Text>
                          <ul className="space-y-1">
                            {practitioner.credentials.map((cred) => (
                              <li key={cred} className="flex items-center gap-2">
                                <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <Text size="small" muted>{cred}</Text>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}

                    {/* Certifications */}
                    <div className="border-t border-silk-rose pt-4">
                      <Text size="small" className="font-medium mb-3">
                        Certifications & Accreditations
                      </Text>
                      <div className="flex flex-wrap gap-2">
                        {clinic.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="bg-midnight/5 text-foreground-muted px-3 py-1 rounded text-xs"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How We Select Partners */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Our Standards</Label>
          <Heading level={2}>How We Select Partners</Heading>
          <Text muted className="mt-4">
            We don&apos;t partner with just anyone. Every clinic undergoes rigorous vetting before we recommend them to our clients.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectionCriteria.map((criterion) => (
            <div
              key={criterion.title}
              className="bg-white rounded-xl p-6 shadow-soft"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 text-gold">
                {iconMap[criterion.icon]}
              </div>
              <Heading level={4} className="text-lg mb-2 normal-case tracking-normal">
                {criterion.title}
              </Heading>
              <Text size="small" muted>
                {criterion.description}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Section */}
      <Section bg="blank">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Label className="mb-4 block">Our Commitment</Label>
            <Heading level={2} className="mb-6">
              Your Safety, Our Priority
            </Heading>
            <Text muted className="mb-6 text-lg">
              We personally visit each partner clinic regularly, not just once. Our founder maintains close relationships with lead practitioners, ensuring consistent quality and addressing any concerns immediately.
            </Text>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <Text className="font-medium">Direct Communication</Text>
                  <Text size="small" muted>We have direct lines to clinic directors, not just booking staff.</Text>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <Text className="font-medium">Feedback Loop</Text>
                  <Text size="small" muted>Every client review helps us continuously evaluate our partners.</Text>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <Text className="font-medium">No Compromise</Text>
                  <Text size="small" muted>We&apos;ve declined partnerships with clinics that didn&apos;t meet our standards.</Text>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                alt="Medical consultation"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lift p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-serif text-2xl text-gold">100%</div>
              </div>
              <Text size="small" muted>
                Client safety record across all partner clinics
              </Text>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section bg="silk-rose" size="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-serif text-4xl md:text-5xl text-gold mb-2">12</div>
            <Label>Partner Clinics</Label>
          </div>
          <div>
            <div className="font-serif text-4xl md:text-5xl text-gold mb-2">50+</div>
            <Label>Practitioners</Label>
          </div>
          <div>
            <div className="font-serif text-4xl md:text-5xl text-gold mb-2">15+</div>
            <Label>Years Experience</Label>
          </div>
          <div>
            <div className="font-serif text-4xl md:text-5xl text-gold mb-2">500+</div>
            <Label>Happy Clients</Label>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Ready to Experience Korean Excellence?</Label>
          <Display className="text-white mb-6">Book Your Consultation</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Let us match you with the perfect clinic and practitioner for your unique skin goals.
          </Text>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/treatments">
              <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Explore Treatments
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
