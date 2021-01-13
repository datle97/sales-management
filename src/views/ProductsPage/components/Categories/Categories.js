import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import Title from "components/Title/Title";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Categories = () => {
  const classes = useStyles();
  return (
    <Grid item xs={3} className={classes.root}>
      <Title
        title="PRODUCT CATEGORIES"
        variant="h2"
        divider={130}
        marginBottom={16}
      />
      <ul className={classes.ul}>
        <Typography component="li" variant="body2">
          <Link to="/products/vanphongpham/">Bread & Bakery</Link>
        </Typography>
        <Typography component="li" variant="body2">
          <Link to="/products/thucphamkho/">TPK</Link>
        </Typography>
        <Typography component="li" variant="body2">
          <Link to="/products/suadouong/">SDU</Link>
        </Typography>
        <Typography component="li" variant="body2">
          <Link to="/products/giaviphulieunauan/">GVPLNA</Link>
        </Typography>
        <Typography component="li" variant="body2">
          <Link to="/products/mebe/">MB</Link>
        </Typography>
        <Typography component="li" variant="body2">
          <Link to="/products/dochoitreem/">DCTE</Link>
        </Typography>
      </ul>
      <Title
        title="FILTER BY"
        variant="h2"
        divider={130}
        marginBottom={16}
      />
      <Typography variant="body2">Price</Typography>
      <div className={classes.price}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Min"
        />
        {" - "}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Max"
        />
      </div>
      <div className={classes.buttons}>
        <Button>APPLY</Button>
        <Button>CLEAR</Button>
      </div>
    </Grid>
  );
};

export default Categories;
