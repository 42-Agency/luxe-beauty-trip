"use client";

import { useState } from "react";
import { Header, Footer, Section, Container } from "@/components/layout";
import {
  Heading,
  Text,
  Label,
  Button,
  Input,
  Textarea,
  Select,
} from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";

const treatmentOptions = [
  { value: "glass-skin", label: "Korean Glass Skin Facial" },
  { value: "rejuvenation", label: "Rejuvenation Therapy" },
  { value: "signature", label: "Luxe Signature Facial" },
  { value: "anti-aging", label: "Anti-Aging Treatments" },
  { value: "body", label: "Body Treatments" },
  { value: "combination", label: "Combination Package" },
  { value: "unsure", label: "Not sure yet - need guidance" },
];

const timeframeOptions = [
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "flexible", label: "Flexible / Just exploring" },
];

const hearAboutOptions = [
  { value: "google", label: "Google Search" },
  { value: "instagram", label: "Instagram" },
  { value: "referral", label: "Friend/Family Referral" },
  { value: "press", label: "Press/Media" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="Get in Touch"
        title="Begin Your Transformation"
        subtitle="Schedule a complimentary consultation with our beauty concierge. We'll design a journey tailored to your unique goals."
        align="center"
      />

      {/* Contact Form Section */}
      <Section bg="blank">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="bg-silk-rose rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Heading level={2} className="mb-4">
                  Thank You
                </Heading>
                <Text muted className="text-lg mb-6">
                  We&apos;ve received your inquiry and will be in touch within 24 hours to schedule your consultation.
                </Text>
                <Text size="small" muted>
                  Check your email for a confirmation message.
                </Text>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    placeholder="Your first name"
                    required
                  />
                  <Input
                    label="Last Name"
                    placeholder="Your last name"
                    required
                  />
                </div>

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />

                <Select
                  label="Treatment Interest"
                  options={treatmentOptions}
                  placeholder="Select a treatment"
                  required
                />

                <Select
                  label="Preferred Timeframe"
                  options={timeframeOptions}
                  placeholder="When are you looking to travel?"
                />

                <Textarea
                  label="Tell Us About Your Goals"
                  placeholder="What are your primary skincare concerns? What transformation are you hoping to achieve? Any specific questions?"
                  rows={5}
                />

                <Select
                  label="How Did You Hear About Us?"
                  options={hearAboutOptions}
                  placeholder="Select an option"
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full md:w-auto"
                    loading={isSubmitting}
                  >
                    Request Consultation
                  </Button>
                </div>

                <Text size="small" muted>
                  By submitting this form, you agree to our privacy policy. We&apos;ll never share your information with third parties.
                </Text>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* What to Expect */}
            <div className="bg-silk-rose rounded-2xl p-8">
              <Heading level={3} className="mb-4 text-xl">
                What to Expect
              </Heading>
              <ul className="space-y-4">
                {[
                  "30-minute video consultation",
                  "Personalized skin analysis",
                  "Custom treatment recommendations",
                  "Tailored package proposal",
                  "No obligation to book",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <Text size="small">{item}</Text>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-midnight rounded-2xl p-8 text-white">
              <Heading level={3} className="mb-6 text-xl text-white">
                Other Ways to Reach Us
              </Heading>

              <div className="space-y-6">
                <div>
                  <Label className="text-gold mb-2 block">Email</Label>
                  <a href="mailto:hello@luxebeautytrip.com" className="text-white hover:text-gold transition-colors">
                    hello@luxebeautytrip.com
                  </a>
                </div>

                <div>
                  <Label className="text-gold mb-2 block">WhatsApp</Label>
                  <a href="tel:+14155551234" className="text-white hover:text-gold transition-colors">
                    +1 (415) 555-1234
                  </a>
                </div>

                <div>
                  <Label className="text-gold mb-2 block">Hours</Label>
                  <Text size="small" className="text-white/80">
                    Mon-Fri: 9am - 6pm PST<br />
                    Sat: 10am - 4pm PST
                  </Text>
                </div>

                <div>
                  <Label className="text-gold mb-2 block">Follow Us</Label>
                  <div className="flex gap-4">
                    <a href="#" className="text-white/60 hover:text-gold transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white/60 hover:text-gold transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-silk-rose rounded-2xl p-8">
              <svg className="w-8 h-8 text-gold/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <Text className="italic mb-4">
                &ldquo;From the first call, I knew I was in good hands. The team answered every question and made the entire process effortless.&rdquo;
              </Text>
              <Text size="small" className="font-medium">Michelle Park</Text>
              <Text size="small" muted>Los Angeles, CA</Text>
            </div>
          </div>
        </div>
      </Section>

      {/* Map/Location Placeholder */}
      <Section bg="silk-rose" size="sm">
        <Container size="md">
          <div className="text-center">
            <Label className="mb-4 block">Our Locations</Label>
            <Heading level={3} className="mb-4">
              Offices in LA & Seoul
            </Heading>
            <Text muted>
              Our US team is based in Los Angeles, while our Seoul office coordinates your on-the-ground experience. Both teams work together to ensure your journey is seamless.
            </Text>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
