import React from "react";
import "./homeCards.scss";

const HomeCards = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <section
          className={`hero-card hero-card_${item.id} font-link`}
          key={item.id}
        >
          <div className="hero-card_description">
            <h1>{item.car_model}</h1>
            <p>Order Online for Touchless Delivery</p>
          </div>

          <span role="button" className="animate-chevron_bounce">
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
        </section>
      ))}
      ;
    </div>
  );
};

export default HomeCards;
