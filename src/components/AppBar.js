import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function DropdownMenu() {
  const { logout } = useAuth0();
  return (
    <div>
      <FontAwesomeIcon
        class="relative h-14 w-6 left-24 text-gray-800"
        icon={faCaretUp}
      />
      <nav className="flex flex-col float-right justify-center bg-gray-800 text-white font-round font-normal mt-4 mr-5 rounded-lg -mt-6 z-10 relative">
        <a
          className="hover:bg-gray-700 pl-5 pr-14 pb-2 pt-4 rounded-t-lg cursor-pointer transition-colors"
          href="/profile"
        >
          Profile
        </a>
        <a
          className="hover:bg-gray-700 pl-5 pr-14 py-2 cursor-pointer transition-colors"
          href="/myprojects"
        >
          My Projects
        </a>
        <a
          className="hover:bg-gray-700 pl-5 pr-14 py-2 cursor-pointer transition-colors"
          href="/dashboard"
        >
          Dashboard
        </a>
        <a
          className="hover:bg-gray-700 pl-5 pr-14 py-2 cursor-pointer transition-colors"
          href="/settings"
        >
          Settings
        </a>
        <button
          className="hover:bg-gray-700 pr-16 pt-2 pb-4 rounded-b-lg cursor-pointer transition-colors"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </nav>
    </div>
  );
}

function AppBar() {
  const [isDropdownMenuShowing, setIsDropdownMenuShowing] = useState(false);
  const { user } = useAuth0();

  return (
    <div>
      <div className=" flex flex-row items-center justify-between h-24 bg-black">
        <div className="text-white font-roboto not-italic font-normal text-6xl ml-9">
          <a href="/dashboard">collab.</a>
        </div>
        <div className="h-10 w-28 rounded-xl text-center" />
        <button
          className="h-16 w-16 rounded-full mr-9 hover:opacity-90 bg-white transition-opacity"
          onClick={() => {
            setIsDropdownMenuShowing(!isDropdownMenuShowing);
          }}
        >
          <img
            src={`https://avatars.dicebear.com/api/identicon/${user.sub}.svg`}
            className="h-10 w-28"
            alt=""
          />
        </button>
      </div>
      <form>
        <input
          className="w-110 h-10 rounded-full text-center absolute top-5/100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:border-transparent"
          type="text"
          placeholder="Search"
        />
      </form>
      {isDropdownMenuShowing ? (
        <div className="absolute -right-2 top-20">
          <DropdownMenu />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AppBar;
