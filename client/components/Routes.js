import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types'
import Login from "./Login/Login";
import Navbar from "../components/Navbar"


const Home = () => (
  <div className="homeHeader">
    <h1>Becoming rich is hard. Staying broke is hard. Choose your hard.</h1>
  </div>
);


const Routes = () => {
  return (
    <Switch>
        {/* <nav>
          <Link to="/">Home</Link>
        </nav> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
    </Switch>
  );
};
export default Routes;


