"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ElementType, ComponentPropsWithoutRef } from "react";

/* ===== Heading Component ===== */
type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  level?: HeadingLevel;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
  1: "font-serif text-4xl sm:text-5xl md:text-h1 text-foreground tracking-tight",
  2: "font-serif text-3xl sm:text-4xl md:text-h2 text-foreground tracking-tight",
  3: "font-serif text-2xl md:text-h3 text-foreground",
  4: "font-sans text-lg md:text-h4 text-foreground uppercase tracking-wider font-semibold",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, as, children, className }, ref) => {
    const Tag = as || (`h${level}` as ElementType);

    return (
      <Tag ref={ref} className={cn(headingStyles[level], className)}>
        {children}
      </Tag>
    );
  }
);
Heading.displayName = "Heading";

/* ===== Display Heading (Hero-sized) ===== */
interface DisplayProps {
  children: React.ReactNode;
  className?: string;
}

export const Display = forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ children, className }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "font-serif text-5xl sm:text-6xl md:text-7xl lg:text-display font-light text-foreground tracking-tight leading-none",
          className
        )}
      >
        {children}
      </h1>
    );
  }
);
Display.displayName = "Display";

/* ===== Text Component ===== */
type TextSize = "body" | "small" | "caption";

interface TextProps extends ComponentPropsWithoutRef<"p"> {
  size?: TextSize;
  muted?: boolean;
  as?: "p" | "span" | "div";
}

const textStyles: Record<TextSize, string> = {
  body: "text-base md:text-body leading-relaxed",
  small: "text-sm md:text-small leading-relaxed",
  caption: "text-xs md:text-caption uppercase tracking-widest font-medium",
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = "body", muted = false, as = "p", className, children, ...props }, ref) => {
    const Tag = as;

    return (
      <Tag
        ref={ref}
        className={cn(
          "font-sans",
          textStyles[size],
          muted ? "text-foreground-muted" : "text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Text.displayName = "Text";

/* ===== Quote Component ===== */
interface QuoteProps {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}

export const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ children, attribution, className }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn(
          "relative pl-6 border-l-2 border-gold",
          className
        )}
      >
        <p className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed">
          &ldquo;{children}&rdquo;
        </p>
        {attribution && (
          <cite className="mt-4 block font-sans text-small text-foreground-muted not-italic">
            {attribution}
          </cite>
        )}
      </blockquote>
    );
  }
);
Quote.displayName = "Quote";

/* ===== Label Component ===== */
interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ children, className }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-block font-sans text-xs uppercase tracking-[0.2em] font-medium text-gold",
          className
        )}
      >
        {children}
      </span>
    );
  }
);
Label.displayName = "Label";
