import { useState } from "react";
import { CardMedia, Grid } from "@material-ui/core";
import Slider from "react-slick";
import { vanphongpham1 } from "assets/images";
import { vanphongpham2 } from "assets/images";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import useStyles from "./styles";
import clsx from "clsx";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIos
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIos
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const classes = useStyles();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const imgs = [
    vanphongpham1,
    vanphongpham2,
    vanphongpham1,
    vanphongpham2,
    vanphongpham1,
    vanphongpham2,
  ];

  const settings1 = {
    asNavFor: nav2,
    ref: (c) => setNav1(c),
    arrows: false,
    fade: true,
  };

  const settings2 = {
    asNavFor: nav1,
    ref: (c) => setNav2(c),
    slidesToShow: 4,
    infinite: false,
    // slidesToScroll: 1,
    // swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    arrows: true,
  };
  return (
    <Grid item xs={5}>
      <Slider {...settings1} className={classes.border}>
        {imgs.map((image) => (
          <div>
            <CardMedia image={image} className={classes.cardMedia} />
          </div>
        ))}
      </Slider>
      <Slider {...settings2} className={classes.paging}>
        {imgs.map((image) => (
          <div>
            <CardMedia
              image={image}
              className={clsx(classes.cardMedia, classes.pagingImage)}
            />
          </div>
        ))}
      </Slider>
    </Grid>
  );
};

export default Carousel;
