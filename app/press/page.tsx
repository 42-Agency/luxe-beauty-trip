import { Header, Footer, Section } from "@/components/layout";
import {
  Heading,
  Display,
  Text,
  Label,
  Button,
} from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";
import {
  pressFeatures,
  pressQuotes,
  publicationLogos,
  mediaContact,
} from "@/lib/data/press";
import Link from "next/link";

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Press & Media"
        title="In the Spotlight"
        subtitle="Luxe Beauty Trip has been featured in leading publications for our innovative approach to Korean beauty tourism."
        align="center"
      />

      {/* Logo Cloud */}
      <Section bg="blank" size="sm">
        <div className="text-center mb-8">
          <Label className="text-foreground-muted">As Featured In</Label>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {publicationLogos.map((pub) => (
            <div
              key={pub.name}
              className="text-2xl md:text-3xl font-serif text-midnight/80 hover:text-gold transition-colors"
              title={pub.name}
            >
              {pub.name}
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Press Quotes */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">What They&apos;re Saying</Label>
          <Heading level={2}>Press Highlights</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pressQuotes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-soft relative"
            >
              <svg
                className="absolute top-6 left-6 w-10 h-10 text-gold/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="relative z-10">
                <Text className="text-lg italic mb-4 pl-8">
                  &ldquo;{item.quote}&rdquo;
                </Text>
                <footer className="pl-8">
                  <Text className="font-medium text-gold">
                    — {item.publication}
                  </Text>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </Section>

      {/* Press Features */}
      <Section bg="blank">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Recent Coverage</Label>
          <Heading level={2}>Featured Articles</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressFeatures.map((feature) => (
            <article
              key={feature.id}
              className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lift transition-all duration-300 group"
            >
              <div className="bg-silk-rose p-6 flex items-center justify-center h-24">
                <span className="font-serif text-xl text-midnight/80 group-hover:text-gold transition-colors">
                  {feature.publication}
                </span>
              </div>
              <div className="p-6">
                <Text size="small" className="text-gold mb-2">
                  {feature.date}
                </Text>
                <Heading level={4} className="text-lg mb-3 normal-case tracking-normal line-clamp-2">
                  {feature.title}
                </Heading>
                <Text size="small" muted className="line-clamp-3">
                  {feature.excerpt}
                </Text>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Press Kit & Contact */}
      <Section bg="silk-rose">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Press Kit */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <Heading level={3} className="text-xl mb-3">
              Press Kit
            </Heading>
            <Text muted className="mb-6">
              Download our press kit for high-resolution images, brand assets, company information, and founder bios.
            </Text>
            <Button variant="gold">
              Download Press Kit
            </Button>
          </div>

          {/* Media Contact */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <Heading level={3} className="text-xl mb-3">
              Media Inquiries
            </Heading>
            <Text muted className="mb-6">
              For press inquiries, interview requests, or partnership opportunities, please reach out to our media team.
            </Text>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${mediaContact.email}`} className="text-gold hover:underline">
                  {mediaContact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-foreground">{mediaContact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Collaboration Section */}
      <Section bg="blank">
        <div className="bg-midnight rounded-2xl p-8 md:p-12 text-center">
          <Label className="mb-4 block text-gold">Work With Us</Label>
          <Heading level={2} className="text-white mb-4">
            Interested in Collaboration?
          </Heading>
          <Text className="text-white/80 mb-8 max-w-2xl mx-auto">
            We partner with travel writers, beauty editors, and content creators who share our passion for Korean skincare and luxury travel experiences.
          </Text>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center max-w-xs">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 text-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <Text className="text-white font-medium mb-2">Press Trips</Text>
              <Text size="small" className="text-white/60">
                Hosted experiences for select media
              </Text>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center max-w-xs">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 text-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <Text className="text-white font-medium mb-2">Influencer Program</Text>
              <Text size="small" className="text-white/60">
                Partnership opportunities for creators
              </Text>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center max-w-xs">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 text-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <Text className="text-white font-medium mb-2">Expert Commentary</Text>
              <Text size="small" className="text-white/60">
                Source quotes on beauty tourism trends
              </Text>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Experience It Yourself</Label>
          <Display className="text-white mb-6">Ready for Your Transformation?</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Join the hundreds of women who have discovered the Korean skincare difference.
          </Text>
          <Link href="/contact">
            <Button variant="gold" size="lg">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
