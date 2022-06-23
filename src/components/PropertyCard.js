/* eslint-disable react/prop-types */
import React from "react";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <h1 className="property-card__title">{title}</h1>
      <p className="property-card__type">{type}</p>
      <p className="property-card__bathrooms">{bathrooms}</p>
      <p className="property-card__bedrooms">{bedrooms}</p>
      <p className="property-card__price">{price}</p>
      <p className="property-card__city">{city}</p>
      <p className="property-card__email">{email}</p>
    </div>
  );
};

export default PropertyCard;
