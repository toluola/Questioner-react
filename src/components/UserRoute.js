import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticate } from '../utils/auth';

export const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!authenticate()) {
        return <Redirect to="/signin" />;
      }
      return Component ? <Component {...props} /> : render(props);
    }}
  />
);