import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import getProperty from "../requests/getProperty";
import "../styles/properties.css";

const Properties = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getProperty(setResults);
  }, []);

  return (
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
  );
};
export default Properties;
