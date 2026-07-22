import React, { useState } from "react";
import { X } from "lucide-react";

const Noteform = ({
  isFormOpen,
  onFormClose,
  title,
  detail,
  error,
  onTitleChange,
  onDetailChange,
  handleSubmit,
  errorClose
}) => {
  return (
    <section
      className={`w-full h-dvh tracking-tight leading-none bg-black/50 backdrop-blur-xs text-lg z-50 fixed top-0 left-0 justify-center items-center ${isFormOpen ? "flex" : "hidden"} p-5`}
    >
      <div className="bg-[#050505] w-full max-w-125 p-2.5 rounded-2xl shadow-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2.5"
        >
          <div className="w-full flex justify-between items-center relative">
            <img
              src="/logo.svg"
              alt="notebook+ logo"
              className="w-12.5 mx-auto"
            />
            <button
              type="button"
              onClick={onFormClose}
              className="absolute h-full top-0 right-0 cursor-pointer"
            >
              <X strokeWidth={3} className="w-7.5 h-7.5 hover:text-[#ffb72d]" />
            </button>
          </div>
          <input
            type="text"
            value={title}
            onChange={onTitleChange}
            placeholder="Enter Title"
            className={`w-full p-2.5 rounded-lg placeholder:text-white/15 bg-[#121212] outline-none ${error ? "border-2 border-red-500" : ""}`}
          />
          
          {error && <div className="fixed bottom-2.5 right-2.5 bg-red-500 text-white font-semibold p-2.5 rounded-lg z-50 flex justify-center items-center gap-1 text-sm">{error}
          <div onClick={errorClose}><X strokeWidth={3} className="w-5 cursor-pointer"/></div>
          </div>}
          
          <textarea
            placeholder="Type your note here..."
            value={detail}
            onChange={onDetailChange}
            className="w-full h-40 p-2.5 rounded-lg placeholder:text-white/15 bg-[#121212] resize-none note_scroll outline-none"
          />
          <button
            type="submit"
            className="bg-[#ffb72d] font-bold text-black p-2.5 rounded-lg cursor-pointer"
          >
            Add Note
          </button>
        </form>
      </div>
    </section>
  );
};

export default Noteform;
