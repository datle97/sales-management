import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    "& > *": {
      marginBottom: theme.spacing(3),
    },
  },
}));
