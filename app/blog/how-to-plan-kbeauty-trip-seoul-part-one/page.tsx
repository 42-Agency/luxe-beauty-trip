import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, Section } from "@/components/layout";
import { Heading, Text, Label } from "@/components/ui";

export const metadata: Metadata = {
  title: "How to Plan a K-Beauty Trip to Seoul — Part One | Luxe Beauty Trip",
  description: "Everything you need to build your Seoul treatment plan — what to treat, which procedures are only available in Korea, and how to sequence around downtime.",
};

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-silk-rose rounded-xl p-5 text-center">
      <p className="text-xs font-medium tracking-widest uppercase text-trufflet mb-2">{label}</p>
      <p className="font-serif text-lg text-midnight">{value}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-silk-rose my-12" />;
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Post Hero */}
      <section className="bg-gradient-to-b from-silk-rose to-blank pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Label className="mb-6 block">Travel Guide</Label>
          <h1 className="font-serif text-h1 text-midnight mb-6 leading-tight">
            How to Plan a K-Beauty Trip to Seoul — Part One
          </h1>
          <p className="text-sm text-trufflet">June 2026 &nbsp;·&nbsp; 4 min read</p>
        </div>
      </section>

      {/* Article Body */}
      <Section bg="blank">
        <div className="max-w-2xl mx-auto">

          <Text className="text-lg leading-relaxed text-midnight/80 mb-12">
            Seoul has quietly become one of the world&apos;s top destinations for aesthetic treatments — not because of tourism marketing, but because North American women started going and coming back with results they couldn&apos;t get at home. Before you research clinics or book flights, you need one thing first: a clear treatment plan. Here&apos;s how to build it.
          </Text>

          {/* Section 1 */}
          <Heading level={2} className="mb-6">1. Decide What You Actually Want to Treat</Heading>

          <Text muted className="mb-6 leading-relaxed">
            The most common mistake first-timers make is arriving in Seoul without a clear treatment plan. Seoul&apos;s clinics offer hundreds of procedures — and without knowing your specific goals, you&apos;ll spend your first day overwhelmed rather than booked in.
          </Text>

          <Text muted className="mb-4 leading-relaxed">Before you research clinics, answer these questions:</Text>

          <ul className="space-y-3 mb-8">
            {[
              "Are you focused on skin quality (texture, hydration, glow) or structural lifting and tightening?",
              "Do you have specific concerns — pigmentation, acne scarring, fine lines, pore size?",
              "Are you open to injectables, or looking for device-based treatments only?",
              "How much downtime can you accommodate during the trip?",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1 flex-shrink-0">✦</span>
                <Text muted className="leading-relaxed">{item}</Text>
              </li>
            ))}
          </ul>

          <Text muted className="leading-relaxed mb-4">
            Your answers determine your treatment categories.{" "}
            <Link href="/treatments" className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors">
              Browse the full treatment guide
            </Link>{" "}
            to understand what&apos;s available and what each procedure targets — it&apos;s a useful starting point before you contact any clinic.
          </Text>

          <Divider />

          {/* Section 2 */}
          <Heading level={2} className="mb-2">2. Know Which Treatments Are Only Available in Korea</Heading>
          <span className="text-xs font-medium tracking-widest uppercase text-gold block mb-6">Korea Exclusive</span>

          <Text muted className="mb-6 leading-relaxed">
            Several of the most sought-after treatments in Seoul are unavailable in the US entirely — not because they&apos;re experimental, but because they haven&apos;t received FDA approval. This is one of the primary reasons women fly specifically for this purpose.
          </Text>

          <Text muted className="mb-4 leading-relaxed">The key ones to know:</Text>

          <ul className="space-y-5 mb-8">
            {[
              { name: "Rejuran Healer (PDRN)", desc: "Polynucleotide injections that regenerate skin from within. A foundational treatment in Korean dermatology, unavailable in North America." },
              { name: "Juvelook", desc: "A skin booster combining hyaluronic acid with collagen-stimulating PDLA microspheres. No equivalent exists in the US market." },
              { name: "Exosome Therapy", desc: "Applied post-microneedling to amplify healing and regeneration. Korean clinics use clinical-grade formulations that aren't available in the West." },
              { name: "Oligio RF", desc: "A Korean monopolar radiofrequency device for skin tightening, comparable to Thermage but less painful and not FDA-cleared." },
              { name: "Sylfirm X", desc: "FDA-cleared but rarely offered in the US. Korean clinics use it daily for pigmentation, rosacea, and pore refinement." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1 flex-shrink-0">✦</span>
                <div>
                  <Text className="font-medium text-midnight">{item.name}</Text>
                  <Text muted className="text-sm leading-relaxed">{item.desc}</Text>
                </div>
              </li>
            ))}
          </ul>

          <Text muted className="leading-relaxed">
            For treatments that do exist in North America — HIFU, Thermage, Botox — Seoul clinics typically charge 50–70% less, with doctors who perform these procedures at significantly higher volumes.
          </Text>

          <Divider />

          {/* Section 3 */}
          <Heading level={2} className="mb-6">3. Sequence Your Treatments Around Downtime</Heading>

          <Text muted className="mb-8 leading-relaxed">
            Not all treatments play nicely together in the same week. Some combinations are additive; others conflict. Downtime is the most important variable to plan around.
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <StatBox label="No downtime" value="Rejuran, Skin Boosters, RF Tightening" />
            <StatBox label="2–3 days" value="HIFU, Sylfirm X, Potenza" />
            <StatBox label="5–7 days" value="CO2 Laser, deep peels, resurfacing" />
          </div>

          <Text muted className="leading-relaxed mb-4">
            A practical rule: schedule treatments with downtime in the first half of your trip so you&apos;ve recovered before cultural activities and social experiences. Leave low-downtime treatments for the second half so you&apos;re not managing redness or peeling on your last day.
          </Text>

          <Text muted className="leading-relaxed">
            On a 6-day trip, a realistic plan looks like two to three clinic appointments, spaced to allow recovery, with spa and cultural experiences filling the days in between.
          </Text>

          <Divider />

          {/* CTA Box */}
          <div className="bg-midnight rounded-2xl p-8 text-center mb-10">
            <Heading level={3} className="text-white mb-3 text-xl">Not Sure Which Treatments Are Right for You?</Heading>
            <Text className="text-white/70 mb-6 text-sm leading-relaxed">
              That&apos;s exactly what our free discovery call is for. We&apos;ll talk through your skin goals and build a personalised treatment plan before you book anything.
            </Text>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold text-white text-sm font-medium rounded-full hover:bg-gold/90 transition-colors"
            >
              Book Your Free Call
            </Link>
          </div>

          {/* Series teaser */}
          <div className="border border-silk-rose rounded-xl p-6">
            <Text className="text-xs font-medium tracking-widest uppercase text-trufflet mb-2 block">Up Next</Text>
            <Text className="font-medium text-midnight">Part Two — How to Choose a Clinic in Seoul &amp; What to Budget</Text>
            <Text muted className="text-sm mt-1">Coming soon.</Text>
          </div>

        </div>
      </Section>

      <Footer />
    </main>
  );
}
