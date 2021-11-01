import { ReactComponent as FrontPageGraphic } from "../assets/portfolio-update-amico.svg";
import { ProjectCarousel } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

function FrontPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div class="overflow-x-hidden overflow-y-hidden">
      <div class="h-110 w-full bg-cover bg-no-repeat bg-center bg-layerd-waves">
        <div class="h-20" />
        <div class="text-white text-roboto not-italic font-normal text-title text-right mr-24">
          collab.
        </div>
        <div class="text-white text-roboto not-italic font-normal text-right mr-24 mt-5 text-6xl">
          stop thinking, start collabing
        </div>
        <div class="text-right mt-12 mr-24">
          <a
            class="text-black text-roboto not-italic font-normal text-3xl bg-green rounded-3xl py-1 px-8 cursor-pointer"
            onClick={() => loginWithRedirect()}
          >
            SIGN IN
          </a>
        </div>
        <div class="mt-72">
          <ProjectCarousel />
        </div>
      </div>
      <FrontPageGraphic class="absolute h-109 left-10 -top-5" />
      <a href="https://storyset.com/work">Work illustrations by Storyset</a>
    </div>
  );
}

export default FrontPage;
