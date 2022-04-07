import React from "react";
import OrderNowButton from "./OrderNowButton";
import "./Safety.scss";
const Safety = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div className="safety-container" key={item.id}>
          <div className="safety-container-leftSide">
            <p className="safety-subtitle">{item.safety_subtitle}</p>
            <h1 className="safety-title">{item.safety_title}</h1>
            <p className="safety-description">{item.safety_description}</p>
          </div>
          <div className="safety-container-rightSide">
            <img className="safety-image" src={item.safety_img} alt="" />
          </div>
        </div>
      ))}
      <OrderNowButton />
    </div>
  );
};

export default Safety;
