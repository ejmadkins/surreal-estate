import React from "react";
import { GoogleLogin } from "@react-oauth/google";
// import PropTypes from "prop-types";
import "../styles/alert.css";

const Login = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Login;

// Login.propTypes = {
//   message: PropTypes.string.isRequired,
//   success: PropTypes.bool,
// };
