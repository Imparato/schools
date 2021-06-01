module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        roll: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(20rem) rotate(385deg)" },
        },
      },
      animations: {
        roll: "roll 7s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/forms")],
};
