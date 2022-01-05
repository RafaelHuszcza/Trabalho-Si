import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import RoutesLogin from "./components/Routes/login";
import RoutesGlobal from "./components/Routes/global";


import Login from "./pages/Login";
import Feed from "./pages/Feed";


const PagesRoot = () => (
  <Router>
    <Switch>
      <RoutesLogin path="/login" component={Login}/>
      <RoutesGlobal path="/feed" component={Feed}/>
      <RoutesGlobal path="/contato" component={Login}/>
      <Route path="/">
        <Redirect to="/feed"/>
      </Route>
    </Switch>
  </Router>
);

export default PagesRoot;
