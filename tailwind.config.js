const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      body: ["Arial", '"Open Sans"'],
    },
    extend: {
      screens: {
        lg: "960px",
      },

      colors: {
        body: "#565A75",
        disabled: "#898DA8",
        "title-active": "#404357",
        placeholder: "#898DA8",
        label: "#6B7192",
        background: "#F4F5FB",
      },

      maxWidth: {
        lg: "960px",
      },

      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
