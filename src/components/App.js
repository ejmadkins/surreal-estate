import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
// import getProperty from "../requests/getProperty";
import "../styles/App.css";

const App = () => {
  const [userID, setUserID] = useState;

  const handleLogin = (response) => {};

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
