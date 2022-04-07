import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router";
import "./Solar.scss";

const Solar = ({ data }, props) => {
  let [roofOrPanel, setRoofOrPanel] = useState(true);

  console.log(props.location);

  return (
    <div>
      {data.map((item) => (
        <section className="solar" key={item.id}>
          <section>
            <div className="solar-hero-wrapper">
              <img
                className="solar-hero"
                src={roofOrPanel ? item.hero_img1 : item.hero_img2}
                alt="img"
              />
            </div>
            <h1 className="hero-title">{item.title1}</h1>
            <p className="hero-subtitle">{item.hero_subtitle1}</p>
          </section>
          <section className="solar-sleek">
            <div>
              <section className="sleek-details">
                <span>
                  <span className="sleek-subtitle">{item.sleek_subtitle}</span>
                  <span className="sleek-title">{item.sleek_title}</span>
                </span>
                <section className="sleek-description">
                  <p>{item.sleek_description}</p>
                </section>
              </section>
              <div>
                <img src={item.sleek_img} alt="solar panel" />
              </div>
            </div>
          </section>
          <section className="solar-production">
            <div>
              <section className="production-details">
                <span>
                  <span className="production-subtitle">
                    {item.production_subtitle}
                  </span>
                  <span className="production-title">
                    {item.production_title}
                  </span>
                </span>
                <section className="production-description">
                  <p>{item.production_description}</p>
                </section>
              </section>
              <div>
                <img src={item.production_img} alt="solar panel" />
              </div>
            </div>
          </section>
          <section className="solar-value">
            <div>
              <section className="value-details">
                <span>
                  <span className="value-subtitle">{item.value_subtitle}</span>
                  <span className="value-title">{item.value_title}</span>
                </span>
                <section className="value-description">
                  <p>{item.value_description}</p>
                </section>
              </section>
              <div>
                <img src={item.value_img} alt="solar panel" />
              </div>
            </div>
          </section>
        </section>
      ))}
    </div>
  );
};

export default Solar;
