import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header-cont_logoSec">
          <h2>Sung</h2>
        </div>

        <div className="header-cont_navSec">
          <div className="header-cont-2_navBar">
            <ul>
              <li>Home</li>
            </ul>

            <div className="header-cont-2-1_divider"></div>
          </div>
          <div className="header-cont-2_navBar-2">
            <ul>
              <li>Log In</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
