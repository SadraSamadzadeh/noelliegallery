import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(50% 50% at 16.8% 18.3%, white, rgb(182,148,255) 37.7%, rgb(24,0,66))',
        'custom-gradient-2': 'radial-gradient(75% 75% at center center, rgb(140,69,255,.5) 15%, rgb(14, 0, 36, .5) 78%, transparent)',
        'mask-gradient': 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        'custom-linear': 'linear-gradient(90deg, rgba(255,45,247,1) 0%, rgba(82,0,255,1) 48%, rgba(0,240,255,1) 100%)'
      },
      boxShadow: {
        'custom-shadow': '-20px -20px 50px rgba(255, 255, 255, 0.5), -20px -20px 80px rgba(255, 255, 255, 0.1), 0px 0px 50px rgba(140, 69, 255)  ',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        dark: {
          background: "rgb(var(--background) / <alpha-value>)",
          primary: "rgb(var(--primary) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "enter" : "enter .2s ease-out",
        "leave" : "leave .15s ease-in forwards"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config