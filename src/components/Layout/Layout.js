import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="">{props.children}</div>

      <Footer />
    </>
  );
};

export default Layout;
