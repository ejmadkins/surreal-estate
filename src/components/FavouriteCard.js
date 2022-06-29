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
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/favourite-card.css";

const FavouriteCard = ({
  _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userID,
  onSaveProperty,
}) => {
  return (
    <div className="favourite-card">
      <h1 className="favourite-card__title">{title}</h1>
      <img
        className="favourite-card__image"
        src="https://loremflickr.com/400/240/"
        alt="placeholder"
      />
      <p className="favourite-card__type">
        <FontAwesomeIcon icon={faBuilding} /> {type}
      </p>
      <p className="favourite-card__bathrooms">
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </p>
      <p className="favourite-card__bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </p>
      <p className="favourite-card__price">
        <FontAwesomeIcon icon={faSterlingSign} /> {price}
      </p>
      <p className="favourite-card__city">
        <FontAwesomeIcon icon={faLocationPin} /> {city}
      </p>
      <a className="favourite-card__email" href={`mailto:${email}`}>
        <FontAwesomeIcon icon={faEnvelope} /> Send Email
      </a>
      {userID && (
        <button
          type="button"
          className="favourite-card__save"
          onClick={() => onSaveProperty(_id)}
        >
          <FontAwesomeIcon icon={faStar} /> Save
        </button>
      )}
    </div>
  );
};

export default FavouriteCard;
