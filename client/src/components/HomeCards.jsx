import React from "react";
import "./homeCards.scss";
import Nav from "./Nav";

const HomeCards = ({ data }) => {
  const modeS = "modelS";
  return (
    <div>
      {console.log(data)}
      <section className={`hero-card hero-card_${modeS} font-link`}>
        <h1>Hello</h1>
      </section>
    </div>
  );
};

export default HomeCards;
