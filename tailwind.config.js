/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        lightPrimary: "#fdfdfd",
        secondary: "#00f6ff",
        grayNine: "#111827",
        purpleLight: "#cabbe9",
        graySeven: "#374151",
        pinkLight: "#ffcef3",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimWhite: "rgba(225, 225, 225,0.7)",
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
