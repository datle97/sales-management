import { Container, Grid } from "@material-ui/core";
import { vanphongpham1 } from "assets/images";
import BackgroundHeader from "components/BackgroundHeader/BackgroundHeader";
import CustomBreadcrumbs from "components/CustomBreadcrumbs/CustomBreadcrumbs";
import ProductCard from "components/ProductCard/ProductCard";
import { Link, useParams } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import useStyles from "./styles";

const ProductsPage = () => {
  const classes = useStyles();
  const params = useParams();
  return (
    <div className={classes.root}>
      <BackgroundHeader title="Bread & Bakery" />
      <CustomBreadcrumbs>
        <Link to="/">Trang chủ</Link>
        <Link to={`/products/${params.products}`}>
          {params.products}
        </Link>
      </CustomBreadcrumbs>
      <Container>
        <Grid container spacing={4}>
          <Grid item container xs={9} spacing={4}>
            <ProductCard
              xs={4}
              url={`/products/${params.products}/1`}
              title="Mixed Vegetable"
              image={vanphongpham1}
              price={"$55.00"}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />{" "}
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
            <ProductCard
              xs={4}
              title="A"
              image={vanphongpham1}
              price={20000}
            />
          </Grid>
          <Categories />
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsPage;
