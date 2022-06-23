/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faLocationPin,
  faBuilding,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
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
      <img
        className="property-card__image"
        src="https://loremflickr.com/400/240/"
        alt="placeholder"
      />
      <p className="property-card__type">
        <FontAwesomeIcon icon={faBuilding} /> {type}
      </p>
      <p className="property-card__bathrooms">
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </p>
      <p className="property-card__bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </p>
      <p className="property-card__price">
        <FontAwesomeIcon icon={faSterlingSign} /> {price}
      </p>
      <p className="property-card__city">
        <FontAwesomeIcon icon={faLocationPin} /> {city}
      </p>
      <a className="property-card__email" href={`mailto:${email}`}>
        <FontAwesomeIcon icon={faEnvelope} /> Send Email
      </a>
    </div>
  );
};

export default PropertyCard;
