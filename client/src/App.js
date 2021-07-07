import React from "react";
import Search from "./components/Search";
import Saved from "./components/Saved/Saved";
import Home from "./components/pages/Home/Home";
import Nav from "./components/helper/Nav/Nav";
import Footer from "./components/helper/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
