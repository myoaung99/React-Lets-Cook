module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: "#6F9A70",
      primaryDark: "#4a5e4a",
      primaryText: "#E9E9E9",
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/image/header-bg.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
