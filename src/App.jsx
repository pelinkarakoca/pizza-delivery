import Order from "./components/Order-Form/Order";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import "./App.css";
import { pizza, cuisines } from "../Assets/mile2-assets/data";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home cuisines={cuisines} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
