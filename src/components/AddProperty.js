import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Detatched",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "",
      email: "",
    },
  };
  // eslint-disable-next-line no-unused-vars
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    console.log(fields);
  };
  return (
    <div className="add-property">
      Add Property Page
      <div className="add-property-form">
        <form onSubmit={handleAddProperty}>
          <label htmlFor={fields.title}>
            Property Title
            <input
              id="title"
              name="title"
              type="text"
              value={fields.title}
              onChange={handleFieldChange}
              placeholder="3 bed detatched house in Manchester"
            />
          </label>
          <label htmlFor={fields.type}>
            Property Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
              placeholder="Detatched"
            >
              <option value="Flat">Flat</option>
              <option value="Detatched">Detatched</option>
              <option value="Semi-Detatched">Semi-Detatched</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label htmlFor={fields.bedrooms}>
            Number of Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              placeholder="3"
            />
          </label>
          <label htmlFor={fields.bathrooms}>
            Number of Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              placeholder="2"
            />
          </label>
          <label htmlFor={fields.price}>
            Price
            <input
              id="price"
              name="price"
              type="number"
              value={fields.price}
              onChange={handleFieldChange}
              placeholder="200000"
            />
          </label>
          <label htmlFor={fields.city}>
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
              placeholder="Manchester"
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label htmlFor={fields.email}>
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="john.smith@email.com"
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
