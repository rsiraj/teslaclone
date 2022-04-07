import React from "react";
import "./CarHero.scss";
const CarHero = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div className={`car-hero-image hero_img_${item.id}`}>
          <div className="car-hero-text-container">
            <h1 className="car-hero-title">{item.hero_title1}</h1>
            <p className="car-hero-subtitle">{item.hero_subtitle1}</p>
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
      ))}
    </div>
  );
};

export default CarHero;
