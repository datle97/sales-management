import { makeStyles } from "@material-ui/core";
import { products } from "assets/images";

export default makeStyles((theme) => ({
  background: {
    textAlign: "center",
    padding: theme.spacing(3, 0),
    backgroundImage: `url(${products})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  h2: {
    fontWeight: 400,
    fontStyle: "normal",
    fontFamily: "'Playball', display",
    color: "#ffffff",
    fontSize: 36,
    lineHeight: 1.1,
    letterSpacing: 0,
  },
}));
