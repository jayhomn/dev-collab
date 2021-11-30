import React, { useState, useEffect, useContext, createContext } from "react";

const clientId =
  "204104404401-033q73uv164mr17q9vqv9aa7k6sdiojm.apps.googleusercontent.com";

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    setUser(res.profileObj);
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
    setUser(false);
  };

  function signIn() {
    useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: "offline",
      // responseType: 'code',
      // prompt: 'consent',
    });
  }

  // Return the user object and auth methods
  return {
    user,
    signIn,
  };
}
