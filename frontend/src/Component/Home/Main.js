//importing react library from react into this js file
import React from "react";
//Outlet is used to render the content of the nested routes.
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//Arrow function. Shorthand way to write function in js.
const Main = () => {
  return (
    <div>
      {/* rendering(adding) the header component */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
