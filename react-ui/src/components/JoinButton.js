import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function JoinButton(props) {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [isOwner, setIsOwner] = useState(
    isAuthenticated ? user.sub.split("|")[1] === props.projectOwner : false
  );
  let history = useHistory();

  async function handleJoin() {
    const userId = user.sub.split("|")[1];
    if (isAuthenticated) {
      if (!isOwner) {
        await axios.post(
          `${process.env.PUBLIC_URL}/api/project/${props.projectId}/collab`,
          { userId: userId }
        );
      }
      history.push(`/project/${props.projectId}`);
    } else {
      loginWithRedirect();
    }
  }

  return (
    <div className="text-right">
      <button
        className="text-black font-round not-italic font-medium text-lg rounded-3xl bg-green px-6 py-2 cursor-pointer"
        onClick={handleJoin}
      >
        {isAuthenticated ? (isOwner ? "VIEW" : "JOIN") : "JOIN"}
        {props.isPrivate ? (
          <FontAwesomeIcon className="ml-2" size="sm" icon={faLock} />
        ) : (
          <div />
        )}
      </button>
    </div>
  );
}

export default JoinButton;
