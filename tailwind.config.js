
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    calc: {
      tan: "#E3E0D7",
      green: "#9FD6A5",
      yellow: "#DDCD2C",
      red: "#E48E91",
    },
  },
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      overpass: ["Overpass Mono", "mono"],
    },
    colors: colors
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
