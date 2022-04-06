import React from "react";
import HomeCards from "../components/HomeCards";

const Landing = ({ data }) => {
  return (
    <>
      <HomeCards data={data} />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
