import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, Section } from "@/components/layout";
import { Heading, Text, Label, Display } from "@/components/ui";
import { HeroMinimal } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Blog — Korea Beauty Travel Guides | Luxe Beauty Trip",
  description: "Treatment guides, Korea beauty vacation tips, and everything North Americans need to know before booking a Seoul aesthetic trip.",
};

const posts = [
  {
    slug: "how-to-plan-kbeauty-trip-seoul-part-one",
    tag: "Travel Guide · Part 1 of 3",
    title: "How to Plan a K-Beauty Trip to Seoul — Part One",
    excerpt: "Before you research clinics or book flights, you need one thing: a clear treatment plan. What to treat, which procedures are only available in Korea, and how to sequence around downtime.",
    date: "June 2026",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroMinimal
        label="The Journal"
        title="Korea Beauty Guides"
        subtitle="Treatment guides, travel tips, and everything you need to know before your K-beauty trip to Seoul."
        align="center"
      />

      <Section bg="blank">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-silk-rose rounded-2xl p-8 flex flex-col h-full transition-shadow hover:shadow-lift">
                  <span className="text-xs font-medium tracking-widest uppercase text-gold mb-4 block">
                    {post.tag}
                  </span>
                  <Heading level={3} className="mb-3 group-hover:text-gold transition-colors text-xl leading-snug">
                    {post.title}
                  </Heading>
                  <Text muted className="mb-6 flex-1 text-sm leading-relaxed">
                    {post.excerpt}
                  </Text>
                  <span className="text-sm text-trufflet">
                    {post.date} &nbsp;·&nbsp; {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="midnight" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Label className="mb-4 block text-gold">Plan Your Trip</Label>
          <Display className="text-white mb-6">Ready to Go to Seoul?</Display>
          <Text className="text-white/80 mb-10 text-lg">
            Book a free discovery call and we&apos;ll build your personalised treatment plan.
          </Text>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-medium rounded-full hover:bg-gold/90 transition-colors"
          >
            Book Your Free Call
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
