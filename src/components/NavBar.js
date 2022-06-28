import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import "../styles/navbar.css";
import navIcon from "../assets/icon.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="nav-icon" src={navIcon} alt="nav icon" />
      <h2>Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
      <div className="navbar-login">
        <Login />
      </div>
    </div>
  );
};

export default NavBar;
