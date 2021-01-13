import { Button } from "@material-ui/core";
import useStyles from "./styles";

const CustomButton = ({ children, rest }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
