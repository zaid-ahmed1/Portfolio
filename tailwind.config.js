/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        accent: "#915eff",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        subtle: "rgba(145, 94, 255, 0.15)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 0 20px rgba(145, 94, 255, 0.3)",
        "glow-lg": "0 0 40px rgba(145, 94, 255, 0.4)",
      },
      screens: {
        xs: "390px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};