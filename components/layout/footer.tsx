"use client";

import Link from "next/link";
import { Container } from "./container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Text } from "../ui/typography";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  columns?: FooterColumn[];
  showNewsletter?: boolean;
  className?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Treatments",
    links: [
      { label: "Signature Facials", href: "#" },
      { label: "Korean Glass Skin", href: "#" },
      { label: "Rejuvenation", href: "#" },
      { label: "Body Treatments", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "#" },
      { label: "The Team", href: "#" },
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Booking Policy", href: "#" },
      { label: "Gift Cards", href: "#" },
    ],
  },
];

export function Footer({
  columns = defaultColumns,
  showNewsletter = true,
  className,
}: FooterProps) {
  return (
    <footer className={`bg-midnight text-white ${className || ""}`}>
      <Container>
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl text-white tracking-tight">
                Luxe<span className="text-gold">.</span>
              </span>
            </Link>
            <Text className="text-gray-400 mb-8 max-w-sm">
              Where Korean beauty expertise meets luxury travel. Experience transformative treatments in Seoul&apos;s most exclusive destinations.
            </Text>

            {showNewsletter && (
              <div>
                <Text className="text-gold mb-4 font-medium">
                  Join our journey
                </Text>
                <form className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-gold"
                  />
                  <Button variant="gold" type="submit">
                    Subscribe
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="font-sans text-gold text-sm uppercase tracking-widest font-semibold mb-6">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Text size="small" className="text-gray-500">
            &copy; {new Date().getFullYear()} Luxe Beauty Trip. All rights reserved.
          </Text>
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <Link
              href="#"
              className="text-gray-500 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gold transition-colors"
              aria-label="Pinterest"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
