import { AppBar, ProjectCard } from "../components";
import React, { useState, useRef, useReducer, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

function DashBoard() {
  const loadMoreRef = useRef(null);
  let history = useHistory();
  const { user } = useAuth0();
  const [dataState, setDataState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { loaded: false, projects: [], paginationCursor: 1 }
  );

  const [projectsToDisplay, setProjectsToDisplay] = useState([]);
  const intersectionObserver = new IntersectionObserver(loadMore, {
    rootMargin: "10px",
    threshold: 1.0,
  });

  useEffect(() => {
    (async function initiatedPageLoad() {
      const userId = user.sub.split("|")[1];
      const response = await axios.get(
        `${process.env.PUBLIC_URL}/api/project/by-user/${userId}?limit=12`
      );

      if (response.data.length > 0) {
        setDataState({
          loaded: true,
          projects: response.data,
          paginationCursor: response.data[response.data.length - 1].id,
        });
      } else {
        setDataState({
          loaded: true,
        });
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
          projectRow.push(<ProjectCard key={j} {...dataState.projects[j]} />);
        } else {
          projectRow.push(<div key={j} className="w-96 h-72" />);
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
    const userId = user.sub.split("|")[1];
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        axios
          .get(
            `${process.env.PUBLIC_URL}/api/project/by-user/${userId}?limit=12&after_id=${dataState.paginationCursor}`
          )
          .then((response) => {
            if (response.data.length > 0) {
              setDataState({
                projects: [...dataState.projects, ...response.data],
                paginationCursor: response.data[response.data.length - 1].id,
              });
            }
          });
      }
    });
  }

  return (
    dataState.loaded && (
      <div className="overflow-x-hidden overflow-y-hidden">
        <AppBar />
        <div className="flex flex-col">
          <div className="flex flex-row mt-14 mb-12 px-20 items-end">
            <div className="font-roboto text-8xl mr-6">My Projects</div>
            <button
              onClick={() => {
                history.push("/createproject");
              }}
              className="text-2xl"
            >
              Create New Project
            </button>
          </div>
          <div className="h-1 mx-20 bg-black" />
          {dataState.projects.length > 0 ? (
            projectsToDisplay
          ) : (
            <div className="text-4xl ml-auto mr-auto mt-80">
              You have no projects yet!
            </div>
          )}
        </div>
        <div className="mt-5 h-10" ref={loadMoreRef} />
      </div>
    )
  );
}

export default DashBoard;
