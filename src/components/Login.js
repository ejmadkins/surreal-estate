import React from "react";
// import PropTypes from "prop-types";
import "../styles/alert.css";

const Login = ({ message, success }) => {
  if (!message) return null;
  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Login;

// Login.propTypes = {
//   message: PropTypes.string.isRequired,
//   success: PropTypes.bool,
// };
