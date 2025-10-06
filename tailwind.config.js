/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Lato", "sans-serif"],
      },
      colors: {
        "purple-primary": "#8B5CF6",
        "purple-light": "#F3F4F6",
        "purple-accent": "#DDD6FE",
        "purple-gradient-start": "#A855F7",
        "purple-gradient-end": "#EC4899",
      },
    },
  },
  plugins: [],
};
