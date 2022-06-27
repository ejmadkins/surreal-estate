import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const SideBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query.charAt(0).toUpperCase() + query.slice(1) },
    });
    history.push(newQueryString);
  };

  return (
    <>
      <div className="search">
        <h3>Search by Title</h3>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="title-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" type="submit">
            <svg viewBox="0 0 24 24">
              <path
                fill="#666666"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="filter-city">
        <h3>Filter by City</h3>
        <p>
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </p>
        <p>
          <Link to={buildQueryString("query", { city: "London" })}>London</Link>
        </p>
        <p>
          <Link to={buildQueryString("query", { city: "Stoke" })}>Stoke</Link>
        </p>
      </div>
      <div className="sort-price">
        <h3>Sort by Price</h3>
        <p>
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </p>
        <p>
          <Link to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
          </Link>
        </p>
      </div>
    </>
  );
};

export default SideBar;
