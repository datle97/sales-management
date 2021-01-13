import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  ul: {
    listStyleType: "none",
    marginTop: 0,
    marginBottom: theme.spacing(4),
    padding: 0,
    transition: "all .3s",
    "& > li": {
      lineHeight: 2.2,
    },
  },
  price: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
  buttons: {
    textAlign: "center",
  },
}));
