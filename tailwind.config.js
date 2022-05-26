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
        "title-active": "#404357",
        placeholder: "#898DA8",
        label: "#6B7192",
      },

      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
