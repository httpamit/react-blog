import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav class="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div class="container">
          <div class="topbar-left">
            <button class="topbar-toggler">&#9776;</button>
            <a class="topbar-brand" href="index.html">
              <img class="logo-default" src="assets/img/logo.png" alt="logo" />
              <img
                class="logo-inverse"
                src="assets/img/logo-light.png"
                alt="logo"
              />
            </a>
          </div>

          <div class="topbar-right">
            <ul class="topbar-nav nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="create-article.html">
                  Write new article
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Hey Garry!
                  <i class="fa fa-caret-down" />
                </a>
                <div class="nav-submenu">
                  <a class="nav-link" href="page-login.html">
                    My articles
                  </a>
                  <a class="nav-link" href="">
                    Logout
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="register.html">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
