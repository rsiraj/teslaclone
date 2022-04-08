import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const location = useLocation();
  const setFont = () => {
    if (location.pathname === "/solarroofs") {
      return "font-white";
    } else {
      return "";
    }
  };
  const setBackground = () => {
    if (location.pathname === "/solarroofs") {
      return "background-white";
    } else {
      return "";
    }
  };
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="header">
      <NavLink
        className="header-logo-wrapper"
        to="/"
        onClick={() => setNavbarOpen(false)}
      >
        <img
          src="./img/tesla-logo-header.png"
          alt="tesla"
          className={`header-logo ${setBackground()}`}
        />
      </NavLink>
      <div className={`header-nav ${setFont()}`}>
        <NavLink
          to="/models"
          className="header-nav-links"
          onClick={() => setNavbarOpen(false)}
        >
          Model S
        </NavLink>
        <NavLink
          to="/model3"
          className="header-nav-links"
          onClick={() => setNavbarOpen(false)}
        >
          Model 3
        </NavLink>
        <NavLink
          to="/modelx"
          className="header-nav-links"
          onClick={() => setNavbarOpen(false)}
        >
          Model X
        </NavLink>
        <NavLink
          to="/modely"
          className="header-nav-links"
          onClick={() => setNavbarOpen(false)}
        >
          Model Y
        </NavLink>
        <NavLink
          to="solarpanels"
          className="header-nav-links"
          onClick={() => setNavbarOpen(false)}
        >
          Solar Panels
        </NavLink>
        <NavLink
          to="solarroofs"
          className="header-nav-links"
          onClick={() => setNavbarOpen(false)}
        >
          Solar Roof
        </NavLink>
      </div>
      <div className={`header-nav-menu ${setFont()} `}>
        <span className="header-nav-links">Shop</span>
        <span className="header-nav-links">Account</span>
        <span
          className="header-nav-links menu"
          onClick={() => setNavbarOpen(true)}
        >
          Menu
        </span>
      </div>
      <div className={`hidden-menu ${navbarOpen ? "show" : ""}`}>
        <div className="button-wrapper">
          <img
            className="close-button"
            src="./img/x.png"
            alt="close"
            onClick={() => setNavbarOpen(false)}
          />
        </div>
        <ul>
          <li>
            <NavLink className="header-nav-links" to="">
              Existing Inventory
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Used Inventory
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Trade-In
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Test Drive
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Powerwall
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Commercial Energy
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Utilities
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Charging
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Find Us
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Support
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Investor Relations
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Account
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Model S
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Model 3
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Model X
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Model Y
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Solar Roof
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-links" to="">
              Solar Panels
            </NavLink>
          </li>
          {/* <li><Link className="header-nav-links" to=''></Link></li> */}
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Nav;
