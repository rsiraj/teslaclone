import React from "react";
import CarHero from "../components/CarHero";
import Safety from "../components/Safety";
import Order from "../components/Order";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../arrow.svg";

const Model3 = ({ data }) => {
  window.scrollTo(0, 0);
  return (
    <div>
      <CarHero data={data} />
      <Safety data={data} />
      <Order />
      <ScrollToTop smooth component={<MySVG />} />
    </div>
  );
};

export default Model3;
