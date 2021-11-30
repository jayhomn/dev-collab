import { AppBar, ProjectGallery } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useReducer } from "react";

function Profile() {
  const { user } = useAuth0();
  const [userProfile, setUserProfile] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { loaded: false, userData: {}, collabs: [] }
  );

  useEffect(() => {
    (async function initialLoad() {
      const userId = user.sub.split("|")[1];
      const userData = await axios.get(
        `${process.env.PUBLIC_URL}/api/user/${userId}`
      );
      const collabs = await axios.get(
        `${process.env.PUBLIC_URL}/api/user/${userId}/collab`
      );
      setUserProfile({
        loaded: true,
        userData: userData.data,
        collabs: collabs.data,
      });
    })();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <AppBar />
      <div className="flex flex-row items-center mt-10 mb-4">
        <div className="h-64 w-64 bg-gray-100 rounded-full ml-10 flex flex-col justify-center">
          <img
            src={`https://avatars.dicebear.com/api/identicon/${user.sub}.svg`}
            className="h-40 w-48 ml-auto mr-auto"
            alt=""
          />
        </div>
        <div className="font-round text-8xl not-italic font-semibold ml-10">
          {userProfile.userData.userDisplayName}
        </div>
        <div className="w-56" />
      </div>
      <div className="mr-10 ml-10 mb-12">
        <div className="grid w-full grid-rows-profile grid-cols-profile">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <div className="not-italic font-medium mt-10 text-5xl">Bio</div>
            <div className="not-italic font-roboto font-extralight text-justify text-4xl mt-10 break-all">
              {userProfile.userData.userBio}
            </div>
          </div>
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex flex-row w-full">
            <div className=" bg-black mt-10 ml-20 h-108 w-1" />
            <div className="ml-8">
              <div className="not-italic font-medium mt-10 text-5xl">
                Collabs.
              </div>
              <div className="overflow-y-scroll mt-9 w-108 h-107">
                {userProfile.collabs.map((collab, i) => {
                  return (
                    <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                      <div>{collab.project.projectTitle}</div>
                      <div className="flex flex-row justify-between">
                        <div className="rounded-full bg-red-500 h-4 w-4 mr-2" />
                        {collab.project.projectTagSecond ? (
                          <div className="rounded-full bg-indigo-500 h-4 w-4 mr-2" />
                        ) : (
                          <div />
                        )}
                        {collab.project.projectTagThird ? (
                          <div className="rounded-full bg-yellow-500 h-4 w-4" />
                        ) : (
                          <div />
                        )}
                        {collab.project.projectTagFourth ? (
                          <div className="rounded-full bg-blue-500 h-4 w-4 ml-2" />
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col">
            <div className="not-italic font-medium mt-10 text-5xl">
              Projects
            </div>
            <div className="mt-20">
              <ProjectGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
