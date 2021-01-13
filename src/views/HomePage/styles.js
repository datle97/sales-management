import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cardMedia: {
    height: 0,
    paddingTop: "37%",
    marginBottom: theme.spacing(9),
  },
  container: {
    "& > *": {
      marginBottom: theme.spacing(9),
    },
  },
}));
