import JoinButton from "./JoinButton";

function ProjectCard(props) {
  return (
    <div className="bg-white rounded-3xl w-96 h-72 shadow-lg px-10 py-6">
      <div className="flex flex-row">
        <div className="font-round not-italic font-bold text-4xl">
          {props.name}
        </div>
        <div></div>
      </div>
      <div className="border border-solid border-black mt-4" />
      <div className="font-round not-italic font-light text-lg mt-4 text-justify">
        dsadsdadsadSdsa sd sa dsa das d sad sa dsas ds da ads das ads das das
        dasa ddas ad sdasad ad dsaad sads ad ad sd aad sd
      </div>
      <div className="mt-5">
        <JoinButton />
      </div>
    </div>
  );
}

export default ProjectCard;
