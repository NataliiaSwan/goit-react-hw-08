import React from "react";

import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { getIsLoggedIn } from "../../redux/auth/selectors";

export const RestrictedRoute = ({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
};