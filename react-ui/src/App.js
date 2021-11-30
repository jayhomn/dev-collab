import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Auth0Provider } from "@auth0/auth0-react";
import { PrivateRoute } from "./routing";
import {
  FrontPage,
  CreateProject,
  Dashboard,
  Messages,
  MyProjects,
  Profile,
  Project,
  Settings,
  NewUser,
} from "./pages";

export const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  console.log(window.location.pathname);
  console.log(appState?.returnTo);
  history.replace(appState?.returnTo || window.location.pathname);
};

export default function App() {
  return (
    <Auth0Provider
      domain="dev-fks22fhs.us.auth0.com"
      clientId="DqAaiqxEehzWAt2f7ulfSgySAQOCD4U4"
      redirectUri={window.location.origin + "/dashboard"}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <Switch>
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/createproject`}
            component={CreateProject}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/myprojects`}
            component={MyProjects}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/profile`}
            component={Profile}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/project/:projectId`}
            component={Project}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/dashboard`}
            component={Dashboard}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/newuser`}
            component={NewUser}
          />
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <FrontPage />
          </Route>
        </Switch>
      </Router>
    </Auth0Provider>
  );
}
