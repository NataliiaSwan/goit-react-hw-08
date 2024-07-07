import React from "react";

import { useSelector } from "react-redux";

import { Navigation } from "../Navigation/Navigation";

import { AuthNav } from "../AuthNav/AuthNav";

import UserMenu from "../UserMenu/UserMenu";

import { getIsLoggedIn } from "../../redux/auth/selectors";

import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
