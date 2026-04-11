"use client";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

/* ===== Input ===== */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-sans text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full px-4 py-3 font-sans text-body text-foreground",
              "bg-white border-2 border-midnight/10 rounded-lg",
              "placeholder:text-foreground-muted/60",
              "transition-all duration-300 ease-luxe",
              "focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-solaris focus:border-solaris focus:ring-solaris/10",
              icon && "pl-12",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-solaris">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

/* ===== Textarea ===== */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxLength?: number;
  showCount?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, maxLength, showCount = false, className, id, value, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const currentLength = typeof value === "string" ? value.length : 0;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block font-sans text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            value={value}
            maxLength={maxLength}
            className={cn(
              "w-full px-4 py-3 font-sans text-body text-foreground",
              "bg-white border-2 border-midnight/10 rounded-lg",
              "placeholder:text-foreground-muted/60",
              "transition-all duration-300 ease-luxe",
              "focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "resize-y min-h-[120px]",
              error && "border-solaris focus:border-solaris focus:ring-solaris/10",
              className
            )}
            {...props}
          />
          {showCount && maxLength && (
            <div className="absolute bottom-3 right-3 text-xs text-foreground-muted">
              {currentLength}/{maxLength}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-solaris">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

/* ===== Select ===== */
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className, id, ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block font-sans text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full px-4 py-3 font-sans text-body text-foreground appearance-none",
              "bg-white border-2 border-midnight/10 rounded-lg",
              "transition-all duration-300 ease-luxe",
              "focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-solaris focus:border-solaris focus:ring-solaris/10",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* Dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground-muted">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-2 text-sm text-solaris">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";
