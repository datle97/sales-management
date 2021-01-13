import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  title: {
    display: "inline-block",
    padding: "14px 15px",
    border: "1px solid black",
    borderBottom: "none",
    marginBottom: 0,
  },
  h6: {
    color: theme.palette.primary.main,
  },
  description: {
    border: "1px solid black",
    padding: theme.spacing(4),
  },
}));
