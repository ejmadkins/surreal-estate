import React, { useState } from "react";
import Alert from "./Alert";
import createProperty from "../requests/createProperty";
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
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    createProperty(fields, setAlert);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="add-property">
      <div className="add-property-card">
        <Alert message={alert.message} success={alert.isSuccess} />
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
                <option value="London">London</option>
                <option value="Stoke">Stoke</option>
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
    </div>
  );
};

export default AddProperty;
