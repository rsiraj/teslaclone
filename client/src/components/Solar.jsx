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
    <div>
      {data.map((item) => (
        <section className="solar" key={item.id}>
          <section>
            <div className="solar-hero-wrapper">
              <img className="solar-hero" src={getPath()} alt="img" />
            </div>
            <h1 className="hero-title">{setTitle()}</h1>
            <p className="hero-subtitle">{setSubtitle()}</p>
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
