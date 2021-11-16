import { AppBar, ProjectCard } from "../components";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function DashBoard() {
  const { user, isAuthenticated } = useAuth0();
  const [projects, setProjects] = useState([]);
  const [paginationCursor, setPaginationCursor] = useState(0);
  let history = useHistory();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/project?limit=12&after_id=${paginationCursor}`
      )
      .then((res) => {
        setProjects(res.data);
        setPaginationCursor(12);
      });
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const userId = user.sub.split("|")[1];

      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const returnedUser = res.data;
          if (!returnedUser) {
            history.push("/newuser");
          }
        });
    }
  }, [user, isAuthenticated]);

  return (
    <div className="overflow-x-hidden overflow-y-hidden pb-10">
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
