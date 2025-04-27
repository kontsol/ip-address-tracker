import React, { useState } from "react";
import bgDesktop from "../assets/pattern-bg-desktop.png";
import bgMobile from "../assets/pattern-bg-mobile.png";
import arrow from "../assets/icon-arrow.svg";

const Header = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
      setInputValue("");
    }
  };

  return (
    <header className="relative w-full h-80">
      HEADER
      <img
        src={bgDesktop}
        alt="Desktop Background"
        className="absolute top-0 hidden md:block w-full h-full object-cover "
      />
      <img
        src={bgMobile}
        alt="Desktop Background"
        className="block md:hidden absolute top-0 w-full h-full object-cover"
      />
      <div className="flex flex-col gap-2 justify-center items-center mt-10 absolute w-full">
        <h1 className="text-white font-semibold text-3xl">
          IP Address Tracker
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="192.212.212.212"
            className="pl-5 bg-white outline-none text-black text-xl rounded-l-lg w-120"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <img
            onClick={handleClick}
            src={arrow}
            alt="search-bar-arrow"
            className="bg-gray-800 hover:bg-gray-700 px-5 py-5 rounded-r-lg cursor-pointer transition-colors duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
