import React from "react";
import Footer from "../components/Footer";
import HomeCards from "../components/HomeCards";
import Nav from "../components/Nav";

const Landing = ({ data }) => {
  return (
    <>
      <HomeCards data={data} />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
