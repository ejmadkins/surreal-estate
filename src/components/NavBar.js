import React from "react";
import "../styles/navbar.css";
import navIcon from "../assets/icon.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="nav-icon" src={navIcon} alt="nav icon" />
      <h2>Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
