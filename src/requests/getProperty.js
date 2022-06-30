import axios from "axios";

const getProperty = (setResults, setAlert, setLoading) => {
  return axios
    .get(`http://localhost:4000/api/v1/PropertyListing/`)
    .then((response) => {
      const propertyResults = response.data;
      setResults(propertyResults);
      setLoading(false);
    })
    .catch((err) => {
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      });
      console.log(err);
    });
};

export default getProperty;
