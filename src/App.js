import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Container,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";

import Header from "./components/Header";
import HomePage from "./views/HomePage";
import defaultTheme from "themes/defaultTheme";
import ProductsPage from "views/ProductsPage/ProductsPage";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:product" component={ProductsPage} />
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
