import {
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
  icon: {
    fontSize: 95,
    color: theme.palette.primary.main,
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  divider: {
    width: 70,
    marginTop: theme.spacing(1),
  },
}));
const Test = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4} className={classes.root}>
      <LocalOffer className={classes.icon} />
      <div className={classes.title}>
        <Typography variant="h5">
          <b>{title}</b>
        </Typography>
        <Divider className={classes.divider} />
      </div>
      <Typography variant="caption" color="textSecondary">
        {description}
      </Typography>
    </Grid>
  );
};

export default Test;
