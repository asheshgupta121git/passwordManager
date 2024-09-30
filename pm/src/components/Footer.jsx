import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-500 text-white flex flex-col justify-center items-center w-full">
      <div className="logo font-bold">
        <span className="text-black text-2xl">&lt;</span>
        <span className="text-blue-400 text-2xl">Pass</span>
        <span className="text-black text-2xl">Man...</span>
        <span className="text-blue-400 text-2xl">&gt;</span>
      </div>

      <div className="flex justify-center items-center">
        created by
        <img className="w-7 mx-2" src="/icons/logo.png" alt="img" /> ashesh
        gupta
      </div>
    </div>
  );
};

export default Footer;
