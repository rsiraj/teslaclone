import React from "react";
import CarHero from "../components/CarHero";
import Order from "../components/Order";
import Safety from "../components/Safety";

const ModelS = ({ data }) => {
  return (
    <div>
      <CarHero data={data} />
      <Safety data={data} />
      <Order />
    </div>
  );
};

export default ModelS;
