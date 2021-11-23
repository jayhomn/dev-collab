import { ReactComponent as FrontPageGraphic } from "../assets/portfolio-update-amico.svg";
import { ProjectCarousel } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

function FrontPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="overflow-x-hidden overflow-y-hidden pb-10">
      <div className="h-110 w-full bg-cover bg-no-repeat bg-center bg-layerd-waves">
        <div className="h-20" />
        <div className="text-white text-roboto not-italic font-normal text-title text-right mr-24">
          collab.
        </div>
        <div className="text-white text-roboto not-italic font-normal text-right mr-24 mt-5 text-6xl">
          stop thinking, start collabing
        </div>
        <div className="text-right mt-12 mr-24">
          <button
            className="text-black text-roboto not-italic font-normal text-3xl bg-green rounded-3xl py-2 px-8 cursor-pointer"
            onClick={() => loginWithRedirect()}
          >
            SIGN IN
          </button>
        </div>
        <div className="mt-72">
          <ProjectCarousel />
        </div>
      </div>
      <FrontPageGraphic className="absolute h-109 left-10 -top-5" />
      <div className="mx-auto text-center">
        <a href="https://storyset.com/work">Work illustrations by Storyset</a>
      </div>
    </div>
  );
}

export default FrontPage;
