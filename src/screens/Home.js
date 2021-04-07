import React from "react";
import "./css/Home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="home__container">
        <div className="home-cont_title">
          <h1>Pleasure</h1>
          <h2>
            That's the <span>Price</span>
            <br /> we pay <span>to</span> you
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
