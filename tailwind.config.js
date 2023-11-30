/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(225, 225, 225,0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        opacity: "rgba(225,225,225,0.5)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs: "331px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
