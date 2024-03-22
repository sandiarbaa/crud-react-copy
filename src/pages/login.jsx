import React from "react";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {/* Mobile & Tablet Breakpoint */}
      <div className="lg:hidden">
        <div className="w-72 h-96 p-4 border shadow rounded-md flex flex-col justify-center items-center md:w-96">
          <h1 className="text-3xl font-bold text-blue-600 mb-5 md:text-4xl">
            Login
          </h1>
          <FormLogin prefix={"mobile-tablet"} />
        </div>
      </div>
      {/* End of Mobile & Tablet Breakpoint */}

      {/* Desktop Breakpoint */}
      <div className="w-[900px] h-96 border shadow hidden lg:flex rounded-md overflow-hidden">
        <div className="w-4/12 h-full p-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-5 text-blue-600">Login</h1>
          <FormLogin prefix={"desktop"} />
        </div>
        <div className="w-8/12 h-full bg-[url('../public/img/mountain.jpg')] bg-cover"></div>
      </div>
      {/* End of Desktop Breakpoint */}
    </div>
  );
};

export default LoginPage;
