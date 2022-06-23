import axios from "axios";

const createProperty = (fields, setAlert) => {
  return axios
    .post(`http://localhost:4000/api/v1/PropertyListing/`, fields)
    .then(() => {
      setAlert({ message: "Property Added", isSuccess: true });
    })
    .catch(() => {
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      });
    });
};

export default createProperty;
