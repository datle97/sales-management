import { useState, useEffect } from "react";
import { CardMedia, Container } from "@material-ui/core";
import useStyles from "./styles";
import ProductCard from "../../components/ProductCard/ProductCard";
import GridContainer from "./components/GridContainer/GridContainer";
import Test from "./components/Test/Test";
import axios from "axios";
import {
  home_slider_1,
  home_slider_2,
  home_slider_3,
} from "assets/images";
import Slider from "react-slick";
import {
  faTag,
  faListAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const classes = useStyles();
  const [popular, setPopular] = useState([]);
  const imgs = [home_slider_1, home_slider_2, home_slider_3];
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://agile-oasis-06016.herokuapp.com/products/vanphongpham",
      );
      setPopular(data);
    };
    fetchData();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return popular.length === 0 ? (
    <div>AAAAAAA</div>
  ) : (
    <div className={classes.root}>
      <Slider {...settings}>
        {imgs.map((img) => (
          <div>
            <CardMedia image={img} className={classes.cardMedia} />
          </div>
        ))}
      </Slider>
      <Container className={classes.container}>
        <GridContainer title="SẢN PHẨM PHỔ BIẾN">
          {popular.slice(0, 8).map((product) => (
            <ProductCard
              key={product.code}
              image={product.images[0]}
              title={product.title}
              price={product.price}
            />
          ))}
        </GridContainer>
        <GridContainer title="NEW ARRIVALS">
          {popular.slice(8, 12).map((product) => (
            <ProductCard
              key={product.code}
              image={product.images[0]}
              title={product.title}
              price={product.price}
            />
          ))}
        </GridContainer>
        <GridContainer title="ABOUT US">
          <Test
            icon={faTag}
            title="The Lowest Prices"
            description="What do you expect from your purchase? Our Store offers only
        fresh organic products at the lowest possible prices."
          />
          <Test
            icon={faListAlt}
            title="Gift Certificates"
            description="This is a great way to ensure your recipients get exactly what they wanted. Send a gift certificate for any amount you desire."
          />
          <Test
            icon={faShieldAlt}
            title="Quality Guarantee"
            description="Our main goal is to sell the highest quality foods at the most affordable prices possible. Make sure the products we sell meet our strict standards."
          />
        </GridContainer>
      </Container>
    </div>
  );
};

export default HomePage;
