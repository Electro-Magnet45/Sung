import React from "react";
import "./css/Register.css";

import { Link } from "react-router-dom";
import { TextInput, Select, RadioButtonGroup, Button } from "grommet";

const Register = () => {
  //
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="register">
      <div className="register__container">
        <div className="register-cont_div">
          <div className="register-cont-1_logoSec">
            <h2>Sung</h2>
          </div>

          <div className="register-cont-1_divider"></div>

          <div className="register-cont-1_formSec">
            <div className="register-cont-1-3_title">
              <h2>Sign Up with Email</h2>
            </div>

            <div className="register-cont-1-1_formCont">
              <p>What should we save as your email ?</p>
              <TextInput className="register-cont_input" placeholder="Email" />

              <p>Create A Password</p>
              <TextInput
                className="register-cont_input"
                placeholder="Enter Your Password"
                type="password"
              />

              <p>What should our system call you ?</p>
              <TextInput
                className="register-cont_input"
                placeholder="Enter an Username"
              />

              <p>When was your birth-day ?</p>
              <div className="register-cont-1-1-1_datePicker">
                <div className="register-cont-1-1-1-1_select">
                  <p>Month</p>
                  <Select options={months} />
                </div>

                <div className="register-cont-1-1-1-1_dayInput">
                  <p>Day</p>
                  <TextInput
                    className="register-cont_input register-cont-1-1-1-1-1_input"
                    placeholder="DD"
                    type="text"
                    inputMode="numeric"
                    maxLength="2"
                  />
                </div>

                <div className="register-cont-1-1-1-1_yearInput">
                  <p>Year</p>
                  <TextInput
                    className="register-cont_input register-cont-1-1-1-1-1_input"
                    placeholder="YYYY"
                    type="text"
                    inputMode="numeric"
                    maxLength="4"
                  />
                </div>

                <div className="register-cont-1-1-1-1_blank"></div>
              </div>

              <p>What is your gender ?</p>
              <RadioButtonGroup name="doc" options={["Male", "Female"]} />

              <div className="register-cont-1-1-1_submitBtn">
                <Button
                  className="register-cont-1-1-1_submitButton"
                  primary
                  label="Register"
                />
              </div>
            </div>
          </div>

          <div className="register-cont-1_loginSec">
            <p>
              Have an account ?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
