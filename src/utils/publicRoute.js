import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/common';

// handle the public routes
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: 'home' }} />
        )
      }
    />
  );
};

export default PublicRoute;
