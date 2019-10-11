import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Link } from "react-router-dom";

import "./index.css";
import App from "./App";
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
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="home">Contact</Link>
          <Link to="about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
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
