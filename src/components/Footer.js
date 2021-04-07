import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer-cont_logoSec">
          <h2>Sung</h2>
        </div>

        <div className="footer-cont_navSec">
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
        </div>

        <div className="footer-cont_socialSec"></div>
      </div>
    </div>
  );
};

export default Footer;
