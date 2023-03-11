import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../context/authContext";

const RoutesLogin = ({ component: Component, ...rest }) => {
  const { isLogged } = useAuth();

  return (
    <Route
      {...rest}
      render={() =>
        isLogged() ? (
          <Redirect to="/Trabalho-Si/home" />
        ) : (
          <Component {...rest} />
        )
      }
    />
  );
};

export default RoutesLogin;
