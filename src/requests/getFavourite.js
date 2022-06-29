import axios from "axios";

const getFavourite = (setFavouriteResults, setAlert) => {
  return axios
    .get(`http://localhost:4000/api/v1/Favourite?populate=propertyListing`)
    .then((response) => {
      const favouriteResults = response.data;
      setFavouriteResults(favouriteResults);
    })
    .catch((err) => {
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      });
      console.log(err);
    });
};

export default getFavourite;
