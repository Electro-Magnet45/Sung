import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header-cont_logoSec">
          <h2>
            <Link to="/">Sung</Link>
          </h2>
        </div>

        <div className="header-cont_navSec">
          <div className="header-cont-2_navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>

            <div className="header-cont-2-1_divider"></div>
          </div>
          <div className="header-cont-2_navBar-2">
            <ul>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
