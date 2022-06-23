import axios from "axios";

const getProperty = (setResults) => {
  return axios
    .get(`http://localhost:4000/api/v1/PropertyListing/`)
    .then((response) => {
      const propertyResults = response.data;
      console.log(propertyResults);
      setResults(propertyResults);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getProperty;
