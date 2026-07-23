import React from "react";
import Footer from "./Footer";
import { X, Trash, Save } from "lucide-react";

const Noteopen = ({
  isNoteOpen,
  onNoteClose,
  title,
  detail,
  created_at,
  onTitleChange,
  onDetailChange,
  onSave,
  onDelete,
  error,
  errorClose,
  isDirty,
  success,
  successClose,
}) => {
  return (
    <section
      className={`w-full h-dvh tracking-tight leading-none bg-[#050505]/50 backdrop-blur-xs text-lg z-50 fixed top-0 left-0 justify-center items-center ${isNoteOpen ? "flex" : "hidden"} p-5 z-90`}
    >
      <div className="w-full max-w-5xl h-4/5 bg-[linear-gradient(30deg,#050505_70%,#151515)] p-2.5 rounded-4xl shadow-2xl relative flex flex-col justify-center items-center gap-2.5">
        <img
          src="/logo.svg"
          alt="notebook+ logo"
          className="w-15 mx-auto my-5"
        />

        {/* note close btn */}
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

        <div className="w-full flex-1 min-h-0 flex flex-col justify-center items-center gap-2.5 rounded-b-4xl">
          <div className="w-full p-2.5 flex justify-between items-center gap-2.5 bg-white/5 rounded-2xl hover:bg-white/3">
            <div className="w-full flex flex-col justify-between items-start gap-2.5">
              <input
                type="text"
                value={title}
                onChange={onTitleChange}
                className={`text-[#ffb72d] text-3xl w-1/3 leading-none bg-transparent outline-none border-b-2 truncate ${error ? "border-red-500" : "border-transparent"}`}
              />
              <div className="self-start text-white/15 text-lg leading-tight">
                Created at: {created_at}
              </div>
            </div>

            {error && (
              <div className="fixed bottom-2.5 right-2.5 bg-red-500 text-white font-semibold p-2.5 rounded-lg z-50 flex justify-center items-center gap-1 text-sm">
                {error}
                <div onClick={errorClose}>
                  <X strokeWidth={3} className="w-5 cursor-pointer" />
                </div>
              </div>
            )}

            {success && !error && (
              <div className="fixed bottom-2.5 right-2.5 bg-[yellowgreen] text-black font-semibold p-2.5 rounded-lg z-50 flex justify-center items-center gap-1 text-sm">
                {success}
                <div onClick={successClose}>
                  <X strokeWidth={3} className="w-5 cursor-pointer" />
                </div>
              </div>
            )}

            {/* update and close btn */}
            <div className="flex justify-center items-center gap-2.5">
              <button type="button" onClick={onSave}>
                <Save
                  className={`bg-[#1e1e1e] hover:text-[#ffb72d] hover:opacity-100 rounded-full cursor-pointer aspect-square  w-11 h-11 p-2.5 ${isDirty ? "text-[yellowgreen]" : "text-white/10"}`}
                />
              </button>
              <button type="button" onClick={onDelete}>
                <Trash className="bg-[#1e1e1e] hover:text-red-500 hover:opacity-100 text-white/10 rounded-full cursor-pointer w-11 h-11 p-2.5" />
              </button>
            </div>
          </div>

          {/* note detail */}
          <textarea
            value={detail}
            onChange={onDetailChange}
            className="w-full h-full note_scroll overflow-auto text-xl whitespace-pre-wrap p-7.5 bg-transparent outline-none border-none resize-none"
          />
        </div>
      </div>
      <div className="absolute bottom-5">
        <Footer />
      </div>
    </section>
  );
};

export default Noteopen;
