import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import RoutesLogin from "./components/Routes/login";
import RoutesPrivate from "./components/Routes/private";
import RoutesForgot from "./components/Routes/forgot";


import Login from "./pages/Login";


const PagesRoot = () => (
  <Router>
    <Switch>
      <RoutesLogin path="/login" component={Login}/>

      

      <RoutesPrivate path="/admin" component={Login} blockUser={["user"]}/>
      <RoutesPrivate path="/feed" component={Login}/>
      

      <RoutesForgot path="/esqueceu-senha" component={Login}/>

      <Route path="/">
        <Redirect to="/login"/>
      </Route>
    </Switch>
  </Router>
);

export default PagesRoot;
