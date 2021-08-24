import { ReactComponent as FrontPageGraphic } from "../assets/portfolio-update-amico.svg";
import backgroundWave from "../assets/layered-waves-haikei.svg";
import { ProjectCarousel } from "../components";

const BlackGraphic = {
  aspectRatio: "960/540",
  height: "124vh",
  width: "100%",
  backgroundImage: `url(${backgroundWave})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  // background: "#000000",
  // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

const Spacer = {
  color: "#000000",
  height: "14vh",
};

const Title = {
  color: "#FFFFFF",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16vh",
  textAlign: "right",
  marginRight: "5vw",
};

const Slogan = {
  color: "#FFFFFF",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "6vh",
  textAlign: "right",
  marginTop: "2vh",
  marginRight: "5vw",
};

const Buttons = {
  textAlign: "right",
  marginTop: "3vh",
  marginRight: "5vw",
};

const SignInLink = {
  color: "#FFFFFF",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "3vh",
  marginRight: "2vw",
};

const SignUpLink = {
  color: "#000000",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "3vh",
  padding: "0.9vh 1.2vw",
  background: "#78FF86",
  borderRadius: "31px",
};

const FrontPageArt = {
  position: "absolute",
  height: "82vh",
  left: "4%",
  top: "-2%",
};

const Parent = {
  overflowX: "hidden",
};

function FrontPage() {
  return (
    <div style={Parent}>
      <div style={BlackGraphic}>
        <div style={Spacer} />
        <div style={Title}>collab.</div>
        <div style={Slogan}>stop thinking, start collabing</div>
        <div style={Buttons}>
          <a style={SignInLink}>SIGN IN</a>
          <a style={SignUpLink}>JOIN</a>
        </div>
        <ProjectCarousel />
      </div>
      <FrontPageGraphic style={FrontPageArt} />
      <a href="https://storyset.com/work">Work illustrations by Storyset</a>
    </div>
  );
}

export default FrontPage;
