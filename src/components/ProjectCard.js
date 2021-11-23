import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import JoinButton from "./JoinButton";

function ProjectCard(props) {
  const { user } = useAuth0();
  const [projectId, setProjectId] = useState(props.projectId);
  const [ownerUserId, setOwnerId] = useState(props.ownerId);

  return (
    <div className="bg-white rounded-3xl w-96 h-72 shadow-lg px-10 py-6 relative z-0">
      <div className="flex flex-row items-baseline justify-between">
        <div className="font-round not-italic font-bold text-4xl">
          {props.projectTitle}
        </div>
        <div className="flex flex-row justify-between">
          <div className="rounded-full bg-red-500 h-4 w-4 mr-2" />
          {props.projectTagSecond ? (
            <div className="rounded-full bg-indigo-500 h-4 w-4 mr-2" />
          ) : (
            <div />
          )}
          {props.projectTagThird ? (
            <div className="rounded-full bg-yellow-500 h-4 w-4" />
          ) : (
            <div />
          )}
          {props.projectTagFourth ? (
            <div className="rounded-full bg-blue-500 h-4 w-4 ml-2" />
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="border border-solid border-black mt-4" />
      <div className="font-round not-italic font-light text-lg mt-4 text-justify break-all">
        {props.projectDescription}
      </div>
      <div className="absolute top-56 right-10">
        <JoinButton {...props} />
      </div>
    </div>
  );
}

export default ProjectCard;
