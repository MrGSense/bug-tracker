import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Bug from "../layout/Bug";
import Bugs from "../layout/Bugs";
import Signin from "../forms/Signin";
import Signup from "../forms/Signup";
import CreateBug from "../forms/CreateBug";
import EditBug from "../forms/EditBug";

// Private Route
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <div className='Routes'>
      <Switch>
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/bugs' component={Bugs} />
        <Route exact path='/bug/:id' component={Bug} />
        <PrivateRoute exact path='/bugs/create' component={CreateBug} />
        <PrivateRoute exact path='/bug/:id/edit' component={EditBug} />
      </Switch>
    </div>
  );
};

export default Routes;
