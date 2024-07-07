import React from "react";

import AppBar from "../AppBar/AppBar";

export const Layout = ({ children }) => (
  <>
    <AppBar />
    <main>{children}</main>
  </>
);
