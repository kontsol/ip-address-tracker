import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-6xl px-4 relative flex justify-center ">
      {children}
    </div>
  );
};

export default Container;
