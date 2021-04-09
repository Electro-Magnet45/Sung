import React from "react";
import "./css/Home.css";

import { Button } from "grommet";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useHistory } from "react-router-dom";

const Home = () => {
  //
  const history = useHistory();

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
          <Button
            className="home-cont_button"
            primary
            label="Get Started"
            onClick={() => history.push("/register")}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
