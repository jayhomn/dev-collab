import { AppBar, ProjectCard } from "../components";
import React, { useEffect, useState, useRef, useReducer } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function DashBoard() {
  const loadMoreRef = useRef(null);
  const { user, isAuthenticated } = useAuth0();
  const [dataState, setDataState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { loaded: false, projects: [], paginationCursor: 1 }
  );
  //const [isLoaded, setIsLoaded] = useState(false);
  //const [projects, setProjects] = useState([]);
  const [projectsToDisplay, setProjectsToDisplay] = useState([]);
  //const [paginationCursor, setPaginationCursor] = useState(1);
  const intersectionObserver = new IntersectionObserver(loadMore, {
    rootMargin: "10px",
    threshold: 1.0,
  });
  let history = useHistory();

  useEffect(() => {
    (async function initiatedPageLoade() {
      if (isAuthenticated) {
        const userId = user.sub.split("|")[1];

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/user/${userId}`
        );
        const returnedUser = res.data;
        if (!returnedUser) {
          history.push("/newuser");
        } else {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/project?limit=12&after_id=${dataState.paginationCursor}`
          );

          setDataState({
            loaded: true,
            projects: response.data,
            paginationCursor: 13,
          });
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (loadMoreRef.current != null) {
      intersectionObserver.observe(loadMoreRef.current);
    }
  }, [dataState.loaded]);

  useEffect(() => {
    handleDisplayProject();
  }, [dataState.projects]);

  function handleDisplayProject() {
    const numRows = Math.ceil(dataState.projects.length / 4);
    let cursor = 0;
    let toDisplay = [];

    for (let i = 0; i < numRows; i++) {
      let projectRow = [];
      for (let j = cursor; j < cursor + 4; j++) {
        if (j < dataState.projects.length) {
          projectRow.push(
            <ProjectCard key={j} name={dataState.projects[j].projectTitle} />
          );
        }
      }
      toDisplay.push(
        <div key={i} className="flex flex-row justify-between py-1 px-20 mt-16">
          {projectRow}
        </div>
      );
      cursor = cursor + 4;
    }

    setProjectsToDisplay(toDisplay);
  }

  function loadMore(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/api/project?limit=12&after_id=${dataState.paginationCursor}`
          )
          .then((response) => {
            setDataState({
              projects: [...dataState.projects, ...response.data],
              paginationCursor: dataState.paginationCursor + 12,
            });
          });
      }
    });
  }

  return (
    dataState.loaded && (
      <div className="overflow-x-hidden overflow-y-hidden">
        <AppBar />
        <div className="flex flex-col">{projectsToDisplay}</div>
        <div className="mt-5 h-10" ref={loadMoreRef} />
      </div>
    )
  );
}

export default DashBoard;
