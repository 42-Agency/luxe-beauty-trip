"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-solaris text-white rounded-full
    hover:shadow-gold-glow hover:-translate-y-0.5
    active:translate-y-0 active:shadow-soft
  `,
  secondary: `
    bg-transparent text-midnight border-2 border-midnight rounded-full
    hover:bg-midnight hover:text-white
    active:bg-midnight/90
  `,
  ghost: `
    bg-transparent text-midnight px-0 relative
    after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold
    after:transition-all after:duration-300 after:ease-luxe
    hover:after:w-full
  `,
  gold: `
    bg-gold text-white rounded-full
    hover:shadow-gold-glow-lg hover:-translate-y-0.5
    active:translate-y-0
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const ghostSizeStyles: Record<ButtonSize, string> = {
  sm: "py-1 text-sm",
  md: "py-2 text-base",
  lg: "py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconRight,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isGhost = variant === "ghost";

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-sans font-medium",
          "transition-all duration-300 ease-luxe cursor-pointer",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none",
          variantStyles[variant],
          isGhost ? ghostSizeStyles[size] : sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && !loading && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

/* ===== Link Button (for Next.js Link usage) ===== */
interface LinkButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

export const linkButtonStyles = ({
  variant = "primary",
  size = "md",
  className,
}: Omit<LinkButtonProps, "children">) => {
  const isGhost = variant === "ghost";
  return cn(
    "inline-flex items-center justify-center gap-2 font-sans font-medium",
    "transition-all duration-300 ease-luxe cursor-pointer",
    variantStyles[variant],
    isGhost ? ghostSizeStyles[size] : sizeStyles[size],
    className
  );
};
