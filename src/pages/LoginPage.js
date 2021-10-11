import { AppBar, Login } from "../components";

function LoginPage() {
  return (
    <div class="overflow-x-hidden overflow-y-hidden bg-cover bg-no-repeat bg-center bg-layerd-waves h-screen">
      <AppBar />
      <div class="bg-white h-96 w-110 rounded-xl flex flex-col px-10 py-6 absolute left-1/2 top-1/2 shadow-lg transform -translate-x-1/2 -translate-y-1/2">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
