import { useState, useEffect } from "react";
import { CardMedia, makeStyles } from "@material-ui/core";
import { vanphongpham1 } from "assets/images";
import homePageStyle from "assets/jss/views/homePageStyle";
import ProductCard from "../../components/ProductCard";
import GridContainer from "./GridContainer";
import Test from "./Test";
import axios from "axios";
const useStyles = makeStyles(homePageStyle);

const HomePage = () => {
  const classes = useStyles();
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://agile-oasis-06016.herokuapp.com/products/vanphongpham",
      );
      await setPopular(data);
    };
    fetchData();
  }, []);

  return popular.length === 0 ? (
    <div>AAAAAAA</div>
  ) : (
    <div className={classes.root}>
      <CardMedia component="img" image={vanphongpham1} />
      <GridContainer title="SẢN PHẨM PHỔ BIẾN">
        {popular.slice(0, 8).map((product) => (
          <ProductCard
            key={product.code}
            image={product.images[0]}
            title={product.title}
            price={product.price.toLocaleString() + "VNĐ"}
          />
        ))}
      </GridContainer>
      <GridContainer title="NEW ARRIVALS">
        {popular.slice(8, 12).map((product) => (
          <ProductCard
            key={product.code}
            image={product.images[0]}
            title={product.title}
            price={product.price.toLocaleString() + "VNĐ"}
          />
        ))}
      </GridContainer>
      <GridContainer title="ABOUT US">
        <Test
          title="The Lowest Prices"
          description="What do you expect from your purchase? Our Store offers only
        fresh organic products at the lowest possible prices."
        />
        <Test
          title="Gift Certificates"
          description="This is a great way to ensure your recipients get exactly what they wanted. Send a gift certificate for any amount you desire."
        />
        <Test
          title="Quality Guarantee"
          description="Our main goal is to sell the highest quality foods at the most affordable prices possible. Make sure the products we sell meet our strict standards."
        />
      </GridContainer>
    </div>
  );
};

export default HomePage;
