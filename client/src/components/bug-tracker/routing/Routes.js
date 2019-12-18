import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import About from "../layout/About";
import Bug from "../layout/Bug";
import Bugs from "../layout/Bugs";
import Signin from "../layout/Signin";
import Signup from "../layout/Signup";

// Private Route
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <div className='Routes'>
      <Switch>
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/about' component={About} />
        <Route exact path='/bugs' component={Bugs} />
        <Route exact path='/bugs/:id' component={Bug} />
      </Switch>
    </div>
  );
};

export default Routes;
