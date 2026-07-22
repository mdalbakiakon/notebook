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
        <div className="w-full flex-1 flex flex-col justify-center items-center gap-2.5">
          <img src="/ghost.svg" alt="" className="h-1/3" />
          <p className="select-none text-lg font-semibold text-white/10">
            Notebook is Empty!
          </p>
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
              className="absolute top-2.5 right-0 p-2.5 font-semibold text-white/15 hover:bg-white/3 bg-white/5 flex justify-center items-center gap-1 text-lg tracking-tight leading-tight rounded-lg cursor-pointer"
            >
              <p className="hidden sm:flex">
                Trash {"("}
                {trashList.length}
                {")"}
              </p>
              <Trash className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-white opacity-10" />
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
