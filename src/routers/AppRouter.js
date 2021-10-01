import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Login from "../components/Login/Login";
import Registro from "../components/Registro/Registro";
import Navbar from "../components/Navbar/Navbar.jsx";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { listarProductos } from "../actions/actionProductos";
import Detalles from "../components/Detalle/Detalles";
import Productos from "../components/Productos/Productos.jsx";
import NewProduct from "../components/NewProduct/NewProduct";

export default function AppRouter() {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const auth1 = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth1, async (user) => {
      if (user?.uid) {
        setAuth(true);
        dispatch(listarProductos("productos"));
      } else {
        setAuth(false);
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <PublicRouter
          exact
          path="/auth/inicio"
          component={Login}
          isAuthenticated={auth}
        />

        <PublicRouter
          exact
          path="/auth/registro"
          component={Registro}
          isAuthenticated={auth}
        />
        <>
          <Navbar />
          <PrivateRouter
            exact
            path="/principal"
            component={Productos}
            isAuthenticated={auth}
          />

          <PrivateRouter
            exact
            path="/detalle"
            component={Detalles}
            isAuthenticated={auth}
          />
          <PrivateRouter
            exact
            path="/agregar"
            component={NewProduct}
            isAuthenticated={auth}
          />
        </>
        <Redirect to="/auth/inicio" />
      </Switch>
    </Router>
  );
}
