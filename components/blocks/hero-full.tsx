"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/container";
import { Display, Text, Label } from "../ui/typography";
import { linkButtonStyles } from "../ui/button";

interface HeroFullProps {
  label?: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    href: string;
  };
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
  overlay?: "light" | "dark" | "gradient";
  align?: "left" | "center" | "right";
  className?: string;
}

const overlayStyles = {
  light: "bg-white/40",
  dark: "bg-midnight/50",
  gradient: "bg-gradient-to-r from-midnight/70 via-midnight/40 to-transparent",
};

const alignStyles = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

export function HeroFull({
  label,
  title,
  subtitle,
  cta,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "Hero image",
  overlay = "gradient",
  align = "left",
  className,
}: HeroFullProps) {
  const isDark = overlay === "dark" || overlay === "gradient";
  // Support both cta and primaryCta
  const mainCta = cta || primaryCta;

  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className={cn("absolute inset-0", overlayStyles[overlay])} />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-32">
        <div
          className={cn(
            "flex flex-col max-w-2xl",
            alignStyles[align],
            align === "center" && "mx-auto",
            align === "right" && "ml-auto"
          )}
        >
          {label && (
            <Label
              className={cn(
                "mb-6 block",
                isDark ? "text-gold" : "text-gold"
              )}
            >
              {label}
            </Label>
          )}
          <Display
            className={cn(
              "mb-6",
              isDark ? "text-white" : "text-foreground"
            )}
          >
            {title}
          </Display>
          <Text
            size="body"
            className={cn(
              "mb-10 text-lg",
              isDark ? "text-white/80" : "text-foreground-muted"
            )}
          >
            {subtitle}
          </Text>
          <div
            className={cn(
              "flex flex-wrap gap-4",
              align === "center" && "justify-center",
              align === "right" && "justify-end"
            )}
          >
            {mainCta && (
              <Link
                href={mainCta.href}
                className={linkButtonStyles({ variant: "gold", size: "lg" })}
              >
                {mainCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={cn(
                  linkButtonStyles({ variant: "secondary", size: "lg" }),
                  isDark && "border-white text-white hover:bg-white hover:text-midnight"
                )}
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
