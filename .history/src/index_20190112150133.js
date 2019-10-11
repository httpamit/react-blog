import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Welcome from "./Components/Welcome/Index";
import * as serviceWorker from "./serviceWorker";

const About = () => {
  return <h1>About component</h1>;
};

const Contact = () => {
  return <h1>Contact component</h1>;
};

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
