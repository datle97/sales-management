import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  divider: (props) => ({
    width: props.divider,
    marginTop: theme.spacing(1),
    marginBottom: props.marginBottom,
  }),
}));
