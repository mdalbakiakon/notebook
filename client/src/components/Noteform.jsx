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
      className={`w-full h-dvh tracking-tight leading-none backdrop-blur-xs text-lg z-50 fixed top-0 left-0 justify-center items-center ${isFormOpen ? "flex" : "hidden"} p-5 z-90`}
    >
      <div className="bg-[linear-gradient(-30deg,var(--bg-main-col)_70%,var(--bg-ter-col))] w-full max-w-150 h-[60%] p-2.5 rounded-4xl shadow-2xl relative flex flex-col justify-start items-center">
        <img
          src="/logo.svg"
          alt="notebook+ logo"
          className="w-15 mx-auto my-5 select-none"
        />

        <button
          type="button"
          onClick={onFormClose}
          className="absolute top-5 right-5 cursor-pointer z-50"
        >
          <X
            strokeWidth={3}
            className="w-7.5 h-7.5 text-(--txt-sec-col) hover:text-(--accent-col)"
          />
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2.5 w-full flex-1 text-white"
        >
          <input
            type="text"
            value={title}
            onChange={onTitleChange}
            placeholder="Enter Title"
            className={`w-full p-3.5 rounded-xl placeholder:text-white/25 bg-(--bg-cont-col) outline-none ${error ? "border-2 border-red-500" : ""}`}
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
            className="w-full h-full p-2.5 rounded-4xl placeholder:text-white/25 bg-(--bg-cont-col) resize-none note_scroll outline-none"
          />
          <button
            type="submit"
            className="bg-(--accent-col) font-bold text-(--txt-headline-col) p-2.5 rounded-lg cursor-pointer my-2.5"
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
