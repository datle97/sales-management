import { Divider, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Title = ({
  title,
  variant = "h3",
  divider = 200,
  marginBottom = 40,
}) => {
  const classes = useStyles({ divider, marginBottom });
  return (
    <div className={classes.root}>
      <Typography variant={variant} className={classes.title}>
        {title}
      </Typography>
      <Divider className={classes.divider} />
    </div>
  );
};

export default Title;
