import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        blank: "#FFFFFF",
        "silk-rose": "#f9ebec",
        cotton: "#ffcad4",
        solaris: "#ff8979",
        trufflet: "#927057",
        gold: "#D4AF37",
        midnight: "#072331",

        // Semantic tokens
        background: "var(--background)",
        "background-warm": "var(--background-warm)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "300" }],
        h1: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "400" }],
        h2: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "400" }],
        h3: ["1.75rem", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "500" }],
        h4: ["1.25rem", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500" }],
      },
      boxShadow: {
        "gold-glow": "0 4px 20px rgba(212, 175, 55, 0.3)",
        "gold-glow-lg": "0 8px 30px rgba(212, 175, 55, 0.4)",
        "soft": "0 4px 20px rgba(7, 35, 49, 0.08)",
        "soft-lg": "0 8px 30px rgba(7, 35, 49, 0.12)",
        "lift": "0 8px 30px rgba(7, 35, 49, 0.15)",
      },
      transitionTimingFunction: {
        "luxe": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      transitionDuration: {
        "400": "400ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "underline-slide": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "underline-slide": "underline-slide 0.3s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
