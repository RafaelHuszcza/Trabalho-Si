/* eslint-disable */
import React from 'react';
import { Route, Redirect} from 'react-router-dom';

import { useAuth } from '../../context/authContext'

const RoutesLogin = ({ component: Component, ...rest }) => {
  const { data, isLogged } = useAuth()
  const { user_type } = data?.user

  return(
    <Route
      {...rest}
      render={() => isLogged()
        ? ( user_type !== 'user'
        ? <Redirect to="/admin" />
        : <Redirect to="/feed" />)
        : <Component {...rest} />
      }
    />
  )
}

export default RoutesLogin;
