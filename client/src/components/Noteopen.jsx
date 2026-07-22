import React from "react";
import Footer from "./Footer";
import { X } from "lucide-react";

const Noteopen = ({ isNoteOpen, onNoteClose }) => {
  return (
    <section
      className={`w-full h-dvh tracking-tight leading-none bg-[#050505]/50 backdrop-blur-xs text-lg z-50 fixed top-0 left-0 justify-center items-center ${isNoteOpen ? "flex" : "hidden"} p-5 z-90`}
    >
      <div className="w-full max-w-5xl h-4/5 bg-[linear-gradient(30deg,#050505_70%,#151515)] p-2.5 rounded-4xl shadow-2xl relative">
        <img
          src="/logo.svg"
          alt="notebook+ logo"
          className="w-15 mx-auto my-5"
        />

        <button
          type="button"
          onClick={onNoteClose}
          className="absolute top-5 right-5 cursor-pointer z-50"
        >
          <X
            strokeWidth={3}
            className="w-7.5 h-7.5 text-[#2a2a2a] hover:text-[#ffb72d]"
          />
        </button>

        <p className="text-white">I am note</p>
      </div>
      <div className="absolute bottom-5">
        <Footer />
      </div>
    </section>
  );
};

export default Noteopen;
