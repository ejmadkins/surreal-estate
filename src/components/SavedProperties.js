import React, { useEffect, useState } from "react";
import FavouriteCard from "./FavouriteCard";
import SideBar from "./SideBar";
import Alert from "./Alert";
import getFavourite from "../requests/getFavourite";
import "../styles/properties.css";

// eslint-disable-next-line react/prop-types
const SavedProperties = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [favouriteResults, setFavouriteResults] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    getFavourite(setFavouriteResults);
  }, []);

  return (
    <div className="properties">
      <div className="sidebar">
        <SideBar />
      </div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="property-cards">
        {favouriteResults.map((property) => (
          <FavouriteCard
            _id={property.propertyListing._id}
            key={property.propertyListing._id}
            title={property.propertyListing.title}
            type={property.propertyListing.type}
            bathrooms={property.propertyListing.bathrooms}
            bedrooms={property.propertyListing.bedrooms}
            price={property.propertyListing.price}
            city={property.propertyListing.city}
            email={property.propertyListing.email}
          />
        ))}
      </div>
    </div>
  );
};
export default SavedProperties;
