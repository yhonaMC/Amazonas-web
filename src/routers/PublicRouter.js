import React from "react";
import { Route, Redirect } from "react-router-dom";

function PublicRouter({ isAuthenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to="/principal" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRouter;
