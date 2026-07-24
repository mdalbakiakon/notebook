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
      className={`w-full h-dvh tracking-tight leading-none backdrop-blur-xs text-lg z-50 fixed top-0 left-0 justify-center items-center ${isNoteOpen ? "flex" : "hidden"} p-5 z-90`}
    >
      <div className="w-full max-w-5xl h-4/5 bg-[linear-gradient(-30deg,var(--bg-main-col)_70%,var(--bg-ter-col))] p-2.5 rounded-4xl shadow-2xl relative flex flex-col justify-center items-center gap-2.5">
        <img
          src="/logo.svg"
          alt="notebook+ logo"
          className="w-15 mx-auto my-5 select-none"
        />

        {/* note close btn */}
        <button
          type="button"
          onClick={onNoteClose}
          className="absolute top-5 right-5 cursor-pointer z-50"
        >
          <X
            strokeWidth={3}
            className="w-7.5 h-7.5 text-(--txt-sec-col) hover:text-(--accent-col)"
          />
        </button>

        <div className="w-full flex-1 min-h-0 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-2.5 rounded-b-4xl">
          <div className="w-full lg:w-1/3 p-2.5 flex flex-col justify-between items-start gap-5 bg-(--bg-ter-col) hover:bg-(--bg-sec-col) rounded-2xl">
            <div className="w-full flex flex-col justify-between items-start">
              <input
                type="text"
                value={title}
                onChange={onTitleChange}
                className={`text-(--accent-col) text-2xl md:text-3xl w-full tracking-tight leading-none bg-transparent outline-none border-b-2 truncate ${error ? "border-red-500" : "border-transparent"}`}
              />
              <div className="self-start text-(--txt-sec-col) text-sm md:text-base leading-tight">
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
            <div className="flex justify-center items-center gap-1.5 md:gap-2.5">
              <button type="button" onClick={onSave}>
                <Save
                  className={`bg-(--bg-sec-col) hover:text-(--accent-col) hover:opacity-100 rounded-full cursor-pointer aspect-square  w-9 h-9 p-1.5  md:w-11 md:h-11 md:p-2.5 ${isDirty ? "text-[yellowgreen]" : "text-(--txt-sec-col)"}`}
                />
              </button>
              <button type="button" onClick={onDelete}>
                <Trash className="bg-(--bg-sec-col) hover:text-red-500 hover:opacity-100 text-(--txt-sec-col) rounded-full cursor-pointer w-9 h-9 p-1.5 md:w-11 md:h-11 md:p-2.5" />
              </button>
            </div>
          </div>

          {/* note detail */}
          <textarea
            value={detail}
            onChange={onDetailChange}
            className="w-full h-full note_scroll overflow-auto text-lg md:text-xl whitespace-pre-wrap p-7.5 rounded-4xl text-(--txt-headline-col) lg:rounded-tl-2xl outline-none border-none resize-none bg-(--accent-col)"
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
