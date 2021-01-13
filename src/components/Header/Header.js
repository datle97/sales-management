import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent" className={classes.appBar}>
        <Toolbar>
          <Container>
            <Typography variant="h2" className={classes.links}>
              <Link to="/" className={classes.home}>
                HOME
              </Link>
              <Link to="/products/vanphongpham/">VPP</Link>
              <Link to="/products/thucphamkho/">TPK</Link>
              <Link to="/products/suadouong/">SDU</Link>
              <Link to="/products/giaviphulieunauan/">GVPLNA</Link>
              <Link to="/products/mebe/">MB</Link>
              <Link to="/products/dochoitreem/">DCTE</Link>
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
