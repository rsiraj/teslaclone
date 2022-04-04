import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/models">Model S</Link>
      <Link to="/model3">Model 3</Link>
      <Link to="/modelx">Model X</Link>
      <Link to="/modely">Model Y</Link>
      <Link to="solarroofs">Solar Panels</Link>
      <Link to="solarpanels">Soolar Roof</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Nav;
