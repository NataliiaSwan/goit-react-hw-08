import "./App.css";

import { useEffect, lazy, Suspense } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import { refreshUser } from "../redux/auth/operations";

import { Layout } from "../components/Layout/Layout";

import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";

import { RestrictedRoute } from "../components/RestrictedRoute/RestrictedRoute";

import { getIsRefreshing } from "../redux/auth/selectors";

const HomePage = lazy(() => import("../pages/HomePages/HomePages"));

const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user, please wait...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                element={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};
