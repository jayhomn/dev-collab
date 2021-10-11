const Profile = {
  height: "6.5vh",
  width: "6.5vh",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  marginRight: "2vw",
};

const Search = {
  width: "18vw",
  height: "4vh",
  borderRadius: "19px",
  textAlign: "center",
  position: "absolute",
  top: "5%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AppBar() {
  return (
    <div>
      <div class=" flex flex-row items-center justify-between h-24 bg-black">
        <div class="text-white font-roboto not-italic font-normal text-6xl ml-10">
          <a href="/">collab.</a>
        </div>
        <div class="h-10 w-28 rounded-xl text-center" />
        <div class="h-16 w-16 bg-gray-600 rounded-full mr-8" />
      </div>
      <form>
        <input style={Search} type="text" placeholder="Search" />
      </form>
    </div>
  );
}

export default AppBar;
