import React from "react";

const Container = ({ children }) => {
  // max-w-6xl px-4
  return (
    <div className="w-full px-2 sm:px-4">
      <div className="relative">{children}</div>
    </div>
  );
};

export default Container;
