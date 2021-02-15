import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { 
  AuthenticatedRoute, 
  UnauthenticatedRoute 
} from "../components";

import Login from "../pages/Login/Login";
import Overview from "../pages/Overview/Overview";

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (
            <Redirect to="/overview"/>
          )}/>
        <UnauthenticatedRoute component={Login} path="/login" />
        <AuthenticatedRoute component={Overview} path="/overview" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes