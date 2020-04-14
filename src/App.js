import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
import Default from "./components/pages/Default";
import Accordion from './components/pages/Accordion';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <br />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Accordion" component={Accordion} />
          <Route path="/about" component={About} />
          {/* <Route path="/contact" component={Contact} /> */}
        
      

          <Route component={Default} />
        </Switch>
      </div>
    );
  }
}

export default App;
