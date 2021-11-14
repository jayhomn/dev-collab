import { AppBar, ProjectGallery } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function Profile() {
  return (
    <div class="overflow-x-hidden">
      <AppBar />
      <div class="flex flex-row items-center mt-10 mb-4">
        <div class="h-64 w-64 bg-blue-300 rounded-full ml-10" />
        <div class="font-round text-8xl not-italic font-semibold ml-10">
          John Doe
        </div>
        <div class="w-56" />
      </div>
      <div class="mr-10 ml-10 mb-12">
        <div class="grid w-full grid-rows-profile grid-cols-profile">
          <div class="col-start-1 col-end-2 row-start-1 row-end-2">
            <div class="not-italic font-medium mt-10 text-5xl">Bio</div>
            <div class="not-italic font-roboto font-extralight text-justify text-4xl mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a orci mattis, fermentum lectus non, laoreet nisi.
              Donec faucibus porttitor magna non commodo. Integer blandit
              sodales ex a ullamcorper. Vivamus eget vestibulum tortor.
              Curabitur eu aliquam ipsum. Duis at dui quis purus scelerisque
              vol. Vivamus eget vestibulum tortor. Curabitur eu aliquam ipsum.
              Duis at dui quis purus scelerisque vol. Vivamus eget vestibulum
              tortor. Curabitur eu aliquam ipsum. Duis at dui quis purus
              scelerisque vol
            </div>
          </div>
          <div class="col-start-2 col-end-3 row-start-1 row-end-2 flex flex-row w-full">
            <div class=" bg-black mt-10 ml-20 h-108 w-1" />
            <div class="ml-8">
              <div class="not-italic font-medium mt-10 text-5xl">Collabs.</div>
              <div class="overflow-y-scroll mt-9 w-108 h-107">
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  <div>Paypal</div>
                  <div class="flex flex-row text-2xl">
                    <div>tech</div>
                    <div>tech</div>
                    <div>tech</div>
                    <div>tech</div>
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  <div>Paypal</div>
                  <div class="flex flex-row text-2xl">
                    <div>tech</div>
                    <div>tech</div>
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-8 mb-4">
                  Paypal
                </div>
              </div>
            </div>
          </div>
          <div class="col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col">
            <div class="not-italic font-medium mt-10 text-5xl">Projects</div>
            <div class="mt-20">
              <ProjectGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
