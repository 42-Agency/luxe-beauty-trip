"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "../ui/button";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Treatments", href: "#treatments" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header({
  navItems = defaultNavItems,
  ctaText = "Book Now",
  ctaHref = "#book",
  className,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-luxe",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-soft py-4"
          : "bg-transparent py-6",
        className
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-serif text-2xl text-foreground tracking-tight">
              Luxe<span className="text-gold">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-foreground relative
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold
                         after:transition-all after:duration-300 after:ease-luxe
                         hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href={ctaHref}>
              <Button variant="gold" size="sm">
                {ctaText}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all duration-300",
                isMobileMenuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all duration-300",
                isMobileMenuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-400 ease-luxe",
            isMobileMenuOpen ? "max-h-96 mt-6" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4 pb-6 border-t border-gold/20 pt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-lg font-medium text-foreground py-2 border-b border-silk-rose"
              >
                {item.label}
              </Link>
            ))}
            <Link href={ctaHref} onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="gold" className="w-full mt-4">
                {ctaText}
              </Button>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
