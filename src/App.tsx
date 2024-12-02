/*import Order from "./components/Order/Order";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Success from "./components/Success";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import { pizza, cuisines, deals } from "../Assets/mile2-assets/data";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home cuisines={cuisines} deals={deals} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
*/

import Order from "./components/Order/Order";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Success from "./components/Success";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import { pizza, cuisines, deals } from "../Assets/mile2-assets/data";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home cuisines={cuisines} deals={deals} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
