import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, withRouter } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CreateArticle from "./Components/CreateArticle";
import Login from "./Components/Login";
import Signup from "./Components/Singup";
import SingleArticle from "./Components/SingleArticle";

import Welcome from "./Components/Welcome/Index";
import * as serviceWorker from "./serviceWorker";

class App extends Component {

  constructor() {
    super();
    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('user');

    if (user) {
      this.setState({
        authUser: JSON.parse(user)
      });
    }
  }

  // Set authUser function to set user
  setAuthUser = (authUser) => {
    this.setState({
      authUser
    });
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        {
          location.pathname !== "/login" && location.pathname !== "/sign-up" &&
          <NavBar authUser={this.state.authUser} />
        }
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" render={(props) => <Signup {...props} setAuthUser={this.setAuthUser} />} />
        <Route exact path="/articles/single-article" component={SingleArticle} />
        <Route exact path="/articles/create" component={CreateArticle} />

        {
          location.pathname !== "/login" && location.pathname !== "/sign-up" && <Footer />
        }
      </div>
    )
  }
}

export default App;

const Main = withRouter((props) => {
  return (
    <App {...props} />
  )
})


ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
