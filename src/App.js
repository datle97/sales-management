import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import themes from "themes";
import Header from "./components/Header/Header";
import HomePage from "./views/HomePage/HomePage";
import ProductsPage from "views/ProductsPage/ProductsPage";
import ProductPage from "views/ProductPage/ProductPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.defaultTheme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/products/:products"
            exact
            component={ProductsPage}
          />
          <Route
            path="/products/:products/:id"
            component={ProductPage}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
