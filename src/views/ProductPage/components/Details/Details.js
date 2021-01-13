import {
  Grid,
  Typography,
  TextField,
  Divider,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import CustomButton from "components/CustomButton/CustomButton";
import useStyles from "./styles";
import clsx from 'clsx'

const Details = () => {
  const classes = useStyles();

  return (
    <Grid item xs={7} className={classes.root}>
      <Typography variant="h3">
        Collezione Pasta Orecchiette
      </Typography>
      <Typography variant="subtitle2">$70.00</Typography>
      {/* <div>
        <Typography variant="h6">Mã số:</Typography>
        <Typography variant="h6">#8935001849100</Typography>
      </div> */}
      <Typography variant="body2">
        A lot of products available at supermarkets look and smell
        delicious to whet our appetite and motivate for a purchase.
      </Typography>
      <div className={clsx(classes.quantity, classes.margin)}>
        <Typography variant="h6">Số lượng</Typography>
        {/* value > 0 */}
        <TextField
          variant="outlined"
          size="small"
          type="number"
          defaultValue="1"
          required
          min="1"
          max="10"
        />
      </div>
      <div className={classes.margin}>
        <Typography variant="h6">Số lượng có sẵn:</Typography>
        <Typography variant="h6">10</Typography>
      </div>
      <div className={classes.buttons}>
        <CustomButton>Thêm vào giỏ hàng</CustomButton>
        <CustomButton>Mua ngay</CustomButton>
      </div>
      <Tooltip
        title="Thêm vào yêu thích"
        arrow
        className={classes.tooltip}
      >
        <IconButton>
          <FavoriteBorder />
        </IconButton>
      </Tooltip>
      <Divider />
    </Grid>
  );
};

export default Details;
