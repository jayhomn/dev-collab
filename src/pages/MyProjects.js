import { AppBar, ProjectCard } from "../components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function DashBoard() {
  let history = useHistory();

  return (
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
