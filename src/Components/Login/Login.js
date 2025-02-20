import React, { useState } from "react";
import Header from "../Header/Header";

// use fromik

const Login = () => {
  const [newUser, setNewUser] = useState(true);
  function toggleNewUser(e) {
    setNewUser(!newUser);
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg)`,
        backgroundSize: "cover",
        height: "auto",
      }}
      className="relative px-40 pb-12"
    >
      <Header />
      <form className="text-white w-5/12 mx-auto py-10 h-[450px] flex flex-col bg-black/50 rounded-xl items-start px-10 ">
        <h1 className="text-white text-3xl font-bold mb-6">Sign in</h1>
        {newUser && (
          <input
            type="text"
            placeholder="Full Name"
            className="border border-white/25 p-4 rounded-md w-full bg-[#111212] mb-4"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email or Mobile Number"
          className="border border-white/25 p-4 rounded-md w-full bg-[#111212] mb-4"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="border border-white/25 p-4 rounded-md w-full bg-[#111212]"
        ></input>
        <button className="p-2 font-semibold mt-4 w-full bg-[#E50914] rounded-sm cursor-pointer">
          {newUser ? " Sign Up" : " Sign In"}
        </button>
        {!newUser && (
          <button className="mt-4 w-full">
            <span className="hover:underline duration-200 ease-in-out cursor-pointer">
              Forgot Password?
            </span>
          </button>
        )}
        {!newUser && (
          <div className="w-full flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              className="scale-[1.1]"
              defaultChecked="true"
            ></input>
            <p>Remember me</p>
          </div>
        )}
        <p className="mt-4">
          New to Netflix?
          <span
            className="font-semibold cursor-pointer"
            onClick={toggleNewUser}
          >
            {newUser ? " Sign up now." : " Already a User, Sign in."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
