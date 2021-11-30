import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function PrivateRoute({ component, ...rest }) {
  return <Route component={withAuthenticationRequired(component)} {...rest} />;
}

export default PrivateRoute;
