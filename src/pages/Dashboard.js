import { AppBar, ProjectCard } from "../components";
import React, { useState } from "react";

function DashBoard() {
  return (
    <div class="overflow-x-hidden overflow-y-hidden">
      <AppBar />
      <div class="flex flex-col">
        <div class="flex flex-row justify-between py-1 px-20 mt-16">
          <ProjectCard name="Paypal" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
        </div>
        <div class="flex flex-row justify-between py-1 px-20 mt-16">
          <ProjectCard name="1" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
          <ProjectCard name="1" />
        </div>
        <div class="flex flex-row justify-between py-1 px-20 mt-16">
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
