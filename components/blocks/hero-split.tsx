"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/container";
import { Display, Text, Label } from "../ui/typography";
import { linkButtonStyles } from "../ui/button";

interface HeroSplitProps {
  label?: string;
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  className?: string;
}

export function HeroSplit({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "Hero image",
  reverse = false,
  className,
}: HeroSplitProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center bg-silk-rose overflow-hidden",
        className
      )}
    >
      <Container className="py-32 lg:py-0">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Content */}
          <div className="max-w-xl">
            {label && (
              <Label className="mb-6 block">{label}</Label>
            )}
            <Display className="mb-6">{title}</Display>
            <Text size="body" muted className="mb-10 text-lg">
              {subtitle}
            </Text>
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className={linkButtonStyles({ variant: "gold", size: "lg" })}>
                  {primaryCta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className={linkButtonStyles({ variant: "ghost", size: "lg" })}>
                  {secondaryCta.text}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-lift">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-cotton rounded-full opacity-40 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
