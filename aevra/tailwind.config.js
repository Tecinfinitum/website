/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070b18",
        navy: {
          DEFAULT: "#0a1128",
          950: "#050814",
          900: "#0a1128",
          800: "#101a3a",
          700: "#182452",
        },
        brand: {
          DEFAULT: "#7c5cff",
          light: "#9b82ff",
          dark: "#5a3fd6",
        },
        electric: {
          DEFAULT: "#2f6fed",
          light: "#5b8bf7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
