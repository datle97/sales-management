import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Description = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <Typography variant="h6" className={classes.h6}>
          DESCRIPTION
        </Typography>
      </div>
      <div className={classes.description}>
        <Typography variant="body2" className={classes.body2}>
          A lot of products available at supermarkets look and smell
          delicious to whet our appetite and motivate for a purchase.
          However, such a mouthwatering effect isn’t achieved
          naturally. Most of them are stuffed with artificial flavors,
          sweeteners and preservatives that can have a negative impact
          on your health when consumed frequently. But it should not
          be that way. Visit our store of natural products to remove
          chemicals from your everyday ration and fill it with organic
          food, which is the core of a healthy lifestyle. At our
          one-stop store, you can find organic ingredients for any
          dish. Whether you stick to a vegetable diet or prefer hearty
          meals with meat, we will help you pick the right products
          for you cookery. Our diverse assortment offers a wide choice
          of vegetables, fruit, herbs, grains, dairy, red meat,
          poultry, and much more. If you like seafood, there is an
          individual category for this type of food too. We have
          natural products literally for everyone. The best thing is
          that they taste much better than their artificially
          processed alternatives and provide vitamins, minerals,
          nutrients and many other useful substances for your physical
          mental health. Products of our store are supplied by local
          farms, that’s why we know exactly how they are grown and
          reared. We are also familiar with people involved in the
          production and see their responsibility and attitude to
          their work. What’s also great about consuming our food is
          the fact that you can get it for a competitive price. Our
          costs are lower than those set by nearby supermarkets. “Eat
          healthy, spend reasonably” is the motto of our team. Give us
          a try to feel the value of natural products yourself and get
          the benefits of cost saving!
        </Typography>
      </div>
    </>
  );
};

export default Description;
