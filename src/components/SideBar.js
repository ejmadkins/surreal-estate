import React from "react";
import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBar = () => {

    const buildQueryString (operation, valueObj) => {
        
    }
  return (
    <>
      <div className="filter-city">
        <h3>Filter by City</h3>
        <p>
          <Link to={`/?query={"city": "Manchester"}`}>Manchester </Link>
        </p>
        <p>
          <Link to={`/?query={"city": "London"}`}>London</Link>
        </p>
        <p>
          <Link to={`/?query={"city": "Stoke"}`}>Stoke</Link>
        </p>
      </div>
      <div className="sort-city">
        <p>
          <Link to={`/?query={"city": "Manchester"}`}>Manchester </Link>
        </p>
      </div>
    </>
  );
};

export default SideBar;
