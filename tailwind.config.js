/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      primeColor: "#F1F1F1",
      primeOrange: "#FF6B00",
      primeWhite: "#FFFFFF",
      primeText: "#5F5F5F",
    },
    fontFamily: {
      Urbanist: "Urbanist",
    },
  },
  plugins: [],
};
