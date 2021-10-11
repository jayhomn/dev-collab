import { AppBar, ProjectCard } from "../components";
import React, { useState } from "react";

function DashBoard() {
  return (
    <div class="overflow-x-hidden overflow-y-hidden">
      <AppBar />
      <div class="flex flex-col">
        <div class="font-round text-8xl px-20 mt-14 mb-12">My Projects</div>
        <div class="h-1 mx-20 bg-black" />
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
