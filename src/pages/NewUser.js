import { ReactComponent as FrontPageGraphic } from "../assets/portfolio-update-amico.svg";
import { ProjectCarousel } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

function NewUser() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <form class="flex flex-col px-96 pb-24">
        <div class="text-gray-800 font-roboto font-medium text-5xl mt-10 mb-10">
          New User
        </div>
        <label class="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Display Name
        </label>
        <input
          class="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="username"
        />
        <label class="text-gray-800 font-roboto font-medium text-3xl mb-10">
          First Name
        </label>
        <input
          class="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="firstname"
        />
        <label class="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Last Name
        </label>
        <input
          class="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="lastname"
        />
        <label class="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Bio
        </label>
        <textarea
          class="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 h-60 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="bio"
        />
        <input
          class="rounded-3xl py-2 w-28 mt-10"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default NewUser;
