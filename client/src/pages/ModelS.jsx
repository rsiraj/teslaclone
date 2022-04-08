import React from "react";
import CarHero from "../components/CarHero";
import Order from "../components/Order";
import Safety from "../components/Safety";
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG} from "../arrow.svg"

const ModelS = ({ data }) => {
  return (
    <div>
      <CarHero data={data} />
      <Safety data={data} />
      <Order />
      <ScrollToTop smooth component={<MySVG />} />
    </div>
  );
};

export default ModelS;
