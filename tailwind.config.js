const themes = require("./tailwind-themes");
console.log("themes", themes);

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  theme: themes.defaultTheme,
  plugins: [],
  // plugins: [require("@tailwindcss/forms")],
};
