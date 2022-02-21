module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        blue:{
          "light":'#60a5fa',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
