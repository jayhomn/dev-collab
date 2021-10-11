module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    aspectRatio: {
      540: "540",
      960: "960",
    },
    extend: {
      width: { 108: "36rem", 109: "30rem", "9/10": "90%", 110: "30rem" },
      height: {
        107: "23rem",
        108: "28rem",
        109: "50rem",
        110: "72rem",
        111: "36rem",
        112: "30rem",
      },
      backgroundImage: {
        "layerd-waves": "url('/src/assets/layered-waves-haikei.svg')",
      },
      colors: { green: "#78FF86" },
      fontSize: {
        title: "9rem",
      },
      fontFamily: {
        round: ["'M PLUS Rounded 1c'"],
        roboto: ["Roboto"],
      },
      gridTemplateRows: {
        profile: "100%",
      },
      gridTemplateColumns: {
        profile: "72rem auto",
        project: "79rem auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
