import React from "react";
import "./CarHero.scss";
const CarHero = () => {
  return (
    <div className="car-hero-image">
      <div className="car-hero-text-container">
        <h1 className="car-hero-title">Model S</h1>
        <p className="car-hero-subtitle">Plaid</p>
      </div>
      <div className="car-hero-feature-container">
        <div className="card-hero-feature">
          <h1 className="car-hero-features-data">396 mi </h1>
          <p className="car-hero-features-title">Range (EPA est.)</p>
        </div>
        <div className="card-hero-feature">
          <h1 className="car-hero-features-data">1.99 s</h1>
          <p className="car-hero-features-title">0-60 mph*</p>
        </div>
        <div className="card-hero-feature">
          <h1 className="car-hero-features-data">200 mph</h1>
          <p className="car-hero-features-title">Top Speed</p>
        </div>
        <div className="card-hero-feature">
          <h1 className="car-hero-features-data">1,020 hp</h1>
          <p className="car-hero-features-title">Peak Power</p>
        </div>
        <button className="car-feature-button">Order Now</button>
      </div>
    </div>
  );
};

export default CarHero;
