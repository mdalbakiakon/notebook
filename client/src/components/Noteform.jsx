import React, { useState } from "react";
import { X } from "lucide-react";

const Noteform = ({ isFormOpen, onCloseClick }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`form submitted! with title ${title} & detail ${detail}`);
    setTitle("");
    setDetail("");
  };

  return (
    <section
      className={`w-full h-dvh tracking-tight leading-tight bg-black/50 backdrop-blur-xs text-lg z-50 fixed top-0 left-0 justify-center items-center ${isFormOpen ? "flex" : "hidden"} p-5`}
    >
      <div className="bg-[#050505] w-full md:w-2/3 xl:w-1/3 p-3 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3"
        >
          <button onClick={onCloseClick} className="self-end cursor-pointer">
            <X strokeWidth={3} className="w-7.5 h-7.5 hover:text-[#ffb72d]" />
          </button>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            className="w-full p-2.5 rounded-lg placeholder:text-white/15 bg-[#121212] outline-none"
          />
          <textarea
            placeholder="Type here..."
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
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
