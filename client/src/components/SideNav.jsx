import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <nav>
        <Link>Shop</Link>
        <Link>Account</Link>
        <ul>
          <li>
            <Link>Existing Inventory</Link>
          </li>
          <li>
            <Link>Used Inventory</Link>
          </li>
          <li>
            <Link>Trade-In</Link>
          </li>
          <li>
            <Link>Test Drive</Link>
          </li>
          <li>
            <Link>Cybertruck</Link>
          </li>
          <li>
            <Link>Roadster</Link>
          </li>
          <li>
            <Link>Semi</Link>
          </li>
          <li>
            <Link>Charging</Link>
          </li>
          <li>
            <Link>Powerwall</Link>
          </li>
          <li>
            <Link>Commercial Energy</Link>
          </li>
          <li>
            <Link>Utilities</Link>
          </li>
          <li>
            <Link>Find Us</Link>
          </li>
          <li>
            <Link>Support</Link>
          </li>
          <li>
            <Link>Investor Relations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
