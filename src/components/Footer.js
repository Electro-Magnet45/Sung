import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer-cont_logoSec">
          <h2>Sung</h2>
        </div>

        <div className="footer-cont_navSec">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="footer-cont_socialSec"></div>
      </div>
    </div>
  );
};

export default Footer;
