import JoinButton from "./JoinButton";

function ProjectCard(props) {
  return (
    <div class="bg-white rounded-3xl w-96 h-72 shadow-lg px-10 py-6">
      <div class="flex flex-row">
        <div class="font-round not-italic font-bold text-4xl">{props.name}</div>
        <div></div>
      </div>
      <div class="border border-solid border-black mt-4" />
      <div class="font-round not-italic font-light text-lg mt-4 text-justify">
        dsadsdadsadSdsa sd sa dsa das d sad sa dsas ds da ads das ads das das
        dasa ddas ad sdasad ad dsaad sads ad ad sd aad sd
      </div>
      <div class="mt-6">
        <JoinButton />
      </div>
    </div>
  );
}

export default ProjectCard;
