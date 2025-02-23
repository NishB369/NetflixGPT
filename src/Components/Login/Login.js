import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  const [newUser, setNewUser] = useState(true);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log(newUser);
  }, [newUser]);

  const validateName = () => {
    if (newUser) {
      const nameRegex = /^[a-zA-Z ]+$/;
      const name = nameRef.current.value;

      if (!nameRegex.test(name)) {
        setNameError("Invalid name format");
        return false;
      } else {
        setNameError("");
        return true;
      }
    }
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailRef.current.value;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).{8,}$/;
    const password = passwordRef.current.value;

    if (!passwordRegex.test(password)) {
      setPasswordError("Invalid password format");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const validateForm = () => {
    return validateName() && validateEmail() && validatePassword();
  };

  function toggleNewUser() {
    setNewUser(!newUser);
  }

  if (flag) {
    if (newUser) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("SignUP", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("SignIn", user);
          setSignUpSuccess(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode);
          setSignUpSuccess(false);
        });
    }
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
        <h1 className="text-white text-3xl font-bold mb-6">
          {newUser ? " Sign up" : "Sign in"}
        </h1>
        {newUser && (
          <>
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="border border-white/25 p-4 rounded-md w-full bg-[#111212] mb-4"
              onChange={validateName}
            ></input>
            {nameError && (
              <p className="text-red-600 text-sm -mt-4 mb-2">{nameError}</p>
            )}
          </>
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email or Mobile Number"
          className="border border-white/25 p-4 rounded-md w-full bg-[#111212] mb-4"
          onChange={validateEmail}
        ></input>
        {emailError && (
          <p className="text-red-600 text-sm -mt-4 mb-2">{emailError}</p>
        )}
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="border border-white/25 p-4 rounded-md w-full bg-[#111212]"
          onChange={validatePassword}
        ></input>
        {passwordError && (
          <p className="text-red-600 text-sm">{passwordError}</p>
        )}
        <button
          className="p-2 font-semibold mt-4 w-full bg-[#E50914] rounded-sm cursor-pointer"
          onClick={(e) => (e.preventDefault(), setFlag(validateForm()))}
        >
          {newUser ? " Sign Up" : " Sign In"}
        </button>
        {signUpSuccess !== null && (
          <span
            className={`${
              signUpSuccess ? "text-green-500" : "text-red-500"
            } w-full text-center mt-4 text-sm`}
          >
            {signUpSuccess
              ? "Successfully Signed In"
              : "Incorrect Email or Password"}
          </span>
        )}
        {!newUser && (
          <button className="mt-1 w-full">
            <span className="hover:underline duration-200 ease-in-out cursor-pointer">
              Forgot Password?
            </span>
          </button>
        )}
        {newUser && flag && (
          <span className="text-green-500 mt-4">✅ Added Successfully</span>
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
          {!newUser ? "New to Netflix?" : "Already a User?"}
          <span
            className="font-semibold cursor-pointer"
            onClick={toggleNewUser}
          >
            {!newUser ? " Sign up now." : " Sign in."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
