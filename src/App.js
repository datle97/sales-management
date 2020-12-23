import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Header from "./components/Header";
import HomePage from "./views/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>A</div>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
