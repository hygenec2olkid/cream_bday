import React from "react";

function Frame({ children }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#F5EFFF] px-5">
      {children}
    </div>
  );
}

export default Frame;
