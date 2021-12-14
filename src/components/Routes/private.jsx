/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../context/authContext'


const RoutesPrivate = ({ component: Component, blockUser=[] ,...rest }) => {
  const { data, isLogged } = useAuth()
  const { user_type } = data?.user

  return (
    <Route
      {...rest}
      render={() => isLogged()
        ? blockUser.includes(user_type)
        ? user_type !== 'admin'
        ? <Redirect to="/feed" />
        : <Redirect to="/admin"/>
        :  <Component {...rest}/>
        : <Redirect to="/login" />
      }
    />
  )
}

export default RoutesPrivate;
