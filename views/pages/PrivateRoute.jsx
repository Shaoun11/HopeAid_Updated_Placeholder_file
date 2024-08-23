import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('authToken') ? true : false;

  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;