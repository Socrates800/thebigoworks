import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-card": "var(--bg-card)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        "text-secondary": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-gold": "var(--accent-gold)",
        border: "var(--border)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent":
          "linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)",
        "gradient-gold":
          "linear-gradient(135deg, var(--accent-gold) 0%, #d4af37 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px var(--accent)",
        "glow-sm": "0 0 20px -5px var(--accent)",
        soft: "0 4px 24px -4px rgba(0,0,0,0.08), 0 8px 32px -8px rgba(0,0,0,0.06)",
        "soft-dark":
          "0 4px 24px -4px rgba(0,0,0,0.3), 0 8px 32px -8px rgba(0,0,0,0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
