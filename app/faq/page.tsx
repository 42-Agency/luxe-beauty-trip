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
import { faqCategories } from "@/lib/data/faqs";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  airplane: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  sparkles: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].slug);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const currentCategory = faqCategories.find((c) => c.slug === activeCategory);

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <HeroMinimal
        label="FAQ"
        title="Questions Answered"
        subtitle="Everything you need to know about your Korean beauty journey. Can't find what you're looking for? We're just a message away."
        align="center"
      />

      {/* Main Content */}
      <Section bg="blank">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {faqCategories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => {
                    setActiveCategory(category.slug);
                    setOpenQuestions([]);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeCategory === category.slug
                      ? "bg-gold text-white shadow-md"
                      : "bg-silk-rose hover:bg-cotton"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeCategory === category.slug
                        ? "bg-white/20"
                        : "bg-white"
                    }`}
                  >
                    <span className={activeCategory === category.slug ? "text-white" : "text-gold"}>
                      {iconMap[category.icon]}
                    </span>
                  </span>
                  <div>
                    <Text className={`font-medium ${activeCategory === category.slug ? "text-white" : ""}`}>
                      {category.title}
                    </Text>
                    <Text
                      size="small"
                      className={activeCategory === category.slug ? "text-white/70" : "text-foreground-muted"}
                    >
                      {category.faqs.length} questions
                    </Text>
                  </div>
                </button>
              ))}

              {/* Contact Card */}
              <div className="mt-8 bg-silk-rose rounded-xl p-6">
                <Heading level={4} className="text-lg mb-3 normal-case tracking-normal">
                  Still have questions?
                </Heading>
                <Text size="small" muted className="mb-4">
                  Our team is here to help you plan your perfect journey.
                </Text>
                <Link href="/contact">
                  <Button variant="gold" size="sm" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {currentCategory && (
              <>
                {/* Category Header */}
                <div className="mb-8 pb-8 border-b border-silk-rose">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      {iconMap[currentCategory.icon]}
                    </span>
                    <Heading level={2}>{currentCategory.title}</Heading>
                  </div>
                  <Text muted>{currentCategory.description}</Text>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                  {currentCategory.faqs.map((faq, index) => {
                    const isOpen = openQuestions.includes(faq.question);
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-soft overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(faq.question)}
                          className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-silk-rose/30 transition-colors"
                        >
                          <Heading
                            level={3}
                            className="text-lg normal-case tracking-normal font-medium"
                          >
                            {faq.question}
                          </Heading>
                          <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full bg-silk-rose flex items-center justify-center transition-transform duration-300 ${
                              isOpen ? "rotate-180 bg-gold" : ""
                            }`}
                          >
                            <svg
                              className={`w-4 h-4 ${isOpen ? "text-white" : "text-foreground"}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="px-6 pb-6 pt-0">
                            <Text muted className="leading-relaxed">
                              {faq.answer}
                            </Text>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section bg="silk-rose">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Label className="mb-4 block">Explore More</Label>
          <Heading level={2}>Helpful Resources</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/how-it-works"
            className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <Heading level={3} className="text-xl mb-2">
              How It Works
            </Heading>
            <Text size="small" muted>
              Learn about our 5-step process from consultation to transformation.
            </Text>
          </Link>

          <Link
            href="/packages"
            className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <Heading level={3} className="text-xl mb-2">
              Our Packages
            </Heading>
            <Text size="small" muted>
              Explore our curated package options and inclusions.
            </Text>
          </Link>

          <Link
            href="/treatments"
            className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <Heading level={3} className="text-xl mb-2">
              Our Treatments
            </Heading>
            <Text size="small" muted>
              Explore the full range of Korean beauty treatments.
            </Text>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Ready to Start?</Label>
          <Display className="text-white mb-6">Book Your Consultation</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Get personalized answers to all your questions in a complimentary video consultation with our beauty concierge.
          </Text>
          <Link href="/contact">
            <Button variant="gold" size="lg">
              Schedule Free Call
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
