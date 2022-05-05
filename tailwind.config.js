module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        light: "#e53935",
        DEFAULT: "#e53935",
        dark: "#ab000d",
      },
      white: {
        light: "#fff",
        DEFAULT: "#ffff",
        dark: "#000",
      },
      black: {
        white: {
          light: "#000",
          DEFAULT: "#000",
          dark: "#fff",
        },
      },
    },
    extend: {
      fontFamily: {
        adelia: ["MyriadPro", "sans-serif"],
      },
    },
  },
  plugins: [],
}
