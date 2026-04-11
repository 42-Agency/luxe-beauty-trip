"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Section } from "../layout/section";
import { Heading, Label } from "../ui/typography";
import { TestimonialCard } from "../ui/card";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location?: string;
  image?: string;
}

interface TestimonialCarouselProps {
  label?: string;
  title?: string;
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialCarousel({
  label,
  title,
  testimonials,
  className,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section bg="blank" className={className}>
      {/* Header */}
      {(label || title) && (
        <div className="text-center max-w-2xl mx-auto mb-12">
          {label && <Label className="mb-4 block">{label}</Label>}
          {title && (
            <Heading level={2}>{title}</Heading>
          )}
        </div>
      )}

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-luxe"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  location={testimonial.location}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {testimonials.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12
                       w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center
                       text-foreground hover:text-gold transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12
                       w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center
                       text-foreground hover:text-gold transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "w-8 bg-gold"
                    : "bg-midnight/20 hover:bg-midnight/40"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
