import { createMuiTheme } from "@material-ui/core";
import PT_Sans_Regular from "../assets/fonts/PT_Sans/PTSans-Regular.woff2";
import PT_Sans_Bold from "../assets/fonts/PT_Sans/PTSans-Bold.woff2";
import Playball from "../assets/fonts/Playball.woff2";

const pt_sans = {
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${PT_Sans_Regular}) format('woff2')`,
};

const pt_sans_bold = {
  fontFamily: "PT Sans",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `url(${PT_Sans_Bold}) format('woff2')`,
};

const playball = {
  fontFamily: "Playball",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${Playball}) format('woff2')`,
};

const defaultTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          scrollBehavior: "smooth",
        },
        "*": {
          // disable react-slick outline
          "&:focus": {
            outline: 0,
          },
        },
        body: {
          backgroundColor: "#fff",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        "@font-face": [pt_sans, pt_sans_bold, playball],
      },
    },
  },
  palette: {
    primary: {
      main: "#66a55f",
    },
    text: {
      primary: "#604848",
    },
  },
  typography: {
    fontFamily: [
      '"PT Sans"',
      "sans-serif",
      "Playball",
      "display",
    ].join(","),
    h2: {
      fontWeight: 700,
      fontStyle: "normal",
      color: "#604848",
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 400,
      fontStyle: "normal",
      color: "#604848",
      fontSize: 30,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 700,
      fontStyle: "normal",
      color: "#858585",
      fontSize: 14,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    subtitle1: {
      fontWeight: 400,
      fontStyle: "normal",
      color: "#000000",
      fontSize: 24,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    subtitle2: {
      fontWeight: 700,
      fontStyle: "normal",
      color: "#66a55f",
      fontSize: 26,
      lineHeight: "1.2",
      letterSpacing: 0,
    },
    body2: {
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: 1.3,
      color: "#6b6b6b",
    },
  },
});

export default defaultTheme;
