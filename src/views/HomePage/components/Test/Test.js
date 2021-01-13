import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Typography } from "@material-ui/core";
import Title from "components/Title/Title";
import useStyles from "./styles";

const Test = ({ icon, title, description }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4} className={classes.root}>
      <FontAwesomeIcon icon={icon} className={classes.icon} />
      <Title
        title={title}
        variant="h5"
        divider={70}
        marginBottom={0}
      />
      <Typography variant="caption" color="textSecondary">
        {description}
      </Typography>
    </Grid>
  );
};

export default Test;
