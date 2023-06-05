import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
