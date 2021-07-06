import React from "react";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Home from "./components/pages/Home";
import Header from "./components/helper/Header";
import Footer from "./components/helper/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
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
