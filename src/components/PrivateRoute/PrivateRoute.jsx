import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";

export const PrivateRoute = ({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? element : <Navigate to={redirectTo} />;
};
