import { Grid, Typography } from "@material-ui/core";
import { vanphongpham1 } from "assets/images";
import ProductCard from "components/ProductCard/ProductCard";

const Related = () => {
  return (
    <>
      <Typography
        variant="subtitle2"
        color="textPrimary"
        style={{ fontWeight: 400 }}
      >
        Related Products
      </Typography>
      <Grid container spacing={4}>
        <ProductCard
          title="Kicking Horse Coffee Three Sisters Coffee"
          image={vanphongpham1}
          price={"10.000"}
          button={false}
        />
        <ProductCard
          title="Kicking Horse Coffee Three Sisters Coffee"
          image={vanphongpham1}
          price={"10.000"}
          button={false}
        />
        <ProductCard
          title="Kicking Horse Coffee Three Sisters Coffee"
          image={vanphongpham1}
          price={"10.000"}
          button={false}
        />
      </Grid>
    </>
  );
};

export default Related;
