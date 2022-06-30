import PuffLoader from "react-spinners/PuffLoader";
import React from "react";
import "../styles/load-spinner.css";

const LoadSpinner = () => {
  return (
    <div className="loading-spinner">
      <PuffLoader color="deepskyblue" className="moon-loader" size={150} />
    </div>
  );
};

export default LoadSpinner;
