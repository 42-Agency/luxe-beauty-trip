"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size = "xl" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full mx-auto px-6 md:px-8 lg:px-12",
          sizeStyles[size],
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";
