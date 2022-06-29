import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";
import Alert from "./Alert";
import getProperty from "../requests/getProperty";
import createFavourite from "../requests/createFavourite";
import "../styles/properties.css";

// eslint-disable-next-line react/prop-types
const Properties = ({ userID }) => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [results, setResults] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    getProperty(setResults, setAlert);
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setResults(data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    createFavourite(propertyId, userID);
  };

  return (
    <div className="properties">
      <div className="sidebar">
        <SideBar />
      </div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="property-cards">
        {results.map((property) => (
          <PropertyCard
            _id={property._id}
            key={property._id}
            title={property.title}
            type={property.type}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            price={property.price}
            city={property.city}
            email={property.email}
            userID={userID}
            onSaveProperty={handleSaveProperty}
          />
        ))}
      </div>
    </div>
  );
};
export default Properties;
