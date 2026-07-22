import React, { useState } from "react";
import { X } from "lucide-react";
import Footer from "./Footer";

const Noteform = ({
  isFormOpen,
  onFormClose,
  title,
  detail,
  error,
  onTitleChange,
  onDetailChange,
  handleSubmit,
  errorClose,
}) => {
  return (
    <section
      className={`w-full h-dvh tracking-tight leading-none bg-[#050505]/50 backdrop-blur-xs text-lg z-50 fixed top-0 left-0 justify-center items-center ${isFormOpen ? "flex" : "hidden"} p-5 z-90`}
    >
      <div className="bg-[linear-gradient(30deg,#050505_70%,#151515)] w-full max-w-150 h-[60%] p-2.5 rounded-4xl shadow-2xl relative flex flex-col justify-start items-center">
        <img
          src="/logo.svg"
          alt="notebook+ logo"
          className="w-15 mx-auto my-5"
        />

        <button
          type="button"
          onClick={onFormClose}
          className="absolute top-5 right-5 cursor-pointer z-50"
        >
          <X
            strokeWidth={3}
            className="w-7.5 h-7.5 text-[#2a2a2a] hover:text-[#ffb72d]"
          />
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2.5 w-full flex-1"
        >
          <input
            type="text"
            value={title}
            onChange={onTitleChange}
            placeholder="Enter Title"
            className={`w-full p-2.5 rounded-lg placeholder:text-white/15 bg-[#121212] outline-none ${error ? "border-2 border-red-500" : ""}`}
          />

          {error && (
            <div className="fixed bottom-2.5 right-2.5 bg-red-500 text-white font-semibold p-2.5 rounded-lg z-50 flex justify-center items-center gap-1 text-sm">
              {error}
              <div onClick={errorClose}>
                <X strokeWidth={3} className="w-5 cursor-pointer" />
              </div>
            </div>
          )}

          <textarea
            placeholder="Type your note here..."
            value={detail}
            onChange={onDetailChange}
            className="w-full h-full p-2.5 rounded-lg placeholder:text-white/15 bg-[#121212] resize-none note_scroll outline-none"
          />
          <button
            type="submit"
            className="bg-[#ffb72d] font-bold text-black p-2.5 rounded-lg cursor-pointer my-2.5"
          >
            Add Note
          </button>
        </form>
      </div>

      <div className="absolute bottom-5">
        <Footer />
      </div>
    </section>
  );
};

export default Noteform;
