import React from "react";
import Notecard from "./Notecard.jsx";
import { Trash } from "lucide-react";

const Notecontainer = ({
  noteList,
  onDelete,
  onNoteOpen,
  trashList,
  onTrashOpen,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white/5 flex-1 rounded-4xl tracking-tight leading-none p-2.5 flex">
      {noteList.length === 0 ? (
        <div className="w-full flex-1 flex flex-col justify-center items-center gap-2.5 relative">
          <img src="/ghost.svg" alt="" className="h-1/3 select select-none" />
          <p className="select-none text-lg font-semibold text-[#1e1e1e]">
            Notebook is Empty!
          </p>

          {trashList.length > 0 && (
            <button
              onClick={onTrashOpen}
              className="absolute top-0 right-0 bg-white/5 hover:bg-white/2.5 rounded-full cursor-pointer"
            >
              <div className="relative w-fit h-fit">
                <Trash className="w-9 h-9 p-1.5 md:w-11 md:h-11 md:p-2.5 rounded-full sm:rounded-lg text-white/15" />

                <span
                  className={`absolute top-0.5 right-0.5 flex items-center justify-center min-w-4.5 h-4.5 px-1 bg-[#ffb72d] rounded-full text-black text-[10px] font-bold leading-none tracking-tight shadow-sm ${trashList.length === 0 ? "hidden" : ""}`}
                >
                  {trashList.length}
                </span>
              </div>
            </button>
          )}
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-5 overflow-hidden">
          <div className="relative w-full flex justify-center items-center">
            <h2 className="text-2xl sm:text-3xl py-2.5 text-white/15 select-none font-bold tracking-tight">
              Your Notes...
            </h2>

            {/* trash btn */}
            <button
              onClick={onTrashOpen}
              className="absolute top-0 right-0 bg-white/5 hover:bg-white/2.5 rounded-full cursor-pointer"
            >
              <div className="relative w-fit h-fit">
                <Trash className="w-9 h-9 p-1.5 md:w-11 md:h-11 md:p-2.5 rounded-full sm:rounded-lg text-white/15" />

                <span
                  className={`absolute top-0.5 right-0.5 flex items-center justify-center min-w-4.5 h-4.5 px-1 bg-[#ffb72d] rounded-full text-black text-[10px] font-bold leading-none tracking-tight shadow-sm ${trashList.length === 0 ? "hidden" : ""}`}
                >
                  {trashList.length}
                </span>
              </div>
            </button>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-start gap-2.5">
            {noteList.map((elem, idx) => {
              return (
                <Notecard
                  key={idx}
                  index={idx}
                  title={elem.title}
                  detail={elem.detail}
                  created_at={elem.created_at}
                  onDelete={onDelete}
                  onNoteOpen={onNoteOpen}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Notecontainer;
