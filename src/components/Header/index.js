import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import headerStyle from "assets/jss/components/headerStyle";
import { Link } from "react-router-dom";

const useStyles = makeStyles(headerStyle);

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent">
        <Toolbar component={Container}>
          {/* <Typography variant="h6" className={classes.home}>
           
          </Typography> */}
          <Typography variant="h6" className={classes.links}>
            <Link to="/" className={classes.home}>
              HOME
            </Link>
            <Link to="/product/vanphongpham/">VPP</Link>
            <Link to="/product/thucphamkho/">TPK</Link>
            <Link to="/product/suadouong/">SDU</Link>
            <Link to="/product/giaviphulieunauan/">GVPLNA</Link>
            <Link to="/product/mebe/">MB</Link>
            <Link to="/product/dochoitreem/">DCTE</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
