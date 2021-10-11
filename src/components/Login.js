import React from "react";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";
import { useGoogleLogin } from "react-google-login";

const clientId =
  "204104404401-033q73uv164mr17q9vqv9aa7k6sdiojm.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button
      onClick={signIn}
      class="bg-white  rounded-xl px-5 py-2 shadow-lg text-grey-800 font-roboto text-2xl font-normal text-center"
    >
      <GoogleIcon class=" inline-block h-10 w-10 mr-16" />
      Sign in with Google
    </button>
  );
}

export default Login;
