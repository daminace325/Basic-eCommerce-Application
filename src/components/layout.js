import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-300 to-purple-500">
    <Navbar />
      {children}
  </div>
);

export default Layout;
