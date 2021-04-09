import React from "react";
import "./css/Login.css";

import { useHistory } from "react-router-dom";
import { TextInput, Button } from "grommet";

const Login = () => {
  //
  const history = useHistory();

  return (
    <div className="login">
      <div className="login__container">
        <div className="login-cont_logoSec">
          <h2>Sung</h2>
        </div>

        <div className="login-cont_divider"></div>

        <div className="login-cont_formSec">
          <div className="login-cont-3_title">
            <h2>Log In with Email</h2>
          </div>

          <div className="login-cont-3-1_formCont">
            <p>What was your Email ?</p>
            <TextInput
              className="login-cont_input"
              placeholder="Enter Your Email"
            />

            <p>What was your Password ?</p>
            <TextInput
              type="password"
              className="login-cont_input"
              placeholder="Enter Your Password"
            />
          </div>

          <div className="login-cont-3_submitBtn">
            <Button
              className="login-cont-3-3_submitButton"
              primary
              label="Login"
            />
          </div>
        </div>

        <div className="login-cont_divider divider-2"></div>

        <div className="login-cont_signUpSec">
          <h2>
            Don't Have An Account,
            <br />
            Sign Up!
          </h2>
          <Button
            className="login-cont_btn"
            label="Sign Up"
            onClick={() => history.push("/register")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
