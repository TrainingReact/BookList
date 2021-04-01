import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../pages/BookList";
import IndexCart from "../pages/BookList/cartPages";
import Header from "../components/Header/Header";
export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/shoppingCart">
          <IndexCart />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}
