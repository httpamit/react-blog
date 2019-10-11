import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const About = () => {
  render() {
    return (
       <h1>About component</h1>
    );
  }
}

const Home = () => {
  render() {
    return (
      <h1>Home component</h1>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/home" component={Home} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
