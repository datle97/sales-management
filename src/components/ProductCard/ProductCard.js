import { CardMedia, Grid, Typography } from "@material-ui/core";
import CustomButton from "components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const ProductCard = ({
  xs = 3,
  url,
  image,
  title,
  price,
  button = true,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={xs} {...rest}>
      <div className={classes.card}>
        <Link to={url}>
          <CardMedia image={image} className={classes.cardMedia} />
        </Link>
        <Typography
          variant="subtitle1"
          noWrap
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant="subtitle2" className={classes.price}>
          {price}
        </Typography>
        {/* for related product */}
        {button && <CustomButton>ADD TO CART</CustomButton>}
      </div>
    </Grid>
  );
};

export default ProductCard;
