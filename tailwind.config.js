const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Bebas Neue', ...defaultTheme.fontFamily.sans]
      // }
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
