import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "../pages/BookList";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
        <Route path="/shoppingCart"></Route>
      </Switch>
    </Router>
  );
}
