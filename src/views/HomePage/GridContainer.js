import {
  makeStyles,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    width: 200,
  },
  end: {
    marginTop: theme.spacing(6),
  },
}));

const GridContainer = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h3">{title}</Typography>
        <Divider className={classes.divider} />
      </div>
      <Grid container spacing={4}>
        {children}
      </Grid>
      <Divider variant="fullWidth" className={classes.end} />
    </div>
  );
};

export default GridContainer;
