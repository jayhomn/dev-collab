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
      <nav class="flex flex-col float-right justify-center bg-gray-800 text-white font-round font-normal mt-4 mr-5 rounded-lg -mt-6">
        <a
          class="hover:bg-gray-700 pl-4 pr-14 pb-2 pt-4 rounded-t-lg cursor-pointer"
          href="/profile"
        >
          Profile
        </a>
        <a
          class="hover:bg-gray-700 pl-4 pr-14 py-2 cursor-pointer"
          href="/myprojects"
        >
          My Projects
        </a>
        <a
          class="hover:bg-gray-700 pl-4 pr-14 py-2 cursor-pointer"
          href="/dashboard"
        >
          Dashboard
        </a>
        <a
          class="hover:bg-gray-700 pl-4 pr-14 py-2  cursor-pointer"
          href="/settings"
        >
          Settings
        </a>
        <a
          class="hover:bg-gray-700 pl-4 pr-14 pt-2 pb-4 rounded-b-lg cursor-pointer"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </a>
      </nav>
    </div>
  );
}

function AppBar() {
  const [isDropdownMenuShowing, setIsDropdownMenuShowing] = useState(false);

  return (
    <div>
      <div class=" flex flex-row items-center justify-between h-24 bg-black">
        <div class="text-white font-roboto not-italic font-normal text-6xl ml-10">
          <a href="/dashboard">collab.</a>
        </div>
        <div class="h-10 w-28 rounded-xl text-center" />
        <button
          class="h-16 w-16 bg-gray-600 rounded-full mr-8 hover:opacity-80"
          onClick={() => {
            setIsDropdownMenuShowing(!isDropdownMenuShowing);
          }}
        />
      </div>
      <form>
        <input
          class="w-110 h-10 rounded-full text-center absolute top-5/100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:border-transparent"
          type="text"
          placeholder="Search"
        />
      </form>
      {isDropdownMenuShowing ? (
        <div class="absolute -right-2 top-20">
          <DropdownMenu />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AppBar;
