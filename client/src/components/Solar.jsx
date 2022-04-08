import { useLocation } from "react-router-dom";
import "./Solar.scss";

const Solar = ({ data }) => {
  const location = useLocation();
  const getPath = () => {
    if (location.pathname === "/solarroofs") {
      return data[0].hero_img1;
    }
    if (location.pathname === "/solarpanels") {
      return data[0].hero_img2;
    }
  };

  const setTitle = () => {
    if (location.pathname === "/solarroofs") {
      return data[0].hero_title1;
    }
    if (location.pathname === "/solarpanels") {
      return data[0].hero_title2;
    }
  };
  const setSubtitle = () => {
    if (location.pathname === "/solarroofs") {
      return data[0].hero_subtitle1;
    }
    if (location.pathname === "/solarpanels") {
      return data[0].hero_subtitle2;
    }
  };

  console.log(data);
  return (
    <>
      {data.map((item) => (
        <section className="solar" key={item.id}>
          <section>
            <div className="solar-hero-wrapper">
              <img className="solar-hero" src={getPath()} alt="img" />
            </div>
            <div className="solar-hero-details">
              <h1 className="solar-hero-title">{setTitle()}</h1>
              <p className="solar-hero-subtitle">{setSubtitle()}</p>
            </div>
          </section>
          <section className="solar-cards">
            <section className="solar-card-details">
              <span className="solar-card-header">
                <span className="solar-card-subtitle">
                  {item.sleek_subtitle}
                </span>
                <span className="solar-card-title">{item.sleek_title}</span>
              </span>
              <section className="solar-card-description">
                <p>{item.sleek_description}</p>
              </section>
              <div className="orderNow-button">
                <span>Order Now</span>
              </div>
            </section>
            <div className="solar-img">
              <img src={item.sleek_img} alt="solar panel" />
            </div>
          </section>
          <section className="solar-cards">
            <section className="solar-card-details">
              <span className="solar-card-header">
                <span className="solar-card-subtitle">
                  {item.production_subtitle}
                </span>
                <span className="solar-card-title">
                  {item.production_title}
                </span>
              </span>
              <section className="solar-card-description">
                <p>{item.production_description}</p>
              </section>
              <div className="orderNow-button">
                <span>Order Now</span>
              </div>
            </section>
            <div className="solar-img">
              <img src={item.production_img} alt="solar panel" />
            </div>
          </section>
          <section className="solar-cards">
            <section className="solar-card-details">
              <span className="solar-card-header">
                <span className="solar-card-subtitle">
                  {item.value_subtitle}
                </span>
                <span className="solar-card-title">{item.value_title}</span>
              </span>
              <section className="solar-card-description">
                <p>{item.value_description}</p>
              </section>
              <div className="orderNow-button">
                <span>Order Now</span>
              </div>
            </section>
            <div className="solar-img">
              <img src={item.value_img} alt="solar panel" />
            </div>
          </section>
        </section>
      ))}
    </>
  );
};

export default Solar;
