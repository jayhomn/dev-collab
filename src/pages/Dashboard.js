import { AppBar, ProjectCard } from "../components";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function DashBoard() {
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      const userId = user.sub.split("|")[1];

      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user/${userId}3`)
        .then((res) => {
          const returnedUser = res.data;
          if (!returnedUser) {
            history.push("/newuser");
          }
        });
    }
  }, [user, isAuthenticated]);

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <AppBar />
      <div className="flex flex-col">
        <div className="flex flex-row justify-between py-1 px-20 mt-16">
          <ProjectCard name="Paypal" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
        </div>
        <div className="flex flex-row justify-between py-1 px-20 mt-16">
          <ProjectCard name="1" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
        </div>
        <div className="flex flex-row justify-between py-1 px-20 mt-16">
          <ProjectCard name="1" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
