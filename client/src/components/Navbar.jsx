import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[calc(100%-40px)] md:w-2/3 xl:w-1/2 p-2.5 shadow-2xs absolute top-5 rounded-xl left-1/2 -translate-x-1/2 flex justify-center items-center">
      <a href="#">
        <img src="/logo.svg" alt="" className="w-25 aspect-square" />
      </a>
    </nav>
  );
};

export default Navbar;
