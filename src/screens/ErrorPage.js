import React from "react";
import "./ErrorPage.css";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="errorPage__container">
        <h2>
          <Link to="/">Sung</Link>
        </h2>
        <h1>404 Error</h1>
        <p>This Page Was Not Found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
