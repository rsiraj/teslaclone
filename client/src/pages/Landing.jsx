import React from "react";
import HomeCards from "../components/HomeCards";
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG} from "../arrow.svg"

const Landing = ({ data }) => {
  return (
    <>
      <HomeCards data={data} />
      <ScrollToTop smooth component={<MySVG />} />
    </>
  );
};

export default Landing;
