import { AppBar, ProjectCard } from "../components";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function DashBoard() {
  const { user, isAuthenticated } = useAuth0();
  const [isLoaded, setIsLoaded] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectsToDisplay, setProjectsToDisplay] = useState([]);
  const [paginationCursor, setPaginationCursor] = useState(1);
  let history = useHistory();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/project?limit=12&after_id=${paginationCursor}`
      )
      .then((res) => {
        console.log(res);
        setProjects(res.data);
        setPaginationCursor(13);
        console.log(projects);
        handleDisplayProject();
      });
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const userId = user.sub.split("|")[1];

      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user/${userId}`)
        .then((res) => {
          const returnedUser = res.data;
          if (!returnedUser) {
            history.push("/newuser");
          } else {
            setIsLoaded(true);
          }
        });
    }
  }, [user, isAuthenticated]);

  function handleDisplayProject() {
    const numRows = Math.ceil(projects.length / 4);
    let cursor = 0;
    let toDisplay = [];

    for (let i = 0; i < numRows; i++) {
      let projectRow = [];
      for (let j = cursor; j < cursor + 4; j++) {}
    }

    setProjectsToDisplay(toDisplay);
  }

  return (
    isLoaded && (
      <div className="overflow-x-hidden overflow-y-hidden pb-10">
        <AppBar />
        <div className="flex flex-col">
          {projects.map(() => {
            return (
              <div className="flex flex-row justify-between py-1 px-20 mt-16">
                <ProjectCard name="Paypal" />
                <ProjectCard name="1" />
                <ProjectCard name="1" />
                <ProjectCard name="1" />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default DashBoard;
