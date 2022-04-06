import React from "react";
import "./CarHero.scss";
const CarHero = () => {
  return (
    <div className="car-hero-container">
      <div className="car-hero-text">
        <div className="car-hero-title"></div>
        <div className="car-hero-subtitle"></div>
        <div className="car-hero-features">
          <div className="car-hero-features-subtitle"></div>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarHero;
