/* eslint-disable */
import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../context/authContext";

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { isLogged } = useAuth();

  return (
    <Route
      {...rest}
      render={() =>
        isLogged() ? (
          <Redirect to="/Trabalho-Si/loginhome" />
        ) : (
          <Redirect to="/Trabalho-Si/login" />
        )
      }
    />
  );
};

export default RoutesPrivate;
