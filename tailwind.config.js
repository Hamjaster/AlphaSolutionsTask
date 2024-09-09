/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9021", // Replace this with your preferred primary color code
        secondary: "#2A2C38", // Replace this with your preferred primary color code
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"], // Replace 'Poppins' with the font you're using
        calistoga: ["Calistoga", "serif"], // Replace 'Poppins' with the font you're using
      },
    },
  },
  plugins: [],
};
