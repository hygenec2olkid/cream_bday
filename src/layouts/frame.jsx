import React from "react";

function Frame({ children, className }) {
  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-center bg-[#F5EFFF] px-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Frame;
