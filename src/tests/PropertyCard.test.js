import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    property: {
      title: "4 bed detatched house in Manchester",
      type: "detatched",
      bathrooms: "3",
      bedrooms: "4",
      price: "500000",
      city: "Manchester",
      email: "john.smith@email.com",
    },
  };

  it("renders correctly with an error", () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.property.title}
        type={validProps.property.type}
        bathrooms={validProps.property.bathrooms}
        bedrooms={validProps.property.bedrooms}
        price={validProps.property.price}
        city={validProps.property.city}
        email={validProps.property.email}
      />
    );

    expect(getByText("4 bed detatched house in Manchester")).toHaveClass(
      "property-card__title"
    );
    expect(getByText("detatched")).toHaveClass("property-card__type");
    expect(getByText("3")).toHaveClass("property-card__bathrooms");
    expect(getByText("4")).toHaveClass("property-card__bedrooms");
    expect(getByText("500000")).toHaveClass("property-card__price");
    expect(getByText("Manchester")).toHaveClass("property-card__city");
    expect(getByText("Send Email")).toHaveClass("property-card__email");
  });
});
