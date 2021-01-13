import {
  Breadcrumbs,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import useStyles from "./styles";

const CustomBreadcrumbs = ({ children }) => {
  const classes = useStyles();
  return (
    <Toolbar variant="dense" className={classes.toolbar}>
      <Container>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          className={classes.breadcrumbs}
        >
          {children}
        </Breadcrumbs>
      </Container>
    </Toolbar>
  );
};

export default CustomBreadcrumbs;
