"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Container } from "../layout/container";
import { Display, Text, Label } from "../ui/typography";
import { linkButtonStyles } from "../ui/button";

interface HeroMinimalProps {
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
  align?: "left" | "center";
  className?: string;
}

export function HeroMinimal({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  align = "center",
  className,
}: HeroMinimalProps) {
  return (
    <section
      className={cn(
        "relative min-h-[80vh] flex items-center overflow-hidden",
        "bg-gradient-to-b from-silk-rose via-blank to-blank",
        className
      )}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cotton rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold rounded-full opacity-10 blur-3xl" />

      <Container className="relative z-10 py-32">
        <div
          className={cn(
            "flex flex-col max-w-3xl",
            align === "center" ? "text-center items-center mx-auto" : "text-left items-start"
          )}
        >
          {label && (
            <Label className="mb-6 block">{label}</Label>
          )}
          <Display className="mb-6">{title}</Display>
          <Text
            size="body"
            muted
            className="mb-10 text-lg md:text-xl max-w-2xl"
          >
            {subtitle}
          </Text>
          <div
            className={cn(
              "flex flex-wrap gap-4",
              align === "center" && "justify-center"
            )}
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={linkButtonStyles({ variant: "gold", size: "lg" })}
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={linkButtonStyles({ variant: "ghost", size: "lg" })}
              >
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
      </Container>
    </section>
  );
}
