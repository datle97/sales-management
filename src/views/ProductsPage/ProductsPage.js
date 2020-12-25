import {
  Breadcrumbs,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  h3: {
    backgroundColor: "black",
    padding: 20,
  },
}));
const ProductsPage = ({ match }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.h3}>
        Grocery
      </Typography>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
        <Link to="/">Home</Link>
        <Link to="/product/vanphongpham">Grocery</Link>
      </Breadcrumbs>
      
    </div>
  );
};

export default ProductsPage;
