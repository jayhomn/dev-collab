import { AppBar, JoinButton } from "../components";

function Project() {
  return (
    <div class="overflow-x-hidden">
      <AppBar />
      <div class="flex flex-row items-baseline mt-12 mb-6">
        <div class="rounded-full ml-8 bg-black h-20 w-20" />
        <div class="font-round not-italic font-semibold ml-4 text-8xl">
          Paypal
        </div>
        <div class="ml-4">
          <JoinButton />
        </div>
      </div>
      <div class="ml-8 mr-8">
        <div class="bg-black h-1 w-full" />
        <div class="grid w-full grid-cols-project grid-rows-profile">
          <div class="col-start-1 col-end-1 row-start-1 row-end-2">
            <div class="font-roboto not-italic font-medium mt-10 text-5xl">
              Description
            </div>
            <div class="font-roboto not-italic font-extralight text-justify mt-10 text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a orci mattis, fermentum lectus non, laoreet nisi.
              Donec faucibus porttitor magna non commodo. Integer blandit
              sodales ex a ullamcorper. Vivamus eget vestibulum tortor.
              Curabitur eu aliquam ipsum. Duis at dui quis purus scelerisque
              volutpat. Aliquam orci erat, ultrices sed egestas sed, consequat
              ac orci. Vestibulum venenatis quis risus eu cursus. Curabitur
              sagittis risus et arcu elementum, nec congue turpis scelerisque.
              Phasellus egestas tincidunt massa, in feugiat erat mattis nec.
              Quisque accumsan in quam auctor aliquam. Sed feugiat leo erat,
              eget aliquam sem iaculis nec. Quisque aliquet ante sed vehicula
              dictum. Quisque dapibus pretium diam ut finibus.
            </div>
            <div class="flex flex-row items-center mt-40 text-3xl">
              <div class="font-roboto not-italic font-medium">
                Additional Links:{" "}
                <span class="font-roboto not-italic font-light">
                  dadsasddsasadasdasads
                </span>
              </div>
            </div>
          </div>
          <div class="col-start-2 col-end-3 row-start-1 row-end-2 flex flex-row w-full">
            <div class="bg-black w-1 h-111 mt-10 ml-8" />
            <div class="ml-16">
              <div class="font-roboto not-italic font font-medium mt-10 text-5xl">
                Collaborators
              </div>
              <div class="h-112 w-109 overflow-y-scroll mt-10">
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-4 mb-4">
                  <div class="rounded-full  bg-black h-20 w-20" />
                  <div class="font-roboto text-4xl not-italic font-light">
                    John Doe
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-4 mb-4">
                  <div class="rounded-full  bg-black h-20 w-20" />
                  <div class="font-roboto text-4xl not-italic font-light">
                    John Doe
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-4 mb-4">
                  <div class="rounded-full  bg-black h-20 w-20" />
                  <div class="font-roboto text-4xl not-italic font-light">
                    John Doe
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-4 mb-4">
                  <div class="rounded-full  bg-black h-20 w-20" />
                  <div class="font-roboto text-4xl not-italic font-light">
                    John Doe
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-4 mb-4">
                  <div class="rounded-full  bg-black h-20 w-20" />
                  <div class="font-roboto text-4xl not-italic font-light">
                    John Doe
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center bg-white w-9/10 rounded-3xl text-3xl font-medium shadow-lg px-5 py-4 mb-4">
                  <div class="rounded-full  bg-black h-20 w-20" />
                  <div class="font-roboto text-4xl not-italic font-light">
                    John Doe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
