import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080C14",
        surface: "#0D1421",
        surface2: "#111827",
        cyan: {
          DEFAULT: "#00E5FF",
          dim: "rgba(0,229,255,0.12)",
          dim2: "rgba(0,229,255,0.06)",
        },
        offwhite: "#F0F4FF",
        muted: "#8892A4",
        border: "rgba(0,229,255,0.15)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        blink: "blink 1s infinite",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
