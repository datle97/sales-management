import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(6),
  },
  breadcrumbs: {
    fontWeight: 400,
    fontStyle: "normal",
    fontFamily: "'PT Sans', sans-serif",
    fontSize: 14,
    lineHeight: 2.2,
    color: "#000",
  },
}));
