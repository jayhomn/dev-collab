import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  FrontPage,
  CreateProject,
  Dashboard,
  Messages,
  MyProjects,
  Profile,
  Project,
  Settings,
} from "./pages";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <FrontPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
