import { AppBar } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CreateProject() {
  const { user } = useAuth0();
  let history = useHistory();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [tagNumber, setTagNumber] = useState(0);
  const [isPrivate, setIsPrivate] = useState(false);
  const [links, setLinks] = useState([]);
  const [linkInputName, setLinkInputName] = useState("");
  const [linkInput, setLinkInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const userId = user.sub.split("|")[1];

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/project`, {
        userId: userId,
        projectTitle: projectTitle,
        projectDescription: projectDescription,
        projectTagOne: tags[0],
        projectTagSecond: tags[1],
        projectTagThird: tags[2],
        projectTagFourth: tags[3],
        isPrivate: isPrivate,
        projectLinks: links,
      })
      .then(() => {
        history.push("/myprojects");
      });
  }

  function handleChange(event) {
    const target = event.target;
    const name = target.name;

    switch (name) {
      case "projecttitle":
        setProjectTitle(target.value);
        break;
      case "projectdescription":
        setProjectDescription(target.value);
        break;
      case "private":
        setIsPrivate(target.checked);
        break;
      case "projecttags":
        setTagInput(target.value);
        break;
      case "linkname":
        setLinkInputName(target.value);
        break;
      case "link":
        setLinkInput(target.value);
        break;
      default:
        break;
    }
  }

  function handleNewTag(event) {
    const { keyCode } = event;
    const trimmedInput = tagInput.trim();

    if (
      keyCode === 188 &&
      trimmedInput.length &&
      !tags.includes(trimmedInput) &&
      tagNumber < 4
    ) {
      event.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setTagInput("");
      setTagNumber(tagNumber + 1);
    }

    if (keyCode === 8 && !tagInput.length && tags.length) {
      event.preventDefault();
      const tagsCopy = [...tags];
      tagsCopy.pop();

      setTags(tagsCopy);
      setTagInput("");
      setTagNumber(tagNumber - 1);
    }
  }

  function handleLink(event) {
    event.preventDefault();
    console.log(event);

    setLinks((prevState) => [
      ...prevState,
      { linkName: linkInputName, link: linkInput },
    ]);
    setLinkInputName("");
    setLinkInput("");
  }

  function handleDeleteLink(event) {
    event.preventDefault();

    setLinks(
      links.filter((item, index) => {
        return index != event.currentTarget.id;
      })
    );
  }

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <AppBar />
      <form className="flex flex-col px-96 pb-24" onSubmit={handleSubmit}>
        <div className="text-gray-800 font-roboto font-medium text-5xl mt-10 mb-10">
          Create New Project
        </div>
        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Project Title
        </label>
        <input
          className="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="projecttitle"
          onChange={handleChange}
        />
        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Project Description
        </label>
        <textarea
          className="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 h-60 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="projectdescription"
          onChange={handleChange}
        />
        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Additional Links
        </label>
        <div className="flex flex-col items-start mb-6">
          {links.map((link, index) => {
            return (
              <div className="flex flex-row w-full mb-4" key={index}>
                <div className="rounded-l-xl  py-2 px-4 focus:outline-none bg-red-400 focus:shadow w-full">
                  {link.linkName}
                </div>
                <div className="rounded-r-xl py-2 px-4 focus:outline-none bg-red-200 focus:shadow w-full">
                  {link.link}
                </div>
                <button
                  id={index}
                  className="ml-4"
                  onClick={handleDeleteLink}
                  type="button"
                >
                  <FontAwesomeIcon id={index} icon={faTimes} />
                </button>
              </div>
            );
          })}
          <div className="flex flex-row w-full mb-4">
            <input
              className="border-l-2 border-b-2 border-t-2 border-r-2 border-light-blue-500 border-opacity-100 rounded-l-xl  py-2 px-4 focus:outline-none focus:bg-white focus:shadow w-full"
              type="text"
              value={linkInputName}
              name="linkname"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              className="border-r-2 border-b-2 border-t-2 border-l-2 border-light-blue-500 border-opacity-100 rounded-r-xl py-2 px-4 focus:outline-none focus:bg-white focus:shadow w-full"
              type="text"
              value={linkInput}
              name="link"
              placeholder="Link"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row">
            <button className="mr-2" onClick={handleLink} type="button">
              Add Link
            </button>
          </div>
        </div>

        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Project Tags
        </label>
        <div className="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-3 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow flex flex-row">
          {tags.map((tag) => (
            <div className="bg-red-200 rounded-3xl px-4 mr-2 py-1">{tag}</div>
          ))}
          <input
            className="bg-gray-100 rounded-lg px-4 py-1 focus:outline-none"
            value={tagInput}
            type="text"
            name="projecttags"
            placeholder="Enter a Tag"
            onChange={handleChange}
            onKeyDown={handleNewTag}
          />
        </div>

        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Mark as Private:
          <input
            className="form-checkbox ml-3 h-5 w-5 rounded-md"
            type="checkbox"
            name="private"
            onChange={handleChange}
          />
        </label>
        <input
          className="rounded-3xl py-2 w-28 mt-10 hover:bg-gray-100 cursor-pointer transition-colors"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default CreateProject;
