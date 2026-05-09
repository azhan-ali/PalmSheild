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
        background: {
          primary: "#080B14",
          card: "rgba(255, 255, 255, 0.03)",
          cardHover: "rgba(255, 255, 255, 0.055)",
        },
        border: {
          default: "rgba(255, 255, 255, 0.07)",
          hover: "rgba(255, 255, 255, 0.14)",
        },
        text: {
          primary: "#F0EEE6",
          secondary: "rgba(240, 238, 230, 0.5)",
          muted: "rgba(240, 238, 230, 0.3)",
        },
        accent: {
          purple: "#6B3CFF",
          green: "#00C896",
          amber: "#F5A623",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      keyframes: {
        pulseOpacity: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(24px, -18px) scale(1.06)' },
          '66%': { transform: 'translate(-18px, 12px) scale(0.96)' },
        }
      },
      animation: {
        'live-dot': 'pulseOpacity 2s ease-in-out infinite',
        'orb-drift': 'drift 9s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
