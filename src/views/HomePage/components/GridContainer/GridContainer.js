import { Divider, Grid } from "@material-ui/core";
import Title from "components/Title/Title";
import useStyles from "./styles";

const GridContainer = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title variant="h2" title={title} />
      <Grid container spacing={4}>
        {children}
      </Grid>
      <Divider variant="fullWidth" className={classes.divider} />
    </div>
  );
};

export default GridContainer;
