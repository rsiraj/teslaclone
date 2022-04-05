import React, { useState } from "react";
// import Logo from "../../public/img/tesla-logo-header.png";
import { Link, Outlet } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    if (navbarOpen) console.log("click");
  };
  return (
    <div className="header">
      <img src="" alt="tesla" className="header-logo" />
      <div className="header-nav">
        <Link to="/models" className="header-nav-links">
          Model S
        </Link>
        <Link to="/model3" className="header-nav-links">
          Model 3
        </Link>
        <Link to="/modelx" className="header-nav-links">
          Model X
        </Link>
        <Link to="/modely" className="header-nav-links">
          Model Y
        </Link>
        <Link to="solarroofs" className="header-nav-links">
          Solar Panels
        </Link>
        <Link to="solarpanels" className="header-nav-links">
          Solar Roof
        </Link>
      </div>
      <div className="header-nav-menu">
        <Link to="" className="header-nav-links">
          Shop
        </Link>
        <Link to="" className="header-nav-links">
          Account
        </Link>
        <Link to="" className="header-nav-links menu" onClick={handleToggle}>
          Menu
        </Link>
      </div>

      <div className={`hidden-menu" ${navbarOpen ? "show" : ""}`}>
        <button onClick={closeMenu}>close</button>
        <ul>
          <li>
            <Link className="hidden-menu-item" to="">
              Existing Inventory
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Used Inventory
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Trade-In
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Test Drive
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Cybertruck
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Roadster
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Semi
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Charging
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Powerwall
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Commercial Energy
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Utilities
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Find Us
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Support
            </Link>
          </li>

          <li>
            <Link className="hidden-menu-item" to="">
              Investor Relations
            </Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Nav;
