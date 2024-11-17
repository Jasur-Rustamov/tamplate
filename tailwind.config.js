module.exports = {
  content: ["./*.{html, css}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        lato: "Lato",
      },
      colors: {
        iconcolor: "#AE7B3C",
        black: "#282B22",
        gren: '#3D4A39',
        jas: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) -13.19%, rgba(0, 0, 0, 0.85) 94.01%)",
      },
      width: {
        con: "1200px",
      },
      backgroundImage: {
        "hero-bg": "url('images/png/hero-gb.png')",
      },
    },
  },
  plugins: [],
};
