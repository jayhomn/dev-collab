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
  LoginPage,
} from "./pages";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/createproject">
            <CreateProject />
          </Route>
          <Route path="/myprojects">
            <MyProjects />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
