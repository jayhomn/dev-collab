import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function NewUser() {
  const { user } = useAuth0();
  let history = useHistory();
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const userId = user.sub.split("|")[1];

    axios
      .post(`${process.env.PUBLIC_URL}/api/user`, {
        userId: userId,
        userDisplayName: displayName,
        userEmail: user.email,
        userFirstName: firstName,
        userLastName: lastName,
        userBio: bio,
      })
      .then((res) => {
        console.log(res);
        console.log(history.location);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(event) {
    const target = event.target;
    const name = target.name;

    switch (name) {
      case "displayname":
        setDisplayName(target.value);
        break;
      case "firstname":
        setFirstName(target.value);
        break;
      case "lastname":
        setLastName(target.value);
        break;
      default:
        setBio(target.value);
    }
  }

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <form className="flex flex-col px-96 pb-24" onSubmit={handleSubmit}>
        <div className="text-gray-800 font-roboto font-medium text-5xl mt-10 mb-10">
          New User
        </div>
        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Display Name
        </label>
        <input
          className="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="displayname"
          onChange={handleChange}
        />
        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          First Name
        </label>
        <input
          className="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="firstname"
          onChange={handleChange}
        />
        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Last Name
        </label>
        <input
          className="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="lastname"
          onChange={handleChange}
        />
        <label className="text-gray-800 font-roboto font-medium text-3xl mb-10">
          Bio
        </label>
        <textarea
          className="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 h-60 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="bio"
          onChange={handleChange}
        />
        <input
          className="rounded-3xl py-2 w-28 mt-10 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default NewUser;
