import { AppBar, ProjectGallery } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const { user } = useAuth0();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const userId = user.sub.split("|")[1];
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/${userId}`)
      .then((res) => {
        setUserProfile(res.data);
      });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <AppBar />
      <div className="flex flex-row items-center mt-10 mb-4">
        <div className="h-64 w-64 bg-blue-300 rounded-full ml-10" />
        <div className="font-round text-8xl not-italic font-semibold ml-10">
          {userProfile.userDisplayName}
        </div>
        <div className="w-56" />
      </div>
      <div className="mr-10 ml-10 mb-12">
        <div className="grid w-full grid-rows-profile grid-cols-profile">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <div className="not-italic font-medium mt-10 text-5xl">Bio</div>
            <div className="not-italic font-roboto font-extralight text-justify text-4xl mt-10 break-all">
              {userProfile.userBio}
            </div>
          </div>
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex flex-row w-full">
            <div className=" bg-black mt-10 ml-20 h-108 w-1" />
            <div className="ml-8">
              <div className="not-italic font-medium mt-10 text-5xl">
                Collabs.
              </div>
              <div className="overflow-y-scroll mt-9 w-108 h-107">
                <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  <div>Paypal</div>
                  <div className="flex flex-row text-2xl">
                    <div>tech</div>
                    <div>tech</div>
                    <div>tech</div>
                    <div>tech</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  <div>Paypal</div>
                  <div className="flex flex-row text-2xl">
                    <div>tech</div>
                    <div>tech</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div className="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
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
