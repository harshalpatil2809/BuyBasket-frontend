import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Fotter from "./components/Fotter";
import ContextProvider from "./context/ContextProvider";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = () => {
  return (
    <div>
      <ContextProvider>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Fotter />
      </ContextProvider>
    </div>
  );
};

export default Layout;
