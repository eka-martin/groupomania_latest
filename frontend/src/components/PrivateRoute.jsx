import React from "react";
import { Navigate } from "react-router-dom";

//route d'authentification
//grace à token il permets de s'afficher tout ce que est dedans lui
function PrivateRoute(props) {
  return localStorage.token ? props.children : <Navigate to="/" />;
}

export default PrivateRoute;
