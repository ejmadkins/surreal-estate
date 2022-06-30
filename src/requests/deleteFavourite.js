import axios from "axios";

const deleteFavourite = (setFavouriteResults, propertyId, userID) => {
  return axios
    .delete(`http://localhost:4000/api/v1/Favourite/`, {
      propertyListing: propertyId,
      fbUserId: userID,
    })
    .then(() => {
      console.log("Deleted favourite");
    })
    .catch(() => {
      console.log("Could not delete favourite");
    });
};

export default deleteFavourite;
