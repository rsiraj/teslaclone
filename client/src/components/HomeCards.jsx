import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./homeCards.scss";

const HomeCards = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <section
          className={`hero-card hero-card_${item.id} font-link`}
          id={`${item.id === 2 ? "scrolled" : ""}`}
          key={item.id}
        >
          <div className="hero-card_description">
            <h1>{item.item_model}</h1>
            <div className="subtitle">
              <span>{item.item_description} </span>
              <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
                <span className="link-description">
                  {item.id < 5 ? "Touchless Delivery" : ""}
                </span>
              </a>
            </div>

            <div
              className="product-btn "
              id={`${item.id >= 5 ? "hidden" : ""}`}
            >
              <div className="button-group">
                <a href={item.item_order_btn} className="custom-btn">
                  Custom Order
                </a>
                <a href={item.item_inventory_btn} className="inventory-btn">
                  Existing Inventory
                </a>
              </div>
            </div>

            <div
              className="product-btn "
              id={`${!(item.id >= 5 && item.id < 7) ? "hidden" : ""}`}
            >
              <div className="button-group">
                <a href={item.item_order_btn} className="custom-btn">
                  Order Now
                </a>
                <a href={item.item_inventory_btn} className="inventory-btn">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="product-btn "
              id={`${!(item.id === 7) ? "hidden" : ""}`}
            >
              <div className="button-group">
                <a href={item.item_order_btn} className="custom-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <a href="#scrolled">
            <span role="button" className="chevron-down animate-chevron_bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-down"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </a>
        </section>
      ))}
      
    </>
  );
};

export default HomeCards;
