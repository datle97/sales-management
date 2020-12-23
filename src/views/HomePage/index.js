import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const HomePage = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default HomePage;
