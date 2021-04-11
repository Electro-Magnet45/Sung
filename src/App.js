import React from "react";
import "./App.css";

import ScrollToTop from "./ScrollToTop";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ErrorPage from "./screens/ErrorPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
