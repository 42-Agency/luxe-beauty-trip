"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Heading, Text, Label } from "./typography";
import Image from "next/image";

/* ===== Base Card ===== */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = false, padding = "md" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-2xl overflow-hidden transition-all duration-400 ease-luxe",
          hover && "hover:-translate-y-1 hover:shadow-lift cursor-pointer",
          paddingStyles[padding],
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

/* ===== Treatment Card ===== */
interface TreatmentCardProps {
  image: string;
  title: string;
  subtitle?: string;
  price?: string;
  className?: string;
  onClick?: () => void;
}

export const TreatmentCard = forwardRef<HTMLDivElement, TreatmentCardProps>(
  ({ image, title, subtitle, price, className, onClick }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          "group bg-white rounded-2xl overflow-hidden transition-all duration-400 ease-luxe",
          "hover:-translate-y-1 hover:shadow-lift cursor-pointer",
          className
        )}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-luxe group-hover:scale-[1.02]"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>

        {/* Content */}
        <div className="p-5">
          <Heading level={3} className="text-xl mb-1">
            {title}
          </Heading>
          {subtitle && (
            <Text size="small" muted className="mb-3">
              {subtitle}
            </Text>
          )}
          {price && (
            <Text className="text-gold font-medium">{price}</Text>
          )}
        </div>
      </div>
    );
  }
);
TreatmentCard.displayName = "TreatmentCard";

/* ===== Testimonial Card ===== */
interface TestimonialCardProps {
  quote: string;
  name: string;
  location?: string;
  image?: string;
  className?: string;
}

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ quote, name, location, image, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-silk-rose rounded-2xl p-8 transition-all duration-400 ease-luxe",
          className
        )}
      >
        {/* Quote mark */}
        <svg
          className="w-10 h-10 text-gold/40 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Quote text */}
        <p className="font-serif text-xl leading-relaxed text-foreground mb-6 italic">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Attribution */}
        <div className="flex items-center gap-4">
          {image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <Text className="font-medium">{name}</Text>
            {location && (
              <Text size="small" muted>
                {location}
              </Text>
            )}
          </div>
        </div>
      </div>
    );
  }
);
TestimonialCard.displayName = "TestimonialCard";

/* ===== Feature Card ===== */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group bg-white rounded-2xl p-8 transition-all duration-400 ease-luxe",
          "hover:-translate-y-1 hover:shadow-lift",
          className
        )}
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-silk-rose flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        {/* Content */}
        <Heading level={3} className="text-xl mb-3">
          {title}
        </Heading>
        <Text muted>{description}</Text>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

/* ===== Stats Card ===== */
interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatsCard = forwardRef<HTMLDivElement, StatsCardProps>(
  ({ value, label, className }, ref) => {
    return (
      <div ref={ref} className={cn("text-center", className)}>
        <div className="font-serif text-4xl md:text-5xl text-gold mb-2">
          {value}
        </div>
        <Label>{label}</Label>
      </div>
    );
  }
);
StatsCard.displayName = "StatsCard";
