import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const BackgroundHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Typography variant="h2" className={classes.h2}>
        {title}
      </Typography>
    </div>
  );
};

export default BackgroundHeader;
