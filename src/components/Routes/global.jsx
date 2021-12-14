/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../context/authContext'

const RoutesForgot = ({ component: Component ,...rest }) => {
  const { isLogged } = useAuth()

  return (
    <Route
      {...rest}
      render={() => isLogged()
        ? <Component {...rest} />
        : <Redirect to="/login" />
      }
    />
  )
}

export default RoutesForgot;
