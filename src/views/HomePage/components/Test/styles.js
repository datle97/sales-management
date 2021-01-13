import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
  icon: {
    fontSize: 95,
    color: theme.palette.primary.main,
  },
}));
