import React, { Component } from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import Nav from "./components/Nav";
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
      </div>
    </Router>


    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
  );
}


export default App;
