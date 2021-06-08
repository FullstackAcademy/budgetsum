import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Login from "./Login/Login";
import UserHome from "./User/User-Home";
import Products from "./Products";
import Discover from "./Budget/Discover";
import Goals from "./Budget/Goals";
import Income from "./Budget/Income";
import Categories from "./Budget/Categories";
import Savings from "./Budget/Savings";
import { me } from "../store/user";

const Home = () => (
  <div className="homeHeader">
    <h1>Becoming rich is hard. Staying broke is hard. Choose your hard.</h1>
  </div>
);

const Routes = ({ me }) => {
  useEffect(() => {
    me();
  }, [me]);

  return (
    <Switch>
      {/* <nav>
          <Link to="/">Home</Link>
        </nav> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={UserHome} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/goals" component={Goals} />
      <Route exact path="/income" component={Income} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/savings" component={Savings} />
    </Switch>
  );
};

const mapDispatch = (dispatch) => ({
  me: () => dispatch(me()),
});

export default connect(null, mapDispatch)(Routes);
