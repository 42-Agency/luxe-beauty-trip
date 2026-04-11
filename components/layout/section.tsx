"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Container } from "./container";

type SectionBackground = "blank" | "silk-rose" | "midnight";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: SectionBackground;
  size?: "sm" | "md" | "lg";
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  id?: string;
}

const bgStyles: Record<SectionBackground, string> = {
  blank: "bg-blank",
  "silk-rose": "bg-silk-rose",
  midnight: "bg-midnight text-white",
};

const sizeStyles = {
  sm: "py-12 md:py-16 lg:py-20",
  md: "py-16 md:py-24 lg:py-28",
  lg: "py-20 md:py-28 lg:py-36",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      className,
      bg = "blank",
      size = "md",
      container = true,
      containerSize = "xl",
      id,
    },
    ref
  ) => {
    const content = container ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        id={id}
        className={cn(bgStyles[bg], sizeStyles[size], className)}
      >
        {content}
      </section>
    );
  }
);
Section.displayName = "Section";

/* ===== Split Layout ===== */
interface SplitProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  gap?: "sm" | "md" | "lg" | "xl";
  verticalAlign?: "start" | "center" | "end";
}

const gapStyles = {
  sm: "gap-8",
  md: "gap-12",
  lg: "gap-16",
  xl: "gap-20",
};

const alignStyles = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

export const Split = forwardRef<HTMLDivElement, SplitProps>(
  ({ children, className, reverse = false, gap = "lg", verticalAlign = "center" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2",
          gapStyles[gap],
          alignStyles[verticalAlign],
          reverse && "lg:[&>*:first-child]:order-2",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Split.displayName = "Split";
