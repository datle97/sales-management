import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cardMedia: {
    // position: "relative",
    height: 0,
    paddingTop: "100%",
  },
  border: {
    border: "1px solid black",
    // square div
    width: "100%",
    height: 0,
    // -2px border Top Bottom
    paddingBottom: "calc(100% - 2px)",
    marginBottom: theme.spacing(2),
  },
  paging: {
    "& .slick-list": {
      margin: "0 20px",
    },
    // arrow icons
    "& .slick-arrow": {
      color: "#80868b",
      "&:hover": {
        color: theme.palette.primary.main,
        transition: "color 0.2s linear",
      },
    },
    "& .slick-prev": {
      left: 0,
    },
    "& .slick-next": {
      // ArrowForwardIos start at middle (not right)
      right: -6,
    },
  },

  pagingImage: {
    outline: "1px solid black",
    outlineOffset: -1,
    // margin: "auto",
    margin: "0 2px",
  },
}));
