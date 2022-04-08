import React from "react";
import Solar from "../components/Solar";
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG} from "../arrow.svg"

const SolarPanels = ({ data }) => {
  return (
    <>
    <Solar data={data} />
    <ScrollToTop smooth component={<MySVG />} />
    </>
  ) 
};

export default SolarPanels;
