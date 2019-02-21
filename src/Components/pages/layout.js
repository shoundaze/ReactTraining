import React from "react";

import Footer from "../includes/Footer";
import Header from "../includes/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div> {children}</div>
      <Footer />
    </>
  );
};

export default Layout;
