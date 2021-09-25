import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Login from "../components/Login/Login";
import Registro from "../components/Registro/Registro";

export default function AppRouter() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Switch>
        <PublicRouter exact path="/" component={Login} isAuthenticated={auth} />
        <PublicRouter
          exact
          path="/auth/registro"
          component={Registro}
          isAuthenticated={auth}
        />
        <Redirect exact to="/" />
      </Switch>
    </Router>
  );
}
