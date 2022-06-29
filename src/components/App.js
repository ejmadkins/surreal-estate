/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/App.css";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    const userObject = jwtDecode(response.credential);
    setUserID(userObject.sub);
  };

  return (
    <div className="surreal-estate">
      <NavBar onLogin={handleLogin} />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
