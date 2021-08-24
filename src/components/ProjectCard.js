const SignUpLink = {
  color: "#000000",
  fontFamily: "M PLUS Rounded 1c",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "2vh",
  padding: "0.9vh 1.2vw",
  background: "#78FF86",
  borderRadius: "31px",
};

const Card = {
  background: "#FFFFFF",
  borderRadius: "31px",
  width: "16vw",
  height: "28vh",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  padding: "1.5vh 2vw",
};

const CardHeader = {
  display: "flex",
  flexDirection: "row",
};

const ProjectTitle = {
  fontFamily: "M PLUS Rounded 1c",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "4vh",
};

const Line = {
  marginTop: "1vh",
  border: "1px solid #000000",
};

const Description = {
  marginTop: "1.5vh",
  fontFamily: "M PLUS Rounded 1c",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "2vh",
};

const ButtonContainer = {
  marginTop: "2.6vh",
  textAlign: "right",
};

function ProjectCard(props) {
  return (
    <div style={Card}>
      <div style={CardHeader}>
        <div style={ProjectTitle}>{props.name}</div>
        <div></div>
      </div>
      <div style={Line} />
      <div style={Description}>
        dsadsdadsadSdsa sd sa dsa das d sad sa dsas ds da ads das ads das das
        dasa ddas ad sdasad ad dsaad sads ad ad sd aad sd
      </div>
      <div style={ButtonContainer}>
        <a style={SignUpLink}>JOIN</a>
      </div>
    </div>
  );
}

export default ProjectCard;
