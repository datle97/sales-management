import {
  Button,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
  cardMedia: {
    height: 0,
    paddingTop: "100%",
  },
  title: {
    marginBottom: 0,
  },
  price: {
    color: theme.palette.primary.main,
  },
  button: {
    // background: theme.palette.primary.main,
    color: "#fff",
    borderRadius: 0,
    padding: "12px 24px",
  },
}));
const ProductCard = ({ xs = 3, image, title, price, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid item xs={xs} {...rest}>
      <div className={classes.card}>
        <Link to="#">
          <CardMedia image={image} className={classes.cardMedia} />
        </Link>
        <Typography variant="h5" noWrap className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h5" className={classes.price}>
          {price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          ADD TO CART
        </Button>
      </div>
    </Grid>
  );
};

export default ProductCard;
