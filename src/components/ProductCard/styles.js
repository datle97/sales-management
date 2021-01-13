import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  card: {
    textAlign: "center",
    // marginBottom: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
  cardMedia: {
    height: 0,
    paddingTop: "100%",
    
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  price: {
    marginBottom: 20,
  },
 
}));
