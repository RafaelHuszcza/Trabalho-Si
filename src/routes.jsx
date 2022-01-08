import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import RoutesLogin from "./components/Routes/login";
import RoutesGlobal from "./components/Routes/global";
// Futuramente para acesso privado do usuário que fez login
// import RoutesPrivate from "./components/Routes/global";

import Login from "./pages/Login";
import Feed from "./pages/Feed";


const PagesRoot = () => (
  <Router>
    <Switch>
      <RoutesLogin path="/login" component={Login}/>
      <RoutesGlobal path="/home" component={Feed}/>
      <RoutesGlobal path="/contato" component={""}/>
      <RoutesGlobal path="/sobre" component={""}/>
      <RoutesGlobal path="/esqueceu-senha" component={""}/>
      <Route path="/">
        <Redirect to="/home"/>
      </Route>
    </Switch>
  </Router>
);

export default PagesRoot;
