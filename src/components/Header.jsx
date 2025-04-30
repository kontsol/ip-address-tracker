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
    <header className="relative w-full h-40 ">
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
      <div className="absolute w-full px-2 sm:px-4">
        <h1 className="text-white text-center font-semibold text-sm md:text-md mb-1">
          IP Address Tracker
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="pl-2 md:pl-5 bg-white outline-none text-black text-[0.5rem] md:text-xs max-w-[700px] w-full rounded-l-lg"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          />
          <img
            onClick={handleClick}
            src={arrow}
            alt="search-bar-arrow"
            className="bg-gray-800 hover:bg-gray-700 px-3 md:px-5 py-3 md:py-4 rounded-r-lg cursor-pointer transition-colors duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
