const colors = require("tailwindcss/colors");

console.log("colors", colors.indigo);
module.exports = {
  defaultTheme: {
    spacing: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      sm: "16px",
      md: "24px",
      lg: "32px",
      xl: "48px",
    },
    borderRadius: {
      sm: "10px",
      md: "16px",
      lg: "32px",
    },
    extend: {
      colors: {
        primary: colors.orange["500"],
        secondary: colors.indigo,
        neutral: colors.gray,
      },
      spacing: {
        xs: "8px",
        xxs: "4px",
      },
    },
  },
};

// export default themes;
