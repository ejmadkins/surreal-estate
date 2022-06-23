import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import getProperty from "../requests/getProperty";
import "../styles/properties.css";

const Properties = () => {
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

  return (
    <>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="property-cards">
        {results.map((property) => (
          <PropertyCard
            title={property.title}
            type={property.type}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            price={property.price}
            city={property.city}
            email={property.email}
          />
        ))}
      </div>
    </>
  );
};
export default Properties;
