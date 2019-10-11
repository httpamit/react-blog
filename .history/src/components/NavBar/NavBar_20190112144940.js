import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      {/* Topbar */ }
      < nav className = "topbar topbar-inverse topbar-expand-md topbar-sticky" >
        <div className="container">
          <div className="topbar-left">
            <button className="topbar-toggler">☰</button>
            <a className="topbar-brand" href="index.html">
              <img className="logo-default" src="assets/img/logo.png" alt="logo" />
              <img className="logo-inverse" src="assets/img/logo-light.png" alt="logo" />
            </a>
          </div>
          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="create-article.html">Write new article</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hey Garry!
            <i className="fa fa-caret-down" />
                </a>
                <div className="nav-submenu">
                  <a className="nav-link" href="page-login.html">My articles</a>
                  <a className="nav-link" href>Logout</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register.html">Signup</a>
              </li>
            </ul>
          </div>
        </div>
</nav >
      {/* END Topbar */ }

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
