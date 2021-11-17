import { useAuth0 } from "@auth0/auth0-react";

function JoinButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  function handleJoin() {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      // go to project page
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
        JOIN
      </button>
    </div>
  );
}

export default JoinButton;
