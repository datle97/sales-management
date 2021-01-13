import {
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import BackgroundHeader from "components/BackgroundHeader/BackgroundHeader";
import useStyles from "./styles";
import CustomButton from "components/CustomButton/CustomButton";

import CustomBreadcrumbs from "components/CustomBreadcrumbs/CustomBreadcrumbs";
import Carousel from "./components/Carousel/Carousel";
import Details from "./components/Details/Details";
import Description from "./components/Description/Description";
import Related from "./components/Related/Related";

const ProductPage = () => {
  const classes = useStyles();
  const params = useParams();

  return (
    <div>
      <BackgroundHeader title="Test" />
      <CustomBreadcrumbs>
        <Link to="/">Home</Link>
        <Link to={`/products/${params.products}`}>
          {params.products}
        </Link>
        <Link to={`/products/${params.products}/${params.id}`}>
          {params.id}
        </Link>
      </CustomBreadcrumbs>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Carousel />
          <Details />
        </Grid>
        <Description />
        <Related />
      </Container>
    </div>
  );
};

export default ProductPage;
