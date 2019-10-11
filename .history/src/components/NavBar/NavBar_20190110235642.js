import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
