import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const SideBar = () => {
  const [query, setQuery] = useState("");

  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

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

  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
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
