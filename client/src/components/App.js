import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";

// Components
import Navbar from "./bug-tracker/layout/Navbar";
import Home from "./bug-tracker/layout/Home";
import Routes from "./bug-tracker/routing/Routes";

// Styles
import "./styles/app.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={Routes} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
