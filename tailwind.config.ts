import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors — theme-aware via CSS variables
        navy: {
          DEFAULT: "var(--navy)",
          light: "var(--navy-light)",
          dark: "var(--navy-dark)",
        },
        teal: {
          DEFAULT: "var(--teal)",
          dark: "var(--teal-dark)",
        },
        charcoal: "var(--charcoal)",
        gray: {
          light: "var(--gray-light)",
          medium: "var(--gray-medium)",
        },

        // Semantic tokens for surfaces and text
        surface: {
          DEFAULT: "var(--surface)",
          alt: "var(--surface-alt)",
        },
        foreground: "var(--foreground)",
        heading: "var(--heading)",

        // Status colors (unchanged — work in both modes)
        success: "#38A169",
        warning: "#D69E2E",
        error: "#E53E3E",
        info: "#3182CE",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "6px",
        card: "8px",
        modal: "12px",
        full: "9999px",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(10, 31, 63, 0.08)",
        cardHover: "0 8px 24px rgba(10, 31, 63, 0.12)",
        button: "0 2px 8px rgba(0, 194, 186, 0.3)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;