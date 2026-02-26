import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Fotter from "./components/Fotter";
import ContextProvider from "./context/ContextProvider";

const Layout = () => {
  return (
    <div>
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Fotter />
      </ContextProvider>
    </div>
  );
};

export default Layout;
