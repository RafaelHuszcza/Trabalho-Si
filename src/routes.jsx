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
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

const PagesRoot = () => (
  <Router>
    <Switch>
      <RoutesLogin path="/Trabalho-Si/login" component={Login} />
      <RoutesGlobal path="/Trabalho-Si" component={Feed} />
      <RoutesGlobal path="/Trabalho-Si/contato" component={Contact} />
      {/* <RoutesGlobal path="/sobre" component={Login} />
      <RoutesGlobal path="/" component={Feed} /> */}
      {/* <RoutesGlobal path="/esqueceu-senha" component={}/> */}
      {/* <Route path="/Trabalho-Si/">
        <Redirect to="/Trabalho-Si/home" />
      </Route> */}
    </Switch>
  </Router>
);

export default PagesRoot;
