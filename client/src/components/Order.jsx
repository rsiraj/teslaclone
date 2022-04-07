import React from "react";
import "./Order.scss";

const Order = () => {
  return (
    <div className="order-section">
      <div className="order-buttons">
        <button className="order-now-button">Order Now</button>
        <button className="compare-button">Compare</button>
      </div>
      <div className="order-image-section">
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/457dd9fa-6e32-43b1-a6cf-9b3d76e9e181/bvlatuR/std/2232x720/global-order-hero"
          alt=""
        />
      </div>
    </div>
  );
};

export default Order;