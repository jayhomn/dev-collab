import { AppBar, JoinButton } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";

function Project() {
  const { projectId } = useParams();
  const [dataState, setDataState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { loaded: false, project: [], links: [], collaborators: [] }
  );

  useEffect(() => {
    (async function initialLoad() {
      const project = await axios.get(
        `${process.env.PUBLIC_URL}/api/project/${projectId}`
      );
      const collaborators = await axios.get(
        `${process.env.PUBLIC_URL}/api/project/${projectId}/collab`
      );
      const links = await axios.get(
        `${process.env.PUBLIC_URL}/api/project/${projectId}/links`
      );

      setDataState({
        loaded: true,
        project: project.data,
        links: links.data,
        collaborators: collaborators.data,
      });
    })();
  }, []);

  return (
    <div class="overflow-hidden">
      <AppBar />
      {dataState.loaded && (
        <div>
          <div class="flex flex-row items-baseline mt-12 mb-6 mx-10">
            <div class="rounded-full bg-black h-20 w-20" />
            <div class="font-round not-italic font-semibold ml-4 text-8xl">
              {dataState.project.projectTitle}
            </div>
            <div class="ml-4">
              <JoinButton />
            </div>
          </div>
          <div class="mx-10">
            <div class="bg-black h-1 w-full" />
            <div class="grid w-full grid-cols-project grid-rows-profile">
              <div class="col-start-1 col-end-1 row-start-1 row-end-2">
                <div class="font-roboto not-italic font-medium mt-10 text-5xl">
                  Description
                </div>
                <div class="font-roboto not-italic font-extralight text-justify mt-10 text-2xl break-all">
                  {dataState.project.projectDescription}
                </div>
                <div class="flex flex-row items-center mt-40 text-3xl">
                  <div class="font-roboto not-italic font-medium mr-6">
                    Additional Links:
                  </div>
                  {dataState.links.map((link, i) => {
                    return (
                      <a
                        key={i}
                        class="font-rounded not-italic font-normal bg-purple-400 rounded-3xl px-6 py-1 uppercase mr-4"
                        href={link.link}
                      >
                        {link.linkName}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div class="col-start-2 col-end-3 row-start-1 row-end-2 flex flex-row w-full">
                <div class="bg-black w-1 h-111 mt-10 ml-8" />
                <div class="ml-16">
                  <div class="font-roboto not-italic font font-medium mt-10 text-5xl">
                    Collaborators
                  </div>
                  <div class="h-112 w-109 overflow-y-scroll mt-10">
                    {dataState.collaborators.map((collaborator, i) => {
                      return (
                        <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-4 mb-4">
                          <div class="rounded-full bg-gray-100 h-20 w-20 flex flex-col justify-center">
                            <img
                              src={`https://avatars.dicebear.com/api/identicon/${collaborator.user.id}.svg`}
                              className="h-8 w-10 ml-auto mr-auto"
                              alt=""
                            />
                          </div>
                          <div class="font-roboto text-4xl not-italic font-light">
                            {collaborator.user.userDisplayName}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
