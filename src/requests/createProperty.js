import axios from "axios";

const createProperty = (data) => {
  return axios
    .post(`http://localhost:4000/api/v1/PropertyListing/`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default createProperty;
