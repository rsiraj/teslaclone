import React from "react";
import CarHero from "../components/CarHero";
import Safety from "../components/Safety";
import Order from "../components/Order";
const ModelY = ({ data }) => {
  return (
    <div>
      <CarHero data={data} />
      <Safety data={data} />
      <Order />
    </div>
  );
};

export default ModelY;
