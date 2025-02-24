import React from "react";
import Logo from "./Logo";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex items-center justify-between py-10">
      <div>
        <Logo />
      </div>

      {user && (
        <div
          className="bg-[#E50914] text-white rounded-md font-semibold text-sm px-4 py-2 cursor-pointer"
          onClick={handleSignOut}
        >
          😖 Sign Out
        </div>
      )}
    </div>
  );
};

export default Header;
