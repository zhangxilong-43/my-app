/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
    }
  },
  plugins: [],
}

