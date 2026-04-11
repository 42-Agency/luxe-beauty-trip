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
import { galleryResults, treatmentFilters } from "@/lib/data/gallery";
import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredResults =
    activeFilter === "all"
      ? galleryResults
      : galleryResults.filter((r) => r.treatmentSlug === activeFilter);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Results Gallery"
        title="Real Results, Real Transformations"
        subtitle="See the incredible transformations our clients have achieved. Every journey is unique, but the results speak for themselves."
        align="center"
      />

      {/* Filter Tabs */}
      <Section bg="blank" size="sm">
        <div className="flex flex-wrap justify-center gap-3">
          {treatmentFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-gold text-white shadow-md"
                  : "bg-silk-rose text-foreground hover:bg-cotton"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </Section>

      {/* Results Grid */}
      <Section bg="silk-rose">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-400"
            >
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={result.beforeImage}
                      alt={`${result.clientName} before treatment`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-midnight/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={result.afterImage}
                      alt={`${result.clientName} after treatment`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Treatment Badge */}
                <Link href={`/treatments/${result.treatmentSlug}`}>
                  <span className="inline-block bg-silk-rose text-gold px-3 py-1 rounded-full text-xs font-medium mb-4 hover:bg-gold hover:text-white transition-colors">
                    {result.treatment}
                  </span>
                </Link>

                {/* Client Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <Text className="font-medium">{result.clientName}</Text>
                    <Text size="small" muted>
                      {result.location} &bull; Age {result.age}
                    </Text>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="relative mb-6">
                  <svg
                    className="absolute -top-2 -left-2 w-8 h-8 text-gold/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <Text muted className="italic pl-6">
                    &ldquo;{result.quote}&rdquo;
                  </Text>
                </blockquote>

                {/* Details */}
                <div className="flex flex-wrap gap-4 text-sm border-t border-silk-rose pt-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <Text size="small" muted>{result.stayDuration}</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <Text size="small" muted>{result.treatments.length} treatments</Text>
                  </div>
                </div>

                {/* Treatments List */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {result.treatments.map((treatment) => (
                    <span
                      key={treatment}
                      className="bg-silk-rose px-2 py-1 rounded text-xs text-foreground-muted"
                    >
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResults.length === 0 && (
          <div className="text-center py-16">
            <Text muted className="text-lg mb-4">
              No results found for this treatment.
            </Text>
            <button
              onClick={() => setActiveFilter("all")}
              className="text-gold font-medium hover:underline"
            >
              View all results
            </button>
          </div>
        )}
      </Section>

      {/* Disclaimer */}
      <Section bg="blank" size="sm">
        <div className="bg-silk-rose rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <Heading level={3} className="text-xl mb-4">
            About Our Results
          </Heading>
          <Text muted>
            All results shown are from real clients who have completed treatments through Luxe Beauty Trip. Individual results vary based on skin type, age, lifestyle, and treatment plan. Photos are taken with consistent lighting and minimal processing. During your consultation, we&apos;ll discuss realistic expectations for your unique situation.
          </Text>
        </div>
      </Section>

      {/* Stats */}
      <Section bg="silk-rose" size="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-serif text-4xl md:text-5xl text-gold mb-2">500+</div>
            <Label>Transformations</Label>
          </div>
          <div>
            <div className="font-serif text-4xl md:text-5xl text-gold mb-2">98%</div>
            <Label>Satisfaction Rate</Label>
          </div>
          <div>
            <div className="font-serif text-4xl md:text-5xl text-gold mb-2">85%</div>
            <Label>Return Clients</Label>
          </div>
          <div>
            <div className="font-serif text-4xl md:text-5xl text-gold mb-2">12</div>
            <Label>Partner Clinics</Label>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Your Transformation Awaits</Label>
          <Display className="text-white mb-6">Ready to See Your Results?</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a complimentary consultation and let&apos;s discuss what&apos;s possible for your skin.
          </Text>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Book Consultation
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
