import React from "react";
import { useLocation } from "react-router-dom";
import "./CarHero.scss";
const CarHero = ({ data }) => {
  const location = useLocation();
  const getPath = () => {
    if (location.pathname === "/models") {
      return "hero_img_1";
    }
    if (location.pathname === "/model3") {
      return "hero_img_2";
    }
    if (location.pathname === "/modelx") {
      return "hero_img_3";
    }
    if (location.pathname === "/modely") {
      return "hero_img_4";
    }
  };

  const setTitle = () => {
    if (location.pathname === "/models") {
      return data[0].hero_title1;
    }
    if (location.pathname === "/model3") {
      return data[0].hero_title2;
    }
    if (location.pathname === "/modelx") {
      return data[0].hero_title3;
    }
    if (location.pathname === "/modely") {
      return data[0].hero_title4;
    }
  };
  const setSubtitle = () => {
    if (location.pathname === "/models") {
      return data[0].hero_subtitle1;
    }
    if (location.pathname === "/model3") {
      return data[0].hero_subtitle2;
    }
    if (location.pathname === "/modelx") {
      return data[0].hero_subtitle3;
    }
    if (location.pathname === "/modely") {
      return data[0].hero_subtitle4;
    }
  };
  return (
    <>
      {data.map((item) => (
        <section className={`car-hero-image ${getPath()}`}>
          <div className="car-hero-text-container">
            <h1 className="car-hero-title">{setTitle()}</h1>
            <p className="car-hero-subtitle">{setSubtitle()}</p>
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
        </section>
      ))}
    </>
  );
};

export default CarHero;
