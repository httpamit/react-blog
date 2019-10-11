import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const authUser = this.props.authUser;
    return (
      <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div className="container">
          <div className="topbar-left">
            <button className="topbar-toggler">☰</button>
            <Link className="topbar-brand" to="/">
              <img
                className="logo-default"
                src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                alt="logo"
              />
              <img
                className="logo-inverse"
                src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`}
                alt="logo"
              />
            </Link>
          </div>
          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles/create">
                  Write new article
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hey {authUser && authUser.user.name}!
                  <i className="fa fa-caret-down" />
                </a>
                <div className="nav-submenu">
                  <a className="nav-link" href="#">
                    My articles
                  </a>
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </div>
              </li>
              {
                !authUser &&
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                </Link>
                </li>
              }
              {
                !authUser &&
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">
                    Signup
                </Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
