import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    padding: theme.spacing(2, 0),
  },
  home: {
    color: theme.palette.primary.main,
  },
  links: {
    fontSize: 18,
    "& > *": {
      marginRight: theme.spacing(5),
      fontWeight: 600,
    },
  },
}));
