import React from "react";
import bgDesktop from "../assets/pattern-bg-desktop.png";
import bgMobile from "../assets/pattern-bg-mobile.png";

const Header = () => {
  return (
    <header className="bg-red-500 relative w-full h-96">
      {/* <img
        src={bgDesktop}
        alt="Desktop Background"
        className="absolute top-0 hidden md:block w-full h-full object-cover border-2 border-amber-300"
      />
      <img
        src={bgMobile}
        alt="Desktop Background"
        className="block md:hidden"
      /> */}
    </header>
  );
};

export default Header;
