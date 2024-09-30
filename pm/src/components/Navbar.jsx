import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-500 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold">
          <span className="text-black text-2xl">&lt;</span>
          <span className="text-blue-400 text-2xl">Pass</span>
          <span className="text-black text-2xl">Man...</span>
          <span className="text-blue-400 text-2xl">&gt;</span>
        </div>
        {/* <ul>
            <li className='flex
             gap-3'>
                <a href="/" className='hover:font-bold hover:text-black'>Home</a>
                <a href="#" className='hover:font-bold hover:text-black'>About</a>
                <a href="#" className='hover:font-bold hover:text-black'>Contact</a>
            </li>
        </ul> */}
        <button className="text-white my-5 rounded-full flex justify-between items-center hover:text-black ring-black ring-1">
          <img className="invert w-10 p-1" src="/icons/git.svg" alt="git" />
          <span className="font-bold px-2">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
