import React from "react";
import Header from "../Header/Header";

const Browse = () => {
  return (
    <div 
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="relative px-40 pb-12"
    >
      <Header />
    </div>
  );
};

export default Browse;
