import { createMuiTheme } from "@material-ui/core";

const defaultTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color:'inherit'
        },
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
  typography: {},
});

export default defaultTheme;
