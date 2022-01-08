/* eslint-disable */
import React from 'react';
import { Route} from 'react-router-dom';

const RoutesGlobal = ({ component: Component ,...rest }) => {
  return (
    <Route
      {...rest}
      render={() => <Component {...rest} />

      }
    />
  )
}

export default RoutesGlobal;
