import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(3),
    },
  },
  margin: {
    "& > h6": {
      marginBottom: 4,
    },
  },
  quantity: {
    marginBottom: theme.spacing(4),
  },
  buttons: {
    display: "flex",
    "& > button": {
      marginRight: theme.spacing(2),
    },
  },
  tooltip: {
    marginBottom: theme.spacing(2),
  },
}));
