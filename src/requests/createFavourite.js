import axios from "axios";

const createProperty = (propertyId, userID) => {
  return axios
    .post(`http://localhost:4000/api/v1/Favourite/`, {
      propertyListing: propertyId,
      fbUserId: userID,
    })
    .then(() => {
      console.log("Saved favourite");
    })
    .catch(() => {
      console.log("Could not save favourite");
    });
};

export default createProperty;
