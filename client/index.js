import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';
import history from './history';
import { me } from './store/user';
import "bootstrap/dist/js/bootstrap.bundle.min";

const renderApp = () => {
  ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
)
  }
// renderApp({})
(async () => renderApp())();
