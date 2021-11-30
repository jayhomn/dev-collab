import React from "react";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      class="bg-white  rounded-xl px-5 py-2 shadow-lg text-grey-800 font-roboto text-2xl font-normal text-center"
    >
      <GoogleIcon class=" inline-block h-10 w-10 mr-16" />
      Sign in with Google
    </button>
  );
}

export default Login;
